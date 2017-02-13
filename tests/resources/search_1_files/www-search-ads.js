(function(){for(var n,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=["String",
"prototype","startsWith"],da=0;da<ca.length-1;da++){var ea=ca[da];ea in ba||(ba[ea]={});ba=ba[ea]}
var fa=ca[ca.length-1],ga=ba[fa],ha=ga?ga:function(a,b){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");c=this+"";a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};
ha!=ga&&null!=ha&&aa(ba,fa,{configurable:!0,writable:!0,value:ha});var p=this;function q(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function ia(){}
function ja(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function r(a){return"array"==ja(a)}
function ka(a){var b=ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function t(a){return"string"==typeof a}
function la(a){return"function"==ja(a)}
function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return w.apply(null,arguments)}
var pa=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&Object.prototype.hasOwnProperty.call(d,e)?d=d[e]:d=d[e]={}:d[e]=b}
function z(a,b){function c(){}
c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ba=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function qa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function sa(a){if(!ta.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ua,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(va,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ya,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(za,"&#0;"));return a}
var ua=/&/g,va=/</g,wa=/>/g,xa=/"/g,ya=/'/g,za=/\x00/g,ta=/[\x00&<>"']/;function B(a){return-1!=a.indexOf("&")?"document"in p?Aa(a):Ba(a):a}
function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=p.document.createElement("div");return a.replace(Ca,function(a,e){var d=b[a];if(d)return d;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(d=String.fromCharCode(g))}d||(c.innerHTML=a+" ",d=c.firstChild.nodeValue.slice(0,-1));return b[a]=d})}
function Ba(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var b=Number("0"+c.substr(1));if(!isNaN(b))return String.fromCharCode(b)}return a}})}
var Ca=/&([^;\s<&]+);?/g,Da=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ea(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Da("0",Math.max(0,2-b))+a}
function Fa(a,b){return a<b?-1:a>b?1:0}
;var Ga=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=t(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Ia=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ja(a,b){return 0<=Ga(a,b)}
function Ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function La(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ma(a){for(var b=Math.random,c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}}
;function Na(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function Oa(a,b){return a.classList?a.classList.contains(b):Ja(Na(a),b)}
function Pa(a,b){a.classList?a.classList.add(b):Oa(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Qa(a){a.classList?a.classList.remove("contains-mute-survey"):Oa(a,"contains-mute-survey")&&(a.className=Ha(Na(a),function(a){return"contains-mute-survey"!=a}).join(" "))}
;function Ra(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Sa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Ta(a){var b=E,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ua(){var a=F,b;for(b in a)return!1;return!0}
var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Xa={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var G;a:{var Ya=p.navigator;if(Ya){var Za=Ya.userAgent;if(Za){G=Za;break a}}G=""}function H(a){return-1!=G.indexOf(a)}
;function I(){this.b=$a}
I.prototype.C=!0;I.prototype.u=function(){return""};
I.prototype.toString=function(){return"Const{}"};
function ab(a){return a instanceof I&&a.constructor===I&&a.b===$a?"":"type_error:Const"}
var $a={};function bb(){this.b="";this.f=cb}
bb.prototype.C=!0;var cb={};bb.prototype.u=function(){return this.b};
function db(a){var b=new bb;b.b=a;return b}
var eb=db(""),fb=/^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;function J(){this.b=gb}
J.prototype.C=!0;J.prototype.u=function(){return""};
J.prototype.T=!0;J.prototype.H=function(){return 1};
var gb={};function K(){this.b="";this.f=hb}
K.prototype.C=!0;K.prototype.u=function(){return this.b};
K.prototype.T=!0;K.prototype.H=function(){return 1};
var ib=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,hb={};function jb(a){var b=new K;b.b=a;return b}
jb("about:blank");function L(){this.b="";this.g=kb;this.f=null}
L.prototype.T=!0;L.prototype.H=function(){return this.f};
L.prototype.C=!0;L.prototype.u=function(){return this.b};
function lb(a){return a instanceof L&&a.constructor===L&&a.g===kb?a.b:"type_error:SafeHtml"}
var mb=/^[a-zA-Z0-9-]+$/,nb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},ob={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
function pb(a,b,c){var d=String(a);if(!mb.test(d))throw Error("Invalid tag name <"+d+">.");if(d.toUpperCase()in ob)throw Error("Tag name <"+d+"> is not allowed for SafeHtml.");a=String(a);var d=null,e,f="<"+a,g="";if(b)for(e in b){if(!mb.test(e))throw Error('Invalid attribute name "'+e+'".');var h=b[e];if(null!=h){var k,l=a;k=e;var m=h;if(m instanceof I)m=ab(m);else if("style"==k.toLowerCase()){h=void 0;l=m;if(!ma(l))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+
typeof l+" given: "+l);if(!(l instanceof bb)){m="";for(h in l){if(!/^[-_a-zA-Z0-9]+$/.test(h))throw Error("Name allows only [-_a-zA-Z0-9], got: "+h);var u=l[h];if(null!=u){if(u instanceof I)u=ab(u);else if(fb.test(u)){for(var A=!0,v=!0,y=0;y<u.length;y++){var D=u.charAt(y);"'"==D&&v?A=!A:'"'==D&&A&&(v=!v)}A&&v||(u="zClosurez")}else u="zClosurez";m+=h+":"+u+";"}}l=m?db(m):eb}m=l instanceof bb&&l.constructor===bb&&l.f===cb?l.b:"type_error:SafeStyle"}else{if(/^on/i.test(k))throw Error('Attribute "'+
k+'" requires goog.string.Const value, "'+m+'" given.');if(k.toLowerCase()in nb)if(m instanceof J)m=m instanceof J&&m.constructor===J&&m.b===gb?"":"type_error:TrustedResourceUrl";else if(m instanceof K)m=m instanceof K&&m.constructor===K&&m.f===hb?m.b:"type_error:SafeUrl";else if(t(m))h=m,h instanceof K||(h=h.C?h.u():String(h),ib.test(h)||(h="about:invalid#zClosurez"),h=jb(h)),m=h.u();else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+
m+'" given.');}m.C&&(m=m.u());k=k+'="'+sa(String(m))+'"';g+=" "+k}}e=f+g;null!=c?r(c)||(c=[c]):c=[];!0===Xa[a.toLowerCase()]?e+=">":(c=qb(c),e+=">"+lb(c)+"</"+a+">",d=c.H());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?d=0:d=null);return M(e,d)}
function qb(a){function b(a){if(r(a))C(a,b);else{var e;a instanceof L?e=a:(e=null,a.T&&(e=a.H()),a=sa(a.C?a.u():String(a)),e=M(a,e));d+=lb(e);e=e.H();0==c?c=e:0!=e&&c!=e&&(c=null)}}
var c=0,d="";C(arguments,b);return M(d,c)}
var kb={};function M(a,b){var c=new L;c.b=a;c.f=b;return c}
M("<!DOCTYPE html>",0);var rb=M("",0);M("<br>",0);function sb(a,b){var c=tb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var ub=H("Opera"),N=H("Trident")||H("MSIE"),vb=H("Edge"),wb=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),xb=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");function yb(){var a=p.document;return a?a.documentMode:void 0}
var zb;a:{var Ab="",Bb=function(){var a=G;if(wb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(vb)return/Edge\/([\d\.]+)/.exec(a);if(N)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xb)return/WebKit\/(\S+)/.exec(a);if(ub)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bb&&(Ab=Bb?Bb[1]:"");if(N){var Cb=yb();if(null!=Cb&&Cb>parseFloat(Ab)){zb=String(Cb);break a}}zb=Ab}var Db=zb,tb={};
function O(a){return sb(a,function(){for(var b=0,c=ra(String(Db)).split("."),d=ra(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Fa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Fa(0==g[2].length,0==h[2].length)||Fa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var Eb;var Fb=p.document;Eb=Fb&&N?yb()||("CSS1Compat"==Fb.compatMode?parseInt(Db,10):5):void 0;var Gb=!N||9<=Number(Eb);!wb&&!N||N&&9<=Number(Eb)||wb&&O("1.9.1");N&&O("9");var Hb=N||ub||xb;function Ib(a,b){a.innerHTML=lb(b)}
;function Jb(a){var b=document;return t(a)?b.getElementById(a):a}
function Kb(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Lb(a,b)}
function P(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=Lb(a,b)[0];return d||null}
function Lb(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var g=c.getElementsByClassName(a);return g}g=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=g[d];d++){var h=c.className;"function"==typeof h.split&&Ja(h.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return g}
function Mb(a,b){Ra(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Nb.hasOwnProperty(d)?a.setAttribute(Nb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Nb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Q(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Gb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',sa(g.name),'"');if(g.type){f.push(' type="',sa(g.type),'"');var h={};Wa(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:r(g)?f.className=g.join(" "):Mb(f,g));2<d.length&&Ob(e,f,d,2);return f}
function Ob(a,b,c,d){function e(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];if(!ka(f)||ma(f)&&0<f.nodeType)e(f);else{var g;a:{if(f&&"number"==typeof f.length){if(ma(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if(la(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ka(f):f,e)}}}
function Pb(a,b){Ob(Qb(a),a,arguments,1)}
function Rb(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Sb(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Tb(a){var b;if(Hb&&!(N&&O("9")&&!O("10")&&p.SVGElement&&a instanceof p.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ma(b)&&1==b.nodeType?b:null}
function Qb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ub(a){var b=String.fromCharCode(215);if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Rb(a),a.appendChild(Qb(a).createTextNode(String(b)))}
function Vb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Wb={W:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},ia:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},Xb=Wb,Xb=Wb;var Yb={AED:[2,"dh","\u062f.\u0625.","DH"],ALL:[0,"Lek","Lek"],AUD:[2,"$","AU$"],BDT:[2,"\u09f3","Tk"],BGN:[2,"lev","lev"],BRL:[2,"R$","R$"],CAD:[2,"$","C$"],CDF:[2,"FrCD","CDF"],CHF:[2,"CHF","CHF"],CLP:[0,"$","CL$"],CNY:[2,"\u00a5","RMB\u00a5"],COP:[32,"$","COL$"],CRC:[0,"\u20a1","CR\u20a1"],CZK:[50,"K\u010d","K\u010d"],DKK:[50,"kr.","kr."],DOP:[2,"RD$","RD$"],EGP:[2,"\u00a3","LE"],ETB:[2,"Birr","Birr"],EUR:[2,"\u20ac","\u20ac"],GBP:[2,"\u00a3","GB\u00a3"],HKD:[2,"$","HK$"],HRK:[2,"kn","kn"],HUF:[34,
"Ft","Ft"],IDR:[0,"Rp","Rp"],ILS:[34,"\u20aa","IL\u20aa"],INR:[2,"\u20b9","Rs"],IRR:[0,"Rial","IRR"],ISK:[0,"kr","kr"],JMD:[2,"$","JA$"],JPY:[0,"\u00a5","JP\u00a5"],KRW:[0,"\u20a9","KR\u20a9"],LKR:[2,"Rs","SLRs"],LTL:[2,"Lt","Lt"],MNT:[0,"\u20ae","MN\u20ae"],MVR:[2,"Rf","MVR"],MXN:[2,"$","Mex$"],MYR:[2,"RM","RM"],NOK:[50,"kr","NOkr"],PAB:[2,"B/.","B/."],PEN:[2,"S/.","S/."],PHP:[2,"\u20b1","PHP"],PKR:[0,"Rs","PKRs."],PLN:[50,"z\u0142","z\u0142"],RON:[2,"RON","RON"],RSD:[0,"din","RSD"],RUB:[50,"\u20bd",
"RUB"],SAR:[2,"Rial","Rial"],SEK:[50,"kr","kr"],SGD:[2,"$","S$"],THB:[2,"\u0e3f","THB"],TRY:[2,"TL","YTL"],TWD:[2,"NT$","NT$"],TZS:[0,"TSh","TSh"],UAH:[2,"\u0433\u0440\u043d.","UAH"],USD:[2,"$","US$"],UYU:[2,"$","$U"],VND:[48,"\u20ab","VN\u20ab"],YER:[0,"Rial","Rial"],ZAR:[2,"R","ZAR"]};var Zb={Y:".",O:",",ba:"%",R:"0",pa:"+",ma:"-",Z:"E",ca:"\u2030",P:"\u221e",na:"NaN",X:"#,##0.###",qa:"#E0",oa:"#,##0%",ja:"\u00a4#,##0.00",ka:"USD"},R=Zb,R=Zb;function $b(a,b,c){this.F=b||R.ka;this.la=c||0;this.I=40;this.f=1;this.N=0;this.h=3;this.J=this.g=0;this.aa=!1;this.A=this.m="";this.i="-";this.w="";this.b=1;this.l=!1;this.j=[];this.K=this.$=!1;this.D=0;if("number"==typeof a)switch(a){case 1:ac(this,R.X);break;case 2:ac(this,R.qa);break;case 3:ac(this,R.oa);break;case 4:a=R.ja;b=["0"];c=Yb[this.F][0]&7;if(0<c){b.push(".");for(var d=0;d<c;d++)b.push("0")}a=a.replace(/0.00/g,b.join(""));ac(this,a);break;case 5:bc(this,1);break;case 6:bc(this,2);break;
default:throw Error("Unsupported pattern type.");}else ac(this,a)}
function ac(a,b){b.replace(/ /g,"\u00a0");var c=[0];a.m=cc(a,b,c);for(var d=c[0],e=-1,f=0,g=0,h=0,k=-1,l=b.length,m=!0;c[0]<l&&m;c[0]++)switch(b.charAt(c[0])){case "#":0<g?h++:f++;0<=k&&0>e&&k++;break;case "0":if(0<h)throw Error('Unexpected "0" in pattern "'+b+'"');g++;0<=k&&0>e&&k++;break;case ",":0<k&&a.j.push(k);k=0;break;case ".":if(0<=e)throw Error('Multiple decimal separators in pattern "'+b+'"');e=f+g+h;break;case "E":if(a.K)throw Error('Multiple exponential symbols in pattern "'+b+'"');a.K=
!0;a.J=0;c[0]+1<l&&"+"==b.charAt(c[0]+1)&&(c[0]++,a.aa=!0);for(;c[0]+1<l&&"0"==b.charAt(c[0]+1);)c[0]++,a.J++;if(1>f+g||1>a.J)throw Error('Malformed exponential pattern "'+b+'"');m=!1;break;default:c[0]--,m=!1}0==g&&0<f&&0<=e&&(g=e,0==g&&g++,h=f-g,f=g-1,g=1);if(0>e&&0<h||0<=e&&(e<f||e>f+g)||0==k)throw Error('Malformed pattern "'+b+'"');h=f+g+h;a.h=0<=e?h-e:0;0<=e&&(a.g=f+g-e,0>a.g&&(a.g=0));a.f=(0<=e?e:h)-f;a.K&&(a.I=f+a.f,0==a.h&&0==a.f&&(a.f=1));a.j.push(Math.max(0,k));a.$=0==e||e==h;d=c[0]-d;a.A=
cc(a,b,c);c[0]<b.length&&";"==b.charAt(c[0])?(c[0]++,1!=a.b&&(a.l=!0),a.i=cc(a,b,c),c[0]+=d,a.w=cc(a,b,c)):(a.i=a.m+a.i,a.w+=a.A)}
function bc(a,b){a.D=b;ac(a,R.X);a.g=0;a.h=2;if(0<a.g)throw Error("Can't combine significant digits and minimum fraction digits");a.N=2}
$b.prototype.parse=function(a,b){var c=b||[0];if(0!=this.D)throw Error("Parsing of compact numbers is unimplemented");var d;a=a.replace(/ /g,"\u00a0");var e=a.indexOf(this.m,c[0])==c[0],f=a.indexOf(this.i,c[0])==c[0];e&&f&&(this.m.length>this.i.length?f=!1:this.m.length<this.i.length&&(e=!1));e?c[0]+=this.m.length:f&&(c[0]+=this.i.length);if(a.indexOf(R.P,c[0])==c[0])c[0]+=R.P.length,d=Infinity;else{d=a;var g=!1,h=!1,k=!1,l=1,m=R.Y,u=R.O,A=R.Z;if(0!=this.D)throw Error("Parsing of compact style numbers is not implemented");
for(var v="";c[0]<d.length;c[0]++){var y=d.charAt(c[0]),D=dc(y);if(0<=D&&9>=D)v+=D,k=!0;else if(y==m.charAt(0)){if(g||h)break;v+=".";g=!0}else if(y==u.charAt(0)&&("\u00a0"!=u.charAt(0)||c[0]+1<d.length&&0<=dc(d.charAt(c[0]+1)))){if(g||h)break}else if(y==A.charAt(0)){if(h)break;v+="E";h=!0}else if("+"==y||"-"==y)v+=y;else if(1==this.b&&y==R.ba.charAt(0)){if(1!=l)break;l=100;if(k){c[0]++;break}}else if(1==this.b&&y==R.ca.charAt(0)){if(1!=l)break;l=1E3;if(k){c[0]++;break}}else break}1!=this.b&&(l=this.b);
d=parseFloat(v)/l}if(e){if(a.indexOf(this.A,c[0])!=c[0])return NaN;c[0]+=this.A.length}else if(f){if(a.indexOf(this.w,c[0])!=c[0])return NaN;c[0]+=this.w.length}return f?-d:d};
$b.prototype.format=function(a){if(isNaN(a))return R.na;var b=[],c;c=a;if(0==this.D)c=ec;else{c=Math.abs(c);var d=fc(this,1>=c?0:gc(c)).S;c=fc(this,d+gc(hc(this,c/Math.pow(10,d)).intValue))}a/=Math.pow(10,c.S);b.push(c.prefix);d=0>a||0==a&&0>1/a;b.push(d?this.i:this.m);if(isFinite(a))if(a=a*(d?-1:1)*this.b,this.K){var e=a;if(0==e)ic(this,e,this.f,b),jc(this,0,b);else{a=Math.floor(Math.log(e)/Math.log(10)+2E-15);var f=Math.pow(10,a);isFinite(f)&&0!==f?e/=f:(f=Math.pow(10,Math.floor(a/2)),e=e/f/f,1==
a%2&&(e=0<a?e/10:10*e));f=this.f;if(1<this.I&&this.I>this.f){for(;0!=a%this.I;)e*=10,a--;f=1}else 1>this.f?(a++,e/=10):(a-=this.f-1,e*=Math.pow(10,this.f-1));ic(this,e,f,b);jc(this,a,b)}}else ic(this,a,this.f,b);else b.push(R.P);b.push(d?this.w:this.A);b.push(c.ga);return b.join("")};
function hc(a,b){var c=Math.pow(10,a.h),d;if(0>=a.N)d=Math.round(b*c);else{d=b*c;var e=a.h;if(d){var f=a.N-gc(d)-1;f<-e?(e=Math.pow(10,e),d=Math.round(d/e)*e):(e=Math.pow(10,f),d=Math.round(d*e)/e)}d=Math.round(d)}e=d;isFinite(e)?(d=Math.floor(e/c),c=Math.floor(e-d*c)):(d=b,c=0);return{intValue:d,ta:c}}
function ic(a,b,c,d){if(a.g>a.h)throw Error("Min value must be less than max value");d||(d=[]);b=hc(a,b);var e=Math.pow(10,a.h),f=b.intValue,g=b.ta,h=0<a.g||0<g||!1;b=a.g;h&&(b=a.g);for(var k="",l=f;1E20<l;)k="0"+k,l=Math.round(l/10);var k=l+k,m=R.Y,l=R.R.charCodeAt(0),u=k.length,A=0;if(0<f||0<c){for(f=u;f<c;f++)d.push(String.fromCharCode(l));if(2<=a.j.length)for(c=1;c<a.j.length;c++)A+=a.j[c];c=u-A;if(0<c)for(var f=a.j,A=u=0,v,y=R.O,D=k.length,S=0;S<D;S++){if(d.push(String.fromCharCode(l+1*Number(k.charAt(S)))),
1<D-S)if(v=f[A],S<c){var Ld=c-S;(1===v||0<v&&1===Ld%v)&&d.push(y)}else A<f.length&&(S===c?A+=1:v===S-c-u+1&&(d.push(y),u+=v,A+=1))}else{c=k;k=a.j;f=R.O;v=c.length;y=[];for(u=k.length-1;0<=u&&0<v;u--){A=k[u];for(D=0;D<A&&0<=v-D-1;D++)y.push(String.fromCharCode(l+1*Number(c.charAt(v-D-1))));v-=A;0<v&&y.push(f)}d.push.apply(d,y.reverse())}}else h||d.push(String.fromCharCode(l));(a.$||h)&&d.push(m);a=""+(g+e);for(e=a.length;"0"==a.charAt(e-1)&&e>b+1;)e--;for(f=1;f<e;f++)d.push(String.fromCharCode(l+1*
Number(a.charAt(f))))}
function jc(a,b,c){c.push(R.Z);0>b?(b=-b,c.push(R.ma)):a.aa&&c.push(R.pa);b=""+b;for(var d=R.R,e=b.length;e<a.J;e++)c.push(d);c.push(b)}
function dc(a){a=a.charCodeAt(0);if(48<=a&&58>a)return a-48;var b=R.R.charCodeAt(0);return b<=a&&a<b+10?a-b:-1}
function cc(a,b,c){for(var d="",e=!1,f=b.length;c[0]<f;c[0]++){var g=b.charAt(c[0]);if("'"==g)c[0]+1<f&&"'"==b.charAt(c[0]+1)?(c[0]++,d+="'"):e=!e;else if(e)d+=g;else switch(g){case "#":case "0":case ",":case ".":case ";":return d;case "\u00a4":if(c[0]+1<f&&"\u00a4"==b.charAt(c[0]+1))c[0]++,d+=a.F;else switch(a.la){case 0:d+=Yb[a.F][1];break;case 2:var g=a.F,h=Yb[g],d=d+(g==h[1]?g:g+" "+h[1]);break;case 1:d+=Yb[a.F][2]}break;case "%":if(!a.l&&1!=a.b)throw Error("Too many percent/permill");if(a.l&&
100!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=100;a.l=!1;d+=R.ba;break;case "\u2030":if(!a.l&&1!=a.b)throw Error("Too many percent/permill");if(a.l&&1E3!=a.b)throw Error("Inconsistent use of percent/permill characters");a.b=1E3;a.l=!1;d+=R.ca;break;default:d+=g}}return d}
var ec={prefix:"",ga:"",S:0};function fc(a,b){var c=1==a.D?Xb.W:Xb.ia;null==c&&(c=Xb.W);if(3>b)return ec;b=Math.min(14,b);for(var d=c[Math.pow(10,b)],e=b-1;!d&&3<=e;)d=c[Math.pow(10,e)],e--;if(!d)return ec;c=d.other;return c&&"0"!=c?(c=/([^0]*)(0+)(.*)/.exec(c))?{prefix:c[1],ga:c[3],S:e+1-(c[2].length-1)}:ec:ec}
function gc(a){if(!isFinite(a))return 0<a?a:0;for(var b=0;1<=(a/=10);)b++;return b}
;var kc=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var lc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",lc);function mc(a){var b=arguments;if(1<b.length)lc[b[0]]=b[1];else{var b=b[0],c;for(c in b)lc[c]=b[c]}}
function T(a,b){return a in lc?lc[a]:b}
function U(a){return T(a,void 0)}
;function nc(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
nc.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};function oc(a){return eval("("+a+")")}
;function pc(a){this.b=a||{cookie:""}}
var qc=/\s*;\s*/;n=pc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(pa()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
n.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(qc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
n.isEmpty=function(){return!this.b.cookie};
n.clear=function(){for(var a=(this.b.cookie||"").split(qc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};var rc=null;"undefined"!=typeof XMLHttpRequest?rc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(rc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function V(){this.i=this.i;this.j=this.j}
V.prototype.i=!1;V.prototype.dispose=function(){this.i||(this.i=!0,this.G())};
V.prototype.G=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function sc(){this.f=this.b=null}
var uc=new nc(function(){return new tc},function(a){a.reset()},100);
sc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function tc(){this.next=this.scope=this.b=null}
tc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
tc.prototype.reset=function(){this.next=this.scope=this.b=null};var W=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vc(a){return a?decodeURI(a):a}
function wc(a,b,c){if(r(b))for(var d=0;d<b.length;d++)wc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function xc(a,b){for(var c in b)wc(c,b[c],a);return a}
function yc(a){a=xc([],a);a[0]="";return a.join("")}
;function zc(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),mc("ERRORS",b))}
function Ac(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zc(b)}}:a}
;function Bc(a,b){la(a)&&(a=Ac(a));return window.setTimeout(a,b)}
;function Cc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?r(b[f])?La(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Dc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Cc(d[1]||""),e;for(e in b)d[e]=b[e];e=xc([a],d);if(e[1]){var d=e[0],f=d.indexOf("#");0<=f&&(e.push(d.substr(f)),e[0]=d=d.substr(0,f));f=d.indexOf("?");0>f?e[1]="?":f==d.length-1&&(e[1]=void 0)}return e.join("")+c}
;function Ec(a){p.setTimeout(function(){throw a;},0)}
var Fc;
function Gc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.da;c.da=null;a()}};
return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;var Hc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Ic(){}
Ic.prototype.next=function(){throw Hc;};
Ic.prototype.L=function(){return this};
function Jc(a){if(a instanceof Ic)return a;if("function"==typeof a.L)return a.L(!1);if(ka(a)){var b=0,c=new Ic;c.next=function(){for(;;){if(b>=a.length)throw Hc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Kc(a,b){if(ka(a))try{C(a,b,void 0)}catch(c){if(c!==Hc)throw c;}else{a=Jc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Hc)throw c;}}}
function Lc(a){if(ka(a))return Ka(a);a=Jc(a);var b=[];Kc(a,function(a){b.push(a)});
return b}
;function Mc(a){Nc||Oc();Pc||(Nc(),Pc=!0);var b=Qc,c=uc.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var Nc;function Oc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);Nc=function(){a.then(Rc)}}else Nc=function(){var a=Rc;
!la(p.setImmediate)||p.Window&&p.Window.prototype&&!H("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Fc||(Fc=Gc()),Fc(a)):p.setImmediate(a)}}
var Pc=!1,Qc=new sc;function Rc(){for(var a;a=Qc.remove();){try{a.b.call(a.scope)}catch(c){Ec(c)}var b=uc;b.j(a);b.f<b.i&&(b.f++,a.next=b.b,b.b=a)}Pc=!1}
;function X(a){V.call(this);this.l=1;this.g=[];this.h=0;this.b=[];this.f={};this.m=!!a}
z(X,V);n=X.prototype;n.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
n.M=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.h)this.g.push(a),this.b[a+1]=ia;else{if(c){var d=Ga(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
n.fa=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Sc(this.b[g+1],this.b[g+2],d)}else{this.h++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;c=this.g.pop();)this.M(c)}}return 0!=e}return!1};
function Sc(a,b,c){Mc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.M,this),delete this.f[a])}else this.b.length=0,this.f={}};
n.G=function(){X.ha.G.call(this);this.clear();this.g.length=0};var Tc=q("yt.pubsub.instance_")||new X;X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.M;X.prototype.publish=X.prototype.fa;X.prototype.clear=X.prototype.clear;x("yt.pubsub.instance_",Tc);var Uc=q("yt.pubsub.subscribedKeys_")||{};x("yt.pubsub.subscribedKeys_",Uc);var Vc=q("yt.pubsub.topicToKeys_")||{};x("yt.pubsub.topicToKeys_",Vc);var Wc=q("yt.pubsub.isSynchronous_")||{};x("yt.pubsub.isSynchronous_",Wc);var Xc=q("yt.pubsub.skipSubId_")||null;
x("yt.pubsub.skipSubId_",Xc);function Yc(a,b){var c=q("yt.pubsub.instance_");if(c){var d=c.subscribe("dispose",function(){if(!Xc||Xc!=d){var c=arguments,f;f=function(){Uc[d]&&a.apply(b||window,c)};
try{Wc.dispose?f():Bc(f,0)}catch(g){zc(g)}}},b);
Uc[d]=!0;Vc.dispose||(Vc.dispose=[]);Vc.dispose.push(d);return d}return 0}
function Zc(a,b){var c=Yc(function(d){a.apply(b,arguments);$c(c)},b)}
function $c(a){var b=q("yt.pubsub.instance_");b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Uc[a]}))}
;function ad(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ac(b)(k)}
var k=rc&&rc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=bd(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function bd(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(W)[1]||null,e=vc(a.match(W)[3]||null);d&&e?(d=c,c=a.match(W),d=d.match(W),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?vc(c.match(W)[3]||null)==e&&(Number(c.match(W)[4]||null)||null)==(Number(a.match(W)[4]||null)||null):!0;for(var f in cd){if((e=d=T(cd[f]))&&!(e=c)){var g=a,e=f,h=T("CORS_HEADER_WHITELIST")||{};e=(g=vc(g.match(W)[3]||null))?(h=h[g])?Ja(h,e):!1:!0}e&&(b[f]=d)}return b}
function dd(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Da&&(!vc(a.match(W)[3]||null)||b.withCredentials||vc(a.match(W)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.o&&b.o[c])}
function ed(a,b){var c=b.format||"JSON";b.Ea&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.ya;f&&(f[d]&&delete f[d],a=Dc(a,f||{}));var g=b.postBody||"",f=b.o;dd(a,b)&&(f||(f={}),f[d]=e);f&&t(g)&&(d=Cc(g),Wa(d,f),g=b.ea&&"JSON"==b.ea?JSON.stringify(d):yc(d));var h=!1,k,l=ad(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=fd(c,a,b.Ca);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.U&&b.U.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.xa&&b.xa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.V&&0<b.timeout&&(k=Bc(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.V.call(b.context||p,l))},b.timeout))}
function fd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=oc(a));break;case "XML":if(b=(b=b.responseXML)?gd(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=hd(a)})}c&&id(d);
return d}
function id(a){if(ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=M(a[b],null);a[c]=d}else id(a[b])}}
function gd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function hd(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
var cd={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var jd={},kd=0;function Y(a,b,c){a&&(c&&(c=G,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Q("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),Qb(a).body.appendChild(a)):T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?ad(a,b):ld(a,b))}
function ld(a,b){var c=new Image,d=""+kd++;jd[d]=c;c.onload=c.onerror=function(){b&&jd[d]&&b();delete jd[d]};
c.src=a}
;var md=/^https?:\/\/(www\.google\.com\/pagead\/sul|www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/psul|www\.youtube\.com\/pagead\/slav|www\.youtube\.com\/pagead\/sul)/,nd=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/;function od(a){if(a=Jb(a))a.style.visibility="visible"}
;function pd(a){this.f=a;this.b=null;a=qd(this.f);a=qa("__%s__","("+a.join("|")+")");this.b=new RegExp(a,"g");this.g={}}
var rd=/__([a-z]+(?:_[a-z]+)*)__/g;function sd(a){a=Jb(a).innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");a=a.replace(/(\s*--\x3e)?\s*$/,"");return new pd(a)}
function qd(a){var b=[],c={};a.replace(rd,function(a,e){e in c||(c[e]=!0,b.push(e))});
return b}
function td(a,b){var c=w(function(a,c){return b[c]||this.g[c]||""},a);
return a.f.replace(a.b,c)}
;function ud(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function vd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],l,m,c=0;80>c;c++)40>c?20>c?(l=h^d&(f^h),m=1518500249):(l=d^f^h,m=1859775393):60>c?(l=d&f|h&(d|f),m=2400959708):(l=d^f^h,m=3395469782),l=((a<<5|a>>>27)&4294967295)+l+k+m+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=l;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,m+=64;for(;d<c;)if(f[l++]=a[d++],m++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,m+=64}
function d(){var a=[],d=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function wd(){}
;function xd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in yd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
xd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var yd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function zd(a,b){this.version=a;this.args=b}
function Ad(a){this.topic=a}
Ad.prototype.toString=function(){return this.topic};var Z=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Bd(a){zd.call(this,1,arguments)}
z(Bd,zd);var Cd=new Ad("timing-sent");function Dd(a){return T("EXPERIMENT_FLAGS",{})[a]}
;function Ed(a,b,c){var d=[],e=[];if(1==(r(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Fd(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Fd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Fd(a){var b=vd();b.update(a);return b.ra().toLowerCase()}
;var Gd=pa().toString();function Hd(){var a=Id,b=5E3;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");return c?c(a,0,b):void 0===b?(a(),NaN):Bc(a,b||0)}
;N&&O("9");!xb||O("528");wb&&O("1.9b")||N&&O("8")||ub&&O("9.5")||xb&&O("528");wb&&!O("8")||N&&O("9");function Jd(){}
z(Jd,wd);Jd.prototype.clear=function(){var a=Lc(this.L(!0)),b=this;C(a,function(a){b.remove(a)})};function Kd(a){this.b=a}
z(Kd,Jd);n=Kd.prototype;n.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.b.removeItem(a)};
n.L=function(a){var b=0,c=this.b,d=new Ic;d.next=function(){if(b>=c.length)throw Hc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
n.clear=function(){this.b.clear()};
n.key=function(a){return this.b.key(a)};function Md(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(Md,Kd);function Nd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(Nd,Kd);var Od=q("yt.pubsub2.instance_")||new X;X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.M;X.prototype.publish=X.prototype.fa;X.prototype.clear=X.prototype.clear;x("yt.pubsub2.instance_",Od);var Pd=q("yt.pubsub2.subscribedKeys_")||{};x("yt.pubsub2.subscribedKeys_",Pd);var Qd=q("yt.pubsub2.topicToKeys_")||{};x("yt.pubsub2.topicToKeys_",Qd);var Rd=q("yt.pubsub2.isAsync_")||{};x("yt.pubsub2.isAsync_",Rd);x("yt.pubsub2.skipSubKey_",null);
function Sd(a){var b=q("yt.pubsub2.instance_");b&&b.publish.call(b,Cd.toString(),Cd,a)}
;var Td=0,Ud=q("yt.dom.dom.getNextId_")||function(){return++Td};
x("yt.dom.dom.getNextId_",Ud);var Vd={log_event:"events",log_interaction:"interactions"},Wd={},Xd={},Yd=0,F=q("yt.logging.transport.logsQueue_")||{};x("yt.logging.transport.logsQueue_",F);
function Zd(){window.clearTimeout(Yd);if(!Ua()){for(var a in F){var b=Wd[a];if(!b){b=Xd[a];if(!b)continue;b=new b;Wd[a]=b}var c=b.b,c={client:{hl:c.wa,gl:c.va,clientName:c.ua,clientVersion:c.innertubeContextClientVersion}};T("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});var d={context:c};d.requestTimeMs=Math.round(kc());d[Vd[a]]=F[a];var c=a,e={},d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":T("VISITOR_DATA")},o:d,ea:"JSON",V:e.V,U:e.U,onError:e.onError,
timeout:e.timeout,withCredentials:!0};a:{var e=[],f=ud(String(p.location.href)),g=p.__OVERRIDE_SID;null==g&&(g=(new pc(document)).get("SID"));if(g&&(f=(g=0==f.indexOf("https:")||0==f.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==f&&(f=(new pc(document)).get(g?"SAPISID":"APISID")),f)){var g=g?"SAPISIDHASH":"APISIDHASH",h=String(p.location.href),e=h&&f&&g?[g,Ed(ud(h),f,e||null)].join(" "):null;break a}e=null}e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=T("SESSION_INDEX",0));
e=b.b.za;e.startsWith("http")||(e="//"+e);b=e+("/youtubei/"+b.b.innertubeApiVersion+"/"+c)+"?alt=json&key="+b.b.innertubeApiKey;c=d;c.method="POST";c.o||(c.o={});ed(b,c);delete F[a]}Ua()||$d()}}
function $d(){window.clearTimeout(Yd);Yd=Bc(Zd,T("LOGGING_BATCH_TIMEOUT",1E4))}
;(new Md).isAvailable();(new Nd).isAvailable();function ae(a,b,c){V.call(this);this.b=a;this.h=b||0;this.f=c;this.g=w(this.sa,this)}
z(ae,V);n=ae.prototype;n.B=0;n.G=function(){ae.ha.G.call(this);this.isActive()&&p.clearTimeout(this.B);this.B=0;delete this.b;delete this.f};
n.start=function(a){this.isActive()&&p.clearTimeout(this.B);this.B=0;var b=this.g;a=void 0!==a?a:this.h;if(!la(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.B=2147483647<Number(a)?-1:p.setTimeout(b,a||0)};
n.isActive=function(){return 0!=this.B};
n.sa=function(){this.B=0;this.b&&this.b.call(this.f)};var E=q("yt.events.listeners_")||{};x("yt.events.listeners_",E);var be=q("yt.events.counter_")||{count:0};x("yt.events.counter_",be);function ce(a,b,c){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ta(function(d){return d[0]==a&&d[1]==b&&d[2]==c&&0==d[4]})}
function de(a,b){var c="click";if(a&&(a.addEventListener||a.attachEvent)){var d=ce(a,c,b);if(!d){var d=++be.count+"",e=!("mouseenter"!=c&&"mouseleave"!=c||!a.addEventListener||"onmouseenter"in document),f;f=e?function(d){d=new xd(d);if(!Vb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=c,b.call(a,d)}:function(c){c=new xd(c);
c.currentTarget=a;return b.call(a,c)};
f=Ac(f);a.addEventListener?("mouseenter"==c&&e?c="mouseover":"mouseleave"==c&&e?c="mouseout":"mousewheel"==c&&"MozBoxSizing"in document.documentElement.style&&(c="MozMousePixelScroll"),a.addEventListener(c,f,!1)):a.attachEvent("on"+c,f);E[d]=[a,c,b,f,!1]}}}
function ee(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in E){var b=E[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete E[a]}}))}
function fe(a){for(var b in E)E[b][0]==a&&ee(b)}
function ge(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()}
;var he={},ie=0;function je(){this.b={apiaryHost:U("APIARY_HOST"),Aa:U("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:T("GAPI_HINT_OVERRIDE"),gapiHintParams:U("GAPI_HINT_PARAMS"),innertubeApiKey:U("INNERTUBE_API_KEY"),innertubeApiVersion:U("INNERTUBE_API_VERSION"),ua:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),wa:U("INNERTUBE_CONTEXT_HL"),va:U("INNERTUBE_CONTEXT_GL"),za:U("XHR_APIARY_HOST")}}
;function ke(a,b,c){var d={};d.eventTimeMs=Math.round(c||kc());d[a]=b;Dd("web_gel_lact")&&(a=q("_lact",window),a=null==a?-1:Math.max(pa()-a,0),d.context={lastActivityMs:a});F.log_event=F.log_event||[];a=F.log_event;a.push(d);Xd.log_event=je;d=Number(Dd("web_logging_max_batch")||0)||20;a.length>=d?Zd():$d()}
;var le=q("yt.logging.latency.usageStats_")||{};x("yt.logging.latency.usageStats_",le);var me=0;
function ne(a){le[a]=le[a]||{count:0};var b=le[a];b.count++;b.time=kc();me||(me=Hd());if(10<b.count){if(11==b.count){b=Error("CSI data exceeded logging limit with key: "+a);a={name:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:U("INNERTUBE_CONTEXT_CLIENT_VERSION")};var c=window&&window.yterr||void 0||!1;if(b&&c&&!(5<=ie)){var c=b.stacktrace,d=b.columnNumber;var e=q("window.location.href");if(t(b))b={message:b,name:"Unknown error",lineNumber:"Not available",fileName:e,stack:"Not available"};else{var f,
g,h=!1;try{f=b.lineNumber||b.line||"Not available"}catch(m){f="Not available",h=!0}try{g=b.fileName||b.filename||b.sourceURL||p.$googDebugFname||e}catch(m){g="Not available",h=!0}b=!h&&b.lineNumber&&b.fileName&&b.stack&&b.message&&b.name?b:{message:b.message||"Not available",name:b.name||"UnknownError",lineNumber:f,fileName:g,stack:b.stack||"Not available"}}c=c||b.stack;f=b.lineNumber.toString();isNaN(f)||isNaN(d)||(f=f+":"+d);if(!(he[b.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js"))){g=
b.fileName;f={ya:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,1E3),line:f,level:"ERROR"},o:{url:T("PAGE_NAME",window.location.href),file:g},method:"POST"};c&&(f.o.stack=c);for(var k in a)f.o["client."+k]=a[k];if(k=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)f.o[l]=k[l];ed("/error_204",f);he[b.message]=!0;ie++}}}return!0}return!1}
function Id(){var a=kc(),b;for(b in le)6E4<a-le[b].time&&delete le[b];me=0}
;var oe={vc:!0},pe={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},qe="ap c cver ei yt_fss yt_li".split(" "),re=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],se=w(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||
ia,Z);
function te(a,b){if(!b&&"_"!=a[0]){var c=a;Z.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Z.mark(c))}var c=ue(),d=b||kc();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(ve()["tick_"+a]=b)||kc();Dd("csi_on_gel")?(c=we(),"_start"==a?ne("baseline_"+c)||ke("latencyActionBaselined",{clientActionNonce:c},b):ne("tick_"+a+"_"+c)||ke("latencyActionTicked",{tickName:a,clientActionNonce:c},b),c=!0):c=!1;if(c=!c)c=!q("yt.timing.pingSent_");if(c&&(d=U("TIMING_ACTION"),c=ue(),q("yt.timing.ready_")&&d&&
c._start&&xe())){var d=!0,e=T("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&ye()}}
function ze(){var a=Ae().info.yt_lt="hot_bg";ve().info_yt_lt=a;if(Dd("csi_on_gel"))if("yt_lt"in pe){var b={},c=pe.yt_lt;Ja(re,c)&&(a=!!a);b[c]=a;a=we();c=Object.keys(b).join("");ne("info_"+c+"_"+a)||(b.clientActionNonce=a,ke("latencyActionInfo",b))}else"yt_lt"in qe||zc(Error("Unknown label yt_lt logged with GEL CSI."))}
function xe(){var a=ue();if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ye(){if(!Dd("csi_on_gel")){var a=ue(),b=Ae().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&r(a[d])){var e=d.slice(1);if(e in oe){var f=Ia(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=q("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Be(f,e),Ce(),se(),De(!1,void 0),T("TIMING_ACTION")&&mc("PREVIOUS_ACTION",T("TIMING_ACTION")),mc("TIMING_ACTION","")}else{var g=T("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:T("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+q("ytplayer.config.assets.js");(k=Z.getEntriesByName?Z.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=xe();Ee()&&"youtube"==g&&(ze(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var l in b)"_"!=l.charAt(0)&&(f[l]=b[l]);a.ps=kc();b={};l=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,l.push(d+"."+g));f.rt=l.join(",");(a=q("ytdebug.logTiming"))&&a(f,b);Be(f,e,void 0);Sd(new Bd(b.aft+(h||0)))}}}
function Be(a,b,c){if(Dd("debug_csi_data")){var d=q("yt.timing.csiData");d||(d=[],x("yt.timing.csiData",d));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Y(a,void 0)}catch(f){Y(a,void 0)}else Y(a);De(!0,c)}
function we(){var a=Ae().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=pa();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Gd)for(c=1,d=0;d<Gd.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Gd.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Ae().nonce=a}return a}
function ue(){return Ae().tick}
function ve(){var a=Ae();"gel"in a||(a.gel={});return a.gel}
function Ae(){return q("ytcsi.data_")||Ce()}
function Ce(){var a={tick:{},info:{}};x("ytcsi.data_",a);return a}
function De(a,b){x("yt.timing."+(b||"")+"pingSent_",a)}
function Ee(){var a=ue(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ae().info.yt_pvis}
;new ae(Fe,1E3);function Fe(){te("vptl",0);te("vpl",0)}
;function Ge(a,b,c,d){V.call(this);this.h=a;this.f=b;this.w=c;this.l=d;this.g=Q("DIV",{"class":"ads-mute-button"});Ub(this.g);this.b=Q("DIV");Ib(this.b,He(this));this.m=P("ads-mute-undo",this.b);de(this.g,w(this.D,this));this.h.firstElementChild.appendChild(this.g);a=Sa(this.f.mute_survey);Ma(a);C(a,function(a){var b=Q("INPUT",{"class":"yt-uix-form-input-radio",type:"radio"}),c=Q("SPAN",{"class":"yt-uix-form-input-radio-element"}),b=Q("SPAN",{"class":"yt-uix-form-input-radio-container"},b,c),b=Q("LABEL",
"ads-mute-option",b,a);de(b,w(this.F,this,this.f.mute_survey[a]));this.b.firstChild.appendChild(b)},this);
de(this.b,ge);de(this.m,w(this.A,this));Zc(this.dispose,this)}
z(Ge,V);function He(a){var b=a.f.mute_gone||rb,c=a.f.mute_question||rb;a=a.f.mute_undo||rb;return pb("div",{"class":"ads-mute-survey"},qb(pb("span",{"class":"ads-mute-check"}),pb("b",{},b)," ",c,pb("div",{"class":"ads-mute-undo"},a)))}
Ge.prototype.G=function(){C(Kb("ads-mute-option",this.b),function(a){fe(a)});
fe(this.g);Sb(this.g);fe(this.b);Sb(this.b);fe(this.m)};
Ge.prototype.D=function(a){a.stopPropagation();a.preventDefault();this.l&&Y(this.f.mute_url);this.h.firstElementChild.appendChild(this.b);Pa(Tb(this.b),"contains-mute-survey")};
Ge.prototype.A=function(a){a.stopPropagation();a.preventDefault();this.f.mute_undo_url&&this.l&&Y(this.f.mute_undo_url);Qa(Tb(this.b));Sb(this.b)};
Ge.prototype.F=function(a,b){b.stopPropagation();b.preventDefault();this.l&&Y(a);Sb(this.h);this.w();this.dispose()};var Ie,Je,Ke=[];function Le(a,b){Ie=sd(a);Je=sd(b)}
function Me(a){C(a,function(a){var b=a.media_template_data[0];a.line1=B(a.line1);a.line2=B(a.line2);a.line3=B(a.line3);a.url=B(a.url);b.imageUrl=B(b.imageUrl);a.display_name||"UC"!=b.channelName.substr(0,2)||(b.channelName="");b.channelName=B(a.display_name?a.display_name:b.channelName);b.imageUrl&&(b.imageUrl=b.imageUrl.replace(/http(s)?:/,""));b.imageUrl&&-1!=b.imageUrl.indexOf("/vi/")&&(b.imageUrl=b.imageUrl.replace(/([mh]q)?default\.jpg/,"mqdefault.jpg"),b.imageUrl=b.imageUrl.replace(/\/([mh]q)?([1-9])\.jpg/,
"/hq$2.jpg"));var d=a.duration/1E3,b=Math.floor(d/3600),e=d%3600,d=Math.floor(e/60),e=e%60,b=b?qa("%s:%s:%s",b.toString(),Ea(d),Ea(e)):qa("%s:%s",d.toString(),Ea(e));a.duration=b})}
function Ne(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0],f="";a.view_count&&(f=(new $b(1)).format(a.view_count));d.innerHTML=td(Ie,{title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,views:f,length_seconds:a.duration,video_id:e.videoId,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl});var g=P("yt-lockup-meta-info",d);f||(g.lastElementChild.style.display="none");e.channelName||(e=P("yt-lockup-byline",d),f=P("ad-badge-byline",e),
null!=e&&(Rb(e),Pb(e,f)));a.view_url&&Y(a.view_url);b&&new Ge(d,a,Oe,c);return d}
function Oe(){var a=P("pyv-afc-ads-container");0==Kb("ads-mute-button",a).length&&Sb(P("ad-info-container",a))}
function Pe(a,b,c){var d=document.createElement("div"),e=a.media_template_data[0];d.innerHTML=td(Je,{title:a.line1,second_line:a.line2,third_line:a.line3,url:a.url,channel_name:e.channelName,channel_url:"//"+a.visible_url,thumbnail_url:e.imageUrl});b&&new Ge(d,a,Oe,c);return d}
function Qe(a,b){Le(P("pyv-afc-ads-video-template",b),P("pyv-afc-ads-channel-template",b));var c=P("pyv-afc-ads-inner",b);C(a,function(a){var d=!T("SEARCH_PYV_DISABLE_MUTE")&&a.mute_url&&a.mute_survey,f=!T("SEARCH_PYV_DISABLE_MUTE_PINGS");d&&Pa(b,"pyv-afc-mute");a.media_template_data[0].videoId?c.appendChild(Ne(a,d,f)):c.appendChild(Pe(a,d,f));d=a.creative_view_url;/^[\s\xa0]*$/.test(null==d?"":String(d))||(a=B(a.creative_view_url),Ja(Ke,a)||Ke.push(a))})}
function Re(a){Me(a);var b=P("pyv-afc-ads-container");if(b){if("results"==b.parentNode.id){var c=P("branded-page-v2-subnav-container",b.parentNode);if(c){var d=Q("LI");d.appendChild(b);c.parentNode&&c.parentNode.insertBefore(d,c.nextSibling)}}Qe(a,b);od(b);C(Ke,function(a){var b;b=md.test(a)||nd.test(a);Y(a,void 0,b)})}od("results")}
;x("yt.www.ads.pyvsearch.pyvSearchTopAfcCallback",function(a){var b=P("pyv-afc-ads-container");a.length&&b?(te("afcs"),Re(a)):od("results");te("afc")});}).call(this);
