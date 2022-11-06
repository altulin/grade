/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
/**
 * custom-select
 * A lightweight JS script for custom select creation.
 * Needs no dependencies.
 *
 * v0.0.1
 * (https://github.com/custom-select/custom-select)
 *
 * Copyright (c) 2016 Gionatan Lombardi & Marco Nucara
 * MIT License
 */


exports.default = customSelect;

__webpack_require__(6);

var defaultParams = {
  containerClass: 'custom-select-container',
  openerClass: 'custom-select-opener',
  panelClass: 'custom-select-panel',
  optionClass: 'custom-select-option',
  optgroupClass: 'custom-select-optgroup',
  isSelectedClass: 'is-selected',
  hasFocusClass: 'has-focus',
  isDisabledClass: 'is-disabled',
  isOpenClass: 'is-open'
};

function builder(el, builderParams) {
  var containerClass = 'customSelect';
  var isOpen = false;
  var uId = '';
  var select = el;
  var container = void 0;
  var opener = void 0;
  var focusedElement = void 0;
  var selectedElement = void 0;
  var panel = void 0;
  var currLabel = void 0;
  var resetSearchTimeout = void 0;
  var searchKey = ''; //
  // Inner Functions
  //
  // Sets the focused element with the neccessary classes substitutions

  function setFocusedElement(cstOption) {
    if (focusedElement) {
      focusedElement.classList.remove(builderParams.hasFocusClass);
    }

    if (typeof cstOption !== 'undefined') {
      focusedElement = cstOption;
      focusedElement.classList.add(builderParams.hasFocusClass); // Offset update: checks if the focused element is in the visible part of the panelClass
      // if not dispatches a custom event

      if (isOpen) {
        if (cstOption.offsetTop < cstOption.offsetParent.scrollTop || cstOption.offsetTop > cstOption.offsetParent.scrollTop + cstOption.offsetParent.clientHeight - cstOption.clientHeight) {
          cstOption.dispatchEvent(new CustomEvent('custom-select:focus-outside-panel', {
            bubbles: true
          }));
        }
      }
    } else {
      focusedElement = undefined;
    }
  } // Reassigns the focused and selected custom option
  // Updates the opener text
  // IMPORTANT: the setSelectedElement function doesn't change the select value!


  function setSelectedElement(cstOption) {
    if (selectedElement) {
      selectedElement.classList.remove(builderParams.isSelectedClass);
      selectedElement.removeAttribute('id');
      opener.removeAttribute('aria-activedescendant');
    }

    if (typeof cstOption !== 'undefined') {
      cstOption.classList.add(builderParams.isSelectedClass);
      cstOption.setAttribute('id', containerClass + '-' + uId + '-selectedOption');
      opener.setAttribute('aria-activedescendant', containerClass + '-' + uId + '-selectedOption');
      selectedElement = cstOption;
      opener.children[0].textContent = selectedElement.customSelectOriginalOption.text;
    } else {
      selectedElement = undefined;
      opener.children[0].textContent = '';
    }

    setFocusedElement(cstOption);
  }

  function setValue(value) {
    // Gets the option with the provided value
    var toSelect = select.querySelector('option[value=\'' + value + '\']'); // If no option has the provided value get the first

    if (!toSelect) {
      var _select$options = _slicedToArray(select.options, 1);

      toSelect = _select$options[0];
    } // The option with the provided value becomes the selected one
    // And changes the select current value


    toSelect.selected = true;
    setSelectedElement(select.options[select.selectedIndex].customSelectCstOption);
  }

  function moveFocuesedElement(direction) {
    // Get all the .custom-select-options
    // Get the index of the current focused one
    var currentFocusedIndex = [].indexOf.call(select.options, focusedElement.customSelectOriginalOption); // If the next or prev custom option exist
    // Sets it as the new focused one

    if (select.options[currentFocusedIndex + direction]) {
      setFocusedElement(select.options[currentFocusedIndex + direction].customSelectCstOption);
    }
  } // Open/Close function (toggle)


  function open(bool) {
    // Open
    if (bool || typeof bool === 'undefined') {
      // If present closes an opened instance of the plugin
      // Only one at time can be open
      var openedCustomSelect = document.querySelector('.' + containerClass + '.' + builderParams.isOpenClass);

      if (openedCustomSelect) {
        openedCustomSelect.customSelect.open = false;
      } // Opens only the clicked one


      container.classList.add(builderParams.isOpenClass); // aria-expanded update

      container.classList.add(builderParams.isOpenClass);
      opener.setAttribute('aria-expanded', 'true'); // Updates the scrollTop position of the panel in relation with the focused option

      if (selectedElement) {
        panel.scrollTop = selectedElement.offsetTop;
      } // Dispatches the custom event open


      container.dispatchEvent(new CustomEvent('custom-select:open')); // Sets the global state

      isOpen = true; // Close
    } else {
      // Removes the css classes
      container.classList.remove(builderParams.isOpenClass); // aria-expanded update

      opener.setAttribute('aria-expanded', 'false'); // Sets the global state

      isOpen = false; // When closing the panel the focused custom option must be the selected one

      setFocusedElement(selectedElement); // Dispatches the custom event close

      container.dispatchEvent(new CustomEvent('custom-select:close'));
    }

    return isOpen;
  }

  function clickEvent(e) {
    // Opener click
    if (e.target === opener || opener.contains(e.target)) {
      if (isOpen) {
        open(false);
      } else {
        open();
      } // Custom Option click

    } else if (e.target.classList && e.target.classList.contains(builderParams.optionClass) && panel.contains(e.target)) {
      setSelectedElement(e.target); // Sets the corrisponding select's option to selected updating the select's value too

      selectedElement.customSelectOriginalOption.selected = true;
      open(false); // Triggers the native change event of the select

      select.dispatchEvent(new CustomEvent('change')); // click on label or select (click on label corrispond to select click)
    } else if (e.target === select) {
      // if the original select is focusable (for any external reason) let the focus
      // else trigger the focus on opener
      if (opener !== document.activeElement && select !== document.activeElement) {
        opener.focus();
      } // Click outside the container closes the panel

    } else if (isOpen && !container.contains(e.target)) {
      open(false);
    }
  }

  function mouseoverEvent(e) {
    // On mouse move over and options it bacames the focused one
    if (e.target.classList && e.target.classList.contains(builderParams.optionClass)) {
      setFocusedElement(e.target);
    }
  }

  function keydownEvent(e) {
    if (!isOpen) {
      // On "Arrow down", "Arrow up" and "Space" keys opens the panel
      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 32) {
        open();
      }
    } else {
      switch (e.keyCode) {
        case 13:
        case 32:
          // On "Enter" or "Space" selects the focused element as the selected one
          setSelectedElement(focusedElement); // Sets the corrisponding select's option to selected updating the select's value too

          selectedElement.customSelectOriginalOption.selected = true; // Triggers the native change event of the select

          select.dispatchEvent(new CustomEvent('change'));
          open(false);
          break;

        case 27:
          // On "Escape" closes the panel
          open(false);
          break;

        case 38:
          // On "Arrow up" set focus to the prev option if present
          moveFocuesedElement(-1);
          break;

        case 40:
          // On "Arrow down" set focus to the next option if present
          moveFocuesedElement(+1);
          break;

        default:
          // search in panel (autocomplete)
          if (e.keyCode >= 48 && e.keyCode <= 90) {
            // clear existing reset timeout
            if (resetSearchTimeout) {
              clearTimeout(resetSearchTimeout);
            } // reset timeout for empty search key


            resetSearchTimeout = setTimeout(function () {
              searchKey = '';
            }, 1500); // update search keyword appending the current key

            searchKey += String.fromCharCode(e.keyCode); // search the element

            for (var i = 0, l = select.options.length; i < l; i++) {
              // removed cause not supported by IE:
              // if (options[i].text.startsWith(searchKey))
              if (select.options[i].text.toUpperCase().substr(0, searchKey.length) === searchKey) {
                setFocusedElement(select.options[i].customSelectCstOption);
                break;
              }
            }
          }

          break;
      }
    }
  }

  function changeEvent() {
    var index = select.selectedIndex;
    var element = index === -1 ? undefined : select.options[index].customSelectCstOption;
    setSelectedElement(element);
  } // When the option is outside the visible part of the opened panel, updates the scrollTop position
  // This is the default behaviour
  // To block it the plugin user must
  // add a "custom-select:focus-outside-panel" eventListener on the panel
  // with useCapture set to true
  // and stopPropagation


  function scrollToFocused(e) {
    var currPanel = e.currentTarget;
    var currOption = e.target; // Up

    if (currOption.offsetTop < currPanel.scrollTop) {
      currPanel.scrollTop = currOption.offsetTop; // Down
    } else {
      currPanel.scrollTop = currOption.offsetTop + currOption.clientHeight - currPanel.clientHeight;
    }
  }

  function addEvents() {
    document.addEventListener('click', clickEvent);
    panel.addEventListener('mouseover', mouseoverEvent);
    panel.addEventListener('custom-select:focus-outside-panel', scrollToFocused);
    select.addEventListener('change', changeEvent);
    container.addEventListener('keydown', keydownEvent);
  }

  function removeEvents() {
    document.removeEventListener('click', clickEvent);
    panel.removeEventListener('mouseover', mouseoverEvent);
    panel.removeEventListener('custom-select:focus-outside-panel', scrollToFocused);
    select.removeEventListener('change', changeEvent);
    container.removeEventListener('keydown', keydownEvent);
  }

  function disabled(bool) {
    if (bool && !select.disabled) {
      container.classList.add(builderParams.isDisabledClass);
      select.disabled = true;
      opener.removeAttribute('tabindex');
      container.dispatchEvent(new CustomEvent('custom-select:disabled'));
      removeEvents();
    } else if (!bool && select.disabled) {
      container.classList.remove(builderParams.isDisabledClass);
      select.disabled = false;
      opener.setAttribute('tabindex', '0');
      container.dispatchEvent(new CustomEvent('custom-select:enabled'));
      addEvents();
    }
  } // Form a given select children DOM tree (options and optgroup),
  // Creates the corresponding custom HTMLElements list (divs with different classes and attributes)


  function parseMarkup(children) {
    var nodeList = children;
    var cstList = [];

    if (typeof nodeList.length === 'undefined') {
      throw new TypeError('Invalid Argument');
    }

    for (var i = 0, li = nodeList.length; i < li; i++) {
      if (nodeList[i] instanceof HTMLElement && nodeList[i].tagName.toUpperCase() === 'OPTGROUP') {
        var cstOptgroup = document.createElement('div');
        cstOptgroup.classList.add(builderParams.optgroupClass);
        cstOptgroup.setAttribute('data-label', nodeList[i].label); // IMPORTANT: Stores in a property of the created custom option group
        // a hook to the the corrisponding select's option group

        cstOptgroup.customSelectOriginalOptgroup = nodeList[i]; // IMPORTANT: Stores in a property of select's option group
        // a hook to the created custom option group

        nodeList[i].customSelectCstOptgroup = cstOptgroup;
        var subNodes = parseMarkup(nodeList[i].children);

        for (var j = 0, lj = subNodes.length; j < lj; j++) {
          cstOptgroup.appendChild(subNodes[j]);
        }

        cstList.push(cstOptgroup);
      } else if (nodeList[i] instanceof HTMLElement && nodeList[i].tagName.toUpperCase() === 'OPTION') {
        var cstOption = document.createElement('div');
        cstOption.classList.add(builderParams.optionClass);
        cstOption.textContent = nodeList[i].text;
        cstOption.setAttribute('data-value', nodeList[i].value);
        cstOption.setAttribute('role', 'option'); // IMPORTANT: Stores in a property of the created custom option
        // a hook to the the corrisponding select's option

        cstOption.customSelectOriginalOption = nodeList[i]; // IMPORTANT: Stores in a property of select's option
        // a hook to the created custom option

        nodeList[i].customSelectCstOption = cstOption; // If the select's option is selected

        if (nodeList[i].selected) {
          setSelectedElement(cstOption);
        }

        cstList.push(cstOption);
      } else {
        throw new TypeError('Invalid Argument');
      }
    }

    return cstList;
  }

  function _append(nodePar, appendIntoOriginal, targetPar) {
    var target = void 0;

    if (typeof targetPar === 'undefined' || targetPar === select) {
      target = panel;
    } else if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTGROUP' && select.contains(targetPar)) {
      target = targetPar.customSelectCstOptgroup;
    } else {
      throw new TypeError('Invalid Argument');
    } // If the node provided is a single HTMLElement it is stored in an array


    var node = nodePar instanceof HTMLElement ? [nodePar] : nodePar; // Injects the options|optgroup in the select

    if (appendIntoOriginal) {
      for (var i = 0, l = node.length; i < l; i++) {
        if (target === panel) {
          select.appendChild(node[i]);
        } else {
          target.customSelectOriginalOptgroup.appendChild(node[i]);
        }
      }
    } // The custom markup to append


    var markupToInsert = parseMarkup(node); // Injects the created DOM content in the panel

    for (var _i = 0, _l = markupToInsert.length; _i < _l; _i++) {
      target.appendChild(markupToInsert[_i]);
    }

    return node;
  }

  function _insertBefore(node, targetPar) {
    var target = void 0;

    if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTION' && select.contains(targetPar)) {
      target = targetPar.customSelectCstOption;
    } else if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTGROUP' && select.contains(targetPar)) {
      target = targetPar.customSelectCstOptgroup;
    } else {
      throw new TypeError('Invalid Argument');
    } // The custom markup to append


    var markupToInsert = parseMarkup(node.length ? node : [node]);
    target.parentNode.insertBefore(markupToInsert[0], target); // Injects the option or optgroup node in the original select and returns the injected node

    return targetPar.parentNode.insertBefore(node.length ? node[0] : node, targetPar);
  }

  function remove(node) {
    var cstNode = void 0;

    if (node instanceof HTMLElement && node.tagName.toUpperCase() === 'OPTION' && select.contains(node)) {
      cstNode = node.customSelectCstOption;
    } else if (node instanceof HTMLElement && node.tagName.toUpperCase() === 'OPTGROUP' && select.contains(node)) {
      cstNode = node.customSelectCstOptgroup;
    } else {
      throw new TypeError('Invalid Argument');
    }

    cstNode.parentNode.removeChild(cstNode);
    var removedNode = node.parentNode.removeChild(node);
    changeEvent();
    return removedNode;
  }

  function empty() {
    var removed = [];

    while (select.children.length) {
      panel.removeChild(panel.children[0]);
      removed.push(select.removeChild(select.children[0]));
    }

    setSelectedElement();
    return removed;
  }

  function destroy() {
    for (var i = 0, l = select.options.length; i < l; i++) {
      delete select.options[i].customSelectCstOption;
    }

    var optGroup = select.getElementsByTagName('optgroup');

    for (var _i2 = 0, _l2 = optGroup.length; _i2 < _l2; _i2++) {
      delete optGroup.customSelectCstOptgroup;
    }

    removeEvents();
    return container.parentNode.replaceChild(select, container);
  } //
  // Custom Select DOM tree creation
  //
  // Creates the container/wrapper


  container = document.createElement('div');
  container.classList.add(builderParams.containerClass, containerClass); // Creates the opener

  opener = document.createElement('span');
  opener.className = builderParams.openerClass;
  opener.setAttribute('role', 'combobox');
  opener.setAttribute('aria-autocomplete', 'list');
  opener.setAttribute('aria-expanded', 'false');
  opener.innerHTML = '<span>\n   ' + (select.selectedIndex !== -1 ? select.options[select.selectedIndex].text : '') + '\n   </span>'; // Creates the panel
  // and injects the markup of the select inside
  // with some tag and attributes replacement

  panel = document.createElement('div'); // Create random id

  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++) {
    uId += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  panel.id = containerClass + '-' + uId + '-panel';
  panel.className = builderParams.panelClass;
  panel.setAttribute('role', 'listbox');
  opener.setAttribute('aria-owns', panel.id);

  _append(select.children, false); // Injects the container in the original DOM position of the select


  container.appendChild(opener);
  select.parentNode.replaceChild(container, select);
  container.appendChild(select);
  container.appendChild(panel); // ARIA labelledby - label

  if (document.querySelector('label[for="' + select.id + '"]')) {
    currLabel = document.querySelector('label[for="' + select.id + '"]');
  } else if (container.parentNode.tagName.toUpperCase() === 'LABEL') {
    currLabel = container.parentNode;
  }

  if (typeof currLabel !== 'undefined') {
    currLabel.setAttribute('id', containerClass + '-' + uId + '-label');
    opener.setAttribute('aria-labelledby', containerClass + '-' + uId + '-label');
  } // Event Init


  if (select.disabled) {
    container.classList.add(builderParams.isDisabledClass);
  } else {
    opener.setAttribute('tabindex', '0');
    select.setAttribute('tabindex', '-1');
    addEvents();
  } // Stores the plugin public exposed methods and properties, directly in the container HTMLElement


  container.customSelect = {
    get pluginOptions() {
      return builderParams;
    },

    get open() {
      return isOpen;
    },

    set open(bool) {
      open(bool);
    },

    get disabled() {
      return select.disabled;
    },

    set disabled(bool) {
      disabled(bool);
    },

    get value() {
      return select.value;
    },

    set value(val) {
      setValue(val);
    },

    append: function append(node, target) {
      return _append(node, true, target);
    },
    insertBefore: function insertBefore(node, target) {
      return _insertBefore(node, target);
    },
    remove: remove,
    empty: empty,
    destroy: destroy,
    opener: opener,
    select: select,
    panel: panel,
    container: container
  }; // Stores the plugin directly in the original select

  select.customSelect = container.customSelect; // Returns the plugin instance, with the public exposed methods and properties

  return container.customSelect;
}

