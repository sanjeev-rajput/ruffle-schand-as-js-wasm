/**
 * Generated by Apache Royale Compiler from org/apache/royale/utils/OSUtils.as
 * org.apache.royale.utils.OSUtils
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.utils.OSUtils');
/* Royale Dependency List: */



/**
 * @constructor
 */
org.apache.royale.utils.OSUtils = function() {
};


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.MAC_OS = "MacOS";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.WIN_OS = "Windows";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.LINUX_OS = "Linux";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.UNIX_OS = "UNIX";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.ANDROID_OS = "Android";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.IOS_OS = "iOS";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.UNKNOWN_OS = "Unknown OS";


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.utils.OSUtils.UNKNOWN_VERSION = "Unknown OS Version";


/**
 * Gets the name of the operating system.
 * @nocollapse
 * @return {string}
 */
org.apache.royale.utils.OSUtils.getOS = function() {
  
  if (!org.apache.royale.utils.OSUtils._osName) {
    org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.UNKNOWN_OS;
    var /** @type {string} */ appVersion = navigator.appVersion;
    if (appVersion.indexOf("Win") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.WIN_OS;
    if (appVersion.indexOf("Macintosh") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.MAC_OS;
    if (appVersion.indexOf("X11") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.UNIX_OS;
    if (appVersion.indexOf("Linux") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.LINUX_OS;
    if (appVersion.indexOf("iPad") != -1 || appVersion.indexOf("iPhone") != -1 || appVersion.indexOf("iPod") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.IOS_OS;
    if (appVersion.indexOf("Android") != -1)
      org.apache.royale.utils.OSUtils._osName = org.apache.royale.utils.OSUtils.ANDROID_OS;
  }
  return org.apache.royale.utils.OSUtils._osName;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.utils.OSUtils._osName;


/**
 * Gets the version of the operating system.
 * @nocollapse
 * @return {string}
 */
org.apache.royale.utils.OSUtils.getOSVersion = function() {
  
  if (!org.apache.royale.utils.OSUtils._osVersion) {
    var /** @type {Array} */ tokenizer = navigator.userAgent.split(/\s*[;)(]\s*/);
    org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.OSUtils.UNKNOWN_VERSION;
    if (/^Android/.test(tokenizer[2])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[2].split("Android ").pop());
    } else if (/^Linux/.test(tokenizer[3])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[6].split("/").pop());
    } else if (/^Macintosh/.test(tokenizer[1])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[2].split("Mac OS X ").pop().replace(/_/g, '.'));
    } else if (/^iPhone/.test(tokenizer[1])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[2].split("CPU iPhone OS ").pop().replace(/_/g, '.').replace(' like Mac OS X', ''));
    } else if (/^iPad/.test(tokenizer[1])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[2].split("CPU OS ").pop().replace(/_/g, '.').replace(' like Mac OS X', ''));
    } else if (/^iPod/.test(tokenizer[1])) {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[2].split("CPU OS ").pop().replace(/_/g, '.').replace(' like Mac OS X', ''));
    } else {
      org.apache.royale.utils.OSUtils._osVersion = org.apache.royale.utils.Language.string(tokenizer[3].split(" ").pop());
    }
  }
  return org.apache.royale.utils.OSUtils._osVersion;
};


/**
 * @private
 * @type {string}
 */
org.apache.royale.utils.OSUtils._osVersion;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.utils.OSUtils.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'OSUtils', qName: 'org.apache.royale.utils.OSUtils', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.utils.OSUtils.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'OSUtils': { type: '', declaredBy: 'org.apache.royale.utils.OSUtils'},
        '|getOS': { type: 'String', declaredBy: 'org.apache.royale.utils.OSUtils'},
        '|getOSVersion': { type: 'String', declaredBy: 'org.apache.royale.utils.OSUtils'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.utils.OSUtils.prototype.ROYALE_COMPILE_FLAGS = 10;

//# sourceMappingURL=./OSUtils.js.map
