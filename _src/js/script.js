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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function (e) {
  if (true) module.exports = e();else {}
}(function () {
  return function e(n, t, o) {
    function r(c, u) {
      if (!t[c]) {
        if (!n[c]) {
          var s = "function" == typeof require && require;
          if (!u && s) return require(c, !0);
          if (i) return i(c, !0);
          var a = new Error("Cannot find module '" + c + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var l = t[c] = {
          exports: {}
        };
        n[c][0].call(l.exports, function (e) {
          return r(n[c][1][e] || e);
        }, l, l.exports, e, n, t, o);
      }

      return t[c].exports;
    }

    for (var i = "function" == typeof require && require, c = 0; c < o.length; c++) r(o[c]);

    return r;
  }({
    1: [function (e, n, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.create = t.visible = void 0;

      var o = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = document.createElement("div");
        return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;
      },
          r = function (e, n) {
        var t = e.children;
        return 1 === t.length && t[0].tagName === n;
      },
          i = function (e) {
        return null != (e = e || document.querySelector(".basicLightbox")) && !0 === e.ownerDocument.body.contains(e);
      };

      t.visible = i;

      t.create = function (e, n) {
        var t = function (e, n) {
          var t = o('\n\t\t<div class="basicLightbox '.concat(n.className, '">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),
              i = t.querySelector(".basicLightbox__placeholder");
          e.forEach(function (e) {
            return i.appendChild(e);
          });
          var c = r(i, "IMG"),
              u = r(i, "VIDEO"),
              s = r(i, "IFRAME");
          return !0 === c && t.classList.add("basicLightbox--img"), !0 === u && t.classList.add("basicLightbox--video"), !0 === s && t.classList.add("basicLightbox--iframe"), t;
        }(e = function (e) {
          var n = "string" == typeof e,
              t = e instanceof HTMLElement == 1;
          if (!1 === n && !1 === t) throw new Error("Content must be a DOM element/node or string");
          return !0 === n ? Array.from(o(e, !0)) : "TEMPLATE" === e.tagName ? [e.content.cloneNode(!0)] : Array.from(e.children);
        }(e), n = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (null == (e = Object.assign({}, e)).closable && (e.closable = !0), null == e.className && (e.className = ""), null == e.onShow && (e.onShow = function () {}), null == e.onClose && (e.onClose = function () {}), "boolean" != typeof e.closable) throw new Error("Property `closable` must be a boolean");
          if ("string" != typeof e.className) throw new Error("Property `className` must be a string");
          if ("function" != typeof e.onShow) throw new Error("Property `onShow` must be a function");
          if ("function" != typeof e.onClose) throw new Error("Property `onClose` must be a function");
          return e;
        }(n)),
            c = function (e) {
          return !1 !== n.onClose(u) && function (e, n) {
            return e.classList.remove("basicLightbox--visible"), setTimeout(function () {
              return !1 === i(e) || e.parentElement.removeChild(e), n();
            }, 410), !0;
          }(t, function () {
            if ("function" == typeof e) return e(u);
          });
        };

        !0 === n.closable && t.addEventListener("click", function (e) {
          e.target === t && c();
        });
        var u = {
          element: function () {
            return t;
          },
          visible: function () {
            return i(t);
          },
          show: function (e) {
            return !1 !== n.onShow(u) && function (e, n) {
              return document.body.appendChild(e), setTimeout(function () {
                requestAnimationFrame(function () {
                  return e.classList.add("basicLightbox--visible"), n();
                });
              }, 10), !0;
            }(t, function () {
              if ("function" == typeof e) return e(u);
            });
          },
          close: c
        };
        return u;
      };
    }, {}]
  }, {}, [1])(1);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Accordion v3.3.2
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 * 
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */


!function (e) {
  var t = 0,
      n = function e(n, s) {
    var i = this,
        o = this,
        a = !1;
    if (Array.isArray(n)) return !!n.length && n.map(function (t) {
      return new e(t, s);
    });
    var r = {
      init: function () {
        this.options = Object.assign({
          duration: 600,
          ariaEnabled: !0,
          collapse: !0,
          showMultiple: !1,
          onlyChildNodes: !0,
          openOnInit: [],
          elementClass: "ac",
          triggerClass: "ac-trigger",
          panelClass: "ac-panel",
          activeClass: "is-active",
          beforeOpen: function () {},
          onOpen: function () {},
          beforeClose: function () {},
          onClose: function () {}
        }, s);
        var e = "string" == typeof n;
        this.container = e ? document.querySelector(n) : n, this.createDefinitions(), o.attachEvents();
      },
      createDefinitions: function () {
        var e = this,
            n = this.options,
            s = n.elementClass,
            i = n.openOnInit,
            o = n.onlyChildNodes ? this.container.childNodes : this.container.querySelectorAll(".".concat(s));
        this.elements = Array.from(o).filter(function (e) {
          return e.classList && e.classList.contains(s);
        }), this.firstElement = this.elements[0], this.lastElement = this.elements[this.elements.length - 1], this.elements.filter(function (e) {
          return !e.classList.contains("js-enabled");
        }).forEach(function (n) {
          n.classList.add("js-enabled"), e.generateIDs(n), e.setARIA(n), e.setTransition(n);
          var s = e.elements.indexOf(n);
          t++, i.includes(s) ? e.showElement(n, !1) : e.closeElement(n, !1);
        });
      },
      setTransition: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.options,
            s = n.duration,
            i = n.panelClass,
            o = e.querySelector(".".concat(i)),
            a = c("transitionDuration");
        o.style[a] = t ? null : "".concat(s, "ms");
      },
      generateIDs: function (e) {
        var n = this.options,
            s = n.triggerClass,
            i = n.panelClass,
            o = e.querySelector(".".concat(s)),
            a = e.querySelector(".".concat(i));
        e.setAttribute("id", "ac-".concat(t)), o.setAttribute("id", "ac-trigger-".concat(t)), a.setAttribute("id", "ac-panel-".concat(t));
      },
      removeIDs: function (e) {
        var t = this.options,
            n = t.triggerClass,
            s = t.panelClass,
            i = e.querySelector(".".concat(n)),
            o = e.querySelector(".".concat(s));
        e.removeAttribute("id"), i.removeAttribute("id"), o.removeAttribute("id");
      },
      setARIA: function (e) {
        var n = this.options,
            s = n.ariaEnabled,
            i = n.triggerClass,
            o = n.panelClass;

        if (s) {
          var a = e.querySelector(".".concat(i)),
              r = e.querySelector(".".concat(o));
          a.setAttribute("role", "button"), a.setAttribute("aria-controls", "ac-panel-".concat(t)), a.setAttribute("aria-disabled", !1), a.setAttribute("aria-expanded", !1), r.setAttribute("role", "region"), r.setAttribute("aria-labelledby", "ac-trigger-".concat(t));
        }
      },
      updateARIA: function (e, t) {
        var n = t.ariaExpanded,
            s = t.ariaDisabled,
            i = this.options,
            o = i.ariaEnabled,
            a = i.triggerClass;

        if (o) {
          var r = e.querySelector(".".concat(a));
          r.setAttribute("aria-expanded", n), r.setAttribute("aria-disabled", s);
        }
      },
      removeARIA: function (e) {
        var t = this.options,
            n = t.ariaEnabled,
            s = t.triggerClass,
            i = t.panelClass;

        if (n) {
          var o = e.querySelector(".".concat(s)),
              a = e.querySelector(".".concat(i));
          o.removeAttribute("role"), o.removeAttribute("aria-controls"), o.removeAttribute("aria-disabled"), o.removeAttribute("aria-expanded"), a.removeAttribute("role"), a.removeAttribute("aria-labelledby");
        }
      },
      focus: function (e, t) {
        e.preventDefault();
        var n = this.options.triggerClass;
        t.querySelector(".".concat(n)).focus();
      },
      focusFirstElement: function (e) {
        this.focus(e, this.firstElement), this.currFocusedIdx = 0;
      },
      focusLastElement: function (e) {
        this.focus(e, this.lastElement), this.currFocusedIdx = this.elements.length - 1;
      },
      focusNextElement: function (e) {
        var t = this.currFocusedIdx + 1;
        if (t > this.elements.length - 1) return this.focusFirstElement(e);
        this.focus(e, this.elements[t]), this.currFocusedIdx = t;
      },
      focusPrevElement: function (e) {
        var t = this.currFocusedIdx - 1;
        if (t < 0) return this.focusLastElement(e);
        this.focus(e, this.elements[t]), this.currFocusedIdx = t;
      },
      showElement: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            s = n.panelClass,
            i = n.activeClass,
            o = n.collapse,
            a = n.beforeOpen;
        t && a(e);
        var r = e.querySelector(".".concat(s)),
            c = r.scrollHeight;
        e.classList.add(i), requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            r.style.height = t ? "".concat(c, "px") : "auto";
          });
        }), this.updateARIA(e, {
          ariaExpanded: !0,
          ariaDisabled: !o
        });
      },
      closeElement: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = this.options,
            s = n.panelClass,
            i = n.activeClass,
            o = n.beforeClose,
            a = e.querySelector(".".concat(s)),
            r = a.scrollHeight;
        e.classList.remove(i), t ? (o(e), requestAnimationFrame(function () {
          a.style.height = "".concat(r, "px"), requestAnimationFrame(function () {
            a.style.height = 0;
          });
        })) : a.style.height = 0, this.updateARIA(e, {
          ariaExpanded: !1,
          ariaDisabled: !1
        });
      },
      toggleElement: function (e) {
        var t = this.options,
            n = t.activeClass,
            s = t.collapse,
            i = e.classList.contains(n);
        if (!i || s) return i ? this.closeElement(e) : this.showElement(e);
      },
      closeElements: function () {
        var e = this,
            t = this.options,
            n = t.activeClass;
        t.showMultiple || this.elements.forEach(function (t, s) {
          t.classList.contains(n) && s !== e.currFocusedIdx && e.closeElement(t);
        });
      },
      handleClick: function (e) {
        var t = this,
            n = e.currentTarget;
        this.elements.forEach(function (s, i) {
          s.contains(n) && "A" !== e.target.nodeName && (t.currFocusedIdx = i, t.closeElements(), t.focus(e, s), t.toggleElement(s));
        });
      },
      handleKeydown: function (e) {
        var t = 38,
            n = 40,
            s = 36,
            i = 35;

        switch (e.keyCode) {
          case t:
            return this.focusPrevElement(e);

          case n:
            return this.focusNextElement(e);

          case s:
            return this.focusFirstElement(e);

          case i:
            return this.focusLastElement(e);

          default:
            return null;
        }
      },
      handleTransitionEnd: function (e) {
        if ("height" === e.propertyName) {
          var t = this.options,
              n = t.onOpen,
              s = t.onClose,
              i = e.currentTarget,
              o = parseInt(i.style.height),
              a = this.elements.find(function (e) {
            return e.contains(i);
          });
          o > 0 ? (i.style.height = "auto", n(a)) : s(a);
        }
      }
    };
    this.attachEvents = function () {
      if (!a) {
        var e = r.options,
            t = e.triggerClass,
            n = e.panelClass;
        r.handleClick = r.handleClick.bind(r), r.handleKeydown = r.handleKeydown.bind(r), r.handleTransitionEnd = r.handleTransitionEnd.bind(r), r.elements.forEach(function (e) {
          var s = e.querySelector(".".concat(t)),
              i = e.querySelector(".".concat(n));
          s.addEventListener("click", r.handleClick), s.addEventListener("keydown", r.handleKeydown), i.addEventListener("webkitTransitionEnd", r.handleTransitionEnd), i.addEventListener("transitionend", r.handleTransitionEnd);
        }), a = !0;
      }
    }, this.detachEvents = function () {
      if (a) {
        var e = r.options,
            t = e.triggerClass,
            n = e.panelClass;
        r.elements.forEach(function (e) {
          var s = e.querySelector(".".concat(t)),
              i = e.querySelector(".".concat(n));
          s.removeEventListener("click", r.handleClick), s.removeEventListener("keydown", r.handleKeydown), i.removeEventListener("webkitTransitionEnd", r.handleTransitionEnd), i.removeEventListener("transitionend", r.handleTransitionEnd);
        }), a = !1;
      }
    }, this.toggle = function (e) {
      var t = r.elements[e];
      t && r.toggleElement(t);
    }, this.open = function (e) {
      var t = r.elements[e];
      t && r.showElement(t);
    }, this.openAll = function () {
      var e = r.options,
          t = e.activeClass,
          n = e.onOpen;
      r.elements.forEach(function (e) {
        e.classList.contains(t) || (r.showElement(e, !1), n(e));
      });
    }, this.close = function (e) {
      var t = r.elements[e];
      t && r.closeElement(t);
    }, this.closeAll = function () {
      var e = r.options,
          t = e.activeClass,
          n = e.onClose;
      r.elements.forEach(function (e) {
        e.classList.contains(t) && (r.closeElement(e, !1), n(e));
      });
    }, this.destroy = function () {
      i.detachEvents(), i.openAll(), r.elements.forEach(function (e) {
        r.removeIDs(e), r.removeARIA(e), r.setTransition(e, !0);
      }), a = !0;
    }, this.update = function () {
      r.createDefinitions(), i.detachEvents(), i.attachEvents();
    };

    var c = function (e) {
      return "string" == typeof document.documentElement.style[e] ? e : (e = l(e), e = "webkit".concat(e));
    },
        l = function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    };

    r.init();
  };

   true && void 0 !== module.exports ? module.exports = n : e.Accordion = n;
}(window);