function customSelect(element, customParams) {
  // Overrides the default options with the ones provided by the user
  var nodeList = [];
  var selects = [];
  return function init() {
    // The plugin is called on a single HTMLElement
    if (element && element instanceof HTMLElement && element.tagName.toUpperCase() === 'SELECT') {
      nodeList.push(element); // The plugin is called on a selector
    } else if (element && typeof element === 'string') {
      var elementsList = document.querySelectorAll(element);

      for (var i = 0, l = elementsList.length; i < l; ++i) {
        if (elementsList[i] instanceof HTMLElement && elementsList[i].tagName.toUpperCase() === 'SELECT') {
          nodeList.push(elementsList[i]);
        }
      } // The plugin is called on any HTMLElements list (NodeList, HTMLCollection, Array, etc.)

    } else if (element && element.length) {
      for (var _i3 = 0, _l3 = element.length; _i3 < _l3; ++_i3) {
        if (element[_i3] instanceof HTMLElement && element[_i3].tagName.toUpperCase() === 'SELECT') {
          nodeList.push(element[_i3]);
        }
      }
    } // Launches the plugin over every HTMLElement
    // And stores every plugin instance


    for (var _i4 = 0, _l4 = nodeList.length; _i4 < _l4; ++_i4) {
      selects.push(builder(nodeList[_i4], _extends({}, defaultParams, customParams)));
    } // Returns all plugin instances


    return selects;
  }();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Sticky = __webpack_require__(3);

module.exports = Sticky;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * HC Off-canvas Nav
 * ===================
 * Version: 6.1.5
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia/
 * Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
 * Description: JavaScript library for creating off-canvas multi-level navigations
 * License: MIT
 */


!function (e, t) {
  if ( true && "object" == typeof module.exports) {
    if (!e.document) throw new Error("HC Off-canvas Nav requires a browser to run.");
    module.exports = t(e);
  } else  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t(e)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof window ? window : this, function (re) {
  function i(e, t) {
    if (t = t || {}, !(e = "string" == typeof e ? "#" === e.charAt(0) && -1 === e.indexOf(" ") ? ie.querySelector(e) : ie.querySelectorAll(e) : e)) return !1;
    var ee = i.Helpers;
    void 0 !== t.maxWidth && (ee.deprecated("maxWidth", "disableAt", "option"), t.disableAt = t.maxWidth);
    var te = Object.assign({}, {
      width: 280,
      height: "auto",
      disableAt: !1,
      pushContent: null,
      swipeGestures: !0,
      expanded: !1,
      position: "left",
      levelOpen: "overlap",
      levelSpacing: 40,
      levelTitles: !0,
      closeOpenLevels: !0,
      closeActiveLevel: !1,
      navTitle: null,
      navClass: "",
      disableBody: !0,
      closeOnClick: !0,
      closeOnEsc: !0,
      customToggle: null,
      activeToggleClass: null,
      bodyInsert: "prepend",
      keepClasses: !0,
      removeOriginalNav: !1,
      rtl: !1,
      insertClose: !0,
      insertBack: !0,
      levelTitleAsBack: !0,
      labelClose: "",
      labelBack: "Back"
    }, t);

    function ne(e) {
      if (ae.length) {
        for (var t = !1, n = (e = "string" == typeof e ? [e] : e).length, a = 0; a < n; a++) -1 !== ae.indexOf(e[a]) && (t = !0);

        return t;
      }
    }

    function n(e) {
      if (e.querySelector("ul") || "UL" === e.tagName) {
        var b = "hc-nav-" + ++oe,
            s = ee.printStyle("hc-offcanvas-" + oe + "-style"),
            o = "keydown.hcOffcanvasNav",
            v = te.activeToggleClass || "toggle-open",
            u = ee.createElement("nav", {
          id: b
        }),
            d = ee.createElement("div", {
          class: "nav-container"
        });
        u.addEventListener("click", ee.stopPropagation), u.appendChild(d);
        var n,
            p,
            a,
            f = null,
            h = null,
            m = null,
            t = {},
            g = !1,
            y = !1,
            E = null,
            L = 0,
            A = 0,
            x = 0,
            C = null,
            O = {},
            k = [],
            N = !1,
            T = [],
            r = null,
            i = null,
            l = !1,
            c = !1;
        te.customToggle ? f = ee.getElements(te.customToggle) : (f = [ee.createElement("a", {
          href: "#"
        }, ee.createElement("span"))], e.insertAdjacentElement("afterend", f[0])), f && f.length && f.forEach(function (e) {
          e.addEventListener("click", J(e)), e.classList.add("hc-nav-trigger", b), e.setAttribute("role", "button"), e.setAttribute("aria-label", (te.ariaLabels || {}).open), e.setAttribute("aria-controls", b), e.setAttribute("aria-expanded", !1), e.addEventListener("keydown", function (e) {
            "Enter" !== e.key && 13 !== e.keyCode || setTimeout(function () {
              w(0, 0);
            }, 0);
          });
        });

        var w = function (e, t, n) {
          var a, r, i, s;
          "number" != typeof t || "number" != typeof e && !T.length || (a = Array.prototype.filter.call(d.querySelectorAll(".nav-wrapper"), function (e) {
            return e.getAttribute("data-level") == t && ("number" != typeof n || "number" == typeof n && e.getAttribute("data-index") == n);
          })[0], a = ee.children(a, ".nav-content")[0], r = ee.children(a, ".nav-close, .nav-back"), a = ee.children(a, "ul"), a = ee.children(a, "li"), a = ee.children(a, ":not(.nav-wrapper)"), a = [].concat(r, a), a = Array.prototype.map.call(a, function (e) {
            return Array.prototype.slice.call(e.querySelectorAll('[tabindex="0"], a[role="menuitem"], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'));
          }).flat(), (a = Array.prototype.filter.call(a, function (e) {
            return "-1" !== e.getAttribute("tabindex");
          })) && (u.classList.add("user-is-tabbing"), i = a[0], s = a[a.length - 1], "number" == typeof e ? a[e].focus() : (T[T.length - 1].focus(), T.pop()), ie.removeEventListener(o), ie.addEventListener(o, function (e) {
            "Tab" !== e.key && 9 !== e.keyCode || (e.shiftKey ? ie.activeElement === i && (e.preventDefault(), s.focus()) : ie.activeElement === s && (e.preventDefault(), i.focus()));
          })));
        },
            S = function () {
          ie.removeEventListener(o), h && setTimeout(function () {
            h.focus();
          }, p);
        },
            M = function () {
          d.style.transition = "none", u.style.display = "block";
          var e = ee.formatSizeVal(A = d.offsetWidth),
              t = ee.formatSizeVal(x = d.offsetHeight);
          s.add(".hc-offcanvas-nav." + b + ".nav-position-left .nav-container", "transform: translate3d(-" + e + ", 0, 0)"), s.add(".hc-offcanvas-nav." + b + ".nav-position-right .nav-container", "transform: translate3d(" + e + ", 0, 0)"), s.add(".hc-offcanvas-nav." + b + ".nav-position-top .nav-container", "transform: translate3d(0, -" + t + ", 0)"), s.add(".hc-offcanvas-nav." + b + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + t + ", 0)"), s.insert(), u.style.display = "", d.style.transition = "", n = re.getComputedStyle(d).transitionProperty, p = ee.toMs(re.getComputedStyle(d).transitionDuration), a = re.getComputedStyle(d).transitionTimingFunction, te.pushContent && m && n && s.add(ee.getElementCssTag(m), "transition: " + n + " " + p + "ms " + a), s.insert();
        },
            j = function (e) {
          var t = !!f && re.getComputedStyle(f[0]).display,
              n = !!te.disableAt && "max-width: " + (te.disableAt - 1) + "px",
              a = ee.formatSizeVal(te.width),
              r = ee.formatSizeVal(te.height),
              i = ee.formatSizeVal(te.levelSpacing);
          !ee.isNumeric(a) && -1 === a.indexOf("px") || (A = parseInt(a)), !ee.isNumeric(r) && -1 === r.indexOf("px") || (x = parseInt(r)), ne(["disableAt", "position"]) && s.reset(), s.add(".hc-offcanvas-nav." + b, "display: block", n), s.add(".hc-nav-original." + b, "display: none", n), t && s.add(".hc-nav-trigger." + b, "display: " + (t && "none" !== t ? t : "block"), n), -1 !== ["left", "right"].indexOf(te.position) ? s.add(".hc-offcanvas-nav." + b + " .nav-container", "width: " + a) : s.add(".hc-offcanvas-nav." + b + " .nav-container", "height: " + r), s.add(".hc-offcanvas-nav." + b + ".nav-position-left .nav-container", "transform: translate3d(-" + a + ", 0, 0);"), s.add(".hc-offcanvas-nav." + b + ".nav-position-right .nav-container", "transform: translate3d(" + a + ", 0, 0);"), s.add(".hc-offcanvas-nav." + b + ".nav-position-top .nav-container", "transform: translate3d(0, -" + r + ", 0);"), s.add(".hc-offcanvas-nav." + b + ".nav-position-bottom .nav-container", "transform: translate3d(0, " + r + ", 0);"), s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper", "transform: translate3d(-" + i + ", 0, 0)", n), s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper", "transform: translate3d(" + i + ", 0, 0)", n), s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper", "transform: translate3d(0, -" + i + ", 0)", n), s.add(".hc-offcanvas-nav." + b + ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper", "transform: translate3d(0, " + i + ", 0)", n), s.insert(), e && !ne("pushContent") || (m = te.pushContent ? ee.getElements(te.pushContent)[0] : null), d.style.transition = "none";
          n = u.classList.contains(le), n = ["hc-offcanvas-nav", te.navClass || "", b, "nav-levels-" + (te.levelOpen || "none"), "nav-position-" + te.position, te.disableBody ? "disable-body" : "", ee.isIos ? "is-ios" : "", ee.isTouchDevice ? "touch-device" : "", n ? le : "", te.rtl ? "rtl" : "", !0 !== te.insertClose || te.labelClose ? "" : "nav-close-button-empty"].join(" ").trim().replace(/  +/g, " ");
          u.removeEventListener("click"), u.className = n, u.setAttribute("aria-hidden", !0), ie.documentElement.style.setProperty("--nav-level-spacing", te.levelSpacing + "px"), te.disableBody && u.addEventListener("click", $), e ? M() : setTimeout(M, 0);
        },
            P = function () {
          t = function l(e, t) {
            var n = [];
            Array.prototype.forEach.call(e, function (e) {
              var o;
              ("UL" === e.tagName || e instanceof HTMLHeadingElement) && (o = {
                tagName: e.tagName,
                id: t,
                htmlClass: e.getAttribute("class") || null,
                items: []
              }, e instanceof HTMLHeadingElement ? o.content = ee.clone(e, !1, !0) : (null !== e.getAttribute("data-nav-active") && (E = t, e.removeAttribute("data-nav-active")), Array.prototype.forEach.call(e.children, function (e) {
                var t = null !== e.getAttribute("data-nav-custom-content"),
                    n = t ? e.childNodes : Array.prototype.filter.call(e.children, function (e) {
                  return "UL" !== e.tagName && !e.querySelector("ul");
                }).concat(e.children.length ? [] : [e.firstChild]),
                    a = t ? [] : Array.prototype.slice.call(e.querySelectorAll("ul")),
                    r = a.length ? [].concat(Array.prototype.filter.call(a[0].parentNode.children, function (e) {
                  return "UL" === e.tagName || e instanceof HTMLHeadingElement;
                })) : [],
                    a = null;

                if (!n.length) {
                  for (var i = "", s = 0; s < e.childNodes.length; s++) e.childNodes[s].nodeType === Node.TEXT_NODE && (i += e.childNodes[s].textContent.trim());

                  n = [ie.createTextNode(i)];
                }

                r.length && (ee.data(e, "hc-uniqid") ? a = ee.data(e, "hc-uniqid") : (a = Math.random().toString(36).substr(2), ee.data(e, "hc-uniqid", a))), null !== e.getAttribute("data-nav-active") && (E = a, e.removeAttribute("data-nav-active")), o.items.push({
                  id: a,
                  htmlClass: e.getAttribute("class") || "",
                  content: n,
                  custom: t,
                  subnav: r.length ? l(r, a) : [],
                  highlight: null !== e.getAttribute("data-nav-highlight")
                });
              })), n.push(o));
            });
            return n;
          }("UL" === e.tagName ? [e] : Array.prototype.filter.call(e.children, function (e) {
            return "UL" === e.tagName || e instanceof HTMLHeadingElement;
          }), null);
        },
            _ = function (e) {
          if (e) {
            for (; d.firstChild;) d.removeChild(d.firstChild);

            O = {};
          }

          !function p(n, e, f, h, t, a) {
            var m = ee.createElement("div", {
              class: "nav-wrapper nav-wrapper-" + f,
              "data-level": f,
              "data-index": t || 0
            });
            var r = ee.createElement("div", {
              class: "nav-content"
            });
            m.addEventListener("click", ee.stopPropagation);
            m.appendChild(r);
            e.appendChild(m);
            h && (0 === f || 0 < f && "overlap" === te.levelOpen) && (e = "string" == typeof h ? h : ee.clone(re.jQuery && h instanceof re.jQuery && h.length ? h[0] : h, !0, !0), r.insertBefore(ee.createElement("h2", {
              id: 0 === f ? b + "-nav-title" : null,
              class: 0 === f ? "nav-title" : "level-title"
            }, e), r.firstChild), 0 === f && "string" == typeof h && u.setAttribute("aria-labelledby", b + "-nav-title"));
            var i = -1;
            n.forEach(function (e, t) {
              var d;
              "UL" === e.tagName ? (i++, d = ee.createElement("ul", {
                id: e.id ? 1 < n.length ? "menu-" + e.id + "-" + i : "menu-" + e.id : null,
                role: "menu",
                "aria-level": f + 1
              }), r.appendChild(d), te.keepClasses && e.htmlClass && d.classList.add.apply(d.classList, e.htmlClass.split(" ")), e.items.forEach(function (t, e) {
                var n = t.content;

                if (t.custom) {
                  var a = ee.createElement("li", {
                    class: "nav-item nav-item-custom"
                  }, ee.createElement("div", {
                    class: "nav-custom-content"
                  }, Array.prototype.map.call(n, function (e) {
                    return ee.clone(e, !0, !0);
                  })));
                  return te.keepClasses && t.htmlClass && a.classList.add.apply(a.classList, t.htmlClass.split(" ")), void d.appendChild(a);
                }

                var r,
                    i = Array.prototype.filter.call(n, function (e) {
                  return "A" === e.tagName || e.nodeType !== Node.TEXT_NODE && e.querySelector("a");
                })[0];
                i ? (r = ee.clone(i, !1, !0)).classList.add("nav-item-link") : r = ee.createElement(t.subnav.length ? "a" : "span", {
                  class: "nav-item-link"
                }, Array.prototype.map.call(n, function (e) {
                  return ee.clone(e, !0, !0);
                })), "A" === r.tagName && (r.setAttribute("tabindex", "0"), r.setAttribute("role", "menuitem"), r.getAttribute("href") || r.setAttribute("href", "#")), i && r.addEventListener("click", function (e) {
                  e.stopPropagation(), ee.hasListener(i, "click") && i.click();
                }), "#" === r.getAttribute("href") && r.addEventListener("click", ee.preventDefault), te.closeOnClick && (W() ? "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || t.subnav.length && (!r.getAttribute("href") || "#" === r.getAttribute("href").charAt(0)) || r.addEventListener("click", $) : "A" !== r.tagName || "false" === r.dataset.navClose || null !== r.getAttribute("disabled") && "false" !== r.getAttribute("disabled") || r.addEventListener("click", $));
                var s,
                    o,
                    l,
                    c,
                    v,
                    u = ee.createElement("li", {
                  class: "nav-item"
                });
                u.appendChild(r), d.appendChild(u), te.keepClasses && t.htmlClass && u.classList.add.apply(u.classList, t.htmlClass.split(" ")), t.highlight && u.classList.add("nav-highlight"), ee.wrap(r, ee.createElement("div", {
                  class: "nav-item-wrapper"
                })), t.subnav.length && (s = f + 1, o = t.id, l = "", O[s] || (O[s] = 0), u.classList.add("nav-parent"), W() ? (c = O[s], (v = ee.createElement("input", {
                  type: "checkbox",
                  id: b + "-" + s + "-" + c,
                  class: "hc-chk",
                  tabindex: -1,
                  "data-level": s,
                  "data-index": c,
                  value: o
                })).addEventListener("click", ee.stopPropagation), v.addEventListener("change", Q), u.insertBefore(v, u.firstChild), a = function (e) {
                  e.addEventListener("click", function (e) {
                    e.stopPropagation(), v.setAttribute("checked", "true" !== v.getAttribute("checked")), "createEvent" in ie && ((e = ie.createEvent("HTMLEvents")).initEvent("change", !1, !0), v.dispatchEvent(e));
                  }), e.addEventListener("keydown", function (e) {
                    "Enter" !== e.key && 13 !== e.keyCode || (N = !0, T.push(this));
                  }), e.setAttribute("aria-controls", 1 < t.subnav.length ? t.subnav.filter(function (e) {
                    return "UL" === e.tagName;
                  }).map(function (e, t) {
                    return "menu-" + e.id + "-" + t;
                  }).join(" ") : "menu-" + o), e.setAttribute("aria-haspopup", "overlap" === te.levelOpen), e.setAttribute("aria-expanded", !1);
                }, -1 !== k.indexOf(o) && (m.classList.add("sub-level-open"), m.addEventListener("click", function () {
                  return Z(s, c);
                }), u.classList.add("level-open"), v.setAttribute("checked", !0)), l = !0 === te.levelTitles ? n[0].textContent.trim() : "", r.getAttribute("href") && "#" !== r.getAttribute("href") ? ((n = ee.createElement("a", {
                  href: "#",
                  class: "nav-next",
                  "aria-label": (te.ariaLabels || {}).submenu + ": " + l,
                  role: "menuitem",
                  tabindex: 0
                }, ee.createElement("span"))).addEventListener("click", ee.preventClick()), a(n), te.rtl ? r.parentNode.appendChild(n) : r.parentNode.insertBefore(n, r.nextSibling)) : (r.appendChild(ee.createElement("span", {
                  class: "nav-next"
                }, ee.createElement("span"))), a(r))) : r.setAttribute("aria-expanded", !0), O[s]++, p(t.subnav, u, s, l, O[s] - 1, "string" == typeof h ? h : ""));
              })) : r.appendChild(e.content);
            });
            f && void 0 !== t && !1 !== te.insertBack && "overlap" === te.levelOpen && (s = ee.children(r, "ul"), a = te.levelTitleAsBack && a || te.labelBack || "", l = ee.createElement("a", {
              href: "#",
              class: "nav-back-button",
              role: "menuitem",
              tabindex: 0
            }, [a, ee.createElement("span")]), !0 === te.insertBack || 0 === te.insertBack ? (a = ee.createElement("div", {
              class: "nav-back"
            }, l), r.insertBefore(a, ee.children(r, ":not(.level-title)")[0])) : (o = ee.createElement("li", {
              class: "nav-item nav-back"
            }, l), ee.insertAt(o, !0 === te.insertBack ? 0 : te.insertBack, s)), o = function () {
              return Z(f, t);
            }, ee.wrap(l, ee.createElement("div", {
              class: "nav-item-wrapper"
            })), l.addEventListener("click", ee.preventClick(o)), l.addEventListener("keydown", function (e) {
              "Enter" !== e.key && 13 !== e.keyCode || (N = !0);
            }));
            {
              var s, o, l;
              0 === f && !1 !== te.insertClose && ((s = ee.createElement("a", {
                href: "#",
                class: "nav-close-button" + (te.labelClose ? " has-label" : ""),
                role: "menuitem",
                tabindex: 0,
                "aria-label": te.labelClose ? "" : (te.ariaLabels || {}).close
              }, [te.labelClose || "", ee.createElement("span")])).addEventListener("click", ee.preventClick($)), s.addEventListener("keydown", function (e) {
                "Enter" !== e.key && 13 !== e.keyCode || S();
              }), h && !0 === te.insertClose ? r.insertBefore(ee.createElement("div", {
                class: "nav-close"
              }, s), r.children[1]) : !0 === te.insertClose ? r.insertBefore(ee.createElement("div", {
                class: "nav-close"
              }, s), r.firstChild) : (o = ee.children(r, "ul"), l = ee.createElement("li", {
                class: "nav-item nav-close"
              }, s), ee.wrap(s, ee.createElement("div", {
                class: "nav-item-wrapper"
              })), ee.insertAt(l, te.insertClose, o)));
            }
          }(t, d, 0, te.navTitle);
        },
            B = function (t) {
          return function (e) {
            "left" !== te.position && "right" !== te.position || (r = e.touches[0].clientX, i = e.touches[0].clientY, "doc" === t ? c || (ie.addEventListener("touchmove", D, ee.supportsPassive), ie.addEventListener("touchend", U, ee.supportsPassive)) : (c = !0, d.addEventListener("touchmove", z, ee.supportsPassive), d.addEventListener("touchend", I, ee.supportsPassive)));
          };
        },
            q = function (e, t) {
          re.addEventListener("touchmove", ee.preventDefault, ee.supportsPassive), u.style.visibility = "visible", d.style[ee.browserPrefix("transition")] = "none", ee.setTransform(d, e, te.position), m && (m.style[ee.browserPrefix("transition")] = "none", ee.setTransform(m, t, te.position));
        },
            H = function (e, t, n, a) {
          void 0 === t && (t = !0), void 0 === n && (n = !1), void 0 === a && (a = !1), re.removeEventListener("touchmove", ee.preventDefault, ee.supportsPassive), d.style[ee.browserPrefix("transition")] = "", ee.setTransform(d, n, te.position), m && (m.style[ee.browserPrefix("transition")] = "", ee.setTransform(m, a, te.position)), "open" === e ? K() : ($(), t ? setTimeout(function () {
            u.style.visibility = "";
          }, p) : u.style.visibility = "");
        },
            D = function (e) {
          var t = 0 - (r - e.touches[0].clientX),
              e = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0,
              e = A + e,
              t = "left" === te.position ? Math.min(Math.max(t, 0), e) : Math.abs(Math.min(Math.max(t, -e), 0));
          ("left" === te.position && r < 50 || "right" === te.position && r > ie.body.clientWidth - 50) && (l = !0, q(0 - (A - t), Math.abs(t)));
        },
            U = function e(t) {
          var n;
          ie.removeEventListener("touchmove", D), ie.removeEventListener("touchend", e), l && (n = t.changedTouches[t.changedTouches.length - 1], t = 0 - (r - n.clientX), n = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0, n = A + n, (t = "left" === te.position ? Math.min(Math.max(t, 0), n) : Math.abs(Math.min(Math.max(t, -n), 0))) ? H(70 < t ? "open" : "close") : H("close", !1), i = r = null, l = !1);
        },
            z = function (e) {
          var t = 0 - (r - e.touches[0].clientX),
              n = 0 - (i - e.touches[0].clientY);
          Math.abs(t) < Math.abs(n) || (e = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0, n = A + e, t = "left" === te.position ? Math.min(Math.max(t, -n), 0) : Math.min(Math.max(t, 0), n), ("left" === te.position && t < 0 || "right" === te.position && 0 < t) && (l = !0, q(-Math.abs(t) + e, n - Math.abs(t))));
        },
            I = function e(t) {
          var n, a;
          d.removeEventListener("touchmove", z), d.removeEventListener("touchend", e), c = !1, l && (n = t.changedTouches[t.changedTouches.length - 1], a = 0 - (r - n.clientX), t = "overlap" === te.levelOpen ? Y() * te.levelSpacing : 0, n = A + t, (a = "left" === te.position ? Math.abs(Math.min(Math.max(a, -n), 0)) : Math.abs(Math.min(Math.max(a, 0), n))) === n ? H("close", !1) : 50 < a ? H("close") : H("open", !0, t, n), i = r = null, l = !1);
        };

        j(), P(), _(), !0 === te.removeOriginalNav ? e.parentNode.removeChild(e) : e.classList.add("hc-nav-original", b), "prepend" === te.bodyInsert ? ie.body.insertBefore(u, ie.body.firstChild) : "append" === te.bodyInsert && ie.body.appendChild(u), !0 === te.expanded && (y = !0, K()), te.swipeGestures && (d.addEventListener("touchstart", B("nav"), ee.supportsPassive), ie.addEventListener("touchstart", B("doc"), ee.supportsPassive)), te.closeOnEsc && ie.addEventListener("keydown", function (e) {
          !g || "Escape" !== e.key && 27 !== e.keyCode || (0 === (e = Y()) ? ($(), S()) : (Z(e, G()), w(null, e - 1)));
        });
        B = ee.debounce(M, 500);
        re.addEventListener("resize", B, ee.supportsPassive);

        var X = function (e, t, n) {
          var a,
              r,
              i = ie.querySelector("#" + b + "-" + e + "-" + t);
          i && (a = i.value, t = (r = i.parentNode).closest(".nav-wrapper"), i.setAttribute("checked", !1), t.classList.remove("sub-level-open"), r.classList.remove("level-open"), r.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !1), -1 !== k.indexOf(a) && k.splice(k.indexOf(a), 1), n && "overlap" === te.levelOpen && (t.removeEventListener("click"), t.addEventListener("click", ee.stopPropagation), ee.setTransform(d, (e - 1) * te.levelSpacing, te.position), m && (t = "x" === ee.getAxis(te.position) ? A : x, ee.setTransform(m, t + (e - 1) * te.levelSpacing, te.position))));
        };

        return u.on = function (e, t) {
          u.addEventListener(e, t);
        }, u.off = function (e, t) {
          u.removeEventListener(e, t);
        }, u.getSettings = function () {
          return Object.assign({}, te);
        }, u.isOpen = F, u.open = K, u.close = $, u.toggle = J(null), u.update = function (e, t) {
          if (ae = [], "object" == typeof e) {
            for (var n in e) te[n] !== e[n] && ae.push(n);

            te = Object.assign({}, te, e);
          }

          !0 === e || !0 === t ? te.removeOriginalNav ? console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default") : (j(!0), P(), _(!0)) : (j(!0), _(!0));
        }, u;
      }

      function Q() {
        var e = Number(this.dataset.level),
            t = Number(this.dataset.index);
        ("true" === this.getAttribute("checked") ? R : Z)(e, t);
      }

      function V(e) {
        e.classList.remove(v), e.setAttribute("aria-expanded", !1);
      }

      function W() {
        return !1 !== te.levelOpen && "none" !== te.levelOpen;
      }

      function F() {
        return g;
      }

      function Y() {
        return k.length ? Number(Array.prototype.filter.call(d.querySelectorAll(".hc-chk"), function (e) {
          return e.value == k[k.length - 1];
        })[0].dataset.level) : 0;
      }

      function G() {
        return k.length ? Number(Array.prototype.filter.call(d.querySelectorAll(".hc-chk"), function (e) {
          return e.value == k[k.length - 1];
        })[0].dataset.index) : 0;
      }

      function K(e, t) {
        var n, a;

        if ((!g || void 0 !== t) && (g || (g = !0, u.style.visibility = "visible", u.setAttribute("aria-hidden", !1), u.classList.add(le), f && (f.forEach(V), h && (h.classList.add(v), h.setAttribute("aria-expanded", !0))), "expand" === te.levelOpen && C && clearTimeout(C), te.disableBody && (L = re.pageYOffset || se.scrollTop || ie.documentElement.scrollTop || ie.body.scrollTop, ie.documentElement.scrollHeight > ie.documentElement.clientHeight && se.classList.add("hc-nav-yscroll"), ie.body.classList.add("hc-nav-open"), L && (ie.body.style.top = -L + "px")), m && (n = "x" === ee.getAxis(te.position) ? A : x, ee.setTransform(m, n, te.position)), y ? y = !1 : (u._eventListeners.toggle && u._eventListeners.toggle.forEach(function (e) {
          e.fn(ee.customEventObject("toggle", u, u, {
            action: "open"
          }), Object.assign({}, te));
        }), setTimeout(function () {
          u._eventListeners.open && u._eventListeners.open.forEach(function (e) {
            e.fn(ee.customEventObject("open", u, u), Object.assign({}, te));
          });
        }, p))), W())) {
          if ("number" != typeof e && !ee.isNumeric(e) || "number" != typeof t && !ee.isNumeric(t)) E ? (a = Array.prototype.filter.call(d.querySelectorAll(".hc-chk"), function (e) {
            return e.value == E;
          })[0], !te.closeActiveLevel && te.closeOpenLevels || (E = null)) : !1 === te.closeOpenLevels && (a = (a = Array.prototype.filter.call(d.querySelectorAll(".hc-chk"), function (e) {
            return "true" === e.getAttribute("checked");
          }))[a.length - 1]);else if (!(a = ie.querySelector("#" + b + "-" + e + "-" + t))) return void console.warn("HC Offcanvas Nav: level " + e + " doesn't have index " + t);

          if (a) {
            var r = [];

            if (e = Number(a.dataset.level), t = Number(a.dataset.index), 1 < e) {
              for (var i = []; a && a !== ie; a = a.parentNode) a.matches(".nav-wrapper") && i.push(a);

              for (var s = 0; s < i.length; s++) {
                var o = i[s],
                    l = Number(o.dataset.level);
                0 < l && r.push({
                  level: l,
                  index: Number(o.dataset.index)
                });
              }

              r = r.reverse();
            }

            r.push({
              level: e,
              index: t
            });

            for (var c = 0; c < r.length; c++) R(r[c].level, r[c].index, !1);
          }
        }
      }

      function $() {
        var e;
        g && (g = !1, m && ee.setTransform(m, !1), u.classList.remove(le), u.classList.remove("user-is-tabbing"), u.setAttribute("aria-hidden", !0), d.removeAttribute("style"), f && f.forEach(V), "expand" === te.levelOpen && -1 !== ["top", "bottom"].indexOf(te.position) ? Z(0) : W() && (C = setTimeout(function () {
          Z(0);
        }, "expand" === te.levelOpen ? p : 0)), te.disableBody && (ie.body.classList.remove("hc-nav-open"), se.classList.remove("hc-nav-yscroll"), L && (ie.body.style.top = "", ie.body.scrollTop = L, se.scrollTop = L, "bottom" === te.position && (e = L, setTimeout(function () {
          ie.body.scrollTop = e, se.scrollTop = e;
        }, 0)), L = 0)), u._eventListeners.toggle && u._eventListeners.toggle.forEach(function (e) {
          e.fn(ee.customEventObject("toggle", u, u, {
            action: "close"
          }), Object.assign({}, te));
        }), setTimeout(function () {
          u.style.visibility = "", u._eventListeners.close && u._eventListeners.close.forEach(function (e) {
            e.fn(ee.customEventObject("close", u, u), Object.assign({}, te));
          }), u._eventListeners["close.once"] && u._eventListeners["close.once"].forEach(function (e) {
            e.fn(ee.customEventObject("close.once", u, u), Object.assign({}, te));
          }), u.removeEventListener("close.once");
        }, p));
      }

      function J(t) {
        return function (e) {
          e && (e.preventDefault(), e.stopPropagation()), t && (h = t), (g ? $ : K)();
        };
      }

      function R(t, n, e) {
        void 0 === e && (e = !0);
        var a = ie.querySelector("#" + b + "-" + t + "-" + n),
            r = a.value,
            i = a.parentNode,
            s = i.closest(".nav-wrapper"),
            o = ee.children(i, ".nav-wrapper")[0];
        !1 === e && (o.style.transition = "none"), a.setAttribute("checked", !0), s.classList.add("sub-level-open"), i.classList.add("level-open"), i.querySelectorAll("[aria-controls]")[0].setAttribute("aria-expanded", !0), !1 === e && setTimeout(function () {
          o.style.transition = "";
        }, p), -1 === k.indexOf(r) && k.push(r), "overlap" === te.levelOpen && (s.addEventListener("click", function () {
          return Z(t, n);
        }), ee.setTransform(d, t * te.levelSpacing, te.position), m && (s = "x" === ee.getAxis(te.position) ? A : x, ee.setTransform(m, s + t * te.levelSpacing, te.position))), u._eventListeners["open.level"] && u._eventListeners["open.level"].forEach(function (e) {
          e.fn(ee.customEventObject("open.level", u, o, {
            currentLevel: t,
            currentIndex: n
          }), Object.assign({}, te));
        }), N && (w(0, t, n), N = !1);
      }

      function Z(t, e) {
        for (var n, a = t; a <= Object.keys(O).length; a++) if (a === t && void 0 !== e) X(t, e, !0);else if (0 !== t || te.closeOpenLevels) for (var r = 0; r < O[a]; r++) X(a, r, a === t);else ;

        0 < t && u._eventListeners["close.level"] && (n = ie.querySelector("#" + b + "-" + t + "-" + e).closest(".nav-wrapper"), u._eventListeners["close.level"].forEach(function (e) {
          e.fn(ee.customEventObject("close.level", u, n, {
            currentLevel: t - 1,
            currentIndex: G()
          }), Object.assign({}, te));
        })), N && (w(null, t - 1), N = !1);
      }

      console.error("%c! HC Offcanvas Nav:%c Navigation must contain <ul> element.", "color: #fa253b", "color: default");
    }

    te.ariaLabels = Object.assign({}, {
      open: "Open Menu",
      close: "Close Menu",
      submenu: "Submenu"
    }, t.ariaLabels);
    var ae = [];

    if (Array.isArray(e) || e instanceof NodeList) {
      for (var a = [], r = 0; r < e.length; r++) a.push(n(e[r]));

      return 1 < a.length ? a : a[0];
    }

    return n(e);
  }

  var n,
      a,
      ie = re.document,
      se = ie.getElementsByTagName("html")[0],
      oe = 0,
      le = "nav-open";
  return void 0 !== re.jQuery && (n = re.jQuery, a = "hcOffcanvasNav", n.fn.extend({
    hcOffcanvasNav: function (t) {
      return this.length ? this.each(function () {
        var e = n.data(this, a);
        e ? e.update(t) : (e = new i(this, t), n.data(this, a, e));
      }) : this;
    }
  })), re.hcOffcanvasNav = re.hcOffcanvasNav || i, i;
}), function (n) {
  var e = n.hcOffcanvasNav,
      o = n.document;
  "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function (e, t) {
      if (null == e) throw new TypeError("Cannot convert undefined or null to object");

      for (var n = Object(e), a = 1; a < arguments.length; a++) {
        var r = arguments[a];
        if (null != r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      }

      return n;
    },
    writable: !0,
    configurable: !0
  }), Element.prototype.closest || (Element.prototype.closest = function (e) {
    var t = this;

    do {
      if (Element.prototype.matches.call(t, e)) return t;
    } while (null !== (t = t.parentElement || t.parentNode) && 1 === t.nodeType);

    return null;
  }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
    configurable: !0,
    value: function n() {
      var a = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
      return a ? Array.prototype.reduce.call(this, function (e, t) {
        return Array.isArray(t) ? e.push.apply(e, n.call(t, a - 1)) : e.push(t), e;
      }, []) : Array.prototype.slice.call(this);
    },
    writable: !0
  }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector);
  var t = !1;

  try {
    var a = Object.defineProperty({}, "passive", {
      get: function () {
        t = {
          passive: !1
        };
      }
    });
    n.addEventListener("testPassive", null, a), n.removeEventListener("testPassive", null, a);
  } catch (e) {}

  function r(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }

  function i(e) {
    return "auto" === e ? "100%" : r(e) && 0 !== e ? e + "px" : e;
  }

  function s(e) {
    var t = ["Webkit", "Moz", "Ms", "O"],
        n = (o.body || o.documentElement).style,
        a = e.charAt(0).toUpperCase() + e.slice(1);
    if (void 0 !== n[e]) return e;

    for (var r = 0; r < t.length; r++) if (void 0 !== n[t[r] + a]) return t[r] + a;

    return !1;
  }

  function l(e, t) {
    if (e instanceof Element) return t ? Array.prototype.filter.call(e.children, function (e) {
      return e.matches(t);
    }) : e.children;
    var n = [];
    return Array.prototype.forEach.call(e, function (e) {
      n = t ? n.concat(Array.prototype.filter.call(e.children, function (e) {
        return e.matches(t);
      })) : n.concat(Array.prototype.slice.call(e.children));
    }), n;
  }

  var c = (/iPad|iPhone|iPod/.test(navigator.userAgent) || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) && !n.MSStream,
      v = "ontouchstart" in n || navigator.maxTouchPoints || n.DocumentTouch && o instanceof DocumentTouch,
      u = function (o) {
    var l = Node.prototype[o + "EventListener"];
    return function (e, t, n) {
      if (this) {
        var a = e.split(".")[0];

        if (this._eventListeners = this._eventListeners || {}, "add" === o) {
          this._eventListeners[e] = this._eventListeners[e] || [];
          var r = {
            fn: t
          };
          n && (r.options = n), this._eventListeners[e].push(r), l.call(this, a, t, n);
        } else if ("function" == typeof t) for (var i in l.call(this, a, t, n), this._eventListeners) this._eventListeners[i] = this._eventListeners[i].filter(function (e) {
          return e.fn !== t;
        }), this._eventListeners[i].length || delete this._eventListeners[i];else if (this._eventListeners[e]) {
          for (var s = this._eventListeners[e].length; s--;) l.call(this, a, this._eventListeners[e][s].fn, this._eventListeners[e][s].options), this._eventListeners[e].splice(s, 1);

          this._eventListeners[e].length || delete this._eventListeners[e];
        }
      }
    };
  };

  Node.prototype.addEventListener = u("add"), Node.prototype.removeEventListener = u("remove");

  function d(e, t, n) {
    void 0 === t && (t = {});
    var a,
        r = o.createElement(e);

    for (a in t) "class" !== a ? !t[a] && 0 !== t[a] || r.setAttribute(a, t[a]) : r.className = t[a];

    if (n) {
      Array.isArray(n) || (n = [n]);

      for (var i = 0; i < n.length; i++) if ("object" == typeof n[i] && n[i].length && !n[i].nodeType) for (var s = 0; s < n[i].length; s++) r.appendChild(n[i][s]);else r.appendChild("string" == typeof n[i] ? o.createTextNode(n[i]) : n[i]);
    }

    return r;
  }

  function p(e) {
    return -1 !== ["left", "right"].indexOf(e) ? "x" : "y";
  }

  a = function e(t) {
    return "string" == typeof t ? t : t.getAttribute("id") ? "#" + t.getAttribute("id") : t.getAttribute("class") ? t.tagName.toLowerCase() + "." + t.getAttribute("class").replace(/\s+/g, ".") : e(t.parentNode) + " > " + t.tagName.toLowerCase();
  }, u = function () {
    s("transform");
    return function (e, t, n) {
      !1 === t || "" === t ? e.style.transform = "" : "x" === p(n) ? e.style.transform = "translate3d(" + i("left" === n ? t : -t) + ",0,0)" : e.style.transform = "translate3d(0," + i("top" === n ? t : -t) + ",0)";
    };
  }();
  e.Helpers = {
    supportsPassive: t,
    isIos: c,
    isTouchDevice: v,
    isNumeric: r,
    formatSizeVal: i,
    toMs: function (e) {
      return parseFloat(e) * (/\ds$/.test(e) ? 1e3 : 1);
    },
    stopPropagation: function (e) {
      return e.stopPropagation();
    },
    preventDefault: function (e) {
      return e.preventDefault();
    },
    preventClick: function (t) {
      return function (e) {
        e.preventDefault(), e.stopPropagation(), "function" == typeof t && t();
      };
    },
    browserPrefix: s,
    children: l,
    wrap: function (e, t) {
      e.parentNode.insertBefore(t, e), t.appendChild(e);
    },
    data: function (e, t, n) {
      if (e.hcOffcanvasNav = e.hcOffcanvasNav || {}, void 0 === n) return e.hcOffcanvasNav[t];
      e.hcOffcanvasNav[t] = n;
    },
    clone: function (e, t, n) {
      var a = e.cloneNode(n || !1),
          r = e instanceof Element ? [e].concat(Array.prototype.slice.call(e.getElementsByTagName("*"))) : [],
          e = a instanceof Element ? [a].concat(Array.prototype.slice.call(a.getElementsByTagName("*"))) : [];
      return t || (r.shift(), e.shift()), n && function (e, t) {
        for (var n = 0; n < e.length; n++) if (e[n]._eventListeners) for (var a in e[n]._eventListeners) for (var r = 0; r < e[n]._eventListeners[a].length; r++) t[r].addEventListener(a, e[n]._eventListeners[a][r].fn, e[n]._eventListeners[a][r].options);
      }(r, e), a;
    },
    customEventObject: function (e, n, a, r) {
      return new function (e) {
        for (var t in this.bubbles = !1, this.cancelable = !1, this.composed = !1, this.currentTarget = a, this.data = r ? {} : null, this.defaultPrevented = !1, this.eventPhase = 0, this.isTrusted = !1, this.target = n, this.timeStamp = Date.now(), this.type = e, r) this.data[t] = r[t];
      }(e);
    },
    hasListener: function (e, t) {
      return (t ? (e._eventListeners || {})[t] : e._eventListeners) || !1;
    },
    debounce: function (a, r, i) {
      var s;
      return function () {
        var e = this,
            t = arguments,
            n = i && !s;
        clearTimeout(s), s = setTimeout(function () {
          s = null, i || a.apply(e, t);
        }, r), n && a.apply(e, t);
      };
    },
    createElement: d,
    getElements: function (e) {
      var t = null;
      return "string" == typeof e ? t = o.querySelectorAll(e) : n.jQuery && e instanceof n.jQuery && e.length ? t = e.toArray() : e instanceof Element && (t = [e]), t;
    },
    getElementCssTag: a,
    printStyle: function (e) {
      var r = d("style", {
        id: e
      }),
          i = {},
          s = {};
      o.head.appendChild(r);

      function a(e) {
        return ";" !== e.substr(-1) && (e += ";" !== e.substr(-1) ? ";" : ""), e;
      }

      return {
        reset: function () {
          i = {}, s = {};
        },
        add: function (e, t, n) {
          e = e.trim(), t = t.trim(), n ? (n = n.trim(), s[n] = s[n] || {}, s[n][e] = a(t)) : i[e] = a(t);
        },
        remove: function (e, t) {
          e = e.trim(), t ? (t = t.trim(), void 0 !== s[t][e] && delete s[t][e]) : void 0 !== i[e] && delete i[e];
        },
        insert: function () {
          var e,
              t,
              n = "";

          for (e in s) {
            for (var a in n += "@media screen and (" + e + ") {\n", s[e]) n += "  " + a + " { " + s[e][a] + " }\n";

            n += "}\n";
          }

          for (t in i) n += t + " { " + i[t] + " }\n";

          r.innerHTML = n;
        }
      };
    },
    insertAt: function (e, t, n) {
      var a = l(n),
          r = a.length,
          r = -1 < (t = "last" === (t = "first" === t ? 0 : t) ? r : t) ? Math.max(0, Math.min(t, r)) : Math.max(0, Math.min(r + t, r));
      0 === r ? n[0].insertBefore(e, n[0].firstChild) : a[r - 1].insertAdjacentElement("afterend", e);
    },
    getAxis: p,
    setTransform: u,
    deprecated: function (e, t, n) {
      console.warn("%cHC Off-canvas Nav:%c " + n + "%c '" + e + "'%c is now deprecated and will be removed in the future. Use%c '" + t + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default");
    }
  };
}(window);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * Sticky.js
 * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
 *
 * @version 1.3.0
 * @author Rafal Galus <biuro@rafalgalus.pl>
 * @website https://rgalus.github.io/sticky-js/
 * @repo https://github.com/rgalus/sticky-js
 * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
 */


