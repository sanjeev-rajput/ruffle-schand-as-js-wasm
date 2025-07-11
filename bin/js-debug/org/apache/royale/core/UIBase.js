/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/UIBase.as
 * org.apache.royale.core.UIBase
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.UIBase');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IBeadController,org.apache.royale.core.IBeadView,org.apache.royale.core.IChild,org.apache.royale.core.IMeasurementBead,org.apache.royale.core.IParent,org.apache.royale.core.IStyleObject,org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.core.WrappedHTMLElement,org.apache.royale.events.Event,org.apache.royale.events.EventDispatcher,org.apache.royale.html.util.addElementToWrapper,org.apache.royale.utils.CSSUtils,org.apache.royale.utils.loadBeadFromValuesManager,org.apache.royale.utils.sendEvent,org.apache.royale.utils.Language,XML*/

goog.require('org.apache.royale.core.HTMLElementWrapper');
goog.require('org.apache.royale.events.IEventDispatcher');
goog.require('org.apache.royale.core.IId');
goog.require('org.apache.royale.core.ILayoutChild');
goog.require('org.apache.royale.core.IParentIUIBase');
goog.require('org.apache.royale.core.IRoyaleElement');
goog.require('org.apache.royale.core.IStrandWithModelView');
goog.require('org.apache.royale.core.IStyleableObject');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @constructor
 * @extends {org.apache.royale.core.HTMLElementWrapper}
 * @implements {org.apache.royale.core.IStrandWithModelView}
 * @implements {org.apache.royale.events.IEventDispatcher}
 * @implements {org.apache.royale.core.IParentIUIBase}
 * @implements {org.apache.royale.core.IStyleableObject}
 * @implements {org.apache.royale.core.ILayoutChild}
 * @implements {org.apache.royale.core.IRoyaleElement}
 * @implements {org.apache.royale.core.IId}
 */
org.apache.royale.core.UIBase = function() {
  org.apache.royale.core.UIBase.base(this, 'constructor');
  
  this.createElement();
};
goog.inherits(org.apache.royale.core.UIBase, org.apache.royale.core.HTMLElementWrapper);


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._explicitWidth;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._explicitHeight;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._percentWidth;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._percentHeight;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._width;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._height;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setHeight = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._height !== value) {
    this._height = value;
    this.positioner.style.height = value.toString() + 'px';
    if (!noEvent)
      org.apache.royale.utils.sendEvent(this, "heightChanged");
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidth
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setWidth = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width !== value) {
    this._width = value;
    this.positioner.style.width = value.toString() + 'px';
    if (!noEvent)
      org.apache.royale.utils.sendEvent(this, "widthChanged");
  }
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#setWidthAndHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} newWidth
 * @param {number} newHeight
 * @param {boolean=} noEvent
 */
org.apache.royale.core.UIBase.prototype.setWidthAndHeight = function(newWidth, newHeight, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  var /** @type {boolean} */ widthChanged = this._width !== newWidth;
  var /** @type {boolean} */ heightChanged = this._height !== newHeight;
  if (widthChanged) {
    this._width = newWidth;
    this.positioner.style.width = newWidth.toString() + 'px';
    if (!noEvent && !heightChanged)
      org.apache.royale.utils.sendEvent(this, "widthChanged");
  }
  if (heightChanged) {
    this._height = newHeight;
    this.positioner.style.height = newHeight.toString() + 'px';
    if (!noEvent && !widthChanged)
      org.apache.royale.utils.sendEvent(this, "heightChanged");
  }
  if (widthChanged && heightChanged)
    org.apache.royale.utils.sendEvent(this, "sizeChanged");
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#isWidthSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.isWidthSizedToContent = function() {
  if (!isNaN(this._explicitWidth))
    return false;
  if (!isNaN(this._percentWidth))
    return false;
  var /** @type {*} */ left = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "left");
  var /** @type {*} */ right = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "right");
  return (left === undefined || right === undefined);
};


