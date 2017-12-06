webpackJsonp([0],{

/***/ 494:
/***/ function(module, exports) {

	//Types of elements found in the DOM
	module.exports = {
		Text: "text", //Text
		Directive: "directive", //<? ... ?>
		Comment: "comment", //<!-- ... -->
		Script: "script", //<script> tags
		Style: "style", //<style> tags
		Tag: "tag", //Any tag
		CDATA: "cdata", //<![CDATA[ ... ]]>

		isTag: function(elem){
			return elem.type === "tag" || elem.type === "script" || elem.type === "style";
		}
	};

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(428);
	__webpack_require__(536);
	__webpack_require__(540);
	__webpack_require__(542);
	__webpack_require__(545);
	__webpack_require__(549);
	__webpack_require__(550);
	module.exports = __webpack_require__(554);


/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _jquery = __webpack_require__(275);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var _formFieldsSelectionJsx = __webpack_require__(288);

	var _formFieldsSelectionJsx2 = _interopRequireDefault(_formFieldsSelectionJsx);

	var columns = [{
	  name: 'email',
	  label: _mailpoet2['default'].I18n.t('subscriber'),
	  sortable: true
	}, {
	  name: 'status',
	  label: _mailpoet2['default'].I18n.t('status'),
	  sortable: true
	}, {
	  name: 'segments',
	  label: _mailpoet2['default'].I18n.t('lists')
	}, {
	  name: 'created_at',
	  label: _mailpoet2['default'].I18n.t('subscribedOn'),
	  sortable: true
	}, {
	  name: 'updated_at',
	  label: _mailpoet2['default'].I18n.t('lastModifiedOn'),
	  sortable: true
	}];

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSubscriberTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSubscribersTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSubscriberDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSubscribersDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSubscriberRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSubscribersRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onNoItemsFound: function onNoItemsFound(group) {
	    if (group === 'bounced' && !window.mailpoet_premium_active) {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'p',
	          null,
	          _mailpoet2['default'].I18n.t('bouncedSubscribersHelp')
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: 'admin.php?page=mailpoet-premium', className: 'button-primary' },
	            _mailpoet2['default'].I18n.t('bouncedSubscribersPremiumButtonText')
	          )
	        )
	      );
	    }
	    // use default message
	    return false;
	  }
	};

	var bulk_actions = [{
	  name: 'moveToList',
	  label: _mailpoet2['default'].I18n.t('moveToList'),
	  onSelect: function onSelect() {
	    var field = {
	      id: 'move_to_segment',
	      api_version: window.mailpoet_api_version,
	      endpoint: 'segments',
	      filter: function filter(segment) {
	        return !!(!segment.deleted_at && segment.type === 'default');
	      }
	    };

	    return _react2['default'].createElement(_formFieldsSelectionJsx2['default'], { field: field });
	  },
	  getData: function getData() {
	    return {
	      segment_id: ~ ~(0, _jquery2['default'])('#move_to_segment').val()
	    };
	  },
	  onSuccess: function onSuccess(response) {
	    _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('multipleSubscribersMovedToList').replace('%$1d', (~ ~response.meta.count).toLocaleString()).replace('%$2s', response.meta.segment));
	  }
	}, {
	  name: 'addToList',
	  label: _mailpoet2['default'].I18n.t('addToList'),
	  onSelect: function onSelect() {
	    var field = {
	      id: 'add_to_segment',
	      api_version: window.mailpoet_api_version,
	      endpoint: 'segments',
	      filter: function filter(segment) {
	        return !!(!segment.deleted_at && segment.type === 'default');
	      }
	    };

	    return _react2['default'].createElement(_formFieldsSelectionJsx2['default'], { field: field });
	  },
	  getData: function getData() {
	    return {
	      segment_id: ~ ~(0, _jquery2['default'])('#add_to_segment').val()
	    };
	  },
	  onSuccess: function onSuccess(response) {
	    _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('multipleSubscribersAddedToList').replace('%$1d', (~ ~response.meta.count).toLocaleString()).replace('%$2s', response.meta.segment));
	  }
	}, {
	  name: 'removeFromList',
	  label: _mailpoet2['default'].I18n.t('removeFromList'),
	  onSelect: function onSelect() {
	    var field = {
	      id: 'remove_from_segment',
	      api_version: window.mailpoet_api_version,
	      endpoint: 'segments',
	      filter: function filter(segment) {
	        return !!(segment.type === 'default');
	      }
	    };

	    return _react2['default'].createElement(_formFieldsSelectionJsx2['default'], { field: field });
	  },
	  getData: function getData() {
	    return {
	      segment_id: ~ ~(0, _jquery2['default'])('#remove_from_segment').val()
	    };
	  },
	  onSuccess: function onSuccess(response) {
	    _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('multipleSubscribersRemovedFromList').replace('%$1d', (~ ~response.meta.count).toLocaleString()).replace('%$2s', response.meta.segment));
	  }
	}, {
	  name: 'removeFromAllLists',
	  label: _mailpoet2['default'].I18n.t('removeFromAllLists'),
	  onSuccess: function onSuccess(response) {
	    _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('multipleSubscribersRemovedFromAllLists').replace('%$1d', (~ ~response.meta.count).toLocaleString()));
	  }
	}, {
	  name: 'sendConfirmationEmail',
	  label: _mailpoet2['default'].I18n.t('resendConfirmationEmail'),
	  onSuccess: function onSuccess(response) {
	    _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('multipleConfirmationEmailsSent').replace('%$1d', (~ ~response.meta.count).toLocaleString()));
	  }
	}, {
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var item_actions = [{
	  name: 'edit',
	  label: _mailpoet2['default'].I18n.t('edit'),
	  link: function link(subscriber) {
	    return _react2['default'].createElement(
	      _reactRouter.Link,
	      { to: '/edit/' + subscriber.id },
	      _mailpoet2['default'].I18n.t('edit')
	    );
	  }
	}, {
	  name: 'trash',
	  display: function display(subscriber) {
	    return !!(~ ~subscriber.wp_user_id === 0);
	  }
	}];

	var SubscriberList = _react2['default'].createClass({
	  displayName: 'SubscriberList',

	  getSegmentFromId: function getSegmentFromId(segment_id) {
	    var result = false;
	    window.mailpoet_segments.map(function (segment) {
	      if (segment.id === segment_id) {
	        result = segment;
	      }
	    });
	    return result;
	  },
	  renderItem: function renderItem(subscriber, actions) {
	    var _this = this;

	    var row_classes = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions', 'column-username');

	    var status = '';

	    switch (subscriber.status) {
	      case 'subscribed':
	        status = _mailpoet2['default'].I18n.t('subscribed');
	        break;

	      case 'unconfirmed':
	        status = _mailpoet2['default'].I18n.t('unconfirmed');
	        break;

	      case 'unsubscribed':
	        status = _mailpoet2['default'].I18n.t('unsubscribed');
	        break;

	      case 'bounced':
	        status = _mailpoet2['default'].I18n.t('bounced');
	        break;
	    }

	    var segments = false;

	    // Subscriptions
	    if (subscriber.subscriptions.length > 0) {
	      (function () {
	        var subscribed_segments = [];

	        subscriber.subscriptions.map(function (subscription) {
	          var segment = _this.getSegmentFromId(subscription.segment_id);
	          if (segment === false) return;
	          if (subscription.status === 'subscribed') {
	            subscribed_segments.push(segment.name);
	          }
	        });

	        segments = _react2['default'].createElement(
	          'span',
	          null,
	          subscribed_segments.join(', ')
	        );
	      })();
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: row_classes },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            {
	              className: 'row-title',
	              to: '/edit/' + subscriber.id
	            },
	            subscriber.email
	          )
	        ),
	        _react2['default'].createElement(
	          'p',
	          { style: { margin: 0 } },
	          subscriber.first_name,
	          ' ',
	          subscriber.last_name
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('status') },
	        status
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('lists') },
	        segments
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('subscribedOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(subscriber.created_at)
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('lastModifiedOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(subscriber.updated_at)
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          {
	            className: 'page-title-action',
	            to: '/new'
	          },
	          _mailpoet2['default'].I18n.t('new')
	        ),
	        _react2['default'].createElement(
	          'a',
	          {
	            className: 'page-title-action',
	            href: '?page=mailpoet-import#step1'
	          },
	          _mailpoet2['default'].I18n.t('import')
	        ),
	        _react2['default'].createElement(
	          'a',
	          {
	            id: 'mailpoet_export_button',
	            className: 'page-title-action',
	            href: '?page=mailpoet-export'
	          },
	          _mailpoet2['default'].I18n.t('export')
	        )
	      ),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        endpoint: 'subscribers',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: item_actions,
	        messages: messages,
	        sort_by: 'created_at',
	        sort_order: 'desc'
	      })
	    );
	  }
	});

	module.exports = SubscriberList;

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	if (!global["MailPoetLib"]) global["MailPoetLib"] = {};
	module.exports = global["MailPoetLib"]["Form"] = __webpack_require__(291);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(181), __webpack_require__(276), __webpack_require__(292), __webpack_require__(422)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, Router, MailPoet, Form, ReactStringReplace) {
	  var fields = [{
	    name: 'email',
	    label: MailPoet.I18n.t('email'),
	    type: 'text',
	    disabled: function disabled(subscriber) {
	      return ~ ~(subscriber.wp_user_id > 0);
	    }
	  }, {
	    name: 'first_name',
	    label: MailPoet.I18n.t('firstname'),
	    type: 'text',
	    disabled: function disabled(subscriber) {
	      return ~ ~(subscriber.wp_user_id > 0);
	    }
	  }, {
	    name: 'last_name',
	    label: MailPoet.I18n.t('lastname'),
	    type: 'text',
	    disabled: function disabled(subscriber) {
	      return ~ ~(subscriber.wp_user_id > 0);
	    }
	  }, {
	    name: 'status',
	    label: MailPoet.I18n.t('status'),
	    type: 'select',
	    values: {
	      subscribed: MailPoet.I18n.t('subscribed'),
	      unconfirmed: MailPoet.I18n.t('unconfirmed'),
	      unsubscribed: MailPoet.I18n.t('unsubscribed'),
	      bounced: MailPoet.I18n.t('bounced')
	    },
	    filter: function filter(subscriber, value) {
	      if (~ ~subscriber.wp_user_id > 0 && value === 'unconfirmed') {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    name: 'segments',
	    label: MailPoet.I18n.t('lists'),
	    type: 'selection',
	    placeholder: MailPoet.I18n.t('selectList'),
	    api_version: window.mailpoet_api_version,
	    endpoint: 'segments',
	    multiple: true,
	    selected: function selected(subscriber) {
	      if (Array.isArray(subscriber.subscriptions) === false) {
	        return null;
	      }

	      return subscriber.subscriptions.map(function (subscription) {
	        if (subscription.status === 'subscribed') {
	          return subscription.segment_id;
	        }
	      });
	    },
	    filter: function filter(segment) {
	      return !!(!segment.deleted_at && segment.type === 'default');
	    },
	    getLabel: function getLabel(segment) {
	      return segment.name + ' (' + segment.subscribers + ')';
	    },
	    getSearchLabel: function getSearchLabel(segment, subscriber) {
	      var label = '';

	      if (subscriber.subscriptions !== undefined) {
	        subscriber.subscriptions.map(function (subscription) {
	          if (segment.id === subscription.segment_id) {
	            label = segment.name;

	            if (subscription.status === 'unsubscribed') {
	              var unsubscribed_at = MailPoet.Date.format(subscription.updated_at);
	              label += ' (%$1s)'.replace('%$1s', MailPoet.I18n.t('unsubscribedOn').replace('%$1s', unsubscribed_at));
	            }
	          }
	        });
	      }
	      return label;
	    }
	  }];

	  var custom_fields = window.mailpoet_custom_fields || [];
	  custom_fields.map(function (custom_field) {
	    var field = {
	      name: 'cf_' + custom_field.id,
	      label: custom_field.name,
	      type: custom_field.type
	    };
	    if (custom_field.params) {
	      field.params = custom_field.params;
	    }

	    if (custom_field.params.values) {
	      field.values = custom_field.params.values;
	    }

	    // add placeholders for selects (date, select)
	    switch (custom_field.type) {
	      case 'date':
	        field.year_placeholder = MailPoet.I18n.t('year');
	        field.month_placeholder = MailPoet.I18n.t('month');
	        field.day_placeholder = MailPoet.I18n.t('day');
	        break;

	      case 'select':
	        field.placeholder = '-';
	        break;
	    }

	    fields.push(field);
	  });

	  var messages = {
	    onUpdate: function onUpdate() {
	      MailPoet.Notice.success(MailPoet.I18n.t('subscriberUpdated'));
	    },
	    onCreate: function onCreate() {
	      MailPoet.Notice.success(MailPoet.I18n.t('subscriberAdded'));
	      MailPoet.trackEvent('Subscribers > Add new', {
	        'MailPoet Free version': window.mailpoet_version
	      });
	    }
	  };

	  var beforeFormContent = function beforeFormContent(subscriber) {
	    if (~ ~subscriber.wp_user_id > 0) {
	      return React.createElement(
	        'p',
	        { className: 'description' },
	        ReactStringReplace(MailPoet.I18n.t('WPUserEditNotice'), /\[link\](.*?)\[\/link\]/g, function (match, i) {
	          return React.createElement(
	            'a',
	            {
	              key: i,
	              href: 'user-edit.php?user_id=' + subscriber.wp_user_id
	            },
	            match
	          );
	        })
	      );
	    }
	  };

	  var afterFormContent = function afterFormContent() {
	    return React.createElement(
	      'p',
	      { className: 'description' },
	      React.createElement(
	        'strong',
	        null,
	        MailPoet.I18n.t('tip')
	      ),
	      ' ',
	      MailPoet.I18n.t('customFieldsTip')
	    );
	  };

	  var Link = Router.Link;

	  var SubscriberForm = React.createClass({
	    displayName: 'SubscriberForm',

	    render: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          MailPoet.I18n.t('subscriber'),
	          React.createElement(
	            Link,
	            { className: 'page-title-action', to: '/' },
	            MailPoet.I18n.t('backToList')
	          )
	        ),
	        React.createElement(Form, {
	          endpoint: 'subscribers',
	          fields: fields,
	          params: this.props.params,
	          messages: messages,
	          beforeFormContent: beforeFormContent,
	          afterFormContent: afterFormContent
	        })
	      );
	    }
	  });

	  return SubscriberForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(181);

	var _history = __webpack_require__(244);

	var _wpJsHooks = __webpack_require__(429);

	var _wpJsHooks2 = _interopRequireDefault(_wpJsHooks);

	var _newslettersTypesJsx = __webpack_require__(431);

	var _newslettersTypesJsx2 = _interopRequireDefault(_newslettersTypesJsx);

	var _newslettersTemplatesJsx = __webpack_require__(434);

	var _newslettersTemplatesJsx2 = _interopRequireDefault(_newslettersTemplatesJsx);

	var _newslettersSendJsx = __webpack_require__(517);

	var _newslettersSendJsx2 = _interopRequireDefault(_newslettersSendJsx);

	var _newslettersTypesStandardJsx = __webpack_require__(525);

	var _newslettersTypesStandardJsx2 = _interopRequireDefault(_newslettersTypesStandardJsx);

	var _newslettersTypesNotificationNotificationJsx = __webpack_require__(526);

	var _newslettersTypesNotificationNotificationJsx2 = _interopRequireDefault(_newslettersTypesNotificationNotificationJsx);

	var _newslettersListingsStandardJsx = __webpack_require__(527);

	var _newslettersListingsStandardJsx2 = _interopRequireDefault(_newslettersListingsStandardJsx);

	var _newslettersListingsWelcomeJsx = __webpack_require__(533);

	var _newslettersListingsWelcomeJsx2 = _interopRequireDefault(_newslettersListingsWelcomeJsx);

	var _newslettersListingsNotificationJsx = __webpack_require__(534);

	var _newslettersListingsNotificationJsx2 = _interopRequireDefault(_newslettersListingsNotificationJsx);

	var _newslettersListingsNotification_historyJsx = __webpack_require__(535);

	var _newslettersListingsNotification_historyJsx2 = _interopRequireDefault(_newslettersListingsNotification_historyJsx);

	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return this.props.children;
	  }
	});

	var container = document.getElementById('newsletters_container');

	if (container) {
	  var extra_routes = [];
	  extra_routes = _wpJsHooks2['default'].applyFilters('mailpoet_newsletters_before_router', extra_routes);

	  var mailpoet_listing = _reactDom2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2['default'].createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2['default'].createElement(_reactRouter.IndexRedirect, { to: 'standard' }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'standard(/)**', params: { tab: 'standard' }, component: _newslettersListingsStandardJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'welcome(/)**', component: _newslettersListingsWelcomeJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'notification/history/:parent_id(/)**',
	        component: _newslettersListingsNotification_historyJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'notification(/)**', component: _newslettersListingsNotificationJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'new', component: _newslettersTypesJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'new/standard', component: _newslettersTypesStandardJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'new/notification', component: _newslettersTypesNotificationNotificationJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { name: 'template', path: 'template/:id', component: _newslettersTemplatesJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'send/:id', component: _newslettersSendJsx2['default'] }),
	      extra_routes.map(function (rt) {
	        return _react2['default'].createElement(_reactRouter.Route, { key: rt.path, path: rt.path, component: rt.component });
	      })
	    )
	  ), container);

	  window.mailpoet_listing = mailpoet_listing;
	}
	/* Listings */ /* Newsletter: type selection */ /* New newsletter: types */ /* Template selection */ /* Sending options */ /* Extra routes */

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(276), __webpack_require__(429), __webpack_require__(181), __webpack_require__(432)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, MailPoet, Hooks, Router, Breadcrumb) {
	  var NewsletterTypes = React.createClass({
	    displayName: 'NewsletterTypes',

	    contextTypes: {
	      router: React.PropTypes.object.isRequired
	    },
	    setupNewsletter: function setupNewsletter(type) {
	      if (type !== undefined) {
	        this.context.router.push('/new/' + type);
	        MailPoet.trackEvent('Emails > Type selected', {
	          'MailPoet Free version': window.mailpoet_version,
	          'Email type': type
	        });
	      }
	    },
	    createNewsletter: function createNewsletter(type) {
	      var _this = this;

	      MailPoet.trackEvent('Emails > Type selected', {
	        'MailPoet Free version': window.mailpoet_version,
	        'Email type': type
	      });
	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'create',
	        data: {
	          type: type,
	          subject: MailPoet.I18n.t('draftNewsletterTitle')
	        }
	      }).done(function (response) {
	        _this.context.router.push('/template/' + response.data.id);
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    render: function render() {
	      var types = [{
	        id: 'standard',
	        title: MailPoet.I18n.t('regularNewsletterTypeTitle'),
	        description: MailPoet.I18n.t('regularNewsletterTypeDescription'),
	        action: (function () {
	          return React.createElement(
	            'a',
	            { className: 'button button-primary', onClick: this.createNewsletter.bind(null, 'standard') },
	            MailPoet.I18n.t('create')
	          );
	        }).bind(this)()
	      }, {
	        id: 'welcome',
	        title: MailPoet.I18n.t('welcomeNewsletterTypeTitle'),
	        description: MailPoet.I18n.t('welcomeNewsletterTypeDescription'),
	        action: (function () {
	          return React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'a',
	              { href: '?page=mailpoet-premium', target: '_blank' },
	              MailPoet.I18n.t('getPremiumVersion')
	            )
	          );
	        })()
	      }, {
	        id: 'notification',
	        title: MailPoet.I18n.t('postNotificationNewsletterTypeTitle'),
	        description: MailPoet.I18n.t('postNotificationNewsletterTypeDescription'),
	        action: (function () {
	          return React.createElement(
	            'a',
	            { className: 'button button-primary', onClick: this.setupNewsletter.bind(null, 'notification') },
	            MailPoet.I18n.t('setUp')
	          );
	        }).bind(this)()
	      }];

	      types = Hooks.applyFilters('mailpoet_newsletters_types', types, this);

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          MailPoet.I18n.t('pickCampaignType')
	        ),
	        React.createElement(Breadcrumb, { step: 'type' }),
	        React.createElement(
	          'ul',
	          { className: 'mailpoet_boxes clearfix' },
	          types.map(function (type, index) {
	            return React.createElement(
	              'li',
	              { key: index, 'data-type': type.id },
	              React.createElement(
	                'div',
	                null,
	                React.createElement('div', { className: 'mailpoet_thumbnail' }),
	                React.createElement(
	                  'div',
	                  { className: 'mailpoet_description' },
	                  React.createElement(
	                    'h3',
	                    null,
	                    type.title
	                  ),
	                  React.createElement(
	                    'p',
	                    null,
	                    type.description
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { className: 'mailpoet_actions' },
	                  type.action
	                )
	              )
	            );
	          }, this)
	        )
	      );
	    }
	  });

	  return NewsletterTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(280), __webpack_require__(276), __webpack_require__(181), __webpack_require__(277), __webpack_require__(432), __webpack_require__(435)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, MailPoet, Router, classNames, Breadcrumb, HelpTooltip) {

	  var ImportTemplate = React.createClass({
	    displayName: 'ImportTemplate',

	    saveTemplate: function saveTemplate(_saveTemplate) {
	      var _this = this;

	      var template = _saveTemplate;

	      // Stringify to enable transmission of primitive non-string value types
	      if (!_.isUndefined(template.body)) {
	        template.body = JSON.stringify(template.body);
	      }

	      MailPoet.Modal.loading(true);

	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletterTemplates',
	        action: 'save',
	        data: template
	      }).always(function () {
	        MailPoet.Modal.loading(false);
	      }).done(function (response) {
	        _this.props.onImport(response.data);
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    handleSubmit: function handleSubmit(e) {
	      e.preventDefault();

	      if (_.size(this.refs.templateFile.files) <= 0) return false;

	      var file = _.first(this.refs.templateFile.files);
	      var reader = new FileReader();
	      var saveTemplate = this.saveTemplate;

	      reader.onload = function (e) {
	        try {
	          saveTemplate(JSON.parse(e.target.result));
	          MailPoet.trackEvent('Emails > Template imported', {
	            'MailPoet Free version': window.mailpoet_version
	          });
	        } catch (err) {
	          MailPoet.Notice.error(MailPoet.I18n.t('templateFileMalformedError'));
	        }
	      };

	      reader.readAsText(file);
	    },
	    render: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          MailPoet.I18n.t('importTemplateTitle'),
	          ' ',
	          React.createElement(HelpTooltip, {
	            tooltip: MailPoet.I18n.t('helpTooltipTemplateUpload'),
	            place: 'right',
	            className: 'tooltip-help-import-template'
	          })
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.handleSubmit },
	          React.createElement('input', { type: 'file', placeholder: MailPoet.I18n.t('selectJsonFileToUpload'), ref: 'templateFile' }),
	          React.createElement(
	            'p',
	            { className: 'submit' },
	            React.createElement('input', {
	              className: 'button button-primary',
	              type: 'submit',
	              value: MailPoet.I18n.t('upload') })
	          )
	        )
	      );
	    }
	  });

	  var NewsletterTemplates = React.createClass({
	    displayName: 'NewsletterTemplates',

	    getInitialState: function getInitialState() {
	      return {
	        loading: false,
	        templates: []
	      };
	    },
	    componentDidMount: function componentDidMount() {
	      this.getTemplates();
	    },
	    getTemplates: function getTemplates() {
	      var _this2 = this;

	      this.setState({ loading: true });

	      MailPoet.Modal.loading(true);

	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletterTemplates',
	        action: 'getAll'
	      }).always(function () {
	        MailPoet.Modal.loading(false);
	      }).done(function (response) {
	        if (_this2.isMounted()) {
	          if (response.data.length === 0) {
	            response.data = [{
	              name: MailPoet.I18n.t('mailpoetGuideTemplateTitle'),
	              description: MailPoet.I18n.t('mailpoetGuideTemplateDescription'),
	              readonly: '1'
	            }];
	          }
	          _this2.setState({
	            templates: response.data,
	            loading: false
	          });
	        }
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    handleSelectTemplate: function handleSelectTemplate(template) {
	      var body = template.body;

	      // Stringify to enable transmission of primitive non-string value types
	      if (!_.isUndefined(body)) {
	        body = JSON.stringify(body);
	      }

	      MailPoet.trackEvent('Emails > Template selected', {
	        'MailPoet Free version': window.mailpoet_version,
	        'Email name': template.name
	      });

	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'save',
	        data: {
	          id: this.props.params.id,
	          body: body
	        }
	      }).done(function (response) {
	        // TODO: Move this URL elsewhere
	        window.location = 'admin.php?page=mailpoet-newsletter-editor&id=' + response.data.id;
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    handleDeleteTemplate: function handleDeleteTemplate(template) {
	      var _this3 = this;

	      this.setState({ loading: true });
	      if (window.confirm(MailPoet.I18n.t('confirmTemplateDeletion').replace('%$1s', template.name))) {
	        MailPoet.Ajax.post({
	          api_version: window.mailpoet_api_version,
	          endpoint: 'newsletterTemplates',
	          action: 'delete',
	          data: {
	            id: template.id
	          }
	        }).done(function () {
	          _this3.getTemplates();
	        }).fail(function (response) {
	          if (response.errors.length > 0) {
	            MailPoet.Notice.error(response.errors.map(function (error) {
	              return error.message;
	            }), { scroll: true });
	          }
	        });
	      } else {
	        this.setState({ loading: false });
	      }
	    },
	    handleShowTemplate: function handleShowTemplate(template) {
	      MailPoet.Modal.popup({
	        title: template.name,
	        template: '<div class="mailpoet_boxes_preview" style="background-color: {{ body.globalStyles.body.backgroundColor }}"><img src="{{ thumbnail }}" /></div>',
	        data: template
	      });
	    },
	    handleTemplateImport: function handleTemplateImport() {
	      this.getTemplates();
	    },
	    render: function render() {
	      var _this4 = this;

	      var templates = this.state.templates.map(function (template, index) {
	        var deleteLink = React.createElement(
	          'div',
	          { className: 'mailpoet_delete' },
	          React.createElement(
	            'a',
	            {
	              href: 'javascript:;',
	              onClick: _this4.handleDeleteTemplate.bind(null, template)
	            },
	            MailPoet.I18n.t('delete')
	          )
	        );
	        var thumbnail = '';

	        if (typeof template.thumbnail === 'string' && template.thumbnail.length > 0) {
	          thumbnail = React.createElement(
	            'a',
	            { href: 'javascript:;', onClick: _this4.handleShowTemplate.bind(null, template) },
	            React.createElement('img', { src: template.thumbnail }),
	            React.createElement('div', { className: 'mailpoet_overlay' })
	          );
	        }

	        return React.createElement(
	          'li',
	          { key: 'template-' + index },
	          React.createElement(
	            'div',
	            { className: 'mailpoet_thumbnail' },
	            thumbnail
	          ),
	          React.createElement(
	            'div',
	            { className: 'mailpoet_description' },
	            React.createElement(
	              'h3',
	              null,
	              template.name
	            ),
	            React.createElement(
	              'p',
	              null,
	              template.description
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'mailpoet_actions' },
	            React.createElement(
	              'a',
	              {
	                className: 'button button-secondary',
	                onClick: _this4.handleShowTemplate.bind(null, template)
	              },
	              MailPoet.I18n.t('preview')
	            ),
	            ' ',
	            React.createElement(
	              'a',
	              {
	                className: 'button button-primary',
	                onClick: _this4.handleSelectTemplate.bind(null, template)
	              },
	              MailPoet.I18n.t('select')
	            )
	          ),
	          template.readonly === '1' ? false : deleteLink
	        );
	      });

	      var boxClasses = classNames('mailpoet_boxes', 'clearfix', { mailpoet_boxes_loading: this.state.loading });

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          MailPoet.I18n.t('selectTemplateTitle')
	        ),
	        React.createElement(Breadcrumb, { step: 'template' }),
	        React.createElement(
	          'ul',
	          { className: boxClasses },
	          templates
	        ),
	        React.createElement(ImportTemplate, { onImport: this.handleTemplateImport })
	      );
	    }
	  });

	  return NewsletterTemplates;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactTooltip = __webpack_require__(436);

	var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

	var _reactHtmlParser = __webpack_require__(449);

	var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

	function Tooltip(props) {
	  var tooltipId = props.tooltipId;
	  var tooltip = props.tooltip;
	  // tooltip ID must be unique, defaults to tooltip text
	  if (!props.tooltipId && typeof props.tooltip === 'string') {
	    tooltipId = props.tooltip;
	  }

	  if (typeof props.tooltip === 'string') {
	    tooltip = _react2['default'].createElement(
	      'span',
	      {
	        style: {
	          pointerEvents: 'all',
	          maxWidth: '400',
	          display: 'inline-block'
	        }
	      },
	      (0, _reactHtmlParser2['default'])(props.tooltip)
	    );
	  }

	  return _react2['default'].createElement(
	    'span',
	    { className: props.className },
	    _react2['default'].createElement('span', {
	      style: {
	        cursor: 'pointer'
	      },
	      className: 'tooltip dashicons dashicons-editor-help',
	      'data-event': 'click',
	      'data-tip': true,
	      'data-for': tooltipId
	    }),
	    _react2['default'].createElement(
	      _reactTooltip2['default'],
	      {
	        globalEventOff: 'click',
	        multiline: true,
	        id: tooltipId,
	        efect: 'solid',
	        place: props.place
	      },
	      tooltip
	    )
	  );
	}

	Tooltip.propTypes = {
	  tooltipId: _react2['default'].PropTypes.string,
	  tooltip: _react2['default'].PropTypes.node.isRequired,
	  place: _react2['default'].PropTypes.string,
	  className: _react2['default'].PropTypes.string
	};

	Tooltip.defaultProps = {
	  tooltipId: undefined,
	  place: undefined,
	  className: undefined
	};

	module.exports = Tooltip;

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HtmlParser = __webpack_require__(450);

	var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _HtmlParser2.default;

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = HtmlParser;

	var _htmlparser = __webpack_require__(451);

	var _htmlparser2 = _interopRequireDefault(_htmlparser);

	var _ProcessNodes = __webpack_require__(504);

	var _ProcessNodes2 = _interopRequireDefault(_ProcessNodes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Parses a HTML string and returns a list of React components generated from it
	 *
	 * @param {String} html The HTML to convert into React components
	 * @returns {Array} List of top level React elements
	 */
	function HtmlParser(html) {
	  var nodes = _htmlparser2.default.parseDOM(html);
	  return (0, _ProcessNodes2.default)(nodes);
	}

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	var Parser = __webpack_require__(452),
	    DomHandler = __webpack_require__(461);

	function defineProp(name, value){
		delete module.exports[name];
		module.exports[name] = value;
		return value;
	}

	module.exports = {
		Parser: Parser,
		Tokenizer: __webpack_require__(453),
		ElementType: __webpack_require__(462),
		DomHandler: DomHandler,
		get FeedHandler(){
			return defineProp("FeedHandler", __webpack_require__(465));
		},
		get Stream(){
			return defineProp("Stream", __webpack_require__(466));
		},
		get WritableStream(){
			return defineProp("WritableStream", __webpack_require__(467));
		},
		get ProxyHandler(){
			return defineProp("ProxyHandler", __webpack_require__(490));
		},
		get DomUtils(){
			return defineProp("DomUtils", __webpack_require__(491));
		},
		get CollectingHandler(){
			return defineProp("CollectingHandler", __webpack_require__(503));
		},
		// For legacy support
		DefaultHandler: DomHandler,
		get RssHandler(){
			return defineProp("RssHandler", this.FeedHandler);
		},
		//helper methods
		parseDOM: function(data, options){
			var handler = new DomHandler(options);
			new Parser(handler, options).end(data);
			return handler.dom;
		},
		parseFeed: function(feed, options){
			var handler = new module.exports.FeedHandler(options);
			new Parser(handler, options).end(feed);
			return handler.dom;
		},
		createDomStream: function(cb, options, elementCb){
			var handler = new DomHandler(cb, options, elementCb);
			return new Parser(handler, options);
		},
		// List of all events that the parser emits
		EVENTS: { /* Format: eventname: number of arguments */
			attribute: 2,
			cdatastart: 0,
			cdataend: 0,
			text: 1,
			processinginstruction: 2,
			comment: 1,
			commentend: 0,
			closetag: 1,
			opentag: 2,
			opentagname: 1,
			error: 1,
			end: 0
		}
	};


/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	var Tokenizer = __webpack_require__(453);

	/*
		Options:

		xmlMode: Disables the special behavior for script/style tags (false by default)
		lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
		lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
	*/

	/*
		Callbacks:

		oncdataend,
		oncdatastart,
		onclosetag,
		oncomment,
		oncommentend,
		onerror,
		onopentag,
		onprocessinginstruction,
		onreset,
		ontext
	*/

	var formTags = {
		input: true,
		option: true,
		optgroup: true,
		select: true,
		button: true,
		datalist: true,
		textarea: true
	};

	var openImpliesClose = {
		tr      : { tr:true, th:true, td:true },
		th      : { th:true },
		td      : { thead:true, th:true, td:true },
		body    : { head:true, link:true, script:true },
		li      : { li:true },
		p       : { p:true },
		h1      : { p:true },
		h2      : { p:true },
		h3      : { p:true },
		h4      : { p:true },
		h5      : { p:true },
		h6      : { p:true },
		select  : formTags,
		input   : formTags,
		output  : formTags,
		button  : formTags,
		datalist: formTags,
		textarea: formTags,
		option  : { option:true },
		optgroup: { optgroup:true }
	};

	var voidElements = {
		__proto__: null,
		area: true,
		base: true,
		basefont: true,
		br: true,
		col: true,
		command: true,
		embed: true,
		frame: true,
		hr: true,
		img: true,
		input: true,
		isindex: true,
		keygen: true,
		link: true,
		meta: true,
		param: true,
		source: true,
		track: true,
		wbr: true,

		//common self closing svg elements
		path: true,
		circle: true,
		ellipse: true,
		line: true,
		rect: true,
		use: true,
		stop: true,
		polyline: true,
		polygon: true
	};

	var re_nameEnd = /\s|\//;

	function Parser(cbs, options){
		this._options = options || {};
		this._cbs = cbs || {};

		this._tagname = "";
		this._attribname = "";
		this._attribvalue = "";
		this._attribs = null;
		this._stack = [];

		this.startIndex = 0;
		this.endIndex = null;

		this._lowerCaseTagNames = "lowerCaseTags" in this._options ?
										!!this._options.lowerCaseTags :
										!this._options.xmlMode;
		this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ?
										!!this._options.lowerCaseAttributeNames :
										!this._options.xmlMode;

		if(this._options.Tokenizer) {
			Tokenizer = this._options.Tokenizer;
		}
		this._tokenizer = new Tokenizer(this._options, this);

		if(this._cbs.onparserinit) this._cbs.onparserinit(this);
	}

	__webpack_require__(459)(Parser, __webpack_require__(460).EventEmitter);

	Parser.prototype._updatePosition = function(initialOffset){
		if(this.endIndex === null){
			if(this._tokenizer._sectionStart <= initialOffset){
				this.startIndex = 0;
			} else {
				this.startIndex = this._tokenizer._sectionStart - initialOffset;
			}
		}
		else this.startIndex = this.endIndex + 1;
		this.endIndex = this._tokenizer.getAbsoluteIndex();
	};

	//Tokenizer event handlers
	Parser.prototype.ontext = function(data){
		this._updatePosition(1);
		this.endIndex--;

		if(this._cbs.ontext) this._cbs.ontext(data);
	};

	Parser.prototype.onopentagname = function(name){
		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		this._tagname = name;

		if(!this._options.xmlMode && name in openImpliesClose) {
			for(
				var el;
				(el = this._stack[this._stack.length - 1]) in openImpliesClose[name];
				this.onclosetag(el)
			);
		}

		if(this._options.xmlMode || !(name in voidElements)){
			this._stack.push(name);
		}

		if(this._cbs.onopentagname) this._cbs.onopentagname(name);
		if(this._cbs.onopentag) this._attribs = {};
	};

	Parser.prototype.onopentagend = function(){
		this._updatePosition(1);

		if(this._attribs){
			if(this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
			this._attribs = null;
		}

		if(!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements){
			this._cbs.onclosetag(this._tagname);
		}

		this._tagname = "";
	};

	Parser.prototype.onclosetag = function(name){
		this._updatePosition(1);

		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		if(this._stack.length && (!(name in voidElements) || this._options.xmlMode)){
			var pos = this._stack.lastIndexOf(name);
			if(pos !== -1){
				if(this._cbs.onclosetag){
					pos = this._stack.length - pos;
					while(pos--) this._cbs.onclosetag(this._stack.pop());
				}
				else this._stack.length = pos;
			} else if(name === "p" && !this._options.xmlMode){
				this.onopentagname(name);
				this._closeCurrentTag();
			}
		} else if(!this._options.xmlMode && (name === "br" || name === "p")){
			this.onopentagname(name);
			this._closeCurrentTag();
		}
	};

	Parser.prototype.onselfclosingtag = function(){
		if(this._options.xmlMode || this._options.recognizeSelfClosing){
			this._closeCurrentTag();
		} else {
			this.onopentagend();
		}
	};

	Parser.prototype._closeCurrentTag = function(){
		var name = this._tagname;

		this.onopentagend();

		//self-closing tags will be on the top of the stack
		//(cheaper check than in onclosetag)
		if(this._stack[this._stack.length - 1] === name){
			if(this._cbs.onclosetag){
				this._cbs.onclosetag(name);
			}
			this._stack.pop();
		}
	};

	Parser.prototype.onattribname = function(name){
		if(this._lowerCaseAttributeNames){
			name = name.toLowerCase();
		}
		this._attribname = name;
	};

	Parser.prototype.onattribdata = function(value){
		this._attribvalue += value;
	};

	Parser.prototype.onattribend = function(){
		if(this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);
		if(
			this._attribs &&
			!Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
		){
			this._attribs[this._attribname] = this._attribvalue;
		}
		this._attribname = "";
		this._attribvalue = "";
	};

	Parser.prototype._getInstructionName = function(value){
		var idx = value.search(re_nameEnd),
		    name = idx < 0 ? value : value.substr(0, idx);

		if(this._lowerCaseTagNames){
			name = name.toLowerCase();
		}

		return name;
	};

	Parser.prototype.ondeclaration = function(value){
		if(this._cbs.onprocessinginstruction){
			var name = this._getInstructionName(value);
			this._cbs.onprocessinginstruction("!" + name, "!" + value);
		}
	};

	Parser.prototype.onprocessinginstruction = function(value){
		if(this._cbs.onprocessinginstruction){
			var name = this._getInstructionName(value);
			this._cbs.onprocessinginstruction("?" + name, "?" + value);
		}
	};

	Parser.prototype.oncomment = function(value){
		this._updatePosition(4);

		if(this._cbs.oncomment) this._cbs.oncomment(value);
		if(this._cbs.oncommentend) this._cbs.oncommentend();
	};

	Parser.prototype.oncdata = function(value){
		this._updatePosition(1);

		if(this._options.xmlMode || this._options.recognizeCDATA){
			if(this._cbs.oncdatastart) this._cbs.oncdatastart();
			if(this._cbs.ontext) this._cbs.ontext(value);
			if(this._cbs.oncdataend) this._cbs.oncdataend();
		} else {
			this.oncomment("[CDATA[" + value + "]]");
		}
	};

	Parser.prototype.onerror = function(err){
		if(this._cbs.onerror) this._cbs.onerror(err);
	};

	Parser.prototype.onend = function(){
		if(this._cbs.onclosetag){
			for(
				var i = this._stack.length;
				i > 0;
				this._cbs.onclosetag(this._stack[--i])
			);
		}
		if(this._cbs.onend) this._cbs.onend();
	};


	//Resets the parser to a blank state, ready to parse a new HTML document
	Parser.prototype.reset = function(){
		if(this._cbs.onreset) this._cbs.onreset();
		this._tokenizer.reset();

		this._tagname = "";
		this._attribname = "";
		this._attribs = null;
		this._stack = [];

		if(this._cbs.onparserinit) this._cbs.onparserinit(this);
	};

	//Parses a complete HTML document and pushes it to the handler
	Parser.prototype.parseComplete = function(data){
		this.reset();
		this.end(data);
	};

	Parser.prototype.write = function(chunk){
		this._tokenizer.write(chunk);
	};

	Parser.prototype.end = function(chunk){
		this._tokenizer.end(chunk);
	};

	Parser.prototype.pause = function(){
		this._tokenizer.pause();
	};

	Parser.prototype.resume = function(){
		this._tokenizer.resume();
	};

	//alias for backwards compat
	Parser.prototype.parseChunk = Parser.prototype.write;
	Parser.prototype.done = Parser.prototype.end;

	module.exports = Parser;


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Tokenizer;

	var decodeCodePoint = __webpack_require__(454),
	    entityMap = __webpack_require__(456),
	    legacyMap = __webpack_require__(457),
	    xmlMap    = __webpack_require__(458),

	    i = 0,

	    TEXT                      = i++,
	    BEFORE_TAG_NAME           = i++, //after <
	    IN_TAG_NAME               = i++,
	    IN_SELF_CLOSING_TAG       = i++,
	    BEFORE_CLOSING_TAG_NAME   = i++,
	    IN_CLOSING_TAG_NAME       = i++,
	    AFTER_CLOSING_TAG_NAME    = i++,

	    //attributes
	    BEFORE_ATTRIBUTE_NAME     = i++,
	    IN_ATTRIBUTE_NAME         = i++,
	    AFTER_ATTRIBUTE_NAME      = i++,
	    BEFORE_ATTRIBUTE_VALUE    = i++,
	    IN_ATTRIBUTE_VALUE_DQ     = i++, // "
	    IN_ATTRIBUTE_VALUE_SQ     = i++, // '
	    IN_ATTRIBUTE_VALUE_NQ     = i++,

	    //declarations
	    BEFORE_DECLARATION        = i++, // !
	    IN_DECLARATION            = i++,

	    //processing instructions
	    IN_PROCESSING_INSTRUCTION = i++, // ?

	    //comments
	    BEFORE_COMMENT            = i++,
	    IN_COMMENT                = i++,
	    AFTER_COMMENT_1           = i++,
	    AFTER_COMMENT_2           = i++,

	    //cdata
	    BEFORE_CDATA_1            = i++, // [
	    BEFORE_CDATA_2            = i++, // C
	    BEFORE_CDATA_3            = i++, // D
	    BEFORE_CDATA_4            = i++, // A
	    BEFORE_CDATA_5            = i++, // T
	    BEFORE_CDATA_6            = i++, // A
	    IN_CDATA                  = i++, // [
	    AFTER_CDATA_1             = i++, // ]
	    AFTER_CDATA_2             = i++, // ]

	    //special tags
	    BEFORE_SPECIAL            = i++, //S
	    BEFORE_SPECIAL_END        = i++,   //S

	    BEFORE_SCRIPT_1           = i++, //C
	    BEFORE_SCRIPT_2           = i++, //R
	    BEFORE_SCRIPT_3           = i++, //I
	    BEFORE_SCRIPT_4           = i++, //P
	    BEFORE_SCRIPT_5           = i++, //T
	    AFTER_SCRIPT_1            = i++, //C
	    AFTER_SCRIPT_2            = i++, //R
	    AFTER_SCRIPT_3            = i++, //I
	    AFTER_SCRIPT_4            = i++, //P
	    AFTER_SCRIPT_5            = i++, //T

	    BEFORE_STYLE_1            = i++, //T
	    BEFORE_STYLE_2            = i++, //Y
	    BEFORE_STYLE_3            = i++, //L
	    BEFORE_STYLE_4            = i++, //E
	    AFTER_STYLE_1             = i++, //T
	    AFTER_STYLE_2             = i++, //Y
	    AFTER_STYLE_3             = i++, //L
	    AFTER_STYLE_4             = i++, //E

	    BEFORE_ENTITY             = i++, //&
	    BEFORE_NUMERIC_ENTITY     = i++, //#
	    IN_NAMED_ENTITY           = i++,
	    IN_NUMERIC_ENTITY         = i++,
	    IN_HEX_ENTITY             = i++, //X

	    j = 0,

	    SPECIAL_NONE              = j++,
	    SPECIAL_SCRIPT            = j++,
	    SPECIAL_STYLE             = j++;

	function whitespace(c){
		return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
	}

	function characterState(char, SUCCESS){
		return function(c){
			if(c === char) this._state = SUCCESS;
		};
	}

	function ifElseState(upper, SUCCESS, FAILURE){
		var lower = upper.toLowerCase();

		if(upper === lower){
			return function(c){
				if(c === lower){
					this._state = SUCCESS;
				} else {
					this._state = FAILURE;
					this._index--;
				}
			};
		} else {
			return function(c){
				if(c === lower || c === upper){
					this._state = SUCCESS;
				} else {
					this._state = FAILURE;
					this._index--;
				}
			};
		}
	}

	function consumeSpecialNameChar(upper, NEXT_STATE){
		var lower = upper.toLowerCase();

		return function(c){
			if(c === lower || c === upper){
				this._state = NEXT_STATE;
			} else {
				this._state = IN_TAG_NAME;
				this._index--; //consume the token again
			}
		};
	}

	function Tokenizer(options, cbs){
		this._state = TEXT;
		this._buffer = "";
		this._sectionStart = 0;
		this._index = 0;
		this._bufferOffset = 0; //chars removed from _buffer
		this._baseState = TEXT;
		this._special = SPECIAL_NONE;
		this._cbs = cbs;
		this._running = true;
		this._ended = false;
		this._xmlMode = !!(options && options.xmlMode);
		this._decodeEntities = !!(options && options.decodeEntities);
	}

	Tokenizer.prototype._stateText = function(c){
		if(c === "<"){
			if(this._index > this._sectionStart){
				this._cbs.ontext(this._getSection());
			}
			this._state = BEFORE_TAG_NAME;
			this._sectionStart = this._index;
		} else if(this._decodeEntities && this._special === SPECIAL_NONE && c === "&"){
			if(this._index > this._sectionStart){
				this._cbs.ontext(this._getSection());
			}
			this._baseState = TEXT;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeTagName = function(c){
		if(c === "/"){
			this._state = BEFORE_CLOSING_TAG_NAME;
		} else if(c === "<"){
			this._cbs.ontext(this._getSection());
			this._sectionStart = this._index;
		} else if(c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
			this._state = TEXT;
		} else if(c === "!"){
			this._state = BEFORE_DECLARATION;
			this._sectionStart = this._index + 1;
		} else if(c === "?"){
			this._state = IN_PROCESSING_INSTRUCTION;
			this._sectionStart = this._index + 1;
		} else {
			this._state = (!this._xmlMode && (c === "s" || c === "S")) ?
							BEFORE_SPECIAL : IN_TAG_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInTagName = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._emitToken("onopentagname");
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateBeforeCloseingTagName = function(c){
		if(whitespace(c));
		else if(c === ">"){
			this._state = TEXT;
		} else if(this._special !== SPECIAL_NONE){
			if(c === "s" || c === "S"){
				this._state = BEFORE_SPECIAL_END;
			} else {
				this._state = TEXT;
				this._index--;
			}
		} else {
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInCloseingTagName = function(c){
		if(c === ">" || whitespace(c)){
			this._emitToken("onclosetag");
			this._state = AFTER_CLOSING_TAG_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateAfterCloseingTagName = function(c){
		//skip everything until ">"
		if(c === ">"){
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateBeforeAttributeName = function(c){
		if(c === ">"){
			this._cbs.onopentagend();
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c === "/"){
			this._state = IN_SELF_CLOSING_TAG;
		} else if(!whitespace(c)){
			this._state = IN_ATTRIBUTE_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInSelfClosingTag = function(c){
		if(c === ">"){
			this._cbs.onselfclosingtag();
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(!whitespace(c)){
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateInAttributeName = function(c){
		if(c === "=" || c === "/" || c === ">" || whitespace(c)){
			this._cbs.onattribname(this._getSection());
			this._sectionStart = -1;
			this._state = AFTER_ATTRIBUTE_NAME;
			this._index--;
		}
	};

	Tokenizer.prototype._stateAfterAttributeName = function(c){
		if(c === "="){
			this._state = BEFORE_ATTRIBUTE_VALUE;
		} else if(c === "/" || c === ">"){
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		} else if(!whitespace(c)){
			this._cbs.onattribend();
			this._state = IN_ATTRIBUTE_NAME;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeAttributeValue = function(c){
		if(c === "\""){
			this._state = IN_ATTRIBUTE_VALUE_DQ;
			this._sectionStart = this._index + 1;
		} else if(c === "'"){
			this._state = IN_ATTRIBUTE_VALUE_SQ;
			this._sectionStart = this._index + 1;
		} else if(!whitespace(c)){
			this._state = IN_ATTRIBUTE_VALUE_NQ;
			this._sectionStart = this._index;
			this._index--; //reconsume token
		}
	};

	Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c){
		if(c === "\""){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c){
		if(c === "'"){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c){
		if(whitespace(c) || c === ">"){
			this._emitToken("onattribdata");
			this._cbs.onattribend();
			this._state = BEFORE_ATTRIBUTE_NAME;
			this._index--;
		} else if(this._decodeEntities && c === "&"){
			this._emitToken("onattribdata");
			this._baseState = this._state;
			this._state = BEFORE_ENTITY;
			this._sectionStart = this._index;
		}
	};

	Tokenizer.prototype._stateBeforeDeclaration = function(c){
		this._state = c === "[" ? BEFORE_CDATA_1 :
						c === "-" ? BEFORE_COMMENT :
							IN_DECLARATION;
	};

	Tokenizer.prototype._stateInDeclaration = function(c){
		if(c === ">"){
			this._cbs.ondeclaration(this._getSection());
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateInProcessingInstruction = function(c){
		if(c === ">"){
			this._cbs.onprocessinginstruction(this._getSection());
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		}
	};

	Tokenizer.prototype._stateBeforeComment = function(c){
		if(c === "-"){
			this._state = IN_COMMENT;
			this._sectionStart = this._index + 1;
		} else {
			this._state = IN_DECLARATION;
		}
	};

	Tokenizer.prototype._stateInComment = function(c){
		if(c === "-") this._state = AFTER_COMMENT_1;
	};

	Tokenizer.prototype._stateAfterComment1 = function(c){
		if(c === "-"){
			this._state = AFTER_COMMENT_2;
		} else {
			this._state = IN_COMMENT;
		}
	};

	Tokenizer.prototype._stateAfterComment2 = function(c){
		if(c === ">"){
			//remove 2 trailing chars
			this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c !== "-"){
			this._state = IN_COMMENT;
		}
		// else: stay in AFTER_COMMENT_2 (`--->`)
	};

	Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
	Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);

	Tokenizer.prototype._stateBeforeCdata6 = function(c){
		if(c === "["){
			this._state = IN_CDATA;
			this._sectionStart = this._index + 1;
		} else {
			this._state = IN_DECLARATION;
			this._index--;
		}
	};

	Tokenizer.prototype._stateInCdata = function(c){
		if(c === "]") this._state = AFTER_CDATA_1;
	};

	Tokenizer.prototype._stateAfterCdata1 = characterState("]", AFTER_CDATA_2);

	Tokenizer.prototype._stateAfterCdata2 = function(c){
		if(c === ">"){
			//remove 2 trailing chars
			this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
			this._state = TEXT;
			this._sectionStart = this._index + 1;
		} else if(c !== "]") {
			this._state = IN_CDATA;
		}
		//else: stay in AFTER_CDATA_2 (`]]]>`)
	};

	Tokenizer.prototype._stateBeforeSpecial = function(c){
		if(c === "c" || c === "C"){
			this._state = BEFORE_SCRIPT_1;
		} else if(c === "t" || c === "T"){
			this._state = BEFORE_STYLE_1;
		} else {
			this._state = IN_TAG_NAME;
			this._index--; //consume the token again
		}
	};

	Tokenizer.prototype._stateBeforeSpecialEnd = function(c){
		if(this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")){
			this._state = AFTER_SCRIPT_1;
		} else if(this._special === SPECIAL_STYLE && (c === "t" || c === "T")){
			this._state = AFTER_STYLE_1;
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
	Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
	Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
	Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);

	Tokenizer.prototype._stateBeforeScript5 = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._special = SPECIAL_SCRIPT;
		}
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	};

	Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
	Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
	Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
	Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

	Tokenizer.prototype._stateAfterScript5 = function(c){
		if(c === ">" || whitespace(c)){
			this._special = SPECIAL_NONE;
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index - 6;
			this._index--; //reconsume the token
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
	Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
	Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);

	Tokenizer.prototype._stateBeforeStyle4 = function(c){
		if(c === "/" || c === ">" || whitespace(c)){
			this._special = SPECIAL_STYLE;
		}
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	};

	Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
	Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
	Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

	Tokenizer.prototype._stateAfterStyle4 = function(c){
		if(c === ">" || whitespace(c)){
			this._special = SPECIAL_NONE;
			this._state = IN_CLOSING_TAG_NAME;
			this._sectionStart = this._index - 5;
			this._index--; //reconsume the token
		}
		else this._state = TEXT;
	};

	Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
	Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);

	//for entities terminated with a semicolon
	Tokenizer.prototype._parseNamedEntityStrict = function(){
		//offset = 1
		if(this._sectionStart + 1 < this._index){
			var entity = this._buffer.substring(this._sectionStart + 1, this._index),
			    map = this._xmlMode ? xmlMap : entityMap;

			if(map.hasOwnProperty(entity)){
				this._emitPartial(map[entity]);
				this._sectionStart = this._index + 1;
			}
		}
	};


	//parses legacy entities (without trailing semicolon)
	Tokenizer.prototype._parseLegacyEntity = function(){
		var start = this._sectionStart + 1,
		    limit = this._index - start;

		if(limit > 6) limit = 6; //the max length of legacy entities is 6

		while(limit >= 2){ //the min length of legacy entities is 2
			var entity = this._buffer.substr(start, limit);

			if(legacyMap.hasOwnProperty(entity)){
				this._emitPartial(legacyMap[entity]);
				this._sectionStart += limit + 1;
				return;
			} else {
				limit--;
			}
		}
	};

	Tokenizer.prototype._stateInNamedEntity = function(c){
		if(c === ";"){
			this._parseNamedEntityStrict();
			if(this._sectionStart + 1 < this._index && !this._xmlMode){
				this._parseLegacyEntity();
			}
			this._state = this._baseState;
		} else if((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")){
			if(this._xmlMode);
			else if(this._sectionStart + 1 === this._index);
			else if(this._baseState !== TEXT){
				if(c !== "="){
					this._parseNamedEntityStrict();
				}
			} else {
				this._parseLegacyEntity();
			}

			this._state = this._baseState;
			this._index--;
		}
	};

	Tokenizer.prototype._decodeNumericEntity = function(offset, base){
		var sectionStart = this._sectionStart + offset;

		if(sectionStart !== this._index){
			//parse entity
			var entity = this._buffer.substring(sectionStart, this._index);
			var parsed = parseInt(entity, base);

			this._emitPartial(decodeCodePoint(parsed));
			this._sectionStart = this._index;
		} else {
			this._sectionStart--;
		}

		this._state = this._baseState;
	};

	Tokenizer.prototype._stateInNumericEntity = function(c){
		if(c === ";"){
			this._decodeNumericEntity(2, 10);
			this._sectionStart++;
		} else if(c < "0" || c > "9"){
			if(!this._xmlMode){
				this._decodeNumericEntity(2, 10);
			} else {
				this._state = this._baseState;
			}
			this._index--;
		}
	};

	Tokenizer.prototype._stateInHexEntity = function(c){
		if(c === ";"){
			this._decodeNumericEntity(3, 16);
			this._sectionStart++;
		} else if((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")){
			if(!this._xmlMode){
				this._decodeNumericEntity(3, 16);
			} else {
				this._state = this._baseState;
			}
			this._index--;
		}
	};

	Tokenizer.prototype._cleanup = function (){
		if(this._sectionStart < 0){
			this._buffer = "";
			this._bufferOffset += this._index;
			this._index = 0;
		} else if(this._running){
			if(this._state === TEXT){
				if(this._sectionStart !== this._index){
					this._cbs.ontext(this._buffer.substr(this._sectionStart));
				}
				this._buffer = "";
				this._bufferOffset += this._index;
				this._index = 0;
			} else if(this._sectionStart === this._index){
				//the section just started
				this._buffer = "";
				this._bufferOffset += this._index;
				this._index = 0;
			} else {
				//remove everything unnecessary
				this._buffer = this._buffer.substr(this._sectionStart);
				this._index -= this._sectionStart;
				this._bufferOffset += this._sectionStart;
			}

			this._sectionStart = 0;
		}
	};

	//TODO make events conditional
	Tokenizer.prototype.write = function(chunk){
		if(this._ended) this._cbs.onerror(Error(".write() after done!"));

		this._buffer += chunk;
		this._parse();
	};

	Tokenizer.prototype._parse = function(){
		while(this._index < this._buffer.length && this._running){
			var c = this._buffer.charAt(this._index);
			if(this._state === TEXT) {
				this._stateText(c);
			} else if(this._state === BEFORE_TAG_NAME){
				this._stateBeforeTagName(c);
			} else if(this._state === IN_TAG_NAME) {
				this._stateInTagName(c);
			} else if(this._state === BEFORE_CLOSING_TAG_NAME){
				this._stateBeforeCloseingTagName(c);
			} else if(this._state === IN_CLOSING_TAG_NAME){
				this._stateInCloseingTagName(c);
			} else if(this._state === AFTER_CLOSING_TAG_NAME){
				this._stateAfterCloseingTagName(c);
			} else if(this._state === IN_SELF_CLOSING_TAG){
				this._stateInSelfClosingTag(c);
			}

			/*
			*	attributes
			*/
			else if(this._state === BEFORE_ATTRIBUTE_NAME){
				this._stateBeforeAttributeName(c);
			} else if(this._state === IN_ATTRIBUTE_NAME){
				this._stateInAttributeName(c);
			} else if(this._state === AFTER_ATTRIBUTE_NAME){
				this._stateAfterAttributeName(c);
			} else if(this._state === BEFORE_ATTRIBUTE_VALUE){
				this._stateBeforeAttributeValue(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_DQ){
				this._stateInAttributeValueDoubleQuotes(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_SQ){
				this._stateInAttributeValueSingleQuotes(c);
			} else if(this._state === IN_ATTRIBUTE_VALUE_NQ){
				this._stateInAttributeValueNoQuotes(c);
			}

			/*
			*	declarations
			*/
			else if(this._state === BEFORE_DECLARATION){
				this._stateBeforeDeclaration(c);
			} else if(this._state === IN_DECLARATION){
				this._stateInDeclaration(c);
			}

			/*
			*	processing instructions
			*/
			else if(this._state === IN_PROCESSING_INSTRUCTION){
				this._stateInProcessingInstruction(c);
			}

			/*
			*	comments
			*/
			else if(this._state === BEFORE_COMMENT){
				this._stateBeforeComment(c);
			} else if(this._state === IN_COMMENT){
				this._stateInComment(c);
			} else if(this._state === AFTER_COMMENT_1){
				this._stateAfterComment1(c);
			} else if(this._state === AFTER_COMMENT_2){
				this._stateAfterComment2(c);
			}

			/*
			*	cdata
			*/
			else if(this._state === BEFORE_CDATA_1){
				this._stateBeforeCdata1(c);
			} else if(this._state === BEFORE_CDATA_2){
				this._stateBeforeCdata2(c);
			} else if(this._state === BEFORE_CDATA_3){
				this._stateBeforeCdata3(c);
			} else if(this._state === BEFORE_CDATA_4){
				this._stateBeforeCdata4(c);
			} else if(this._state === BEFORE_CDATA_5){
				this._stateBeforeCdata5(c);
			} else if(this._state === BEFORE_CDATA_6){
				this._stateBeforeCdata6(c);
			} else if(this._state === IN_CDATA){
				this._stateInCdata(c);
			} else if(this._state === AFTER_CDATA_1){
				this._stateAfterCdata1(c);
			} else if(this._state === AFTER_CDATA_2){
				this._stateAfterCdata2(c);
			}

			/*
			* special tags
			*/
			else if(this._state === BEFORE_SPECIAL){
				this._stateBeforeSpecial(c);
			} else if(this._state === BEFORE_SPECIAL_END){
				this._stateBeforeSpecialEnd(c);
			}

			/*
			* script
			*/
			else if(this._state === BEFORE_SCRIPT_1){
				this._stateBeforeScript1(c);
			} else if(this._state === BEFORE_SCRIPT_2){
				this._stateBeforeScript2(c);
			} else if(this._state === BEFORE_SCRIPT_3){
				this._stateBeforeScript3(c);
			} else if(this._state === BEFORE_SCRIPT_4){
				this._stateBeforeScript4(c);
			} else if(this._state === BEFORE_SCRIPT_5){
				this._stateBeforeScript5(c);
			}

			else if(this._state === AFTER_SCRIPT_1){
				this._stateAfterScript1(c);
			} else if(this._state === AFTER_SCRIPT_2){
				this._stateAfterScript2(c);
			} else if(this._state === AFTER_SCRIPT_3){
				this._stateAfterScript3(c);
			} else if(this._state === AFTER_SCRIPT_4){
				this._stateAfterScript4(c);
			} else if(this._state === AFTER_SCRIPT_5){
				this._stateAfterScript5(c);
			}

			/*
			* style
			*/
			else if(this._state === BEFORE_STYLE_1){
				this._stateBeforeStyle1(c);
			} else if(this._state === BEFORE_STYLE_2){
				this._stateBeforeStyle2(c);
			} else if(this._state === BEFORE_STYLE_3){
				this._stateBeforeStyle3(c);
			} else if(this._state === BEFORE_STYLE_4){
				this._stateBeforeStyle4(c);
			}

			else if(this._state === AFTER_STYLE_1){
				this._stateAfterStyle1(c);
			} else if(this._state === AFTER_STYLE_2){
				this._stateAfterStyle2(c);
			} else if(this._state === AFTER_STYLE_3){
				this._stateAfterStyle3(c);
			} else if(this._state === AFTER_STYLE_4){
				this._stateAfterStyle4(c);
			}

			/*
			* entities
			*/
			else if(this._state === BEFORE_ENTITY){
				this._stateBeforeEntity(c);
			} else if(this._state === BEFORE_NUMERIC_ENTITY){
				this._stateBeforeNumericEntity(c);
			} else if(this._state === IN_NAMED_ENTITY){
				this._stateInNamedEntity(c);
			} else if(this._state === IN_NUMERIC_ENTITY){
				this._stateInNumericEntity(c);
			} else if(this._state === IN_HEX_ENTITY){
				this._stateInHexEntity(c);
			}

			else {
				this._cbs.onerror(Error("unknown _state"), this._state);
			}

			this._index++;
		}

		this._cleanup();
	};

	Tokenizer.prototype.pause = function(){
		this._running = false;
	};
	Tokenizer.prototype.resume = function(){
		this._running = true;

		if(this._index < this._buffer.length){
			this._parse();
		}
		if(this._ended){
			this._finish();
		}
	};

	Tokenizer.prototype.end = function(chunk){
		if(this._ended) this._cbs.onerror(Error(".end() after done!"));
		if(chunk) this.write(chunk);

		this._ended = true;

		if(this._running) this._finish();
	};

	Tokenizer.prototype._finish = function(){
		//if there is remaining data, emit it in a reasonable way
		if(this._sectionStart < this._index){
			this._handleTrailingData();
		}

		this._cbs.onend();
	};

	Tokenizer.prototype._handleTrailingData = function(){
		var data = this._buffer.substr(this._sectionStart);

		if(this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2){
			this._cbs.oncdata(data);
		} else if(this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2){
			this._cbs.oncomment(data);
		} else if(this._state === IN_NAMED_ENTITY && !this._xmlMode){
			this._parseLegacyEntity();
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(this._state === IN_NUMERIC_ENTITY && !this._xmlMode){
			this._decodeNumericEntity(2, 10);
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(this._state === IN_HEX_ENTITY && !this._xmlMode){
			this._decodeNumericEntity(3, 16);
			if(this._sectionStart < this._index){
				this._state = this._baseState;
				this._handleTrailingData();
			}
		} else if(
			this._state !== IN_TAG_NAME &&
			this._state !== BEFORE_ATTRIBUTE_NAME &&
			this._state !== BEFORE_ATTRIBUTE_VALUE &&
			this._state !== AFTER_ATTRIBUTE_NAME &&
			this._state !== IN_ATTRIBUTE_NAME &&
			this._state !== IN_ATTRIBUTE_VALUE_SQ &&
			this._state !== IN_ATTRIBUTE_VALUE_DQ &&
			this._state !== IN_ATTRIBUTE_VALUE_NQ &&
			this._state !== IN_CLOSING_TAG_NAME
		){
			this._cbs.ontext(data);
		}
		//else, ignore remaining data
		//TODO add a way to remove current tag
	};

	Tokenizer.prototype.reset = function(){
		Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
	};

	Tokenizer.prototype.getAbsoluteIndex = function(){
		return this._bufferOffset + this._index;
	};

	Tokenizer.prototype._getSection = function(){
		return this._buffer.substring(this._sectionStart, this._index);
	};

	Tokenizer.prototype._emitToken = function(name){
		this._cbs[name](this._getSection());
		this._sectionStart = -1;
	};

	Tokenizer.prototype._emitPartial = function(value){
		if(this._baseState !== TEXT){
			this._cbs.onattribdata(value); //TODO implement the new event
		} else {
			this._cbs.ontext(value);
		}
	};


/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	var decodeMap = __webpack_require__(455);

	module.exports = decodeCodePoint;

	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint){

		if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
			return "\uFFFD";
		}

		if(codePoint in decodeMap){
			codePoint = decodeMap[codePoint];
		}

		var output = "";

		if(codePoint > 0xFFFF){
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}

		output += String.fromCharCode(codePoint);
		return output;
	}


/***/ },

/***/ 455:
/***/ function(module, exports) {

	module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ },

/***/ 456:
/***/ function(module, exports) {

	module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ },

/***/ 457:
/***/ function(module, exports) {

	module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ },

/***/ 458:
/***/ function(module, exports) {

	module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ },

/***/ 459:
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },

/***/ 460:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(462);

	var re_whitespace = /\s+/g;
	var NodePrototype = __webpack_require__(463);
	var ElementPrototype = __webpack_require__(464);

	function DomHandler(callback, options, elementCB){
		if(typeof callback === "object"){
			elementCB = options;
			options = callback;
			callback = null;
		} else if(typeof options === "function"){
			elementCB = options;
			options = defaultOpts;
		}
		this._callback = callback;
		this._options = options || defaultOpts;
		this._elementCB = elementCB;
		this.dom = [];
		this._done = false;
		this._tagStack = [];
		this._parser = this._parser || null;
	}

	//default options
	var defaultOpts = {
		normalizeWhitespace: false, //Replace all whitespace with single spaces
		withStartIndices: false, //Add startIndex properties to nodes
		withEndIndices: false, //Add endIndex properties to nodes
	};

	DomHandler.prototype.onparserinit = function(parser){
		this._parser = parser;
	};

	//Resets the handler back to starting state
	DomHandler.prototype.onreset = function(){
		DomHandler.call(this, this._callback, this._options, this._elementCB);
	};

	//Signals the handler that parsing is done
	DomHandler.prototype.onend = function(){
		if(this._done) return;
		this._done = true;
		this._parser = null;
		this._handleCallback(null);
	};

	DomHandler.prototype._handleCallback =
	DomHandler.prototype.onerror = function(error){
		if(typeof this._callback === "function"){
			this._callback(error, this.dom);
		} else {
			if(error) throw error;
		}
	};

	DomHandler.prototype.onclosetag = function(){
		//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
		
		var elem = this._tagStack.pop();

		if(this._options.withEndIndices){
			elem.endIndex = this._parser.endIndex;
		}

		if(this._elementCB) this._elementCB(elem);
	};

	DomHandler.prototype._createDomElement = function(properties){
		if (!this._options.withDomLvl1) return properties;

		var element;
		if (properties.type === "tag") {
			element = Object.create(ElementPrototype);
		} else {
			element = Object.create(NodePrototype);
		}

		for (var key in properties) {
			if (properties.hasOwnProperty(key)) {
				element[key] = properties[key];
			}
		}

		return element;
	};

	DomHandler.prototype._addDomElement = function(element){
		var parent = this._tagStack[this._tagStack.length - 1];
		var siblings = parent ? parent.children : this.dom;
		var previousSibling = siblings[siblings.length - 1];

		element.next = null;

		if(this._options.withStartIndices){
			element.startIndex = this._parser.startIndex;
		}
		if(this._options.withEndIndices){
			element.endIndex = this._parser.endIndex;
		}

		if(previousSibling){
			element.prev = previousSibling;
			previousSibling.next = element;
		} else {
			element.prev = null;
		}

		siblings.push(element);
		element.parent = parent || null;
	};

	DomHandler.prototype.onopentag = function(name, attribs){
		var properties = {
			type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
			name: name,
			attribs: attribs,
			children: []
		};

		var element = this._createDomElement(properties);

		this._addDomElement(element);

		this._tagStack.push(element);
	};

	DomHandler.prototype.ontext = function(data){
		//the ignoreWhitespace is officially dropped, but for now,
		//it's an alias for normalizeWhitespace
		var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

		var lastTag;

		if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === ElementType.Text){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(
				this._tagStack.length &&
				(lastTag = this._tagStack[this._tagStack.length - 1]) &&
				(lastTag = lastTag.children[lastTag.children.length - 1]) &&
				lastTag.type === ElementType.Text
			){
				if(normalize){
					lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
				} else {
					lastTag.data += data;
				}
			} else {
				if(normalize){
					data = data.replace(re_whitespace, " ");
				}

				var element = this._createDomElement({
					data: data,
					type: ElementType.Text
				});

				this._addDomElement(element);
			}
		}
	};

	DomHandler.prototype.oncomment = function(data){
		var lastTag = this._tagStack[this._tagStack.length - 1];

		if(lastTag && lastTag.type === ElementType.Comment){
			lastTag.data += data;
			return;
		}

		var properties = {
			data: data,
			type: ElementType.Comment
		};

		var element = this._createDomElement(properties);

		this._addDomElement(element);
		this._tagStack.push(element);
	};

	DomHandler.prototype.oncdatastart = function(){
		var properties = {
			children: [{
				data: "",
				type: ElementType.Text
			}],
			type: ElementType.CDATA
		};

		var element = this._createDomElement(properties);

		this._addDomElement(element);
		this._tagStack.push(element);
	};

	DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
		this._tagStack.pop();
	};

	DomHandler.prototype.onprocessinginstruction = function(name, data){
		var element = this._createDomElement({
			name: name,
			data: data,
			type: ElementType.Directive
		});

		this._addDomElement(element);
	};

	module.exports = DomHandler;


/***/ },

/***/ 462:
/***/ function(module, exports) {

	//Types of elements found in the DOM
	module.exports = {
		Text: "text", //Text
		Directive: "directive", //<? ... ?>
		Comment: "comment", //<!-- ... -->
		Script: "script", //<script> tags
		Style: "style", //<style> tags
		Tag: "tag", //Any tag
		CDATA: "cdata", //<![CDATA[ ... ]]>
		Doctype: "doctype",

		isTag: function(elem){
			return elem.type === "tag" || elem.type === "script" || elem.type === "style";
		}
	};


/***/ },

/***/ 463:
/***/ function(module, exports) {

	// This object will be used as the prototype for Nodes when creating a
	// DOM-Level-1-compliant structure.
	var NodePrototype = module.exports = {
		get firstChild() {
			var children = this.children;
			return children && children[0] || null;
		},
		get lastChild() {
			var children = this.children;
			return children && children[children.length - 1] || null;
		},
		get nodeType() {
			return nodeTypes[this.type] || nodeTypes.element;
		}
	};

	var domLvl1 = {
		tagName: "name",
		childNodes: "children",
		parentNode: "parent",
		previousSibling: "prev",
		nextSibling: "next",
		nodeValue: "data"
	};

	var nodeTypes = {
		element: 1,
		text: 3,
		cdata: 4,
		comment: 8
	};

	Object.keys(domLvl1).forEach(function(key) {
		var shorthand = domLvl1[key];
		Object.defineProperty(NodePrototype, key, {
			get: function() {
				return this[shorthand] || null;
			},
			set: function(val) {
				this[shorthand] = val;
				return val;
			}
		});
	});


/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	// DOM-Level-1-compliant structure
	var NodePrototype = __webpack_require__(463);
	var ElementPrototype = module.exports = Object.create(NodePrototype);

	var domLvl1 = {
		tagName: "name"
	};

	Object.keys(domLvl1).forEach(function(key) {
		var shorthand = domLvl1[key];
		Object.defineProperty(ElementPrototype, key, {
			get: function() {
				return this[shorthand] || null;
			},
			set: function(val) {
				this[shorthand] = val;
				return val;
			}
		});
	});


/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	var index = __webpack_require__(451),
	    DomHandler = index.DomHandler,
	    DomUtils = index.DomUtils;

	//TODO: make this a streamable handler
	function FeedHandler(callback, options){
		this.init(callback, options);
	}

	__webpack_require__(459)(FeedHandler, DomHandler);

	FeedHandler.prototype.init = DomHandler;

	function getElements(what, where){
		return DomUtils.getElementsByTagName(what, where, true);
	}
	function getOneElement(what, where){
		return DomUtils.getElementsByTagName(what, where, true, 1)[0];
	}
	function fetch(what, where, recurse){
		return DomUtils.getText(
			DomUtils.getElementsByTagName(what, where, recurse, 1)
		).trim();
	}

	function addConditionally(obj, prop, what, where, recurse){
		var tmp = fetch(what, where, recurse);
		if(tmp) obj[prop] = tmp;
	}

	var isValidFeed = function(value){
		return value === "rss" || value === "feed" || value === "rdf:RDF";
	};

	FeedHandler.prototype.onend = function(){
		var feed = {},
		    feedRoot = getOneElement(isValidFeed, this.dom),
		    tmp, childs;

		if(feedRoot){
			if(feedRoot.name === "feed"){
				childs = feedRoot.children;

				feed.type = "atom";
				addConditionally(feed, "id", "id", childs);
				addConditionally(feed, "title", "title", childs);
				if((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href)) feed.link = tmp;
				addConditionally(feed, "description", "subtitle", childs);
				if((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
				addConditionally(feed, "author", "email", childs, true);

				feed.items = getElements("entry", childs).map(function(item){
					var entry = {}, tmp;

					item = item.children;

					addConditionally(entry, "id", "id", item);
					addConditionally(entry, "title", "title", item);
					if((tmp = getOneElement("link", item)) && (tmp = tmp.attribs) && (tmp = tmp.href)) entry.link = tmp;
					if((tmp = fetch("summary", item) || fetch("content", item))) entry.description = tmp;
					if((tmp = fetch("updated", item))) entry.pubDate = new Date(tmp);
					return entry;
				});
			} else {
				childs = getOneElement("channel", feedRoot.children).children;

				feed.type = feedRoot.name.substr(0, 3);
				feed.id = "";
				addConditionally(feed, "title", "title", childs);
				addConditionally(feed, "link", "link", childs);
				addConditionally(feed, "description", "description", childs);
				if((tmp = fetch("lastBuildDate", childs))) feed.updated = new Date(tmp);
				addConditionally(feed, "author", "managingEditor", childs, true);

				feed.items = getElements("item", feedRoot.children).map(function(item){
					var entry = {}, tmp;

					item = item.children;

					addConditionally(entry, "id", "guid", item);
					addConditionally(entry, "title", "title", item);
					addConditionally(entry, "link", "link", item);
					addConditionally(entry, "description", "description", item);
					if((tmp = fetch("pubDate", item))) entry.pubDate = new Date(tmp);
					return entry;
				});
			}
		}
		this.dom = feed;
		DomHandler.prototype._handleCallback.call(
			this, feedRoot ? null : Error("couldn't find root of feed")
		);
	};

	module.exports = FeedHandler;


/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Stream;

	var Parser = __webpack_require__(467);

	function Stream(options){
		Parser.call(this, new Cbs(this), options);
	}

	__webpack_require__(459)(Stream, Parser);

	Stream.prototype.readable = true;

	function Cbs(scope){
		this.scope = scope;
	}

	var EVENTS = __webpack_require__(451).EVENTS;

	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			Cbs.prototype["on" + name] = function(){
				this.scope.emit(name);
			};
		} else if(EVENTS[name] === 1){
			Cbs.prototype["on" + name] = function(a){
				this.scope.emit(name, a);
			};
		} else if(EVENTS[name] === 2){
			Cbs.prototype["on" + name] = function(a, b){
				this.scope.emit(name, a, b);
			};
		} else {
			throw Error("wrong number of arguments!");
		}
	});

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	module.exports = Stream;

	var Parser = __webpack_require__(452),
	    WritableStream = __webpack_require__(468).Writable || __webpack_require__(487).Writable,
	    StringDecoder = __webpack_require__(488).StringDecoder,
	    Buffer = __webpack_require__(472).Buffer;

	function Stream(cbs, options){
		var parser = this._parser = new Parser(cbs, options);
		var decoder = this._decoder = new StringDecoder();

		WritableStream.call(this, {decodeStrings: false});

		this.once("finish", function(){
			parser.end(decoder.end());
		});
	}

	__webpack_require__(459)(Stream, WritableStream);

	WritableStream.prototype._write = function(chunk, encoding, cb){
		if(chunk instanceof Buffer) chunk = this._decoder.write(chunk);
		this._parser.write(chunk);
		cb();
	};

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(460).EventEmitter;
	var inherits = __webpack_require__(459);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(469);
	Stream.Writable = __webpack_require__(483);
	Stream.Duplex = __webpack_require__(484);
	Stream.Transform = __webpack_require__(485);
	Stream.PassThrough = __webpack_require__(486);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = __webpack_require__(470);
	exports.Stream = __webpack_require__(468);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(479);
	exports.Duplex = __webpack_require__(478);
	exports.Transform = __webpack_require__(481);
	exports.PassThrough = __webpack_require__(482);
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = __webpack_require__(468);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(471);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(472).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(460).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(468);

	/*<replacement>*/
	var util = __webpack_require__(476);
	util.inherits = __webpack_require__(459);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(477);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(478);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(480).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(478);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(480).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 471:
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(473)
	var ieee754 = __webpack_require__(474)
	var isArray = __webpack_require__(475)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(472).Buffer, (function() { return this; }())))

/***/ },

/***/ 473:
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr((len * 3 / 4) - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },

/***/ 474:
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },

/***/ 475:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(472).Buffer))

/***/ },

/***/ 477:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(476);
	util.inherits = __webpack_require__(459);
	/*</replacement>*/

	var Readable = __webpack_require__(470);
	var Writable = __webpack_require__(479);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(472).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(476);
	util.inherits = __webpack_require__(459);
	/*</replacement>*/

	var Stream = __webpack_require__(468);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(478);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(478);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(472).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(478);

	/*<replacement>*/
	var util = __webpack_require__(476);
	util.inherits = __webpack_require__(459);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(481);

	/*<replacement>*/
	var util = __webpack_require__(476);
	util.inherits = __webpack_require__(459);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(479)


/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(478)


/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(481)


/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(482)


/***/ },

/***/ 487:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Buffer = __webpack_require__(489).Buffer;

	var isEncoding = Buffer.isEncoding || function (encoding) {
	  encoding = '' + encoding;
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
	      return true;
	    default:
	      return false;
	  }
	};

	function _normalizeEncoding(enc) {
	  if (!enc) return 'utf8';
	  var retried;
	  while (true) {
	    switch (enc) {
	      case 'utf8':
	      case 'utf-8':
	        return 'utf8';
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return 'utf16le';
	      case 'latin1':
	      case 'binary':
	        return 'latin1';
	      case 'base64':
	      case 'ascii':
	      case 'hex':
	        return enc;
	      default:
	        if (retried) return; // undefined
	        enc = ('' + enc).toLowerCase();
	        retried = true;
	    }
	  }
	};

	// Do not cache `Buffer.isEncoding` when checking encoding names as some
	// modules monkey-patch it to support additional encodings
	function normalizeEncoding(enc) {
	  var nenc = _normalizeEncoding(enc);
	  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
	  return nenc || enc;
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters.
	exports.StringDecoder = StringDecoder;
	function StringDecoder(encoding) {
	  this.encoding = normalizeEncoding(encoding);
	  var nb;
	  switch (this.encoding) {
	    case 'utf16le':
	      this.text = utf16Text;
	      this.end = utf16End;
	      nb = 4;
	      break;
	    case 'utf8':
	      this.fillLast = utf8FillLast;
	      nb = 4;
	      break;
	    case 'base64':
	      this.text = base64Text;
	      this.end = base64End;
	      nb = 3;
	      break;
	    default:
	      this.write = simpleWrite;
	      this.end = simpleEnd;
	      return;
	  }
	  this.lastNeed = 0;
	  this.lastTotal = 0;
	  this.lastChar = Buffer.allocUnsafe(nb);
	}

	StringDecoder.prototype.write = function (buf) {
	  if (buf.length === 0) return '';
	  var r;
	  var i;
	  if (this.lastNeed) {
	    r = this.fillLast(buf);
	    if (r === undefined) return '';
	    i = this.lastNeed;
	    this.lastNeed = 0;
	  } else {
	    i = 0;
	  }
	  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
	  return r || '';
	};

	StringDecoder.prototype.end = utf8End;

	// Returns only complete characters in a Buffer
	StringDecoder.prototype.text = utf8Text;

	// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
	StringDecoder.prototype.fillLast = function (buf) {
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
	  this.lastNeed -= buf.length;
	};

	// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
	// continuation byte.
	function utf8CheckByte(byte) {
	  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
	  return -1;
	}

	// Checks at most 3 bytes at the end of a Buffer in order to detect an
	// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
	// needed to complete the UTF-8 character (if applicable) are returned.
	function utf8CheckIncomplete(self, buf, i) {
	  var j = buf.length - 1;
	  if (j < i) return 0;
	  var nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 1;
	    return nb;
	  }
	  if (--j < i) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 2;
	    return nb;
	  }
	  if (--j < i) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) {
	      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
	    }
	    return nb;
	  }
	  return 0;
	}

	// Validates as many continuation bytes for a multi-byte UTF-8 character as
	// needed or are available. If we see a non-continuation byte where we expect
	// one, we "replace" the validated continuation bytes we've seen so far with
	// UTF-8 replacement characters ('\ufffd'), to match v8's UTF-8 decoding
	// behavior. The continuation byte check is included three times in the case
	// where all of the continuation bytes for a character exist in the same buffer.
	// It is also done this way as a slight performance increase instead of using a
	// loop.
	function utf8CheckExtraBytes(self, buf, p) {
	  if ((buf[0] & 0xC0) !== 0x80) {
	    self.lastNeed = 0;
	    return '\ufffd'.repeat(p);
	  }
	  if (self.lastNeed > 1 && buf.length > 1) {
	    if ((buf[1] & 0xC0) !== 0x80) {
	      self.lastNeed = 1;
	      return '\ufffd'.repeat(p + 1);
	    }
	    if (self.lastNeed > 2 && buf.length > 2) {
	      if ((buf[2] & 0xC0) !== 0x80) {
	        self.lastNeed = 2;
	        return '\ufffd'.repeat(p + 2);
	      }
	    }
	  }
	}

	// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
	function utf8FillLast(buf) {
	  var p = this.lastTotal - this.lastNeed;
	  var r = utf8CheckExtraBytes(this, buf, p);
	  if (r !== undefined) return r;
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, p, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, p, 0, buf.length);
	  this.lastNeed -= buf.length;
	}

	// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
	// partial character, the character's bytes are buffered until the required
	// number of bytes are available.
	function utf8Text(buf, i) {
	  var total = utf8CheckIncomplete(this, buf, i);
	  if (!this.lastNeed) return buf.toString('utf8', i);
	  this.lastTotal = total;
	  var end = buf.length - (total - this.lastNeed);
	  buf.copy(this.lastChar, 0, end);
	  return buf.toString('utf8', i, end);
	}

	// For UTF-8, a replacement character for each buffered byte of a (partial)
	// character needs to be added to the output.
	function utf8End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + '\ufffd'.repeat(this.lastTotal - this.lastNeed);
	  return r;
	}

	// UTF-16LE typically needs two bytes per character, but even if we have an even
	// number of bytes available, we need to check if we end on a leading/high
	// surrogate. In that case, we need to wait for the next two bytes in order to
	// decode the last character properly.
	function utf16Text(buf, i) {
	  if ((buf.length - i) % 2 === 0) {
	    var r = buf.toString('utf16le', i);
	    if (r) {
	      var c = r.charCodeAt(r.length - 1);
	      if (c >= 0xD800 && c <= 0xDBFF) {
	        this.lastNeed = 2;
	        this.lastTotal = 4;
	        this.lastChar[0] = buf[buf.length - 2];
	        this.lastChar[1] = buf[buf.length - 1];
	        return r.slice(0, -1);
	      }
	    }
	    return r;
	  }
	  this.lastNeed = 1;
	  this.lastTotal = 2;
	  this.lastChar[0] = buf[buf.length - 1];
	  return buf.toString('utf16le', i, buf.length - 1);
	}

	// For UTF-16LE we do not explicitly append special replacement characters if we
	// end on a partial character, we simply let v8 handle that.
	function utf16End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) {
	    var end = this.lastTotal - this.lastNeed;
	    return r + this.lastChar.toString('utf16le', 0, end);
	  }
	  return r;
	}

	function base64Text(buf, i) {
	  var n = (buf.length - i) % 3;
	  if (n === 0) return buf.toString('base64', i);
	  this.lastNeed = 3 - n;
	  this.lastTotal = 3;
	  if (n === 1) {
	    this.lastChar[0] = buf[buf.length - 1];
	  } else {
	    this.lastChar[0] = buf[buf.length - 2];
	    this.lastChar[1] = buf[buf.length - 1];
	  }
	  return buf.toString('base64', i, buf.length - n);
	}

	function base64End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
	  return r;
	}

	// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
	function simpleWrite(buf) {
	  return buf.toString(this.encoding);
	}

	function simpleEnd(buf) {
	  return buf && buf.length ? this.write(buf) : '';
	}

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable node/no-deprecated-api */
	var buffer = __webpack_require__(472)
	var Buffer = buffer.Buffer

	// alternative to using Object.keys for old browsers
	function copyProps (src, dst) {
	  for (var key in src) {
	    dst[key] = src[key]
	  }
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
	  module.exports = buffer
	} else {
	  // Copy properties from require('buffer')
	  copyProps(buffer, exports)
	  exports.Buffer = SafeBuffer
	}

	function SafeBuffer (arg, encodingOrOffset, length) {
	  return Buffer(arg, encodingOrOffset, length)
	}

	// Copy static methods from Buffer
	copyProps(Buffer, SafeBuffer)

	SafeBuffer.from = function (arg, encodingOrOffset, length) {
	  if (typeof arg === 'number') {
	    throw new TypeError('Argument must not be a number')
	  }
	  return Buffer(arg, encodingOrOffset, length)
	}

	SafeBuffer.alloc = function (size, fill, encoding) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  var buf = Buffer(size)
	  if (fill !== undefined) {
	    if (typeof encoding === 'string') {
	      buf.fill(fill, encoding)
	    } else {
	      buf.fill(fill)
	    }
	  } else {
	    buf.fill(0)
	  }
	  return buf
	}

	SafeBuffer.allocUnsafe = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return Buffer(size)
	}

	SafeBuffer.allocUnsafeSlow = function (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('Argument must be a number')
	  }
	  return buffer.SlowBuffer(size)
	}