var Sticky = /*#__PURE__*/function () {
  /**
   * Sticky instance constructor
   * @constructor
   * @param {string} selector - Selector which we can find elements
   * @param {string} options - Global options for sticky elements (could be overwritten by data-{option}="" attributes)
   */
  function Sticky() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sticky);

    this.selector = selector;
    this.elements = [];
    this.version = '1.3.0';
    this.vp = this.getViewportSize();
    this.body = document.querySelector('body');
    this.options = {
      wrap: options.wrap || false,
      wrapWith: options.wrapWith || '<span></span>',
      marginTop: options.marginTop || 0,
      marginBottom: options.marginBottom || 0,
      stickyFor: options.stickyFor || 0,
      stickyClass: options.stickyClass || null,
      stickyContainer: options.stickyContainer || 'body'
    };
    this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this);
    this.updateScrollTopPosition();
    window.addEventListener('load', this.updateScrollTopPosition);
    window.addEventListener('scroll', this.updateScrollTopPosition);
    this.run();
  }
  /**
   * Function that waits for page to be fully loaded and then renders & activates every sticky element found with specified selector
   * @function
   */


  _createClass(Sticky, [{
    key: "run",
    value: function run() {
      var _this = this; // wait for page to be fully loaded


      var pageLoaded = setInterval(function () {
        if (document.readyState === 'complete') {
          clearInterval(pageLoaded);
          var elements = document.querySelectorAll(_this.selector);

          _this.forEach(elements, function (element) {
            return _this.renderElement(element);
          });
        }
      }, 10);
    }
    /**
     * Function that assign needed variables for sticky element, that are used in future for calculations and other
     * @function
     * @param {node} element - Element to be rendered
     */

  }, {
    key: "renderElement",
    value: function renderElement(element) {
      var _this2 = this; // create container for variables needed in future


      element.sticky = {}; // set default variables

      element.sticky.active = false;
      element.sticky.marginTop = parseInt(element.getAttribute('data-margin-top')) || this.options.marginTop;
      element.sticky.marginBottom = parseInt(element.getAttribute('data-margin-bottom')) || this.options.marginBottom;
      element.sticky.stickyFor = parseInt(element.getAttribute('data-sticky-for')) || this.options.stickyFor;
      element.sticky.stickyClass = element.getAttribute('data-sticky-class') || this.options.stickyClass;
      element.sticky.wrap = element.hasAttribute('data-sticky-wrap') ? true : this.options.wrap; // @todo attribute for stickyContainer
      // element.sticky.stickyContainer = element.getAttribute('data-sticky-container') || this.options.stickyContainer;

      element.sticky.stickyContainer = this.options.stickyContainer;
      element.sticky.container = this.getStickyContainer(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);
      element.sticky.rect = this.getRectangle(element); // fix when element is image that has not yet loaded and width, height = 0

      if (element.tagName.toLowerCase() === 'img') {
        element.onload = function () {
          return element.sticky.rect = _this2.getRectangle(element);
        };
      }

      if (element.sticky.wrap) {
        this.wrapElement(element);
      } // activate rendered element


      this.activate(element);
    }
    /**
     * Wraps element into placeholder element
     * @function
     * @param {node} element - Element to be wrapped
     */

  }, {
    key: "wrapElement",
    value: function wrapElement(element) {
      element.insertAdjacentHTML('beforebegin', element.getAttribute('data-sticky-wrapWith') || this.options.wrapWith);
      element.previousSibling.appendChild(element);
    }
    /**
     * Function that activates element when specified conditions are met and then initalise events
     * @function
     * @param {node} element - Element to be activated
     */

  }, {
    key: "activate",
    value: function activate(element) {
      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      }

      if (this.elements.indexOf(element) < 0) {
        this.elements.push(element);
      }

      if (!element.sticky.resizeEvent) {
        this.initResizeEvents(element);
        element.sticky.resizeEvent = true;
      }

      if (!element.sticky.scrollEvent) {
        this.initScrollEvents(element);
        element.sticky.scrollEvent = true;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onResizeEvents to window listener and assigns function to element as resizeListener
     * @function
     * @param {node} element - Element for which resize events are initialised
     */

  }, {
    key: "initResizeEvents",
    value: function initResizeEvents(element) {
      var _this3 = this;

      element.sticky.resizeListener = function () {
        return _this3.onResizeEvents(element);
      };

      window.addEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Removes element listener from resize event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyResizeEvents",
    value: function destroyResizeEvents(element) {
      window.removeEventListener('resize', element.sticky.resizeListener);
    }
    /**
     * Function which is fired when user resize window. It checks if element should be activated or deactivated and then run setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onResizeEvents",
    value: function onResizeEvents(element) {
      this.vp = this.getViewportSize();
      element.sticky.rect = this.getRectangle(element);
      element.sticky.container.rect = this.getRectangle(element.sticky.container);

      if (element.sticky.rect.top + element.sticky.rect.height < element.sticky.container.rect.top + element.sticky.container.rect.height && element.sticky.stickyFor < this.vp.width && !element.sticky.active) {
        element.sticky.active = true;
      } else if (element.sticky.rect.top + element.sticky.rect.height >= element.sticky.container.rect.top + element.sticky.container.rect.height || element.sticky.stickyFor >= this.vp.width && element.sticky.active) {
        element.sticky.active = false;
      }

      this.setPosition(element);
    }
    /**
     * Function which is adding onScrollEvents to window listener and assigns function to element as scrollListener
     * @function
     * @param {node} element - Element for which scroll events are initialised
     */

  }, {
    key: "initScrollEvents",
    value: function initScrollEvents(element) {
      var _this4 = this;

      element.sticky.scrollListener = function () {
        return _this4.onScrollEvents(element);
      };

      window.addEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Removes element listener from scroll event
     * @function
     * @param {node} element - Element from which listener is deleted
     */

  }, {
    key: "destroyScrollEvents",
    value: function destroyScrollEvents(element) {
      window.removeEventListener('scroll', element.sticky.scrollListener);
    }
    /**
     * Function which is fired when user scroll window. If element is active, function is invoking setPosition function
     * @function
     * @param {node} element - Element for which event function is fired
     */

  }, {
    key: "onScrollEvents",
    value: function onScrollEvents(element) {
      if (element.sticky && element.sticky.active) {
        this.setPosition(element);
      }
    }
    /**
     * Main function for the library. Here are some condition calculations and css appending for sticky element when user scroll window
     * @function
     * @param {node} element - Element that will be positioned if it's active
     */

  }, {
    key: "setPosition",
    value: function setPosition(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });

      if (this.vp.height < element.sticky.rect.height || !element.sticky.active) {
        return;
      }

      if (!element.sticky.rect.width) {
        element.sticky.rect = this.getRectangle(element);
      }

      if (element.sticky.wrap) {
        this.css(element.parentNode, {
          display: 'block',
          width: element.sticky.rect.width + 'px',
          height: element.sticky.rect.height + 'px'
        });
      }

      if (element.sticky.rect.top === 0 && element.sticky.container === this.body) {
        this.css(element, {
          position: 'fixed',
          top: element.sticky.rect.top + 'px',
          left: element.sticky.rect.left + 'px',
          width: element.sticky.rect.width + 'px'
        });

        if (element.sticky.stickyClass) {
          element.classList.add(element.sticky.stickyClass);
        }
      } else if (this.scrollTop > element.sticky.rect.top - element.sticky.marginTop) {
        this.css(element, {
          position: 'fixed',
          width: element.sticky.rect.width + 'px',
          left: element.sticky.rect.left + 'px'
        });

        if (this.scrollTop + element.sticky.rect.height + element.sticky.marginTop > element.sticky.container.rect.top + element.sticky.container.offsetHeight - element.sticky.marginBottom) {
          if (element.sticky.stickyClass) {
            element.classList.remove(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.container.rect.top + element.sticky.container.offsetHeight - (this.scrollTop + element.sticky.rect.height + element.sticky.marginBottom) + 'px'
          });
        } else {
          if (element.sticky.stickyClass) {
            element.classList.add(element.sticky.stickyClass);
          }

          this.css(element, {
            top: element.sticky.marginTop + 'px'
          });
        }
      } else {
        if (element.sticky.stickyClass) {
          element.classList.remove(element.sticky.stickyClass);
        }

        this.css(element, {
          position: '',
          width: '',
          top: '',
          left: ''
        });

        if (element.sticky.wrap) {
          this.css(element.parentNode, {
            display: '',
            width: '',
            height: ''
          });
        }
      }
    }
    /**
     * Function that updates element sticky rectangle (with sticky container), then activate or deactivate element, then update position if it's active
     * @function
     */

  }, {
    key: "update",
    value: function update() {
      var _this5 = this;

      this.forEach(this.elements, function (element) {
        element.sticky.rect = _this5.getRectangle(element);
        element.sticky.container.rect = _this5.getRectangle(element.sticky.container);

        _this5.activate(element);

        _this5.setPosition(element);
      });
    }
    /**
     * Destroys sticky element, remove listeners
     * @function
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('load', this.updateScrollTopPosition);
      window.removeEventListener('scroll', this.updateScrollTopPosition);
      this.forEach(this.elements, function (element) {
        _this6.destroyResizeEvents(element);

        _this6.destroyScrollEvents(element);

        delete element.sticky;
      });
    }
    /**
     * Function that returns container element in which sticky element is stuck (if is not specified, then it's stuck to body)
     * @function
     * @param {node} element - Element which sticky container are looked for
     * @return {node} element - Sticky container
     */

  }, {
    key: "getStickyContainer",
    value: function getStickyContainer(element) {
      var container = element.parentNode;

      while (!container.hasAttribute('data-sticky-container') && !container.parentNode.querySelector(element.sticky.stickyContainer) && container !== this.body) {
        container = container.parentNode;
      }

      return container;
    }
    /**
     * Function that returns element rectangle & position (width, height, top, left)
     * @function
     * @param {node} element - Element which position & rectangle are returned
     * @return {object}
     */

  }, {
    key: "getRectangle",
    value: function getRectangle(element) {
      this.css(element, {
        position: '',
        width: '',
        top: '',
        left: ''
      });
      var width = Math.max(element.offsetWidth, element.clientWidth, element.scrollWidth);
      var height = Math.max(element.offsetHeight, element.clientHeight, element.scrollHeight);
      var top = 0;
      var left = 0;

      do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        top: top,
        left: left,
        width: width,
        height: height
      };
    }
    /**
     * Function that returns viewport dimensions
     * @function
     * @return {object}
     */

  }, {
    key: "getViewportSize",
    value: function getViewportSize() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    }
    /**
     * Function that updates window scroll position
     * @function
     * @return {number}
     */

  }, {
    key: "updateScrollTopPosition",
    value: function updateScrollTopPosition() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }
    /**
     * Helper function for loops
     * @helper
     * @param {array}
     * @param {function} callback - Callback function (no need for explanation)
     */

  }, {
    key: "forEach",
    value: function forEach(array, callback) {
      for (var i = 0, len = array.length; i < len; i++) {
        callback(array[i]);
      }
    }
    /**
     * Helper function to add/remove css properties for specified element.
     * @helper
     * @param {node} element - DOM element
     * @param {object} properties - CSS properties that will be added/removed from specified element
     */

  }, {
    key: "css",
    value: function css(element, properties) {
      for (var property in properties) {
        if (properties.hasOwnProperty(property)) {
          element.style[property] = properties[property];
        }
      }
    }
  }]);

  return Sticky;
}();
/**
 * Export function that supports AMD, CommonJS and Plain Browser.
 */


