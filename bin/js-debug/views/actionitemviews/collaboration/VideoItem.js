/**
 * Generated by Apache Royale Compiler from views/actionitemviews/collaboration/VideoItem.mxml
 * views.actionitemviews.collaboration.VideoItem
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('views.actionitemviews.collaboration.VideoItem');
/* Royale Dependency List: org.apache.royale.html.elements.Video,org.apache.royale.jewel.Label,org.apache.royale.events.Event,XML*/

goog.require('org.apache.royale.jewel.Container');



/**
 * @constructor
 * @extends {org.apache.royale.jewel.Container}
 */
views.actionitemviews.collaboration.VideoItem = function() {
  views.actionitemviews.collaboration.VideoItem.base(this, 'constructor');
  
  /**
   * @private
   * @type {org.apache.royale.html.elements.Video}
   */
  this.vid_;
  
  /**
   * @private
   * @type {org.apache.royale.jewel.Label}
   */
  this.uId_;
  
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
    2,
    'percentWidth',
    true,
    100.0,
    'height',
    true,
    100,
    0,
    1,
    'initComplete',
    this.$EH_11_0
  ]);
  
};
goog.inherits(views.actionitemviews.collaboration.VideoItem, org.apache.royale.jewel.Container);




/**
 * @private
 * @type {boolean}
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem__isInitialized = false;


/**
 * @private
 * @type {string}
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem__userId = null;


/**
 * @private
 * @type {Object}
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem__stream = null;


/**
 * @private
 * @type {boolean}
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem__isMe = false;


/**
 * @private
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem_init = function() {
  this.views_actionitemviews_collaboration_VideoItem__isInitialized = true;
  this.views_actionitemviews_collaboration_VideoItem_updateUI();
};


/**
 * @param {string} userId
 * @param {Object} stream
 * @param {boolean=} isMe
 */
views.actionitemviews.collaboration.VideoItem.prototype.videoItemData = function(userId, stream, isMe) {
  isMe = typeof isMe !== 'undefined' ? isMe : false;
  this.views_actionitemviews_collaboration_VideoItem__userId = userId;
  this.views_actionitemviews_collaboration_VideoItem__stream = stream;
  this.views_actionitemviews_collaboration_VideoItem__isMe = isMe;
  if (this.views_actionitemviews_collaboration_VideoItem__isInitialized) {
    this.views_actionitemviews_collaboration_VideoItem_updateUI();
  }
};


;


/**
 * @param {boolean} on
 */
views.actionitemviews.collaboration.VideoItem.prototype.toggleCamera = function(on) {
  if (this.vid) {
    this.vid.visible = on;
  }
  on ? this.uId.className = "chatVidLblOn" : this.uId.className = "chatVidLblOff";
  this.uId.text = this.views_actionitemviews_collaboration_VideoItem__userId + (this.views_actionitemviews_collaboration_VideoItem__isMe ? " (You)" : "") + (on ? "" : " (Camera Off)");
  this.uId.x = (this.width - this.uId.width) / 2;
};


/**
 * @private
 */
views.actionitemviews.collaboration.VideoItem.prototype.views_actionitemviews_collaboration_VideoItem_updateUI = function() {
  if (this.views_actionitemviews_collaboration_VideoItem__stream && this.vid) {
    this.vid.source = this.views_actionitemviews_collaboration_VideoItem__stream;
    this.vid.visible = true;
    this.uId.x = (this.width - this.uId.width) / 2;
  }
  this.uId.text = this.views_actionitemviews_collaboration_VideoItem__userId + (this.views_actionitemviews_collaboration_VideoItem__isMe ? " (You)" : "");
};





/**
 * @nocollapse
 * @export
 * @type {string}
 */
views.actionitemviews.collaboration.VideoItem.prototype.userId;


views.actionitemviews.collaboration.VideoItem.prototype.get__userId = function() {
  return this.views_actionitemviews_collaboration_VideoItem__userId;
};


Object.defineProperties(views.actionitemviews.collaboration.VideoItem.prototype, /** @lends {views.actionitemviews.collaboration.VideoItem.prototype} */ {
/**
 * @type {string}
 */
userId: {
get: views.actionitemviews.collaboration.VideoItem.prototype.get__userId}}
);/**
 * @export
 * @param {org.apache.royale.events.Event} event
 */
views.actionitemviews.collaboration.VideoItem.prototype.$EH_11_0 = function(event)
{
  this.views_actionitemviews_collaboration_VideoItem_init();
};


Object.defineProperties(views.actionitemviews.collaboration.VideoItem.prototype, /** @lends {views.actionitemviews.collaboration.VideoItem.prototype} */ {
  vid: {
    /** @this {views.actionitemviews.collaboration.VideoItem} */
    get: function() {
      return this.vid_;
    },
    /** @this {views.actionitemviews.collaboration.VideoItem} */
    set: function(value) {
      if (value != this.vid_) {
        this.vid_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'vid', null, value));
      }
    }
  },
  uId: {
    /** @this {views.actionitemviews.collaboration.VideoItem} */
    get: function() {
      return this.uId_;
    },
    /** @this {views.actionitemviews.collaboration.VideoItem} */
    set: function(value) {
      if (value != this.uId_) {
        this.uId_ = value;
        this.dispatchEvent(org.apache.royale.events.ValueChangeEvent.createUpdateEvent(this, 'uId', null, value));
      }
    }
  },
  'MXMLDescriptor': {
    /** @this {views.actionitemviews.collaboration.VideoItem} */
    get: function() {
      if (this.mxmldd == undefined)
      {
        /** @type {Array} */
        var arr = views.actionitemviews.collaboration.VideoItem.superClass_.get__MXMLDescriptor.apply(this);
        /** @type {Array} */
        var mxmldd = [
          org.apache.royale.html.elements.Video,
          6,
          'id',
          true,
          'vid',
          'percentWidth',
          true,
          100.0,
          'height',
          true,
          100,
          'autoplay',
          true,
          true,
          'x',
          true,
          0,
          'y',
          true,
          0,
          0,
          0,
          null,
          org.apache.royale.jewel.Label,
          5,
          'id',
          true,
          'uId',
          'text',
          true,
          'Video Item',
          'className',
          true,
          'chatVidLblOn',
          'x',
          true,
          0,
          'y',
          true,
          0,
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
views.actionitemviews.collaboration.VideoItem.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'VideoItem', qName: 'views.actionitemviews.collaboration.VideoItem', kind: 'class'  }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
views.actionitemviews.collaboration.VideoItem.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'userId': { type: 'String', access: 'readonly', declaredBy: 'views.actionitemviews.collaboration.VideoItem'},
        'vid': { type: 'org.apache.royale.html.elements.Video', access: 'readwrite', declaredBy: 'views.actionitemviews.collaboration.VideoItem'},
        'uId': { type: 'org.apache.royale.jewel.Label', access: 'readwrite', declaredBy: 'views.actionitemviews.collaboration.VideoItem'}
      };
    },
    methods: function () {
      return {
        'videoItemData': { type: 'void', declaredBy: 'views.actionitemviews.collaboration.VideoItem', parameters: function () { return [ 'String', false ,'Object', false ,'Boolean', true ]; }},
        'toggleCamera': { type: 'void', declaredBy: 'views.actionitemviews.collaboration.VideoItem', parameters: function () { return [ 'Boolean', false ]; }},
        'VideoItem': { type: '', declaredBy: 'views.actionitemviews.collaboration.VideoItem'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
views.actionitemviews.collaboration.VideoItem.prototype.ROYALE_COMPILE_FLAGS = 9;



//# sourceMappingURL=./VideoItem.js.map
