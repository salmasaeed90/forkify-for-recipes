var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
_("object"==typeof self&&self)||_("object"==typeof g&&g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||b||Function("return this")();var w={},k={};// Detect IE8's incomplete defineProperty implementation
w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,H=T.call,I=S&&T.bind.bind(H,H),q={},A=(M=S?I:function(e){return function(){return H.apply(e,arguments)}})({}.toString),N=M("".slice);q=function(e){return N(A(e),8,-1)};var F=Object,R=M("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
x=k(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!F("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?R(e,""):F(e)}:F;var C={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(e){return null==e};var W=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
C=function(e){if(D(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(C(e))};var G={},U={},z={},B={},J={},Y="object"==typeof document&&document.all,Q=(J={all:Y,IS_HTMLDDA:void 0===Y&&void 0!==Y}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
B=J.IS_HTMLDDA?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e};var V=J.all;z=J.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:B(e)||e===V}:function(e){return"object"==typeof e?null!==e:B(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var Z={};Z=M({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=b.process,eo=b.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=es.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&en&&(!(i=en.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=en.match(/Chrome\/(\d+)/))&&(o=+i[1]),er=o;var ec=b.String;ee=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(et=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ec(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return B(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;// `Assert: IsCallable(argument) is true`
ed=function(e){if(B(e))return e;throw new eh(ep(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
el=function(e,t){var r=e[t];return D(r)?void 0:ed(r)};var ev={},eg=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ev=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new eg("Can't convert object to primitive value")};var ey={},em={};em=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ek="__core-js_shared__";eb=b[ek]||e_(ek,{}),(ey=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:em?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},e$=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eS=function(e){return e$(C(e))};var ej=M({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eO={},eL=0,eP=Math.random(),ex=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eL+eP,36)};var eM=b.Symbol,eT=ey("wks"),eH=ee?eM.for||eM:eM&&eM.withoutSetter||eO,eI=TypeError,eq=(eE(eT,e="toPrimitive")||(eT[e]=et&&eE(eM,e)?eM[e]:eH("Symbol."+e)),eT[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
U=function(e,t){if(!z(e)||K(e))return e;var r,n=el(e,eq);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
G=function(e){var t=U(e,"string");return K(t)?t:t+""};var eA={},eN={},eF=b.document,eR=z(eF)&&z(eF.createElement);eN=function(e){return eR?eF.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eA=!w&&!k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eC=Object.getOwnPropertyDescriptor;r=w?eC:function(e,t){if(e=P(e),t=G(t),eA)try{return eC(e,t)}catch(e){}if(eE(e,t))return L(!E(n,e,t),e[t])};var eD={},eW={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eW=w&&k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eU=String,ez=TypeError;// `Assert: Type(argument) is Object`
eG=function(e){if(z(e))return e;throw new ez(eU(e)+" is not an object")};var eB=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";a=w?eW?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eG(e),t=G(t),eG(r),eA)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e3={},e4=M(Function.toString);B(eb.inspectSource)||(eb.inspectSource=function(e){return e4(e)}),e3=eb.inspectSource;var e7={},e9={},e8=b.WeakMap;e9=B(e8)&&/native code/.test(String(e8));var e5={},e6=ey("keys");e5=function(e){return e6[e]||(e6[e]=eO(e))};var te={};te={};var tt="Object already initialized",tr=b.TypeError,tn=b.WeakMap;if(e9||eb.state){var ti=eb.state||(eb.state=new tn);/* eslint-disable no-self-assign -- prototype methods protection */ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e5("state");te[to]=!0,s=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,eD(e,to,t),t},c=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ta=(e7={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tc=String,tu=Object.defineProperty,tl=M("".slice),td=M("".replace),tp=M([].join),tf=w&&!k(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tv(function(){return B(this)&&ts(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tm={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t_=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):t$(r,t)};var tj={},tO={},tL=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tO=function(e){return e>0?tL(t_(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tj=function(e){return tO(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tP=function(e){return function(t,r,n){var i,o=P(t),a=tj(o),s=tb(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tP(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tP(!1)}.indexOf,tM=M([].push);tm=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tM(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eE(n,r=t[i++])&&(~tx(o,r)||tM(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tT)},d=Object.getOwnPropertySymbols;var tH=M([].concat);// all object keys, includes non-enumerable and symbols
ty=X("Reflect","ownKeys")||function(e){var t=l(eG(e));return d?tH(t,d(e)):t},tg=function(e,t,n){for(var i=ty(t),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,r(t,s))}};var tI={},tq=/#|\.prototype\./,tA=function(e,t){var r=tF[tN(e)];return r===tC||r!==tR&&(B(t)?k(t):!!t)},tN=tA.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tF=tA.data={},tR=tA.NATIVE="N",tC=tA.POLYFILL="P";tI=tA,/*
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
*/m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||e_(c,{}):(b[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tI(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eX(n,i,a,e)}};var tD={},tW={},tG=Function.prototype,tU=tG.apply,tz=tG.call;// eslint-disable-next-line es/no-reflect -- safe
tW="object"==typeof Reflect&&Reflect.apply||(S?tz.bind(tU):function(){return tz.apply(tU,arguments)});var tB={},tJ={},tY=(tJ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===q(e))return M(e)})(tJ.bind);// optional / simple context binding
tB=function(e,t){return ed(e),void 0===t?e:S?tY(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=X("document","documentElement");var tV={};tV=M([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};// eslint-disable-next-line redos/no-vulnerable -- safe
tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t0={};t0="process"===q(b.process);var t1=b.setImmediate,t2=b.clearImmediate,t3=b.process,t4=b.Dispatch,t7=b.Function,t9=b.MessageChannel,t8=b.String,t5=0,t6={},re="onreadystatechange";k(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=b.location});var rt=function(e){if(eE(t6,e)){var t=t6[e];delete t6[e],t()}},rr=function(e){return function(){rt(e)}},rn=function(e){rt(e.data)},ri=function(e){// old engines have not location.origin
b.postMessage(t8(e),p.protocol+"//"+p.host)};t1&&t2||(t1=function(e){tK(arguments.length,1);var t=B(e)?e:t7(e),r=tV(arguments,1);return t6[++t5]=function(){tW(t,void 0,r)},f(t5),t5},t2=function(e){delete t6[e]},t0?f=function(e){t3.nextTick(rr(e))}:t4&&t4.now?f=function(e){t4.now(rr(e))}:t9&&!tZ?(v=(h=new t9).port2,h.port1.onmessage=rn,f=tB(v.postMessage,v)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(ri)?(f=ri,b.addEventListener("message",rn,!1)):f=re in eN("script")?function(e){tQ.appendChild(eN("script"))[re]=function(){tQ.removeChild(this),rt(e)}}:function(e){setTimeout(rr(e),0)});var ro=(tD={set:t1,clear:t2}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==ro},{clearImmediate:ro});var ra=tD.set,rs={},rc={};/* global Bun -- Deno case */rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=b.Function,rl=/MSIE .\./.test(en)||rc&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rs=function(e,t){var r=t?2:1;return rl?function(n,i/* , ...arguments */){var o=tK(arguments.length,1)>r,a=B(n)?n:ru(n),s=o?tV(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rd=b.setImmediate?rs(ra,!1):ra;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rd},{setImmediate:rd});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
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
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
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
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
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
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
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
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rp}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rp:Function("r","regeneratorRuntime = r")(rp)}// to collect all constant we need in this architectuer
const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rh="016da31e-026e-4491-b383-a111b80211a2",rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},ry=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rm=async function(e){try{let t=await rv(`${rf}${e}?key=${rh}`);rg.recipe=ry(t),rg.bookmarks.some(t=>t.id===e)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1}catch(e){throw console.error("err"),e}},rb=async function(e){try{rg.search.query=e;let t=await rv(`${rf}?search=${e}&key=${rh}`);// console.log(data);&key=${API_KEY}
rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}));// state.search.page = 1;
// console.log(state.search.results);
}catch(e){console.log(e)}},r_=function(e){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;//0;
return rg.search.results.slice(t,r)},rw=function(e){rg.recipe.ingredients?.forEach(t=>{t.quantity=t.quantity*e/rg.recipe.servings;//newqu = oldqu * newserv / oldserv//2*8/4
}),rg.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rE=function(e){//add bookmark
rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rk()},rS=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),rk()};!function(){let e=localStorage.getItem("bookmarks");e&&(rg.bookmarks=JSON.parse(e))}();const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! please use the correct formate :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i};//
}),r={// id: newRecipe.id,
title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rv(`${rf}?key=${rh}`,r);console.log(n),rg.recipe=ry(n),rE(rg.recipe)}catch(e){throw e}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rO{_data;// _errorMessage = 'No recipes found for your query! Please try again!';
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
          <use href="${/*@__PURE__*/y(rj)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/y(rj)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
      <div>
        <svg>
          <use href="${/*@__PURE__*/y(rj)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}// import fracty from 'fracty';
class rL extends rO{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandelerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)}),e()}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rj)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rj)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings"  data-update-to='${this._data.servings-1}'>
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to='${this._data.servings+1}'>
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/y(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
              <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/y(rj)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rP//  ? fracty(el.quantity).toString() : ''
=new rL;class rx{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rM=new rx,rT=new class extends rO{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
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
              <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
            </svg>
          </div>
        </div>
        
        </a>
    </li>
    `}};class rH extends rO{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again!";_message;_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rI=new rH;class rq extends rO{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//page 1, and there are other pages
1===e&&t>1?`
      <div class="pagination">
      ${this.showAllpages(t)}
      ${this.showNextResult(e)}
      </div>
    `:e===t&&t>1?`
        <div class="pagination">
        ${this.showPrevResult(e)}
        ${this.showAllpages(t)}
        </div>
      `:e<t?`
        <div class="pagination">
        ${this.showPrevResult(e)}
        ${this.showNextResult(e)}
        ${this.showAllpages(t)}
        </div>
      `:"")}showNextResult(e){return`
    <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
        </svg>
    </button>
      `}showPrevResult(e){return`
    <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
    </button>
      `}showAllpages(e,t){return`
    <button disabeld class="btn--inline pagination__btn--center">
        <span>from ${e}</span>
    </button>
      `}}var rA// <button data-goto="${
=new rq;class rN extends rO{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message;addHandlerRender(e){window.addEventListener("load",e())}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rF=new rN;// import icons from 'url:../../img/icons.svg';
class rR extends rO{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was Successfully Uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggle(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggle.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggle.bind(this)),this._overlay.addEventListener("click",this.toggle.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// new FormData(form that we need input value from it)
// this=> this._parentElement =>> becouseOF addEventListener
let r=[...new FormData(this)],n=Object.fromEntries(r);//Array
e(n)})}_generateMarkup(){}}var rC=new rR;///////////////////////////////////////
const rD=async function(){try{let e=window.location.hash.slice(1);if(!e)return rP.renderMessage();rP.rendringSpinner(),rI.update(r_()),rF.update(rg.bookmarks),// 2) Loading recipe
await rm(e),rP.render(rg.recipe)}catch(e){// recipeView.renderError();
console.error(e)}},rW=async function(){try{rI.rendringSpinner();//1)get search query
let e=rM.getQuery();if(!e)return rI.renderMessage();//loading spinner
//2) load search resaults
await rb(e),rI.render(r_(1)),rA.render(rg.search);// showRes(1);
}catch(e){// resultsView.renderError();
console.log(e)}},rG=async function(e){try{await r$(e),rP.render(rg.recipe),rC.renderMessage(),rF.render(rg.bookmarks),//change id in url
window.history.pushState(null,"",`#${rg.recipe.id}`),//close from window
setTimeout(function(){rC.toggle()},2.5)}catch(e){rC.renderError(e.message)}};rF.addHandlerRender(function(){rF.render(rg.bookmarks)}),rP.addHandelerRender(rD),rP.addHandlerUpdateServings(function(e){//update the recipe servings (in state object)
rw(e),rP.render(rg.recipe)}),rP.addHandlerAddBookmark(function(){rg.recipe.bookmarked?rS(rg.recipe.id):rE(rg.recipe),rP.update(rg.recipe),rF.render(rg.bookmarks)}),rM.addHandlerSearch(rW),rA.addHandlerClick(function(e){rI.render(r_(e)),rA.render(rg.search)}),rC._addHandlerUpload(rG);//# sourceMappingURL=index.32622b7f.js.map

//# sourceMappingURL=index.32622b7f.js.map