/***/ }),
/* 2 */
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

__webpack_require__(10);

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
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Sticky = __webpack_require__(8);

module.exports = Sticky;

/***/ }),
/* 5 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  "use strict";

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
  }

  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function i(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function n(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }

  var s = Date.now();

  function l() {
    var e = {},
        t = !0,
        i = 0,
        n = arguments.length;
    "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);

    for (var s = function (i) {
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n]);
    }; i < n; i++) {
      var o = arguments[i];
      s(o);
    }

    return e;
  }

  function o(e, t) {
    if ((k(e) || e === window || e === document) && (e = [e]), A(e) || L(e) || (e = [e]), 0 != P(e)) if (A(e) && !L(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);else if (L(e)) for (var s in e) if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
  }

  function r(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        n = e[s] = e[s] || [],
        l = {
      all: n,
      evt: null,
      found: null
    };
    return t && i && P(n) > 0 && o(n, function (e, n) {
      if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
    }), l;
  }

  function a(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = t.onElement,
        n = t.withCallback,
        s = t.avoidDuplicate,
        l = void 0 === s || s,
        a = t.once,
        h = void 0 !== a && a,
        d = t.useCapture,
        c = void 0 !== d && d,
        u = arguments.length > 2 ? arguments[2] : void 0,
        g = i || [];

    function v(e) {
      T(n) && n.call(u, e, this), h && v.destroy();
    }

    return C(g) && (g = document.querySelectorAll(g)), v.destroy = function () {
      o(g, function (t) {
        var i = r(t, e, v);
        i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
      });
    }, o(g, function (t) {
      var i = r(t, e, v);
      (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
        eventName: e,
        fn: v
      }));
    }), v;
  }

  function h(e, t) {
    o(t.split(" "), function (t) {
      return e.classList.add(t);
    });
  }

  function d(e, t) {
    o(t.split(" "), function (t) {
      return e.classList.remove(t);
    });
  }

  function c(e, t) {
    return e.classList.contains(t);
  }

  function u(e, t) {
    for (; e !== document.body;) {
      if (!(e = e.parentElement)) return !1;
      if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
    }
  }

  function g(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e || "" === t) return !1;
    if ("none" == t) return T(i) && i(), !1;
    var n = x(),
        s = t.split(" ");
    o(s, function (t) {
      h(e, "g" + t);
    }), a(n, {
      onElement: e,
      avoidDuplicate: !1,
      once: !0,
      withCallback: function (e, t) {
        o(s, function (e) {
          d(t, "g" + e);
        }), T(i) && i();
      }
    });
  }

  function v(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
    e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
  }

  function f(e) {
    e.style.display = "block";
  }

  function p(e) {
    e.style.display = "none";
  }

  function m(e) {
    var t = document.createDocumentFragment(),
        i = document.createElement("div");

    for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);

    return t;
  }

  function y() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  function x() {
    var e,
        t = document.createElement("fakeelement"),
        i = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (e in i) if (void 0 !== t.style[e]) return i[e];
  }

  function b(e, t, i, n) {
    if (e()) t();else {
      var s;
      i || (i = 100);
      var l = setInterval(function () {
        e() && (clearInterval(l), s && clearTimeout(s), t());
      }, i);
      n && (s = setTimeout(function () {
        clearInterval(l);
      }, n));
    }
  }

  function S(e, t, i) {
    if (I(e)) console.error("Inject assets error");else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i();else {
      var n;

      if (-1 !== e.indexOf(".css")) {
        if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
        var s = document.getElementsByTagName("head")[0],
            l = s.querySelectorAll('link[rel="stylesheet"]'),
            o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i());
      }

      if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
        if (T(i)) {
          if (C(t)) return b(function () {
            return void 0 !== window[t];
          }, function () {
            i();
          }), !1;
          i();
        }
      } else {
        var r = document.createElement("script");
        r.type = "text/javascript", r.src = e, r.onload = function () {
          if (T(i)) {
            if (C(t)) return b(function () {
              return void 0 !== window[t];
            }, function () {
              i();
            }), !1;
            i();
          }
        }, document.body.appendChild(r);
      }
    }
  }

  function w() {
    return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }

  function T(e) {
    return "function" == typeof e;
  }

  function C(e) {
    return "string" == typeof e;
  }

  function k(e) {
    return !(!e || !e.nodeType || 1 != e.nodeType);
  }

  function E(e) {
    return Array.isArray(e);
  }

  function A(e) {
    return e && e.length && isFinite(e.length);
  }

  function L(t) {
    return "object" === e(t) && null != t && !T(t) && !E(t);
  }

  function I(e) {
    return null == e;
  }

  function O(e, t) {
    return null !== e && hasOwnProperty.call(e, t);
  }

  function P(e) {
    if (L(e)) {
      if (e.keys) return e.keys().length;
      var t = 0;

      for (var i in e) O(e, i) && t++;

      return t;
    }

    return e.length;
  }

  function z(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }

  function M() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
        t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
    if (!t.length) return !1;
    if (1 == t.length) return t[0];
    "string" == typeof e && (e = parseInt(e));
    var i = e < 0 ? 1 : e + 1;
    i > t.length && (i = "1");
    var n = [];
    o(t, function (e) {
      n.push(e.getAttribute("data-taborder"));
    });
    var s = n.filter(function (e) {
      return e >= parseInt(i);
    }),
        l = s.sort()[0];
    return document.querySelector('.gbtn[data-taborder="'.concat(l, '"]'));
  }

  function X(e) {
    if (e.events.hasOwnProperty("keyboard")) return !1;
    e.events.keyboard = a("keydown", {
      onElement: window,
      withCallback: function (t, i) {
        var n = (t = t || window.event).keyCode;

        if (9 == n) {
          var s = document.querySelector(".gbtn.focused");

          if (!s) {
            var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
            if ("input" == l || "textarea" == l || "button" == l) return;
          }

          t.preventDefault();
          var o = document.querySelectorAll(".gbtn[data-taborder]");
          if (!o || o.length <= 0) return;

          if (!s) {
            var r = M();
            return void (r && (r.focus(), h(r, "focused")));
          }

          var a = M(s.getAttribute("data-taborder"));
          d(s, "focused"), a && (a.focus(), h(a, "focused"));
        }

        39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
      }
    });
  }

  function Y(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y);
  }

  function q(e, t) {
    var i = function (e, t) {
      var i = Y(e) * Y(t);
      if (0 === i) return 0;

      var n = function (e, t) {
        return e.x * t.x + e.y * t.y;
      }(e, t) / i;

      return n > 1 && (n = 1), Math.acos(n);
    }(e, t);

    return function (e, t) {
      return e.x * t.y - t.x * e.y;
    }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
  }

  var N = function () {
    function e(i) {
      t(this, e), this.handlers = [], this.el = i;
    }

    return n(e, [{
      key: "add",
      value: function (e) {
        this.handlers.push(e);
      }
    }, {
      key: "del",
      value: function (e) {
        e || (this.handlers = []);

        for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1);
      }
    }, {
      key: "dispatch",
      value: function () {
        for (var e = 0, t = this.handlers.length; e < t; e++) {
          var i = this.handlers[e];
          "function" == typeof i && i.apply(this.el, arguments);
        }
      }
    }]), e;
  }();

  function D(e, t) {
    var i = new N(e);
    return i.add(t), i;
  }

  var _ = function () {
    function e(i, n) {
      t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
        x: null,
        y: null
      }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;

      var s = function () {};

      this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
        x: null,
        y: null
      };
    }

    return n(e, [{
      key: "start",
      value: function (e) {
        if (e.touches) {
          if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());else {
            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
            var t = this.preV;

            if (e.touches.length > 1) {
              this._cancelLongTap(), this._cancelSingleTap();
              var i = {
                x: e.touches[1].pageX - this.x1,
                y: e.touches[1].pageY - this.y1
              };
              t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element);
            }

            this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
              this.longTap.dispatch(e, this.element), this._preventTap = !0;
            }.bind(this), 750);
          }
        }
      }
    }, {
      key: "move",
      value: function (e) {
        if (e.touches) {
          var t = this.preV,
              i = e.touches.length,
              n = e.touches[0].pageX,
              s = e.touches[0].pageY;

          if (this.isDoubleTap = !1, i > 1) {
            var l = e.touches[1].pageX,
                o = e.touches[1].pageY,
                r = {
              x: e.touches[1].pageX - n,
              y: e.touches[1].pageY - s
            };
            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
          } else {
            if (null !== this.x2) {
              e.deltaX = n - this.x2, e.deltaY = s - this.y2;
              var a = Math.abs(this.x1 - this.x2),
                  h = Math.abs(this.y1 - this.y2);
              (a > 10 || h > 10) && (this._preventTap = !0);
            } else e.deltaX = 0, e.deltaY = 0;

            this.pressMove.dispatch(e, this.element);
          }

          this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
        }
      }
    }, {
      key: "end",
      value: function (e) {
        if (e.changedTouches) {
          this._cancelLongTap();

          var t = this;
          e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function () {
            t.swipe.dispatch(e, t.element);
          }, 0)) : (this.tapTimeout = setTimeout(function () {
            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
          }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function () {
            t.singleTap.dispatch(e, t.element);
          }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
        }
      }
    }, {
      key: "cancelAll",
      value: function () {
        this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
      }
    }, {
      key: "cancel",
      value: function (e) {
        this.cancelAll(), this.touchCancel.dispatch(e, this.element);
      }
    }, {
      key: "_cancelLongTap",
      value: function () {
        clearTimeout(this.longTapTimeout);
      }
    }, {
      key: "_cancelSingleTap",
      value: function () {
        clearTimeout(this.singleTapTimeout);
      }
    }, {
      key: "_swipeDirection",
      value: function (e, t, i, n) {
        return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
      }
    }, {
      key: "on",
      value: function (e, t) {
        this[e] && this[e].add(t);
      }
    }, {
      key: "off",
      value: function (e, t) {
        this[e] && this[e].del(t);
      }
    }, {
      key: "destroy",
      value: function () {
        return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
      }
    }]), e;
  }();

  function W(e) {
    var t = function () {
      var e,
          t = document.createElement("fakeelement"),
          i = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd"
      };

      for (e in i) if (void 0 !== t.style[e]) return i[e];
    }(),
        i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
        s = u(n, ".ginner-container"),
        l = e.querySelector(".gslide-description");

    i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
      onElement: n,
      once: !0,
      withCallback: function (e, t) {
        d(n, "greset");
      }
    }), n.style.opacity = "", l && (l.style.opacity = "");
  }

  function B(e) {
    if (e.events.hasOwnProperty("touch")) return !1;
    var t,
        i,
        n,
        s = y(),
        l = s.width,
        o = s.height,
        r = !1,
        a = null,
        g = null,
        f = null,
        p = !1,
        m = 1,
        x = 1,
        b = !1,
        S = !1,
        w = null,
        T = null,
        C = null,
        k = null,
        E = 0,
        A = 0,
        L = !1,
        I = !1,
        O = {},
        P = {},
        z = 0,
        M = 0,
        X = document.getElementById("glightbox-slider"),
        Y = document.querySelector(".goverlay"),
        q = new _(X, {
      touchStart: function (t) {
        if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
          if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, z = t.targetTouches[0].clientX, M = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
          t.preventDefault();
        }
      },
      touchMove: function (s) {
        if (r && (P = s.targetTouches[0], !b && !S)) {
          if (n && n.offsetHeight > o) {
            var a = O.pageX - P.pageX;
            if (Math.abs(a) <= 13) return !1;
          }

          p = !0;
          var h,
              d = s.targetTouches[0].clientX,
              c = s.targetTouches[0].clientY,
              u = z - d,
              m = M - c;
          if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
          v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
        }
      },
      touchEnd: function () {
        if (r) {
          if (p = !1, S || b) return C = w, void (k = T);
          var t = Math.abs(parseInt(A)),
              i = Math.abs(parseInt(E));
          if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
          e.close();
        }
      },
      multipointEnd: function () {
        setTimeout(function () {
          b = !1;
        }, 50);
      },
      multipointStart: function () {
        b = !0, m = x || 1;
      },
      pinch: function (e) {
        if (!f || p) return !1;
        b = !0, f.scaleX = f.scaleY = m * e.zoom;
        var t = m * e.zoom;
        if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
        t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
      },
      pressMove: function (e) {
        if (S && !b) {
          var t = P.pageX - O.pageX,
              i = P.pageY - O.pageY;
          C && (t += C), k && (i += k), w = t, T = i;
          var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
          x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n);
        }
      },
      swipe: function (t) {
        if (!S) if (b) b = !1;else {
          if ("Left" == t.direction) {
            if (e.index == e.elements.length - 1) return W(g);
            e.nextSlide();
          }

          if ("Right" == t.direction) {
            if (0 == e.index) return W(g);
            e.prevSlide();
          }
        }
      }
    });
    e.events.touch = q;
  }

  var H = function () {
    function e(i, n) {
      var s = this,
          l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
      this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function (e) {
        return s.dragStart(e);
      }, !1), this.img.addEventListener("mouseup", function (e) {
        return s.dragEnd(e);
      }, !1), this.img.addEventListener("mousemove", function (e) {
        return s.drag(e);
      }, !1), this.img.addEventListener("click", function (e) {
        return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
      }, !1), this.img.setZoomEvents = !0;
    }

    return n(e, [{
      key: "zoomIn",
      value: function () {
        var e = this.widowWidth();

        if (!(this.zoomedIn || e <= 768)) {
          var t = this.img;

          if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
            var i = e / 2 - t.naturalWidth / 2;
            this.setTranslate(this.img.parentNode, i, 0);
          }

          this.slide.classList.add("zoomed"), this.zoomedIn = !0;
        }
      }
    }, {
      key: "zoomOut",
      value: function () {
        this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
      }
    }, {
      key: "dragStart",
      value: function (e) {
        e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
      }
    }, {
      key: "dragEnd",
      value: function (e) {
        var t = this;
        e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function () {
          t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
        }, 100);
      }
    }, {
      key: "drag",
      value: function (e) {
        this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
      }
    }, {
      key: "onMove",
      value: function (e) {
        if (this.zoomedIn) {
          var t = e.clientX - this.img.naturalWidth / 2,
              i = e.clientY - this.img.naturalHeight / 2;
          this.setTranslate(this.img, t, i);
        }
      }
    }, {
      key: "setTranslate",
      value: function (e, t, i) {
        e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
      }
    }, {
      key: "widowWidth",
      value: function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }]), e;
  }(),
      V = function () {
    function e() {
      var i = this,
          n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e);
      var s = n.dragEl,
          l = n.toleranceX,
          o = void 0 === l ? 40 : l,
          r = n.toleranceY,
          a = void 0 === r ? 65 : r,
          h = n.slide,
          d = void 0 === h ? null : h,
          c = n.instance,
          u = void 0 === c ? null : c;
      this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function (e) {
        return i.dragStart(e);
      }, !1), this.el.addEventListener("mouseup", function (e) {
        return i.dragEnd(e);
      }, !1), this.el.addEventListener("mousemove", function (e) {
        return i.drag(e);
      }, !1);
    }

    return n(e, [{
      key: "dragStart",
      value: function (e) {
        if (this.slide.classList.contains("zoomed")) this.active = !1;else {
          "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
          var t = e.target.nodeName.toLowerCase();
          e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")));
        }
      }
    }, {
      key: "dragEnd",
      value: function (e) {
        var t = this;
        e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function () {
          t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
        }, 100);
      }
    }, {
      key: "drag",
      value: function (e) {
        if (this.active) {
          e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
          var t = Math.abs(this.currentX),
              i = Math.abs(this.currentY);

          if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
            var n = this.shouldChange();
            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
          }

          if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
            var s = this.shouldClose();
            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
          }
        }
      }
    }, {
      key: "shouldChange",
      value: function () {
        var e = !1;

        if (Math.abs(this.currentX) >= this.toleranceX) {
          var t = this.currentX > 0 ? "right" : "left";
          ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
        }

        return e;
      }
    }, {
      key: "shouldClose",
      value: function () {
        var e = !1;
        return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
      }
    }, {
      key: "setTranslate",
      value: function (e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
      }
    }]), e;
  }();

  function j(e, t, i, n) {
    var s = e.querySelector(".gslide-media"),
        l = new Image(),
        o = "gSlideTitle_" + i,
        r = "gSlideDesc_" + i;
    l.addEventListener("load", function () {
      T(n) && n();
    }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
  }

  function F(e, t, i, n) {
    var s = this,
        l = e.querySelector(".ginner-container"),
        o = "gvideo" + i,
        r = e.querySelector(".gslide-media"),
        a = this.getAllPlayers();
    h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
    var d = e.querySelector(".gvideo-wrapper");
    S(this.settings.plyr.css, "Plyr");
    var c = t.href,
        u = location.protocol.replace(":", ""),
        g = "",
        v = "",
        f = !1;
    "file" == u && (u = "http"), r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", function () {
      if (c.match(/vimeo\.com\/([0-9]*)/)) {
        var l = /vimeo.*\/(\d+)/i.exec(c);
        g = "vimeo", v = l[1];
      }

      if (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
        var r = function (e) {
          var t = "";
          t = void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (t = e[2].split(/[^0-9a-z_\-]/i))[0] : e;
          return t;
        }(c);

        g = "youtube", v = r;
      }

      if (null !== c.match(/\.(mp4|ogg|webm|mov)$/)) {
        g = "local";
        var u = '<video id="' + o + '" ';
        u += 'style="background:#000; max-width: '.concat(t.width, ';" '), u += 'preload="metadata" ', u += 'x-webkit-airplay="allow" ', u += "playsinline ", u += "controls ", u += 'class="gvideo-local">';
        var p = c.toLowerCase().split(".").pop(),
            y = {
          mp4: "",
          ogg: "",
          webm: ""
        };

        for (var x in y[p = "mov" == p ? "mp4" : p] = c, y) if (y.hasOwnProperty(x)) {
          var S = y[x];
          t.hasOwnProperty(x) && (S = t[x]), "" !== S && (u += '<source src="'.concat(S, '" type="video/').concat(x, '">'));
        }

        f = m(u += "</video>");
      }

      var w = f || m('<div id="'.concat(o, '" data-plyr-provider="').concat(g, '" data-plyr-embed-id="').concat(v, '"></div>'));
      h(d, "".concat(g, "-video gvideo")), d.appendChild(w), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
      var C = O(s.settings.plyr, "config") ? s.settings.plyr.config : {},
          k = new Plyr("#" + o, C);
      k.on("ready", function (e) {
        var t = e.detail.plyr;
        a[o] = t, T(n) && n();
      }), b(function () {
        return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
      }, function () {
        s.resize(e);
      }), k.on("enterfullscreen", R), k.on("exitfullscreen", R);
    });
  }

  function R(e) {
    var t = u(e.target, ".gslide-media");
    "enterfullscreen" == e.type && h(t, "fullscreen"), "exitfullscreen" == e.type && d(t, "fullscreen");
  }

  function G(e, t, i, n) {
    var s,
        l = this,
        o = e.querySelector(".gslide-media"),
        r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
        d = !(!O(t, "content") || !t.content) && t.content;

    if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
      "none" == d.style.display && (d.style.display = "block");
      var c = document.createElement("div");
      c.className = "ginlined-content", c.appendChild(d), s = c;
    }

    if (r) {
      var u = document.getElementById(r);
      if (!u) return !1;
      var g = u.cloneNode(!0);
      g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g;
    }

    if (!s) return console.error("Unable to append inline slide content", t), !1;
    o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
      onElement: o.querySelectorAll(".gtrigger-close"),
      withCallback: function (e) {
        e.preventDefault(), l.close();
      }
    }), T(n) && n();
  }

  function Z(e, t, i, n) {
    var s = e.querySelector(".gslide-media"),
        l = function (e) {
      var t = e.url,
          i = e.allow,
          n = e.callback,
          s = e.appendTo,
          l = document.createElement("iframe");
      return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function () {
        h(l, "node-ready"), T(n) && n();
      }, s && s.appendChild(l), l;
    }({
      url: t.href,
      callback: n
    });

    s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
  }

  var $ = function () {
    function e() {
      var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.defaults = {
        href: "",
        sizes: "",
        srcset: "",
        title: "",
        type: "",
        description: "",
        alt: "",
        descPosition: "bottom",
        effect: "",
        width: "",
        height: "",
        content: !1,
        zoomable: !0,
        draggable: !0
      }, L(i) && (this.defaults = l(this.defaults, i));
    }

    return n(e, [{
      key: "sourceType",
      value: function (e) {
        var t = e;
        if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
        if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
        if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
        if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
        if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
        if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
        return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
      }
    }, {
      key: "parseConfig",
      value: function (e, t) {
        var i = this,
            n = l({
          descPosition: t.descPosition
        }, this.defaults);

        if (L(e) && !k(e)) {
          O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
          var s = l(n, e);
          return this.setSize(s, t), s;
        }

        var r = "",
            a = e.getAttribute("data-glightbox"),
            h = e.nodeName.toLowerCase();

        if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, function (s, l) {
          O(t, l) && "width" !== l && (n[l] = t[l]);
          var o = e.dataset[l];
          I(o) || (n[l] = i.sanitizeValue(o));
        }), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
          if (!n.title && "a" == h) {
            var d = e.title;
            I(d) || "" === d || (n.title = d);
          }

          if (!n.title && "img" == h) {
            var c = e.alt;
            I(c) || "" === c || (n.title = c);
          }
        } else {
          var u = [];
          o(n, function (e, t) {
            u.push(";\\s?" + t);
          }), u = u.join("\\s?:|"), "" !== a.trim() && o(n, function (e, t) {
            var s = a,
                l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"),
                o = s.match(l);

            if (o && o.length && o[1]) {
              var r = o[1].trim().replace(/;\s*$/, "");
              n[t] = i.sanitizeValue(r);
            }
          });
        }

        if (n.description && "." === n.description.substring(0, 1)) {
          var g;

          try {
            g = document.querySelector(n.description).innerHTML;
          } catch (e) {
            if (!(e instanceof DOMException)) throw e;
          }

          g && (n.description = g);
        }

        if (!n.description) {
          var v = e.querySelector(".glightbox-desc");
          v && (n.description = v.innerHTML);
        }

        return this.setSize(n, t, e), this.slideConfig = n, n;
      }
    }, {
      key: "setSize",
      value: function (e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
            s = this.checkSize(t.height);
        return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
      }
    }, {
      key: "checkSize",
      value: function (e) {
        return z(e) ? "".concat(e, "px") : e;
      }
    }, {
      key: "sanitizeValue",
      value: function (e) {
        return "true" !== e && "false" !== e ? e : "true" === e;
      }
    }]), e;
  }(),
      U = function () {
    function e(i, n, s) {
      t(this, e), this.element = i, this.instance = n, this.index = s;
    }

    return n(e, [{
      key: "setContent",
      value: function () {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (c(t, "loaded")) return !1;
        var n = this.instance.settings,
            s = this.slideConfig,
            l = w();
        T(n.beforeSlideLoad) && n.beforeSlideLoad({
          index: this.index,
          slide: t,
          player: !1
        });
        var o = s.type,
            r = s.descPosition,
            a = t.querySelector(".gslide-media"),
            d = t.querySelector(".gslide-title"),
            u = t.querySelector(".gslide-desc"),
            g = t.querySelector(".gdesc-inner"),
            v = i,
            f = "gSlideTitle_" + this.index,
            p = "gSlideDesc_" + this.index;

        if (T(n.afterSlideLoad) && (v = function () {
          T(i) && i(), n.afterSlideLoad({
            index: e.index,
            slide: t,
            player: e.instance.getSlidePlayerInstance(e.index)
          });
        }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
          if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [t, s, this.index, v]), void (s.draggable && new V({
            dragEl: t.querySelector(".gslide-inline"),
            toleranceX: n.dragToleranceX,
            toleranceY: n.dragToleranceY,
            slide: t,
            instance: this.instance
          }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, function () {
            var i = t.querySelector("img");
            s.draggable && new V({
              dragEl: i,
              toleranceX: n.dragToleranceX,
              toleranceY: n.dragToleranceY,
              slide: t,
              instance: e.instance
            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, function () {
              e.instance.resize();
            })), T(v) && v();
          }));
          Z.apply(this, [t, s, this.index, v]);
        } else F.apply(this.instance, [t, s, this.index, v]);
      }
    }, {
      key: "slideShortDesc",
      value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = document.createElement("div");
        n.innerHTML = e;
        var s = n.innerText,
            l = i;
        if ((e = s.trim()).length <= t) return e;
        var o = e.substr(0, t - 1);
        return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
      }
    }, {
      key: "descriptionEvents",
      value: function (e, t) {
        var i = this,
            n = e.querySelector(".desc-more");
        if (!n) return !1;
        a("click", {
          onElement: n,
          withCallback: function (e, n) {
            e.preventDefault();
            var s = document.body,
                l = u(n, ".gslide-desc");
            if (!l) return !1;
            l.innerHTML = t.description, h(s, "gdesc-open");
            var o = a("click", {
              onElement: [s, u(l, ".gslide-description")],
              withCallback: function (e, n) {
                "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function () {
                  d(s, "gdesc-closed");
                }, 400), o.destroy());
              }
            });
          }
        });
      }
    }, {
      key: "create",
      value: function () {
        return m(this.instance.settings.slideHTML);
      }
    }, {
      key: "getConfig",
      value: function () {
        k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
        var e = new $(this.instance.settings.slideExtraAttributes);
        return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
      }
    }]), e;
  }(),
      J = w(),
      K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
      Q = document.getElementsByTagName("html")[0],
      ee = {
    selector: ".glightbox",
    elements: null,
    skin: "clean",
    theme: "clean",
    closeButton: !0,
    startAt: null,
    autoplayVideos: !0,
    autofocusVideos: !0,
    descPosition: "bottom",
    width: "900px",
    height: "506px",
    videosWidth: "960px",
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    slideExtraAttributes: null,
    onOpen: null,
    onClose: null,
    loop: !1,
    zoomable: !0,
    draggable: !0,
    dragAutoSnap: !1,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: !0,
    oneSlidePerOpen: !1,
    touchNavigation: !0,
    touchFollowAxis: !0,
    keyboardNavigation: !0,
    closeOnOutsideClick: !0,
    plugins: !1,
    plyr: {
      css: "https://cdn.plyr.io/3.6.8/plyr.css",
      js: "https://cdn.plyr.io/3.6.8/plyr.js",
      config: {
        ratio: "16:9",
        fullscreen: {
          enabled: !0,
          iosNative: !0
        },
        youtube: {
          noCookie: !0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          transparent: !1
        }
      }
    },
    openEffect: "zoom",
    closeEffect: "zoom",
    slideEffect: "slide",
    moreText: "See more",
    moreLength: 60,
    cssEfects: {
      fade: {
        in: "fadeIn",
        out: "fadeOut"
      },
      zoom: {
        in: "zoomIn",
        out: "zoomOut"
      },
      slide: {
        in: "slideInRight",
        out: "slideOutLeft"
      },
      slideBack: {
        in: "slideInLeft",
        out: "slideOutRight"
      },
      none: {
        in: "none",
        out: "none"
      }
    },
    svg: {
      close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    },
    slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
    lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
  },
      te = function () {
    function e() {
      var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
    }

    return n(e, [{
      key: "init",
      value: function () {
        var e = this,
            t = this.getSelector();
        t && (this.baseEvents = a("click", {
          onElement: t,
          withCallback: function (t, i) {
            t.preventDefault(), e.open(i);
          }
        })), this.elements = this.getElements();
      }
    }, {
      key: "open",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (0 == this.elements.length) return !1;
        this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
        var i = z(t) ? t : this.settings.startAt;

        if (k(e)) {
          var n = e.getAttribute("data-gallery");
          n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
        }

        z(i) || (i = 0), this.build(), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
        var s = document.body,
            l = window.innerWidth - document.documentElement.clientWidth;

        if (l > 0) {
          var o = document.createElement("style");
          o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer");
        }

        h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
      }
    }, {
      key: "openAt",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.open(null, e);
      }
    }, {
      key: "showSlide",
      value: function () {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        f(this.loader), this.index = parseInt(t);
        var n = this.slidesContainer.querySelector(".current");
        n && d(n, "current"), this.slideAnimateOut();
        var s = this.slidesContainer.querySelectorAll(".gslide")[t];
        if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader);else {
          f(this.loader);
          var l = this.elements[t],
              o = {
            index: this.index,
            slide: s,
            slideNode: s,
            slideConfig: l.slideConfig,
            slideIndex: this.index,
            trigger: l.node,
            player: null
          };
          this.trigger("slide_before_load", o), l.instance.setContent(s, function () {
            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
          });
        }
        this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
      }
    }, {
      key: "preloadSlide",
      value: function (e) {
        var t = this;
        if (e < 0 || e > this.elements.length - 1) return !1;
        if (I(this.elements[e])) return !1;
        var i = this.slidesContainer.querySelectorAll(".gslide")[e];
        if (c(i, "loaded")) return !1;
        var n = this.elements[e],
            s = n.type,
            l = {
          index: e,
          slide: i,
          slideNode: i,
          slideConfig: n.slideConfig,
          slideIndex: e,
          trigger: n.node,
          player: null
        };
        this.trigger("slide_before_load", l), "video" == s || "external" == s ? setTimeout(function () {
          n.instance.setContent(i, function () {
            t.trigger("slide_after_load", l);
          });
        }, 200) : n.instance.setContent(i, function () {
          t.trigger("slide_after_load", l);
        });
      }
    }, {
      key: "prevSlide",
      value: function () {
        this.goToSlide(this.index - 1);
      }
    }, {
      key: "nextSlide",
      value: function () {
        this.goToSlide(this.index + 1);
      }
    }, {
      key: "goToSlide",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
        e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
      }
    }, {
      key: "insertSlide",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        t < 0 && (t = this.elements.length);
        var i = new U(e, this, t),
            n = i.getConfig(),
            s = l({}, n),
            o = i.create(),
            r = this.elements.length - 1;
        s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
        var a = null,
            h = null;

        if (this.slidesContainer) {
          if (t > r) this.slidesContainer.appendChild(o);else {
            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
            this.slidesContainer.insertBefore(o, d);
          }
          (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
        }

        this.trigger("slide_inserted", {
          index: t,
          slide: a,
          slideNode: a,
          slideConfig: n,
          slideIndex: t,
          trigger: null,
          player: h
        }), T(this.settings.slideInserted) && this.settings.slideInserted({
          index: t,
          slide: a,
          player: h
        });
      }
    }, {
      key: "removeSlide",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        if (e < 0 || e > this.elements.length - 1) return !1;
        var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
        t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e);
      }
    }, {
      key: "slideAnimateIn",
      value: function (e, t) {
        var i = this,
            n = e.querySelector(".gslide-media"),
            s = e.querySelector(".gslide-description"),
            l = {
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          slideNode: this.prevActiveSlide,
          slideIndex: this.prevActiveSlide,
          slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
          trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        },
            o = {
          index: this.index,
          slide: this.activeSlide,
          slideNode: this.activeSlide,
          slideConfig: this.elements[this.index].slideConfig,
          slideIndex: this.index,
          trigger: this.elements[this.index].node,
          player: this.getSlidePlayerInstance(this.index)
        };
        if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, function () {
          i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
            prev: l,
            current: o
          }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o]);
        });else {
          var r = this.settings.slideEffect,
              a = "none" !== r ? this.settings.cssEfects[r].in : r;
          this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, function () {
            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
              prev: l,
              current: o
            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o]);
          });
        }
        setTimeout(function () {
          i.resize(e);
        }, 100), h(e, "current");
      }
    }, {
      key: "slideAnimateOut",
      value: function () {
        if (!this.prevActiveSlide) return !1;
        var e = this.prevActiveSlide;
        d(e, this.effectsClasses), h(e, "prev");
        var t = this.settings.slideEffect,
            i = "none" !== t ? this.settings.cssEfects[t].out : t;
        this.slidePlayerPause(e), this.trigger("slide_before_change", {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlideIndex,
            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideIndex: this.index,
            slideConfig: this.elements[this.index].slideConfig,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          }
        }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        }, {
          index: this.index,
          slide: this.activeSlide,
          player: this.getSlidePlayerInstance(this.index)
        }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, function () {
          var t = e.querySelector(".ginner-container"),
              i = e.querySelector(".gslide-media"),
              n = e.querySelector(".gslide-description");
          t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev");
        });
      }
    }, {
      key: "getAllPlayers",
      value: function () {
        return this.videoPlayers;
      }
    }, {
      key: "getSlidePlayerInstance",
      value: function (e) {
        var t = "gvideo" + e,
            i = this.getAllPlayers();
        return !(!O(i, t) || !i[t]) && i[t];
      }
    }, {
      key: "stopSlideVideo",
      value: function (e) {
        if (k(e)) {
          var t = e.querySelector(".gvideo-wrapper");
          t && (e = t.getAttribute("data-index"));
        }

        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var i = this.getSlidePlayerInstance(e);
        i && i.playing && i.pause();
      }
    }, {
      key: "slidePlayerPause",
      value: function (e) {
        if (k(e)) {
          var t = e.querySelector(".gvideo-wrapper");
          t && (e = t.getAttribute("data-index"));
        }

        var i = this.getSlidePlayerInstance(e);
        i && i.playing && i.pause();
      }
    }, {
      key: "playSlideVideo",
      value: function (e) {
        if (k(e)) {
          var t = e.querySelector(".gvideo-wrapper");
          t && (e = t.getAttribute("data-index"));
        }

        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var i = this.getSlidePlayerInstance(e);
        i && !i.playing && i.play();
      }
    }, {
      key: "slidePlayerPlay",
      value: function (e) {
        if (k(e)) {
          var t = e.querySelector(".gvideo-wrapper");
          t && (e = t.getAttribute("data-index"));
        }

        var i = this.getSlidePlayerInstance(e);
        i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus());
      }
    }, {
      key: "setElements",
      value: function (e) {
        var t = this;
        this.settings.elements = !1;
        var i = [];
        e && e.length && o(e, function (e, n) {
          var s = new U(e, t, n),
              o = s.getConfig(),
              r = l({}, o);
          r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
        }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function () {
          var e = m(t.settings.slideHTML);
          t.slidesContainer.appendChild(e);
        }), this.showSlide(0, !0)));
      }
    }, {
      key: "getElementIndex",
      value: function (e) {
        var t = !1;
        return o(this.elements, function (i, n) {
          if (O(i, "node") && i.node == e) return t = n, !0;
        }), t;
      }
    }, {
      key: "getElements",
      value: function () {
        var e = this,
            t = [];
        this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function (i, n) {
          var s = new U(i, e, n),
              o = s.getConfig(),
              r = l({}, o);
          r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
        });
        var i = !1;
        return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, function (i, n) {
          var s = new U(i, e, n),
              o = s.getConfig(),
              r = l({}, o);
          r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
        }), t) : t;
      }
    }, {
      key: "getGalleryElements",
      value: function (e, t) {
        return e.filter(function (e) {
          return e.gallery == t;
        });
      }
    }, {
      key: "getSelector",
      value: function () {
        return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
      }
    }, {
      key: "getActiveSlide",
      value: function () {
        return this.slidesContainer.querySelectorAll(".gslide")[this.index];
      }
    }, {
      key: "getActiveSlideIndex",
      value: function () {
        return this.index;
      }
    }, {
      key: "getAnimationClasses",
      value: function () {
        var e = [];

        for (var t in this.settings.cssEfects) if (this.settings.cssEfects.hasOwnProperty(t)) {
          var i = this.settings.cssEfects[t];
          e.push("g".concat(i.in)), e.push("g".concat(i.out));
        }

        return e.join(" ");
      }
    }, {
      key: "build",
      value: function () {
        var e = this;
        if (this.built) return !1;
        var t = document.body.childNodes,
            i = [];
        o(t, function (e) {
          e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
        });
        var n = O(this.settings.svg, "next") ? this.settings.svg.next : "",
            s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "",
            l = O(this.settings.svg, "close") ? this.settings.svg.close : "",
            r = this.settings.lightboxHTML;
        r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
        var d = document.getElementById("glightbox-body");
        this.modal = d;
        var g = d.querySelector(".gclose");
        this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
          onElement: g,
          withCallback: function (t, i) {
            t.preventDefault(), e.close();
          }
        })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
          onElement: this.nextButton,
          withCallback: function (t, i) {
            t.preventDefault(), e.nextSlide();
          }
        })), this.prevButton && (this.events.prev = a("click", {
          onElement: this.prevButton,
          withCallback: function (t, i) {
            t.preventDefault(), e.prevSlide();
          }
        })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
          onElement: d,
          withCallback: function (t, i) {
            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close();
          }
        })), o(this.elements, function (t, i) {
          e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
        }), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
          onElement: window,
          withCallback: function () {
            e.resize();
          }
        }), this.built = !0;
      }
    }, {
      key: "resize",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;

        if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
          var t = y(),
              i = e.querySelector(".gvideo-wrapper"),
              n = e.querySelector(".gslide-image"),
              s = this.slideDescription,
              l = t.width,
              o = t.height;

          if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
            var r = !1;
            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n) if (l <= 768) n.querySelector("img");else if (r) {
              var a = s.offsetHeight,
                  u = n.querySelector("img");
              u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
            }

            if (i) {
              var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";

              if (!g) {
                var v = i.clientWidth,
                    f = i.clientHeight,
                    p = v / f;
                g = "".concat(v / p, ":").concat(f / p);
              }

              var m = g.split(":"),
                  x = this.settings.videosWidth,
                  b = this.settings.videosWidth,
                  S = (b = z(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));

              if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                var w = i.offsetWidth,
                    T = i.offsetHeight,
                    C = o / T,
                    k = {
                  width: w * C,
                  height: T * C
                };
                i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
              } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
            }
          }
        }
      }
    }, {
      key: "reload",
      value: function () {
        this.init();
      }
    }, {
      key: "updateNavigationClasses",
      value: function () {
        var e = this.loop();
        d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled");
      }
    }, {
      key: "loop",
      value: function () {
        var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
        return e = O(this.settings, "loop") ? this.settings.loop : e, e;
      }
    }, {
      key: "close",
      value: function () {
        var e = this;

        if (!this.lightboxOpen) {
          if (this.events) {
            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();

            this.events = null;
          }

          return !1;
        }

        if (this.closing) return !1;
        this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function (e) {
          e.removeAttribute("aria-hidden");
        }), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
          if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();

            e.events = null;
          }

          var i = document.body;
          d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
          var n = document.querySelector(".gcss-styles");
          n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
        });
      }
    }, {
      key: "destroy",
      value: function () {
        this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
      }
    }, {
      key: "on",
      value: function (e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
        this.apiEvents.push({
          evt: e,
          once: i,
          callback: t
        });
      }
    }, {
      key: "once",
      value: function (e, t) {
        this.on(e, t, !0);
      }
    }, {
      key: "trigger",
      value: function (e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = [];
        o(this.apiEvents, function (t, s) {
          var l = t.evt,
              o = t.once,
              r = t.callback;
          l == e && (r(i), o && n.push(s));
        }), n.length && o(n, function (e) {
          return t.apiEvents.splice(e, 1);
        });
      }
    }, {
      key: "clearAllEvents",
      value: function () {
        this.apiEvents.splice(0, this.apiEvents.length);
      }
    }, {
      key: "version",
      value: function () {
        return "3.1.1";
      }
    }]), e;
  }();

  return function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new te(e);
    return t.init(), t;
  };
});

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/sticky-js/index.js
var sticky_js = __webpack_require__(4);
var sticky_js_default = /*#__PURE__*/__webpack_require__.n(sticky_js);