(function (root, factory) {
  if (true) {
    module.exports = factory;
  } else {}
})(this, Sticky);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tabbyjs v12.0.3 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/tabby */
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), function (e, t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return t(e);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (e) {
  "use strict";

  var t = {
    idPrefix: "tabby-toggle_",
    default: "[data-tabby-default]"
  },
      r = function (t) {
    if (t && "true" != t.getAttribute("aria-selected")) {
      var r = document.querySelector(t.hash);

      if (r) {
        var o = function (e) {
          var t = e.closest('[role="tablist"]');
          if (!t) return {};
          var r = t.querySelector('[role="tab"][aria-selected="true"]');
          if (!r) return {};
          var o = document.querySelector(r.hash);
          return r.setAttribute("aria-selected", "false"), r.setAttribute("tabindex", "-1"), o ? (o.setAttribute("hidden", "hidden"), {
            previousTab: r,
            previousContent: o
          }) : {
            previousTab: r
          };
        }(t);

        !function (e, t) {
          e.setAttribute("aria-selected", "true"), e.setAttribute("tabindex", "0"), t.removeAttribute("hidden"), e.focus();
        }(t, r), o.tab = t, o.content = r, function (t, r) {
          var o;
          "function" == typeof e.CustomEvent ? o = new CustomEvent("tabby", {
            bubbles: !0,
            cancelable: !0,
            detail: r
          }) : (o = document.createEvent("CustomEvent")).initCustomEvent("tabby", !0, !0, r), t.dispatchEvent(o);
        }(t, o);
      }
    }
  },
      o = function (e, t) {
    var o = function (e) {
      var t = e.closest('[role="tablist"]'),
          r = t ? t.querySelectorAll('[role="tab"]') : null;
      if (r) return {
        tabs: r,
        index: Array.prototype.indexOf.call(r, e)
      };
    }(e);

    if (o) {
      var n,
          i = o.tabs.length - 1;
      ["ArrowUp", "ArrowLeft", "Up", "Left"].indexOf(t) > -1 ? n = o.index < 1 ? i : o.index - 1 : ["ArrowDown", "ArrowRight", "Down", "Right"].indexOf(t) > -1 ? n = o.index === i ? 0 : o.index + 1 : "Home" === t ? n = 0 : "End" === t && (n = i), r(o.tabs[n]);
    }
  };

  return function (n, i) {
    var a,
        u,
        l = {};
    l.destroy = function () {
      var e = u.querySelectorAll("a");
      Array.prototype.forEach.call(e, function (e) {
        var t = document.querySelector(e.hash);
        t && function (e, t, r) {
          e.id.slice(0, r.idPrefix.length) === r.idPrefix && (e.id = ""), e.removeAttribute("role"), e.removeAttribute("aria-controls"), e.removeAttribute("aria-selected"), e.removeAttribute("tabindex"), e.closest("li").removeAttribute("role"), t.removeAttribute("role"), t.removeAttribute("aria-labelledby"), t.removeAttribute("hidden");
        }(e, t, a);
      }), u.removeAttribute("role"), document.documentElement.removeEventListener("click", c, !0), u.removeEventListener("keydown", d, !0), a = null, u = null;
    }, l.setup = function () {
      if (u = document.querySelector(n)) {
        var e = u.querySelectorAll("a");
        u.setAttribute("role", "tablist"), Array.prototype.forEach.call(e, function (e) {
          var t = document.querySelector(e.hash);
          t && function (e, t, r) {
            e.id || (e.id = r.idPrefix + t.id), e.setAttribute("role", "tab"), e.setAttribute("aria-controls", t.id), e.closest("li").setAttribute("role", "presentation"), t.setAttribute("role", "tabpanel"), t.setAttribute("aria-labelledby", e.id), e.matches(r.default) ? e.setAttribute("aria-selected", "true") : (e.setAttribute("aria-selected", "false"), e.setAttribute("tabindex", "-1"), t.setAttribute("hidden", "hidden"));
          }(e, t, a);
        });
      }
    }, l.toggle = function (e) {
      var t = e;
      "string" == typeof e && (t = document.querySelector(n + ' [role="tab"][href*="' + e + '"]')), r(t);
    };

    var c = function (e) {
      var t = e.target.closest(n + ' [role="tab"]');
      t && (e.preventDefault(), r(t));
    },
        d = function (e) {
      var t = document.activeElement;
      t.matches(n + ' [role="tab"]') && (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Up", "Down", "Left", "Right", "Home", "End"].indexOf(e.key) < 0 || o(t, e.key));
    };

    return a = function () {
      var e = {};
      return Array.prototype.forEach.call(arguments, function (t) {
        for (var r in t) {
          if (!t.hasOwnProperty(r)) return;
          e[r] = t[r];
        }
      }), e;
    }(t, i || {}), l.setup(), function (t) {
      if (!(e.location.hash.length < 1)) {
        var o = document.querySelector(t + ' [role="tab"][href*="' + e.location.hash + '"]');
        r(o);
      }
    }(n), document.documentElement.addEventListener("click", c, !0), u.addEventListener("keydown", d, !0), l;
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11
// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
try {
  var ce = new window.CustomEvent('test');
  ce.preventDefault();

  if (ce.defaultPrevented !== true) {
    // IE has problems with .preventDefault() on custom events
    // http://stackoverflow.com/questions/23349191
    throw new Error('Could not prevent default');
  }
} catch (e) {
  var CustomEvent = function (event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;

    evt.preventDefault = function () {
      origPrevent.call(this);

      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch (e) {
        this.defaultPrevented = true;
      }
    };

    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/sticky-js/index.js
var sticky_js = __webpack_require__(1);
var sticky_js_default = /*#__PURE__*/__webpack_require__.n(sticky_js);

// EXTERNAL MODULE: ./node_modules/hc-offcanvas-nav/dist/hc-offcanvas-nav.js
var hc_offcanvas_nav = __webpack_require__(2);
var hc_offcanvas_nav_default = /*#__PURE__*/__webpack_require__.n(hc_offcanvas_nav);

// EXTERNAL MODULE: ./node_modules/tabbyjs/dist/js/tabby.min.js
var tabby_min = __webpack_require__(4);

// CONCATENATED MODULE: ./_src/js/modules/tabs.js


var getTabs = function getTabs() {// const geo = document.querySelector(".icon-box__text--geo");
  // geo.textContent = "Красноярск";
  // const tabsHeader = new Tabby(".geo__list");
  // const tabsContacts = new Tabby(".city__list");
  // tabsHeader.toggle("#krasnoyarsk");
  // tabsContacts.toggle("#city-krasnoyarsk");
  // document.addEventListener(
  //   "tabby",
  //   function (event) {
  //     const tab = event.target;
  //     if (tab.classList.contains("geo__link")) {
  //       geo.textContent = tab.textContent;
  //     }
  //   },
  //   false
  // );
};

/* harmony default export */ var tabs = (getTabs);
// CONCATENATED MODULE: ./_src/js/modules/offices.js
// Список городов и офисов в них
var officesList = [{
  cityName: "Красноярск",
  tel: "8 3912 347778",
  link: "+73912347778",
  value: "krasnoyarsk",
  mail: "krs.ocenka@mail.ru",
  shops: [{
    coordinates: [55.975622, 92.854988],
    name: "переулок Афонтовский, д.7 оф.215"
  }, {
    coordinates: [56.032408, 92.87962],
    name: "улица Линейная, д.89 оф.ц2-05"
  }]
}, {
  cityName: "Иркутск",
  tel: "8 3952 435001",
  link: "+73952435001",
  value: "irkutsk",
  mail: "irk.ocenka@mail.ru",
  shops: [{
    coordinates: [52.268099, 104.34445],
    name: "улица Ширямова, д.22 оф.302"
  }]
}, {
  cityName: "Братск",
  tel: "8 9025 432294",
  link: "+79025432294",
  value: "bratsk",
  mail: "brt.ocenka@mail.ru",
  shops: [{
    coordinates: [56.147114, 101.617425],
    name: "улица Южная, д.33а оф.8"
  }]
}];
/* harmony default export */ var offices = (officesList);
// CONCATENATED MODULE: ./_src/js/modules/map.js
/* eslint-disable no-plusplus */

/* eslint-disable no-undef */

var winWidth = window.innerWidth;

var map_getMap = function getMap() {
  var myMap;
  var placemarkCollections = {};
  var placemarkList = {}; // Список городов и офисов в них
  // eslint-disable-next-line no-use-before-define

  ymaps.ready(init);

  function init() {
    // Создаем карту
    myMap = new ymaps.Map("map", {
      center: offices[0].shops[0].coordinates,
      zoom: 17,
      controls: [],
      zoomMargin: [20]
    }); // $('select#cities').append('<option value="' + i + '">' + officesList[i].cityName + '</option>');

    for (var i = 0; i < offices.length; i++) {
      var cityCollection = new ymaps.GeoObjectCollection();

      for (var c = 0; c < offices[i].shops.length; c++) {
        var shopInfo = offices[i].shops[c];
        var shopPlacemark = new ymaps.Placemark(shopInfo.coordinates, {
          hintContent: shopInfo.name,
          balloonContent: shopInfo.name
        }, {
          iconLayout: "default#image",
          iconImageHref: "./img/marker.png",
          iconImageSize: winWidth > 601 ? [48, 60] : [27, 34]
        });
        if (!placemarkList[i]) placemarkList[i] = {};
        placemarkList[i][c] = shopPlacemark; // Добавляем метку в коллекцию

        cityCollection.add(shopPlacemark);
      }

      placemarkCollections[i] = cityCollection; // Добавляем коллекцию на карту

      myMap.geoObjects.add(cityCollection);
    } // $("select#cities").trigger("change");

  } // console.log(placemarkCollections[0]);
  // Переключение города
  // $(document).on("change", $("select#city"), function () {
  //   const cityId = $("select#cities").val();
  //   // Масштабируем и выравниваем карту так, чтобы были видны метки для выбранного города
  //   myMap
  //     .setBounds(placemarkCollections[cityId].getBounds(), {
  //       checkZoomRange: true,
  //     })
  //     .then(function () {
  //       if (myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
  //     });
  //   $("#shops").html("");
  //   for (const c = 0; c < officesList[cityId].shops.length; c++) {
  //     $("#shops").append(
  //       '<li value="' + c + '">' + officesList[cityId].shops[c].name + "</li>"
  //     );
  //   }
  // });
  // Клик на адрес
  // $(document).on("click", "#shops li", function () {
  //   const cityId = $("select#cities").val();
  //   const shopId = $(this).val();
  //   placemarkList[cityId][shopId].events.fire("click");
  // });

};

/* harmony default export */ var map = (map_getMap);
// EXTERNAL MODULE: ./node_modules/custom-select/build/index.js
var build = __webpack_require__(0);
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// CONCATENATED MODULE: ./_src/js/modules/city.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-restricted-syntax */

 // eslint-disable-next-line import/no-cycle

 // import { myMap, placemarkCollections } from "./map";

var selectCity = build_default()(".city__select")[0];
var data = document.querySelector(".data"); // const itemAddr = data.querySelector(".data__item--addr");
// const linkTel = data.querySelector(".data__link--tel");
// const linkMail = data.querySelector(".data__link--mail");

var changeValueCity = function changeValueCity(elem) {
  if (data) {
    var itemAddr = data.querySelector(".data__item--addr");
    var linkTel = data.querySelector(".data__link--tel");
    var linkMail = data.querySelector(".data__link--mail");
    linkTel.href = "tel:".concat(elem.link);
    linkTel.textContent = elem.tel;
    linkMail.href = "mailto:".concat(elem.mail);
    linkMail.textContent = elem.mail;
    selectCity.value = elem.value;

    while (itemAddr.firstChild) {
      itemAddr.removeChild(itemAddr.firstChild);
    }

    var _iterator = _createForOfIteratorHelper(elem.shops),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var text = document.createElement("p");
        text.textContent = item.name;
        text.className = "data__addr";
        itemAddr.append(text);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};

var city_makeSelectCity = function makeSelectCity() {
  var _iterator2 = _createForOfIteratorHelper(offices),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      var option = document.createElement("option");
      option.text = item.cityName;
      option.value = item.value;
      selectCity.append(option);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  selectCity.value = offices[0].value;
  changeValueCity(offices[0]);
  selectCity.select.addEventListener("change", function (e) {
    var item = offices.filter(function (elem) {
      return elem.value === e.target.value;
    })[0];
    changeValueCity(item);
    changeValueGeo(item);
    myMap.setBounds(placemarkCollections[e.target.value].getBounds(), {
      checkZoomRange: true
    }).then(function () {
      if (myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
    });
  });
};

/* harmony default export */ var city = (city_makeSelectCity);
// CONCATENATED MODULE: ./_src/js/modules/geo.js
function geo_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = geo_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function geo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return geo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return geo_arrayLikeToArray(o, minLen); }

function geo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // eslint-disable-next-line import/no-cycle


var linkTel = document.querySelector(".icon-box__link--consultation");
var selectGeo = build_default()(".geo__select")[0];
var changeValueGeo = function changeValueGeo(elem) {
  if (linkTel) {
    var linkTelText = linkTel.querySelector(".icon-box__text");
    linkTelText.textContent = elem.tel;
  }

  selectGeo.value = elem.value;
  linkTel.href = "tel:".concat(elem.link);
};

var geo_makeSelectGeo = function makeSelectGeo() {
  // eslint-disable-next-line no-restricted-syntax
  var _iterator = geo_createForOfIteratorHelper(offices),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var option = document.createElement("option");
      option.text = item.cityName;
      option.value = item.value;
      selectGeo.append(option);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  changeValueGeo(offices[0]);
  selectGeo.select.addEventListener("change", function (e) {
    var item = offices.filter(function (elem) {
      return elem.value === e.target.value;
    })[0];
    changeValueGeo(item);
    changeValueCity(item);
  });
};

/* harmony default export */ var geo = (geo_makeSelectGeo);
// CONCATENATED MODULE: ./_src/js/modules/anchor.js
/* eslint-disable no-restricted-syntax */
var ancorHandle = function ancorHandle(e) {
  var id = this.href.split("#")[1];
  var anchorElem = document.getElementById("".concat(id));

  if (anchorElem) {
    e.preventDefault();
    anchorElem.scrollIntoView({
      behavior: "smooth"
    });
  }
};

var makeAncor = function makeAncor() {
  var list = Array.from(document.querySelectorAll(".nav__link"));

  for (var _i = 0, _list = list; _i < _list.length; _i++) {
    var item = _list[_i];
    item.addEventListener("click", ancorHandle);
  }
};

/* harmony default export */ var modules_anchor = (makeAncor);
// CONCATENATED MODULE: ./_src/js/main.js
/* eslint-disable object-shorthand */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-undef */

/* eslint-disable new-cap */

/* eslint-disable no-unused-vars */
 // import Tabby from "tabbyjs";
// import Accordion from "accordion-js";
// import Swiper, { Navigation, Pagination } from "swiper";

 // import { gsap } from "gsap";
// import GLightbox from "glightbox";
// import makeListenerConsult from "./modules/moduleConsultation";
// import createlawSlider from "./modules/lawSlider";
// import createAccordionFaq from "./modules/faqAccordion";







var nav = ".nav";

var main_createMobileMenu = function createMobileMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    var menu = new hc_offcanvas_nav_default.a(nav, {
      disableAt: 1000,
      customToggle: ".header__burger",
      width: "100%"
    });
  });
}; // const createTabs = () => {
//   const tabs = new Tabby("[data-tabs]");
// };


var main_createStickyHeader = function createStickyHeader() {
  var sticky = new sticky_js_default.a(".header");
}; // const createSliders = () => {
//   Swiper.use([Navigation, Pagination]);
//   const swiper = new Swiper(".diploma__swiper", {
//     modules: [Navigation, Pagination],
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//     },
//   });
// };
// const createAnimation = (unit) => {
//   const button = unit.querySelectorAll("button");
//   const img = unit.querySelectorAll(".unit__img-wrap");
//   const box = unit.querySelector(".unit-box");
//   const diploma = unit.querySelector(".diploma");
//   const timeline = gsap.timeline();
//   timeline
//     .to(box, { opacity: 0, duration: 0 })
//     .to(button, { backgroundColor: "transparent", duration: 0 })
//     .to(img, { width: "355px", ease: "none", duration: 0.3 })
//     .to(button, { padding: 0, duration: 0.3 }, "<")
//     .fromTo(box, { x: 50 }, { opacity: 1, x: 0, duration: 0.5 })
//     .fromTo(
//       diploma,
//       { x: 50 },
//       { autoAlpha: 1, position: "relative", x: 0, duration: 0.5 },
//       "<"
//     );
// };
// const createAnimationReverse = (unit) => {
//   const button = unit.querySelectorAll("button");
//   const img = unit.querySelectorAll(".unit__img-wrap");
//   const diploma = unit.querySelector(".diploma");
//   const timeline = gsap.timeline();
//   timeline
//     .to(diploma, { autoAlpha: 0, position: "absolute", duration: 0 })
//     .to(img, { width: "8%", ease: "none", duration: 0.3 })
//     .to(
//       button,
//       { padding: 24, backgroundColor: "#ffffff", duration: 0.3 },
//       "<"
//     );
// };
// const createAccordion = () => {
//   const acc = new Accordion(".team__list", {
//     beforeOpen: (element) => {
//       createAnimation(element);
//     },
//     beforeClose: (element) => {
//       createAnimationReverse(element);
//     },
//   });
// };
// const createLightbox = () => {
//   const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     openEffect: "none",
//     preload: false,
//   });
// };


main_createMobileMenu();
window.addEventListener("DOMContentLoaded", function () {
  modules_anchor(); // getTabs();

  main_createStickyHeader(); // createTabs();

  geo(); // createAccordion();
  // createSliders();
  // createLightbox();
  // makeListenerConsult();
  // createlawSlider();
  // createAccordionFaq();

  city();
  map();
});

/***/ })
/******/ ]);