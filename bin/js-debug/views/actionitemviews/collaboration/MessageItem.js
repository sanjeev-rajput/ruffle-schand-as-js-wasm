/**
 * Generated by Apache Royale Compiler from views/actionitemviews/collaboration/MessageItem.mxml
 * views.actionitemviews.collaboration.MessageItem
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('views.actionitemviews.collaboration.MessageItem');
/* Royale Dependency List: org.apache.royale.jewel.Label,org.apache.royale.events.Event,XML*/

goog.require('org.apache.royale.jewel.HGroup');



/**
 * @constructor
 * @extends {org.apache.royale.jewel.HGroup}
 */
views.actionitemviews.collaboration.MessageItem = function() {
  views.actionitemviews.collaboration.MessageItem.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Label}
   */
  this.uId_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Label}
   */
  this.uMsg_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes([
    1,
    'itemsVerticalAlign',
    true,
    'itemsCenter',
    0,
    1,
    'initComplete',
    this.$EH_13_0
  ]);
  
};
goog.inherits(views.actionitemviews.collaboration.MessageItem, org.apache.royale.jewel.HGroup);




/**
 * @private
 * @type {string}
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem__userId = null;


/**
 * @private
 * @type {string}
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem__message = null;


/**
 * @private
 * @type {boolean}
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem__isMe = false;


/**
 * @private
 * @type {boolean}
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem__isinitialized = false;


/**
 * @private
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem_init = function() {
  this.views_actionitemviews_collaboration_MessageItem__isinitialized = true;
  this.views_actionitemviews_collaboration_MessageItem_initUi();
};


/**
 * @param {string} id
 * @param {string} msg
 */
views.actionitemviews.collaboration.MessageItem.prototype.setData = function(id, msg) {
  this.views_actionitemviews_collaboration_MessageItem__userId = id;
  this.views_actionitemviews_collaboration_MessageItem__message = msg;
  this.views_actionitemviews_collaboration_MessageItem_initUi();
};


;


/**
 * @private
 */
views.actionitemviews.collaboration.MessageItem.prototype.views_actionitemviews_collaboration_MessageItem_initUi = function() {
  if (this.views_actionitemviews_collaboration_MessageItem__userId && this.views_actionitemviews_collaboration_MessageItem__message && this.views_actionitemviews_collaboration_MessageItem__isinitialized) {
    if (this.views_actionitemviews_collaboration_MessageItem__isMe) {
      this.uMsg.element.classList.add("chatBoxMe", "arrowMe");
      this.views_actionitemviews_collaboration_MessageItem__userId = "<b>You</b>";
    } else {
      this.uMsg.element.classList.add("chatBox", "arrow");
    }
    this.uId.html = "<b>" + this.views_actionitemviews_collaboration_MessageItem__userId + "</b>";
    this.uMsg.text = this.views_actionitemviews_collaboration_MessageItem__message;
  }
};





/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
views.actionitemviews.collaboration.MessageItem.prototype.myself;


views.actionitemviews.collaboration.MessageItem.prototype.set__myself = function(value) {
  this.views_actionitemviews_collaboration_MessageItem__isMe = value;
};


Object.defineProperties(views.actionitemviews.collaboration.MessageItem.prototype, /** @lends {views.actionitemviews.collaboration.MessageItem.prototype} */ {
/**
 * @type {boolean}
 */
myself: {
set: views.actionitemviews.collaboration.MessageItem.prototype.set__myself}}
);/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
views.actionitemviews.collaboration.MessageItem.prototype.$EH_13_0 = function(event)
{
  this.views_actionitemviews_collaboration_MessageItem_init();
};


Object.defineProperties(views.actionitemviews.collaboration.MessageItem.prototype, /** @lends {views.actionitemviews.collaboration.MessageItem.prototype} */ {
  uId: {
    /** @this {views.actionitemviews.collaboration.MessageItem} */
    get: function() {
      return this.uId_;
    },
    /** @this {views.actionitemviews.collaboration.MessageItem} */
    set: function(value) {
      if (value != this.uId_) {
        this.uId_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'uId', null, value));
      }
    }
  },
  uMsg: {
    /** @this {views.actionitemviews.collaboration.MessageItem} */
    get: function() {
      return this.uMsg_;
    },
    /** @this {views.actionitemviews.collaboration.MessageItem} */
    set: function(value) {
      if (value != this.uMsg_) {
        this.uMsg_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'uMsg', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {views.actionitemviews.collaboration.MessageItem} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = views.actionitemviews.collaboration.MessageItem.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var mxmldd = [
          org.apache.royale.jewel.Label,
          1,
          'id',
          true,
          'uId',
          0,
          0,
          null,
          org.apache.royale.jewel.Label,
          2,
          'id',
          true,
          'uMsg',
          'multiline',
          true,
          true,
          0,
          0,
          null
        ];
        if (arr)
          this.mxmldd = arr.concat(mxmldd);
        else
          this.mxmldd = mxmldd;
      }
      return this.mxmldd;
    }
  }
});
/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
views.actionitemviews.collaboration.MessageItem.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'MessageItem', qName: 'views.actionitemviews.collaboration.MessageItem', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
views.actionitemviews.collaboration.MessageItem.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'myself': { type: 'Boolean', access: 'writeonly', declaredBy: 'views.actionitemviews.collaboration.MessageItem'},
        'uId': { type: 'org.apache.royale.jewel.Label', access: 'readwrite', declaredBy: 'views.actionitemviews.collaboration.MessageItem'},
        'uMsg': { type: 'org.apache.royale.jewel.Label', access: 'readwrite', declaredBy: 'views.actionitemviews.collaboration.MessageItem'}
      };
    },
    methods: function () {
      return {
        'setData': { type: 'void', declaredBy: 'views.actionitemviews.collaboration.MessageItem', parameters: function () { return [ 'String', false ,'String', false ]; }},
        'MessageItem': { type: '', declaredBy: 'views.actionitemviews.collaboration.MessageItem'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
views.actionitemviews.collaboration.MessageItem.prototype.ROYALE_COMPILE_FLAGS = 9;



//# sourceMappingURL=./MessageItem.js.map