// EXTERNAL MODULE: ./node_modules/tabbyjs/dist/js/tabby.min.js
var tabby_min = __webpack_require__(5);
var tabby_min_default = /*#__PURE__*/__webpack_require__.n(tabby_min);

// EXTERNAL MODULE: ./node_modules/accordion-js/dist/accordion.min.js
var accordion_min = __webpack_require__(1);
var accordion_min_default = /*#__PURE__*/__webpack_require__.n(accordion_min);

// CONCATENATED MODULE: ./node_modules/ssr-window/ssr-window.esm.js
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */

/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}

function ssr_window_esm_extend(target, src) {
  if (target === void 0) {
    target = {};
  }

  if (src === void 0) {
    src = {};
  }

  Object.keys(src).forEach(function (key) {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      ssr_window_esm_extend(target[key], src[key]);
    }
  });
}

var ssrDocument = {
  body: {},
  addEventListener: function () {},
  removeEventListener: function () {},
  activeElement: {
    blur: function () {},
    nodeName: ''
  },
  querySelector: function () {
    return null;
  },
  querySelectorAll: function () {
    return [];
  },
  getElementById: function () {
    return null;
  },
  createEvent: function () {
    return {
      initEvent: function () {}
    };
  },
  createElement: function () {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function () {},
      getElementsByTagName: function () {
        return [];
      }
    };
  },
  createElementNS: function () {
    return {};
  },
  importNode: function () {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};

