/**
 * Generated by Apache Royale Compiler from com/unhurdle/spectrum/VDivider.as
 * com.unhurdle.spectrum.VDivider
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('com.unhurdle.spectrum.VDivider');
/* Royale Dependency List: */

goog.require('com.unhurdle.spectrum.Divider');



/**
 * @constructor
 * @extends {com.unhurdle.spectrum.Divider}
 */
com.unhurdle.spectrum.VDivider = function() {
  com.unhurdle.spectrum.VDivider.base(this, 'constructor');
  this.vertical = true;
};
goog.inherits(com.unhurdle.spectrum.VDivider, com.unhurdle.spectrum.Divider);


/**
 * @private
 * @type {boolean}
 */
com.unhurdle.spectrum.VDivider.prototype.com_unhurdle_spectrum_VDivider__fitHeight = false;


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
com.unhurdle.spectrum.VDivider.prototype.fitHeight;


com.unhurdle.spectrum.VDivider.prototype.get__fitHeight = function() {
  return this.com_unhurdle_spectrum_VDivider__fitHeight;
};


com.unhurdle.spectrum.VDivider.prototype.set__fitHeight = function(value) {
  if (value != !!this.com_unhurdle_spectrum_VDivider__fitHeight) {
    if (value) {
      this.setStyle("height", "auto");
      this.setStyle("align-self", "stretch");
    } else {
      this.setStyle("align-self", "");
      if (!isNaN(this._height)) {
        this.height = this._height;
      }
    }
  }
  this.com_unhurdle_spectrum_VDivider__fitHeight = value;
};


Object.defineProperties(com.unhurdle.spectrum.VDivider.prototype, /** @lends {com.unhurdle.spectrum.VDivider.prototype} */ {
/**
 * @type {boolean}
 */
fitHeight: {
get: com.unhurdle.spectrum.VDivider.prototype.get__fitHeight,
set: com.unhurdle.spectrum.VDivider.prototype.set__fitHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
com.unhurdle.spectrum.VDivider.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'VDivider', qName: 'com.unhurdle.spectrum.VDivider', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
com.unhurdle.spectrum.VDivider.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'fitHeight': { type: 'Boolean', access: 'readwrite', declaredBy: 'com.unhurdle.spectrum.VDivider'}
      };
    },
    methods: function () {
      return {
        'VDivider': { type: '', declaredBy: 'com.unhurdle.spectrum.VDivider'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
com.unhurdle.spectrum.VDivider.prototype.ROYALE_COMPILE_FLAGS = 11;
