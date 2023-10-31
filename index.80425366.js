var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v,m,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||k||Function("return this")();var S={},j={};// Detect IE8's incomplete defineProperty implementation
S=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},L={};L=!j(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;O=L?$.bind($):function(){return $.apply($,arguments)};var F={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!F.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:F;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},H={},I=Function.prototype,q=I.call,N=L&&I.bind.bind(q,q),R={},A=(H=L?N:function(e){return function(){return q.apply(e,arguments)}})({}.toString),C=H("".slice);R=function(e){return C(A(e),8,-1)};var D=Object,z=H("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
T=j(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?z(e,""):D(e)}:D;var W={},G={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
G=function(e){return null==e};var U=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
W=function(e){if(G(e))throw new U("Can't call method on "+e);return e},x=function(e){return T(W(e))};var B={},J={},Y={},Q={},V={},K="object"==typeof document&&document.all,X=(V={all:K,IS_HTMLDDA:void 0===K&&void 0!==K}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
Q=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e};var Z=V.all;Y=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:Q(e)||e===Z}:function(e){return"object"==typeof e?null!==e:Q(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var er={};er=H({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=k.process,ec=k.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=el.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ea&&(!(a=ea.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ea.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ed=k.String;en=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ei=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ed(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ef=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return Q(t)&&er(t.prototype,ef(e))};var ep={},eh={},ev={},em=String;ev=function(e){try{return em(e)}catch(e){return"Object"}};var eg=TypeError;// `Assert: IsCallable(argument) is true`
eh=function(e){if(Q(e))return e;throw new eg(ev(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ep=function(e,t){var r=e[t];return G(r)?void 0:eh(r)};var ey={},eb=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ey=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=O(r,e))||Q(r=e.valueOf)&&!Y(n=O(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=O(r,e)))return n;throw new eb("Can't convert object to primitive value")};var e_={},ew={};ew=!1;var ek={},eE={},eS=Object.defineProperty;eE=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ej="__core-js_shared__";ek=k[ej]||eE(ej,{}),(e_=function(e,t){return ek[e]||(ek[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:ew?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eO={},eL={},e$=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eL=function(e){return e$(W(e))};var eF=H({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eO=Object.hasOwn||function(e,t){return eF(eL(e),t)};var eM={},eP=0,ex=Math.random(),eT=H(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eP+ex,36)};var eH=k.Symbol,eI=e_("wks"),eq=en?eH.for||eH:eH&&eH.withoutSetter||eM,eN=TypeError,eR=(eO(eI,e="toPrimitive")||(eI[e]=ei&&eO(eH,e)?eH[e]:eq("Symbol."+e)),eI[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
J=function(e,t){if(!Y(e)||ee(e))return e;var r,n=ep(e,eR);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!Y(r)||ee(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),ey(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
B=function(e){var t=J(e,"string");return ee(t)?t:t+""};var eA={},eC={},eD=k.document,ez=Y(eD)&&Y(eD.createElement);eC=function(e){return ez?eD.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eA=!S&&!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eW=Object.getOwnPropertyDescriptor;i=S?eW:function(e,t){if(e=x(e),t=B(t),eA)try{return eW(e,t)}catch(e){}if(eO(e,t))return P(!O(o,e,t),e[t])};var eG={},eU={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eU=S&&j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eJ=String,eY=TypeError;// `Assert: Type(argument) is Object`
eB=function(e){if(Y(e))return e;throw new eY(eJ(e)+" is not an object")};var eQ=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";c=S?eU?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eB(e),t=B(t),eB(r),eA)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e3=Function.prototype,e4=S&&Object.getOwnPropertyDescriptor,e9=eO(e3,"name")&&(!S||S&&e4(e3,"name").configurable),e7={},e8=H(Function.toString);Q(ek.inspectSource)||(ek.inspectSource=function(e){return e8(e)}),e7=ek.inspectSource;var e5={},e6={},te=k.WeakMap;e6=Q(te)&&/native code/.test(String(te));var tt={},tr=e_("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e6||ek.state){var ts=ek.state||(ek.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},l=function(e){return ts.get(e)||{}},d=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,u=function(e,t){if(eO(e,tc))throw new to(ti);return t.facade=e,eG(e,tc,t),t},l=function(e){return eO(e,tc)?e[tc]:{}},d=function(e){return eO(e,tc)}}var tu=(e5={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e5.get,tf=String,tp=Object.defineProperty,th=H("".slice),tv=H("".replace),tm=H([].join),tg=S&&!j(function(){return 8!==tp(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e2=function(e,t,r){"Symbol("===th(tf(t),0,7)&&(t="["+tv(tf(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e9&&e.name!==t)&&(S?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eO(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?S&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eO(n,"source")||(n.source=tm(ty,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tb(function(){return Q(this)&&tl(this).source||e7(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},tj={},tO=Math.ceil,tL=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tj=Math.trunc||function(e){var t=+e;return(t>0?tL:tO)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tS=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tj(t)};var t$=Math.max,tF=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tE=function(e,t){var r=tS(e);return r<0?t$(r+t,0):tF(r,t)};var tM={},tP={},tx=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tP=function(e){return e>0?tx(tS(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tM=function(e){return tP(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tT=function(e){return function(t,r,n){var i,o=x(t),a=tM(o),s=tE(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tH={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tT(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tT(!1)}.indexOf,tI=H([].push);tk=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eO(tn,r)&&eO(n,r)&&tI(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eO(n,r=t[i++])&&(~tH(o,r)||tI(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tk(e,tq)},p=Object.getOwnPropertySymbols;var tN=H([].concat);// all object keys, includes non-enumerable and symbols
tw=et("Reflect","ownKeys")||function(e){var t=f(eB(e));return p?tN(t,p(e)):t},t_=function(e,t,r){for(var n=tw(t),o=0;o<n.length;o++){var a=n[o];eO(e,a)||r&&eO(r,a)||c(e,a,i(t,a))}};var tR={},tA=/#|\.prototype\./,tC=function(e,t){var r=tz[tD(e)];return r===tG||r!==tW&&(Q(t)?j(t):!!t)},tD=tC.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tz=tC.data={},tW=tC.NATIVE="N",tG=tC.POLYFILL="P";tR=tC,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||eE(c,{}):(k[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e1(r,n,a,e)}};var tU={},tB={},tJ=Function.prototype,tY=tJ.apply,tQ=tJ.call;// eslint-disable-next-line es/no-reflect -- safe
tB="object"==typeof Reflect&&Reflect.apply||(L?tQ.bind(tY):function(){return tQ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return H(e)})(tK.bind);// optional / simple context binding
tV=function(e,t){return eh(e),void 0===t?e:L?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=et("document","documentElement");var t0={};t0=H([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t3={};// eslint-disable-next-line redos/no-vulnerable -- safe
t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t4={};t4="process"===R(k.process);var t9=k.setImmediate,t7=k.clearImmediate,t8=k.process,t5=k.Dispatch,t6=k.Function,re=k.MessageChannel,rt=k.String,rr=0,rn={},ri="onreadystatechange";j(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=k.location});var ro=function(e){if(eO(rn,e)){var t=rn[e];delete rn[e],t()}},ra=function(e){return function(){ro(e)}},rs=function(e){ro(e.data)},rc=function(e){// old engines have not location.origin
k.postMessage(rt(e),h.protocol+"//"+h.host)};t9&&t7||(t9=function(e){t1(arguments.length,1);var t=Q(e)?e:t6(e),r=t0(arguments,1);return rn[++rr]=function(){tB(t,void 0,r)},v(rr),rr},t7=function(e){delete rn[e]},t4?v=function(e){t8.nextTick(ra(e))}:t5&&t5.now?v=function(e){t5.now(ra(e))}:re&&!t3?(g=(m=new re).port2,m.port1.onmessage=rs,v=tV(g.postMessage,g)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!j(rc)?(v=rc,k.addEventListener("message",rs,!1)):v=ri in eC("script")?function(e){tZ.appendChild(eC("script"))[ri]=function(){tZ.removeChild(this),ro(e)}}:function(e){setTimeout(ra(e),0)});var ru=(tU={set:t9,clear:t7}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ru},{clearImmediate:ru});var rl=tU.set,rd={},rf={};/* global Bun -- Deno case */rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=k.Function,rh=/MSIE .\./.test(ea)||rf&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rd=function(e,t){var r=t?2:1;return rh?function(n,i/* , ...arguments */){var o=t1(arguments.length,1)>r,a=Q(n)?n:rp(n),s=o?t0(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rv=k.setImmediate?rd(rl,!1):rl;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rv},{setImmediate:rv});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new L(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=m.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rm}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}// to collect all constant we need in this architectuer
const rg="https://forkify-api.herokuapp.com/api/v2/recipes/",ry="016da31e-026e-4491-b383-a111b80211a2",rb=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},r_={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rw=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rk=async function(e){try{let t=await rb(`${rg}${e}?key=${ry}`);r_.recipe=rw(t),r_.bookmarks.some(t=>t.id===e)?r_.recipe.bookmarked=!0:r_.recipe.bookmarked=!1}catch(e){throw console.error("err"),e}},rE=async function(e){try{r_.search.query=e;let t=await rb(`${rg}?search=${e}&key=${ry}`);// console.log(data);
r_.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}));// state.search.page = 1;
// console.log(state.search.results);
}catch(e){throw e}},rS=function(e){r_.search.page=e;let t=(e-1)*r_.search.resultsPerPage,r=e*r_.search.resultsPerPage;//0;
return r_.search.results.slice(t,r)},rj=function(e){r_.recipe.ingredients?.forEach(t=>{t.quantity=t.quantity*e/r_.recipe.servings;//newqu = oldqu * newserv / oldserv//2*8/4
}),r_.recipe.servings=e},rO=function(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))},rL=function(e){//add bookmark
r_.bookmarks.push(e),e.id===r_.recipe.id&&(r_.recipe.bookmarked=!0),rO()},r$=function(e){let t=r_.bookmarks.findIndex(t=>t.id===e);r_.bookmarks.splice(t,1),e===r_.recipe.id&&(r_.recipe.bookmarked=!1),rO()};!function(){let e=localStorage.getItem("bookmarks");e&&(r_.bookmarks=JSON.parse(e))}();const rF=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! please use the correct formate :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={// id: newRecipe.id,
title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rb(`${rg}?key=${ry}`,r);r_.recipe=rw(n),rL(r_.recipe)}catch(e){throw e}};var rM={};rM=new URL("icons.c14567a0.svg",import.meta.url).toString();class rP{_data;// _errorMessage = 'No recipes found for your query! Please try again!';
/**
   * render the recived object on the dom
   * @param {object | object[]} data the data to be rendered
   * @param {boolean} [render =true] if false, create markup string instead of rendering to the dom
   * @returns {undefiend | string} A markup string is rturned if render = false
   * @this {object} view instance
   * @auther salma saeed
   * todo finish implementation
   */render(e,t=!0){// if (!data || (Array.isArray(data) && data.length === 0))
//   return this.renderError();
this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];!e.isEqualNode(r)&&e.firstChild?.nodeValue.trim()!==""&&r&&r.textContent&&e.textContent,e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}//render spinner
rendringSpinner=function(){let e=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/_(rM)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/_(rM)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/_(rM)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rx extends rP{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandelerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)}),e()}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings"  data-update-to='${this._data.servings-1}'>
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to='${this._data.servings+1}'>
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/_(rM)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/_(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients?.map(this._generateIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/_(rM)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rT=new rx;class rH{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rH,rq=new class extends rP{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/_(rM)}#icon-user"></use>
            </svg>
          </div>
        </div>
        
        </a>
    </li>
    `}};class rN extends rP{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again!";_message;_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rR=new rN;class rA extends rP{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//page 1, and there are other pages
1===e&&t>1?this.showNextResult(e):e===t&&t>1?this.showPrevResult(e):e<t?`
        <div class="pagination">
        ${this.showPrevResult(e)}
        ${this.showNextResult(e)}
        </div>
      `:"")}showNextResult(e){return`
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rM)}#icon-arrow-right"></use>
        </svg>
    </button>
      `}showPrevResult(e){return`
    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rM)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
    </button>
      `}}var rC// <button data-goto="${
=new rA;class rD extends rP{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message;addHandlerRender(e){window.addEventListener("load",e())}_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rz=new rD;// import icons from 'url:../../img/icons.svg';
class rW extends rP{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was Successfully Uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggle(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggle.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggle.bind(this)),this._overlay.addEventListener("click",this.toggle.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// new FormData(form that we need input value from it)
// this=> this._parentElement =>> becouseOF addEventListener
let r=[...new FormData(this)],n=Object.fromEntries(r);//Array
e(n)})}_generateMarkup(){}}var rG=new rW;// if (module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
const rU=async function(){try{let e=window.location.hash.slice(1);if(!e)return rT.renderMessage();rT.rendringSpinner(),rR.update(rS()),rz.update(r_.bookmarks),// 2) Loading recipe
await rk(e),rT.render(r_.recipe)}catch(e){// recipeView.renderError();
console.error(e)}},rB=async function(){try{rR.rendringSpinner();//1)get search query
let e=rI.getQuery();if(!e)return rR.renderMessage();//loading spinner
//2) load search resaults
await rE(e),rR.render(rS(1)),rC.render(r_.search);// showRes(1);
}catch(e){rR.renderError()}},rJ=async function(e){try{await rF(e),rT.render(r_.recipe),rG.renderMessage(),rz.render(r_.bookmarks),//change id in url
window.history.pushState(null,"",`#${r_.recipe.id}`),//close from window
setTimeout(function(){rG.toggle()},2.5)}catch(e){rG.renderError(e.message)}};rz.addHandlerRender(function(){rz.render(r_.bookmarks)}),rT.addHandelerRender(rU),rT.addHandlerUpdateServings(function(e){//update the recipe servings (in state object)
rj(e),rT.render(r_.recipe)}),rT.addHandlerAddBookmark(function(){r_.recipe.bookmarked?r$(r_.recipe.id):rL(r_.recipe),rT.update(r_.recipe),rz.render(r_.bookmarks)}),rI.addHandlerSearch(rB),rC.addHandlerClick(function(e){rR.render(rS(e)),rC.render(r_.search)}),rG._addHandlerUpload(rJ);//# sourceMappingURL=index.80425366.js.map

//# sourceMappingURL=index.80425366.js.map