function getDocument() {
  var doc = typeof document !== 'undefined' ? document : {};
  ssr_window_esm_extend(doc, ssrDocument);
  return doc;
}

var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState: function () {},
    pushState: function () {},
    go: function () {},
    back: function () {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function () {},
  removeEventListener: function () {},
  getComputedStyle: function () {
    return {
      getPropertyValue: function () {
        return '';
      }
    };
  },
  Image: function () {},
  Date: function () {},
  screen: {},
  setTimeout: function () {},
  clearTimeout: function () {},
  matchMedia: function () {
    return {};
  },
  requestAnimationFrame: function (callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function (id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }

    clearTimeout(id);
  }
};

function getWindow() {
  var win = typeof window !== 'undefined' ? window : {};
  ssr_window_esm_extend(win, ssrWindow);
  return win;
}


// CONCATENATED MODULE: ./node_modules/dom7/dom7.esm.js
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
/* eslint-disable no-proto */


function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}

function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}

function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = getWindow();
  var document = getDocument();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function dom7_esm_data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function dom7_esm_value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = getWindow();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function dom7_esm_width() {
  var window = getWindow();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function dom7_esm_outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function dom7_esm_height() {
  var window = getWindow();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function dom7_esm_outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function dom7_esm_offset() {
  if (this.length > 0) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = getWindow();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = getWindow();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function dom7_esm_html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function dom7_esm_text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = getWindow();
  var document = getDocument();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function dom7_esm_index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function dom7_esm_append() {
  var newChild;
  var document = getDocument();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function dom7_esm_appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = getDocument();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function dom7_esm_parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function dom7_esm_remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = getWindow();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function dom7_esm_scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function dom7_esm_scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = getWindow();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function dom7_esm_stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var dom7_esm_click = shortcut('click');
var dom7_esm_blur = shortcut('blur');
var dom7_esm_focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var dom7_esm_submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var dom7_esm_scroll = shortcut('scroll');
/* harmony default export */ var dom7_esm = ($);

// CONCATENATED MODULE: ./node_modules/swiper/esm/utils/dom.js

var Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: dom7_esm_outerWidth,
  outerHeight: dom7_esm_outerHeight,
  styles: styles,
  offset: dom7_esm_offset,
  css: css,
  each: each,
  html: dom7_esm_html,
  text: dom7_esm_text,
  is: is,
  index: dom7_esm_index,
  eq: eq,
  append: dom7_esm_append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: dom7_esm_parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: dom7_esm_remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ var dom = ($);
// CONCATENATED MODULE: ./node_modules/swiper/esm/utils/utils.js


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function utils_getComputedStyle(el) {
  var window = getWindow();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = getWindow();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = utils_getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function utils_extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (utils_isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}

function createElementIfNotDefined($container, params, createElements, checkProps) {
  var document = getDocument();

  if (createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = document.createElement('div');
        element.className = checkProps[key];
        $container.append(element);
        params[key] = element;
      }
    });
  }

  return params;
}


// CONCATENATED MODULE: ./node_modules/swiper/esm/utils/get-support.js

var get_support_support;

function calcSupport() {
  var window = getWindow();
  var document = getDocument();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!get_support_support) {
    get_support_support = calcSupport();
  }

  return get_support_support;
}


// CONCATENATED MODULE: ./node_modules/swiper/esm/utils/get-device.js


var get_device_device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = getSupport();
  var window = getWindow();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!get_device_device) {
    get_device_device = calcDevice(overrides);
  }

  return get_device_device;
}


// CONCATENATED MODULE: ./node_modules/swiper/esm/utils/get-browser.js

var browser;

function calcBrowser() {
  var window = getWindow();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}


// CONCATENATED MODULE: ./node_modules/swiper/esm/modules/resize/resize.js



var resize_supportsResizeObserver = function supportsResizeObserver() {
  var window = getWindow();
  return typeof window.ResizeObserver !== 'undefined';
};

/* harmony default export */ var resize_resize = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    utils_extend(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = getWindow();

      if (swiper.params.resizeObserver && resize_supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = getWindow();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/modules/observer/observer.js
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = getWindow();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ var observer_observer = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    bindModuleMethods(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/modular.js

/* harmony default export */ var modular = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        utils_extend(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events-emitter.js
/* eslint-disable no-underscore-dangle */
/* harmony default export */ var events_emitter = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateSize.js

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  utils_extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateSlides.js

function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  utils_extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = dom(swiper.visibleSlides);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateProgress.js

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  utils_extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  utils_extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = dom(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(dom(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/update/index.js









/* harmony default export */ var core_update = ({
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/getTranslate.js

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/setTranslate.js
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/minTranslate.js
function minTranslate() {
  return -this.snapGrid[0];
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/maxTranslate.js
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/translateTo.js
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/translate/index.js





/* harmony default export */ var core_translate = ({
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/transition/setTransition.js
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/transition/transitionStart.js
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/transition/transitionEnd.js
function transitionEnd_transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/transition/index.js



/* harmony default export */ var core_transition = ({
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd_transitionEnd
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideTo.js
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideToLoop.js
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideNext.js
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
  if (!enabled) return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slidePrev.js
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideReset.js
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideToClosest.js
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(dom(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      nextTick(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/slide/index.js







/* harmony default export */ var core_slide = ({
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/loop/loopCreate.js


function loopCreate() {
  var swiper = this;
  var document = getDocument();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = dom(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = dom(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append(dom(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend(dom(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/loop/loopFix.js
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/loop/loopDestroy.js
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/loop/index.js



/* harmony default export */ var loop = ({
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/grab-cursor/index.js


/* harmony default export */ var grab_cursor = ({
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/addSlide.js
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/manipulation/index.js





/* harmony default export */ var manipulation = ({
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onTouchStart.js


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = getDocument();
  var window = getWindow();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = dom(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = dom(event.path[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  utils_extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onTouchMove.js



function onTouchMove(event) {
  var document = getDocument();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      utils_extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: now()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onTouchEnd.js

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = now();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = now();
  nextTick(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onResize.js
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onClick.js
function onClick_onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/onScroll.js
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/events/index.js







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = getDocument();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick_onClick.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper.on('observerUpdate', onResize, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = getDocument();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

/* harmony default export */ var core_events = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

  if (breakpointOnlyParams) {
    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === 'undefined') return;

      if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
        breakpointOnlyParams[param] = 'auto';
      } else if (param === 'slidesPerView') {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }

  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");

    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }

    swiper.emitContainerClasses();
  }

  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  utils_extend(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  utils_extend(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = getWindow();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/breakpoints/index.js


/* harmony default export */ var core_breakpoints = ({
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/classes/addClasses.js
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/classes/removeClasses.js
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/classes/index.js


/* harmony default export */ var classes = ({
  addClasses: addClasses,
  removeClasses: removeClasses
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/images/loadImage.js


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = getWindow();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = dom(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/images/preloadImages.js
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/images/index.js


/* harmony default export */ var core_images = ({
  loadImage: loadImage,
  preloadImages: preloadImages
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/check-overflow/index.js
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ var check_overflow = ({
  checkOverflow: checkOverflow
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/defaults.js
/* harmony default export */ var defaults = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/core/core-class.js
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
/* eslint no-param-reassign: "off" */

























var prototypes = {
  modular: modular,
  eventsEmitter: events_emitter,
  update: core_update,
  translate: core_translate,
  transition: core_transition,
  slide: core_slide,
  loop: loop,
  grabCursor: grab_cursor,
  manipulation: manipulation,
  events: core_events,
  breakpoints: core_breakpoints,
  checkOverflow: check_overflow,
  classes: classes,
  images: core_images
};
var extendedDefaults = {};

var core_class_Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && dom(params.el).length > 1) {
      var swipers = [];
      dom(params.el).each(function (containerEl) {
        var newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = utils_extend({}, defaults);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = dom; // Extend Swiper

    utils_extend(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: dom(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  };

  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  };

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = dom(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    var getWrapperSelector = function getWrapperSelector() {
      return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
    };

    var getWrapper = function getWrapper() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = dom(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = function (options) {
          return $el.children(options);
        };

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    var $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document = getDocument();
      var wrapper = document.createElement('div');
      $wrapperEl = dom(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function (slideEl) {
        $wrapperEl.append(slideEl);
      });
    }

    utils_extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    core_class_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
core_class_Swiper.use([resize_resize, observer_observer]);
/* harmony default export */ var core_class = (core_class_Swiper);
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/pagination/pagination.js
function pagination_extends() {
  pagination_extends = Object.assign || function (target) {
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

  return pagination_extends.apply(this, arguments);
}



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = dom(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    swiper.params.pagination = createElementIfNotDefined(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
      el: 'swiper-pagination'
    });
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = dom(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = dom(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    utils_extend(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', classesToSelector(params.bulletClass));
    }
  }
};
/* harmony default export */ var pagination = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    bindModuleMethods(swiper, {
      pagination: pagination_extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.pagination.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/hc-offcanvas-nav/dist/hc-offcanvas-nav.js
var hc_offcanvas_nav = __webpack_require__(6);
var hc_offcanvas_nav_default = /*#__PURE__*/__webpack_require__.n(hc_offcanvas_nav);

// EXTERNAL MODULE: ./node_modules/glightbox/dist/js/glightbox.min.js
var glightbox_min = __webpack_require__(7);
var glightbox_min_default = /*#__PURE__*/__webpack_require__.n(glightbox_min);

// EXTERNAL MODULE: ./node_modules/basiclightbox/dist/basicLightbox.min.js
var basicLightbox_min = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/imask/esm/_rollupPluginBabelHelpers-67bba7fb.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _rollupPluginBabelHelpers_67bba7fb_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _rollupPluginBabelHelpers_67bba7fb_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _rollupPluginBabelHelpers_67bba7fb_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _rollupPluginBabelHelpers_67bba7fb_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _rollupPluginBabelHelpers_67bba7fb_setPrototypeOf(subClass, superClass);
}

function _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(o) {
  _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(o);
}

function _rollupPluginBabelHelpers_67bba7fb_setPrototypeOf(o, p) {
  _rollupPluginBabelHelpers_67bba7fb_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _rollupPluginBabelHelpers_67bba7fb_setPrototypeOf(o, p);
}

function _rollupPluginBabelHelpers_67bba7fb_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _rollupPluginBabelHelpers_67bba7fb_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _rollupPluginBabelHelpers_67bba7fb_assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _rollupPluginBabelHelpers_67bba7fb_isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _rollupPluginBabelHelpers_67bba7fb_set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    _rollupPluginBabelHelpers_67bba7fb_set = Reflect.set;
  } else {
    _rollupPluginBabelHelpers_67bba7fb_set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return _rollupPluginBabelHelpers_67bba7fb_set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = _rollupPluginBabelHelpers_67bba7fb_set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


// CONCATENATED MODULE: ./node_modules/imask/esm/core/change-details.js

/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/

var change_details_ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    _classCallCheck(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/core/utils.js


/** Checks if value is string */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/


var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */

function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */


function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */


function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */


function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}

function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new change_details_ChangeDetails()];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */



// CONCATENATED MODULE: ./node_modules/imask/esm/core/action-details.js



/** Provides details of changing input */

var action_details_ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/core/continuous-tail-details.js

/** Provides details of continuous extracted tail */

var continuous_tail_details_ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length) return '';
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/core/holder.js
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

  return new IMask.InputMask(el, opts);
}


// CONCATENATED MODULE: ./node_modules/imask/esm/masked/base.js





/** Supported mask type */

/** Provides common masking stuff */

var base_Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */
  function Masked(opts) {
    _classCallCheck(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  _rollupPluginBabelHelpers_67bba7fb_createClass(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return; // $FlowFixMe

      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** */

  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new continuous_tail_details_ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new continuous_tail_details_ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new change_details_ChangeDetails();
      this._value += ch;
      return new change_details_ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;
      var details;

      var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          } // if ok, rollback state after tail


          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new change_details_ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new change_details_ChangeDetails();
    }
    /** Appends optional eager placeholder at end */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new change_details_ChangeDetails();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      var details = new change_details_ChangeDetails();
      var checkTail = isString(tail) ? new continuous_tail_details_ContinuousTailDetails(String(tail)) : tail;
      if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new change_details_ChangeDetails();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        input: true
      };
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;

      if (this.eager) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }

      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
      var details = new change_details_ChangeDetails({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos));

      if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          var valLength;

          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new change_details_ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }

      return details.aggregate(this.append(inserted, flags, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      var tval = this.typedValue;
      return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
    }
  }]);

  return Masked;
}();

base_Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
base_Masked.EMPTY_VALUES = [undefined, null, ''];
IMask.Masked = base_Masked;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/factory.js




/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

  if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

  if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

  if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

  if (mask instanceof Function) return IMask.MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return IMask.Masked;
}
/** Creates new {@link Masked} depending on mask type */


function createMask(opts) {
  // $FlowFixMe
  if (IMask.Masked && opts instanceof IMask.Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (IMask.Masked && mask instanceof IMask.Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}

IMask.createMask = createMask;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/input-definition.js





var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var input_definition_PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    _classCallCheck(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = _objectWithoutProperties(opts, _excluded);

    this.masked = createMask({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new change_details_ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new change_details_ChangeDetails();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(ch, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked; // TODO probably should be done via _appendChar


      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new change_details_ChangeDetails();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new change_details_ChangeDetails();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);

  return PatternInputDefinition;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/fixed-definition.js





var fixed_definition_PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    _classCallCheck(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new change_details_ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;

        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new change_details_ChangeDetails();
      if (this._value) return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !this.eager) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char, {
        tail: true
      });
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new change_details_ChangeDetails();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new continuous_tail_details_ContinuousTailDetails('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new continuous_tail_details_ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js





var chunk_tail_details_excluded = ["chunks"];

var chunk_tail_details_ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (isString(tailChunk)) tailChunk = new continuous_tail_details_ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof continuous_tail_details_ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new continuous_tail_details_ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }

      var details = new change_details_ChangeDetails();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }

      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = _objectWithoutProperties(state, chunk_tail_details_excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new continuous_tail_details_ContinuousTailDetails(); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length) return '';
      var ci = this.chunks.length - 1;

      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/cursor.js




var cursor_PatternCursor = /*#__PURE__*/function () {
  function PatternCursor(masked, pos) {
    _classCallCheck(this, PatternCursor);

    this.masked = masked;
    this._log = [];

    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
    {
      index: 0,
      offset: 0
    } : // last
    {
      index: this.masked._blocks.length,
      offset: 0
    }),
        offset = _ref.offset,
        index = _ref.index;

    this.offset = offset;
    this.index = index;
    this.ok = false;
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(PatternCursor, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set(s) {
      Object.assign(this, s);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s = this._log.pop();

      this.state = s;
      return s;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block) return;

      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }

      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();

      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;

        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();

      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }

      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;

      return this._pushLeft(function () {
        if (_this.block.isFixed || !_this.block.value) return;
        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0) return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this; // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|


      return this._pushLeft(function () {
        if (_this2.block.isFixed) return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;

      return this._pushLeft(function () {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;

      return this._pushRight(function () {
        if (_this4.block.isFixed || !_this4.block.value) return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length) return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;

      return this._pushRight(function () {
        if (_this5.block.isFixed) return; // const o = this.offset;

        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;

      return this._pushRight(function () {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
        return true;
      });
    }
  }]);

  return PatternCursor;
}();


// CONCATENATED MODULE: ./node_modules/imask/esm/masked/regexp.js






/** Masking by RegExp */

var regexp_MaskedRegExp = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedRegExp, _Masked);

  var _super = _createSuper(MaskedRegExp);

  function MaskedRegExp() {
    _classCallCheck(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(base_Masked);

IMask.MaskedRegExp = regexp_MaskedRegExp;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern.js












var pattern_excluded = ["_blocks"];
/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/

var pattern_MaskedPattern = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedPattern, _Masked);

  var _super = _createSuper(MaskedPattern);
  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */


  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work


    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];
        var isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }

        var def = isInput ? new input_definition_PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new fixed_definition_PatternFixedDefinition({
          char: char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = _objectWithoutProperties(state, pattern_excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isOptional;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;

      var details = new change_details_ChangeDetails();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d = this._blocks[bi]._appendEager();

        if (!d.inserted) break;
        details.aggregate(d);
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new change_details_ChangeDetails();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;

        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
        }));

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new chunk_tail_details_ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof chunk_tail_details_ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new change_details_ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      if (!this._blocks.length) return 0;
      var cursor = new cursor_PatternCursor(this, cursorPos);

      if (direction === DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.value.length;
      } // FORCE is only about a|* otherwise is 0


      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        } // forward flow


        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled(); // backward flow

        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }

        if (cursor.ok) return cursor.pos;
        if (direction === DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos; // cursor.popState();
        // if (
        //   cursor.pushRightBeforeInput() &&
        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
        //   (!this.lazy || this.extractInput())
        // ) return cursor.pos;

        return 0;
      }

      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(base_Masked);

pattern_MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
pattern_MaskedPattern.STOP_CHAR = '`';
pattern_MaskedPattern.ESCAPE_CHAR = '\\';
pattern_MaskedPattern.InputDefinition = input_definition_PatternInputDefinition;
pattern_MaskedPattern.FixedDefinition = fixed_definition_PatternFixedDefinition;
IMask.MaskedPattern = pattern_MaskedPattern;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/range.js













/** Pattern which accepts ranges */

var range_MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedRange, _MaskedPattern);

  var _super = _createSuper(MaskedRange);

  function MaskedRange() {
    _classCallCheck(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    } // TODO str is a single char everytime

    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details;

      var _normalizePrepare = normalizePrepare(_get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch) return ch;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';

      var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];

      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }

        return toStr[nextVal.length - 1];
      }

      return ch;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(pattern_MaskedPattern);

IMask.MaskedRange = range_MaskedRange;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/date.js














/** Date mask */

var date_MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedDate, _MaskedPattern);

  var _super = _createSuper(MaskedDate);
  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */


  function MaskedDate(opts) {
    _classCallCheck(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, this.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
      });

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
    }
  }]);

  return MaskedDate;
}(pattern_MaskedPattern);

date_MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    if (!date) return '';
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

date_MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: range_MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: range_MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: range_MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};

IMask.MaskedDate = date_MaskedDate;

// CONCATENATED MODULE: ./node_modules/imask/esm/controls/mask-element.js


/**
  Generic element API to use with mask
  @interface
*/

var mask_element_MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    _classCallCheck(this, MaskElement);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();

IMask.MaskElement = mask_element_MaskElement;

// CONCATENATED MODULE: ./node_modules/imask/esm/controls/html-mask-element.js



/** Bridge between HTMLElement and {@link Masked} */

var html_mask_element_HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  _inherits(HTMLMaskElement, _MaskElement);

  var _super = _createSuper(HTMLMaskElement);
  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */


  function HTMLMaskElement(input) {
    var _this;

    _classCallCheck(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  _rollupPluginBabelHelpers_67bba7fb_createClass(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(mask_element_MaskElement);

html_mask_element_HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
IMask.HTMLMaskElement = html_mask_element_HTMLMaskElement;

// CONCATENATED MODULE: ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js





var html_contenteditable_mask_element_HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = _createSuper(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    _classCallCheck(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(html_mask_element_HTMLMaskElement);

IMask.HTMLContenteditableMaskElement = html_contenteditable_mask_element_HTMLContenteditableMaskElement;

// CONCATENATED MODULE: ./node_modules/imask/esm/controls/input.js



















var input_excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var input_InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    _classCallCheck(this, InputMask);

    this.el = el instanceof mask_element_MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new html_contenteditable_mask_element_HTMLContenteditableMaskElement(el) : new html_mask_element_HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  _rollupPluginBabelHelpers_67bba7fb_createClass(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = createMask({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;

      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      if (this.value === str) return;
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      if (this.unmaskedValue === str) return;
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      if (this.masked.typedValueEquals(val)) return;
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function
    /* ev */
    _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = _objectWithoutProperties(opts, input_excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new action_details_ActionDetails( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
        input: true,
        raw: true
      }).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();

IMask.InputMask = input_InputMask;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/enum.js













/** Pattern which validates enum values */

var enum_MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  _inherits(MaskedEnum, _MaskedPattern);

  var _super = _createSuper(MaskedEnum);

  function MaskedEnum() {
    _classCallCheck(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(pattern_MaskedPattern);

IMask.MaskedEnum = enum_MaskedEnum;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/number.js






/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/

var number_MaskedNumber = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedNumber, _Masked);

  var _super = _createSuper(MaskedNumber);
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */


  function MaskedNumber(opts) {
    _classCallCheck(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;

      ch = ch.replace(this._mapToRadixRegExp, this.radix);

      var noSepCh = this._removeThousandsSeparators(ch);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _normalizePrepare = normalizePrepare((_get2 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
          _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
          prepCh = _normalizePrepare2[0],
          details = _normalizePrepare2[1];

      if (ch && !noSepCh) details.skip = true;
      return [prepCh, details];
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new change_details_ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    /**
      @override
    */

  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      // handle  0 -> '' case (typed = 0 even if value = '')
      // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
      return (_get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedNumber.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
    }
  }]);

  return MaskedNumber;
}(base_Masked);

number_MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
number_MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(base_Masked.EMPTY_VALUES), [0]);
IMask.MaskedNumber = number_MaskedNumber;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/function.js






/** Masking by custom Function */

var function_MaskedFunction = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedFunction, _Masked);

  var _super = _createSuper(MaskedFunction);

  function MaskedFunction() {
    _classCallCheck(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(base_Masked);

IMask.MaskedFunction = function_MaskedFunction;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/dynamic.js







var dynamic_excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
/** Dynamic mask for choosing apropriate mask in run-time */

var dynamic_MaskedDynamic = /*#__PURE__*/function (_Masked) {
  _inherits(MaskedDynamic, _Masked);

  var _super = _createSuper(MaskedDynamic);
  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */


  function MaskedDynamic(opts) {
    var _this;

    _classCallCheck(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  _rollupPluginBabelHelpers_67bba7fb_createClass(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return createMask(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new change_details_ChangeDetails();
      var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
     @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }

      return details;
    }
  }, {
    key: "currentMaskFlags",
    value: function currentMaskFlags(flags) {
      var _flags$_beforeTailSta, _flags$_beforeTailSta2;

      return Object.assign({}, flags, {
        _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
      });
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _normalizePrepare = normalizePrepare(_get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, str, flags)),
          _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
          s = _normalizePrepare2[0],
          details = _normalizePrepare2[1];

      if (this.currentMask) {
        var currentDetails;

        var _normalizePrepare3 = normalizePrepare(_get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));

        var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);

        s = _normalizePrepare4[0];
        currentDetails = _normalizePrepare4[1];
        details = details.aggregate(currentDetails);
      }

      return [s, details];
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask;

      (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask2;

      return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask3;

      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new change_details_ChangeDetails();

      if (this.currentMask) {
        var _this$currentMask4;

        details.aggregate((_this$currentMask4 = this.currentMask).remove.apply(_this$currentMask4, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      var _this$currentMask5;

      return Object.assign({}, _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: (_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutProperties(state, dynamic_excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      _set(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;

      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get2 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get2, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get3 = _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : _get(_rollupPluginBabelHelpers_67bba7fb_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
    },
    set: function set(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    /**
      @override
    */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
        var _mask$mi;

        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
    /**
      @override
    */

  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      var _this$currentMask9;

      return Boolean((_this$currentMask9 = this.currentMask) === null || _this$currentMask9 === void 0 ? void 0 : _this$currentMask9.typedValueEquals(value));
    }
  }]);

  return MaskedDynamic;
}(base_Masked);

dynamic_MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, masked.currentMaskFlags(flags));
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = dynamic_MaskedDynamic;

// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pipe.js





/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */


function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}

IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;

// CONCATENATED MODULE: ./node_modules/imask/esm/index.js



























try {
  globalThis.IMask = IMask;
} catch (e) {}
// CONCATENATED MODULE: ./_src/js/modules/inputMask.js


var inputMask_getInputMask = function getInputMask() {
  // eslint-disable-next-line no-unused-vars
  var phoneMask = IMask(document.getElementById("consultation-tel"), {
    mask: "+{7} (000) 000-00-00"
  });
};

/* harmony default export */ var inputMask = (inputMask_getInputMask);
// CONCATENATED MODULE: ./_src/js/modules/moduleSuccess.js

var htmlInstanceSuccess = basicLightbox_min["create"](document.querySelector(".success"));

var escapeHandler = function escapeHandler(e) {
  if (e.key === "Escape" && htmlInstanceSuccess.visible()) {
    document.removeEventListener("keydown", escapeHandler); // eslint-disable-next-line no-use-before-define

    moduleSuccess_closeForm();
  }
};

var moduleSuccess_closeForm = function closeForm() {
  htmlInstanceSuccess.close();
};

var closeHandler = function closeHandler(e) {
  e.preventDefault();
  moduleSuccess_closeForm();
};

var successShowHandler = function successShowHandler() {
  var btnClose = document.querySelector(".success__close");
  btnClose.addEventListener("click", closeHandler);
  document.addEventListener("keydown", escapeHandler);
};

/* harmony default export */ var moduleSuccess = ({
  htmlInstanceSuccess: htmlInstanceSuccess,
  successShowHandler: successShowHandler
});
// CONCATENATED MODULE: ./_src/js/modules/moduleErr.js

var htmlInstanceErr = basicLightbox_min["create"](document.querySelector(".err"));

var moduleErr_escapeHandler = function escapeHandler(e) {
  if (e.key === "Escape" && htmlInstanceErr.visible()) {
    document.removeEventListener("keydown", escapeHandler); // eslint-disable-next-line no-use-before-define

    moduleErr_closeForm();
  }
};

var moduleErr_closeForm = function closeForm() {
  htmlInstanceErr.close();
};

var moduleErr_closeHandler = function closeHandler(e) {
  e.preventDefault();
  moduleErr_closeForm();
};

var errShowHandler = function errShowHandler() {
  var btnClose = document.querySelector(".err__close"); // console.log(btnClose);

  btnClose.addEventListener("click", moduleErr_closeHandler);
  document.addEventListener("keydown", moduleErr_escapeHandler);
};

/* harmony default export */ var moduleErr = ({
  errShowHandler: errShowHandler,
  htmlInstanceErr: htmlInstanceErr
});
// CONCATENATED MODULE: ./_src/js/modules/formSend.js
 // eslint-disable-next-line import/no-cycle



var formSend_form = document.querySelector(".consultation-form__inner");
var preloader = document.querySelector(".preloader"); // test url

var url = "https://reqbin.com/echo/post/json";

var formSend_onSubmit = function onSubmit(event) {
  event.preventDefault();
  var name = document.getElementById("consultation-name").value;
  var tel = document.getElementById("consultation-tel").value;

  var status = function status(response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }

    return Promise.resolve(response);
  };

  var json = function json(response) {
    return response.json();
  };

  preloader.classList.add("preloader--visible");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      tel: tel
    })
  }).then(status).then(json).then(function () {
    preloader.classList.remove("preloader--visible");
    htmlInstance.close();
    formSend_form.reset();
    moduleSuccess.htmlInstanceSuccess.show(function () {
      moduleSuccess.successShowHandler();
    });
  })["catch"](function () {
    preloader.classList.remove("preloader--visible");
    htmlInstance.close();
    formSend_form.reset();
    moduleErr.htmlInstanceErr.show(function () {
      moduleErr.errShowHandler();
    });
  });
};

/* harmony default export */ var formSend = (formSend_onSubmit);
// CONCATENATED MODULE: ./_src/js/modules/moduleConsultation.js
/* eslint-disable no-restricted-syntax */

 // eslint-disable-next-line import/no-cycle


var htmlInstance = basicLightbox_min["create"](document.querySelector(".consultation"));

var escapeHandlerConsult = function escapeHandlerConsult(e) {
  if (e.key === "Escape" && htmlInstance.visible()) {
    // eslint-disable-next-line no-use-before-define
    moduleConsultation_closeForm();
  }
};

var moduleConsultation_closeForm = function closeForm() {
  formSend_form.removeEventListener("submit", formSend);
  formSend_form.reset();
  document.removeEventListener("keydown", escapeHandlerConsult);
  htmlInstance.close();
};

var moduleConsultation_closeHandler = function closeHandler(e) {
  e.preventDefault();
  moduleConsultation_closeForm();
};

var moduleConsultation_consultationHandler = function consultationHandler(e) {
  e.preventDefault();
  htmlInstance.show(function () {
    var btnClose = document.querySelector(".consultation__close");
    btnClose.addEventListener("click", moduleConsultation_closeHandler);
    document.addEventListener("keydown", escapeHandlerConsult);
    inputMask();
    formSend_form.addEventListener("submit", formSend);
  });
};

var makeListenerConsult = function makeListenerConsult() {
  var listBtn = Array.from(document.querySelectorAll(".consultation-btn"));

  for (var _i = 0, _listBtn = listBtn; _i < _listBtn.length; _i++) {
    var item = _listBtn[_i];
    item.addEventListener("click", moduleConsultation_consultationHandler);
  }
};

/* harmony default export */ var moduleConsultation = (makeListenerConsult);
// CONCATENATED MODULE: ./node_modules/swiper/esm/components/navigation/navigation.js
function navigation_extends() {
  navigation_extends = Object.assign || function (target) {
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

  return navigation_extends.apply(this, arguments);
}



var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = dom(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = dom(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    utils_extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ var navigation = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    bindModuleMethods(swiper, {
      navigation: navigation_extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }

      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    },
    click: function click(swiper, e) {
      var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./_src/js/modules/lawSlider.js


var lawSlider_createlawSlider = function createlawSlider() {
  core_class.use([navigation, pagination]);
  var swiper = new core_class(".law__swiper", {
    navigation: {
      nextEl: ".law-button-next",
      prevEl: ".law-button-prev"
    },
    pagination: {
      el: ".law__pagination",
      bulletClass: "pagination__bullet",
      bulletActiveClass: "pagination__bullet--active",
      type: "bullets"
    },
    breakpoints: {
      769: {
        cssMode: false,
        slidesPerView: "auto"
      },
      320: {
        cssMode: true,
        slidesPerView: 1
      }
    },
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto"
  });
};

/* harmony default export */ var lawSlider = (lawSlider_createlawSlider);
// CONCATENATED MODULE: ./_src/js/modules/faqAccordion.js


var faqAccordion_createAccordionFaq = function createAccordionFaq() {
  var acc = new accordion_min_default.a(".faq__list", {});
};

/* harmony default export */ var faqAccordion = (faqAccordion_createAccordionFaq);
// EXTERNAL MODULE: ./node_modules/custom-select/build/index.js
var build = __webpack_require__(2);
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// CONCATENATED MODULE: ./_src/js/modules/offices.js
// Список городов и офисов в них
var officesList = [{
  cityName: "Красноярск",
  "in": "Красноярске",
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
  "in": "Иркутске",
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
  "in": "Братске",
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

var winWidth = window.innerWidth; // eslint-disable-next-line import/no-mutable-exports

var myMap; // eslint-disable-next-line import/no-mutable-exports

var placemarkCollections;

var map_getMap = function getMap() {
  placemarkCollections = {};
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
          iconImageHref: "./img/svg/marker.svg",
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
// CONCATENATED MODULE: ./_src/js/modules/changeCity.js
var changeCity = function changeCity(val) {
  var elem = document.querySelector(".promo__city");

  if (elem) {
    elem.textContent = val;
  }
};

/* harmony default export */ var modules_changeCity = (changeCity);
// CONCATENATED MODULE: ./_src/js/modules/city.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = city_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function city_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return city_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return city_arrayLikeToArray(o, minLen); }

function city_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-restricted-syntax */

 // eslint-disable-next-line import/no-cycle




var selectCity = build_default()(".city__select")[0];
var city_data = document.querySelector(".data");
var changeValueCity = function changeValueCity(elem) {
  if (city_data) {
    var itemAddr = city_data.querySelector(".data__item--addr");
    var linkTel = city_data.querySelector(".data__link--tel");
    var linkMail = city_data.querySelector(".data__link--mail");
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
    modules_changeCity(item["in"]);
    changeValueCity(item);
    changeValueGeo(item);
    myMap.setBounds(placemarkCollections[offices.indexOf(item)].getBounds(), {
      checkZoomRange: true
    }).then(function () {
      if (myMap.getZoom() > 15) myMap.setZoom(15);
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
    modules_changeCity(item["in"]);
    myMap.setBounds(placemarkCollections[offices.indexOf(item)].getBounds(), {
      checkZoomRange: true
    }).then(function () {
      if (myMap.getZoom() > 15) myMap.setZoom(15);
    });
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
// CONCATENATED MODULE: ./_src/js/modules/processSlider.js
/* eslint-disable no-unused-vars */



var processSlider_getProcessSlider = function getProcessSlider() {
  if (winWidth < 769) {
    core_class.use([pagination]);
    var swiper = new core_class(".process__swiper", {
      cssMode: true,
      spaceBetween: 30,
      pagination: {
        el: ".process__pagination",
        type: "bullets",
        bulletClass: "process__bullet"
      }
    });
  }
};

/* harmony default export */ var processSlider = (processSlider_getProcessSlider);
// CONCATENATED MODULE: ./_src/js/modules/actualYear.js
/**
 * Модуль "Актуальный год"
 */
var actualYear = function actualYear() {
  var year = new Date().getFullYear();

  if (document.querySelector("[data-actual-year]")) {
    document.querySelector("[data-actual-year]").textContent = year;
  }
};

/* harmony default export */ var modules_actualYear = (actualYear);
// CONCATENATED MODULE: ./_src/js/modules/moduleDoc.js

var moduleDoc_body = document.querySelector(".page-body");
var htmlInstanceDoc = basicLightbox_min["create"](document.querySelector(".doc__modal"), {
  className: "doc",
  onShow: function onShow() {
    moduleDoc_body.classList.add("stop-scrolling");
  },
  onClose: function onClose() {
    moduleDoc_body.classList.remove("stop-scrolling");
  }
});

var moduleDoc_closeForm = function closeForm() {
  htmlInstanceDoc.close();
};

var moduleDoc_escapeHandler = function escapeHandler(e) {
  if (e.key === "Escape" && htmlInstanceDoc.visible()) {
    document.removeEventListener("keydown", escapeHandler);
    moduleDoc_closeForm();
  }
};

var moduleDoc_closeHandler = function closeHandler(e) {
  e.preventDefault();
  moduleDoc_closeForm();
};

var docShowHandler = function docShowHandler() {
  var btnClose = document.querySelector(".doc__close");
  btnClose.addEventListener("click", moduleDoc_closeHandler);
  document.addEventListener("keydown", moduleDoc_escapeHandler);
};

var politikHandle = function politikHandle(e) {
  e.preventDefault();
  htmlInstanceDoc.show(function () {
    docShowHandler();
  });
};

var politikListener = function politikListener() {
  var btnPlitik = document.querySelector(".main-footer__politic");
  if (btnPlitik) btnPlitik.addEventListener("click", politikHandle);
};

/* harmony default export */ var moduleDoc = (politikListener);
// CONCATENATED MODULE: ./_src/js/modules/resize.js
var resizeTimeout;

var actualResizeHandler = function actualResizeHandler() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

var resizeThrottler = function resizeThrottler() {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(function () {
      resizeTimeout = null;
      actualResizeHandler();
    }, 2000);
  }
};

var addEventResize = function addEventResize() {
  return window.addEventListener("resize", resizeThrottler, false);
};

/* harmony default export */ var modules_resize = (addEventResize);
// CONCATENATED MODULE: ./_src/js/main.js
/* eslint-disable object-shorthand */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-undef */

/* eslint-disable new-cap */

/* eslint-disable no-unused-vars */



















var nav = ".nav";

var main_createMobileMenu = function createMobileMenu() {
  document.addEventListener("DOMContentLoaded", function () {
    var menu = new hc_offcanvas_nav_default.a(nav, {
      disableAt: 1001,
      customToggle: ".header__burger",
      width: "100%"
    });
  });
};

var main_createTabs = function createTabs() {
  var tabs = new tabby_min_default.a("[data-tabs]");
};

var main_createStickyHeader = function createStickyHeader() {
  var sticky = new sticky_js_default.a(".header");
};

var main_createSliders = function createSliders() {
  core_class.use([pagination]);
  var swiper = new core_class(".diploma__swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: "diploma__bullet",
      bulletActiveClass: "diploma__bullet--active"
    },
    breakpoints: {
      769: {
        cssMode: false
      },
      320: {
        cssMode: true
      }
    }
  });
};

var main_createAccordion = function createAccordion() {
  var acc = new accordion_min_default.a(".team__list", {
    beforeOpen: function beforeOpen(element) {// createAnimation(element);
    },
    beforeClose: function beforeClose(element) {// createAnimationReverse(element);
    }
  });
};

var main_createLightbox = function createLightbox() {
  var lightbox = glightbox_min_default()({
    touchNavigation: true,
    loop: true,
    openEffect: "none",
    preload: false
  });
};

main_createMobileMenu();
window.addEventListener("DOMContentLoaded", function () {
  modules_changeCity(offices[0]["in"]);
  modules_anchor();
  main_createStickyHeader();
  main_createTabs();
  geo();
  processSlider();
  main_createAccordion();
  main_createSliders();
  main_createLightbox();
  moduleConsultation();
  lawSlider();
  faqAccordion();
  city();
  map();
  modules_actualYear();
  moduleDoc();
  modules_resize();
});

/***/ })
/******/ ]);