/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	module.exports = ProxyHandler;

	function ProxyHandler(cbs){
		this._cbs = cbs || {};
	}

	var EVENTS = __webpack_require__(451).EVENTS;
	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(){
				if(this._cbs[name]) this._cbs[name]();
			};
		} else if(EVENTS[name] === 1){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(a){
				if(this._cbs[name]) this._cbs[name](a);
			};
		} else if(EVENTS[name] === 2){
			name = "on" + name;
			ProxyHandler.prototype[name] = function(a, b){
				if(this._cbs[name]) this._cbs[name](a, b);
			};
		} else {
			throw Error("wrong number of arguments");
		}
	});

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	var DomUtils = module.exports;

	[
		__webpack_require__(492),
		__webpack_require__(498),
		__webpack_require__(499),
		__webpack_require__(500),
		__webpack_require__(501),
		__webpack_require__(502)
	].forEach(function(ext){
		Object.keys(ext).forEach(function(key){
			DomUtils[key] = ext[key].bind(DomUtils);
		});
	});


/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(462),
	    getOuterHTML = __webpack_require__(493),
	    isTag = ElementType.isTag;

	module.exports = {
		getInnerHTML: getInnerHTML,
		getOuterHTML: getOuterHTML,
		getText: getText
	};

	function getInnerHTML(elem, opts){
		return elem.children ? elem.children.map(function(elem){
			return getOuterHTML(elem, opts);
		}).join("") : "";
	}

	function getText(elem){
		if(Array.isArray(elem)) return elem.map(getText).join("");
		if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
		if(elem.type === ElementType.CDATA) return getText(elem.children);
		if(elem.type === ElementType.Text) return elem.data;
		return "";
	}


