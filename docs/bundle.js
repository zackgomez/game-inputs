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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../usr/local/lib/node_modules/webpack/node_modules/events/events.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/events/events.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction $getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return $getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = $getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  var args = [];\n  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    ReflectApply(this.listener, this.target, args);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      if (typeof listener !== 'function') {\n        throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n      }\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///(webpack)/node_modules/events/events.js?");

/***/ }),

/***/ "../inputs.js":
/*!********************!*\
  !*** ../inputs.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar vkey = __webpack_require__(/*! vkey */ \"../node_modules/vkey/index.js\")\nvar EventEmitter = __webpack_require__(/*! events */ \"../../../../../../usr/local/lib/node_modules/webpack/node_modules/events/events.js\").EventEmitter\n// mousewheel polyfill borrowed directly from game-shell\nvar addMouseWheel = __webpack_require__(/*! ./lib/mousewheel-polyfill.js */ \"../lib/mousewheel-polyfill.js\")\n\nmodule.exports = function (domElement, options) {\n    return new Inputs(domElement, options)\n}\n\n\n/*\n *   Simple inputs manager to abstract key/mouse inputs.\n *        Inspired by (and where applicable stealing code from) \n *        game-shell: https://github.com/mikolalysenko/game-shell\n *  \n *  inputs.bind( 'move-right', 'D', '<right>' )\n *  inputs.bind( 'move-left',  'A' )\n *  inputs.unbind( 'move-left' )\n *  \n *  inputs.down.on( 'move-right',  function( binding, event ) {})\n *  inputs.up.on(   'move-right',  function( binding, event ) {})\n *\n *  inputs.state['move-right']  // true when corresponding keys are down\n *  inputs.state.dx             // mouse x movement since tick() was last called\n *  inputs.getBindings()        // [ 'move-right', 'move-left', ... ]\n*/\n\n\nfunction Inputs(element, opts) {\n\n    // settings\n    this.element = element || document\n    opts = opts || {}\n    this.preventDefaults = !!opts.preventDefaults\n    this.stopPropagation = !!opts.stopPropagation\n\n    // emitters\n    this.down = new EventEmitter()\n    this.up = new EventEmitter()\n\n    // state object to be queried\n    this.state = {\n        dx: 0, dy: 0,\n        scrollx: 0, scrolly: 0, scrollz: 0\n    }\n\n    // internal state\n    this._keybindmap = {}       // { 'vkeycode' : [ 'binding', 'binding2' ] }\n    this._keyStates = {}        // { 'vkeycode' : boolean }\n    this._bindPressCounts = {}  // { 'binding' : int }\n\n    // needed to work around a bug in Mac Chrome 75\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=977093\n    this._ignoreMousemoveOnce = false\n\n    // register for dom events\n    this.initEvents()\n}\n\n\n/*\n *\n *   PUBLIC API \n *\n*/\n\nInputs.prototype.initEvents = function () {\n    // keys\n    window.addEventListener('keydown', onKeyEvent.bind(undefined, this, true), false)\n    window.addEventListener('keyup', onKeyEvent.bind(undefined, this, false), false)\n    // mouse buttons\n    this.element.addEventListener(\"mousedown\", onMouseEvent.bind(undefined, this, true), false)\n    this.element.addEventListener(\"mouseup\", onMouseEvent.bind(undefined, this, false), false)\n    this.element.oncontextmenu = onContextMenu.bind(undefined, this)\n    // treat dragstart like mouseup - idiotically, mouseup doesn't fire after a drag starts (!)\n    this.element.addEventListener(\"dragstart\", onMouseEvent.bind(undefined, this, false), false)\n    // touch/mouse movement\n    this.element.addEventListener(\"mousemove\", onMouseMove.bind(undefined, this), false)\n    this.element.addEventListener(\"touchmove\", onMouseMove.bind(undefined, this), false)\n    this.element.addEventListener(\"touchstart\", onTouchStart.bind(undefined, this), false)\n    // scroll/mousewheel\n    addMouseWheel(this.element, onMouseWheel.bind(undefined, this), false)\n    // temp bug workaround, see above\n    document.addEventListener(\"pointerlockchange\", onLockChange.bind(undefined, this), false)\n    document.addEventListener(\"mozpointerlockchange\", onLockChange.bind(undefined, this), false)\n}\n\n\n// Usage:  bind( bindingName, vkeyCode, vkeyCode.. )\n//    Note that inputs._keybindmap maps vkey codes to binding names\n//    e.g. this._keybindmap['a'] = 'move-left'\nInputs.prototype.bind = function (binding) {\n    for (var i = 1; i < arguments.length; ++i) {\n        var vkeyCode = arguments[i]\n        var arr = this._keybindmap[vkeyCode] || []\n        if (arr.indexOf(binding) == -1) {\n            arr.push(binding)\n        }\n        this._keybindmap[vkeyCode] = arr\n    }\n    this.state[binding] = !!this.state[binding]\n}\n\n// search out and remove all keycodes bound to a given binding\nInputs.prototype.unbind = function (binding) {\n    for (var b in this._keybindmap) {\n        var arr = this._keybindmap[b]\n        var i = arr.indexOf(binding)\n        if (i > -1) { arr.splice(i, 1) }\n    }\n}\n\n// tick function - clears out cumulative mouse movement state variables\nInputs.prototype.tick = function () {\n    this.state.dx = this.state.dy = 0\n    this.state.scrollx = this.state.scrolly = this.state.scrollz = 0\n}\n\n\n\nInputs.prototype.getBoundKeys = function () {\n    var arr = []\n    for (var b in this._keybindmap) { arr.push(b) }\n    return arr\n}\n\n\n\n/*\n *\n *\n *      INTERNALS - DOM EVENT HANDLERS\n *\n *\n*/\n\n\nfunction onKeyEvent(inputs, wasDown, ev) {\n    handleKeyEvent(ev.keyCode, vkey[ev.keyCode], wasDown, inputs, ev)\n}\n\nfunction onMouseEvent(inputs, wasDown, ev) {\n    // simulate a code out of range of vkey\n    var keycode = -1 - ev.button\n    var vkeycode = '<mouse ' + (ev.button + 1) + '>'\n    handleKeyEvent(keycode, vkeycode, wasDown, inputs, ev)\n    return false\n}\n\nfunction onContextMenu(inputs) {\n    // cancel context menu if there's a binding for right mousebutton\n    var arr = inputs._keybindmap['<mouse 3>']\n    if (arr) { return false }\n}\n\nfunction onMouseMove(inputs, ev) {\n    // bug workaround, see top of file\n    if (inputs._ignoreMousemoveOnce) {\n        inputs._ignoreMousemoveOnce = false\n        return\n    }\n    // for now, just populate the state object with mouse movement\n    var dx = ev.movementX || ev.mozMovementX || 0,\n        dy = ev.movementY || ev.mozMovementY || 0\n    // ad-hoc experimental touch support\n    if (ev.touches && (dx | dy) === 0) {\n        var xy = getTouchMovement(ev)\n        dx = xy[0]\n        dy = xy[1]\n    }\n    inputs.state.dx += dx\n    inputs.state.dy += dy\n}\n\n// experimental - for touch events, extract useful dx/dy\nvar lastTouchX = 0\nvar lastTouchY = 0\nvar lastTouchID = null\n\nfunction onTouchStart(inputs, ev) {\n    var touch = ev.changedTouches[0]\n    lastTouchX = touch.clientX\n    lastTouchY = touch.clientY\n    lastTouchID = touch.identifier\n}\n\nfunction getTouchMovement(ev) {\n    var touch\n    var touches = ev.changedTouches\n    for (var i = 0; i < touches.length; ++i) {\n        if (touches[i].identifier == lastTouchID) touch = touches[i]\n    }\n    if (!touch) return [0, 0]\n    var res = [touch.clientX - lastTouchX, touch.clientY - lastTouchY]\n    lastTouchX = touch.clientX\n    lastTouchY = touch.clientY\n    return res\n}\n\nfunction onMouseWheel(inputs, ev) {\n    // basically borrowed from game-shell\n    var scale = 1\n    switch (ev.deltaMode) {\n        case 0: scale = 1; break  // Pixel\n        case 1: scale = 12; break  // Line\n        case 2:  // page\n            // TODO: investigagte when this happens, what correct handling is\n            scale = inputs.element.clientHeight || window.innerHeight\n            break\n    }\n    // accumulate state\n    inputs.state.scrollx += ev.deltaX * scale\n    inputs.state.scrolly += ev.deltaY * scale\n    inputs.state.scrollz += (ev.deltaZ * scale) || 0\n    return false\n}\n\nfunction onLockChange(inputs, ev) {\n    var locked = document.pointerLockElement\n        || document.mozPointerLockElement\n        || null\n    if (locked) inputs._ignoreMousemoveOnce = true\n}\n\n\n\n\n/*\n *\n *\n *   KEY BIND HANDLING\n *\n *\n*/\n\n\nfunction handleKeyEvent(keycode, vcode, wasDown, inputs, ev) {\n    var arr = inputs._keybindmap[vcode]\n    // don't prevent defaults if there's no binding\n    if (!arr) { return }\n    if (inputs.preventDefaults) ev.preventDefault()\n    if (inputs.stopPropagation) ev.stopPropagation()\n\n    // if the key's state has changed, handle an event for all bindings\n    var currstate = inputs._keyStates[keycode]\n    if (XOR(currstate, wasDown)) {\n        // for each binding: emit an event, and update cached state information\n        for (var i = 0; i < arr.length; ++i) {\n            handleBindingEvent(arr[i], wasDown, inputs, ev)\n        }\n    }\n    inputs._keyStates[keycode] = wasDown\n}\n\n\nfunction handleBindingEvent(binding, wasDown, inputs, ev) {\n    // keep count of presses mapped by binding\n    // (to handle two keys with the same binding pressed at once)\n    var ct = inputs._bindPressCounts[binding] || 0\n    ct += wasDown ? 1 : -1\n    if (ct < 0) { ct = 0 } // shouldn't happen\n    inputs._bindPressCounts[binding] = ct\n\n    // emit event if binding's state has changed\n    var currstate = inputs.state[binding]\n    if (XOR(currstate, ct)) {\n        var emitter = wasDown ? inputs.down : inputs.up\n        emitter.emit(binding, ev)\n    }\n    inputs.state[binding] = !!ct\n}\n\n\n\n\n/*\n *\n *\n *    HELPERS\n *\n *\n*/\n\n\n// how is this not part of Javascript?\nfunction XOR(a, b) {\n    return a ? !b : b\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///../inputs.js?");