/**
 *  @copy org.apache.royale.core.ILayoutChild#isHeightSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.isHeightSizedToContent = function() {
  if (!isNaN(this._explicitHeight))
    return false;
  if (!isNaN(this._percentHeight))
    return false;
  var /** @type {*} */ top = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "top");
  var /** @type {*} */ bottom = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "bottom");
  return (top === undefined || bottom === undefined);
};


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._x;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setX
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @param {number} value
 */
org.apache.royale.core.UIBase.prototype.setX = function(value) {
  
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ pos = this.positioner;
  if (pos.parentNode != pos.offsetParent)
    value += pos.parentNode.offsetLeft;
  pos.style.left = value.toString() + 'px';
};


/**
 * @protected
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype._y;


/**
 *  @copy org.apache.royale.core.ILayoutChild#setY
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @param {number} value
 */
org.apache.royale.core.UIBase.prototype.setY = function(value) {
  
  var /** @type {org.apache.royale.core.WrappedHTMLElement} */ pos = this.positioner;
  if (pos.parentNode != pos.offsetParent)
    value += pos.parentNode.offsetTop;
  pos.style.top = value.toString() + 'px';
};


/**
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.displayStyleForLayout;


/**
 *  The display style is used for both visible
 *  and layout so is managed as a special case.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {string} value
 */
org.apache.royale.core.UIBase.prototype.setDisplayStyleForLayout = function(value) {
  this.displayStyleForLayout = value;
  if (this.positioner.style.display !== 'none')
    this.positioner.style.display = value;
};


/**
 * @asreturn The array of children.
 * @royaleignorecoercion Array
 * @return {Array}
 */
org.apache.royale.core.UIBase.prototype.internalChildren = function() {
  return this.element.childNodes;
};


/**
 * @private
 * @type {org.apache.royale.core.IBeadView}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase__view;


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase__id;


/**
 * @private
 * @type {Object}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase__style;


/**
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.typeNames = "";


/**
 * @private
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase__className;


/**
 * @protected
 * @return {string}
 */
org.apache.royale.core.UIBase.prototype.computeFinalClassNames = function() {
  return this.org_apache_royale_core_UIBase__className ? this.org_apache_royale_core_UIBase__className + " " + this.typeNames : this.typeNames;
};


/**
 * @protected
 * @param {string} value
 */
org.apache.royale.core.UIBase.prototype.setClassName = function(value) {
  this.element.className = value;
};


/**
 * @type {Array}
 */
org.apache.royale.core.UIBase.prototype.beads;


/**
 * @royaleignorecoercion org.apache.royale.core.IChild
 * @royaleemitcoercion org.apache.royale.events.EventDispatcher
 * @override
 */
org.apache.royale.core.UIBase.prototype.getParentEventTarget = function() {
  return org.apache.royale.utils.Language.as(this.parent, org.apache.royale.events.EventDispatcher);
};


/**
 *  @copy org.apache.royale.core.IParent#addElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.appendChild(c.positioner);
  c.addedToParent();
};


/**
 *  @copy org.apache.royale.core.IParent#addElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion org.apache.royale.core.IUIBase
 * @param {org.apache.royale.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  var /** @type {Array} */ children = this.internalChildren();
  if (index >= children.length)
    this.element.appendChild(c.positioner);
  else
    this.element.insertBefore(c.positioner, children[index]);
  c.addedToParent();
};


/**
 *  @copy org.apache.royale.core.IParent#getElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {number} index
 * @return {org.apache.royale.core.IChild}
 */
org.apache.royale.core.UIBase.prototype.getElementAt = function(index) {
  
  var /** @type {Array} */ children = this.internalChildren();
  if (children.length == 0) {
    return null;
  }
  return children[index].royale_wrapper;
};


/**
 *  @copy org.apache.royale.core.IParent#getElementIndex()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IChild} c
 * @return {number}
 */
org.apache.royale.core.UIBase.prototype.getElementIndex = function(c) {
  
  var /** @type {Array} */ children = this.internalChildren();
  var /** @type {number} */ n = (children.length) >> 0;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (children[i] === c.positioner)
      return i;
  }
  return -1;
};