/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	/*
	  Module dependencies
	*/
	var ElementType = __webpack_require__(494);
	var entities = __webpack_require__(495);

	/*
	  Boolean Attributes
	*/
	var booleanAttributes = {
	  __proto__: null,
	  allowfullscreen: true,
	  async: true,
	  autofocus: true,
	  autoplay: true,
	  checked: true,
	  controls: true,
	  default: true,
	  defer: true,
	  disabled: true,
	  hidden: true,
	  ismap: true,
	  loop: true,
	  multiple: true,
	  muted: true,
	  open: true,
	  readonly: true,
	  required: true,
	  reversed: true,
	  scoped: true,
	  seamless: true,
	  selected: true,
	  typemustmatch: true
	};

	var unencodedElements = {
	  __proto__: null,
	  style: true,
	  script: true,
	  xmp: true,
	  iframe: true,
	  noembed: true,
	  noframes: true,
	  plaintext: true,
	  noscript: true
	};

	/*
	  Format attributes
	*/
	function formatAttrs(attributes, opts) {
	  if (!attributes) return;

	  var output = '',
	      value;

	  // Loop through the attributes
	  for (var key in attributes) {
	    value = attributes[key];
	    if (output) {
	      output += ' ';
	    }

	    if (!value && booleanAttributes[key]) {
	      output += key;
	    } else {
	      output += key + '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
	    }
	  }

	  return output;
	}

	/*
	  Self-enclosing tags (stolen from node-htmlparser)
	*/
	var singleTag = {
	  __proto__: null,
	  area: true,
	  base: true,
	  basefont: true,
	  br: true,
	  col: true,
	  command: true,
	  embed: true,
	  frame: true,
	  hr: true,
	  img: true,
	  input: true,
	  isindex: true,
	  keygen: true,
	  link: true,
	  meta: true,
	  param: true,
	  source: true,
	  track: true,
	  wbr: true,
	};


	var render = module.exports = function(dom, opts) {
	  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
	  opts = opts || {};

	  var output = '';

	  for(var i = 0; i < dom.length; i++){
	    var elem = dom[i];

	    if (elem.type === 'root')
	      output += render(elem.children, opts);
	    else if (ElementType.isTag(elem))
	      output += renderTag(elem, opts);
	    else if (elem.type === ElementType.Directive)
	      output += renderDirective(elem);
	    else if (elem.type === ElementType.Comment)
	      output += renderComment(elem);
	    else if (elem.type === ElementType.CDATA)
	      output += renderCdata(elem);
	    else
	      output += renderText(elem, opts);
	  }

	  return output;
	};

	function renderTag(elem, opts) {
	  // Handle SVG
	  if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};

	  var tag = '<' + elem.name,
	      attribs = formatAttrs(elem.attribs, opts);

	  if (attribs) {
	    tag += ' ' + attribs;
	  }

	  if (
	    opts.xmlMode
	    && (!elem.children || elem.children.length === 0)
	  ) {
	    tag += '/>';
	  } else {
	    tag += '>';
	    if (elem.children) {
	      tag += render(elem.children, opts);
	    }

	    if (!singleTag[elem.name] || opts.xmlMode) {
	      tag += '</' + elem.name + '>';
	    }
	  }

	  return tag;
	}

	function renderDirective(elem) {
	  return '<' + elem.data + '>';
	}

	function renderText(elem, opts) {
	  var data = elem.data || '';

	  // if entities weren't decoded, no need to encode them back
	  if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
	    data = entities.encodeXML(data);
	  }

	  return data;
	}

	function renderCdata(elem) {
	  return '<![CDATA[' + elem.children[0].data + ']]>';
	}

	function renderComment(elem) {
	  return '<!--' + elem.data + '-->';
	}


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(181);

	var _history = __webpack_require__(244);

	var _subscribersListJsx = __webpack_require__(274);

	var _subscribersListJsx2 = _interopRequireDefault(_subscribersListJsx);

	var _subscribersFormJsx = __webpack_require__(290);

	var _subscribersFormJsx2 = _interopRequireDefault(_subscribersFormJsx);

	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return this.props.children;
	  }
	});

	var container = document.getElementById('subscribers_container');

	if (container) {
	  _reactDom2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2['default'].createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2['default'].createElement(_reactRouter.IndexRoute, { component: _subscribersListJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'new', component: _subscribersFormJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'edit/:id', component: _subscribersFormJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _subscribersListJsx2['default'] })
	    )
	  ), container);
	}

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	var encode = __webpack_require__(496),
	    decode = __webpack_require__(497);

	exports.decode = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
	};

	exports.decodeStrict = function(data, level){
		return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
	};

	exports.encode = function(data, level){
		return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
	};

	exports.encodeXML = encode.XML;

	exports.encodeHTML4 =
	exports.encodeHTML5 =
	exports.encodeHTML  = encode.HTML;

	exports.decodeXML =
	exports.decodeXMLStrict = decode.XML;

	exports.decodeHTML4 =
	exports.decodeHTML5 =
	exports.decodeHTML = decode.HTML;

	exports.decodeHTML4Strict =
	exports.decodeHTML5Strict =
	exports.decodeHTMLStrict = decode.HTMLStrict;

	exports.escape = encode.escape;


/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	var inverseXML = getInverseObj(__webpack_require__(458)),
	    xmlReplacer = getInverseReplacer(inverseXML);

	exports.XML = getInverse(inverseXML, xmlReplacer);

	var inverseHTML = getInverseObj(__webpack_require__(456)),
	    htmlReplacer = getInverseReplacer(inverseHTML);

	exports.HTML = getInverse(inverseHTML, htmlReplacer);

	function getInverseObj(obj){
		return Object.keys(obj).sort().reduce(function(inverse, name){
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}

	function getInverseReplacer(inverse){
		var single = [],
		    multiple = [];

		Object.keys(inverse).forEach(function(k){
			if(k.length === 1){
				single.push("\\" + k);
			} else {
				multiple.push(k);
			}
		});

		//TODO add ranges
		multiple.unshift("[" + single.join("") + "]");

		return new RegExp(multiple.join("|"), "g");
	}

	var re_nonASCII = /[^\0-\x7F]/g,
	    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

	function singleCharReplacer(c){
		return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
	}

	function astralReplacer(c){
		// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		var high = c.charCodeAt(0);
		var low  = c.charCodeAt(1);
		var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
		return "&#x" + codePoint.toString(16).toUpperCase() + ";";
	}

	function getInverse(inverse, re){
		function func(name){
			return inverse[name];
		}

		return function(data){
			return data
					.replace(re, func)
					.replace(re_astralSymbols, astralReplacer)
					.replace(re_nonASCII, singleCharReplacer);
		};
	}

	var re_xmlChars = getInverseReplacer(inverseXML);

	function escapeXML(data){
		return data
				.replace(re_xmlChars, singleCharReplacer)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	}

	exports.escape = escapeXML;


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	var entityMap = __webpack_require__(456),
	    legacyMap = __webpack_require__(457),
	    xmlMap    = __webpack_require__(458),
	    decodeCodePoint = __webpack_require__(454);

	var decodeXMLStrict  = getStrictDecoder(xmlMap),
	    decodeHTMLStrict = getStrictDecoder(entityMap);

	function getStrictDecoder(map){
		var keys = Object.keys(map).join("|"),
		    replace = getReplacer(map);

		keys += "|#[xX][\\da-fA-F]+|#\\d+";

		var re = new RegExp("&(?:" + keys + ");", "g");

		return function(str){
			return String(str).replace(re, replace);
		};
	}

	var decodeHTML = (function(){
		var legacy = Object.keys(legacyMap)
			.sort(sorter);

		var keys = Object.keys(entityMap)
			.sort(sorter);

		for(var i = 0, j = 0; i < keys.length; i++){
			if(legacy[j] === keys[i]){
				keys[i] += ";?";
				j++;
			} else {
				keys[i] += ";";
			}
		}

		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
		    replace = getReplacer(entityMap);

		function replacer(str){
			if(str.substr(-1) !== ";") str += ";";
			return replace(str);
		}

		//TODO consider creating a merged map
		return function(str){
			return String(str).replace(re, replacer);
		};
	}());

	function sorter(a, b){
		return a < b ? 1 : -1;
	}

	function getReplacer(map){
		return function replace(str){
			if(str.charAt(1) === "#"){
				if(str.charAt(2) === "X" || str.charAt(2) === "x"){
					return decodeCodePoint(parseInt(str.substr(3), 16));
				}
				return decodeCodePoint(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)];
		};
	}

	module.exports = {
		XML: decodeXMLStrict,
		HTML: decodeHTML,
		HTMLStrict: decodeHTMLStrict
	};

/***/ },

/***/ 498:
/***/ function(module, exports) {

	var getChildren = exports.getChildren = function(elem){
		return elem.children;
	};

	var getParent = exports.getParent = function(elem){
		return elem.parent;
	};

	exports.getSiblings = function(elem){
		var parent = getParent(elem);
		return parent ? getChildren(parent) : [elem];
	};

	exports.getAttributeValue = function(elem, name){
		return elem.attribs && elem.attribs[name];
	};

	exports.hasAttrib = function(elem, name){
		return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
	};

	exports.getName = function(elem){
		return elem.name;
	};


/***/ },

/***/ 499:
/***/ function(module, exports) {

	exports.removeElement = function(elem){
		if(elem.prev) elem.prev.next = elem.next;
		if(elem.next) elem.next.prev = elem.prev;

		if(elem.parent){
			var childs = elem.parent.children;
			childs.splice(childs.lastIndexOf(elem), 1);
		}
	};

	exports.replaceElement = function(elem, replacement){
		var prev = replacement.prev = elem.prev;
		if(prev){
			prev.next = replacement;
		}

		var next = replacement.next = elem.next;
		if(next){
			next.prev = replacement;
		}

		var parent = replacement.parent = elem.parent;
		if(parent){
			var childs = parent.children;
			childs[childs.lastIndexOf(elem)] = replacement;
		}
	};

	exports.appendChild = function(elem, child){
		child.parent = elem;

		if(elem.children.push(child) !== 1){
			var sibling = elem.children[elem.children.length - 2];
			sibling.next = child;
			child.prev = sibling;
			child.next = null;
		}
	};

	exports.append = function(elem, next){
		var parent = elem.parent,
			currNext = elem.next;

		next.next = currNext;
		next.prev = elem;
		elem.next = next;
		next.parent = parent;

		if(currNext){
			currNext.prev = next;
			if(parent){
				var childs = parent.children;
				childs.splice(childs.lastIndexOf(currNext), 0, next);
			}
		} else if(parent){
			parent.children.push(next);
		}
	};

	exports.prepend = function(elem, prev){
		var parent = elem.parent;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(elem), 0, prev);
		}

		if(elem.prev){
			elem.prev.next = prev;
		}
		
		prev.parent = parent;
		prev.prev = elem.prev;
		prev.next = elem;
		elem.prev = prev;
	};




/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	var isTag = __webpack_require__(462).isTag;

	module.exports = {
		filter: filter,
		find: find,
		findOneChild: findOneChild,
		findOne: findOne,
		existsOne: existsOne,
		findAll: findAll
	};

	function filter(test, element, recurse, limit){
		if(!Array.isArray(element)) element = [element];

		if(typeof limit !== "number" || !isFinite(limit)){
			limit = Infinity;
		}
		return find(test, element, recurse !== false, limit);
	}

	function find(test, elems, recurse, limit){
		var result = [], childs;

		for(var i = 0, j = elems.length; i < j; i++){
			if(test(elems[i])){
				result.push(elems[i]);
				if(--limit <= 0) break;
			}

			childs = elems[i].children;
			if(recurse && childs && childs.length > 0){
				childs = find(test, childs, recurse, limit);
				result = result.concat(childs);
				limit -= childs.length;
				if(limit <= 0) break;
			}
		}

		return result;
	}

	function findOneChild(test, elems){
		for(var i = 0, l = elems.length; i < l; i++){
			if(test(elems[i])) return elems[i];
		}

		return null;
	}

	function findOne(test, elems){
		var elem = null;

		for(var i = 0, l = elems.length; i < l && !elem; i++){
			if(!isTag(elems[i])){
				continue;
			} else if(test(elems[i])){
				elem = elems[i];
			} else if(elems[i].children.length > 0){
				elem = findOne(test, elems[i].children);
			}
		}

		return elem;
	}

	function existsOne(test, elems){
		for(var i = 0, l = elems.length; i < l; i++){
			if(
				isTag(elems[i]) && (
					test(elems[i]) || (
						elems[i].children.length > 0 &&
						existsOne(test, elems[i].children)
					)
				)
			){
				return true;
			}
		}

		return false;
	}

	function findAll(test, rootElems){
		var result = [];
		var stack = [rootElems];
		while(stack.length){
			var elems = stack.pop();
			for(var i = 0, j = elems.length; i < j; i++){
				if(!isTag(elems[i])) continue;
				if(test(elems[i])) result.push(elems[i]);
			}
			while(j-- > 0){
				if(elems[j].children && elems[j].children.length > 0){
					stack.push(elems[j].children);
				}
			}
		}
		return result;
	}


/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	var ElementType = __webpack_require__(462);
	var isTag = exports.isTag = ElementType.isTag;

	exports.testElement = function(options, element){
		for(var key in options){
			if(!options.hasOwnProperty(key));
			else if(key === "tag_name"){
				if(!isTag(element) || !options.tag_name(element.name)){
					return false;
				}
			} else if(key === "tag_type"){
				if(!options.tag_type(element.type)) return false;
			} else if(key === "tag_contains"){
				if(isTag(element) || !options.tag_contains(element.data)){
					return false;
				}
			} else if(!element.attribs || !options[key](element.attribs[key])){
				return false;
			}
		}
		return true;
	};

	var Checks = {
		tag_name: function(name){
			if(typeof name === "function"){
				return function(elem){ return isTag(elem) && name(elem.name); };
			} else if(name === "*"){
				return isTag;
			} else {
				return function(elem){ return isTag(elem) && elem.name === name; };
			}
		},
		tag_type: function(type){
			if(typeof type === "function"){
				return function(elem){ return type(elem.type); };
			} else {
				return function(elem){ return elem.type === type; };
			}
		},
		tag_contains: function(data){
			if(typeof data === "function"){
				return function(elem){ return !isTag(elem) && data(elem.data); };
			} else {
				return function(elem){ return !isTag(elem) && elem.data === data; };
			}
		}
	};

	function getAttribCheck(attrib, value){
		if(typeof value === "function"){
			return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
		} else {
			return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
		}
	}

	function combineFuncs(a, b){
		return function(elem){
			return a(elem) || b(elem);
		};
	}

	exports.getElements = function(options, element, recurse, limit){
		var funcs = Object.keys(options).map(function(key){
			var value = options[key];
			return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
		});

		return funcs.length === 0 ? [] : this.filter(
			funcs.reduce(combineFuncs),
			element, recurse, limit
		);
	};

	exports.getElementById = function(id, element, recurse){
		if(!Array.isArray(element)) element = [element];
		return this.findOne(getAttribCheck("id", id), element, recurse !== false);
	};

	exports.getElementsByTagName = function(name, element, recurse, limit){
		return this.filter(Checks.tag_name(name), element, recurse, limit);
	};

	exports.getElementsByTagType = function(type, element, recurse, limit){
		return this.filter(Checks.tag_type(type), element, recurse, limit);
	};


/***/ },

