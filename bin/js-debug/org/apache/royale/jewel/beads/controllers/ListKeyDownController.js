/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/controllers/ListKeyDownController.as
 * org.apache.royale.jewel.beads.controllers.ListKeyDownController
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.controllers.ListKeyDownController');
/* Royale Dependency List: org.apache.royale.core.IFocusable,org.apache.royale.core.ISelectionModel,org.apache.royale.core.IStrand,org.apache.royale.events.IEventDispatcher,org.apache.royale.events.KeyboardEvent,org.apache.royale.events.utils.NavigationKeys,org.apache.royale.events.utils.WhitespaceKeys,org.apache.royale.html.beads.IListView,org.apache.royale.html.util.getModelByType,org.apache.royale.jewel.supportClasses.textinput.ITextInput,org.apache.royale.utils.sendEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.Bead');
goog.require('org.apache.royale.core.IBeadKeyController');
goog.require('org.apache.royale.core.IRemovableBead');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @constructor
 * @extends {org.apache.royale.core.Bead}
 * @implements {org.apache.royale.core.IBeadKeyController}
 * @implements {org.apache.royale.core.IRemovableBead}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController = function() {
  org.apache.royale.jewel.beads.controllers.ListKeyDownController.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.controllers.ListKeyDownController, org.apache.royale.core.Bead);


/**
 * @protected
 * @type {org.apache.royale.core.ISelectionModel}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.listModel;


/**
 * @protected
 * @type {org.apache.royale.html.beads.IListView}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.listView;


/**
 *  The actions needed before the removal
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.8
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.tearDown = function() {
  org.apache.royale.utils.Language.as(this._strand, org.apache.royale.events.IEventDispatcher, true).removeEventListener(org.apache.royale.events.KeyboardEvent.KEY_DOWN, org.apache.royale.utils.Language.closure(this.keyDownEventHandler, this, 'keyDownEventHandler'));
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.royale.events.KeyboardEvent} event
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.keyDownEventHandler = function(event) {
  if (org.apache.royale.utils.Language.is(event.target, org.apache.royale.jewel.supportClasses.textinput.ITextInput))
    return;
  if (event.key === org.apache.royale.events.utils.WhitespaceKeys.TAB)
    return;
  event.preventDefault();
  var /** @type {number} */ index = this.listModel.selectedIndex;
  if (event.key === org.apache.royale.events.utils.NavigationKeys.UP || event.key === org.apache.royale.events.utils.NavigationKeys.LEFT) {
    if (index > 0)
      this.listModel.selectedIndex--;
  } else if (event.key === org.apache.royale.events.utils.NavigationKeys.DOWN || event.key === org.apache.royale.events.utils.NavigationKeys.RIGHT) {
    this.listModel.selectedIndex++;
  }
  if (index != this.listModel.selectedIndex) {
    this.listModel.selectedItem = this.listModel.dataProvider.getItemAt(this.listModel.selectedIndex);
    var /** @type {org.apache.royale.core.IFocusable} */ ir = org.apache.royale.utils.Language.as(this.listView.dataGroup.getItemRendererForIndex(this.listModel.selectedIndex), org.apache.royale.core.IFocusable);
    ir.setFocus();
    org.apache.royale.utils.sendEvent(this.listView.host, 'change');
  }
};


org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.set__strand = function(value) {
  this._strand = value;
  this.listModel = org.apache.royale.html.util.getModelByType(value, org.apache.royale.core.ISelectionModel);
  this.listView = org.apache.royale.utils.Language.as(value.getBeadByType(org.apache.royale.html.beads.IListView), org.apache.royale.html.beads.IListView);
  this.listenOnStrand(org.apache.royale.events.KeyboardEvent.KEY_DOWN, org.apache.royale.utils.Language.closure(this.keyDownEventHandler, this, 'keyDownEventHandler'));
};


Object.defineProperties(org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype, /** @lends {org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype} */ {
/**
 * @type {org.apache.royale.core.IStrand}
 */
strand: {
set: org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ListKeyDownController', qName: 'org.apache.royale.jewel.beads.controllers.ListKeyDownController', kind: 'class' }], interfaces: [org.apache.royale.core.IBeadKeyController, org.apache.royale.core.IRemovableBead] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strand': { type: 'org.apache.royale.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.royale.jewel.beads.controllers.ListKeyDownController'}
      };
    },
    methods: function () {
      return {
        'ListKeyDownController': { type: '', declaredBy: 'org.apache.royale.jewel.beads.controllers.ListKeyDownController'},
        'tearDown': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.controllers.ListKeyDownController'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.controllers.ListKeyDownController.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./ListKeyDownController.js.map
