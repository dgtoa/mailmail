<?php
namespace MailPoet\Config;
use MailPoet\Models\Newsletter;
use MailPoet\Models\Subscriber;
use MailPoet\Models\SubscriberSegment;
use MailPoet\Newsletter\Url as NewsletterUrl;
use MailPoet\WP\Hooks;

class Shortcodes {
  function __construct() {
  }

  function init() {
    // form widget shortcode
    add_shortcode('mailpoet_form', array($this, 'formWidget'));

    // subscribers count shortcode
    add_shortcode('mailpoet_subscribers_count', array(
      $this, 'getSubscribersCount'
    ));
    add_shortcode('wysija_subscribers_count', array(
      $this, 'getSubscribersCount'
    ));

    // archives page
    add_shortcode('mailpoet_archive', array(
      $this, 'getArchive'
    ));

    Hooks::addFilter('mailpoet_archive_date', array(
      $this, 'renderArchiveDate'
    ), 2);
    Hooks::addFilter('mailpoet_archive_date_day', array(
      $this, 'renderArchiveDateDay'
    ), 2);
    Hooks::addFilter('mailpoet_archive_date_month', array(
      $this, 'renderArchiveDateMonth'
    ), 2);
    Hooks::addFilter('mailpoet_archive_date_year', array(
      $this, 'renderArchiveDateYear'
    ), 2);    
    Hooks::addFilter('mailpoet_archive_subject', array(
      $this, 'renderArchiveSubject'
    ), 2, 3);
    Hooks::addFilter('mailpoet_archive_preheader', array(
      $this, 'renderArchivePreheader'
    ), 2, 3);
  }

  function formWidget($params = array()) {
    // IMPORTANT: fixes conflict with MagicMember
    remove_shortcode('user_list');

    if(isset($params['id']) && (int)$params['id'] > 0) {
      $form_widget = new \MailPoet\Form\Widget();
      return $form_widget->widget(array(
        'form' => (int)$params['id'],
        'form_type' => 'shortcode'
      ));
    }
  }

  function getSubscribersCount($params) {
    if(!empty($params['segments'])) {
      $segment_ids = array_map(function($segment_id) {
        return (int)trim($segment_id);
      }, explode(',', $params['segments']));
    }

    if(empty($segment_ids)) {
      return number_format_i18n(Subscriber::filter('subscribed')->count());
    } else {
      return number_format_i18n(
        SubscriberSegment::whereIn('segment_id', $segment_ids)
          ->select('subscriber_id')->distinct()
          ->filter('subscribed')
          ->findResultSet()->count()
      );
    }
  }

  function getArchive($params) {
    $segment_ids = array();
    if(!empty($params['segments'])) {
      $segment_ids = array_map(function($segment_id) {
        return (int)trim($segment_id);
      }, explode(',', $params['segments']));
    }
    
    $html = '';

    $newsletters = Newsletter::getArchives($segment_ids);
    
    $subscriber = Subscriber::getCurrentWPUser();

    if(empty($newsletters)) {
      return Hooks::applyFilters(
        'mailpoet_archive_no_newsletters',
        __('Oops! There are no newsletters to display.', 'mailpoet')
      );
    } else {
      $title = Hooks::applyFilters('mailpoet_archive_title', '');
      if(!empty($title)) {
        $html .= '<h3 class="mailpoet_archive_title">'.$title.'</h3>';
      }
      $html .= '<ul class="mailpoet_archive">';
      //print_r(count($newsletters));
      foreach($newsletters as $newsletter) {
        $queue = $newsletter->queue()->findOne();
        
        $post_id = $GLOBALS['wpdb']->get_row( 'SELECT * FROM kias.wp_mailpoet_newsletter_posts where created_at="' . $newsletter->created_at . '"' )->post_id;
        $post = get_post($post_id);
        $thumbnail_url = $GLOBALS['wpdb']->get_row( 'SELECT * FROM kias.wp_mailpoet_newsletters where id="' . $newsletter->id . '"' )->thumbnail_url;
        $thumbnail_image = wp_get_image_editor($thumbnail_url);
        //if(!is_wp_error($thumbnail_image))
            //print_r("ddd");
            //$thumbnail_image->resize(150, 150, true);
        $thumbnail_url_name = '';
        $arr_thumbnail_url_name = split("\.", $thumbnail_url);
        for($i=0; $i<sizeof($arr_thumbnail_url_name)-1;$i++) {
             $thumbnail_url_name .=  $arr_thumbnail_url_name[$i];
             if($i<sizeof($arr_thumbnail_url_name)-2)
                $thumbnail_url_name .= '.';
        }
        //print_r($thumbnail_url_name . "=========="); 
        
        $html .= '<li>'.   
          '<div class="mailpoet_archive_date">'. 
            '<p class="mailpoet_archive_date_day" >' . Hooks::applyFilters('mailpoet_archive_date_day', $newsletter) . ' </p>' .
            '<p class="mailpoet_archive_date_month">' . Hooks::applyFilters('mailpoet_archive_date_month', $newsletter) . '</p> 
          </div>
          <div class="mailpoet_archive_thumbnail">';
          $html.= ($newsletter->type == 'notification_history') ? 
                get_the_post_thumbnail($post, 'thevoux-masonry-wide') : 
                '<img width="400" height="225" src="'.$thumbnail_url_name.'-400x225.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" sizes="(max-width: 150px) 100vw, 150px">';
          $html .= '</div>';
          $html.= '<div class="newsletter-title-area">
          <div class="mailpoet_archive_preheader">';
          $html.= ($newsletter->type == 'notification_history') ? get_the_category($post_id)[0]->name  : Hooks::applyFilters('mailpoet_archive_preheader', $newsletter, $subscriber, $queue) ;
          $html.=  '</div>
          <div class="mailpoet_archive_subject">';
          $html.= ($newsletter->type == 'notification_history') ? Hooks::applyFilters('mailpoet_archive_subject', $newsletter, $subscriber, $queue) : $newsletter->subject;
          $html.= '</div>
          </div>
        </li>';
      }
      $html .= '</ul>';

    }
    return $html;
  }

  function renderArchiveDate($newsletter) {
    return date_i18n(
      get_option('date_format'),
      strtotime($newsletter->processed_at)
    );
  }

  function renderArchiveDateDay($newsletter) {
    return date_i18n(
      'd',
      strtotime($newsletter->processed_at)
    );
  }
   function renderArchiveDateMonth($newsletter) {
    return date_i18n(
      'F',
      strtotime($newsletter->processed_at)
    );
  }
  function renderArchiveDateYear($newsletter) {
    return date_i18n(
      'y',
      strtotime($newsletter->processed_at)
    );
  }
  
  function renderArchiveSubject($newsletter, $subscriber, $queue) {
    $preview_url = NewsletterUrl::getViewInBrowserUrl(
      NewsletterUrl::TYPE_ARCHIVE,
      $newsletter,
      $subscriber,
      $queue
    );
    return '<a href="'.esc_attr($preview_url).'" target="_blank" title="'
      .esc_attr(__('Preview in a new tab', 'mailpoet')).'">'
      .esc_attr($newsletter->newsletter_rendered_subject).
    '</a>';
  }
  function renderArchivePreheader($newsletter, $subscriber, $queue) {
    $preview_url = NewsletterUrl::getViewInBrowserUrl(
      NewsletterUrl::TYPE_ARCHIVE,
      $newsletter,
      $subscriber,
      $queue
    );
    return 
      esc_attr($newsletter->preheader);
      //print_r($newsletter);
  }
  
}
