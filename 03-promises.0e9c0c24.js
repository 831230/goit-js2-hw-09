!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector(".form");function c(n,t){var o=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){o?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){return e(i).Notify.success(n)})).catch((function(n){return e(i).Notify.failure(n)}))}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.delay.value),t=1;t<=u.amount.value;t++)c(t,n),n+=Number(u.step.value)}))}();
//# sourceMappingURL=03-promises.0e9c0c24.js.map