/***/ 502:
/***/ function(module, exports) {

	// removeSubsets
	// Given an array of nodes, remove any member that is contained by another.
	exports.removeSubsets = function(nodes) {
		var idx = nodes.length, node, ancestor, replace;

		// Check if each node (or one of its ancestors) is already contained in the
		// array.
		while (--idx > -1) {
			node = ancestor = nodes[idx];

			// Temporarily remove the node under consideration
			nodes[idx] = null;
			replace = true;

			while (ancestor) {
				if (nodes.indexOf(ancestor) > -1) {
					replace = false;
					nodes.splice(idx, 1);
					break;
				}
				ancestor = ancestor.parent;
			}

			// If the node has been found to be unique, re-insert it.
			if (replace) {
				nodes[idx] = node;
			}
		}

		return nodes;
	};

	// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
	var POSITION = {
		DISCONNECTED: 1,
		PRECEDING: 2,
		FOLLOWING: 4,
		CONTAINS: 8,
		CONTAINED_BY: 16
	};

	// Compare the position of one node against another node in any other document.
	// The return value is a bitmask with the following values:
	//
	// document order:
	// > There is an ordering, document order, defined on all the nodes in the
	// > document corresponding to the order in which the first character of the
	// > XML representation of each node occurs in the XML representation of the
	// > document after expansion of general entities. Thus, the document element
	// > node will be the first node. Element nodes occur before their children.
	// > Thus, document order orders element nodes in order of the occurrence of
	// > their start-tag in the XML (after expansion of entities). The attribute
	// > nodes of an element occur after the element and before its children. The
	// > relative order of attribute nodes is implementation-dependent./
	// Source:
	// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
	//
	// @argument {Node} nodaA The first node to use in the comparison
	// @argument {Node} nodeB The second node to use in the comparison
	//
	// @return {Number} A bitmask describing the input nodes' relative position.
	//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
	//         a description of these values.
	var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
		var aParents = [];
		var bParents = [];
		var current, sharedParent, siblings, aSibling, bSibling, idx;

		if (nodeA === nodeB) {
			return 0;
		}

		current = nodeA;
		while (current) {
			aParents.unshift(current);
			current = current.parent;
		}
		current = nodeB;
		while (current) {
			bParents.unshift(current);
			current = current.parent;
		}

		idx = 0;
		while (aParents[idx] === bParents[idx]) {
			idx++;
		}

		if (idx === 0) {
			return POSITION.DISCONNECTED;
		}

		sharedParent = aParents[idx - 1];
		siblings = sharedParent.children;
		aSibling = aParents[idx];
		bSibling = bParents[idx];

		if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
			if (sharedParent === nodeB) {
				return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
			}
			return POSITION.FOLLOWING;
		} else {
			if (sharedParent === nodeA) {
				return POSITION.PRECEDING | POSITION.CONTAINS;
			}
			return POSITION.PRECEDING;
		}
	};

	// Sort an array of nodes based on their relative position in the document and
	// remove any duplicate nodes. If the array contains nodes that do not belong
	// to the same document, sort order is unspecified.
	//
	// @argument {Array} nodes Array of DOM nodes
	//
	// @returns {Array} collection of unique nodes, sorted in document order
	exports.uniqueSort = function(nodes) {
		var idx = nodes.length, node, position;

		nodes = nodes.slice();

		while (--idx > -1) {
			node = nodes[idx];
			position = nodes.indexOf(node);
			if (position > -1 && position < idx) {
				nodes.splice(idx, 1);
			}
		}
		nodes.sort(function(a, b) {
			var relative = comparePos(a, b);
			if (relative & POSITION.PRECEDING) {
				return -1;
			} else if (relative & POSITION.FOLLOWING) {
				return 1;
			}
			return 0;
		});

		return nodes;
	};


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	module.exports = CollectingHandler;

	function CollectingHandler(cbs){
		this._cbs = cbs || {};
		this.events = [];
	}

	var EVENTS = __webpack_require__(451).EVENTS;
	Object.keys(EVENTS).forEach(function(name){
		if(EVENTS[name] === 0){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(){
				this.events.push([name]);
				if(this._cbs[name]) this._cbs[name]();
			};
		} else if(EVENTS[name] === 1){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(a){
				this.events.push([name, a]);
				if(this._cbs[name]) this._cbs[name](a);
			};
		} else if(EVENTS[name] === 2){
			name = "on" + name;
			CollectingHandler.prototype[name] = function(a, b){
				this.events.push([name, a, b]);
				if(this._cbs[name]) this._cbs[name](a, b);
			};
		} else {
			throw Error("wrong number of arguments");
		}
	});

	CollectingHandler.prototype.onreset = function(){
		this.events = [];
		if(this._cbs.onreset) this._cbs.onreset();
	};

	CollectingHandler.prototype.restart = function(){
		if(this._cbs.onreset) this._cbs.onreset();

		for(var i = 0, len = this.events.length; i < len; i++){
			if(this._cbs[this.events[i][0]]){

				var num = this.events[i].length;

				if(num === 1){
					this._cbs[this.events[i][0]]();
				} else if(num === 2){
					this._cbs[this.events[i][0]](this.events[i][1]);
				} else {
					this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
				}
			}
		}
	};


/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ProcessNodes;

	var _elementTypes = __webpack_require__(505);

	var _elementTypes2 = _interopRequireDefault(_elementTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Tests a htmlparser2 node and returns whether is it a text node at the start and end of the line containing only
	 * white space. This allows these node types to be excluded from the rendering because they are unnecessary.
	 *
	 * @param {Object} node The element object as created by htmlparser2
	 * @returns {boolean} Whether
	 */
	var filterOutEmptyTextNodes = function filterOutEmptyTextNodes(node) {
	  return !(node.type === 'text' && /\r?\n/.test(node.data) && node.data.trim() === '');
	};

	/**
	 * Converts a htmlparser2 node to a React element
	 *
	 * @param {Object} node The htmlparser2 node to convert
	 * @param {Number} index The index of the current node
	 * @returns {React.Element}
	 */
	var convertNodeToElement = function convertNodeToElement(node, index) {
	  var key = 'rhp-' + index;
	  return _elementTypes2.default[node.type](node, key);
	};

	/**
	 * Processes the nodes generated by htmlparser2 and convert them all into React elements
	 *
	 * @param {Object[]} nodes List of nodes to process
	 * @returns {React.Element[]} The list of processed React elements
	 */
	function ProcessNodes(nodes) {

	  return nodes.filter(filterOutEmptyTextNodes).map(function (node, index) {
	    return convertNodeToElement(node, index);
	  });
	}

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ElementType$Text$Ele;

	var _htmlparser = __webpack_require__(451);

	var _TextElementType = __webpack_require__(506);

	var _TextElementType2 = _interopRequireDefault(_TextElementType);

	var _TagElementType = __webpack_require__(507);

	var _TagElementType2 = _interopRequireDefault(_TagElementType);

	var _StyleElementType = __webpack_require__(515);

	var _StyleElementType2 = _interopRequireDefault(_StyleElementType);

	var _UnsupportedElementType = __webpack_require__(516);

	var _UnsupportedElementType2 = _interopRequireDefault(_UnsupportedElementType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
	                                                                                                                                                                                                                   * Map each htmlparser2 element type to a function which will convert that element type to a React element
	                                                                                                                                                                                                                   * Not all of the element types are supported so the UnsupportedElementType is used for them which will not return any
	                                                                                                                                                                                                                   * value
	                                                                                                                                                                                                                   */

	exports.default = (_ElementType$Text$Ele = {}, _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Text, _TextElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Tag, _TagElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Style, _StyleElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Directive, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Comment, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Script, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.CDATA, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Doctype, _UnsupportedElementType2.default), _ElementType$Text$Ele);

/***/ },

/***/ 506:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TextElementType;
	/**
	 * Converts a text node to a React text element
	 *
	 * @param {Object} node The text node
	 * @returns {String} The text
	 */
	function TextElementType(node) {

	  // React will accept plain text for rendering so just return the node data
	  return node.data;
	}

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TagElementType;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ProcessNodes = __webpack_require__(504);

	var _ProcessNodes2 = _interopRequireDefault(_ProcessNodes);

	var _GeneratePropsFromAttributes = __webpack_require__(508);

	var _GeneratePropsFromAttributes2 = _interopRequireDefault(_GeneratePropsFromAttributes);

	var _TransformTagName = __webpack_require__(513);

	var _TransformTagName2 = _interopRequireDefault(_TransformTagName);

	var _VoidElements = __webpack_require__(514);

	var _VoidElements2 = _interopRequireDefault(_VoidElements);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts any element (excluding style - see StyleElementType - and script) to a react element.
	 *
	 * @param {Object} node The tag node
	 * @param {String} key The key to give the React element
	 * @returns {React.Element} The React tag element
	 */
	function TagElementType(node, key) {

	  // generate props
	  var props = (0, _GeneratePropsFromAttributes2.default)(node.attribs, key);

	  // transform the tag name if needed
	  var tagName = (0, _TransformTagName2.default)(node.name);

	  // If the node is not a void element and has children then process them
	  var children = null;
	  if (_VoidElements2.default.indexOf(tagName) === -1) {
	    children = (0, _ProcessNodes2.default)(node.children);
	  }

	  // create and return the element
	  return _react2.default.createElement(tagName, props, children);
	}

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = GeneratePropsFromAttributes;

	var _HtmlAttributesToReact = __webpack_require__(509);

	var _HtmlAttributesToReact2 = _interopRequireDefault(_HtmlAttributesToReact);

	var _InlineStyleToObject = __webpack_require__(512);

	var _InlineStyleToObject2 = _interopRequireDefault(_InlineStyleToObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Generates props for a React element from an object of HTML attributes
	 *
	 * @param {Object} attributes The HTML attributes
	 * @param {String} key The key to give the react element
	 */
	function GeneratePropsFromAttributes(attributes, key) {

	  // generate props
	  var props = _extends({}, (0, _HtmlAttributesToReact2.default)(attributes), { key: key });

	  // if there is a style prop then convert it to a React style object
	  if (props.style) {
	    props.style = (0, _InlineStyleToObject2.default)(props.style);
	  }

	  return props;
	}

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = HtmlAttributesToReact;

	var _BooleanAttributes = __webpack_require__(510);

	var _BooleanAttributes2 = _interopRequireDefault(_BooleanAttributes);

	var _ReactAttributes = __webpack_require__(511);

	var _ReactAttributes2 = _interopRequireDefault(_ReactAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns the parsed attribute value taking into account things like boolean attributes
	 *
	 * @param {String} attribute The name of the attribute
	 * @param {*} value The value of the attribute from the HTML
	 * @returns {*} The parsed attribute value
	 */
	var getParsedAttributeValue = function getParsedAttributeValue(attribute, value) {

	  // if the attribute if a boolean then it's value should be the same as it's name
	  // e.g. disabled="disabled"
	  var lowerBooleanAttributes = _BooleanAttributes2.default.map(function (attr) {
	    return attr.toLowerCase();
	  });
	  if (lowerBooleanAttributes.indexOf(attribute.toLowerCase()) >= 0) {
	    value = attribute;
	  }

	  return value;
	};

	/**
	 * Takes an object of standard HTML property names and converts them to their React counterpart. If the react
	 * version does not exist for an attribute then just use it as it is
	 *
	 * @param {Object} attributes The HTML attributes to convert
	 * @returns {Object} The React attributes
	 */
	function HtmlAttributesToReact(attributes) {

	  return Object.keys(attributes).reduce(function (mappedAttributes, attribute) {

	    // lowercase the attribute name and find it in the react attribute map
	    var lowerCaseAttribute = attribute.toLowerCase();

	    // format the attribute name
	    var name = _ReactAttributes2.default[lowerCaseAttribute] || lowerCaseAttribute;

	    // add the parsed attribute value to the mapped attributes
	    mappedAttributes[name] = getParsedAttributeValue(name, attributes[attribute]);

	    return mappedAttributes;
	  }, {});
	}

/***/ },

/***/ 510:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * List of boolean attributes
	 * These attributes should have their React attribute value set to be the same as their name
	 * E.g. <input disabled> = <input disabled>
	 *      <input disabled=""> = <input disabled>
	 *      <input disabled="disabled"> = <input disabled>
	 * @type {Array}
	 */
	exports.default = ['allowfullScreen', 'async', 'autoplay', 'capture', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'itemscope'];

/***/ },

/***/ 511:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Mapping of standard HTML attributes to their React counterparts
	 * List taken and reversed from react/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
	 * https://github.com/facebook/react/blob/c9c3c339b757682f1154f1c915eb55e6a8766933/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
	 * @type {Object}
	 */
	exports.default = {
	  /**
	   * Standard Properties
	   */
	  accept: 'accept',
	  'accept-charset': 'acceptCharset',
	  accesskey: 'accessKey',
	  action: 'action',
	  allowfullscreen: 'allowFullScreen',
	  allowtransparency: 'allowTransparency',
	  alt: 'alt',
	  async: 'async',
	  autocomplete: 'autoComplete',
	  autoplay: 'autoPlay',
	  capture: 'capture',
	  cellpadding: 'cellPadding',
	  cellspacing: 'cellSpacing',
	  charset: 'charSet',
	  challenge: 'challenge',
	  checked: 'checked',
	  classid: 'classID',
	  class: 'className',
	  cols: 'cols',
	  colspan: 'colSpan',
	  content: 'content',
	  contenteditable: 'contentEditable',
	  contextmenu: 'contextMenu',
	  controls: 'controls',
	  coords: 'coords',
	  crossorigin: 'crossOrigin',
	  data: 'data',
	  datetime: 'dateTime',
	  default: 'default',
	  defer: 'defer',
	  dir: 'dir',
	  disabled: 'disabled',
	  download: 'download',
	  draggable: 'draggable',
	  enctype: 'encType',
	  form: 'form',
	  formaction: 'formAction',
	  formenctype: 'formEncType',
	  formmethod: 'formMethod',
	  formnovalidate: 'formNoValidate',
	  formtarget: 'formTarget',
	  frameborder: 'frameBorder',
	  headers: 'headers',
	  height: 'height',
	  hidden: 'hidden',
	  high: 'high',
	  href: 'href',
	  hreflang: 'hrefLang',
	  for: 'htmlFor',
	  'http-equiv': 'httpEquiv',
	  icon: 'icon',
	  id: 'id',
	  inputmode: 'inputMode',
	  integrity: 'integrity',
	  is: 'is',
	  keyparams: 'keyParams',
	  keytype: 'keyType',
	  kind: 'kind',
	  label: 'label',
	  lang: 'lang',
	  list: 'list',
	  loop: 'loop',
	  low: 'low',
	  manifest: 'manifest',
	  marginheight: 'marginHeight',
	  marginwidth: 'marginWidth',
	  max: 'max',
	  maxlength: 'maxLength',
	  media: 'media',
	  mediagroup: 'mediaGroup',
	  method: 'method',
	  min: 'min',
	  minlength: 'minLength',
	  multiple: 'multiple',
	  muted: 'muted',
	  name: 'name',
	  nonce: 'nonce',
	  novalidate: 'noValidate',
	  open: 'open',
	  optimum: 'optimum',
	  pattern: 'pattern',
	  placeholder: 'placeholder',
	  poster: 'poster',
	  preload: 'preload',
	  radiogroup: 'radioGroup',
	  readonly: 'readOnly',
	  rel: 'rel',
	  required: 'required',
	  reversed: 'reversed',
	  role: 'role',
	  rows: 'rows',
	  rowspan: 'rowSpan',
	  sandbox: 'sandbox',
	  scope: 'scope',
	  scoped: 'scoped',
	  scrolling: 'scrolling',
	  seamless: 'seamless',
	  selected: 'selected',
	  shape: 'shape',
	  size: 'size',
	  sizes: 'sizes',
	  span: 'span',
	  spellcheck: 'spellCheck',
	  src: 'src',
	  srcdoc: 'srcDoc',
	  srclang: 'srcLang',
	  srcset: 'srcSet',
	  start: 'start',
	  step: 'step',
	  style: 'style',
	  summary: 'summary',
	  tabindex: 'tabIndex',
	  target: 'target',
	  title: 'title',
	  type: 'type',
	  usemap: 'useMap',
	  value: 'value',
	  width: 'width',
	  wmode: 'wmode',
	  wrap: 'wrap',
	  /**
	   * RDFa Properties
	   */
	  about: 'about',
	  datatype: 'datatype',
	  inlist: 'inlist',
	  prefix: 'prefix',
	  property: 'property',
	  resource: 'resource',
	  typeof: 'typeof',
	  vocab: 'vocab',
	  /**
	   * Non-standard Properties
	   */
	  autocapitalize: 'autoCapitalize',
	  autocorrect: 'autoCorrect',
	  autosave: 'autoSave',
	  color: 'color',
	  itemprop: 'itemProp',
	  itemscope: 'itemScope',
	  itemtype: 'itemType',
	  itemid: 'itemID',
	  itemref: 'itemRef',
	  results: 'results',
	  security: 'security',
	  unselectable: 'unselectable',
	  autofocus: 'autoFocus'
	};

/***/ },

/***/ 512:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.default = InlineStyleToObject;
	/**
	 * Converts an inline style string into an object of React style properties
	 *
	 * @param {String} inlineStyle='' The inline style to convert
	 * @returns {Object} The converted style
	 */
	function InlineStyleToObject() {
	  var inlineStyle = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];


	  // just return empty object if the inlineStyle is empty
	  if (inlineStyle === '') {
	    return {};
	  }

	  return inlineStyle.split(';').reduce(function (styleObject, stylePropertyValue) {

	    // extract the style property name and value

	    var _stylePropertyValue$s = stylePropertyValue.split(':').map(function (item) {
	      return item.trim().toLowerCase();
	    });

	    var _stylePropertyValue$s2 = _slicedToArray(_stylePropertyValue$s, 2);

	    var property = _stylePropertyValue$s2[0];
	    var value = _stylePropertyValue$s2[1];

	    // if there is no value (i.e. no : in the style) then ignore it

	    if (value === undefined) {
	      return styleObject;
	    }

	    // convert the property name into the correct React format
	    // remove all hyphens and convert the letter immediately after each hyphen to upper case
	    // additionally don't uppercase any -ms- prefix
	    // e.g. -ms-style-property = msStyleProperty
	    //      -webkit-style-property = WebkitStyleProperty
	    property = property.replace(/^-ms-/, 'ms-').replace(/-(.)/g, function (_, character) {
	      return character.toUpperCase();
	    });

	    // add the new style property and value to the style object
	    styleObject[property] = value;

	    return styleObject;
	  }, {});
	}

/***/ },

/***/ 513:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TransformTagName;
	var TAGS_TO_TRANSFORM = {
	  'html': 'div',
	  'head': 'div',
	  'body': 'div'
	};

	/**
	 * Transforms the specified tag name to another tag name if needed
	 *
	 * @param {String} tagName The name of the tag
	 * @returns {String} The transformed tag name or the original if it doesn't need to be transformed
	 */
	function TransformTagName(tagName) {
	  if (TAGS_TO_TRANSFORM.hasOwnProperty(tagName)) {
	    return TAGS_TO_TRANSFORM[tagName];
	  } else {
	    return tagName;
	  }
	}

/***/ },

/***/ 514:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * List of void elements
	 * These elements are not allowed to have children
	 * @type {Array}
	 */
	exports.default = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = StyleElementType;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _GeneratePropsFromAttributes = __webpack_require__(508);

	var _GeneratePropsFromAttributes2 = _interopRequireDefault(_GeneratePropsFromAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts a <style> element to a React element
	 *
	 * @param {Object} node The style node
	 * @param {String} key The key to give the React element
	 * @returns {React.Element} The React style element
	 */
	function StyleElementType(node, key) {

	  // The style element only ever has a single child which is the styles so try and find this to add as
	  // a child to the style element that will be created
	  var styles = void 0;
	  if (node.children.length > 0) {
	    styles = node.children[0].data;
	  }

	  // generate props
	  var props = (0, _GeneratePropsFromAttributes2.default)(node.attribs, key);

	  // create and return the element
	  return _react2.default.createElement('style', props, styles);
	}

/***/ },

