parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JDu1":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach(function(t){r(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function r(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(t){var n=o(t,"string");return"symbol"==e(n)?n:String(n)}function o(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getData=i,exports.getResults=s,exports.setData=y;var m={selectedProgram:.1,cost:12e6,minPrice:375e3,maxPrice:1e8,minPaymentPercents:.15,maxPaymentPercents:.9,paymentPercents:.5,payment:6e6,getMinPayment:function(){return this.cost*this.minPaymentPercents},getMaxPayment:function(){return this.cost*this.maxPaymentPercents},minYear:1,maxYear:30,time:10,programs:{base:.1,it:.047,gov:.067,zero:.12}},c={rate:m.selectedProgram};function i(){return n({},m)}function s(){return n({},c)}function y(e){console.log("New data",e),"radioProgram"===e.onUpdate&&("zero-value"===e.id?m.minPaymentPercents=0:m.minPaymentPercents=.15),"inputCost"!==e.onUpdate&&"costSlider"!==e.onUpdate||(e.cost<m.minPrice&&(e.cost=m.minPrice),e.cost>m.maxPrice&&(e.cost=m.maxPrice),m.payment>m.getMaxPayment()&&(m.payment=m.getMaxPayment()),m.payment<m.getMinPayment()&&(m.payment=m.getMinPayment()),m.paymentPercents=100*m.payment/e.cost/100),"inputPayment"===e.onUpdate&&(e.paymentPercents=100*e.payment/m.cost/100,e.paymentPercents>m.maxPaymentPercents&&(e.paymentPercents=m.maxPaymentPercents,e.payment=m.cost*m.maxPaymentPercents),e.paymentPercents<m.minPaymentPercents&&(e.paymentPercents=m.minPaymentPercents,e.payment=m.cost*m.minPaymentPercents)),"paymentSlider"===e.onUpdate&&(e.paymentPercents=e.paymentPercents/100,m.payment=m.cost*e.paymentPercents),"inputTime"===e.onUpdate&&(e.time>m.maxYear&&(e.time=m.maxYear),e.time<m.minYear&&(e.time=m.minYear));var t=12*(m=n(n({},m),e)).time,r=m.cost-m.payment,a=m.selectedProgram/12,o=Math.pow(1+a,t),i=r*a*o/(o-1),s=i*t-r;c={rate:m.selectedProgram,totalAmount:r,monthPayment:i,overPayment:s},console.log("Updated data",m),console.log("New resulst",c)}
},{}],"bXvD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.priceFormatterDecimals=exports.priceFormatter=void 0;var r=exports.priceFormatter=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:0}),e=exports.priceFormatterDecimals=new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",maximumFractionDigits:2});
},{}],"WpxY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./../utils/formatters.js");function t(t){document.querySelector("#total-percent").innerHTML=100*t.rate+"%",document.querySelector("#total-month-payment").innerHTML=e.priceFormatterDecimals.format(t.monthPayment),document.querySelector("#total-cost").innerHTML=e.priceFormatter.format(t.totalAmount),document.querySelector("#total-overpayment").innerHTML=e.priceFormatterDecimals.format(t.overPayment)}var r=exports.default=t;
},{"./../utils/formatters.js":"bXvD"}],"HRGm":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=i(e,"string");return"symbol"==t(r)?r:String(r)}function i(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function u(t,e){t.dispatchEvent(new CustomEvent("updateForm",{bubbles:!0,detail:r({},e)}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=exports.default=u;
},{}],"GLMY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./../utils/updateModel.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=document.querySelectorAll('input[name="program"]'),o=t().programs,u=o.base,a=o.it,n=o.gov,l=o.zero;document.querySelector("#base-value").value=u,document.querySelector("#it-value").value=a,document.querySelector("#gov-value").value=n,document.querySelector("#zero-value").value=l,document.querySelector("#base-text").innerText=100*u+"%",document.querySelector("#it-text").innerText=100*a+"%",document.querySelector("#gov-text").innerText=100*n+"%",document.querySelector("#zero-text").innerText=100*l+"%",r.forEach(function(t){t.addEventListener("change",function(){(0,e.default)(this,{onUpdate:"radioProgram",selectedProgram:parseFloat(this.value),id:this.id})})})}var o=exports.default=r;
},{"./../utils/updateModel.js":"HRGm"}],"QpXM":[function(require,module,exports) {
"use strict";function e(e){document.querySelector("#percents-from").innerText=100*e.minPaymentPercents+"%"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateMinPercents=e;
},{}],"BZIA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./../utils/updateModel.js"));function a(e){return e&&e.__esModule?e:{default:e}}function t(a){var t=a(),r=document.querySelector("#input-cost"),s=new Cleave(r,{numeral:!0,numeralThousandsGroupStyle:"thousand",delimiter:" "});return s.setRawValue(t.cost),r.addEventListener("input",function(){var a=+s.getRawValue();(a<t.minPrice||a>t.maxPrice)&&r.closest(".param__details").classList.add("param__details--error"),a>=t.minPrice&&a<=t.maxPrice&&r.closest(".param__details").classList.remove("param__details--error"),(0,e.default)(r,{cost:a,onUpdate:"inputCost"})}),r.addEventListener("change",function(){var a=+s.getRawValue();a>t.maxPrice&&(r.closest(".param__details").classList.remove("param__details--error"),s.setRawValue(t.maxPrice)),a<t.minPrice&&(r.closest(".param__details").classList.remove("param__details--error"),s.setRawValue(t.minPrice)),(0,e.default)(r,{cost:+s.getRawValue(),onUpdate:"inputCost"})}),s}var r=exports.default=t;
},{"./../utils/updateModel.js":"HRGm"}],"MCNo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./../utils/updateModel.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=document.querySelector("#slider-cost"),o=t();return noUiSlider.create(r,{start:o.cost,connect:"lower",tooltips:!0,step:1e5,range:{min:o.minPrice,"1%":[4e5,1e5],"50%":[1e7,5e5],max:o.maxPrice},format:wNumb({decimals:0,thousand:" ",suffix:""})}),r.noUiSlider.on("slide",function(){var t=r.noUiSlider.get();t=t.split(".")[0],t=parseInt(String(t).replace(/ /g,"")),(0,e.default)(r,{cost:t,onUpdate:"costSlider"})}),r}var o=exports.default=r;
},{"./../utils/updateModel.js":"HRGm"}],"R3jP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("../utils/updateModel.js"));function a(e){return e&&e.__esModule?e:{default:e}}function t(a){var t=document.querySelector("#input-downpayment"),r=new Cleave(t,{numeral:!0,numeralThousandsGroupStyle:"thousand",delimiter:" "});return r.setRawValue(a().payment),t.addEventListener("input",function(){var n=+r.getRawValue();(n<a().getMinPayment()||n>a().getMaxPayment())&&t.closest(".param__details").classList.add("param__details--error"),n>=a().getMinPayment()&&n<=a().getMaxPayment()&&t.closest(".param__details").classList.remove("param__details--error"),(0,e.default)(t,{payment:n,onUpdate:"inputPayment"})}),t.addEventListener("change",function(){var n=+r.getRawValue();n>a().getMaxPayment()&&(t.closest(".param__details").classList.remove("param__details--error"),r.setRawValue(a().getMaxPayment())),n<a().getMinPayment()&&(t.closest(".param__details").classList.remove("param__details--error"),r.setRawValue(a().getMinPayment())),(0,e.default)(t,{payment:n,onUpdate:"inputPayment"})}),r}var r=exports.default=t;
},{"../utils/updateModel.js":"HRGm"}],"K5BG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../utils/updateModel.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=document.querySelector("#slider-downpayment");return noUiSlider.create(r,{start:100*t().paymentPercents,connect:"lower",tooltips:!0,step:1,range:{min:100*t().minPaymentPercents,max:100*t().maxPaymentPercents},format:wNumb({decimals:0,thousand:" ",suffix:""})}),r.noUiSlider.on("slide",function(){var t=r.noUiSlider.get();t=t.split(".")[0],t=parseInt(String(t).replace(/ /g,"")),(0,e.default)(r,{paymentPercents:t,onUpdate:"paymentSlider"})}),r}var n=exports.default=r;
},{"../utils/updateModel.js":"HRGm"}],"ahOl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("../utils/updateModel.js"));function a(e){return e&&e.__esModule?e:{default:e}}function t(a){var t=a(),r=document.querySelector("#input-term"),s=new Cleave(r,{numeral:!0,numeralThousandsGroupStyle:"thousand",delimiter:" "});return s.setRawValue(t.time),r.addEventListener("input",function(){var a=+s.getRawValue();(a<t.minYear||a>t.maxYear)&&r.closest(".param__details").classList.add("param__details--error"),a>=t.minYear&&a<=t.maxYear&&r.closest(".param__details").classList.remove("param__details--error"),(0,e.default)(r,{time:a,onUpdate:"inputTime"})}),r.addEventListener("change",function(){var a=+s.getRawValue();a>t.maxYear&&(r.closest(".param__details").classList.remove("param__details--error"),s.setRawValue(t.maxYear)),a<t.minYear&&(r.closest(".param__details").classList.remove("param__details--error"),s.setRawValue(t.minYear)),(0,e.default)(r,{time:+s.getRawValue(),onUpdate:"inputTime"})}),s}var r=exports.default=t;
},{"../utils/updateModel.js":"HRGm"}],"gQmY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../utils/updateModel.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=document.querySelector("#slider-term"),i=t();return noUiSlider.create(r,{start:i.time,connect:"lower",tooltips:!0,step:1,range:{min:i.minYear,max:i.maxYear},format:wNumb({decimals:0,thousand:" ",suffix:""})}),r.noUiSlider.on("slide",function(){var t=r.noUiSlider.get();t=t.split(".")[0],t=parseInt(String(t).replace(/ /g,"")),(0,e.default)(r,{time:t,onUpdate:"timeSlider"})}),r}var i=exports.default=r;
},{"../utils/updateModel.js":"HRGm"}],"niua":[function(require,module,exports) {
"use strict";var t=p(require("./model.js")),e=l(require("./view/updateResultsView.js")),r=l(require("./view/radioPrograms.js")),n=require("./view/utils.js"),o=l(require("./view/costInput.js")),i=l(require("./view/costRange.js")),a=l(require("./view/paymentInput.js")),u=l(require("./view/paymentRange.js")),c=l(require("./view/timeInput.js")),s=l(require("./view/timeRange.js"));function l(t){return t&&t.__esModule?t:{default:t}}function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(f=function(t){return t?r:e})(t)}function p(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=f(e);if(r&&r.has(t))return r.get(t);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}return n.default=t,r&&r.set(t,n),n}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),u=new T(n||[]);return o(a,"_invoke",{value:_(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function L(){}var x={};s(x,a,function(){return this});var j=Object.getPrototypeOf,E=j&&j(j(F([])));E&&E!==r&&n.call(E,a)&&(x=E);var S=L.prototype=w.prototype=Object.create(x);function O(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function P(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==h(l)&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(l).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,u)})}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=q(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function q(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,q(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return b.prototype=L,o(S,"constructor",{value:L,configurable:!0}),o(L,"constructor",{value:b,configurable:!0}),b.displayName=s(L,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(P.prototype),s(P.prototype,u,function(){return this}),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(S),s(S,c,"Generator"),s(S,a,function(){return this}),s(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),U(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;U(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function y(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,u,"next",t)}function u(t){y(i,n,o,a,u,"throw",t)}a(void 0)})}}window.onload=function(){var l=t.getData;(0,r.default)(l);var f=(0,o.default)(l),p=(0,i.default)(l),h=(0,a.default)(l),y=(0,u.default)(l),m=(0,c.default)(l),g=(0,s.default)(l);t.setData({});var w=t.getResults();(0,e.default)(w),document.addEventListener("updateForm",function(r){t.setData(r.detail);var o=t.getData(),i=t.getResults();!function(t){"radioProgram"===t.onUpdate&&((0,n.updateMinPercents)(t),y.noUiSlider.updateOptions({range:{min:100*t.minPaymentPercents,max:100*t.maxPaymentPercents}}));"inputCost"!==t.onUpdate&&f.setRawValue(t.cost);"costSlider"!==t.onUpdate&&p.noUiSlider.set(t.cost);"inputPayment"!==t.onUpdate&&h.setRawValue(t.payment);"paymentSlider"!==t.onUpdate&&y.noUiSlider.set(100*t.paymentPercents);"inputTime"!==t.onUpdate&&m.setRawValue(t.time);"timeSlider"!==t.onUpdate&&g.noUiSlider.set(t.time)}(o),(0,e.default)(i)});var b=document.querySelector("#openFormBtn"),L=document.querySelector("#orderForm"),x=document.querySelector("#submitFormBtn");b.addEventListener("click",function(){L.classList.remove("none"),b.classList.add("none")}),L.addEventListener("submit",function(e){e.preventDefault();var r=new FormData(L);function n(){return(n=v(d().mark(function e(){var n,o,i,a,u,c;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(t){var e=t.split(".");if("html"===e[e.length-1]){e.pop();var r=e.join("."),n=r.split("/");return n.pop(),r=n.join("/")+"/"}return t},n=t.getData(),o=t.getResults(),i=a(document.location.href),e.next=6,fetch(i+"mail.php",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({form:{name:r.get("name"),email:r.get("email"),phone:r.get("phone")},data:n,results:o})});case 6:return u=e.sent,e.next=9,u.text();case 9:c=e.sent,console.log(c),x.removeAttribute("disabled",!0),x.innerText="Оформить заявку",L.querySelectorAll("input").forEach(function(t){t.removeAttribute("disabled",!0)}),L.reset(),L.classList.add("none"),"SUCCESS"===c?document.getElementById("success").classList.remove("none"):document.getElementById("error").classList.remove("none");case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}console.log(r),console.log(r.get("name")),console.log(r.get("email")),console.log(r.get("phone")),x.setAttribute("disabled",!0),x.innerText="Заявка отправляется...",L.querySelectorAll("input").forEach(function(t){t.setAttribute("disabled",!0)}),function(){n.apply(this,arguments)}()})};
},{"./model.js":"JDu1","./view/updateResultsView.js":"WpxY","./view/radioPrograms.js":"GLMY","./view/utils.js":"QpXM","./view/costInput.js":"BZIA","./view/costRange.js":"MCNo","./view/paymentInput.js":"R3jP","./view/paymentRange.js":"K5BG","./view/timeInput.js":"ahOl","./view/timeRange.js":"gQmY"}]},{},["niua"], null)
//# sourceMappingURL=/controller.js.map