/**
 *  @copy org.apache.royale.core.IParent#removeElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion HTMLElement
 * @param {org.apache.royale.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.royale.core.UIBase.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.removeChild(c.positioner);
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase_onceAdded;


/**
 *  The method called when added to a parent.  This is a good
 *  time to set up beads.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 *  @royaleignorecoercion Class
 *  @royaleignorecoercion Number
 */
org.apache.royale.core.UIBase.prototype.addedToParent = function() {
  if (this.org_apache_royale_core_UIBase_onceAdded)
    return;
  this.org_apache_royale_core_UIBase_onceAdded = true;
  var /** @type {Object} */ c;
  var /** @type {string} */ classNames = this.computeFinalClassNames().trim();
  if (classNames)
    this.setClassName(classNames);
  if (this.style)
    org.apache.royale.core.ValuesManager.valuesImpl.applyStyles(this, this.style);
  if (isNaN(this._explicitWidth) && isNaN(this._percentWidth)) {
    var /** @type {*} */ value = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "width");
    if (value !== undefined) {
      if (org.apache.royale.utils.Language.is(value, String)) {
        var /** @type {string} */ s = String(value);
        if (s.indexOf("%") > -1)
          this._percentWidth = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") !== -1)
            s = s.substring(0, s.length - 2);
          this._width = this._explicitWidth = Number(s);
        }
      }
      else
        this._width = this._explicitWidth = value;
    }
  }
  if (isNaN(this._explicitHeight) && isNaN(this._percentHeight)) {
    value = org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, "height");
    if (value !== undefined) {
      if (org.apache.royale.utils.Language.is(value, String)) {
        s = String(value);
        if (s.indexOf("%") !== -1)
          this._percentHeight = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") !== -1)
            s = s.substring(0, s.length - 2);
          this._height = this._explicitHeight = Number(s);
        }
      }
      else
        this._height = this._explicitHeight = value;
    }
  }
  var foreachiter0_target = this.beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  
    this.addBead(bead);}
  
  this.loadBeads();
  org.apache.royale.utils.sendEvent(this, "beadsAdded");
};


/**
 *  load necesary beads. This method can be override in subclasses to
 *  add other custom beads needed, so all requested beads be loaded before
 *  signal the "beadsAdded" event.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.8
 *  @royaleignorecoercion org.apache.royale.core.IBeadView
 * 
 * @protected
 */
org.apache.royale.core.UIBase.prototype.loadBeads = function() {
  if (this.requiresView()) {
    this.org_apache_royale_core_UIBase__view = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadView, "iBeadView", this);
    org.apache.royale.utils.sendEvent(this, "viewChanged");
  }
  if (this.requiresController())
    org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadController, "iBeadController", this);
};


/**
 * Subclasses can override this method to declare whether they require a view.
 * Components which do not require a view can avoid searching for view beads
 * @protected
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.requiresView = function() {
  return true;
};


/**
 * Subclasses can override this method to declare whether they require a controller.
 * Components which do not require a controller can avoid searching for controller beads
 * @protected
 * @return {boolean}
 */
org.apache.royale.core.UIBase.prototype.requiresController = function() {
  return true;
};


/**
 * @private
 * @type {org.apache.royale.core.IMeasurementBead}
 */
org.apache.royale.core.UIBase.prototype.org_apache_royale_core_UIBase__measurementBead;


/**
 * Rebroadcast an event from a sub component from the component.
 * @protected
 * @param {org.apache.royale.events.Event} event
 */
org.apache.royale.core.UIBase.prototype.repeaterListener = function(event) {
  org.apache.royale.utils.sendEvent(this, event);
};


/**
 * @asreturn The actual element to be parented.
 * @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @protected
 * @return {Object}
 */
org.apache.royale.core.UIBase.prototype.createElement = function() {
  org.apache.royale.html.util.addElementToWrapper(this, 'div');
  this.positioner.style.display = 'block';
  return this.element;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.core.UIBase.prototype.royale_wrapper;


org.apache.royale.core.UIBase.prototype.get__royale_wrapper = function() {
  return this;
};


org.apache.royale.core.UIBase.prototype.set__royale_wrapper = function(value) {
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.explicitWidth;


org.apache.royale.core.UIBase.prototype.get__explicitWidth = function() {
  return this._explicitWidth;
};


org.apache.royale.core.UIBase.prototype.set__explicitWidth = function(value) {
  if (this._explicitWidth == value)
    return;
  if (!isNaN(value))
    this._percentWidth = NaN;
  this._explicitWidth = value;
  org.apache.royale.utils.sendEvent(this, "explicitWidthChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.explicitHeight;


org.apache.royale.core.UIBase.prototype.get__explicitHeight = function() {
  return this._explicitHeight;
};


org.apache.royale.core.UIBase.prototype.set__explicitHeight = function(value) {
  if (this._explicitHeight == value)
    return;
  if (!isNaN(value))
    this._percentHeight = NaN;
  this._explicitHeight = value;
  org.apache.royale.utils.sendEvent(this, "explicitHeightChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.percentWidth;


org.apache.royale.core.UIBase.prototype.get__percentWidth = function() {
  return this._percentWidth;
};


org.apache.royale.core.UIBase.prototype.set__percentWidth = function(value) {
  
  this._percentWidth = value;
  this.positioner.style.width = value.toString() + '%';
  if (!isNaN(value))
    this._explicitWidth = NaN;
  org.apache.royale.utils.sendEvent(this, "percentWidthChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.percentHeight;


org.apache.royale.core.UIBase.prototype.get__percentHeight = function() {
  return this._percentHeight;
};


org.apache.royale.core.UIBase.prototype.set__percentHeight = function(value) {
  
  this._percentHeight = value;
  this.positioner.style.height = value.toString() + '%';
  if (!isNaN(value))
    this._explicitHeight = NaN;
  org.apache.royale.utils.sendEvent(this, "percentHeightChanged");
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.width;


org.apache.royale.core.UIBase.prototype.get__width = function() {
  if (!isNaN(this._width))
    return this._width;
  if (!isNaN(this._explicitWidth))
    return this._explicitWidth;
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.width;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetWidth;
    if (pixels == 0 && this.positioner.scrollWidth != 0) {
      pixels = this.positioner.scrollWidth;
    }
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__width = function(value) {
  if (this.explicitWidth !== value) {
    this.explicitWidth = value;
  }
  this.setWidth(value);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.height;


org.apache.royale.core.UIBase.prototype.get__height = function() {
  if (!isNaN(this._height))
    return this._height;
  if (!isNaN(this._explicitHeight))
    return this._explicitHeight;
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.element.style.height;
  if (strpixels == null)
    pixels = NaN;
  else
    pixels = org.apache.royale.utils.CSSUtils.toNumber(strpixels, NaN);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetHeight;
    if (pixels == 0 && this.positioner.scrollHeight != 0) {
      pixels = this.positioner.scrollHeight;
    }
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__height = function(value) {
  if (this.explicitHeight !== value) {
    this.explicitHeight = value;
  }
  this.setHeight(value);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.x;


org.apache.royale.core.UIBase.prototype.get__x = function() {
  if (!isNaN(this._x))
    return this._x;
  var /** @type {Object} */ pos = this.positioner;
  var /** @type {string} */ strpixels = pos.style.left;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = pos.offsetLeft;
    if (pos.parentNode != pos.offsetParent)
      pixels -= pos.parentNode.offsetLeft;
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__x = function(value) {
  this._x = value;
  this.setX(value);
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.y;


org.apache.royale.core.UIBase.prototype.get__y = function() {
  if (!isNaN(this._y))
    return this._y;
  var /** @type {Object} */ pos = this.positioner;
  var /** @type {string} */ strpixels = pos.style.top;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = pos.offsetTop;
    if (pos.parentNode != pos.offsetParent)
      pixels -= pos.parentNode.offsetTop;
  }
  return pixels;
};


org.apache.royale.core.UIBase.prototype.set__y = function(value) {
  this._y = value;
  this.setY(value);
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.core.UIBase.prototype.visible;


org.apache.royale.core.UIBase.prototype.get__visible = function() {
  return this.positioner.style.display !== 'none';
};


org.apache.royale.core.UIBase.prototype.set__visible = function(value) {
  var /** @type {boolean} */ oldValue = this.positioner.style.display !== 'none';
  if (Boolean(value) !== oldValue) {
    if (!value) {
      this.displayStyleForLayout = this.positioner.style.display;
      this.positioner.style.display = 'none';
      org.apache.royale.utils.sendEvent(this, 'hide');
    } else {
      if (this.displayStyleForLayout != null)
        this.positioner.style.display = this.displayStyleForLayout;
      org.apache.royale.utils.sendEvent(this, 'show');
    }
    org.apache.royale.utils.sendEvent(this, 'visibleChanged');
  }
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IBeadView}
 */
org.apache.royale.core.UIBase.prototype.view;


org.apache.royale.core.UIBase.prototype.get__view = function() {
  if (!this.org_apache_royale_core_UIBase__view)
    this.org_apache_royale_core_UIBase__view = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IBeadView, "iBeadView", this);
  return this.org_apache_royale_core_UIBase__view;
};


org.apache.royale.core.UIBase.prototype.set__view = function(value) {
  if (this.org_apache_royale_core_UIBase__view != value) {
    this.addBead(value);
    org.apache.royale.utils.sendEvent(this, "viewChanged");
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.id;


org.apache.royale.core.UIBase.prototype.get__id = function() {
  return this.org_apache_royale_core_UIBase__id;
};


org.apache.royale.core.UIBase.prototype.set__id = function(value) {
  if (this.org_apache_royale_core_UIBase__id !== value) {
    this.org_apache_royale_core_UIBase__id = value;
    org.apache.royale.utils.sendEvent(this, "idChanged");
  }
  this.element.id = this.org_apache_royale_core_UIBase__id;
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.core.UIBase.prototype.style;


org.apache.royale.core.UIBase.prototype.get__style = function() {
  return this.org_apache_royale_core_UIBase__style;
};


org.apache.royale.core.UIBase.prototype.set__style = function(value) {
  if (this.org_apache_royale_core_UIBase__style !== value) {
    if (org.apache.royale.utils.Language.is(value, String)) {
      this.org_apache_royale_core_UIBase__style = org.apache.royale.core.ValuesManager.valuesImpl.parseStyles(value);
    } else {
      this.org_apache_royale_core_UIBase__style = value;
    }
    if (!isNaN(this._y))
      this.org_apache_royale_core_UIBase__style.top = this._y;
    if (!isNaN(this._x))
      this.org_apache_royale_core_UIBase__style.left = this._x;
    if (this.parent)
      org.apache.royale.core.ValuesManager.valuesImpl.applyStyles(this, this.org_apache_royale_core_UIBase__style);
    org.apache.royale.utils.sendEvent(this, "stylesChanged");
    var /** @type {org.apache.royale.core.IStyleObject} */ styleObject = org.apache.royale.utils.Language.as(this.org_apache_royale_core_UIBase__style, org.apache.royale.core.IStyleObject);
    if (styleObject)
      styleObject.object = this;
  }
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.core.UIBase.prototype.className;


org.apache.royale.core.UIBase.prototype.get__className = function() {
  return this.org_apache_royale_core_UIBase__className;
};


org.apache.royale.core.UIBase.prototype.set__className = function(value) {
  if (this.org_apache_royale_core_UIBase__className !== value) {
    this.org_apache_royale_core_UIBase__className = value;
    if (this.parent)
      this.setClassName(this.computeFinalClassNames());
    org.apache.royale.utils.sendEvent(this, "classNameChanged");
  }
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.numElements;


org.apache.royale.core.UIBase.prototype.get__numElements = function() {
  
  return (this.internalChildren().length) >> 0;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IMeasurementBead}
 */
org.apache.royale.core.UIBase.prototype.measurementBead;


org.apache.royale.core.UIBase.prototype.get__measurementBead = function() {
  if (!this.org_apache_royale_core_UIBase__measurementBead) {
    this.org_apache_royale_core_UIBase__measurementBead = org.apache.royale.utils.loadBeadFromValuesManager(org.apache.royale.core.IMeasurementBead, "iMeasurementBead", this);
  }
  return this.org_apache_royale_core_UIBase__measurementBead;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.core.UIBase.prototype.topMostEventDispatcher;


org.apache.royale.core.UIBase.prototype.get__topMostEventDispatcher = function() {
  
  var /** @type {Object} */ e = document.body;
  return e.royale_wrapper;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
org.apache.royale.core.UIBase.prototype.positioner;


org.apache.royale.core.UIBase.prototype.get__positioner = function() {
  return this.element;
};


org.apache.royale.core.UIBase.prototype.set__positioner = function(value) {
  this.element = value;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.alpha;


org.apache.royale.core.UIBase.prototype.get__alpha = function() {
  var /** @type {string} */ stralpha = this.positioner.style.opacity;
  var /** @type {number} */ alpha = parseFloat(stralpha);
  return alpha;
};


org.apache.royale.core.UIBase.prototype.set__alpha = function(value) {
  this.positioner.style.opacity = value;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.IParent}
 */
org.apache.royale.core.UIBase.prototype.parent;


org.apache.royale.core.UIBase.prototype.get__parent = function() {
  var /** @type {Object} */ p = this.positioner.parentNode;
  var /** @type {org.apache.royale.core.IParent} */ wrapper = p ? p.royale_wrapper : null;
  return wrapper;
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
org.apache.royale.core.UIBase.prototype.transformElement;


org.apache.royale.core.UIBase.prototype.get__transformElement = function() {
  return this.element;
};


Object.defineProperties(org.apache.royale.core.UIBase.prototype, /** @lends {org.apache.royale.core.UIBase.prototype} */ {
/**
 * @type {Object}
 */
royale_wrapper: {
get: org.apache.royale.core.UIBase.prototype.get__royale_wrapper,
set: org.apache.royale.core.UIBase.prototype.set__royale_wrapper},
/**
 * @type {number}
 */
explicitWidth: {
get: org.apache.royale.core.UIBase.prototype.get__explicitWidth,
set: org.apache.royale.core.UIBase.prototype.set__explicitWidth},
/**
 * @type {number}
 */
explicitHeight: {
get: org.apache.royale.core.UIBase.prototype.get__explicitHeight,
set: org.apache.royale.core.UIBase.prototype.set__explicitHeight},
/**
 * @type {number}
 */
percentWidth: {
get: org.apache.royale.core.UIBase.prototype.get__percentWidth,
set: org.apache.royale.core.UIBase.prototype.set__percentWidth},
/**
 * @type {number}
 */
percentHeight: {
get: org.apache.royale.core.UIBase.prototype.get__percentHeight,
set: org.apache.royale.core.UIBase.prototype.set__percentHeight},
/**
 * @type {number}
 */
width: {
get: org.apache.royale.core.UIBase.prototype.get__width,
set: org.apache.royale.core.UIBase.prototype.set__width},
/**
 * @type {number}
 */
height: {
get: org.apache.royale.core.UIBase.prototype.get__height,
set: org.apache.royale.core.UIBase.prototype.set__height},
/**
 * @type {number}
 */
x: {
get: org.apache.royale.core.UIBase.prototype.get__x,
set: org.apache.royale.core.UIBase.prototype.set__x},
/**
 * @type {number}
 */
y: {
get: org.apache.royale.core.UIBase.prototype.get__y,
set: org.apache.royale.core.UIBase.prototype.set__y},
/**
 * @type {boolean}
 */
visible: {
get: org.apache.royale.core.UIBase.prototype.get__visible,
set: org.apache.royale.core.UIBase.prototype.set__visible},
/**
 * @type {org.apache.royale.core.IBeadView}
 */
view: {
get: org.apache.royale.core.UIBase.prototype.get__view,
set: org.apache.royale.core.UIBase.prototype.set__view},
/**
 * @type {string}
 */
id: {
get: org.apache.royale.core.UIBase.prototype.get__id,
set: org.apache.royale.core.UIBase.prototype.set__id},
/**
 * @type {Object}
 */
style: {
get: org.apache.royale.core.UIBase.prototype.get__style,
set: org.apache.royale.core.UIBase.prototype.set__style},
/**
 * @type {string}
 */
className: {
get: org.apache.royale.core.UIBase.prototype.get__className,
set: org.apache.royale.core.UIBase.prototype.set__className},
/**
 * @type {number}
 */
numElements: {
get: org.apache.royale.core.UIBase.prototype.get__numElements},
/**
 * @type {org.apache.royale.core.IMeasurementBead}
 */
measurementBead: {
get: org.apache.royale.core.UIBase.prototype.get__measurementBead},
/**
 * @type {org.apache.royale.events.IEventDispatcher}
 */
topMostEventDispatcher: {
get: org.apache.royale.core.UIBase.prototype.get__topMostEventDispatcher},
/**
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
positioner: {
get: org.apache.royale.core.UIBase.prototype.get__positioner,
set: org.apache.royale.core.UIBase.prototype.set__positioner},
/**
 * @type {number}
 */
alpha: {
get: org.apache.royale.core.UIBase.prototype.get__alpha,
set: org.apache.royale.core.UIBase.prototype.set__alpha},
/**
 * @type {org.apache.royale.core.IParent}
 */
parent: {
get: org.apache.royale.core.UIBase.prototype.get__parent},
/**
 * @type {org.apache.royale.core.WrappedHTMLElement}
 */
transformElement: {
get: org.apache.royale.core.UIBase.prototype.get__transformElement}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.UIBase.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'UIBase', qName: 'org.apache.royale.core.UIBase', kind: 'class' }], interfaces: [org.apache.royale.core.IStrandWithModelView, org.apache.royale.events.IEventDispatcher, org.apache.royale.core.IParentIUIBase, org.apache.royale.core.IStyleableObject, org.apache.royale.core.ILayoutChild, org.apache.royale.core.IRoyaleElement, org.apache.royale.core.IId] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.UIBase.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'displayStyleForLayout': { type: 'String', get_set: function (/** org.apache.royale.core.UIBase */ inst, /** * */ v) {return v !== undefined ? inst.displayStyleForLayout = v : inst.displayStyleForLayout;}},
        'typeNames': { type: 'String', get_set: function (/** org.apache.royale.core.UIBase */ inst, /** * */ v) {return v !== undefined ? inst.typeNames = v : inst.typeNames;}},
        'beads': { type: 'Array', get_set: function (/** org.apache.royale.core.UIBase */ inst, /** * */ v) {return v !== undefined ? inst.beads = v : inst.beads;}}
      };
    },
    accessors: function () {
      return {
        'royale_wrapper': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'widthChanged' } ] } ]; }},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'heightChanged' } ] } ]; }},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'visibleChanged' } ] } ]; }},
        'view': { type: 'org.apache.royale.core.IBeadView', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'style': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'measurementBead': { type: 'org.apache.royale.core.IMeasurementBead', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'topMostEventDispatcher': { type: 'org.apache.royale.events.IEventDispatcher', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'positioner': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.core.UIBase'},
        'parent': { type: 'org.apache.royale.core.IParent', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'},
        'transformElement': { type: 'org.apache.royale.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.royale.core.UIBase'}
      };
    },
    methods: function () {
      return {
        'UIBase': { type: '', declaredBy: 'org.apache.royale.core.UIBase'},
        'setHeight': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'Number', false ,'Boolean', true ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'Number', false ,'Boolean', true ]; }},
        'setWidthAndHeight': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'Number', false ,'Number', false ,'Boolean', true ]; }},
        'isWidthSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.UIBase'},
        'isHeightSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.royale.core.UIBase'},
        'setX': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'Number', false ]; }},
        'setY': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'Number', false ]; }},
        'setDisplayStyleForLayout': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'String', false ]; }},
        'internalChildren': { type: 'Array', declaredBy: 'org.apache.royale.core.UIBase'},
        'getParentEventTarget': { type: 'goog.events.EventTarget', declaredBy: 'org.apache.royale.core.UIBase'},
        'addElement': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'int', false ,'Boolean', true ]; }},
        'getElementAt': { type: 'org.apache.royale.core.IChild', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'int', false ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase', parameters: function () { return [ 'org.apache.royale.core.IChild', false ,'Boolean', true ]; }},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.core.UIBase'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.UIBase.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./UIBase.js.map
