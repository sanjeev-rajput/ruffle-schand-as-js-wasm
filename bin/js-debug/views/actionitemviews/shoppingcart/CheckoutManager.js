/**
 * Generated by Apache Royale Compiler from views/actionitemviews/shoppingcart/CheckoutManager.as
 * views.actionitemviews.shoppingcart.CheckoutManager
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('views.actionitemviews.shoppingcart.CheckoutManager');
/* Royale Dependency List: org.apache.royale.jewel.Button,org.apache.royale.jewel.Group,org.apache.royale.jewel.Label,org.apache.royale.jewel.beads.controls.Disabled,views.actionitemviews.shoppingcart.CartManager,org.apache.royale.utils.Language,XML*/




/**
 * @constructor
 */
views.actionitemviews.shoppingcart.CheckoutManager = function() {
  if (views.actionitemviews.shoppingcart.CheckoutManager._instance) {
    throw new Error("CheckoutManager is a singleton and cannot be instantiated multiple times.");
  }
};


/**
 * @private
 * @type {views.actionitemviews.shoppingcart.CheckoutManager}
 */
views.actionitemviews.shoppingcart.CheckoutManager._instance = null;


/**
 * @private
 * @type {org.apache.royale.jewel.Group}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.views_actionitemviews_shoppingcart_CheckoutManager__view = null;


/**
 * @private
 * @type {org.apache.royale.jewel.Label}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.views_actionitemviews_shoppingcart_CheckoutManager__priceLbl = null;


/**
 * @private
 * @type {org.apache.royale.jewel.Button}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.views_actionitemviews_shoppingcart_CheckoutManager__btnChkout = null;


/**
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.updaPriceTotal = function() {
  var /** @type {number} */ totalPrice = 0;
  var foreachiter0_target = views.actionitemviews.shoppingcart.CartManager.instance.cartItems;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var item = foreachiter0_target[foreachiter0];
  {
    totalPrice += item["price"] * item["qty"];
  }}
  
  this.views_actionitemviews_shoppingcart_CheckoutManager__priceLbl.html = "Total: $" + totalPrice.toFixed(2);
  var /** @type {org.apache.royale.jewel.beads.controls.Disabled} */ db = org.apache.royale.utils.Language.as(this.views_actionitemviews_shoppingcart_CheckoutManager__btnChkout.getBeadByType(org.apache.royale.jewel.beads.controls.Disabled), org.apache.royale.jewel.beads.controls.Disabled, true);
  totalPrice == 0 ? db.disabled = true : db.disabled = false;
};


/**
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.checkout = function() {
};


/**
 * @nocollapse
 * @export
 * @type {org.apache.royale.jewel.Group}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.view;


views.actionitemviews.shoppingcart.CheckoutManager.prototype.set__view = function(v) {
  this.views_actionitemviews_shoppingcart_CheckoutManager__view = v;
  for (var /** @type {number} */ i = 0; i <= this.views_actionitemviews_shoppingcart_CheckoutManager__view.numElements - 1; i++) {
    if (this.views_actionitemviews_shoppingcart_CheckoutManager__view.getElementAt(i).element.id == "totalLabel")
      this.views_actionitemviews_shoppingcart_CheckoutManager__priceLbl = this.views_actionitemviews_shoppingcart_CheckoutManager__view.getElementAt(i);
    if (this.views_actionitemviews_shoppingcart_CheckoutManager__view.getElementAt(i).element.id == "btnCheckout")
      this.views_actionitemviews_shoppingcart_CheckoutManager__btnChkout = this.views_actionitemviews_shoppingcart_CheckoutManager__view.getElementAt(i);
    var /** @type {org.apache.royale.jewel.beads.controls.Disabled} */ db = new org.apache.royale.jewel.beads.controls.Disabled();
    this.views_actionitemviews_shoppingcart_CheckoutManager__btnChkout.addBead(db);
    db.disabled = true;
  }
};


Object.defineProperties(views.actionitemviews.shoppingcart.CheckoutManager.prototype, /** @lends {views.actionitemviews.shoppingcart.CheckoutManager.prototype} */ {
/**
 * @type {org.apache.royale.jewel.Group}
 */
view: {
set: views.actionitemviews.shoppingcart.CheckoutManager.prototype.set__view}}
);


/**
 * @nocollapse
 * @export
 * @type {views.actionitemviews.shoppingcart.CheckoutManager}
 */
views.actionitemviews.shoppingcart.CheckoutManager.instance;


views.actionitemviews.shoppingcart.CheckoutManager.get__instance = function() {
  if (!views.actionitemviews.shoppingcart.CheckoutManager._instance) {
    views.actionitemviews.shoppingcart.CheckoutManager._instance = new views.actionitemviews.shoppingcart.CheckoutManager();
  }
  return views.actionitemviews.shoppingcart.CheckoutManager._instance;
};


Object.defineProperties(views.actionitemviews.shoppingcart.CheckoutManager, /** @lends {views.actionitemviews.shoppingcart.CheckoutManager} */ {
/**
 * @type {views.actionitemviews.shoppingcart.CheckoutManager}
 */
instance: {
get: views.actionitemviews.shoppingcart.CheckoutManager.get__instance}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'CheckoutManager', qName: 'views.actionitemviews.shoppingcart.CheckoutManager', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        '|instance': { type: 'views.actionitemviews.shoppingcart.CheckoutManager', access: 'readonly', declaredBy: 'views.actionitemviews.shoppingcart.CheckoutManager'},
        'view': { type: 'org.apache.royale.jewel.Group', access: 'writeonly', declaredBy: 'views.actionitemviews.shoppingcart.CheckoutManager'}
      };
    },
    methods: function () {
      return {
        'updaPriceTotal': { type: 'void', declaredBy: 'views.actionitemviews.shoppingcart.CheckoutManager'},
        'checkout': { type: 'void', declaredBy: 'views.actionitemviews.shoppingcart.CheckoutManager'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.ROYALE_COMPILE_FLAGS = 9;
/**
 * Provide reflection support for distinguishing dynamic fields on class object (static)
 * @const
 * @type {Array<string>}
 */
views.actionitemviews.shoppingcart.CheckoutManager.prototype.ROYALE_INITIAL_STATICS = Object.keys(views.actionitemviews.shoppingcart.CheckoutManager);

//# sourceMappingURL=./CheckoutManager.js.map
