/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/StringTrimmer.as
 * org.apache.royale.utils.StringTrimmer
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.StringTrimmer');
/* Royale Dependency List: */



/**
 * @asprivate
 * @constructor
 */
org.apache.royale.utils.StringTrimmer = function() {
  throw new Error("StringTrimmer should not be instantiated.");
};


/**
 * @nocollapse
 * @param {string} str
 * @return {string}
 */
org.apache.royale.utils.StringTrimmer.trim = function(str) {
  if (str == null)
    return '';
  return str.trim();
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Array where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @nocollapse
 * @param {string} value
 * @param {string} delimiter
 * @return {Array}
 */
org.apache.royale.utils.StringTrimmer.splitAndTrim = function(value, delimiter) {
  if (value != "" && value != null) {
    var /** @type {Array} */ items = value.split(delimiter);
    var /** @type {number} */ len = (items.length) >> 0;
    for (var /** @type {number} */ i = 0; i < len; i++) {
      items[i] = org.apache.royale.utils.StringTrimmer.trim(org.apache.royale.utils.Language.string(items[i]));
    }
    return items;
  }
  return [];
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Updated String where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @nocollapse
 * @param {string} value
 * @param {string} delimiter
 * @return {string}
 */
org.apache.royale.utils.StringTrimmer.trimArrayElements = function(value, delimiter) {
  if (value != "" && value != null) {
    var /** @type {Array} */ items = org.apache.royale.utils.StringTrimmer.splitAndTrim(value, delimiter);
    if (items.length > 0) {
      value = items.join(delimiter);
    }
  }
  return value;
};


/**
 *  Returns <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *
 *  @asparam str The String that is is being queried. 
 *
 *  @asreturn <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @nocollapse
 * @param {string} character
 * @return {boolean}
 */
org.apache.royale.utils.StringTrimmer.isWhitespace = function(character) {
  switch (character) {
    case " ":
    
    case "\t":
    
    case "\r":
    
    case "\n":
    
    case "\f":
    
    case "\u00A0":
    
    case "\u2028":
    
    case "\u2029":
    
    case "\u3000":
      return true;
    default:
      return false;
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.StringTrimmer.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'StringTrimmer', qName: 'org.apache.royale.utils.StringTrimmer', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.StringTrimmer.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'StringTrimmer': { type: '', declaredBy: 'org.apache.royale.utils.StringTrimmer'},
        '|trim': { type: 'String', declaredBy: 'org.apache.royale.utils.StringTrimmer', parameters: function () { return [ 'String', false ]; }},
        '|splitAndTrim': { type: 'Array', declaredBy: 'org.apache.royale.utils.StringTrimmer', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|trimArrayElements': { type: 'String', declaredBy: 'org.apache.royale.utils.StringTrimmer', parameters: function () { return [ 'String', false ,'String', false ]; }},
        '|isWhitespace': { type: 'Boolean', declaredBy: 'org.apache.royale.utils.StringTrimmer', parameters: function () { return [ 'String', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.StringTrimmer.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./StringTrimmer.js.map