/***/ }),

/***/ "../lib/mousewheel-polyfill.js":
/*!*************************************!*\
  !*** ../lib/mousewheel-polyfill.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Adapted from here: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel?redirectlocale=en-US&redirectslug=DOM%2FMozilla_event_reference%2Fwheel\n\nvar prefix = \"\", _addEventListener, onwheel, support;\n\n// detect event model\nif ( window.addEventListener ) {\n  _addEventListener = \"addEventListener\";\n} else {\n  _addEventListener = \"attachEvent\";\n  prefix = \"on\";\n}\n\n// detect available wheel event\nsupport = \"onwheel\" in document.createElement(\"div\") ? \"wheel\" : // Modern browsers support \"wheel\"\n          document.onmousewheel !== undefined ? \"mousewheel\" : // Webkit and IE support at least \"mousewheel\"\n          \"DOMMouseScroll\"; // let's assume that remaining browsers are older Firefox\n\nfunction _addWheelListener( elem, eventName, callback, useCapture ) {\n  elem[ _addEventListener ]( prefix + eventName, support == \"wheel\" ? callback : function( originalEvent ) {\n    !originalEvent && ( originalEvent = window.event );\n\n    // create a normalized event object\n    var event = {\n      // keep a ref to the original event object\n      originalEvent: originalEvent,\n      target: originalEvent.target || originalEvent.srcElement,\n      type: \"wheel\",\n      deltaMode: originalEvent.type == \"MozMousePixelScroll\" ? 0 : 1,\n      deltaX: 0,\n      delatZ: 0,\n      preventDefault: function() {\n        originalEvent.preventDefault ?\n          originalEvent.preventDefault() :\n          originalEvent.returnValue = false;\n      }\n    };\n    \n    // calculate deltaY (and deltaX) according to the event\n    if ( support == \"mousewheel\" ) {\n      event.deltaY = - 1/40 * originalEvent.wheelDelta;\n      // Webkit also support wheelDeltaX\n      originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );\n    } else {\n      event.deltaY = originalEvent.detail;\n    }\n\n    // it's time to fire the callback\n    return callback( event );\n  }, useCapture || false );\n}\n\nmodule.exports = function( elem, callback, useCapture ) {\n  _addWheelListener( elem, support, callback, useCapture );\n\n  // handle MozMousePixelScroll in older Firefox\n  if( support == \"DOMMouseScroll\" ) {\n    _addWheelListener( elem, \"MozMousePixelScroll\", callback, useCapture );\n  }\n};\n\n//# sourceURL=webpack:///../lib/mousewheel-polyfill.js?");

/***/ }),

