(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{490:function(e,t,n){"use strict";n.r(t);n(2),n(198);var r=n(22),o=n(23),c=n(67),f=n(116),l=n(50),v=n(511);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y="islogged",m="tokenExpiry",d="userinfo",L=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"localLogin",value:function(e){this.tokenExpiry=new Date,localStorage.setItem(m,this.tokenExpiry),localStorage.setItem("userlogin",!0),localStorage.setItem(d,JSON.stringify({displayName:e.user.displayName,email:e.user.email,photoURL:e.user.photoURL})),console.log("userlogin",localStorage.getItem("userlogin"))}},{key:"Logout",value:function(){localStorage.removeItem(m),localStorage.removeItem(y),localStorage.removeItem(d)}},{key:"isAuthenticated",value:function(){return new Date(Date.now())!==new Date(localStorage.getItem(m))&&"true"===localStorage.getItem(y)}}]),n}(n.n(v).a);t.default=new L},511:function(e,t,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,c=o&&"function"==typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var f=Number.isNaN||function(e){return e!=e};function l(){l.init.call(this)}e.exports=l,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,c),r(n)}function c(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}x(e,t,c,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&x(e,"error",t,n)}(e,o,{once:!0})}))},l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var v=10;function h(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function y(e){return void 0===e._maxListeners?l.defaultMaxListeners:e._maxListeners}function m(e,t,n,r){var o,c,f,l;if(h(n),void 0===(c=e._events)?(c=e._events=Object.create(null),e._eventsCount=0):(void 0!==c.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),c=e._events),f=c[t]),void 0===f)f=c[t]=n,++e._eventsCount;else if("function"==typeof f?f=c[t]=r?[n,f]:[f,n]:r?f.unshift(n):f.push(n),(o=y(e))>0&&f.length>o&&!f.warned){f.warned=!0;var v=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");v.name="MaxListenersExceededWarning",v.emitter=e,v.type=t,v.count=f.length,l=v,console&&console.warn&&console.warn(l)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function L(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=d.bind(r);return o.listener=n,r.wrapFn=o,o}function w(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(o):O(o,o.length)}function _(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function O(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function x(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(c){r.once&&e.removeEventListener(t,o),n(c)}))}}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return v},set:function(e){if("number"!=typeof e||e<0||f(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");v=e}}),l.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||f(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},l.prototype.getMaxListeners=function(){return y(this)},l.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n="error"===e,r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return!1;if(n){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var f=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw f.context=o,f}var l=r[e];if(void 0===l)return!1;if("function"==typeof l)c(l,this,t);else{var v=l.length,h=O(l,v);for(i=0;i<v;++i)c(h[i],this,t)}return!0},l.prototype.addListener=function(e,t){return m(this,e,t,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,t){return m(this,e,t,!0)},l.prototype.once=function(e,t){return h(t),this.on(e,L(this,e,t)),this},l.prototype.prependOnceListener=function(e,t){return h(t),this.prependListener(e,L(this,e,t)),this},l.prototype.removeListener=function(e,t){var n,r,o,i,c;if(h(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){c=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,c||t)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},l.prototype.listeners=function(e){return w(this,e,!0)},l.prototype.rawListeners=function(e){return w(this,e,!1)},l.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):_.call(e,t)},l.prototype.listenerCount=_,l.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}}]);