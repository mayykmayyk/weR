// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/components/flickityInit.ts":[function(require,module,exports) {
"use strict";
/**
* Initialize flickity
*/
//@ts-nocheck

Object.defineProperty(exports, "__esModule", {
  value: true
});

var flickityInit = function flickityInit() {
  var service = document.querySelector('.home-carousel');
  var carousel = new Flickity(service, {
    pageDots: false,
    freeScroll: true,
    wrapAround: true
  });
};

exports.default = flickityInit;
},{}],"js/components/forEachPolyfill.ts":[function(require,module,exports) {
"use strict";
/**
* Foreach polyfill for browsers
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var foreachPolyfill = function foreachPolyfill() {
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
};

exports.default = foreachPolyfill;
},{}],"js/components/steps.ts":[function(require,module,exports) {
"use strict";
/**
* script for steps component
*/
//@ts-nocheck

Object.defineProperty(exports, "__esModule", {
  value: true
});

var steps = function steps() {
  var stepItem = document.querySelectorAll('.step__item');
  var stepButton = document.querySelectorAll('.step__indicator');
  var content = document.querySelectorAll('.step__content');
  var prevBtn = document.querySelector('.js-prev');
  var nextBtn = document.querySelector('.js-next');
  var increment = 0;
  window.addEventListener('DOMContentLoaded', function () {
    stepItem[0].classList.add('active');
    content[0].classList.add('active');
  });

  nextBtn.onclick = function () {
    if (increment < stepItem.length - 1) {
      content[increment].classList.remove('active');
      increment++;

      if (increment < stepItem.length) {
        stepItem[increment].classList.add('active');
        content[increment].classList.add('active');
      }
    } else {
      return; // for (let i = stepItem.length -1; i > 0; i--) {
      //   stepItem[i].classList.remove('active');
      //   content[i].classList.remove('active');
      //   increment = 0;
      //   content[increment].classList.add('active');
      // }
    }
  };

  prevBtn.onclick = function () {
    if (increment > 0) {
      content[increment].classList.remove('active');
      increment--;
      stepItem[increment + 1].classList.remove('active');
      content[increment].classList.add('active');
    } else {
      return;
    }
  };

  for (var x = 0; x < stepButton.length; x++) {
    stepButton[x].onclick = function () {
      if (increment > this.value) {
        do {
          stepItem[increment].classList.remove('active');
          content[increment].classList.remove('active');
          increment--;
        } while (increment >= this.value);
      } else {
        content[increment].classList.remove('active');
      }

      stepItem[this.value].classList.add('active');
      content[this.value].classList.add('active');
      increment = this.value;

      for (var v = 0; v < increment; v++) {
        stepItem[v].classList.add('active');
      }
    };
  }
};

exports.default = steps;
},{}],"js/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var flickityInit_1 = __importDefault(require("./components/flickityInit"));

var forEachPolyfill_1 = __importDefault(require("./components/forEachPolyfill"));

var steps_1 = __importDefault(require("./components/steps"));

document.addEventListener('DOMContentLoaded', function () {
  forEachPolyfill_1.default();
  flickityInit_1.default();
  steps_1.default();
}, false);
},{"./components/flickityInit":"js/components/flickityInit.ts","./components/forEachPolyfill":"js/components/forEachPolyfill.ts","./components/steps":"js/components/steps.ts"}]},{},["js/index.ts"], null)
//# sourceMappingURL=/js/index.js.map