/***/ "../node_modules/vkey/index.js":
/*!*************************************!*\
  !*** ../node_modules/vkey/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''\n  , isOSX = /OS X/.test(ua)\n  , isOpera = /Opera/.test(ua)\n  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera\n\nvar i, output = module.exports = {\n  0:  isOSX ? '<menu>' : '<UNK>'\n, 1:  '<mouse 1>'\n, 2:  '<mouse 2>'\n, 3:  '<break>'\n, 4:  '<mouse 3>'\n, 5:  '<mouse 4>'\n, 6:  '<mouse 5>'\n, 8:  '<backspace>'\n, 9:  '<tab>'\n, 12: '<clear>'\n, 13: '<enter>'\n, 16: '<shift>'\n, 17: '<control>'\n, 18: '<alt>'\n, 19: '<pause>'\n, 20: '<caps-lock>'\n, 21: '<ime-hangul>'\n, 23: '<ime-junja>'\n, 24: '<ime-final>'\n, 25: '<ime-kanji>'\n, 27: '<escape>'\n, 28: '<ime-convert>'\n, 29: '<ime-nonconvert>'\n, 30: '<ime-accept>'\n, 31: '<ime-mode-change>'\n, 27: '<escape>'\n, 32: '<space>'\n, 33: '<page-up>'\n, 34: '<page-down>'\n, 35: '<end>'\n, 36: '<home>'\n, 37: '<left>'\n, 38: '<up>'\n, 39: '<right>'\n, 40: '<down>'\n, 41: '<select>'\n, 42: '<print>'\n, 43: '<execute>'\n, 44: '<snapshot>'\n, 45: '<insert>'\n, 46: '<delete>'\n, 47: '<help>'\n, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.\n, 92: '<meta>'  // meta-right\n, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).\n, 95: '<sleep>'\n, 106: '<num-*>'\n, 107: '<num-+>'\n, 108: '<num-enter>'\n, 109: '<num-->'\n, 110: '<num-.>'\n, 111: '<num-/>'\n, 144: '<num-lock>'\n, 145: '<scroll-lock>'\n, 160: '<shift-left>'\n, 161: '<shift-right>'\n, 162: '<control-left>'\n, 163: '<control-right>'\n, 164: '<alt-left>'\n, 165: '<alt-right>'\n, 166: '<browser-back>'\n, 167: '<browser-forward>'\n, 168: '<browser-refresh>'\n, 169: '<browser-stop>'\n, 170: '<browser-search>'\n, 171: '<browser-favorites>'\n, 172: '<browser-home>'\n\n  // ff/osx reports '<volume-mute>' for '-'\n, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'\n, 174: '<volume-down>'\n, 175: '<volume-up>'\n, 176: '<next-track>'\n, 177: '<prev-track>'\n, 178: '<stop>'\n, 179: '<play-pause>'\n, 180: '<launch-mail>'\n, 181: '<launch-media-select>'\n, 182: '<launch-app 1>'\n, 183: '<launch-app 2>'\n, 186: ';'\n, 187: '='\n, 188: ','\n, 189: '-'\n, 190: '.'\n, 191: '/'\n, 192: '`'\n, 219: '['\n, 220: '\\\\'\n, 221: ']'\n, 222: \"'\"\n, 223: '<meta>'\n, 224: '<meta>'       // firefox reports meta here.\n, 226: '<alt-gr>'\n, 229: '<ime-process>'\n, 231: isOpera ? '`' : '<unicode>'\n, 246: '<attention>'\n, 247: '<crsel>'\n, 248: '<exsel>'\n, 249: '<erase-eof>'\n, 250: '<play>'\n, 251: '<zoom>'\n, 252: '<no-name>'\n, 253: '<pa-1>'\n, 254: '<clear>'\n}\n\nfor(i = 58; i < 65; ++i) {\n  output[i] = String.fromCharCode(i)\n}\n\n// 0-9\nfor(i = 48; i < 58; ++i) {\n  output[i] = (i - 48)+''\n}\n\n// A-Z\nfor(i = 65; i < 91; ++i) {\n  output[i] = String.fromCharCode(i)\n}\n\n// num0-9\nfor(i = 96; i < 106; ++i) {\n  output[i] = '<num-'+(i - 96)+'>'\n}\n\n// F1-F24\nfor(i = 112; i < 136; ++i) {\n  output[i] = 'F'+(i-111)\n}\n\n\n//# sourceURL=webpack:///../node_modules/vkey/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar element = document\nvar options = {\n    preventDefaults: false,\n    stopPropagation: false\n}\n\nvar inputs = __webpack_require__(/*! ../inputs */ \"../inputs.js\")(element, options)\nwindow.inputs = inputs\n\n\ninputs.bind('move-left', 'A', '<left>')\ninputs.bind('move-right', 'D', '<right>')\ninputs.bind('fire', '<mouse 1>')\ninputs.bind('RMB', '<mouse 3>')\n\ninputs.down.on('move-left', function () { showOutput('move-left pressed') })\ninputs.down.on('move-right', function () { showOutput('move-right pressed') })\ninputs.down.on('fire', function () { showOutput('fire pressed') })\ninputs.down.on('RMB', function () { showOutput('RMB pressed') })\ninputs.up.on('move-left', function () { showOutput('move-left released') })\ninputs.up.on('move-right', function () { showOutput('move-right released') })\ninputs.up.on('fire', function () { showOutput('fire released') })\ninputs.up.on('RMB', function () { showOutput('RMB released') })\n\nvar boundKeys = inputs.getBoundKeys()\n\n\n\n\n\n\n// Example page HTML stuff\nfunction addDiv(txt, html, className) {\n    var div = document.createElement('div')\n    if (html) div.innerHTML = txt\n    else div.textContent = txt\n    document.body.appendChild(div)\n    div.classList.add(className || '')\n    return div\n}\naddDiv('The following keys are bound:', 0, 'heading')\naddDiv(boundKeys.sort().join(', '), 0, 'content')\n\naddDiv('Pointer lock element:', 0, 'heading')\nvar lockTarget = addDiv('click to lock', 0, 'content')\nlockTarget.classList.add('pointer-lock-target')\n\naddDiv('Event output: <br>(or open the console and inspect \"inputs\")', true, 'heading')\nvar textarea = document.createElement('textarea')\ntextarea.style.width = \"300px\"\ntextarea.style.height = \"40px\"\ntextarea.classList.add('content')\ndocument.body.appendChild(textarea)\n\naddDiv('Current values in \"inputs.state\" object:', true, 'heading')\nvar stateDiv = addDiv('', true, 'content')\n\nfunction showOutput(txt) {\n    textarea.value = txt\n}\n\nfunction showState() {\n    var s = inputs.state\n    var a = []\n    for (var name in s) a.push(name)\n    var str = ''\n    for (var i = 0; i < a.length; ++i) {\n        str += a[i] + ': ' + s[a[i]] + '<br>'\n    }\n    stateDiv.innerHTML = str\n    inputs.tick()\n}\nsetInterval(showState, 200)\n\n\n// pointer lock stuff\nvar locked = false\ndocument.addEventListener('pointerlockchange', function (ev) {\n    locked = document.pointerLockElement === lockTarget\n    lockTarget.textContent = (locked) ? '(locked)' : 'click to lock'\n})\nlockTarget.addEventListener('mousedown', function (ev) {\n    if (!locked) lockTarget.requestPointerLock()\n    else document.exitPointerLock\n})\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });