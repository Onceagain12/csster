// Csster version 1.3.1; Copyright (c) Andrew J. Peterson / ndpsoftware.com. All Rights Reserved
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Csster=e():t.Csster=e()}(window,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return i}));const o={};if("undefined"!=typeof navigator){const t=function(t){t=t.toLowerCase();const e=/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||!/compatible/.test(t)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}(navigator.userAgent);t.browser&&(o[t.browser]=!0,o.version=t.version)}const i=()=>void 0!==t&&t.browserOverride?t.browserOverride:o}).call(this,r(4))},function(t,e,r){r(2),t.exports=r(3)},function(t,e){"undefined"!=typeof jQuery&&(jQuery.fn.csster=function(t){var e={};return e[this.selector]=t,Csster.style(e),this})},function(t,e,r){t.exports=r(5).Csster},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e),r.d(e,"Csster",(function(){return st}));var o={};r.r(o),r.d(o,"setConfig",(function(){return C})),r.d(o,"addNames",(function(){return M})),r.d(o,"error",(function(){return O}));var i={};function n(t){var e=t.length;return function r(){var o=Array.prototype.slice.call(arguments,0);return o.length>=e?t.apply(null,o):function(){var t=Array.prototype.slice.call(arguments,0);return r.apply(null,o.concat(t))}}}r.r(i),r.d(i,"roundedCorners",(function(){return P})),r.d(i,"boxShadow",(function(){return E})),r.d(i,"horizontalCentering",(function(){return G})),r.d(i,"verticalCentering",(function(){return _})),r.d(i,"linearGradient",(function(){return X})),r.d(i,"clearfix",(function(){return F})),r.d(i,"imageReplacement",(function(){return Q}));const s=function(){var t=arguments;return function(){for(var e=arguments,r=t.length;r-- >0;)e=[t[r].apply(this,e)];return e[0]}},a=(t,...e)=>{for(let r=0;r<e.length;r++)for(let o in e[r])t[o]=e[r][o];return t},u=n((t,e)=>{if("object"!=typeof e)return e;let r={};for(let o in e)r[t(o)]=e[o];return r}),c=n((function(t,e){if("object"==typeof e)for(let r in e)"object"==typeof e[r]&&t(e[r],r);return e})),l=n((function(t,e){if("object"!=typeof e)return e;let r={};for(let o in e){let i=t(e[o],o);"object"==typeof i&&(i=l(t,i)),r[o]=i}return r})),b=n((function(t,e){let r=t(e);for(let e in r)"object"==typeof r[e]&&(r[e]=b(t,r[e]));return r})),d=t=>"object"==typeof t&&"[object Array]"===Object.prototype.toString.call(t),f=(t,e)=>{for(let r=0;r<t.length;)e(t[r],r++);return t},p=t=>((t,e,r)=>(f(t,(function(t,o){e=r(e,t,o)})),e))(t,[],(function(t,e){return d(e)?t.concat(p(e)):(t.push(e),t)}));const m=n((t,e)=>"string"==typeof e?t(e):e),h=m(t=>t.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}))),g=m((function(t){return(t||"").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}));let w={has:y,mixin:y,mixins:y};function k(t){return!!w[t]}function y(...t){const e={};return function(t,e){let r=[];if(d(e))for(let o=0;o<e.length;)r.push(t(e[o],o++));else r=t(e)}(t=>{"function"==typeof t&&(t=t()),a(e,t)},t),e}const x=b((function t(e){if("object"!=typeof e)return e;const r={};for(let o in e){const i=e[o];if(k(o)){const e=w[o].apply(null,d(i)?i:[i]);a(r,t(e))}else r[o]=i}return r}));function v(t,e){const r=e.split(",");for(let e=0;e<r.length;e++){let o=g(r[e]);o="&"==o.substr(0,1)?o.substr(1):" "+o,r[e]=t+o}return g(r.join(","))}function z(t,e){return!!t.match(/^\.\#\&/)||"object"==typeof e&&!k(t)}u(t=>{for(;t.match(/.*#.*#.*/);)t=t.replace(/^.*#.*#/,"#");return t});const j={},S={strictNames:!0,anyBrowserExtension:!0};function C(t,e){S[t]=e}function M(...t){const e=p([t]);for(let t of e)j[t]=!0}function O(t){if(/^\-\w+\-/.exec(t)){if(!S.anyBrowserExtension&&!j[t])return'Unrecognized "'+t+'" browser extension property name'}else if(S.strictNames&&!j[t])return'Unrecognized "'+t+'" property name';return null}M(["accelerator","azimuth","background","background-attachment","background-color","background-image","background-position","background-position-x","background-position-y","background-repeat","behavior","border","border-bottom","border-bottom-right-radius","border-bottom-left-radius","border-bottom-color","border-bottom-style","border-bottom-width","border-collapse","border-color","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-style","border-top-width","border-top-left-radius","border-top-right-radius","border-width","box-shadow","bottom","caption-side","clear","clip","color","content","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","elevation","empty-cells","filter","float","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","height","ime-mode","include-source","layer-background-color","layer-background-image","layout-flow","layout-grid","layout-grid-char","layout-grid-char-spacing","layout-grid-line","layout-grid-mode","layout-grid-type","letter-spacing","left","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","max-height","max-width","min-height","min-width","-ms-filter","opacity","orphans","outline","outline-color","outline-style","outline-width","overflow","overflow-X","overflow-Y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","pitch","pitch-range","play-during","position","quotes","richness","right","size","speak","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","table-layout","text-align","text-align-last","text-decoration","text-indent","text-justify","text-offset","text-overflow","text-shadow","text-transform","text-autospace","text-kashida-space","text-underline-position","top","unicode-bidi","vertical-align","visibility","voice-family","volume","white-space","widows","width","word-break","word-spacing","word-wrap","writing-mode","z-index","zoom"]),M(["-moz-binding","-moz-border-radius","-moz-border-radius-topleft","-moz-border-radius-topright","-moz-border-radius-bottomright","-moz-border-radius-bottomleft","-moz-border-top-colors","-moz-border-right-colors","-moz-border-bottom-colors","-moz-border-left-colors","-moz-box-shadow","-moz-opacity","-moz-outline","-moz-outline-color","-moz-outline-style","-moz-outline-width","-moz-user-focus","-moz-user-input","-moz-user-modify","-moz-user-select"]),M(["-webkit-animation","-webkit-animation-delay","-webkit-animation-direction","-webkit-animation-duration","-webkit-animation-iteration-count","-webkit-animation-name","-webkit-animation-play-state","-webkit-animation-timing-function","-webkit-appearance","-webkit-backface-visibility","-webkit-background-clip","-webkit-background-composite","-webkit-background-origin","-webkit-background-size","-webkit-border-bottom-left-radius","-webkit-border-bottom-right-radius","-webkit-border-horizontal-spacing","-webkit-border-image","-webkit-border-radius","-webkit-border-top-left-radius","-webkit-border-top-right-radius","-webkit-border-vertical-spacing","-webkit-box-align","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","-webkit-box-shadow","-webkit-box-sizing","-webkit-column-break-after","-webkit-column-break-before","-webkit-column-break-inside","-webkit-column-count","-webkit-column-gap","-webkit-column-rule","-webkit-column-rule-color","-webkit-column-rule-style","-webkit-column-rule-width","-webkit-column-width","-webkit-columns","-webkit-dashboard-region","-webkit-line-break","-webkit-margin-bottom-collapse","-webkit-margin-collapse","-webkit-margin-start","-webkit-margin-top-collapse","-webkit-marquee","-webkit-marquee-direction","-webkit-marquee-increment","-webkit-marquee-repetition","-webkit-marquee-speed","-webkit-marquee-style","-webkit-mask","-webkit-mask-attachment","-webkit-mask-box-image","-webkit-mask-clip","-webkit-mask-composite","-webkit-mask-image","-webkit-mask-origin","-webkit-mask-position","-webkit-mask-position-x","-webkit-mask-position-y","-webkit-mask-repeat","-webkit-mask-size","-webkit-nbsp-mode","-webkit-padding-start","-webkit-perspective","-webkit-perspective-origin","-webkit-rtl-ordering","-webkit-tap-highlight-color","-webkit-text-fill-color","-webkit-text-security","-webkit-text-size-adjust","-webkit-text-stroke","-webkit-text-stroke-color","-webkit-text-stroke-width","-webkit-touch-callout","-webkit-transform","-webkit-transform-origin","-webkit-transform-origin-x","-webkit-transform-origin-y","-webkit-transform-origin-z","-webkit-transform-style","-webkit-transition","-webkit-transition-delay","-webkit-transition-duration","-webkit-transition-property","-webkit-transition-timing-function","-webkit-user-drag","-webkit-user-modify","-webkit-user-select"]);const T=u(h),q=c((t,e)=>{for(let r in t){let t=O(r);if(t)throw t+'. Context: "'+e+'"'}}),A=s(q,l(T),t=>{const e={};return function t(r,o){for(var i in r){const u=r[i];if(z(i,u)){t(u,v(o,i))}else s=i,a=u,n=g(n=o),e[n]=e[n]||{},e[n][s]&&console.log("Replacing property ",s," in ",n,"; ",e[n][s]," => ",a),e[n][s]=a}var n,s,a}(t,""),e},x);const H=function(t){const e=h(t);return O(e)?null:e},N=["z-index","opacity","zoom"],R=(t,e)=>(t=>H(t))(t)+": "+((t,e)=>t+(t&&"number"==typeof t&&-1==N.indexOf(e)?"px":""))(e,t)+";\r",B=t=>{return t.sel+" { "+(e=t.props,Object.keys(e).reduce((t,r)=>t+R(r,e[r]),"")+" }\n");var e};const I=s((function(t){return t.reduce((t,e)=>t+B(e),"")}),(function(t){const e=p([t]),r=[];return f(e,t=>r.push(function(t){const e=[];for(let r in t)e.push({sel:r,props:t[r]});return e}(A(t)))),p(r)}));var L=function(t){const e=document.createElement("STYLE"),r=document.createAttribute("type");r.nodeValue="text/css",e.setAttributeNode(r);document.getElementsByTagName("HEAD")[0].appendChild(e);try{e.appendChild(document.createTextNode(t))}catch(e){const r=document.styleSheets[document.styleSheets.length-1];r.cssText=""+r.cssText+t}};function P(t,e){if(e||(e=t||10,t="all"),"all"==t)return{"-moz-border-radius":e,"border-radius":e,"-webkit-border-radius":e};var r={};return"tl"!=t&&"top"!=t&&"left"!=t||(r["-moz-border-radius-topleft"]=e,r["-webkit-border-top-left-radius"]=e,r["border-top-left-radius"]=e),"tr"!=t&&"top"!=t&&"right"!=t||(r["-webkit-border-top-right-radius"]=e,r["-moz-border-radius-topright"]=e,r["border-top-right-radius"]=e),"bl"!=t&&"bottom"!=t&&"left"!=t||(r["-webkit-border-bottom-left-radius"]=e,r["-moz-border-radius-bottomleft"]=e,r["border-bottom-left-radius"]=e),"br"!=t&&"bottom"!=t&&"right"!=t||(r["-webkit-border-bottom-right-radius"]=e,r["-moz-border-radius-bottomright"]=e,r["border-bottom-right-radius"]=e),r}function E(t,e,r){var o,i,n,s;if(void 0===t.length)throw"Not yet supported";if(2!=t.length)throw"boxShadow requires a direction (degree) or [xOffset, yOffset] in px measurements.";return{"-moz-box-shadow":(o=t[0])+"px "+(i=t[1])+"px "+e+"px "+r,"-webkit-box-shadow":o+"px "+i+"px "+e+"px "+r,boxShadow:o+"px "+i+"px "+e+"px "+r,"-ms-filter":"progid:DXImageTransform.Microsoft.Shadow(Strength="+(n=4)+", Direction="+(s=135)+", Color='"+r+"')",filter:"progid:DXImageTransform.Microsoft.Shadow(Strength="+n+", Direction="+s+", Color='"+r+"')"}}function G(t){return{width:t,position:"absolute",left:"50%",marginLeft:-t/2}}function _(t){return{height:t,position:"absolute",top:"50%",marginTop:-t/2}}var D=r(0);function X(t,e,r,o){let i="",n="";Object(D.a)().webkit?i="-webkit":Object(D.a)().mozilla&&(i="-moz");const s=[];for(var a=0;a<arguments.length;a++){var u=arguments[a];if("string"==typeof u)s.push(u);else if(d(u))for(var c=0;c<u.length;c++)s.push(u[c]);else for(var l in arguments[a])s.push(u[l]+(0!=l&&"100"!=l?" "+l+"%":""))}for(n=i+"-linear-gradient(",a=0;a<s.length;a++)0!==a&&(n+=", "),n+=s[a];return n+=")",n}function F(){var t={display:"inline-block","&:after":{content:" ",display:"block",width:0,height:0,lineHeight:0,fontSize:0,clear:"both",visibility:"hidden"}};return Object(D.a)().msie&&(t.zoom="1"),t}function Q(t,e,r,o,i){if(void 0===t||void 0===e||void 0===r)throw"imageReplacement() requires width, height and img";return{display:"block",width:t,height:e,backgroundImage:"url("+r+")",backgroundRepeat:"no-repeat",backgroundPosition:(o||0)+"px "+(i||0)+"px",textIndent:-2e4,overflow:"hidden"}}const U={black:"#000000",silver:"#c0c0c0",gray:"#808080",white:"#ffffff",maroon:"#800000",red:"#ff0000",purple:"#800080",fuchsia:"#ff00ff",green:"#008000",lime:"#00ff00",olive:"#808000",yellow:"#ffff00",navy:"#000080",blue:"#0000ff",teal:"#008080",aqua:"#00ffff"},V={},Y=function(t){return V[t]||(V[t]={}),V[t]},Z=function(){return"#"==this.substr(0,1)&&7==this.length?Y(this).hex=""+this:"#"==this.substr(0,1)&&4==this.length?Y(this).hex="#"+this.substr(1,1)+this.substr(1,1)+this.substr(2,1)+this.substr(2,1)+this.substr(3,1)+this.substr(3,1):Y(this).hex=U[this],Y(this).hex},$=function(){const t=Y(this);if(t.rgb)return t.rgb;const e=this.toHexColor();return t.rgb=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)],t.rgb},J=function(){return this.toRGB()[0]},K=function(){return this.toRGB()[1]},W=function(){return this.toRGB()[2]},tt=function(t){const e=this.toHSL(),r=[e[0],e[1],Math.min(100,e[2]+t)];return it(r)},et=function(t){const e=this.toHSL(),r=[e[0],e[1],Math.max(0,e[2]-t)];return it(r)},rt=function(t){const e=this.toHSL(),r=[e[0],Math.min(100,Math.max(0,e[1]+t)),e[2]];return it(r)},ot=function(){this.toRGB();const t=this.red()/255,e=this.green()/255,r=this.blue()/255,o=Math.max(t,e,r),i=Math.min(t,e,r),n=o-i;let s,a,u=(o+i)/2;if(0==n)s=0,a=0;else{a=n/(u<.5?o+i:2-o-i);const c=((o-t)/6+n/2)/n,l=((o-e)/6+n/2)/n,b=((o-r)/6+n/2)/n;t==o?s=b-l:e==o?s=1/3+c-b:r==o&&(s=2/3+l-c),s<0&&(s+=1),s>0&&(s-=1)}s=Math.round(360*s),s<0&&(s+=360);const c=Y(this);return c.hsl=[s,Math.round(100*a),Math.round(100*u)],c.hsl},it=function(t,e,r){function o(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),6*r<1?t+6*(e-t)*r:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}function i(t){let e=Math.round(t).toString(16);return 1==e.length&&(e="0"+e),e.substr(0,1)+e.substr(1,1)}d(t)&&(r=t[2]||0,e=t[1]||0,t=t[0]||0);const n=function(t,e,r){let i,n,s;if(0==e)i=255*r,n=255*r,s=255*r;else{const a=r<.5?r*(1+e):r+e-e*r,u=2*r-a;i=255*o(u,a,t+1/3),n=255*o(u,a,t),s=255*o(u,a,t-1/3)}return[i,n,s]}(t=(t+360)%360/360,e/=100,r/=100);return"#"+i(n[0])+i(n[1])+i(n[2])},nt=M,st={buildCss:I,insertCss:L,style:s(L,I),macros:i,setMacro:function(t,e){w[t]=e},arrayFlatten:p,browserInfo:D.a,hslToHexColor:it,addPropertyNames:nt,propertyNameValidator:o,colorizeString:()=>{String.prototype.toHexColor=Z,String.prototype.toRGB=$,String.prototype.red=J,String.prototype.green=K,String.prototype.blue=W,String.prototype.lighten=tt,String.prototype.darken=et,String.prototype.saturate=rt,String.prototype.toHSL=ot}}}])}));