/***/ 516:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = UnsupportedElementType;
	/**
	 * Handles an unsupported element type by returning null so nothing is rendered
	 * @returns {null}
	 */
	function UnsupportedElementType() {

	  // do nothing because the element type is unsupported
	  // comment, directive, script, cdata, doctype are all currently unsupported
	  return null;
	}

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(181), __webpack_require__(280), __webpack_require__(276), __webpack_require__(292), __webpack_require__(521), __webpack_require__(518), __webpack_require__(522), __webpack_require__(432), __webpack_require__(435), __webpack_require__(275)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, Router, _, MailPoet, Form, StandardNewsletterFields, NotificationNewsletterFields, WelcomeNewsletterFields, Breadcrumb, HelpTooltip, jQuery) {

	  var NewsletterSend = React.createClass({
	    displayName: 'NewsletterSend',

	    contextTypes: {
	      router: React.PropTypes.object.isRequired
	    },
	    getInitialState: function getInitialState() {
	      return {
	        fields: [],
	        item: {},
	        loading: false
	      };
	    },
	    getFieldsByNewsletter: function getFieldsByNewsletter(newsletter) {
	      var type = this.getSubtype(newsletter);
	      return type.getFields(newsletter);
	    },
	    getSendButtonOptions: function getSendButtonOptions() {
	      var type = this.getSubtype(this.state.item);
	      return type.getSendButtonOptions(this.state.item);
	    },
	    getSubtype: function getSubtype(newsletter) {
	      switch (newsletter.type) {
	        case 'notification':
	          return NotificationNewsletterFields;
	        case 'welcome':
	          return WelcomeNewsletterFields;
	        default:
	          return StandardNewsletterFields;
	      }
	    },
	    isValid: function isValid() {
	      return jQuery('#mailpoet_newsletter').parsley().isValid();
	    },
	    componentDidMount: function componentDidMount() {
	      if (this.isMounted()) {
	        this.loadItem(this.props.params.id);
	      }
	      jQuery('#mailpoet_newsletter').parsley();
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(props) {
	      this.loadItem(props.params.id);
	    },
	    loadItem: function loadItem(id) {
	      var _this = this;

	      this.setState({ loading: true });

	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'get',
	        data: {
	          id: id
	        }
	      }).done(function (response) {
	        _this.setState({
	          loading: false,
	          item: response.data,
	          fields: _this.getFieldsByNewsletter(response.data)
	        });
	      }).fail(function () {
	        _this.setState({
	          loading: false,
	          item: {}
	        }, function () {
	          _this.context.router.push('/new');
	        });
	      });
	    },
	    handleSend: function handleSend(e) {
	      var _this2 = this;

	      e.preventDefault();

	      if (!this.isValid()) {
	        jQuery('#mailpoet_newsletter').parsley().validate();
	      } else {
	        this._save(e).done(function () {
	          _this2.setState({ loading: true });
	        }).done(function (response) {
	          switch (response.data.type) {
	            case 'notification':
	            case 'welcome':
	              return MailPoet.Ajax.post({
	                api_version: window.mailpoet_api_version,
	                endpoint: 'newsletters',
	                action: 'setStatus',
	                data: {
	                  id: _this2.props.params.id,
	                  status: 'active'
	                }
	              }).done(function (response) {
	                // redirect to listing based on newsletter type
	                _this2.context.router.push('/' + (_this2.state.item.type || ''));
	                var opts = _this2.state.item.options;
	                // display success message depending on newsletter type
	                if (response.data.type === 'welcome') {
	                  MailPoet.Notice.success(MailPoet.I18n.t('welcomeEmailActivated'));
	                  MailPoet.trackEvent('Emails > Welcome email activated', {
	                    'MailPoet Free version': window.mailpoet_version,
	                    'List type': opts.event,
	                    Delay: opts.afterTimeNumber + ' ' + opts.afterTimeType
	                  });
	                } else if (response.data.type === 'notification') {
	                  MailPoet.Notice.success(MailPoet.I18n.t('postNotificationActivated'));
	                  MailPoet.trackEvent('Emails > Post notifications activated', {
	                    'MailPoet Free version': window.mailpoet_version,
	                    Frequency: opts.intervalType
	                  });
	                }
	              }).fail(_this2._showError);
	            default:
	              return MailPoet.Ajax.post({
	                api_version: window.mailpoet_api_version,
	                endpoint: 'sendingQueue',
	                action: 'add',
	                data: {
	                  newsletter_id: _this2.props.params.id
	                }
	              }).done(function (response) {
	                // redirect to listing based on newsletter type
	                _this2.context.router.push('/' + (_this2.state.item.type || ''));

	                if (response.data.status === 'scheduled') {
	                  MailPoet.Notice.success(MailPoet.I18n.t('newsletterHasBeenScheduled'));
	                  MailPoet.trackEvent('Emails > Newsletter sent', {
	                    scheduled: true,
	                    'MailPoet Free version': window.mailpoet_version
	                  });
	                } else {
	                  MailPoet.Notice.success(MailPoet.I18n.t('newsletterBeingSent'));
	                  MailPoet.trackEvent('Emails > Newsletter sent', {
	                    scheduled: false,
	                    'MailPoet Free version': window.mailpoet_version
	                  });
	                }
	              }).fail(_this2._showError);
	          }
	        }).fail(this._showError).always(function () {
	          _this2.setState({ loading: false });
	        });
	      }
	      return false;
	    },
	    handleResume: function handleResume(e) {
	      var _this3 = this;

	      e.preventDefault();
	      if (!this.isValid()) {
	        jQuery('#mailpoet_newsletter').parsley().validate();
	      } else {
	        this._save(e).done(function () {
	          _this3.setState({ loading: true });
	        }).done(function () {
	          MailPoet.Ajax.post({
	            api_version: window.mailpoet_api_version,
	            endpoint: 'sendingQueue',
	            action: 'resume',
	            data: {
	              newsletter_id: _this3.state.item.id
	            }
	          }).done(function () {
	            _this3.context.router.push('/' + (_this3.state.item.type || ''));
	            MailPoet.Notice.success(MailPoet.I18n.t('newsletterSendingHasBeenResumed'));
	          }).fail(function (response) {
	            if (response.errors.length > 0) {
	              MailPoet.Notice.error(response.errors.map(function (error) {
	                return error.message;
	              }), { scroll: true });
	            }
	          });
	        }).fail(this._showError).always(function () {
	          _this3.setState({ loading: false });
	        });
	      }
	      return false;
	    },
	    handleSave: function handleSave(e) {
	      var _this4 = this;

	      e.preventDefault();

	      this._save(e).done(function () {
	        MailPoet.Notice.success(MailPoet.I18n.t('newsletterUpdated'));
	      }).done(function () {
	        _this4.context.router.push('/' + (_this4.state.item.type || ''));
	      }).fail(this._showError);
	    },
	    handleRedirectToDesign: function handleRedirectToDesign(e) {
	      e.preventDefault();
	      var redirectTo = e.target.href;

	      this._save(e).done(function () {
	        MailPoet.Notice.success(MailPoet.I18n.t('newsletterUpdated'));
	      }).done(function () {
	        window.location = redirectTo;
	      }).fail(this._showError);
	    },
	    _save: function _save() {
	      var _this5 = this;

	      var data = this.state.item;
	      data.queue = undefined;
	      this.setState({ loading: true });

	      // Store only properties that can be changed on this page
	      var IGNORED_NEWSLETTER_PROPERTIES = ['preheader', 'body', 'created_at', 'deleted_at', 'hash', 'status', 'updated_at', 'type'];
	      var newsletterData = _.omit(data, IGNORED_NEWSLETTER_PROPERTIES);

	      return MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'save',
	        data: newsletterData
	      }).always(function () {
	        _this5.setState({ loading: false });
	      });
	    },
	    _showError: function _showError(response) {
	      if (response.errors.length > 0) {
	        MailPoet.Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    },
	    handleFormChange: function handleFormChange(e) {
	      var item = this.state.item;
	      var field = e.target.name;

	      item[field] = e.target.value;

	      this.setState({
	        item: item
	      });
	      return true;
	    },
	    render: function render() {
	      var isPaused = this.state.item.status == 'sending' && this.state.item.queue && this.state.item.queue.status == 'paused';
	      var fields = this.state.fields.map(function (field) {
	        var newField = field;
	        if (field.name == 'segments' || field.name == 'options') {
	          newField.disabled = isPaused;
	        }
	        return newField;
	      });
	      var sendButtonOptions = this.getSendButtonOptions();
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          MailPoet.I18n.t('finalNewsletterStep')
	        ),
	        React.createElement(Breadcrumb, { step: 'send' }),
	        React.createElement(
	          Form,
	          {
	            id: 'mailpoet_newsletter',
	            fields: fields,
	            item: this.state.item,
	            loading: this.state.loading,
	            onChange: this.handleFormChange,
	            onSubmit: this.handleSave
	          },
	          React.createElement(
	            'p',
	            { className: 'submit' },
	            isPaused ? React.createElement('input', {
	              className: 'button button-primary',
	              type: 'button',
	              onClick: this.handleResume,
	              value: MailPoet.I18n.t('resume') }) : React.createElement('input', _extends({
	              className: 'button button-primary',
	              type: 'button',
	              onClick: this.handleSend,
	              value: MailPoet.I18n.t('send')
	            }, sendButtonOptions)),
	            ' ',
	            React.createElement('input', {
	              className: 'button button-secondary',
	              type: 'submit',
	              value: MailPoet.I18n.t('saveDraftAndClose') }),
	            ' ',
	            MailPoet.I18n.t('orSimply'),
	            ' ',
	            React.createElement(
	              'a',
	              {
	                href: '?page=mailpoet-newsletter-editor&id=' + this.props.params.id,
	                onClick: this.handleRedirectToDesign },
	              MailPoet.I18n.t('goBackToDesign')
	            ),
	            '.'
	          ),
	          !isPaused && sendButtonOptions['disabled'] && sendButtonOptions['disabled'] === 'disabled' && React.createElement(HelpTooltip, {
	            tooltip: MailPoet.I18n.t('helpTooltipSendEmail'),
	            tooltipId: 'helpTooltipSendEmail'
	          })
	        )
	      );
	    }
	  });

	  return NewsletterSend;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(276), __webpack_require__(429), __webpack_require__(519), __webpack_require__(280)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MailPoet, Hooks, Scheduling, _) {

	  var fields = [{
	    name: 'subject',
	    label: MailPoet.I18n.t('subjectLine'),
	    tip: MailPoet.I18n.t('postNotificationSubjectLineTip'),
	    type: 'text',
	    validation: {
	      'data-parsley-required': true,
	      'data-parsley-required-message': MailPoet.I18n.t('emptySubjectLineError')
	    }
	  }, {
	    name: 'options',
	    label: MailPoet.I18n.t('selectFrequency'),
	    type: 'reactComponent',
	    component: Scheduling
	  }, {
	    name: 'segments',
	    label: MailPoet.I18n.t('segments'),
	    tip: MailPoet.I18n.t('segmentsTip'),
	    type: 'selection',
	    placeholder: MailPoet.I18n.t('selectSegmentPlaceholder'),
	    id: 'mailpoet_segments',
	    api_version: window.mailpoet_api_version,
	    endpoint: 'segments',
	    multiple: true,
	    filter: function filter(segment) {
	      return !segment.deleted_at;
	    },
	    getLabel: function getLabel(segment) {
	      return segment.name + ' (' + parseInt(segment.subscribers, 10).toLocaleString() + ')';
	    },
	    transformChangedValue: function transformChangedValue(segment_ids) {
	      var all_segments = this.state.items;
	      return _.map(segment_ids, function (id) {
	        return _.find(all_segments, function (segment) {
	          return segment.id === id;
	        });
	      });
	    },
	    validation: {
	      'data-parsley-required': true,
	      'data-parsley-required-message': MailPoet.I18n.t('noSegmentsSelectedError')
	    }
	  }, {
	    name: 'sender',
	    label: MailPoet.I18n.t('sender'),
	    tip: MailPoet.I18n.t('senderTip'),
	    fields: [{
	      name: 'sender_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderNamePlaceholder'),
	      validation: {
	        'data-parsley-required': true
	      }
	    }, {
	      name: 'sender_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderAddressPlaceholder'),
	      validation: {
	        'data-parsley-required': true,
	        'data-parsley-type': 'email'
	      }
	    }]
	  }, {
	    name: 'reply-to',
	    label: MailPoet.I18n.t('replyTo'),
	    tip: MailPoet.I18n.t('replyToTip'),
	    inline: true,
	    fields: [{
	      name: 'reply_to_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToNamePlaceholder')
	    }, {
	      name: 'reply_to_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToAddressPlaceholder')
	    }]
	  }];

	  fields = Hooks.applyFilters('mailpoet_newsletters_3rd_step_fields', fields);

	  return {
	    getFields: function getFields() {
	      return fields;
	    },
	    getSendButtonOptions: function getSendButtonOptions() {
	      return {
	        value: MailPoet.I18n.t('activate')
	      };
	    }
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _underscore = __webpack_require__(280);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formFieldsSelectJsx = __webpack_require__(297);

	var _formFieldsSelectJsx2 = _interopRequireDefault(_formFieldsSelectJsx);

	var _newslettersSchedulingCommonJsx = __webpack_require__(520);

	var intervalField = {
	  name: 'intervalType',
	  values: _newslettersSchedulingCommonJsx.intervalValues
	};

	var timeOfDayField = {
	  name: 'timeOfDay',
	  values: _newslettersSchedulingCommonJsx.timeOfDayValues
	};

	var weekDayField = {
	  name: 'weekDay',
	  values: _newslettersSchedulingCommonJsx.weekDayValues
	};

	var monthDayField = {
	  name: 'monthDay',
	  values: _newslettersSchedulingCommonJsx.monthDayValues
	};

	var nthWeekDayField = {
	  name: 'nthWeekDay',
	  values: _newslettersSchedulingCommonJsx.nthWeekDayValues
	};

	var NotificationScheduling = _react2['default'].createClass({
	  displayName: 'NotificationScheduling',

	  _getCurrentValue: function _getCurrentValue() {
	    return this.props.item[this.props.field.name] || {};
	  },
	  handleValueChange: function handleValueChange(name, value) {
	    var oldValue = this._getCurrentValue();
	    var newValue = {};

	    newValue[name] = value;

	    return this.props.onValueChange({
	      target: {
	        name: this.props.field.name,
	        value: _underscore2['default'].extend({}, oldValue, newValue)
	      }
	    });
	  },
	  handleIntervalChange: function handleIntervalChange(event) {
	    return this.handleValueChange('intervalType', event.target.value);
	  },
	  handleTimeOfDayChange: function handleTimeOfDayChange(event) {
	    return this.handleValueChange('timeOfDay', event.target.value);
	  },
	  handleWeekDayChange: function handleWeekDayChange(event) {
	    return this.handleValueChange('weekDay', event.target.value);
	  },
	  handleMonthDayChange: function handleMonthDayChange(event) {
	    return this.handleValueChange('monthDay', event.target.value);
	  },
	  handleNthWeekDayChange: function handleNthWeekDayChange(event) {
	    return this.handleValueChange('nthWeekDay', event.target.value);
	  },
	  render: function render() {
	    var value = this._getCurrentValue();
	    var timeOfDaySelection = undefined;
	    var weekDaySelection = undefined;
	    var monthDaySelection = undefined;
	    var nthWeekDaySelection = undefined;

	    if (value.intervalType !== 'immediately') {
	      timeOfDaySelection = _react2['default'].createElement(_formFieldsSelectJsx2['default'], {
	        field: timeOfDayField,
	        item: this._getCurrentValue(),
	        onValueChange: this.handleTimeOfDayChange });
	    }

	    if (value.intervalType === 'weekly' || value.intervalType === 'nthWeekDay') {
	      weekDaySelection = _react2['default'].createElement(_formFieldsSelectJsx2['default'], {
	        field: weekDayField,
	        item: this._getCurrentValue(),
	        onValueChange: this.handleWeekDayChange });
	    }

	    if (value.intervalType === 'monthly') {
	      monthDaySelection = _react2['default'].createElement(_formFieldsSelectJsx2['default'], {
	        field: monthDayField,
	        item: this._getCurrentValue(),
	        onValueChange: this.handleMonthDayChange });
	    }

	    if (value.intervalType === 'nthWeekDay') {
	      nthWeekDaySelection = _react2['default'].createElement(_formFieldsSelectJsx2['default'], {
	        field: nthWeekDayField,
	        item: this._getCurrentValue(),
	        onValueChange: this.handleNthWeekDayChange });
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(_formFieldsSelectJsx2['default'], {
	        field: intervalField,
	        item: this._getCurrentValue(),
	        onValueChange: this.handleIntervalChange }),
	      nthWeekDaySelection,
	      monthDaySelection,
	      weekDaySelection,
	      timeOfDaySelection
	    );
	  }
	});

	module.exports = NotificationScheduling;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(275), __webpack_require__(280), __webpack_require__(276), __webpack_require__(429)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, jq, _, MailPoet, Hooks) {

	  var jQuery = jq;

	  var currentTime = window.mailpoet_current_time || '00:00';
	  var defaultDateTime = window.mailpoet_current_date + ' 00:00:00';
	  var timeOfDayItems = window.mailpoet_schedule_time_of_day;
	  var dateDisplayFormat = window.mailpoet_date_display_format;
	  var dateStorageFormat = window.mailpoet_date_storage_format;

	  var datepickerTranslations = {
	    closeText: MailPoet.I18n.t('close'),
	    currentText: MailPoet.I18n.t('today'),
	    nextText: MailPoet.I18n.t('next'),
	    prevText: MailPoet.I18n.t('previous'),
	    monthNames: [MailPoet.I18n.t('january'), MailPoet.I18n.t('february'), MailPoet.I18n.t('march'), MailPoet.I18n.t('april'), MailPoet.I18n.t('may'), MailPoet.I18n.t('june'), MailPoet.I18n.t('july'), MailPoet.I18n.t('august'), MailPoet.I18n.t('september'), MailPoet.I18n.t('october'), MailPoet.I18n.t('november'), MailPoet.I18n.t('december')],
	    monthNamesShort: [MailPoet.I18n.t('januaryShort'), MailPoet.I18n.t('februaryShort'), MailPoet.I18n.t('marchShort'), MailPoet.I18n.t('aprilShort'), MailPoet.I18n.t('mayShort'), MailPoet.I18n.t('juneShort'), MailPoet.I18n.t('julyShort'), MailPoet.I18n.t('augustShort'), MailPoet.I18n.t('septemberShort'), MailPoet.I18n.t('octoberShort'), MailPoet.I18n.t('novemberShort'), MailPoet.I18n.t('decemberShort')],
	    dayNames: [MailPoet.I18n.t('sunday'), MailPoet.I18n.t('monday'), MailPoet.I18n.t('tuesday'), MailPoet.I18n.t('wednesday'), MailPoet.I18n.t('thursday'), MailPoet.I18n.t('friday'), MailPoet.I18n.t('saturday')],
	    dayNamesShort: [MailPoet.I18n.t('sundayShort'), MailPoet.I18n.t('mondayShort'), MailPoet.I18n.t('tuesdayShort'), MailPoet.I18n.t('wednesdayShort'), MailPoet.I18n.t('thursdayShort'), MailPoet.I18n.t('fridayShort'), MailPoet.I18n.t('saturdayShort')],
	    dayNamesMin: [MailPoet.I18n.t('sundayMin'), MailPoet.I18n.t('mondayMin'), MailPoet.I18n.t('tuesdayMin'), MailPoet.I18n.t('wednesdayMin'), MailPoet.I18n.t('thursdayMin'), MailPoet.I18n.t('fridayMin'), MailPoet.I18n.t('saturdayMin')]
	  };

	  var DateText = React.createClass({
	    displayName: 'DateText',

	    onChange: function onChange(event) {
	      var changeEvent = event;
	      // Swap display format to storage format
	      var displayDate = changeEvent.target.value;
	      var storageDate = this.getStorageDate(displayDate);

	      changeEvent.target.value = storageDate;
	      this.props.onChange(changeEvent);
	    },
	    componentDidMount: function componentDidMount() {
	      var $element = jQuery(this.refs.dateInput);
	      var that = this;
	      if ($element.datepicker) {
	        // Override jQuery UI datepicker Date parsing and formatting
	        jQuery.datepicker.parseDate = function (format, value) {
	          // Transform string format to Date object
	          return MailPoet.Date.toDate(value, {
	            parseFormat: dateDisplayFormat,
	            format: format
	          });
	        };
	        jQuery.datepicker.formatDate = function (format, value) {
	          // Transform Date object to string format
	          var newValue = MailPoet.Date.format(value, {
	            format: format
	          });
	          return newValue;
	        };

	        $element.datepicker(_.extend({
	          dateFormat: this.props.displayFormat,
	          isRTL: false,
	          onSelect: function onSelect(value) {
	            that.onChange({
	              target: {
	                name: that.getFieldName(),
	                value: value
	              }
	            });
	          }
	        }, datepickerTranslations));

	        this.datepickerInitialized = true;
	      }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (this.datepickerInitialized) {
	        jQuery(this.refs.dateInput).datepicker('destroy');
	      }
	    },
	    getFieldName: function getFieldName() {
	      return this.props.name || 'date';
	    },
	    getDisplayDate: function getDisplayDate(date) {
	      return MailPoet.Date.format(date, {
	        parseFormat: this.props.storageFormat,
	        format: this.props.displayFormat
	      });
	    },
	    getStorageDate: function getStorageDate(date) {
	      return MailPoet.Date.format(date, {
	        parseFormat: this.props.displayFormat,
	        format: this.props.storageFormat
	      });
	    },
	    render: function render() {
	      return React.createElement('input', _extends({
	        type: 'text',
	        size: '10',
	        name: this.getFieldName(),
	        value: this.getDisplayDate(this.props.value),
	        readOnly: true,
	        disabled: this.props.disabled,
	        onChange: this.onChange,
	        ref: 'dateInput'
	      }, this.props.validation));
	    }
	  });

	  var TimeSelect = React.createClass({
	    displayName: 'TimeSelect',

	    render: function render() {
	      var options = Object.keys(timeOfDayItems).map(function (value, index) {
	        return React.createElement(
	          'option',
	          {
	            key: 'option-' + index,
	            value: value },
	          timeOfDayItems[value]
	        );
	      });

	      return React.createElement(
	        'select',
	        _extends({
	          name: this.props.name || 'time',
	          value: this.props.value,
	          disabled: this.props.disabled,
	          onChange: this.props.onChange
	        }, this.props.validation),
	        options
	      );
	    }
	  });

	  var DateTime = React.createClass({
	    displayName: 'DateTime',

	    _DATE_TIME_SEPARATOR: ' ',
	    getInitialState: function getInitialState() {
	      return this._buildStateFromProps(this.props);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	      this.setState(this._buildStateFromProps(nextProps));
	    },
	    _buildStateFromProps: function _buildStateFromProps(props) {
	      var value = props.value || defaultDateTime;

	      var _value$split = value.split(this._DATE_TIME_SEPARATOR);

	      var _value$split2 = _slicedToArray(_value$split, 2);

	      var date = _value$split2[0];
	      var time = _value$split2[1];

	      return {
	        date: date,
	        time: time
	      };
	    },
	    handleChange: function handleChange(event) {
	      var newState = {};
	      newState[event.target.name] = event.target.value;

	      this.setState(newState, function () {
	        this.propagateChange();
	      });
	    },
	    propagateChange: function propagateChange() {
	      if (this.props.onChange) {
	        return this.props.onChange({
	          target: {
	            name: this.props.name || '',
	            value: this.getDateTime()
	          }
	        });
	      }
	    },
	    getDateTime: function getDateTime() {
	      return [this.state.date, this.state.time].join(this._DATE_TIME_SEPARATOR);
	    },
	    render: function render() {
	      return React.createElement(
	        'span',
	        null,
	        React.createElement(DateText, {
	          name: 'date',
	          value: this.state.date,
	          onChange: this.handleChange,
	          displayFormat: dateDisplayFormat,
	          storageFormat: dateStorageFormat,
	          disabled: this.props.disabled,
	          validation: this.props.dateValidation }),
	        React.createElement(TimeSelect, {
	          name: 'time',
	          value: this.state.time,
	          onChange: this.handleChange,
	          disabled: this.props.disabled,
	          validation: this.props.timeValidation })
	      );
	    }
	  });

	  var StandardScheduling = React.createClass({
	    displayName: 'StandardScheduling',

	    _getCurrentValue: function _getCurrentValue() {
	      return _.defaults(this.props.item[this.props.field.name] || {}, {
	        isScheduled: '0',
	        scheduledAt: defaultDateTime
	      });
	    },
	    handleValueChange: function handleValueChange(event) {
	      var oldValue = this._getCurrentValue();
	      var newValue = {};
	      newValue[event.target.name] = event.target.value;

	      return this.props.onValueChange({
	        target: {
	          name: this.props.field.name,
	          value: _.extend({}, oldValue, newValue)
	        }
	      });
	    },
	    handleCheckboxChange: function handleCheckboxChange(event) {
	      var changeEvent = event;
	      changeEvent.target.value = this.refs.isScheduled.checked ? '1' : '0';
	      return this.handleValueChange(changeEvent);
	    },
	    isScheduled: function isScheduled() {
	      return this._getCurrentValue().isScheduled === '1';
	    },
	    getDateValidation: function getDateValidation() {
	      return {
	        'data-parsley-required': true,
	        'data-parsley-required-message': MailPoet.I18n.t('noScheduledDateError'),
	        'data-parsley-errors-container': '#mailpoet_scheduling'
	      };
	    },
	    render: function render() {
	      var schedulingOptions = undefined;

	      if (this.isScheduled()) {
	        schedulingOptions = React.createElement(
	          'span',
	          { id: 'mailpoet_scheduling' },
	          React.createElement(DateTime, {
	            name: 'scheduledAt',
	            value: this._getCurrentValue().scheduledAt,
	            onChange: this.handleValueChange,
	            disabled: this.props.field.disabled,
	            dateValidation: this.getDateValidation() }),
	          ' ',
	          React.createElement(
	            'span',
	            null,
	            MailPoet.I18n.t('websiteTimeIs'),
	            ' ',
	            React.createElement(
	              'code',
	              null,
	              currentTime
	            )
	          )
	        );
	      }
	      return React.createElement(
	        'div',
	        null,
	        React.createElement('input', {
	          ref: 'isScheduled',
	          type: 'checkbox',
	          value: '1',
	          checked: this.isScheduled(),
	          disabled: this.props.field.disabled,
	          name: 'isScheduled',
	          onChange: this.handleCheckboxChange }),
	        schedulingOptions
	      );
	    }
	  });

	  var fields = [{
	    name: 'subject',
	    label: MailPoet.I18n.t('subjectLine'),
	    tip: MailPoet.I18n.t('subjectLineTip'),
	    type: 'text',
	    validation: {
	      'data-parsley-required': true,
	      'data-parsley-required-message': MailPoet.I18n.t('emptySubjectLineError')
	    }
	  }, {
	    name: 'segments',
	    label: MailPoet.I18n.t('segments'),
	    tip: MailPoet.I18n.t('segmentsTip'),
	    type: 'selection',
	    placeholder: MailPoet.I18n.t('selectSegmentPlaceholder'),
	    id: 'mailpoet_segments',
	    api_version: window.mailpoet_api_version,
	    endpoint: 'segments',
	    multiple: true,
	    filter: function filter(segment) {
	      return !segment.deleted_at;
	    },
	    getLabel: function getLabel(segment) {
	      return segment.name + ' (' + parseInt(segment.subscribers, 10).toLocaleString() + ')';
	    },
	    transformChangedValue: function transformChangedValue(segment_ids) {
	      var all_segments = this.state.items;
	      return _.map(segment_ids, function (id) {
	        return _.find(all_segments, function (segment) {
	          return segment.id === id;
	        });
	      });
	    },
	    validation: {
	      'data-parsley-required': true,
	      'data-parsley-required-message': MailPoet.I18n.t('noSegmentsSelectedError')
	    }
	  }, {
	    name: 'sender',
	    label: MailPoet.I18n.t('sender'),
	    tip: MailPoet.I18n.t('senderTip'),
	    fields: [{
	      name: 'sender_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderNamePlaceholder'),
	      validation: {
	        'data-parsley-required': true
	      }
	    }, {
	      name: 'sender_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderAddressPlaceholder'),
	      validation: {
	        'data-parsley-required': true,
	        'data-parsley-type': 'email'
	      }
	    }]
	  }, {
	    name: 'reply-to',
	    label: MailPoet.I18n.t('replyTo'),
	    tip: MailPoet.I18n.t('replyToTip'),
	    inline: true,
	    fields: [{
	      name: 'reply_to_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToNamePlaceholder')
	    }, {
	      name: 'reply_to_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToAddressPlaceholder')
	    }]
	  }, {
	    name: 'options',
	    label: MailPoet.I18n.t('scheduleIt'),
	    type: 'reactComponent',
	    component: StandardScheduling
	  }];

	  fields = Hooks.applyFilters('mailpoet_newsletters_3rd_step_fields', fields);

	  return {
	    getFields: function getFields() {
	      return fields;
	    },
	    getSendButtonOptions: function getSendButtonOptions(newsletter) {
	      var newsletterOptions = newsletter || {};

	      var isScheduled = typeof newsletterOptions.options === 'object' && newsletterOptions.options.isScheduled === '1';
	      var options = {
	        value: isScheduled ? MailPoet.I18n.t('schedule') : MailPoet.I18n.t('send')
	      };

	      if (newsletterOptions.status === 'sent' || newsletterOptions.status === 'sending') {
	        options['disabled'] = 'disabled';
	      }

	      return options;
	    }
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(276), __webpack_require__(429), __webpack_require__(523)], __WEBPACK_AMD_DEFINE_RESULT__ = function (MailPoet, Hooks, Scheduling) {

	  var fields = [{
	    name: 'subject',
	    label: MailPoet.I18n.t('subjectLine'),
	    tip: MailPoet.I18n.t('subjectLineTip'),
	    type: 'text',
	    validation: {
	      'data-parsley-required': true,
	      'data-parsley-required-message': MailPoet.I18n.t('emptySubjectLineError')
	    }
	  }, {
	    name: 'options',
	    label: MailPoet.I18n.t('sendWelcomeEmailWhen'),
	    type: 'reactComponent',
	    component: Scheduling
	  }, {
	    name: 'sender',
	    label: MailPoet.I18n.t('sender'),
	    tip: MailPoet.I18n.t('senderTip'),
	    fields: [{
	      name: 'sender_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderNamePlaceholder'),
	      validation: {
	        'data-parsley-required': true
	      }
	    }, {
	      name: 'sender_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('senderAddressPlaceholder'),
	      validation: {
	        'data-parsley-required': true,
	        'data-parsley-type': 'email'
	      }
	    }]
	  }, {
	    name: 'reply-to',
	    label: MailPoet.I18n.t('replyTo'),
	    tip: MailPoet.I18n.t('replyToTip'),
	    inline: true,
	    fields: [{
	      name: 'reply_to_name',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToNamePlaceholder')
	    }, {
	      name: 'reply_to_address',
	      type: 'text',
	      placeholder: MailPoet.I18n.t('replyToAddressPlaceholder')
	    }]
	  }];

	  fields = Hooks.applyFilters('mailpoet_newsletters_3rd_step_fields', fields);

	  return {
	    getFields: function getFields() {
	      return fields;
	    },
	    getSendButtonOptions: function getSendButtonOptions() {
	      return {
	        value: MailPoet.I18n.t('activate')
	      };
	    }
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(181), __webpack_require__(276), __webpack_require__(432)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, Router, MailPoet, Breadcrumb) {

	  var NewsletterStandard = React.createClass({
	    displayName: 'NewsletterStandard',

	    contextTypes: {
	      router: React.PropTypes.object.isRequired
	    },
	    showTemplateSelection: function showTemplateSelection(newsletterId) {
	      this.context.router.push('/template/' + newsletterId);
	    },
	    componentDidMount: function componentDidMount() {
	      var _this = this;

	      // No options for this type, create a newsletter upon mounting
	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'create',
	        data: {
	          type: 'standard'
	        }
	      }).done(function (response) {
	        _this.showTemplateSelection(response.data.id);
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          MailPoet.I18n.t('regularNewsletterTypeTitle')
	        ),
	        React.createElement(Breadcrumb, { step: 'type' })
	      );
	    }
	  });

	  return NewsletterStandard;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(280), __webpack_require__(2), __webpack_require__(181), __webpack_require__(276), __webpack_require__(519), __webpack_require__(432)], __WEBPACK_AMD_DEFINE_RESULT__ = function (_, React, Router, MailPoet, Scheduling, Breadcrumb) {

	  var field = {
	    name: 'options',
	    type: 'reactComponent',
	    component: Scheduling
	  };

	  var NewsletterNotification = React.createClass({
	    displayName: 'NewsletterNotification',

	    contextTypes: {
	      router: React.PropTypes.object.isRequired
	    },
	    getInitialState: function getInitialState() {
	      return {
	        options: {
	          intervalType: 'daily',
	          timeOfDay: 0,
	          weekDay: 1,
	          monthDay: 0,
	          nthWeekDay: 1
	        }
	      };
	    },
	    handleValueChange: function handleValueChange(event) {
	      var state = this.state;
	      state[event.target.name] = event.target.value;
	      this.setState(state);
	    },
	    handleNext: function handleNext() {
	      var _this = this;

	      MailPoet.Ajax.post({
	        api_version: window.mailpoet_api_version,
	        endpoint: 'newsletters',
	        action: 'create',
	        data: _.extend({}, this.state, {
	          type: 'notification',
	          subject: MailPoet.I18n.t('draftNewsletterTitle')
	        })
	      }).done(function (response) {
	        _this.showTemplateSelection(response.data.id);
	      }).fail(function (response) {
	        if (response.errors.length > 0) {
	          MailPoet.Notice.error(response.errors.map(function (error) {
	            return error.message;
	          }), { scroll: true });
	        }
	      });
	    },
	    showTemplateSelection: function showTemplateSelection(newsletterId) {
	      this.context.router.push('/template/' + newsletterId);
	    },
	    render: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          null,
	          MailPoet.I18n.t('postNotificationNewsletterTypeTitle')
	        ),
	        React.createElement(Breadcrumb, { step: 'type' }),
	        React.createElement(
	          'h3',
	          null,
	          MailPoet.I18n.t('selectFrequency')
	        ),
	        React.createElement(Scheduling, {
	          item: this.state,
	          field: field,
	          onValueChange: this.handleValueChange }),
	        React.createElement(
	          'p',
	          { className: 'submit' },
	          React.createElement('input', {
	            className: 'button button-primary',
	            type: 'button',
	            onClick: this.handleNext,
	            value: MailPoet.I18n.t('next') })
	        )
	      );
	    }
	  });

	  return NewsletterNotification;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _wpJsHooks = __webpack_require__(429);

	var _wpJsHooks2 = _interopRequireDefault(_wpJsHooks);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var _newslettersListingsTabsJsx = __webpack_require__(528);

	var _newslettersListingsTabsJsx2 = _interopRequireDefault(_newslettersListingsTabsJsx);

	var _newslettersListingsMixinsJsx = __webpack_require__(529);

	var mailpoet_tracking_enabled = !!window['mailpoet_tracking_enabled'];

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  }
	};

	var columns = [{
	  name: 'subject',
	  label: _mailpoet2['default'].I18n.t('subject'),
	  sortable: true
	}, {
	  name: 'status',
	  label: _mailpoet2['default'].I18n.t('status')
	}, {
	  name: 'segments',
	  label: _mailpoet2['default'].I18n.t('lists')
	}, {
	  name: 'statistics',
	  label: _mailpoet2['default'].I18n.t('statistics'),
	  display: mailpoet_tracking_enabled
	}, {
	  name: 'sent_at',
	  label: _mailpoet2['default'].I18n.t('sentOn'),
	  sortable: true
	}];

	var bulk_actions = [{
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var confirmEdit = function confirmEdit(newsletter) {
	  if (!newsletter.queue || newsletter.status != 'sending' || newsletter.queue.status !== null || window.confirm(_mailpoet2['default'].I18n.t('confirmEdit'))) {
	    window.location.href = '?page=mailpoet-newsletter-editor&id=' + newsletter.id;
	  }
	};

	var newsletter_actions = [{
	  name: 'view',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: newsletter.preview_url, target: '_blank' },
	      _mailpoet2['default'].I18n.t('preview')
	    );
	  }
	}, {
	  name: 'edit',
	  label: _mailpoet2['default'].I18n.t('edit'),
	  onClick: confirmEdit
	}, {
	  name: 'duplicate',
	  label: _mailpoet2['default'].I18n.t('duplicate'),
	  onClick: function onClick(newsletter, refresh) {
	    return _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'newsletters',
	      action: 'duplicate',
	      data: {
	        id: newsletter.id
	      }
	    }).done(function (response) {
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('newsletterDuplicated').replace('%$1s', response.data.subject));
	      refresh();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  }
	}, {
	  name: 'trash'
	}];

	_wpJsHooks2['default'].addFilter('mailpoet_newsletters_listings_standard_actions', _newslettersListingsMixinsJsx.StatisticsMixin.addStatsCTAAction);
	newsletter_actions = _wpJsHooks2['default'].applyFilters('mailpoet_newsletters_listings_standard_actions', newsletter_actions);

	var NewsletterListStandard = _react2['default'].createClass({
	  displayName: 'NewsletterListStandard',

	  mixins: [_newslettersListingsMixinsJsx.QueueMixin, _newslettersListingsMixinsJsx.StatisticsMixin, _newslettersListingsMixinsJsx.MailerMixin],
	  renderItem: function renderItem(newsletter, actions, meta) {
	    var rowClasses = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    var segments = newsletter.segments.map(function (segment) {
	      return segment.name;
	    }).join(', ');

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: rowClasses },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              className: 'row-title',
	              href: 'javascript:;',
	              onClick: function () {
	                return confirmEdit(newsletter);
	              }
	            },
	            newsletter.queue.newsletter_rendered_subject || newsletter.subject
	          )
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('status') },
	        this.renderQueueStatus(newsletter, meta.mta_log)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('lists') },
	        segments
	      ),
	      mailpoet_tracking_enabled === true ? _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('statistics') },
	        this.renderStatistics(newsletter, undefined, meta.current_time)
	      ) : null,
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('sentOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          newsletter.sent_at ? _mailpoet2['default'].Date.format(newsletter.sent_at) : _mailpoet2['default'].I18n.t('notSentYet')
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'page-title-action', to: '/new',
	            onClick: function () {
	              return _mailpoet2['default'].trackEvent('Emails > Add New', { 'MailPoet Free version': window.mailpoet_version });
	            }
	          },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_newslettersListingsTabsJsx2['default'], { tab: 'standard' }),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        endpoint: 'newsletters',
	        type: 'standard',
	        base_url: 'standard',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: newsletter_actions,
	        messages: messages,
	        auto_refresh: true,
	        sort_by: 'sent_at',
	        sort_order: 'desc',
	        afterGetItems: this.checkMailerStatus
	      })
	    );
	  }
	});

	module.exports = NewsletterListStandard;

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var ListingTabs = _react2['default'].createClass({
	  displayName: 'ListingTabs',

	  getInitialState: function getInitialState() {
	    return {
	      tab: null,
	      tabs: [{
	        name: 'standard',
	        label: _mailpoet2['default'].I18n.t('tabStandardTitle'),
	        link: '/standard'
	      }, {
	        name: 'welcome',
	        label: _mailpoet2['default'].I18n.t('tabWelcomeTitle'),
	        link: '/welcome'
	      }, {
	        name: 'notification',
	        label: _mailpoet2['default'].I18n.t('tabNotificationTitle'),
	        link: '/notification'
	      }]
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var tabs = this.state.tabs.map(function (tab, index) {
	      var tabClasses = (0, _classnames2['default'])('nav-tab', { 'nav-tab-active': _this.props.tab === tab.name });

	      return _react2['default'].createElement(
	        _reactRouter.Link,
	        {
	          key: 'tab-' + index,
	          className: tabClasses,
	          to: tab.link,
	          onClick: function () {
	            return _mailpoet2['default'].trackEvent('Tab Emails > ' + tab.name + ' clicked', { 'MailPoet Free version': window.mailpoet_version });
	          }
	        },
	        tab.label
	      );
	    });

	    return _react2['default'].createElement(
	      'h2',
	      { className: 'nav-tab-wrapper' },
	      tabs
	    );
	  }
	});

	module.exports = ListingTabs;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactStringReplace = __webpack_require__(422);

	var _reactStringReplace2 = _interopRequireDefault(_reactStringReplace);

	var _reactRouter = __webpack_require__(181);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _moment = __webpack_require__(301);

	var _moment2 = _interopRequireDefault(_moment);

	var _jquery = __webpack_require__(275);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _wpJsHooks = __webpack_require__(429);

	var _wpJsHooks2 = _interopRequireDefault(_wpJsHooks);

	var _newslettersBadgesStatsJsx = __webpack_require__(530);

	var _newslettersBadgesStatsJsx2 = _interopRequireDefault(_newslettersBadgesStatsJsx);

	var _QueueMixin = {
	  pauseSending: function pauseSending(newsletter) {
	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'sendingQueue',
	      action: 'pause',
	      data: {
	        newsletter_id: newsletter.id
	      }
	    }).done(function () {
	      (0, _jquery2['default'])('#resume_' + newsletter.id).show();
	      (0, _jquery2['default'])('#pause_' + newsletter.id).hide();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  },
	  resumeSending: function resumeSending(newsletter) {
	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'sendingQueue',
	      action: 'resume',
	      data: {
	        newsletter_id: newsletter.id
	      }
	    }).done(function () {
	      (0, _jquery2['default'])('#pause_' + newsletter.id).show();
	      (0, _jquery2['default'])('#resume_' + newsletter.id).hide();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  },
	  renderQueueStatus: function renderQueueStatus(newsletter, mailer_log) {
	    if (!newsletter.queue) {
	      return _react2['default'].createElement(
	        'span',
	        null,
	        _mailpoet2['default'].I18n.t('notSentYet')
	      );
	    } else if (mailer_log.status === 'paused' && newsletter.queue.status !== 'completed') {
	      return _react2['default'].createElement(
	        'span',
	        null,
	        _mailpoet2['default'].I18n.t('paused')
	      );
	    }
	    if (newsletter.queue.status === 'scheduled') {
	      return _react2['default'].createElement(
	        'span',
	        null,
	        _mailpoet2['default'].I18n.t('scheduledFor'),
	        ' ',
	        _mailpoet2['default'].Date.format(newsletter.queue.scheduled_at)
	      );
	    }
	    var progressClasses = (0, _classnames2['default'])('mailpoet_progress', { mailpoet_progress_complete: newsletter.queue.status === 'completed' });

	    // calculate percentage done
	    var percentage = Math.round(newsletter.queue.count_processed * 100 / newsletter.queue.count_total);

	    var label = undefined;

	    if (newsletter.queue.status === 'completed') {
	      label = _react2['default'].createElement(
	        'span',
	        null,
	        _mailpoet2['default'].I18n.t('newsletterQueueCompleted').replace('%$1d', parseInt(newsletter.queue.count_processed, 10).toLocaleString()).replace('%$2d', parseInt(newsletter.queue.count_total, 10).toLocaleString())
	      );
	    } else {
	      label = _react2['default'].createElement(
	        'span',
	        null,
	        newsletter.queue.count_processed,
	        ' / ',
	        newsletter.queue.count_total,
	        '  ',
	        _react2['default'].createElement(
	          'a',
	          {
	            id: 'resume_' + newsletter.id,
	            className: 'button',
	            style: { display: newsletter.queue.status === 'paused' ? 'inline-block' : 'none' },
	            href: 'javascript:;',
	            onClick: this.resumeSending.bind(null, newsletter)
	          },
	          _mailpoet2['default'].I18n.t('resume')
	        ),
	        _react2['default'].createElement(
	          'a',
	          {
	            id: 'pause_' + newsletter.id,
	            className: 'button mailpoet_pause',
	            style: { display: newsletter.queue.status === null ? 'inline-block' : 'none' },
	            href: 'javascript:;',
	            onClick: this.pauseSending.bind(null, newsletter)
	          },
	          _mailpoet2['default'].I18n.t('pause')
	        )
	      );
	    }

	    var progress_bar_width = 0;

	    if (isNaN(percentage)) {
	      percentage = _mailpoet2['default'].I18n.t('noSubscribers');
	    } else {
	      progress_bar_width = percentage;
	      percentage += '%';
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'div',
	        { className: progressClasses },
	        _react2['default'].createElement('span', {
	          className: 'mailpoet_progress_bar',
	          style: { width: progress_bar_width + '%' }
	        }),
	        _react2['default'].createElement(
	          'span',
	          { className: 'mailpoet_progress_label' },
	          percentage
	        )
	      ),
	      _react2['default'].createElement(
	        'p',
	        { style: { textAlign: 'center' } },
	        label
	      )
	    );
	  }
	};

	var trackStatsCTAClicked = function trackStatsCTAClicked() {
	  _mailpoet2['default'].trackEvent('User has clicked a CTA to view detailed stats', { 'MailPoet Free version': window.mailpoet_version });
	};

	var _StatisticsMixin = {
	  renderStatistics: function renderStatistics(newsletter, is_sent, current_time) {
	    var sent = is_sent;
	    if (sent === undefined) {
	      // condition for standard and post notification listings
	      sent = newsletter.statistics && newsletter.queue && newsletter.queue.status !== 'scheduled';
	    }
	    if (!sent) {
	      return _react2['default'].createElement(
	        'span',
	        null,
	        _mailpoet2['default'].I18n.t('notSentYet')
	      );
	    }

	    var params = {};
	    _wpJsHooks2['default'].addFilter('mailpoet_newsletters_listing_stats_before', this.addStatsCTALink);
	    params = _wpJsHooks2['default'].applyFilters('mailpoet_newsletters_listing_stats_before', params, newsletter);

	    // welcome emails provide explicit total_sent value
	    var total_sent = ~ ~(newsletter.total_sent || newsletter.queue.count_processed);

	    var percentage_clicked = 0;
	    var percentage_opened = 0;
	    var percentage_unsubscribed = 0;

	    if (total_sent > 0) {
	      percentage_clicked = newsletter.statistics.clicked * 100 / total_sent;
	      percentage_opened = newsletter.statistics.opened * 100 / total_sent;
	      percentage_unsubscribed = newsletter.statistics.unsubscribed * 100 / total_sent;
	    }

	    // format to 1 decimal place
	    var percentage_clicked_display = _mailpoet2['default'].Num.toLocaleFixed(percentage_clicked, 1);
	    var percentage_opened_display = _mailpoet2['default'].Num.toLocaleFixed(percentage_opened, 1);
	    var percentage_unsubscribed_display = _mailpoet2['default'].Num.toLocaleFixed(percentage_unsubscribed, 1);

	    var show_stats_timeout = undefined;
	    var newsletter_date = undefined;
	    var sent_hours_ago = undefined;
	    var too_early_for_stats = undefined;
	    var show_kb_link = undefined;
	    if (current_time !== undefined) {
	      // standard emails and post notifications:
	      // display green box for newsletters that were just sent
	      show_stats_timeout = 6; // in hours
	      newsletter_date = newsletter.queue.scheduled_at || newsletter.queue.created_at;
	      sent_hours_ago = (0, _moment2['default'])(current_time).diff((0, _moment2['default'])(newsletter_date), 'hours');
	      too_early_for_stats = sent_hours_ago < show_stats_timeout;
	      show_kb_link = true;
	    } else {
	      // welcome emails: no green box and KB link
	      too_early_for_stats = false;
	      show_kb_link = false;
	    }

	    var improveStatsKBLink = 'http://beta.docs.mailpoet.com/article/191-how-to-improve-my-open-and-click-rates';

	    // thresholds to display badges
	    var min_newsletters_sent = 20;
	    var min_newsletter_opens = 5;

	    var content = undefined;
	    if (total_sent >= min_newsletters_sent && newsletter.statistics.opened >= min_newsletter_opens && !too_early_for_stats) {
	      // display stats with badges
	      content = _react2['default'].createElement(
	        'div',
	        { className: 'mailpoet_stats_text' },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'span',
	            null,
	            percentage_opened_display,
	            '% '
	          ),
	          _react2['default'].createElement(_newslettersBadgesStatsJsx2['default'], {
	            stat: 'opened',
	            rate: percentage_opened,
	            tooltipId: 'opened-' + newsletter.id
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'span',
	            null,
	            percentage_clicked_display,
	            '% '
	          ),
	          _react2['default'].createElement(_newslettersBadgesStatsJsx2['default'], {
	            stat: 'clicked',
	            rate: percentage_clicked,
	            tooltipId: 'clicked-' + newsletter.id
	          })
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'span',
	            { className: 'mailpoet_stat_hidden' },
	            percentage_unsubscribed_display,
	            '%'
	          )
	        )
	      );
	    } else {
	      // display simple stats
	      content = _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'span',
	          { className: 'mailpoet_stats_text' },
	          percentage_opened_display,
	          '%,',
	          ' ',
	          percentage_clicked_display,
	          '%',
	          _react2['default'].createElement(
	            'span',
	            { className: 'mailpoet_stat_hidden' },
	            ', ',
	            percentage_unsubscribed_display,
	            '%'
	          )
	        ),
	        too_early_for_stats && _react2['default'].createElement(
	          'div',
	          { className: 'mailpoet_badge mailpoet_badge_green' },
	          _mailpoet2['default'].I18n.t('checkBackInHours').replace('%$1d', show_stats_timeout - sent_hours_ago)
	        )
	      );
	    }

	    // thresholds to display bad open rate help
	    var max_percentage_opened = 5;
	    var min_sent_hours_ago = 24;
	    var min_total_sent = 10;

	    var after_content = undefined;
	    if (show_kb_link && percentage_opened < max_percentage_opened && sent_hours_ago >= min_sent_hours_ago && total_sent >= min_total_sent) {
	      // help link for bad open rate
	      after_content = _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'a',
	          {
	            href: improveStatsKBLink,
	            target: '_blank',
	            className: 'mailpoet_stat_link_small'
	          },
	          _mailpoet2['default'].I18n.t('improveThisLinkText')
	        )
	      );
	    }

	    if (total_sent > 0 && params.link) {
	      // wrap content in a link
	      if (params.externalLink) {
	        return _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              key: 'stats-' + newsletter.id,
	              href: params.link,
	              onClick: params.onClick || null
	            },
	            content
	          ),
	          after_content
	        );
	      }
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          {
	            key: 'stats-' + newsletter.id,
	            to: params.link,
	            onClick: params.onClick || null
	          },
	          content
	        ),
	        after_content
	      );
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      content,
	      after_content
	    );
	  },
	  addStatsCTAAction: function addStatsCTAAction(actions) {
	    if (window.mailpoet_premium_active) {
	      return actions;
	    }
	    actions.unshift({
	      name: 'stats',
	      link: function link() {
	        return _react2['default'].createElement(
	          'a',
	          { href: 'admin.php?page=mailpoet-premium', onClick: trackStatsCTAClicked },
	          _mailpoet2['default'].I18n.t('statsListingActionTitle')
	        );
	      },
	      display: function display(newsletter) {
	        // welcome emails provide explicit total_sent value
	        var count_processed = newsletter.queue && newsletter.queue.count_processed;
	        return ~ ~(newsletter.total_sent || count_processed) > 0;
	      }
	    });
	    return actions;
	  },
	  addStatsCTALink: function addStatsCTALink(params) {
	    if (window.mailpoet_premium_active) {
	      return params;
	    }
	    var newParams = params;
	    newParams.link = 'admin.php?page=mailpoet-premium';
	    newParams.externalLink = true;
	    newParams.onClick = trackStatsCTAClicked;
	    return newParams;
	  }
	};

	var _MailerMixin = {
	  checkMailerStatus: function checkMailerStatus(state) {
	    if (state.meta.mta_log.error && state.meta.mta_log.status === 'paused') {
	      _mailpoet2['default'].Notice.error('', { 'static': true, id: 'mailpoet_mailer_error' });

	      _reactDom2['default'].render(this.getMailerError(state), (0, _jquery2['default'])('[data-id="mailpoet_mailer_error"]')[0]);
	    } else {
	      _mailpoet2['default'].Notice.hide('mailpoet_mailer_error');
	    }
	  },
	  getMailerError: function getMailerError(state) {
	    var mailer_error_notice = undefined;
	    var mailer_check_settings_notice = (0, _reactStringReplace2['default'])(_mailpoet2['default'].I18n.t('mailerCheckSettingsNotice'), /\[link\](.*?)\[\/link\]/g, function (match) {
	      return _react2['default'].createElement(
	        'a',
	        { href: '?page=mailpoet-settings#mta', key: 'check-sending' },
	        match
	      );
	    });
	    if (state.meta.mta_log.error.operation === 'send') {
	      mailer_error_notice = _mailpoet2['default'].I18n.t('mailerSendErrorNotice').replace('%$1s', state.meta.mta_method).replace('%$2s', state.meta.mta_log.error.error_message);
	    } else {
	      mailer_error_notice = _mailpoet2['default'].I18n.t('mailerConnectionErrorNotice').replace('%$1s', state.meta.mta_log.error.error_message);
	    }
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'p',
	        null,
	        mailer_error_notice
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        mailer_check_settings_notice
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { href: 'javascript:;',
	            className: 'button',
	            onClick: this.resumeMailerSending
	          },
	          _mailpoet2['default'].I18n.t('mailerResumeSendingButton')
	        )
	      )
	    );
	  },
	  resumeMailerSending: function resumeMailerSending() {
	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'mailer',
	      action: 'resumeSending'
	    }).done(function () {
	      _mailpoet2['default'].Notice.hide('mailpoet_mailer_error');
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('mailerSendingResumedNotice'));
	      window.mailpoet_listing.forceUpdate();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  }
	};

	exports.QueueMixin = _QueueMixin;
	exports.StatisticsMixin = _StatisticsMixin;
	exports.MailerMixin = _MailerMixin;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var _newslettersListingsTabsJsx = __webpack_require__(528);

	var _newslettersListingsTabsJsx2 = _interopRequireDefault(_newslettersListingsTabsJsx);

	var _newslettersListingsMixinsJsx = __webpack_require__(529);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _underscore = __webpack_require__(280);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _wpJsHooks = __webpack_require__(429);

	var _wpJsHooks2 = _interopRequireDefault(_wpJsHooks);

	var mailpoet_roles = window.mailpoet_roles || {};
	var mailpoet_segments = window.mailpoet_segments || {};
	var mailpoet_tracking_enabled = !!window['mailpoet_tracking_enabled'];

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  }
	};

	var columns = [{
	  name: 'subject',
	  label: _mailpoet2['default'].I18n.t('subject'),
	  sortable: true
	}, {
	  name: 'status',
	  label: _mailpoet2['default'].I18n.t('status'),
	  width: 145
	}, {
	  name: 'settings',
	  label: _mailpoet2['default'].I18n.t('settings')
	}, {
	  name: 'statistics',
	  label: _mailpoet2['default'].I18n.t('statistics'),
	  display: mailpoet_tracking_enabled
	}, {
	  name: 'updated_at',
	  label: _mailpoet2['default'].I18n.t('lastModifiedOn'),
	  sortable: true
	}];

	var bulk_actions = [{
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var newsletter_actions = [{
	  name: 'view',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: newsletter.preview_url, target: '_blank' },
	      _mailpoet2['default'].I18n.t('preview')
	    );
	  }
	}, {
	  name: 'edit',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: '?page=mailpoet-newsletter-editor&id=' + newsletter.id },
	      _mailpoet2['default'].I18n.t('edit')
	    );
	  }
	}, {
	  name: 'trash'
	}];

	_wpJsHooks2['default'].addFilter('mailpoet_newsletters_listings_welcome_notification_actions', _newslettersListingsMixinsJsx.StatisticsMixin.addStatsCTAAction);
	newsletter_actions = _wpJsHooks2['default'].applyFilters('mailpoet_newsletters_listings_welcome_notification_actions', newsletter_actions);

	var NewsletterListWelcome = _react2['default'].createClass({
	  displayName: 'NewsletterListWelcome',

	  mixins: [_newslettersListingsMixinsJsx.StatisticsMixin, _newslettersListingsMixinsJsx.MailerMixin],
	  updateStatus: function updateStatus(e) {
	    var _this = this;

	    // make the event persist so that we can still override the selected value
	    // in the ajax callback
	    e.persist();

	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'newsletters',
	      action: 'setStatus',
	      data: {
	        id: ~ ~e.target.getAttribute('data-id'),
	        status: e.target.value
	      }
	    }).done(function (response) {
	      if (response.data.status === 'active') {
	        _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('welcomeEmailActivated'));
	      }
	      // force refresh of listing so that groups are updated
	      _this.forceUpdate();
	    }).fail(function (response) {
	      _mailpoet2['default'].Notice.error(_mailpoet2['default'].I18n.t('welcomeEmailActivationFailed'));

	      // reset value to actual newsletter's status
	      e.target.value = response.status;
	    });
	  },
	  renderStatus: function renderStatus(newsletter) {
	    var total_sent = _mailpoet2['default'].I18n.t('sentToXSubscribers').replace('%$1d', newsletter.total_sent.toLocaleString());

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement(
	          'select',
	          {
	            'data-id': newsletter.id,
	            defaultValue: newsletter.status,
	            onChange: this.updateStatus
	          },
	          _react2['default'].createElement(
	            'option',
	            { value: 'active' },
	            _mailpoet2['default'].I18n.t('active')
	          ),
	          _react2['default'].createElement(
	            'option',
	            { value: 'draft' },
	            _mailpoet2['default'].I18n.t('inactive')
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        total_sent
	      )
	    );
	  },
	  renderSettings: function renderSettings(newsletter) {
	    var sendingEvent = undefined;
	    var sendingDelay = undefined;
	    var segment = undefined;

	    // set sending event
	    switch (newsletter.options.event) {
	      case 'user':
	        // WP User
	        if (newsletter.options.role === 'mailpoet_all') {
	          sendingEvent = _mailpoet2['default'].I18n.t('welcomeEventWPUserAnyRole');
	        } else {
	          sendingEvent = _mailpoet2['default'].I18n.t('welcomeEventWPUserWithRole').replace('%$1s', mailpoet_roles[newsletter.options.role]);
	        }
	        break;

	      case 'segment':
	        // get segment
	        segment = _underscore2['default'].find(mailpoet_segments, function (segment) {
	          return ~ ~segment.id === ~ ~newsletter.options.segment;
	        });

	        if (segment === undefined) {
	          return _react2['default'].createElement(
	            'span',
	            { className: 'mailpoet_error' },
	            _mailpoet2['default'].I18n.t('sendingToSegmentsNotSpecified')
	          );
	        }
	        sendingEvent = _mailpoet2['default'].I18n.t('welcomeEventSegment').replace('%$1s', segment.name);

	        break;
	    }

	    // set sending delay
	    if (sendingEvent) {
	      if (newsletter.options.afterTimeType !== 'immediate') {
	        switch (newsletter.options.afterTimeType) {
	          case 'hours':
	            sendingDelay = _mailpoet2['default'].I18n.t('sendingDelayHours').replace('%$1d', newsletter.options.afterTimeNumber);
	            break;

	          case 'days':
	            sendingDelay = _mailpoet2['default'].I18n.t('sendingDelayDays').replace('%$1d', newsletter.options.afterTimeNumber);
	            break;

	          case 'weeks':
	            sendingDelay = _mailpoet2['default'].I18n.t('sendingDelayWeeks').replace('%$1d', newsletter.options.afterTimeNumber);
	            break;
	        }
	        sendingEvent += ' [' + sendingDelay + ']';
	      }
	      // add a "period" at the end if we do have a sendingEvent
	      sendingEvent += '.';
	    }

	    return _react2['default'].createElement(
	      'span',
	      null,
	      sendingEvent
	    );
	  },
	  renderItem: function renderItem(newsletter, actions) {
	    var rowClasses = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: rowClasses },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              className: 'row-title',
	              href: '?page=mailpoet-newsletter-editor&id=' + newsletter.id
	            },
	            newsletter.subject
	          )
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('status') },
	        this.renderStatus(newsletter)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('settings') },
	        this.renderSettings(newsletter)
	      ),
	      mailpoet_tracking_enabled === true ? _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('statistics') },
	        this.renderStatistics(newsletter, newsletter.total_sent > 0 && newsletter.statistics)
	      ) : null,
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('lastModifiedOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(newsletter.updated_at)
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'page-title-action', to: '/new' },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_newslettersListingsTabsJsx2['default'], { tab: 'welcome' }),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        endpoint: 'newsletters',
	        type: 'welcome',
	        base_url: 'welcome',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: newsletter_actions,
	        messages: messages,
	        auto_refresh: true,
	        sort_by: 'updated_at',
	        sort_order: 'desc',
	        afterGetItems: this.checkMailerStatus
	      })
	    );
	  }
	});

	module.exports = NewsletterListWelcome;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var _newslettersListingsTabsJsx = __webpack_require__(528);

	var _newslettersListingsTabsJsx2 = _interopRequireDefault(_newslettersListingsTabsJsx);

	var _newslettersListingsMixinsJsx = __webpack_require__(529);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _newslettersSchedulingCommonJsx = __webpack_require__(520);

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneNewsletterRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleNewslettersRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  }
	};

	var columns = [{
	  name: 'subject',
	  label: _mailpoet2['default'].I18n.t('subject'),
	  sortable: true
	}, {
	  name: 'status',
	  label: _mailpoet2['default'].I18n.t('status'),
	  width: 100
	}, {
	  name: 'settings',
	  label: _mailpoet2['default'].I18n.t('settings')
	}, {
	  name: 'history',
	  label: _mailpoet2['default'].I18n.t('history'),
	  width: 100
	}, {
	  name: 'updated_at',
	  label: _mailpoet2['default'].I18n.t('lastModifiedOn'),
	  sortable: true
	}];

	var bulk_actions = [{
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var newsletter_actions = [{
	  name: 'view',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: newsletter.preview_url, target: '_blank' },
	      _mailpoet2['default'].I18n.t('preview')
	    );
	  }
	}, {
	  name: 'edit',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: '?page=mailpoet-newsletter-editor&id=' + newsletter.id },
	      _mailpoet2['default'].I18n.t('edit')
	    );
	  }
	}, {
	  name: 'duplicate',
	  label: _mailpoet2['default'].I18n.t('duplicate'),
	  onClick: function onClick(newsletter, refresh) {
	    return _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'newsletters',
	      action: 'duplicate',
	      data: {
	        id: newsletter.id
	      }
	    }).done(function (response) {
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('newsletterDuplicated').replace('%$1s', response.data.subject));
	      refresh();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  }
	}, {
	  name: 'trash'
	}];

	var NewsletterListNotification = _react2['default'].createClass({
	  displayName: 'NewsletterListNotification',

	  mixins: [_newslettersListingsMixinsJsx.MailerMixin],
	  updateStatus: function updateStatus(e) {
	    var _this = this;

	    // make the event persist so that we can still override the selected value
	    // in the ajax callback
	    e.persist();

	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'newsletters',
	      action: 'setStatus',
	      data: {
	        id: ~ ~e.target.getAttribute('data-id'),
	        status: e.target.value
	      }
	    }).done(function (response) {
	      if (response.data.status === 'active') {
	        _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('postNotificationActivated'));
	      }
	      // force refresh of listing so that groups are updated
	      _this.forceUpdate();
	    }).fail(function (response) {
	      _mailpoet2['default'].Notice.error(_mailpoet2['default'].I18n.t('postNotificationActivationFailed'));

	      // reset value to actual newsletter's status
	      e.target.value = response.status;
	    });
	  },
	  renderStatus: function renderStatus(newsletter) {
	    return _react2['default'].createElement(
	      'select',
	      {
	        'data-id': newsletter.id,
	        defaultValue: newsletter.status,
	        onChange: this.updateStatus
	      },
	      _react2['default'].createElement(
	        'option',
	        { value: 'active' },
	        _mailpoet2['default'].I18n.t('active')
	      ),
	      _react2['default'].createElement(
	        'option',
	        { value: 'draft' },
	        _mailpoet2['default'].I18n.t('inactive')
	      )
	    );
	  },
	  renderSettings: function renderSettings(newsletter) {
	    var sendingFrequency = undefined;

	    // get list of segments' name
	    var segments = newsletter.segments.map(function (segment) {
	      return segment.name;
	    });
	    var sendingToSegments = _mailpoet2['default'].I18n.t('ifNewContentToSegments').replace('%$1s', segments.join(', '));

	    // check if the user has specified segments to send to
	    if (segments.length === 0) {
	      return _react2['default'].createElement(
	        'span',
	        { className: 'mailpoet_error' },
	        _mailpoet2['default'].I18n.t('sendingToSegmentsNotSpecified')
	      );
	    }

	    // set sending frequency
	    switch (newsletter.options.intervalType) {
	      case 'daily':
	        sendingFrequency = _mailpoet2['default'].I18n.t('sendDaily').replace('%$1s', _newslettersSchedulingCommonJsx.timeOfDayValues[newsletter.options.timeOfDay]);
	        break;

	      case 'weekly':
	        sendingFrequency = _mailpoet2['default'].I18n.t('sendWeekly').replace('%$1s', _newslettersSchedulingCommonJsx.weekDayValues[newsletter.options.weekDay]).replace('%$2s', _newslettersSchedulingCommonJsx.timeOfDayValues[newsletter.options.timeOfDay]);
	        break;

	      case 'monthly':
	        sendingFrequency = _mailpoet2['default'].I18n.t('sendMonthly').replace('%$1s', _newslettersSchedulingCommonJsx.monthDayValues[newsletter.options.monthDay]).replace('%$2s', _newslettersSchedulingCommonJsx.timeOfDayValues[newsletter.options.timeOfDay]);
	        break;

	      case 'nthWeekDay':
	        sendingFrequency = _mailpoet2['default'].I18n.t('sendNthWeekDay').replace('%$1s', _newslettersSchedulingCommonJsx.nthWeekDayValues[newsletter.options.nthWeekDay]).replace('%$2s', _newslettersSchedulingCommonJsx.weekDayValues[newsletter.options.weekDay]).replace('%$3s', _newslettersSchedulingCommonJsx.timeOfDayValues[newsletter.options.timeOfDay]);
	        break;

	      case 'immediately':
	        sendingFrequency = _mailpoet2['default'].I18n.t('sendImmediately');
	        break;
	    }

	    return _react2['default'].createElement(
	      'span',
	      null,
	      sendingFrequency,
	      ' ',
	      sendingToSegments
	    );
	  },
	  renderHistoryLink: function renderHistoryLink(newsletter) {
	    var childrenCount = ~ ~newsletter.children_count;
	    if (childrenCount === 0) {
	      return _mailpoet2['default'].I18n.t('notSentYet');
	    }
	    return _react2['default'].createElement(
	      _reactRouter.Link,
	      {
	        to: '/notification/history/' + newsletter.id
	      },
	      _mailpoet2['default'].I18n.t('viewHistory')
	    );
	  },
	  renderItem: function renderItem(newsletter, actions) {
	    var rowClasses = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: rowClasses },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              className: 'row-title',
	              href: '?page=mailpoet-newsletter-editor&id=' + newsletter.id
	            },
	            newsletter.subject
	          )
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('status') },
	        this.renderStatus(newsletter)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('settings') },
	        this.renderSettings(newsletter)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('history') },
	        this.renderHistoryLink(newsletter)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('lastModifiedOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(newsletter.updated_at)
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'page-title-action', to: '/new' },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_newslettersListingsTabsJsx2['default'], { tab: 'notification' }),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        endpoint: 'newsletters',
	        type: 'notification',
	        base_url: 'notification',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: newsletter_actions,
	        messages: messages,
	        auto_refresh: true,
	        sort_by: 'updated_at',
	        sort_order: 'desc',
	        afterGetItems: this.checkMailerStatus
	      })
	    );
	  }
	});

	module.exports = NewsletterListNotification;

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _wpJsHooks = __webpack_require__(429);

	var _wpJsHooks2 = _interopRequireDefault(_wpJsHooks);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var _newslettersListingsTabsJsx = __webpack_require__(528);

	var _newslettersListingsTabsJsx2 = _interopRequireDefault(_newslettersListingsTabsJsx);

	var _newslettersListingsMixinsJsx = __webpack_require__(529);

	var mailpoet_tracking_enabled = !!window['mailpoet_tracking_enabled'];

	var columns = [{
	  name: 'subject',
	  label: _mailpoet2['default'].I18n.t('subject')
	}, {
	  name: 'status',
	  label: _mailpoet2['default'].I18n.t('status')
	}, {
	  name: 'segments',
	  label: _mailpoet2['default'].I18n.t('lists')
	}, {
	  name: 'statistics',
	  label: _mailpoet2['default'].I18n.t('statistics'),
	  display: mailpoet_tracking_enabled
	}, {
	  name: 'sent_at',
	  label: _mailpoet2['default'].I18n.t('sentOn')
	}];

	var newsletter_actions = [{
	  name: 'view',
	  link: function link(newsletter) {
	    return _react2['default'].createElement(
	      'a',
	      { href: newsletter.preview_url, target: '_blank' },
	      _mailpoet2['default'].I18n.t('preview')
	    );
	  }
	}];

	_wpJsHooks2['default'].addFilter('mailpoet_newsletters_listings_notification_history_actions', _newslettersListingsMixinsJsx.StatisticsMixin.addStatsCTAAction);
	newsletter_actions = _wpJsHooks2['default'].applyFilters('mailpoet_newsletters_listings_notification_history_actions', newsletter_actions);

	var NewsletterListNotificationHistory = _react2['default'].createClass({
	  displayName: 'NewsletterListNotificationHistory',

	  mixins: [_newslettersListingsMixinsJsx.QueueMixin, _newslettersListingsMixinsJsx.StatisticsMixin, _newslettersListingsMixinsJsx.MailerMixin],
	  renderItem: function renderItem(newsletter, actions, meta) {
	    var rowClasses = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    var segments = newsletter.segments.map(function (segment) {
	      return segment.name;
	    }).join(', ');

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: rowClasses },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              href: newsletter.preview_url,
	              target: '_blank'
	            },
	            newsletter.queue.newsletter_rendered_subject || newsletter.subject
	          )
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('status') },
	        this.renderQueueStatus(newsletter, meta.mta_log)
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('lists') },
	        segments
	      ),
	      mailpoet_tracking_enabled === true ? _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('statistics') },
	        this.renderStatistics(newsletter, undefined, meta.current_time)
	      ) : null,
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('sentOn') },
	        newsletter.sent_at ? _mailpoet2['default'].Date.format(newsletter.sent_at) : _mailpoet2['default'].I18n.t('notSentYet')
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'page-title-action', to: '/new' },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_newslettersListingsTabsJsx2['default'], { tab: 'notification' }),
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        {
	          className: 'page-title-action',
	          to: '/notification'
	        },
	        _mailpoet2['default'].I18n.t('backToPostNotifications')
	      ),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        endpoint: 'newsletters',
	        type: 'notification_history',
	        base_url: 'notification/history/:parent_id',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        item_actions: newsletter_actions,
	        auto_refresh: true,
	        sort_by: 'sent_at',
	        sort_order: 'desc',
	        afterGetItems: this.checkMailerStatus
	      })
	    );
	  }
	});

	module.exports = NewsletterListNotificationHistory;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(181);

	var _history = __webpack_require__(244);

	var _segmentsListJsx = __webpack_require__(537);

	var _segmentsListJsx2 = _interopRequireDefault(_segmentsListJsx);

	var _segmentsFormJsx = __webpack_require__(538);

	var _segmentsFormJsx2 = _interopRequireDefault(_segmentsFormJsx);

	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return this.props.children;
	  }
	});

	var container = document.getElementById('segments_container');

	if (container) {
	  _reactDom2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2['default'].createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2['default'].createElement(_reactRouter.IndexRoute, { component: _segmentsListJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'new', component: _segmentsFormJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'edit/:id', component: _segmentsFormJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _segmentsListJsx2['default'] })
	    )
	  ), container);
	}

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var columns = [{
	  name: 'name',
	  label: _mailpoet2['default'].I18n.t('name'),
	  sortable: true
	}, {
	  name: 'description',
	  label: _mailpoet2['default'].I18n.t('description')
	}, {
	  name: 'subscribed',
	  label: _mailpoet2['default'].I18n.t('subscribed')
	}, {
	  name: 'unconfirmed',
	  label: _mailpoet2['default'].I18n.t('unconfirmed')
	}, {
	  name: 'unsubscribed',
	  label: _mailpoet2['default'].I18n.t('unsubscribed')
	}, {
	  name: 'bounced',
	  label: _mailpoet2['default'].I18n.t('bounced')
	}, {
	  name: 'created_at',
	  label: _mailpoet2['default'].I18n.t('createdOn'),
	  sortable: true
	}];

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSegmentTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSegmentsTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSegmentDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSegmentsDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneSegmentRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleSegmentsRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  }
	};

	var bulk_actions = [{
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var item_actions = [{
	  name: 'edit',
	  link: function link(item) {
	    return _react2['default'].createElement(
	      _reactRouter.Link,
	      { to: '/edit/' + item.id },
	      _mailpoet2['default'].I18n.t('edit')
	    );
	  },
	  display: function display(segment) {
	    return segment.type !== 'wp_users';
	  }
	}, {
	  name: 'duplicate_segment',
	  label: _mailpoet2['default'].I18n.t('duplicate'),
	  onClick: function onClick(item, refresh) {
	    return _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'segments',
	      action: 'duplicate',
	      data: {
	        id: item.id
	      }
	    }).done(function (response) {
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('listDuplicated').replace('%$1s', response.data.name));
	      refresh();
	    }).fail(function (response) {
	      _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	        return error.message;
	      }), { scroll: true });
	    });
	  },
	  display: function display(segment) {
	    return segment.type !== 'wp_users';
	  }
	}, {
	  name: 'read_more',
	  link: function link() {
	    return _react2['default'].createElement(
	      'a',
	      {
	        href: 'http://docs.mailpoet.com/article/133-the-wordpress-users-list',
	        target: '_blank'
	      },
	      _mailpoet2['default'].I18n.t('readMore')
	    );
	  },
	  display: function display(segment) {
	    return segment.type === 'wp_users';
	  }
	}, {
	  name: 'synchronize_segment',
	  label: _mailpoet2['default'].I18n.t('forceSync'),
	  onClick: function onClick(item, refresh) {
	    _mailpoet2['default'].Modal.loading(true);
	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'segments',
	      action: 'synchronize'
	    }).done(function () {
	      _mailpoet2['default'].Modal.loading(false);
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('listSynchronized').replace('%$1s', item.name));
	      refresh();
	    }).fail(function (response) {
	      _mailpoet2['default'].Modal.loading(false);
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  },
	  display: function display(segment) {
	    return segment.type === 'wp_users';
	  }
	}, {
	  name: 'view_subscribers',
	  link: function link(item) {
	    return _react2['default'].createElement(
	      'a',
	      { href: item.subscribers_url },
	      _mailpoet2['default'].I18n.t('viewSubscribers')
	    );
	  }
	}, {
	  name: 'trash',
	  display: function display(segment) {
	    return segment.type !== 'wp_users';
	  }
	}];

	var SegmentList = _react2['default'].createClass({
	  displayName: 'SegmentList',

	  renderItem: function renderItem(segment, actions) {
	    var rowClasses = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    var subscribed = ~ ~(segment.subscribers_count.subscribed || 0);
	    var unconfirmed = ~ ~(segment.subscribers_count.unconfirmed || 0);
	    var unsubscribed = ~ ~(segment.subscribers_count.unsubscribed || 0);
	    var bounced = ~ ~(segment.subscribers_count.bounced || 0);

	    var segment_name = undefined;

	    if (segment.type === 'wp_users') {
	      // the WP users segment is not editable so just display its name
	      segment_name = _react2['default'].createElement(
	        'span',
	        { className: 'row-title' },
	        segment.name
	      );
	    } else {
	      segment_name = _react2['default'].createElement(
	        _reactRouter.Link,
	        {
	          className: 'row-title',
	          to: '/edit/' + segment.id
	        },
	        segment.name
	      );
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: rowClasses },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          segment_name
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('description') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          segment.description
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('subscribed') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          subscribed.toLocaleString()
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('unconfirmed') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          unconfirmed.toLocaleString()
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('unsubscribed') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          unsubscribed.toLocaleString()
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('bounced') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          bounced.toLocaleString()
	        )
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('createdOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(segment.created_at)
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { className: 'page-title-action', to: '/new' },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        messages: messages,
	        search: false,
	        endpoint: 'segments',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: item_actions,
	        sort_by: 'name',
	        sort_order: 'asc'
	      })
	    );
	  }
	});

	module.exports = SegmentList;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	if (!global["MailPoetLib"]) global["MailPoetLib"] = {};
	module.exports = global["MailPoetLib"]["Form"] = __webpack_require__(539);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(181), __webpack_require__(276), __webpack_require__(292)], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, Router, MailPoet, Form) {

	  var fields = [{
	    name: 'name',
	    label: MailPoet.I18n.t('name'),
	    type: 'text'
	  }, {
	    name: 'description',
	    label: MailPoet.I18n.t('description'),
	    type: 'textarea',
	    tip: MailPoet.I18n.t('segmentDescriptionTip')
	  }];

	  var messages = {
	    onUpdate: function onUpdate() {
	      MailPoet.Notice.success(MailPoet.I18n.t('segmentUpdated'));
	    },
	    onCreate: function onCreate() {
	      MailPoet.Notice.success(MailPoet.I18n.t('segmentAdded'));
	      MailPoet.trackEvent('Lists > Add new', {
	        'MailPoet Free version': window.mailpoet_version
	      });
	    }
	  };

	  var Link = Router.Link;

	  var SegmentForm = React.createClass({
	    displayName: 'SegmentForm',

	    render: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          MailPoet.I18n.t('segment'),
	          React.createElement(
	            Link,
	            { className: 'page-title-action', to: '/' },
	            MailPoet.I18n.t('backToList')
	          )
	        ),
	        React.createElement(Form, {
	          endpoint: 'segments',
	          fields: fields,
	          params: this.props.params,
	          messages: messages
	        })
	      );
	    }
	  });

	  return SegmentForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(181);

	var _history = __webpack_require__(244);

	var _listJsx = __webpack_require__(541);

	var _listJsx2 = _interopRequireDefault(_listJsx);

	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return this.props.children;
	  }
	});

	var container = document.getElementById('forms_container');

	if (container) {
	  _reactDom2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2['default'].createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2['default'].createElement(_reactRouter.IndexRoute, { component: _listJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _listJsx2['default'] })
	    )
	  ), container);
	}

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _jquery = __webpack_require__(275);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _listingListingJsx = __webpack_require__(278);

	var _listingListingJsx2 = _interopRequireDefault(_listingListingJsx);

	var columns = [{
	  name: 'name',
	  label: _mailpoet2['default'].I18n.t('formName'),
	  sortable: true
	}, {
	  name: 'segments',
	  label: _mailpoet2['default'].I18n.t('segments')
	}, {
	  name: 'signups',
	  label: _mailpoet2['default'].I18n.t('signups')
	}, {
	  name: 'created_at',
	  label: _mailpoet2['default'].I18n.t('createdOn'),
	  sortable: true
	}];

	var messages = {
	  onTrash: function onTrash(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneFormTrashed');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleFormsTrashed').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onDelete: function onDelete(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneFormDeleted');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleFormsDeleted').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  },
	  onRestore: function onRestore(response) {
	    var count = ~ ~response.meta.count;
	    var message = null;

	    if (count === 1) {
	      message = _mailpoet2['default'].I18n.t('oneFormRestored');
	    } else {
	      message = _mailpoet2['default'].I18n.t('multipleFormsRestored').replace('%$1d', count.toLocaleString());
	    }
	    _mailpoet2['default'].Notice.success(message);
	  }
	};

	var bulk_actions = [{
	  name: 'trash',
	  label: _mailpoet2['default'].I18n.t('moveToTrash'),
	  onSuccess: messages.onTrash
	}];

	var item_actions = [{
	  name: 'edit',
	  label: _mailpoet2['default'].I18n.t('edit'),
	  link: function link(item) {
	    return _react2['default'].createElement(
	      'a',
	      { href: 'admin.php?page=mailpoet-form-editor&id=' + item.id },
	      _mailpoet2['default'].I18n.t('edit')
	    );
	  }
	}, {
	  name: 'duplicate',
	  label: _mailpoet2['default'].I18n.t('duplicate'),
	  onClick: function onClick(item, refresh) {
	    return _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'forms',
	      action: 'duplicate',
	      data: {
	        id: item.id
	      }
	    }).done(function (response) {
	      _mailpoet2['default'].Notice.success(_mailpoet2['default'].I18n.t('formDuplicated').replace('%$1s', response.data.name));
	      refresh();
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  }
	}, {
	  name: 'trash'
	}];

	var FormList = _react2['default'].createClass({
	  displayName: 'FormList',

	  createForm: function createForm() {
	    _mailpoet2['default'].Ajax.post({
	      api_version: window.mailpoet_api_version,
	      endpoint: 'forms',
	      action: 'create'
	    }).done(function (response) {
	      window.location = window.mailpoet_form_edit_url + response.data.id;
	    }).fail(function (response) {
	      if (response.errors.length > 0) {
	        _mailpoet2['default'].Notice.error(response.errors.map(function (error) {
	          return error.message;
	        }), { scroll: true });
	      }
	    });
	  },
	  renderItem: function renderItem(form, actions) {
	    var row_classes = (0, _classnames2['default'])('manage-column', 'column-primary', 'has-row-actions');

	    var segments = window.mailpoet_segments.filter(function (segment) {
	      return _jquery2['default'].inArray(segment.id, form.segments) !== -1;
	    }).map(function (segment) {
	      return segment.name;
	    }).join(', ');

	    if (form.settings.segments_selected_by === 'user') {
	      segments = _mailpoet2['default'].I18n.t('userChoice') + ' ' + segments;
	    }

	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'td',
	        { className: row_classes },
	        _react2['default'].createElement(
	          'strong',
	          null,
	          _react2['default'].createElement(
	            'a',
	            {
	              className: 'row-title',
	              href: 'admin.php?page=mailpoet-form-editor&id=' + form.id
	            },
	            form.name
	          )
	        ),
	        actions
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('segments') },
	        segments
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column', 'data-colname': _mailpoet2['default'].I18n.t('signups') },
	        form.signups
	      ),
	      _react2['default'].createElement(
	        'td',
	        { className: 'column-date', 'data-colname': _mailpoet2['default'].I18n.t('createdOn') },
	        _react2['default'].createElement(
	          'abbr',
	          null,
	          _mailpoet2['default'].Date.format(form.created_at)
	        )
	      )
	    );
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { className: 'title' },
	        _mailpoet2['default'].I18n.t('pageTitle'),
	        ' ',
	        _react2['default'].createElement(
	          'a',
	          {
	            className: 'page-title-action',
	            href: 'javascript:;',
	            onClick: this.createForm
	          },
	          _mailpoet2['default'].I18n.t('new')
	        )
	      ),
	      _react2['default'].createElement(_listingListingJsx2['default'], {
	        limit: window.mailpoet_listing_per_page,
	        location: this.props.location,
	        params: this.props.params,
	        messages: messages,
	        search: false,
	        endpoint: 'forms',
	        onRenderItem: this.renderItem,
	        columns: columns,
	        bulk_actions: bulk_actions,
	        item_actions: item_actions
	      })
	    );
	  }
	});

	module.exports = FormList;

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(543),
	    __webpack_require__(275),
	    __webpack_require__(276)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	    Backbone,
	    jQuery,
	    mp
	  ) {
	    var MailPoet = mp;
	    if (jQuery('#mailpoet_settings').length === 0) {
	      return;
	    }

	    MailPoet.Router = new (Backbone.Router.extend({
	      routes: {
	        '': 'sendingMethodGroup', // the default tab is currently mta, needs its own method
	        'mta(/:group)': 'sendingMethodGroup',
	        '(:tab)': 'tabs'
	      },
	      sendingMethodGroup: function (group) {
	        // display mta tab
	        this.tabs('mta');

	        // hide all sending methods' settings
	        jQuery(
	          '#mailpoet_sending_method_setup, .mailpoet_sending_method'
	        ).hide();

	        // hide "save settings" button
	        jQuery('.mailpoet_settings_submit').hide();

	        if (group === null) {
	          // show sending methods
	          jQuery('.mailpoet_sending_methods, .mailpoet_sending_methods_help').fadeIn();
	        } else {
	          // toggle SPF (hidden if the sending method is MailPoet)
	          jQuery('#mailpoet_mta_spf')[
	            (group === 'mailpoet')
	            ? 'hide'
	            : 'show'
	          ]();

	          // hide sending methods
	          jQuery('.mailpoet_sending_methods, .mailpoet_sending_methods_help').hide();

	          // display selected sending method's settings
	          jQuery('.mailpoet_sending_method[data-group="' + group + '"]').show();
	          jQuery('#mailpoet_sending_method_setup').fadeIn();
	        }
	      },
	      tabs: function (tabStr) {
	        // set default tab
	        var tab = tabStr || 'mta';

	        // reset all active tabs
	        jQuery('.nav-tab-wrapper a').removeClass('nav-tab-active');

	        // hide panels & sections
	        jQuery('.mailpoet_panel, .mailpoet_section').hide();

	        // set active tab
	        jQuery('a.nav-tab[href="#' + tab + '"]').addClass('nav-tab-active').blur();

	        // show selected panel
	        if (jQuery('.mailpoet_panel[data-tab="' + tab + '"]').length > 0) {
	          jQuery('.mailpoet_panel[data-tab="' + tab + '"]').show();
	        }

	        // show "save settings" button
	        jQuery('.mailpoet_settings_submit').show();

	        MailPoet.trackEvent(
	          'User has clicked a tab in Settings',
	          {
	            'MailPoet Free version': window.mailpoet_version,
	            'Tab ID': tab
	          }
	        );
	      }
	    }));

	    jQuery(document).ready(function () {
	      if (!Backbone.History.started) Backbone.history.start();
	    });
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Backbone"] = __webpack_require__(544);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(280), __webpack_require__(275), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(181);

	var _history = __webpack_require__(244);

	var _helpKnowledge_baseJsx = __webpack_require__(546);

	var _helpKnowledge_baseJsx2 = _interopRequireDefault(_helpKnowledge_baseJsx);

	var _helpSystem_infoJsx = __webpack_require__(548);

	var _helpSystem_infoJsx2 = _interopRequireDefault(_helpSystem_infoJsx);

	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return this.props.children;
	  }
	});

	var container = document.getElementById('help_container');

	if (container) {

	  _reactDom2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2['default'].createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2['default'].createElement(_reactRouter.IndexRedirect, { to: 'knowledgeBase' }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'knowledgeBase(/)**', params: { tab: 'knowledgeBase' }, component: _helpKnowledge_baseJsx2['default'] }),
	      _react2['default'].createElement(_reactRouter.Route, { path: 'systemInfo(/)**', params: { tab: 'systemInfo' }, component: _helpSystem_infoJsx2['default'] })
	    )
	  ), container);
	}
	/* Pages */

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _tabsJsx = __webpack_require__(547);

	var _tabsJsx2 = _interopRequireDefault(_tabsJsx);

	function KnowledgeBase() {

	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(_tabsJsx2['default'], { tab: 'knowledgeBase' }),
	    _react2['default'].createElement(
	      'p',
	      null,
	      _mailpoet2['default'].I18n.t('knowledgeBaseIntro')
	    ),
	    _react2['default'].createElement(
	      'ul',
	      null,
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/116-common-problems' },
	          'Common Problems'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/165-newsletters' },
	          'Newsletters'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/156-migration-questions' },
	          'Migration Questions'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/149-sending-methods' },
	          'Sending Methods'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/139-subscription-forms' },
	          'Subscription Forms'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/114-getting-started' },
	          'Getting Started'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/123-newsletter-designer' },
	          'Newsletter Designer'
	        )
	      ),
	      _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { target: '_blank', href: 'http://beta.docs.mailpoet.com/category/121-subscribers-and-lists' },
	          'Subscribers and Lists'
	        )
	      )
	    ),
	    _react2['default'].createElement(
	      'a',
	      { target: '_blank', href: 'http://beta.docs.mailpoet.com/', className: 'button button-primary' },
	      _mailpoet2['default'].I18n.t('knowledgeBaseButton')
	    )
	  );
	}

	module.exports = KnowledgeBase;

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var tabs = [{
	  name: 'knowledgeBase',
	  label: _mailpoet2['default'].I18n.t('tabKnowledgeBaseTitle'),
	  link: '/knowledgeBase'
	}, {
	  name: 'systemInfo',
	  label: _mailpoet2['default'].I18n.t('tabSystemInfoTitle'),
	  link: '/systemInfo'
	}];

	function Tabs(props) {

	  var tabLinks = tabs.map(function (tab, index) {
	    var tabClasses = (0, _classnames2['default'])('nav-tab', { 'nav-tab-active': props.tab === tab.name });

	    return _react2['default'].createElement(
	      _reactRouter.Link,
	      {
	        key: 'tab-' + index,
	        className: tabClasses,
	        to: tab.link
	      },
	      tab.label
	    );
	  });

	  return _react2['default'].createElement(
	    'h2',
	    { className: 'nav-tab-wrapper' },
	    tabLinks
	  );
	}

	Tabs.propTypes = { tab: _react2['default'].PropTypes.string };
	Tabs.defaultProps = { tab: 'knowledgeBase' };

	module.exports = Tabs;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mailpoet = __webpack_require__(276);

	var _mailpoet2 = _interopRequireDefault(_mailpoet);

	var _underscore = __webpack_require__(280);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _tabsJsx = __webpack_require__(547);

	var _tabsJsx2 = _interopRequireDefault(_tabsJsx);

	function handleFocus(event) {
	  event.target.select();
	}

	function printData(data) {
	  if (_underscore2['default'].isObject(data)) {
	    var printableData = Object.keys(data).map(function (key) {
	      return key + ': ' + data[key];
	    });

	    return _react2['default'].createElement('textarea', {
	      readOnly: true,
	      onFocus: handleFocus,
	      value: printableData.join('\n'),
	      style: {
	        width: '100%',
	        height: '400px'
	      }
	    });
	  }
	  return _react2['default'].createElement(
	    'p',
	    null,
	    _mailpoet2['default'].I18n.t('systemInfoDataError')
	  );
	}

	function KnowledgeBase() {
	  var data = window.help_scout_data;
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(_tabsJsx2['default'], { tab: 'systemInfo' }),
	    _react2['default'].createElement(
	      'div',
	      { className: 'mailpoet_notice notice inline notice-success', style: { marginTop: '1em' } },
	      _react2['default'].createElement(
	        'p',
	        null,
	        _mailpoet2['default'].I18n.t('systemInfoIntro')
	      )
	    ),
	    printData(data)
	  );
	}

	module.exports = KnowledgeBase;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(276)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	    MailPoet
	  ) {
	    var element;
	    function eventHandler() {
	      if (confirm(MailPoet.I18n.t('reinstallConfirmation'))) {
	        MailPoet.trackEvent(
	          'User has reinstalled MailPoet via Settings',
	          { 'MailPoet Free version': window.mailpoet_version }
	        );

	        MailPoet.Modal.loading(true);
	        MailPoet.Ajax.post({
	          api_version: window.mailpoet_api_version,
	          endpoint: 'setup',
	          action: 'reset'
	        }).always(function () {
	          MailPoet.Modal.loading(false);
	        }).done(function () {
	          window.location = 'admin.php?page=mailpoet-newsletters';
	        }).fail(function (response) {
	          if (response.errors.length > 0) {
	            MailPoet.Notice.error(
	              response.errors.map(function (error) {
	                return error.message;
	              }),
	              { scroll: true }
	            );
	          }
	        });
	      }
	      return false;
	    }

	    element = document.getElementById('mailpoet_reinstall');
	    if (element) {
	      element.addEventListener('click', eventHandler, false);
	    }
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(543),
	    __webpack_require__(280),
	    __webpack_require__(275),
	    __webpack_require__(276),
	    __webpack_require__(551),
	    __webpack_require__(552),
	    __webpack_require__(553),
	    __webpack_require__(301)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	      Backbone,
	      _,
	      jQuery,
	      MailPoet,
	      Handlebars,
	      Papa,
	      AsyncQueue,
	      Moment
	    ) {
	      if (!jQuery('#mailpoet_subscribers_import').length) {
	        return;
	      }
	      jQuery(document).ready(function () {
	        var router;
	        jQuery('input[name="select_method"]').attr('checked', false);
	        // configure router
	        router = new (Backbone.Router.extend({
	          routes: {
	            '': 'home',
	            step1: 'step1',
	            step2: 'step2',
	            step3: 'step3'
	          },
	          home: function () {
	            this.navigate('step1', { trigger: true });
	          }
	        }));

	        function showCurrentStep() {
	          MailPoet.Notice.hide();
	          MailPoet.Modal.loading(false);
	          jQuery('#mailpoet_subscribers_import > div[id^="step"]').hide();
	          jQuery(location.hash).show();
	        }

	        /*
	         *  STEP 1 (upload or copy/paste)
	         */
	        router.on('route:step1', function () {
	          var methodProcessContainerTemplate;
	          var currentStepE;
	          var methodSelectionElement;
	          var pasteInputElement;
	          var pasteInputPlaceholderElement;
	          var pasteProcessButtonElement;
	          var mailChimpKeyInputElement;
	          var mailChimpKeyVerifyButtonElement;
	          var mailChimpListsContainerElement;
	          var mailChimpProcessButtonElement;
	          var uploadElement;
	          var uploadProcessButtonElement;
	          // set or reset temporary validation rule on all columns
	          window.mailpoetColumns = jQuery.map(window.mailpoetColumns, function (column) {
	            var col = column;
	            col.validation_rule = false;
	            return col;
	          });

	          if (typeof (window.importData.step1) !== 'undefined') {
	            showCurrentStep();
	            return;
	          }

	          // render process button for each method
	          methodProcessContainerTemplate =
	              Handlebars.compile(jQuery('#method_process_template').html());
	          jQuery('.mailpoet_method_process').html(methodProcessContainerTemplate());

	          // define reusable variables
	          currentStepE = jQuery(location.hash);
	          methodSelectionElement = jQuery('#select_method');
	          pasteInputElement = jQuery('#paste_input');
	          pasteInputPlaceholderElement =
	                pasteInputElement.data('placeholder').replace(/\\n/g, '\n');
	          pasteProcessButtonElement =
	                jQuery('#method_paste > div.mailpoet_method_process')
	                  .find('a.mailpoet_process');
	          mailChimpKeyInputElement = jQuery('#mailchimp_key');
	          mailChimpKeyVerifyButtonElement = jQuery('#mailchimp_key_verify');
	          mailChimpListsContainerElement = jQuery('#mailchimp_lists');
	          mailChimpProcessButtonElement = jQuery('#method_mailchimp > div.mailpoet_method_process')
	            .find('a.mailpoet_process');
	          uploadElement = jQuery('#file_local');
	          uploadProcessButtonElement =
	            jQuery('#method_file > div.mailpoet_method_process')
	              .find('a.mailpoet_process');

	          // define method change behavior
	          methodSelectionElement.change(function () {
	            var available_methods = jQuery(':radio[name="select_method"]');
	            var selected_method = available_methods.index(available_methods.filter(':checked'));
	            MailPoet.Notice.hide();
	            // hide all methods
	            currentStepE.find('.inside')
	                .children('div[id^="method_"]')
	                .hide();
	            // show selected method
	            currentStepE.find('.inside')
	                .children('div[id^="method_"]:eq(' + selected_method + ')')
	                .show()
	                .find('table')
	                .show();
	          });

	          // start step 1
	          showCurrentStep();

	          /*
	           *  Paste
	           */
	          pasteInputElement
	              .attr('value', pasteInputPlaceholderElement).css('color', '#999')
	              .focus(function () {
	                if (jQuery(this).val() === pasteInputPlaceholderElement) {
	                  jQuery(this).attr('value', '').css('color', '#222');
	                }
	              })
	              .blur(function () {
	                if (jQuery(this).val() === '') {
	                  jQuery(this).attr('value', pasteInputPlaceholderElement).css('color', '#999');
	                }
	              })
	              .keyup(function () {
	                toggleNextStepButton(
	                    pasteProcessButtonElement,
	                    (this.value.trim() !== '') ? 'on' : 'off'
	                );
	              });

	          pasteProcessButtonElement.click(function () {
	            var pasteSize = encodeURI(pasteInputElement.val()).split(/%..|./).length - 1;
	            MailPoet.Notice.hide();
	            // get an approximate size of textarea paste in bytes
	            if (pasteSize > window.maxPostSizeBytes) {
	              MailPoet.Notice.error(MailPoet.I18n.t('maxPostSizeNotice'));
	              return;
	            }
	            // delay loading indicator for 10ms or else it's just too fast :)
	            MailPoet.Modal.loading(true);
	            setTimeout(function () {
	              Papa.parse(pasteInputElement.val(), parseCSV(false));
	            }, 10);
	          });

	          /*
	           *  CSV file
	           */
	          uploadElement.change(function () {
	            var ext = this.value.match(/\.(.+)$/);
	            MailPoet.Notice.hide();
	            if (ext === null || ext[1].toLowerCase() !== 'csv') {
	              this.value = '';
	              MailPoet.Notice.error(MailPoet.I18n.t('wrongFileFormat'));
	            }

	            toggleNextStepButton(
	                uploadProcessButtonElement,
	                (this.value.trim() !== '') ? 'on' : 'off'
	            );
	          });

	          uploadProcessButtonElement.click(function () {
	            if (uploadElement.val().trim() !== '') {
	              // delay loading indicator for 10ms or else it's just too fast :)
	              MailPoet.Modal.loading(true);
	              setTimeout(function () {
	                uploadElement.parse({
	                  config: parseCSV(true)
	                });
	              }, 10);
	            }
	          });

	          /*
	           *  MailChimp
	           */
	          mailChimpKeyInputElement.keyup(function () {
	            if (this.value.trim() === ''
	                || !/[a-zA-Z0-9]{32}-/.exec(this.value.trim())) {
	              mailChimpListsContainerElement.hide();
	              jQuery('.mailpoet_mailchimp-key-status')
	                  .html('')
	                  .removeClass('mailpoet_mailchimp-ok mailpoet_mailchimp-error');
	              toggleNextStepButton(mailChimpProcessButtonElement, 'off');
	            }
	          });

	          mailChimpKeyVerifyButtonElement.click(function () {
	            MailPoet.Modal.loading(true);
	            MailPoet.Ajax.post({
	              api_version: window.mailpoet_api_version,
	              endpoint: 'importExport',
	              action: 'getMailChimpLists',
	              data: {
	                api_key: mailChimpKeyInputElement.val()
	              }
	            }).always(function () {
	              MailPoet.Modal.loading(false);
	            }).done(function (response) {
	              jQuery('.mailpoet_mailchimp-key-status')
	                  .html('')
	                  .removeClass()
	                  .addClass('mailpoet_mailchimp-key-status mailpoet_mailchimp-ok');
	              if (response.data.length === 0) {
	                jQuery('.mailpoet_mailchimp-key-status').html(MailPoet.I18n.t('noMailChimpLists'));
	                mailChimpListsContainerElement.hide();
	                toggleNextStepButton(mailChimpProcessButtonElement, 'off');
	              } else {
	                displayMailChimpLists(response.data);
	              }
	            }).fail(function (response) {
	              if (response.errors.length > 0) {
	                MailPoet.Notice.error(
	                  response.errors.map(function (error) { return error.message; }),
	                  { scroll: true }
	                );
	              }
	            });
	          });

	          mailChimpProcessButtonElement.click(function () {
	            if (mailChimpProcessButtonElement.closest('table a').hasClass('button-disabled')) {
	              return;
	            }
	            MailPoet.Modal.loading(true);
	            MailPoet.Ajax.post({
	              api_version: window.mailpoet_api_version,
	              endpoint: 'importExport',
	              action: 'getMailChimpSubscribers',
	              data: {
	                api_key: mailChimpKeyInputElement.val(),
	                lists: mailChimpListsContainerElement.find('select').val()
	              }
	            }).always(function () {
	              MailPoet.Modal.loading(false);
	            }).done(function (response) {
	              window.importData.step1 = response.data;
	              MailPoet.trackEvent('Subscribers import started', {
	                source: 'MailChimp',
	                'MailPoet Free version': window.mailpoet_version
	              });
	              router.navigate('step2', { trigger: true });
	            }).fail(function (response) {
	              if (response.errors.length > 0) {
	                MailPoet.Notice.error(
	                  response.errors.map(function (error) { return error.message; }),
	                  { scroll: true }
	                );
	              }
	            });
	          });

	          function displayMailChimpLists(data) {
	            var listSelectElement = mailChimpListsContainerElement.find('select');
	            if (listSelectElement.data('select2')) {
	              listSelectElement.select2('data', data);
	              listSelectElement.trigger('change');
	            }
	            else {
	              listSelectElement
	                  .select2({
	                    data: data,
	                    width: '20em',
	                    templateResult: function (item) {
	                      return item.name;
	                    },
	                    templateSelection: function (item) {
	                      return item.name;
	                    }
	                  })
	                  .change(function () {
	                    if (jQuery(this).val() !== null) {
	                      toggleNextStepButton(mailChimpProcessButtonElement, 'on');
	                    }
	                    else {
	                      toggleNextStepButton(mailChimpProcessButtonElement, 'off');
	                    }
	                  })
	                  .trigger('change');
	            }
	            mailChimpListsContainerElement.show();
	          }

	          function toggleNextStepButton(element, condition) {
	            var disabled = 'button-disabled';
	            if (condition === 'on') {
	              element.closest('table a').removeClass(disabled);
	              return;
	            }
	            element.closest('table a').addClass(disabled);
	          }

	          function parseCSV(isFile) {
	            var processedSubscribers = [];
	            var parsedEmails = [];
	            var duplicateEmails = [];
	            var invalidEmails = [];
	            var emailColumnPosition = null;
	            var columnCount = null;
	            var isHeaderFound = false;
	            var advancedOptionHeader = true;
	            var advancedOptionDelimiter = '';
	            var advancedOptionNewline = '';
	            var advancedOptionComments = false;
	            // trim spaces, commas, periods,
	            // single/double quotes and convert to lowercase
	            var detectAndCleanupEmail = function (emailString) {
	              var test;
	                // decode HTML entities
	              var email = jQuery('<div />').html(emailString).text();
	              email = email
	                  .toLowerCase()
	                  // left/right trim spaces, punctuation (e.g., " 'email@email.com'; ")
	                  // right trim non-printable characters (e.g., "email@email.com�")
	                  .replace(/^["';.,\s]+|[^\x20-\x7E]+$|["';.,_\s]+$/g, '')
	                  // remove spaces (e.g., "email @ email . com")
	                  // remove urlencoded characters
	                  .replace(/\s+|%\d+|,+/g, '');
	                // detect e-mails that will be otherwise rejected by email regex
	              test = /<(.*?)>/.exec(email);
	              if (test) {
	                  // is the email inside angle brackets (e.g., 'some@email.com <some@email.com>')?
	                email = test[1].trim();
	              }
	              test = /mailto:(?:\s+)?(.*)/.exec(email);
	              if (test) {
	                  // is the email in 'mailto:email' format?
	                email = test[1].trim();
	              }
	                // test for valid characters using WP's rule (https://core.trac.wordpress.org/browser/tags/4.7.3/src/wp-includes/formatting.php#L2902)
	              if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.\-@]+$/.test(email)) {
	                return false;
	              }
	              return email;
	            };

	            return {
	              skipEmptyLines: true,
	              delimiter: advancedOptionDelimiter,
	              newline: advancedOptionNewline,
	              comments: advancedOptionComments,
	              error: function () {
	                MailPoet.Notice.hide();
	                MailPoet.Notice.error(MailPoet.I18n.t('dataProcessingError'));
	              },
	              complete: function (CSV) {
	                var email;
	                var emailAddress;
	                var column;
	                var rowCount;
	                var rowData;
	                var rowColumnCount;
	                var errorNotice;
	                for (rowCount in CSV.data) {
	                  rowData = CSV.data[rowCount].map(function (el) {
	                    return el.trim();
	                  });
	                  rowColumnCount = rowData.length;
	                  // set the number of row elements based on the first non-empty row
	                  if (columnCount === null) {
	                    columnCount = rowColumnCount;
	                  }
	                  // Process the row with the following assumptions:
	                  // 1. Each row should contain the same number of elements
	                  // 2. There should be at least 1 valid (as per HTML5 e-mail regex)
	                  // e-mail address on each row EXCEPT when the header option is set to true
	                  // 3. Duplicate addresses are skipped
	                  if (rowColumnCount === columnCount) {
	                    // determine position of email address inside an array; this is
	                    // done once and then email regex is run just on that element for each row
	                    if (emailColumnPosition === null) {
	                      for (column in rowData) {
	                        emailAddress = detectAndCleanupEmail(rowData[column]);
	                        if (emailColumnPosition === null
	                            && window.emailRegex.test(emailAddress)) {
	                          emailColumnPosition = column;
	                          parsedEmails[emailAddress] = true; // add current e-mail to an object index
	                          rowData[column] = emailAddress;
	                          processedSubscribers[emailAddress] = rowData;
	                        }
	                      }
	                      if (emailColumnPosition === null
	                          && advancedOptionHeader
	                          && parseInt(rowCount) === 0) {
	                        isHeaderFound = true;
	                        processedSubscribers[0] = rowData;
	                      }
	                    }
	                    else if (rowData[emailColumnPosition] !== '') {
	                      email = detectAndCleanupEmail(rowData[emailColumnPosition]);
	                      if (_.has(parsedEmails, email)) {
	                        duplicateEmails.push(email);
	                      }
	                      else if (!window.emailRegex.test(email)) {
	                        invalidEmails.push(rowData[emailColumnPosition]);
	                      }
	                      // if we haven't yet processed this e-mail and it passed
	                      // the regex test, then process the row
	                      else {
	                        parsedEmails[email] = true;
	                        rowData[emailColumnPosition] = email;
	                        processedSubscribers[email] = rowData;
	                      }
	                    }
	                  }
	                }
	                // reindex array to avoid non-numeric indices
	                processedSubscribers = _.values(processedSubscribers);
	                // if the header options is set, there should be at least
	                // 2 data rows, otherwise at least 1 data row
	                if (processedSubscribers &&
	                    (isHeaderFound && processedSubscribers.length >= 2) ||
	                    (!isHeaderFound && processedSubscribers.length >= 1)
	                ) {
	                  // since we assume that the header line is always present, we need
	                  // to detect the header by checking if it contains a valid e-mail address
	                  window.importData.step1 = {
	                    header: (!window.emailRegex.test(
	                            processedSubscribers[0][emailColumnPosition])
	                    ) ? processedSubscribers.shift() : null,
	                    subscribers: processedSubscribers,
	                    subscribersCount: processedSubscribers.length,
	                    duplicate: duplicateEmails,
	                    invalid: invalidEmails
	                  };
	                  MailPoet.trackEvent('Subscribers import started', {
	                    source: isFile ? 'file upload' : 'pasted data',
	                    'MailPoet Free version': window.mailpoet_version
	                  });
	                  router.navigate('step2', { trigger: true });
	                }
	                else {
	                  MailPoet.Modal.loading(false);
	                  errorNotice = MailPoet.I18n.t('noValidRecords');
	                  errorNotice = errorNotice.replace('[link]', MailPoet.I18n.t('csvKBLink'));
	                  errorNotice = errorNotice.replace('[/link]', '</a>');
	                  MailPoet.Notice.error(errorNotice);
	                }
	              }
	            };
	          }
	        });

	        router.on('route:step2', function () {
	          var nextStepButton;
	          var previousStepButton;
	          var subscribers;
	          var subscribersDataTemplate;
	          var subscribersDataTemplatePartial;
	          var subscribersDataParseResultsTemplate;
	          var segmentSelectElement;
	          var maxRowsToShow;
	          var filler;
	          var fillerArray;
	          var fillerPosition;
	          var import_results;
	          var duplicates;
	          var email;
	          if (typeof (window.importData.step1) === 'undefined') {
	            router.navigate('step1', { trigger: true });
	            return;
	          }
	          // define reusable variables
	          nextStepButton = jQuery('#step2_process');
	          previousStepButton = jQuery('#return_to_step1');
	          // create a copy of subscribers object for further manipulation
	          subscribers = jQuery.extend(true, {}, window.importData.step1);
	          subscribersDataTemplate = Handlebars.compile(jQuery('#subscribers_data_template').html());
	          subscribersDataTemplatePartial = Handlebars.compile(jQuery('#subscribers_data_template_partial').html());
	          subscribersDataParseResultsTemplate = Handlebars.compile(jQuery('#subscribers_data_parse_results_template').html());
	          segmentSelectElement = jQuery('#mailpoet_segments_select');
	          maxRowsToShow = 10;
	          filler = '. . .';
	          // create an array of filler data with the same number of
	          // elements as in the subscribers' data row
	          fillerArray = Array.apply(
	              null,
	              new Array(subscribers.subscribers[0].length)
	          ).map(String.prototype.valueOf, filler);

	          showCurrentStep();

	          // hide previous statistics/import results
	          jQuery('#subscribers_data_parse_results:visible').html('');
	          jQuery('#subscribers_data_import_results:visible').hide();

	          // show parse statistics if any duplicate/invalid records were found
	          if (subscribers.invalid.length || subscribers.duplicate.length) {
	            // count repeating e-mails inside duplicate array and present them in
	            // 'email (xN)' format
	            duplicates = {};
	            subscribers.duplicate.forEach(function (email) {
	              duplicates[email] = (duplicates[email] || 0) + 1;
	            });
	            subscribers.duplicate = [];
	            for (email in duplicates) {
	              if (duplicates[email] > 1) {
	                subscribers.duplicate.push(email + ' (x' + duplicates[email] + ')');
	              }
	              else {
	                subscribers.duplicate.push(email);
	              }
	            }

	            import_results = {
	              notice: MailPoet.I18n.t('importNoticeSkipped').replace(
	                  '%1$s',
	                  '<strong>' + (subscribers.invalid.length + subscribers.duplicate.length) + '</strong>'
	              ),
	              invalid: (subscribers.invalid.length)
	                  ? MailPoet.I18n.t('importNoticeInvalid')
	                  .replace('%1$s', '<strong>' + subscribers.invalid.length.toLocaleString() + '</strong>')
	                  .replace('%2$s', subscribers.invalid.join(', '))
	                  : null,
	              duplicate: (subscribers.duplicate.length)
	                  ? MailPoet.I18n.t('importNoticeDuplicate')
	                  .replace('%1$s', '<strong>' + subscribers.duplicate.length + '</strong>')
	                  .replace('%2$s', subscribers.duplicate.join(', '))
	                  : null
	            };
	            jQuery('#subscribers_data_parse_results').html(
	                subscribersDataParseResultsTemplate(import_results)
	            );
	          }

	          jQuery('.mailpoet_subscribers_data_parse_results_details_show')
	              .click(function () {
	                var details = jQuery('.mailpoet_subscribers_data_parse_results_details');
	                jQuery(details).toggle();
	                this.text =
	                    (jQuery(details).is(':visible'))
	                        ? MailPoet.I18n.t('hideDetails')
	                        : MailPoet.I18n.t('showDetails');
	              });

	          // show available segments
	          if (window.mailpoetSegments.length) {
	            jQuery('.mailpoet_segments').show();
	          }
	          else {
	            jQuery('.mailpoet_no_segments').show();
	          }

	          function enableSegmentSelection(segments) {
	            if (segmentSelectElement.data('select2')) {
	              segmentSelectElement
	                  .html('')
	                  .select2('destroy');
	              toggleNextStepButton('off');
	            }
	            segmentSelectElement
	                .select2({
	                  data: segments,
	                  width: '20em',
	                  templateResult: function (item) {
	                    var i = item;
	                    i.subscriberCount = parseInt(i.subscriberCount, 10);
	                    return i.name + ' (' + i.subscriberCount.toLocaleString() + ')';
	                  },
	                  templateSelection: function (item) {
	                    var i = item;
	                    i.subscriberCount = parseInt(i.subscriberCount, 10);
	                    return i.name + ' (' + i.subscriberCount.toLocaleString() + ')';
	                  }
	                })
	                .change(function () {
	                  var segmentSelectionNotice = jQuery('[data-id="notice_segmentSelection"]');
	                  if (!this.value) {
	                    if (!segmentSelectionNotice.length) {
	                      MailPoet.Notice.error(MailPoet.I18n.t('segmentSelectionRequired'), {
	                        static: true,
	                        scroll: true,
	                        id: 'notice_segmentSelection',
	                        hideClose: true
	                      });
	                    }
	                    toggleNextStepButton('off');
	                  } else {
	                    jQuery('[data-id="notice_segmentSelection"]').remove();
	                    if (!jQuery('.mailpoet_notice.error:visible').length) {
	                      toggleNextStepButton('on');
	                    }
	                  }
	                });
	          }

	          jQuery('.mailpoet_create_segment').click(function () {
	            MailPoet.Modal.popup({
	              title: MailPoet.I18n.t('addNewList'),
	              template: jQuery('#new_segment_template').html()
	            });
	            jQuery('#new_segment_name').keypress(function (e) {
	              if (e.which == 13) {
	                jQuery('#new_segment_process').click();
	              }
	            });
	            jQuery('#new_segment_process').click(function () {
	              var segmentName = jQuery('#new_segment_name').val().trim();
	              var segmentDescription = jQuery('#new_segment_description').val().trim();

	              MailPoet.Ajax.post({
	                api_version: window.mailpoet_api_version,
	                endpoint: 'ImportExport',
	                action: 'addSegment',
	                data: {
	                  name: segmentName,
	                  description: segmentDescription
	                }
	              }).done(function (response) {
	                var selected_values;
	                window.mailpoetSegments.push({
	                  id: response.data.id,
	                  name: response.data.name,
	                  subscriberCount: 0
	                });

	                selected_values = segmentSelectElement.val();
	                if (selected_values === null) {
	                  selected_values = [response.data.id];
	                } else {
	                  selected_values.push(response.data.id);
	                }

	                enableSegmentSelection(window.mailpoetSegments);
	                segmentSelectElement.val(selected_values).trigger('change');
	                jQuery('.mailpoet_segments:hidden').show();
	                jQuery('.mailpoet_no_segments:visible').hide();
	                MailPoet.Modal.close();
	              }).fail(function (response) {
	                if (response.errors.length > 0) {
	                  MailPoet.Notice.hide();
	                  MailPoet.Notice.error(
	                    response.errors.map(function (error) { return error.message; }),
	                    { positionAfter: '#new_segment_name' }
	                  );
	                }
	              });
	            });
	            jQuery('#new_segment_cancel').click(function () {
	              MailPoet.Modal.close();
	            });
	          });

	          // register partial template that will contain subscribers data
	          Handlebars.registerPartial(
	              'subscribers_data_template_partial',
	              subscribersDataTemplatePartial
	          );

	          // autodetect column types
	          Handlebars.registerHelper(
	              'show_and_match_columns',
	              function (subscribers, options) {
	                var displayedColumns = [];
	                var displayedColumnsIds = [];
	                var i;
	                var columnData;
	                var columnId;
	                var headerName;
	                var headerNameMatch;
	                // go through all elements of the first row in subscribers data
	                for (i in subscribers.subscribers[0]) {
	                  columnData = subscribers.subscribers[0][i];
	                  columnId = 'ignore'; // set default column type
	                  // if the column is not undefined and has a valid e-mail, set type as email
	                  if (columnData % 1 !== 0 && window.emailRegex.test(columnData)) {
	                    columnId = 'email';
	                  } else if (subscribers.header) {
	                    headerName = subscribers.header[i];
	                    headerNameMatch = window.mailpoetColumns.map(function (el) {
	                      return el.name;
	                    }).indexOf(headerName);
	                    // set column type using header
	                    if (headerNameMatch !== -1) {
	                      columnId = window.mailpoetColumns[headerNameMatch].id;
	                    }// set column type using header name
	                    else if (headerName) {
	                      if (/first|first name|given name/i.test(headerName)) {
	                        columnId = 'first_name';
	                      } else if (/last|last name/i.test(headerName)) {
	                        columnId = 'last_name';
	                      } else if (/status/i.test(headerName)) {
	                        columnId = 'status';
	                      }
	                    }
	                  }
	                  // make sure the column id has not been previously selected
	                  // (e.g., subscriber_first_name shouldn't be autodetected twice),
	                  // except for "ignore"
	                  columnId =
	                      (columnId !== 'ignore'
	                      && displayedColumnsIds.indexOf(columnId) === -1)
	                          ? columnId
	                          : 'ignore';
	                  displayedColumns[i] = { column_id: columnId };
	                  displayedColumnsIds.push(columnId);
	                }
	                return options.fn(displayedColumns);
	              });

	          // sanitize unsafe data
	          Handlebars.registerHelper('sanitize_data', function (data) {
	            return (data instanceof Handlebars.SafeString) ?
	              data :
	              new Handlebars.SafeString(Handlebars.Utils.escapeExpression(data));
	          });

	          // start array index from 1
	          Handlebars.registerHelper('calculate_index', function (index) {
	            var index = parseInt(index);
	            // display filler data (e.g., ellipsis) if we've reached the maximum number of rows and
	            // subscribers count is greater than the maximum number of rows we're displaying
	            if (index === maxRowsToShow && subscribers.subscribersCount > (maxRowsToShow + 1)) {
	              fillerPosition = index;
	              return filler;
	            }
	            // if we're on the last line, show the total count of subscribers data
	            else if (index === (subscribers.subscribers.length - 1)) {
	              return subscribers.subscribersCount.toLocaleString();
	            } else {
	              return index + 1;
	            }
	          });

	          // reduce subscribers object if the total length is greater than the
	          // maximum number of defined rows
	          if (subscribers.subscribersCount > (maxRowsToShow + 1)) {
	            subscribers.subscribers.splice(
	                maxRowsToShow, subscribers.subscribersCount - (maxRowsToShow + 1),
	                fillerArray
	            );
	          }

	          // render template
	          jQuery('#subscribers_data > table').html(subscribersDataTemplate(subscribers));

	          // filter displayed data
	          jQuery('select.mailpoet_subscribers_column_data_match')
	              .select2({
	                data: window.mailpoetColumnsSelect2,
	                width: '15em',
	                templateResult: function (item) {
	                  return item.name;
	                },
	                templateSelection: function (item) {
	                  return item.name;
	                }
	              })
	              .on('select2:selecting', function (selectEvent) {
	                var selectElement = this;
	                var selectedOptionId = selectEvent.params.args.data.id;
	                // CREATE CUSTOM FIELD
	                if (selectedOptionId === 'create') {
	                  selectEvent.preventDefault();
	                  jQuery(selectElement).select2('close');
	                  MailPoet.Modal.popup({
	                    title: MailPoet.I18n.t('addNewField'),
	                    template: jQuery('#form_template_field_form').html()
	                  });
	                  jQuery('#form_field_new').parsley().on('form:submit', function () {
	                    // get data
	                    var data = jQuery(this.$element).mailpoetSerializeObject();

	                    // save custom field
	                    MailPoet.Ajax.post({
	                      api_version: window.mailpoet_api_version,
	                      endpoint: 'customFields',
	                      action: 'save',
	                      data: data
	                    }).done(function (response) {
	                      var new_column_data = {
	                        id: response.data.id,
	                        name: response.data.name,
	                        type: response.data.type,
	                        params: response.data.params,
	                        custom: true
	                      };
	                      // if this is the first custom column, create an "optgroup"
	                      if (window.mailpoetColumnsSelect2.length === 2) {
	                        window.mailpoetColumnsSelect2.push({
	                          name: MailPoet.I18n.t('userColumns'),
	                          children: []
	                        });
	                      }
	                      window.mailpoetColumnsSelect2[2].children.push(new_column_data);
	                      window.mailpoetColumns.push(new_column_data);
	                      jQuery('select.mailpoet_subscribers_column_data_match')
	                        .each(function () {
	                          jQuery(this)
	                            .html('')
	                            .select2('destroy')
	                            .select2({
	                              data: window.mailpoetColumnsSelect2,
	                              width: '15em',
	                              templateResult: function (item) {
	                                return item.name;
	                              },
	                              templateSelection: function (item) {
	                                return item.name;
	                              }
	                            });
	                        });
	                      jQuery(selectElement).data('column-id', new_column_data.id);
	                      jQuery(selectElement).data('validation-rule', false);
	                      filterSubscribers();
	                      // close popup
	                      MailPoet.Modal.close();
	                    }).fail(function (response) {
	                      if (response.errors.length > 0) {
	                        MailPoet.Notice.error(
	                          response.errors.map(function (error) { return error.message; }),
	                          { positionAfter: '#field_name' }
	                        );
	                      }
	                    });
	                    return false;
	                  });
	                }
	                // CHANGE COLUMN
	                else {
	                  // check for duplicate values in all select options
	                  jQuery('select.mailpoet_subscribers_column_data_match')
	                      .each(function () {
	                        var element = this;
	                        var elementId = jQuery(element).val();
	                        // if another column has the same value and it's not an 'ignore', prompt user
	                        if (elementId === selectedOptionId
	                            && elementId !== 'ignore') {
	                          if (confirm(MailPoet.I18n.t('selectedValueAlreadyMatched') + ' ' + MailPoet.I18n.t('confirmCorrespondingColumn'))) {
	                            jQuery(element).data('column-id', 'ignore');
	                          }
	                          else {
	                            selectEvent.preventDefault();
	                            jQuery(selectElement).select2('close');
	                          }
	                        }
	                      });
	                }
	              })
	              .on('select2:select', function (selectEvent) {
	                var selectElement = this;
	                var selectedOptionId = selectEvent.params.data.id;
	                jQuery(selectElement).data('column-id', selectedOptionId);
	                filterSubscribers();
	              });

	          // filter subscribers' data to detect dates, emails, etc.
	          function filterSubscribers() {
	            var subscribersClone = jQuery.extend(true, {}, subscribers);
	            var preventNextStep = false;
	            var displayedColumns;
	            jQuery(
	                '[data-id="notice_invalidEmail"], [data-id="notice_invalidDate"]')
	                .remove();
	            displayedColumns = jQuery.map(
	              jQuery('.mailpoet_subscribers_column_data_match'), function (element, elementIndex) {
	                var columnId = jQuery(element).data('column-id');
	                var validationRule = jQuery(element).data('validation-rule');
	                jQuery(element).val(columnId).trigger('change');
	                return { id: columnId, index: elementIndex, validationRule: validationRule, element: element };
	              });
	            // iterate through the object of mailpoet columns
	            jQuery.map(window.mailpoetColumns, function (column) {
	              var firstRowData;
	              var validationRule;
	              var testedFormat;
	              var format;
	              var allowedDateFormats;
	              // check if the column id matches the selected id of one of the
	              // subscriber's data columns
	              var matchedColumn = _.find(displayedColumns, function (data) { return data.id === column.id; });
	              // EMAIL filter: if the first value in the column doesn't have a valid
	              // email, hide the next button
	              if (column.id === 'email') {
	                if (!window.emailRegex.test(subscribersClone.subscribers[0][matchedColumn.index])) {
	                  preventNextStep = true;
	                  if (!jQuery('[data-id="notice_invalidEmail"]').length) {
	                    MailPoet.Notice.error(MailPoet.I18n.t('columnContainsInvalidElement'), {
	                      static: true,
	                      scroll: true,
	                      hideClose: true,
	                      id: 'invalidEmail'
	                    });
	                  }
	                }
	                else {
	                  MailPoet.Notice.hide('invalidEmail');
	                }
	              }
	              // DATE filter: if column type is date, check if we can recognize it
	              if (column.type === 'date' && matchedColumn) {
	                allowedDateFormats = [
	                  Moment.ISO_8601,
	                  'YYYY/MM/DD',
	                  'MM/DD/YYYY',
	                  'DD/MM/YYYY',
	                  'YYYY/MM/DD',
	                  'YYYY/DD/MM',
	                  'MM/YYYY',
	                  'YYYY/MM',
	                  'YYYY'
	                ];
	                firstRowData = subscribersClone.subscribers[0][matchedColumn.index];
	                validationRule = false;
	                // check if date exists
	                if (firstRowData.trim() === '') {
	                  subscribersClone.subscribers[0][matchedColumn.index] =
	                    '<span class="mailpoet_data_match mailpoet_import_error" title="'
	                    + MailPoet.I18n.t('noDateFieldMatch') + '">'
	                    + MailPoet.I18n.t('emptyFirstRowDate')
	                    + '</span> ';
	                  preventNextStep = true;
	                }
	                else {
	                  for (format in allowedDateFormats) {
	                    testedFormat = allowedDateFormats[format];
	                    if (Moment(firstRowData, testedFormat, true).isValid()) {
	                      validationRule = (typeof (testedFormat) === 'function') ?
	                        'datetime' :
	                        testedFormat;
	                      // set validation on the column element
	                      jQuery(matchedColumn.element).data('validation-rule', validationRule);
	                      break;
	                    }
	                    if (validationRule === 'datetime') {
	                      validationRule = Moment.ISO_8601;
	                    }
	                  }
	                }
	                jQuery.map(subscribersClone.subscribers, function (dataSubscribers, index) {
	                  var data = dataSubscribers;
	                  var rowData = data[matchedColumn.index];
	                  var date = Moment(rowData, testedFormat, true);
	                  if (index === fillerPosition || rowData.trim() === '') return;
	                  // validate date
	                  if (date.isValid()) {
	                    data[matchedColumn.index] = new Handlebars.SafeString(
	                      Handlebars.Utils.escapeExpression(data[matchedColumn.index])
	                      + '<span class="mailpoet_data_match" title="'
	                      + MailPoet.I18n.t('verifyDateMatch') + '">'
	                      + MailPoet.Date.format(date)
	                      + '</span> '
	                    );
	                  }
	                  else {
	                    data[matchedColumn.index] = new Handlebars.SafeString(
	                      Handlebars.Utils.escapeExpression(data[matchedColumn.index])
	                      + '<span class="mailpoet_data_match mailpoet_import_error" title="'
	                      + MailPoet.I18n.t('noDateFieldMatch') + '">'
	                      + (new Handlebars.SafeString(MailPoet.I18n.t('dateMatchError')))
	                      + '</span> '
	                    );
	                    preventNextStep = true;
	                  }
	                });
	                if (preventNextStep && !jQuery('.mailpoet_invalidDate').length) {
	                  MailPoet.Notice.error(MailPoet.I18n.t('columnContainsInvalidDate'), {
	                    static: true,
	                    scroll: true,
	                    hideClose: true,
	                    id: 'invalidDate'
	                  });
	                }
	              }
	            });
	            // refresh table with susbcribers' data
	            jQuery('#subscribers_data > table > tbody')
	                .html(subscribersDataTemplatePartial(subscribersClone));

	            if (preventNextStep) {
	              toggleNextStepButton('off');
	            }
	            else if (!jQuery('.mailpoet_notice.error:visible').length
	                && segmentSelectElement.val()) {
	              toggleNextStepButton('on');
	            }
	          }

	          function toggleNextStepButton(condition) {
	            var disabled = 'button-disabled';
	            if (condition === 'on') {
	              nextStepButton.removeClass(disabled);
	              return;
	            }
	            nextStepButton.addClass(disabled);
	          }

	          previousStepButton.off().on('click', function () {
	            router.navigate('step1', { trigger: true });
	          });

	          nextStepButton.off().on('click', function () {
	            var columns = {};
	            var queue = new jQuery.AsyncQueue();
	            var batchNumber = 0;
	            var batchSize = 2000;
	            var timestamp = Date.now() / 1000;
	            var subscribers = [];
	            var importResults = {
	              created: 0,
	              updated: 0,
	              errors: [],
	              segments: []
	            };
	            var subscribers;
	            var splitSubscribers;

	            if (jQuery(this).hasClass('button-disabled')) {
	              return;
	            }
	            MailPoet.Modal.loading(true);
	            splitSubscribers = function (subscribers, size) {
	              return subscribers.reduce(function (res, item, index) {
	                if (index % size === 0) {
	                  res.push([]);
	                }
	                res[res.length - 1].push(item);
	                return res;
	              }, []);
	            };
	            subscribers = splitSubscribers(window.importData.step1.subscribers, batchSize);

	            _.each(jQuery('select.mailpoet_subscribers_column_data_match'),
	              function (column, columnIndex) {
	                var columnId = jQuery(column).data('column-id');
	                var validationRule = jQuery(column).data('validation-rule');
	                if (columnId === 'ignore') {
	                  return;
	                }
	                columns[columnId] = { index: columnIndex, validation_rule: validationRule };
	              });

	            _.each(subscribers, function () {
	              queue.add(function (queue) {
	                queue.pause();
	                MailPoet.Ajax.post({
	                  api_version: window.mailpoet_api_version,
	                  endpoint: 'ImportExport',
	                  action: 'processImport',
	                  data: JSON.stringify({
	                    columns: columns,
	                    subscribers: subscribers[batchNumber],
	                    timestamp: timestamp,
	                    segments: segmentSelectElement.val(),
	                    updateSubscribers: (jQuery(':radio[name="subscriber_update_option"]:checked').val() === 'yes')
	                  })
	                }).done(function (response) {
	                  importResults.created += response.data.created;
	                  importResults.updated += response.data.updated;
	                  importResults.segments = response.data.segments;
	                  importResults.added_to_segment_with_welcome_notification = response.data.added_to_segment_with_welcome_notification;
	                  queue.run();
	                }).fail(function (response) {
	                  MailPoet.Modal.loading(false);
	                  if (response.errors.length > 0) {
	                    MailPoet.Notice.error(
	                      response.errors.map(function (error) { return error.message; }),
	                      { scroll: true }
	                    );
	                  }
	                });
	                batchNumber++;
	              });
	            });

	            queue.run();

	            queue.onComplete(function () {
	              MailPoet.Modal.loading(false);
	              if (importResults.errors.length > 0 && !importResults.updated && !importResults.created) {
	                MailPoet.Notice.error(_.flatten(importResults.errors)
	                );
	              }
	              else {
	                window.mailpoetSegments = importResults.segments;
	                importResults.segments = _.map(segmentSelectElement.select2('data'),
	                  function (data) {
	                    return data.name;
	                  });
	                window.importData.step2 = importResults;
	                enableSegmentSelection(window.mailpoetSegments);
	                router.navigate('step3', { trigger: true });
	              }
	            });
	          });

	          filterSubscribers();
	          enableSegmentSelection(window.mailpoetSegments);
	        });

	        router.on('route:step3', function () {
	          var subscribersDataImportResultsTemplate;
	          var exportMenuElement;
	          var importResults;
	          if (typeof (window.importData.step2) === 'undefined') {
	            router.navigate('step2', { trigger: true });
	            return;
	          }

	          showCurrentStep();

	          if (window.importData.step2.errors.length > 0) {
	            MailPoet.Notice.error(_.flatten(window.importData.step2.errors));
	          }

	          MailPoet.trackEvent('Subscribers import finished', {
	            'Subscribers created': window.importData.step2.created,
	            'Subscribers updated': window.importData.step2.updated,
	            'MailPoet Free version': window.mailpoet_version
	          });

	          // display statistics
	          subscribersDataImportResultsTemplate =
	            Handlebars.compile(jQuery('#subscribers_data_import_results_template').html());
	          exportMenuElement = jQuery('span.mailpoet_export');
	          importResults = {
	            created: (window.importData.step2.created)
	                  ? MailPoet.I18n.t('subscribersCreated')
	                  .replace('%1$s', '<strong>' + window.importData.step2.created.toLocaleString() + '</strong>')
	                  .replace('%2$s', '"' + window.importData.step2.segments.join('", "') + '"')
	                  : false,
	            updated: (window.importData.step2.updated)
	                  ? MailPoet.I18n.t('subscribersUpdated')
	                  .replace('%1$s', '<strong>' + window.importData.step2.updated.toLocaleString() + '</strong>')
	                  .replace('%2$s', '"' + window.importData.step2.segments.join('", "') + '"')
	                  : false,
	            no_action: (!window.importData.step2.created && !window.importData.step2.updated),
	            added_to_segment_with_welcome_notification: window.importData.step2.added_to_segment_with_welcome_notification
	          };

	          jQuery('#subscribers_data_import_results')
	              .html(subscribersDataImportResultsTemplate(importResults))
	              .show();

	          jQuery('a.mailpoet_import_again').off().click(function () {
	            jQuery('#subscribers_data_import_results').hide();
	            router.navigate('step1', { trigger: true });
	          });

	          jQuery('a.mailpoet_view_subscribers').off().click(function () {
	            window.location.href = 'admin.php?page=mailpoet-subscribers';
	          });

	          // if new subscribers were created and the export menu item is hidden
	          // (it's shown only when there are subscribers), display it
	          if (importResults.created && exportMenuElement.not(':visible')) {
	            exportMenuElement.show();
	          }

	          // reset previous step's data so that coming back to this step is prevented
	          window.importData.step2 = undefined;
	        });

	        if (!Backbone.History.started) {
	          Backbone.history.start();
	        }
	      });
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },

/***/ 552:
/***/ function(module, exports) {

	/*!
		Papa Parse
		v4.1.1
		https://github.com/mholt/PapaParse
	*/
	!function(e){"use strict";function t(t,r){if(r=r||{},r.worker&&w.WORKERS_SUPPORTED){var n=h();return n.userStep=r.step,n.userChunk=r.chunk,n.userComplete=r.complete,n.userError=r.error,r.step=m(r.step),r.chunk=m(r.chunk),r.complete=m(r.complete),r.error=m(r.error),delete r.worker,void n.postMessage({input:t,config:r,workerId:n.id})}var o=null;return"string"==typeof t?o=r.download?new i(r):new a(r):(e.File&&t instanceof File||t instanceof Object)&&(o=new s(r)),o.stream(t)}function r(e,t){function r(){"object"==typeof t&&("string"==typeof t.delimiter&&1==t.delimiter.length&&-1==w.BAD_DELIMITERS.indexOf(t.delimiter)&&(u=t.delimiter),("boolean"==typeof t.quotes||t.quotes instanceof Array)&&(o=t.quotes),"string"==typeof t.newline&&(f=t.newline))}function n(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function i(e,t){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=e instanceof Array&&e.length>0,i=!(t[0]instanceof Array);if(n){for(var a=0;a<e.length;a++)a>0&&(r+=u),r+=s(e[a],a);t.length>0&&(r+=f)}for(var o=0;o<t.length;o++){for(var h=n?e.length:t[o].length,d=0;h>d;d++){d>0&&(r+=u);var c=n&&i?e[d]:d;r+=s(t[o][c],d)}o<t.length-1&&(r+=f)}return r}function s(e,t){if("undefined"==typeof e||null===e)return"";e=e.toString().replace(/"/g,'""');var r="boolean"==typeof o&&o||o instanceof Array&&o[t]||a(e,w.BAD_DELIMITERS)||e.indexOf(u)>-1||" "==e.charAt(0)||" "==e.charAt(e.length-1);return r?'"'+e+'"':e}function a(e,t){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>-1)return!0;return!1}var o=!1,u=",",f="\r\n";if(r(),"string"==typeof e&&(e=JSON.parse(e)),e instanceof Array){if(!e.length||e[0]instanceof Array)return i(null,e);if("object"==typeof e[0])return i(n(e[0]),e)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e.data instanceof Array&&(e.fields||(e.fields=e.data[0]instanceof Array?e.fields:n(e.data[0])),e.data[0]instanceof Array||"object"==typeof e.data[0]||(e.data=[e.data])),i(e.fields||[],e.data||[]);throw"exception: Unable to serialize unrecognized input"}function n(t){function r(e){var t=_(e);t.chunkSize=parseInt(t.chunkSize),this._handle=new o(t),this._handle.streamer=this,this._config=t}this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this._completeResults={data:[],errors:[],meta:{}},r.call(this,t),this.parseChunk=function(t){var r=this._partialLine+t;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var i=n.meta.cursor;this._finished||(this._partialLine=r.substring(i-this._baseIndex),this._baseIndex=i),n&&n.data&&(this._rowCount+=n.data.length);var s=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(k)e.postMessage({results:n,workerId:w.WORKER_ID,finished:s});else if(m(this._config.chunk)){if(this._config.chunk(n,this._handle),this._paused)return;n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),!s||!m(this._config.complete)||n&&n.meta.aborted||this._config.complete(this._completeResults),s||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(t){m(this._config.error)?this._config.error(t):k&&this._config.error&&e.postMessage({workerId:w.WORKER_ID,error:t,finished:!1})}}function i(e){function t(e){var t=e.getResponseHeader("Content-Range");return parseInt(t.substr(t.lastIndexOf("/")+1))}e=e||{},e.chunkSize||(e.chunkSize=w.RemoteChunkSize),n.call(this,e);var r;this._nextChunk=k?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)return void this._chunkLoaded();if(r=new XMLHttpRequest,k||(r.onload=g(this._chunkLoaded,this),r.onerror=g(this._chunkError,this)),r.open("GET",this._input,!k),this._config.chunkSize){var e=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+e),r.setRequestHeader("If-None-Match","webkit-no-cache")}try{r.send()}catch(t){this._chunkError(t.message)}k&&0==r.status?this._chunkError():this._start+=this._config.chunkSize},this._chunkLoaded=function(){if(4==r.readyState){if(r.status<200||r.status>=400)return void this._chunkError();this._finished=!this._config.chunkSize||this._start>t(r),this.parseChunk(r.responseText)}},this._chunkError=function(e){var t=r.statusText||e;this._sendError(t)}}function s(e){e=e||{},e.chunkSize||(e.chunkSize=w.LocalChunkSize),n.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?(t=new FileReader,t.onload=g(this._chunkLoaded,this),t.onerror=g(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function a(e){e=e||{},n.call(this,e);var t,r;this.stream=function(e){return t=e,r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function o(e){function t(){if(b&&c&&(f("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+w.DefaultDelimiter+"'"),c=!1),e.skipEmptyLines)for(var t=0;t<b.data.length;t++)1==b.data[t].length&&""==b.data[t][0]&&b.data.splice(t--,1);return r()&&n(),i()}function r(){return e.header&&0==y.length}function n(){if(b){for(var e=0;r()&&e<b.data.length;e++)for(var t=0;t<b.data[e].length;t++)y.push(b.data[e][t]);b.data.splice(0,1)}}function i(){if(!b||!e.header&&!e.dynamicTyping)return b;for(var t=0;t<b.data.length;t++){for(var r={},n=0;n<b.data[t].length;n++){if(e.dynamicTyping){var i=b.data[t][n];b.data[t][n]="true"==i||"TRUE"==i?!0:"false"==i||"FALSE"==i?!1:o(i)}e.header&&(n>=y.length?(r.__parsed_extra||(r.__parsed_extra=[]),r.__parsed_extra.push(b.data[t][n])):r[y[n]]=b.data[t][n])}e.header&&(b.data[t]=r,n>y.length?f("FieldMismatch","TooManyFields","Too many fields: expected "+y.length+" fields but parsed "+n,t):n<y.length&&f("FieldMismatch","TooFewFields","Too few fields: expected "+y.length+" fields but parsed "+n,t))}return e.header&&b.meta&&(b.meta.fields=y),b}function s(t){for(var r,n,i,s=[",","	","|",";",w.RECORD_SEP,w.UNIT_SEP],a=0;a<s.length;a++){var o=s[a],f=0,h=0;i=void 0;for(var d=new u({delimiter:o,preview:10}).parse(t),c=0;c<d.data.length;c++){var l=d.data[c].length;h+=l,"undefined"!=typeof i?l>1&&(f+=Math.abs(l-i),i=l):i=l}h/=d.data.length,("undefined"==typeof n||n>f)&&h>1.99&&(n=f,r=o)}return e.delimiter=r,{successful:!!r,bestDelimiter:r}}function a(e){e=e.substr(0,1048576);var t=e.split("\r");if(1==t.length)return"\n";for(var r=0,n=0;n<t.length;n++)"\n"==t[n][0]&&r++;return r>=t.length/2?"\r\n":"\r"}function o(e){var t=l.test(e);return t?parseFloat(e):e}function f(e,t,r,n){b.errors.push({type:e,code:t,message:r,row:n})}var h,d,c,l=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,p=this,g=0,v=!1,k=!1,y=[],b={data:[],errors:[],meta:{}};if(m(e.step)){var R=e.step;e.step=function(n){if(b=n,r())t();else{if(t(),0==b.data.length)return;g+=n.data.length,e.preview&&g>e.preview?d.abort():R(b,p)}}}this.parse=function(r,n,i){if(e.newline||(e.newline=a(r)),c=!1,!e.delimiter){var o=s(r);o.successful?e.delimiter=o.bestDelimiter:(c=!0,e.delimiter=w.DefaultDelimiter),b.meta.delimiter=e.delimiter}var f=_(e);return e.preview&&e.header&&f.preview++,h=r,d=new u(f),b=d.parse(h,n,i),t(),v?{meta:{paused:!0}}:b||{meta:{paused:!1}}},this.paused=function(){return v},this.pause=function(){v=!0,d.abort(),h=h.substr(d.getCharIndex())},this.resume=function(){v=!1,p.streamer.parseChunk(h)},this.aborted=function(){return k},this.abort=function(){k=!0,d.abort(),b.meta.aborted=!0,m(e.complete)&&e.complete(b),h=""}}function u(e){e=e||{};var t=e.delimiter,r=e.newline,n=e.comments,i=e.step,s=e.preview,a=e.fastMode;if(("string"!=typeof t||w.BAD_DELIMITERS.indexOf(t)>-1)&&(t=","),n===t)throw"Comment character same as delimiter";n===!0?n="#":("string"!=typeof n||w.BAD_DELIMITERS.indexOf(n)>-1)&&(n=!1),"\n"!=r&&"\r"!=r&&"\r\n"!=r&&(r="\n");var o=0,u=!1;this.parse=function(e,f,h){function d(e){b.push(e),S=o}function c(t){return h?p():(t||(t=e.substr(o)),w.push(t),o=g,d(w),y&&_(),p())}function l(t){o=t,d(w),w=[],O=e.indexOf(r,o)}function p(e){return{data:b,errors:R,meta:{delimiter:t,linebreak:r,aborted:u,truncated:!!e,cursor:S+(f||0)}}}function _(){i(p()),b=[],R=[]}if("string"!=typeof e)throw"Input must be a string";var g=e.length,m=t.length,v=r.length,k=n.length,y="function"==typeof i;o=0;var b=[],R=[],w=[],S=0;if(!e)return p();if(a||a!==!1&&-1===e.indexOf('"')){for(var E=e.split(r),C=0;C<E.length;C++){var w=E[C];if(o+=w.length,C!==E.length-1)o+=r.length;else if(h)return p();if(!n||w.substr(0,k)!=n){if(y){if(b=[],d(w.split(t)),_(),u)return p()}else d(w.split(t));if(s&&C>=s)return b=b.slice(0,s),p(!0)}}return p()}for(var x=e.indexOf(t,o),O=e.indexOf(r,o);;)if('"'!=e[o])if(n&&0===w.length&&e.substr(o,k)===n){if(-1==O)return p();o=O+v,O=e.indexOf(r,o),x=e.indexOf(t,o)}else if(-1!==x&&(O>x||-1===O))w.push(e.substring(o,x)),o=x+m,x=e.indexOf(t,o);else{if(-1===O)break;if(w.push(e.substring(o,O)),l(O+v),y&&(_(),u))return p();if(s&&b.length>=s)return p(!0)}else{var I=o;for(o++;;){var I=e.indexOf('"',I+1);if(-1===I)return h||R.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:o}),c();if(I===g-1){var D=e.substring(o,I).replace(/""/g,'"');return c(D)}if('"'!=e[I+1]){if(e[I+1]==t){w.push(e.substring(o,I).replace(/""/g,'"')),o=I+1+m,x=e.indexOf(t,o),O=e.indexOf(r,o);break}if(e.substr(I+1,v)===r){if(w.push(e.substring(o,I).replace(/""/g,'"')),l(I+1+v),x=e.indexOf(t,o),y&&(_(),u))return p();if(s&&b.length>=s)return p(!0);break}}else I++}}return c()},this.abort=function(){u=!0},this.getCharIndex=function(){return o}}function f(){var e=document.getElementsByTagName("script");return e.length?e[e.length-1].src:""}function h(){if(!w.WORKERS_SUPPORTED)return!1;if(!y&&null===w.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var t=new e.Worker(w.SCRIPT_PATH||v);return t.onmessage=d,t.id=R++,b[t.id]=t,t}function d(e){var t=e.data,r=b[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var i=function(){n=!0,c(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},s={abort:i,pause:l,resume:l};if(m(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:[t.results.data[a]],errors:t.results.errors,meta:t.results.meta},s),!n);a++);delete t.results}else m(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&c(t.workerId,t.results)}function c(e,t){var r=b[e];m(r.userComplete)&&r.userComplete(t),r.terminate(),delete b[e]}function l(){throw"Not implemented."}function p(t){var r=t.data;if("undefined"==typeof w.WORKER_ID&&r&&(w.WORKER_ID=r.workerId),"string"==typeof r.input)e.postMessage({workerId:w.WORKER_ID,results:w.parse(r.input,r.config),finished:!0});else if(e.File&&r.input instanceof File||r.input instanceof Object){var n=w.parse(r.input,r.config);n&&e.postMessage({workerId:w.WORKER_ID,results:n,finished:!0})}}function _(e){if("object"!=typeof e)return e;var t=e instanceof Array?[]:{};for(var r in e)t[r]=_(e[r]);return t}function g(e,t){return function(){e.apply(t,arguments)}}function m(e){return"function"==typeof e}var v,k=!e.document&&!!e.postMessage,y=!1,b={},R=0,w={};if(w.parse=t,w.unparse=r,w.RECORD_SEP=String.fromCharCode(30),w.UNIT_SEP=String.fromCharCode(31),w.BYTE_ORDER_MARK="﻿",w.BAD_DELIMITERS=["\r","\n",'"',w.BYTE_ORDER_MARK],w.WORKERS_SUPPORTED=!!e.Worker,w.SCRIPT_PATH=null,w.LocalChunkSize=10485760,w.RemoteChunkSize=5242880,w.DefaultDelimiter=",",w.Parser=u,w.ParserHandle=o,w.NetworkStreamer=i,w.FileStreamer=s,w.StringStreamer=a,"undefined"!=typeof module&&module.exports?module.exports=w:m(e.define)&&e.define.amd?e.define(function(){return w}):e.Papa=w,e.jQuery){var S=e.jQuery;S.fn.parse=function(t){function r(){if(0==a.length)return void(m(t.complete)&&t.complete());var e=a[0];if(m(t.before)){var r=t.before(e.file,e.inputElem);if("object"==typeof r){if("abort"==r.action)return void n("AbortError",e.file,e.inputElem,r.reason);if("skip"==r.action)return void i();"object"==typeof r.config&&(e.instanceConfig=S.extend(e.instanceConfig,r.config))}else if("skip"==r)return void i()}var s=e.instanceConfig.complete;e.instanceConfig.complete=function(t){m(s)&&s(t,e.file,e.inputElem),i()},w.parse(e.file,e.instanceConfig)}function n(e,r,n,i){m(t.error)&&t.error({name:e},r,n,i)}function i(){a.splice(0,1),r()}var s=t.config||{},a=[];return this.each(function(){var t="INPUT"==S(this).prop("tagName").toUpperCase()&&"file"==S(this).attr("type").toLowerCase()&&e.FileReader;if(!t||!this.files||0==this.files.length)return!0;for(var r=0;r<this.files.length;r++)a.push({file:this.files[r],inputElem:this,instanceConfig:S.extend({},s)})}),r(),this}}k?e.onmessage=p:w.WORKERS_SUPPORTED&&(v=f(),document.body?document.addEventListener("DOMContentLoaded",function(){y=!0},!0):y=!0),i.prototype=Object.create(n.prototype),i.prototype.constructor=i,s.prototype=Object.create(n.prototype),s.prototype.constructor=s,a.prototype=Object.create(a.prototype),a.prototype.constructor=a}("undefined"!=typeof window?window:this);

