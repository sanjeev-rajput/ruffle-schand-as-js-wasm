/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/HorizontalLayout.as
 * org.apache.royale.jewel.beads.layouts.HorizontalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.HorizontalLayout');
/* Royale Dependency List: org.apache.royale.core.IUIBase,org.apache.royale.core.ValuesManager,org.apache.royale.debugging.assert,org.apache.royale.events.Event,org.apache.royale.jewel.beads.layouts.GapConstants*/

goog.require('org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout');
goog.require('org.apache.royale.core.layout.ILayoutStyleProperties');
goog.require('org.apache.royale.jewel.beads.layouts.IGap');
goog.require('org.apache.royale.jewel.beads.layouts.IVariableRowHeight');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout}
 * @implements {org.apache.royale.core.layout.ILayoutStyleProperties}
 * @implements {org.apache.royale.jewel.beads.layouts.IGap}
 * @implements {org.apache.royale.jewel.beads.layouts.IVariableRowHeight}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout = function() {
  org.apache.royale.jewel.beads.layouts.HorizontalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.HorizontalLayout, org.apache.royale.jewel.beads.layouts.SimpleHorizontalLayout);


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.LAYOUT_TYPE_NAMES = "layout horizontal";


/**
 *  Add class selectors when the component is addedToParent
 *  Otherwise component will not get the class selectors when 
 *  perform "removeElement" and then "addElement"
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @override
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.HorizontalLayout.superClass_.beadsAddedHandler.apply(this);
  this.applyStyleToLayout(this.hostComponent, "gap");
  this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setGap(this._gap);
  this.applyStyleToLayout(this.hostComponent, "variableRowHeight");
  this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setVariableRowHeight(this.org_apache_royale_jewel_beads_layouts_HorizontalLayout__variableRowHeight);
};


/**
 *  Get the component layout style and apply to if exists
 * 
 *  @asparam component the IUIBase component that host this layout
 *  @asparam cssProperty the style property in css set for the component to retrieve
 * 
 *  @see org.apache.royale.core.layout.ILayoutStyleProperties#applyStyleToLayout(component:IUIBase, cssProperty:String):void
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @override
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.applyStyleToLayout = function(component, cssProperty) {
  org.apache.royale.jewel.beads.layouts.HorizontalLayout.superClass_.applyStyleToLayout.apply(this, [component, cssProperty]);
  var /** @type {*} */ cssValue = org.apache.royale.core.ValuesManager.valuesImpl.getValue(component, cssProperty);
  if (cssValue !== undefined) {
    switch (cssProperty) {
      case "gap":
        if (!this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_gapInitialized)
          this.gap = Number(cssValue);
        break;
      case "variableRowHeight":
        if (!this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_variableRowHeightInitialized)
          this.variableRowHeight = Boolean(cssValue);
        break;
      default:
        break;
    }
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.org_apache_royale_jewel_beads_layouts_HorizontalLayout_gapInitialized;


/**
 * @protected
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype._gap = 0;


/**
 * @private
 * @param {number} value
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setGap = function(value) {
  org.apache.royale.debugging.assert(value >= 0 && value <= org.apache.royale.jewel.beads.layouts.GapConstants.GAPS, "Gap needs to be between 0 and " + org.apache.royale.jewel.beads.layouts.GapConstants.GAPS + ", got " + value);
  if (this.hostComponent.containsClass("gap-" + this._gap + "x" + org.apache.royale.jewel.beads.layouts.GapConstants.GAP_STEP + "px"))
    this.hostComponent.removeClass("gap-" + this._gap + "x" + org.apache.royale.jewel.beads.layouts.GapConstants.GAP_STEP + "px");
  if (value != 0)
    this.hostComponent.addClass("gap-" + value + "x" + org.apache.royale.jewel.beads.layouts.GapConstants.GAP_STEP + "px");
};


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.org_apache_royale_jewel_beads_layouts_HorizontalLayout_variableRowHeightInitialized;


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.org_apache_royale_jewel_beads_layouts_HorizontalLayout__variableRowHeight = false;


/**
 * @private
 * @param {boolean} value
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setVariableRowHeight = function(value) {
  this.hostComponent.toggleClass("variableRowHeight", value);
};


/**
 *  Layout children horizontally
 * 
 *  @copy org.apache.royale.core.IBeadLayout#layout
 *  @royaleignorecoercion org.apache.royale.core.ILayoutHost
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 *  @royaleignorecoercion org.apache.royale.core.IBorderPaddingMarginValuesImpl
 * @override
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.layout = function() {
  
  return true;
};


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.gap;


org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.get__gap = function() {
  return this._gap;
};


org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.set__gap = function(value) {
  if (this._gap != value) {
    if (this.hostComponent)
      this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setGap(value);
    this._gap = value;
    this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_gapInitialized = true;
  }
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.variableRowHeight;


org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.get__variableRowHeight = function() {
  return this.org_apache_royale_jewel_beads_layouts_HorizontalLayout__variableRowHeight;
};


org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.set__variableRowHeight = function(value) {
  if (this.org_apache_royale_jewel_beads_layouts_HorizontalLayout__variableRowHeight != value) {
    if (this.hostComponent)
      this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_setVariableRowHeight(value);
    this.org_apache_royale_jewel_beads_layouts_HorizontalLayout__variableRowHeight = value;
    this.org_apache_royale_jewel_beads_layouts_HorizontalLayout_variableRowHeightInitialized = true;
  }
};


Object.defineProperties(org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype, /** @lends {org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype} */ {
/**
 * @type {number}
 */
gap: {
get: org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.get__gap,
set: org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.set__gap},
/**
 * @type {boolean}
 */
variableRowHeight: {
get: org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.get__variableRowHeight,
set: org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.set__variableRowHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HorizontalLayout', qName: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout', kind: 'class' }], interfaces: [org.apache.royale.core.layout.ILayoutStyleProperties, org.apache.royale.jewel.beads.layouts.IGap, org.apache.royale.jewel.beads.layouts.IVariableRowHeight] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'gap': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout'},
        'variableRowHeight': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout'}
      };
    },
    methods: function () {
      return {
        'HorizontalLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'applyStyleToLayout': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'String', false ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.HorizontalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.HorizontalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./HorizontalLayout.js.map