/***/ },

/***/ 553:
/***/ function(module, exports) {

	/*
	* This file is part of the jquery plugin "asyncQueue".
	*
	* (c) Sebastien Roch <roch.sebastien@gmail.com>
	*
	* For the full copyright and license information, please view the LICENSE
	* file that was distributed with this source code.
	*/
	(function($){
	    $.AsyncQueue = function() {
	        var that = this,
	            queue = [],
	            failureFunc,
	            completeFunc,
	            paused = false,
	            lastCallbackData,
	            _run;

	        _run = function() {
	            var f = queue.shift();

	            if (f) {
	                f.apply(that, [that]);
	                if (paused === false) {
	                    _run();
	                }
	            } else {
	                if(completeFunc){
	                    completeFunc.apply(that);
	                }
	            }
	        }

	        this.onFailure = function(func) {
	            failureFunc = func;
	        }

	        this.onComplete = function(func) {
	            completeFunc = func;
	        }

	        this.add = function(func) {
	            queue.push(func);
	            return this;
	        }

	        this.storeData = function(dataObject) {
	            lastCallbackData = dataObject;
	            return this;
	        }

	        this.lastCallbackData = function () {
	            return lastCallbackData;
	        }

	        this.run = function() {
	            paused = false;
	            _run();
	        }

	        this.pause = function () {
	            paused = true;
	            return this;
	        }

	        this.failure = function() {
	            paused = true;
	            if (failureFunc) {
	                var args = [that];
	                for(i = 0; i < arguments.length; i++) {
	                    args.push(arguments[i]);
	                }
	                failureFunc.apply(that, args);
	            }
	        }

	        return this;
	    }
	})(jQuery);


/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(280),
	    __webpack_require__(275),
	    __webpack_require__(276),
	    __webpack_require__(551)
	  ], __WEBPACK_AMD_DEFINE_RESULT__ = function (
	   _,
	   jQuery,
	   MailPoet,
	   Handlebars
	 ) {
	   if (!jQuery('#mailpoet_subscribers_export').length) {
	     return;
	   }
	   jQuery(document).ready(function () {
	     var segmentsContainerElement;
	     var subscriberFieldsContainerElement;
	     var exportConfirmedOptionElement;
	     var groupBySegmentOptionElement;
	     var nextStepButton;
	     var renderSegmentsAndFields;
	     var subscribers_export_template;
	     if (!window.exportData.segments) {
	       return;
	     }
	     subscribers_export_template =
	      Handlebars.compile(jQuery('#mailpoet_subscribers_export_template').html());

	     // render template
	     jQuery('#mailpoet_subscribers_export > div.inside').html(subscribers_export_template(window.exportData));

	     // define reusable variables
	     segmentsContainerElement = jQuery('#export_lists');
	     subscriberFieldsContainerElement = jQuery('#export_columns');
	     exportConfirmedOptionElement = jQuery(':radio[name="option_confirmed"]');
	     groupBySegmentOptionElement = jQuery(':checkbox[name="option_group_by_list"]');
	     nextStepButton = jQuery('a.mailpoet_export_process');
	     renderSegmentsAndFields = function (container, data) {
	       if (container.data('select2')) {
	         container
	         .html('')
	         .select2('destroy');
	       }
	       container
	       .select2({
	         data: data,
	         width: '20em',
	         templateResult: function (item) {
	           return (item.subscriberCount > 0)
	            ? item.name + ' (' + parseInt(item.subscriberCount).toLocaleString() + ')'
	            : item.name;
	         },
	         templateSelection: function (item) {
	           return (item.subscriberCount > 0)
	            ? item.name + ' (' + parseInt(item.subscriberCount).toLocaleString() + ')'
	            : item.name;
	         }
	       })
	       .on('select2:selecting', function (selectEvent) {
	         var selectElement = this;
	         var selectedOptionId = selectEvent.params.args.data.id;
	         var fieldsToExclude = [
	           'select',
	           'deselect'
	         ];
	         var allOptions;
	         if (_.contains(fieldsToExclude, selectedOptionId)) {
	           selectEvent.preventDefault();
	           if (selectedOptionId === 'deselect') {
	             jQuery(selectElement).val('').trigger('change');
	           } else {
	             allOptions = [];
	             _.each(container.find('option'), function (field) {
	               if (!_.contains(fieldsToExclude, field.value)) {
	                 allOptions.push(field.value);
	               }
	             });
	             jQuery(selectElement).val(allOptions).trigger('change');
	           }
	           jQuery(selectElement).select2('close');
	         }
	       })
	       .on('change', function () {
	         if ((window.exportData.segments && segmentsContainerElement.select2('data').length && subscriberFieldsContainerElement.select2('data').length)
	          ||
	          (!window.exportData.segments && subscriberFieldsContainerElement.select2('data').length)
	         ) {
	           toggleNextStepButton('on');
	         }
	         else {
	           toggleNextStepButton('off');
	         }

	         if (segmentsContainerElement.select2('data').length > 1 && window.exportData.groupBySegmentOption) {
	           jQuery('.mailpoet_group_by_list').show();
	         }
	         else if (window.exportData.groupBySegmentOption) {
	           jQuery('.mailpoet_group_by_list').hide();
	         }
	       });
	     };

	     // set confirmed subscribers export option to false
	     window.exportData.exportConfirmedOption = false;

	     renderSegmentsAndFields(subscriberFieldsContainerElement, window.subscriberFieldsSelect2);
	     renderSegmentsAndFields(segmentsContainerElement, window.segments);

	     subscriberFieldsContainerElement.val([
	       'email',
	       'first_name',
	       'last_name',
	       'status'
	     ]).trigger('change');

	     exportConfirmedOptionElement.change(function () {
	       var selectedSegments = segmentsContainerElement.val();
	       if (this.value == 1) {
	         window.exportData.exportConfirmedOption = true;
	         renderSegmentsAndFields(segmentsContainerElement, window.segmentsWithConfirmedSubscribers);
	       }
	       else {
	         window.exportData.exportConfirmedOption = false;
	         renderSegmentsAndFields(segmentsContainerElement, window.segments);
	       }
	       segmentsContainerElement.val(selectedSegments).trigger('change');
	     });

	     function toggleNextStepButton(condition) {
	       var disabled = 'button-disabled';
	       if (condition === 'on') {
	         nextStepButton.removeClass(disabled);
	       }
	       else {
	         nextStepButton.addClass(disabled);
	       }
	     }

	     nextStepButton.click(function () {
	       var exportFormat;
	       if (jQuery(this).hasClass('button-disabled')) {
	         return;
	       }
	       MailPoet.Modal.loading(true);
	       exportFormat = jQuery(':radio[name="option_format"]:checked').val();
	       MailPoet.Ajax.post({
	         api_version: window.mailpoet_api_version,
	         endpoint: 'ImportExport',
	         action: 'processExport',
	         data: JSON.stringify({
	           export_confirmed_option: window.exportData.exportConfirmedOption,
	           export_format_option: exportFormat,
	           group_by_segment_option: (groupBySegmentOptionElement.is(':visible')) ? groupBySegmentOptionElement.prop('checked') : false,
	           segments: (window.exportData.segments) ? segmentsContainerElement.val() : false,
	           subscriber_fields: subscriberFieldsContainerElement.val()
	         })
	       }).always(function () {
	         MailPoet.Modal.loading(false);
	       }).done(function (response) {
	         var resultMessage = MailPoet.I18n.t('exportMessage')
	         .replace('%1$s', '<strong>' + parseInt(response.data.totalExported).toLocaleString() + '</strong>')
	         .replace('[link]', '<a href="' + response.data.exportFileURL + '" target="_blank" >')
	         .replace('[/link]', '</a>');
	         jQuery('#export_result_notice').html('<p>' + resultMessage + '</p>').show();
	         window.location.href = response.data.exportFileURL;
	         MailPoet.trackEvent('Subscribers export completed', {
	           'Total exported': response.data.totalExported,
	           'Only confirmed?': window.exportData.exportConfirmedOption,
	           'File Format': exportFormat,
	           'MailPoet Free version': window.mailpoet_version
	         });
	       }).fail(function (response) {
	         if (response.errors.length > 0) {
	           MailPoet.Notice.error(
	              response.errors.map(function (error) { return error.message; }),
	              { scroll: true }
	            );
	         }
	       });
	     });
	   });
	 }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});