(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{2919:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Editor",function(){return t(782)}])},1639:function(n,e,t){"use strict";t.d(e,{z:function(){return h}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n  width: ",";\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function f(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return f=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var s=o.ZP.button.withConfig({componentId:"sc-a2e10806-0"})(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)}),(function(n){return n.block?"100%":"fit-content"})),d=o.ZP.div.withConfig({componentId:"sc-a2e10806-1"})(f()),h=function(n){var e=n.children,t=n.status,r=n.block,o=void 0!==r&&r,a=u(n,["children","status","block"]);return(0,i.jsx)(s,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY",block:o},a,{children:(0,i.jsx)(d,{children:e})}))}},705:function(n,e,t){"use strict";t.d(e,{I:function(){return u}});var r=t(5893);t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(){var n,e,t=(n=["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 12px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 30px;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return o=function(){return t},t}var c=t(2125).ZP.input.withConfig({componentId:"sc-4ba8716a-0"})(o(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),u=function(n){return(0,r.jsx)(c,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){i(n,e,t[e])}))}return n}({},n))}},3887:function(n,e,t){"use strict";t.d(e,{u:function(){return S}});var r=t(5893),i=t(7294),o=t(1639),c=t(2125);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=u(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return a=function(){return n},n}function l(){var n=u(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 36;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return l=function(){return n},n}function f(){var n=u(["\n  min-width: 440px;\n  max-width: 70%;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n"]);return f=function(){return n},n}function s(){var n=u(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return s=function(){return n},n}function d(){var n=u(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return d=function(){return n},n}function h(){var n=u(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden scroll;\n"]);return h=function(){return n},n}function p(){var n=u(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return p=function(){return n},n}var b=(0,c.F4)(a()),m=c.ZP.div.withConfig({componentId:"sc-6252c8e5-0"})(l()),v=c.ZP.div.withConfig({componentId:"sc-6252c8e5-1"})(f(),b),y=c.ZP.h2.withConfig({componentId:"sc-6252c8e5-2"})(s(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),x=c.ZP.div.withConfig({componentId:"sc-6252c8e5-3"})(d(),(function(n){return n.theme.MODAL_BACKGROUND})),g=c.ZP.div.withConfig({componentId:"sc-6252c8e5-4"})(h(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),j=c.ZP.div.withConfig({componentId:"sc-6252c8e5-5"})(p(),(function(n){return n.theme.BACKGROUND_SECONDARY}));function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(n){var e=function(e){e.key===n&&o(!0)},t=O(i.useState(!1),2),r=t[0],o=t[1],c=function(e){e.key===n&&o(!1)};return i.useEffect((function(){return window.addEventListener("keydown",e),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",c)}}),[]),r},S=function(n){var e=n.children,t=n.visible,i=n.setVisible;return t?(0,r.jsx)(m,{onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(v,{children:e})}):null};S.Header=function(n){var e=n.children;return(0,r.jsx)(x,{children:(0,r.jsx)(y,{children:e})})},S.Content=function(n){var e=n.children;return(0,r.jsx)(g,{children:e})},S.Controls=function(n){var e=n.children,t=n.setVisible,c=C("Escape");return i.useEffect((function(){c&&t(!1)}),[c,t]),(0,r.jsxs)(j,{children:[(0,r.jsx)(o.z,{onClick:function(){return t(!1)},children:"Close"}),e]})}},4585:function(n,e,t){"use strict";t.d(e,{h:function(){return g},a:function(){return j}});var r=t(4931);function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](n):n instanceof e}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function u(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||l(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||l(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,e){if(n){if("string"===typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}var f=function(n){var e=u(n,2),t=(e[0],e[1]),r=null!==t,i=Array.isArray(t)?!!t.length:"object"===typeof t;return r&&i},s=function(n){var e=u(n,2),t=(e[0],e[1]);return!Array.isArray(t)&&!o(t,Object)};function d(n,e){return Object.entries(n).filter(f).flatMap((function(n){var t=u(n,2),r=t[0],i=t[1];return[{id:e(),text:r,parent:!0,children:p(i,e)}]}))}function h(n){if(o(n,Object)){var e=Object.entries(n).filter(s);return Object.fromEntries(e)}return n.toString()}var p=function(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e=0,function(){return String(++e)});return n?[n].flat().map((function(n){return{id:t(),text:h(n),children:d(n,t),parent:!1}})):[]},b=function(n){return n.flatMap((function(n){var e=n.children;return[c(n,["children"])].concat(a(b(e)))}))},m=function(n){return n.flatMap((function(n){var e=n.id,t=n.children,r=void 0===t?[]:t;return a(r.map((function(n){var t=n.id;return{id:"e".concat(e,"-").concat(t),from:e,to:t}}))).concat(a(m(r)))}))},v=function(n){try{Array.isArray(n)||(n=[n]);var e=p(n);return a(b(e)).concat(a(m(e)))}catch(t){return console.error(t),r.ZP.error("An error occured while parsing JSON data!"),[]}};function y(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](n):n instanceof e}var x=function(n){if(y(n,Object)){var e=Object.entries(n).map((function(n){return[n[0],String(n[1])]}));return Object.fromEntries(e)}return String(n)};function g(n){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=v(JSON.parse(n)),r=[],i=[],o=0;o<t.length;o++){var c=t[o];if(O(c)){var u=w(c.text),a=u.split("\n"),l=a.map((function(n){return n.length})).sort((function(n,e){return n-e})),f=l.reverse()[0],s=17.8*a.length<30?40:17.8*a.length;r.push({id:c.id,text:x(c.text),data:{isParent:c.parent},width:e?35+8*f:180,height:s})}else i.push(c)}return{nodes:r,edges:i}}function j(n){switch(n){case"RIGHT":return"UP";case"UP":return"LEFT";case"LEFT":return"DOWN";default:return"RIGHT"}}function w(n){if(y(n,Object)){var e="",t=Object.entries(n);return Object.keys(n).every((function(n){return!isNaN(+n)}))?Object.values(n).join(""):(t.forEach((function(n){e+="".concat(n[0],": ").concat(String(n[1]),"\n")})),e)}return n}function O(n){return"text"in n}},782:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ge}});var r=t(5893),i=t(7294),o=t(9008),c=t(4931),u=t(1664),a=t.n(u),l=t(2125),f=t(9327),s=t(9352),d=t(471),h=t(8193);function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function v(){var n=m(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return v=function(){return n},n}function y(){var n=m(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 20%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",";\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return y=function(){return n},n}function x(){var n=m([""]);return x=function(){return n},n}var g=l.ZP.div.withConfig({componentId:"sc-5cff3129-0"})(v()),j=l.ZP.div.withConfig({componentId:"sc-5cff3129-1"})(y(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"})),w=l.ZP.div.withConfig({componentId:"sc-5cff3129-2"})(x()),O=function(n){var e=n.children,t=n.title,o=b(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(g,{children:[(0,r.jsx)(j,{visible:c,children:t}),(0,r.jsx)(w,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},C=t(1163),S=t(3887),A=t(1639),I=t(705),E=t(9896);function P(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function N(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return P(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function T(){var n=R(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return T=function(){return n},n}function k(){var n=R(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border: 2px dashed ",';\n  border-radius: 5px;\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return k=function(){return n},n}function Z(){var n=R(["\n  color: ",";\n"]);return Z=function(){return n},n}function z(){var n=R(["\n  color: ",";\n  margin-bottom: 0;\n"]);return z=function(){return n},n}var _=(0,l.ZP)(S.u.Content).withConfig({componentId:"sc-c17a104-0"})(T()),D=l.ZP.label.withConfig({componentId:"sc-c17a104-1"})(k(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),L=l.ZP.span.withConfig({componentId:"sc-c17a104-2"})(Z(),(function(n){return n.theme.INTERACTIVE_NORMAL})),U=l.ZP.h3.withConfig({componentId:"sc-c17a104-3"})(z(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),G=function(n){var e,t=n.visible,o=n.setVisible,u=(0,E.Z)((function(n){return n.updateJson})),a=N(i.useState(""),2),l=a[0],f=a[1],s=N(i.useState(null),2),d=s[0],p=s[1];return i.useEffect((function(){return function(){p(null),f("")}}),[t]),(0,r.jsxs)(S.u,{visible:t,setVisible:o,children:[(0,r.jsx)(S.u.Header,{children:"Import JSON"}),(0,r.jsxs)(_,{children:[(0,r.jsx)(I.I,{value:l,onChange:function(n){return f(n.target.value)},type:"url",placeholder:"URL of JSON to fetch"}),(0,r.jsxs)(D,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&p(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===d||void 0===d?void 0:d.name),(0,r.jsx)(h.aBR,{size:48}),(0,r.jsx)(U,{children:"Click Here to Upload JSON"}),(0,r.jsx)(L,{children:null!==(e=null===d||void 0===d?void 0:d.name)&&void 0!==e?e:"None"})]})]}),(0,r.jsx)(S.u.Controls,{setVisible:o,children:(0,r.jsx)(A.z,{status:"SECONDARY",onClick:function(){if(l)return p(null),c.ZP.loading("Loading...",{id:"toastFetch"}),fetch(l).then((function(n){return n.json()})).then((function(n){u(JSON.stringify(n)),o(!1)})).catch((function(){return c.ZP.error("Failed to fetch JSON!")})).finally((function(){return c.ZP.dismiss("toastFetch")}));if(d){var n=new FileReader;n.readAsText(d,"UTF-8"),n.onload=function(n){var e;u(null===(e=n.target)||void 0===e?void 0:e.result),o(!1)}}},disabled:!(d||l),children:"Import"})})]})},V=function(n){var e=n.visible,t=n.setVisible,i=(0,E.Z)((function(n){return n.updateJson}));return(0,r.jsxs)(S.u,{visible:e,setVisible:t,children:[(0,r.jsx)(S.u.Header,{children:"Clear JSON"}),(0,r.jsx)(S.u.Content,{children:"Are you sure you want to clear JSON?"}),(0,r.jsx)(S.u.Controls,{setVisible:t,children:(0,r.jsx)(A.z,{status:"DANGER",onClick:function(){i("{}"),c.ZP.success("Cleared JSON and removed from memory."),t(!1)},children:"Confirm"})})]})},M=t(1485),J=t(7516),B=t(8305);function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function H(){var n=Y([""]);return H=function(){return n},n}function X(){var n=Y(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-weight: 600;\n"]);return X=function(){return n},n}var $=l.ZP.p.withConfig({componentId:"sc-ab3e9df3-0"})(H()),W=l.ZP.div.withConfig({componentId:"sc-ab3e9df3-1"})(X(),(function(n){return n.theme.TEXT_DANGER})),q=function(n){var e=n.visible,t=n.setVisible,o=(0,E.Z)((function(n){return n.json})),u=K(i.useState(""),2),a=u[0],l=u[1],f=K((0,M.m9)(),2),s=(f[0],f[1]);i.useEffect((function(){var n=(0,B.nN)(JSON.parse(o)),e=JSON.stringify(n);l("https://jsonvisio.com/editor?json=".concat(encodeURIComponent(e)))}),[o]);return(0,r.jsxs)(S.u,{visible:e,setVisible:t,children:[(0,r.jsx)(S.u.Header,{children:"Create a Share Link"}),(0,r.jsx)(S.u.Content,{children:a.length>5e3?(0,r.jsxs)(W,{children:[(0,r.jsx)(J.tJu,{size:60}),(0,r.jsx)($,{children:"Link size exceeds 5000 characters, unable to generate link for file of this size!"})]}):(0,r.jsx)(I.I,{value:a,type:"url",readOnly:!0})}),(0,r.jsx)(S.u.Controls,{setVisible:t,children:a.length<5e3&&(0,r.jsx)(A.z,{status:"SECONDARY",onClick:function(){s(a),c.ZP.success("Link copied to clipboard."),t(!1)},children:"Copy"})})]})},Q=t(155),nn=t(4585);function en(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function tn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return en(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return en(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function on(){var n=rn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  background: ",";\n  padding: 4px;\n  border-right: 1px solid ",";\n"]);return on=function(){return n},n}function cn(){var n=rn(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  ",";\n\n  svg {\n    padding: 8px;\n    vertical-align: middle;\n  }\n\n  a {\n    display: flex;\n  }\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n"]);return cn=function(){return n},n}function un(){var n=rn(["\n  color: ",";\n"]);return un=function(){return n},n}function an(){var n=rn(["\n  transform: rotate(",");\n"]);return an=function(){return n},n}function ln(){var n=rn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return ln=function(){return n},n}function fn(){var n=rn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return fn=function(){return n},n}function sn(){var n=rn(["\n  color: ",";\n"]);return sn=function(){return n},n}function dn(){var n=rn(["\n  color: ",";\n"]);return dn=function(){return n},n}var hn=l.ZP.div.withConfig({componentId:"sc-f791a6cd-0"})(on(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),pn=l.ZP.div.withConfig({componentId:"sc-f791a6cd-1"})(cn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){var e=n.theme;return n.beta&&"\n    &::after {\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      bottom: 0;\n      right: 0;\n      content: 'Beta';\n      font-size: 10px;\n      font-weight: 500;\n      background: ".concat(e.BLURPLE,";\n      border-radius: 4px;\n      color: ").concat(e.FULL_WHITE,";\n      padding: 2px;\n      height: 14px;\n      z-index: 0;\n    }\n  ")}),(function(n){return n.theme.INTERACTIVE_HOVER})),bn=l.ZP.span.withConfig({componentId:"sc-f791a6cd-2"})(un(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),mn=(0,l.ZP)(f.S$H).withConfig({componentId:"sc-f791a6cd-3"})(an(),(function(n){var e=n.rotate;return"".concat(e,"deg")})),vn=l.ZP.nav.withConfig({componentId:"sc-f791a6cd-4"})(ln(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),yn=l.ZP.nav.withConfig({componentId:"sc-f791a6cd-5"})(fn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),xn=l.ZP.div.withConfig({componentId:"sc-f791a6cd-6"})(sn(),(function(n){return n.theme.FULL_WHITE}));function gn(n){return"LEFT"===n?90:"UP"===n?180:"RIGHT"===n?270:360}var jn=(0,l.ZP)(Q.iP_).withConfig({componentId:"sc-f791a6cd-7"})(dn(),(function(n){return n.theme.ORANGE})),wn=function(){var n=(0,E.Z)((function(n){return n.json})),e=(0,E.Z)((function(n){return n.updateSetting})),t=(0,E.Z)((function(n){return n.settings})),o=t.expand,u=t.performance,l=t.layout,f=(0,C.useRouter)(),p=tn(i.useState(!1),2),b=p[0],m=p[1],v=tn(i.useState(!1),2),y=v[0],x=v[1],g=tn(i.useState(!1),2),j=g[0],w=g[1];return(0,r.jsxs)(hn,{children:[(0,r.jsxs)(vn,{children:[(0,r.jsx)(a(),{passHref:!0,href:"/",children:(0,r.jsx)(pn,{onClick:function(){return f.push("/")},children:(0,r.jsxs)(xn,{children:[(0,r.jsx)(bn,{children:"J"}),(0,r.jsx)(bn,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(O,{title:"Import File",children:(0,r.jsx)(pn,{onClick:function(){return m(!0)},children:(0,r.jsx)(h.O1u,{})})}),(0,r.jsx)(O,{title:"Rotate Layout",children:(0,r.jsx)(pn,{onClick:function(){var n=(0,nn.a)(l);e("layout",n)},children:(0,r.jsx)(mn,{rotate:gn(l)})})}),(0,r.jsx)(O,{title:o?"Shrink Nodes":"Expand Nodes",children:(0,r.jsx)(pn,{title:"Toggle Expand/Collapse",onClick:function(){e("expand",!o),(0,c.ZP)("".concat(o?"Collapsed":"Expanded"," nodes."))},children:o?(0,r.jsx)(d.DUJ,{}):(0,r.jsx)(d.q6J,{})})}),(0,r.jsx)(O,{title:"".concat(u?"Disable":"Enable"," Performance Mode (Beta)"),children:(0,r.jsx)(pn,{onClick:function(){var n=u?"Disabled Performance Mode\nSearch Node & Save Image enabled.":"Enabled Performance Mode\nSearch Node & Save Image disabled.";(0,c.ZP)(n,{icon:(0,r.jsx)(jn,{size:36}),duration:3e3}),e("performance",!u)},beta:!0,children:(0,r.jsx)(d.qvZ,{color:u?"#0073FF":void 0})})}),(0,r.jsx)(O,{title:"Save JSON",children:(0,r.jsx)(pn,{onClick:function(){var e=document.createElement("a"),t=new Blob([n],{type:"text/plain"});e.href=window.URL.createObjectURL(t),e.download="jsonvisio.json",e.click()},children:(0,r.jsx)(h.JMf,{})})}),(0,r.jsx)(O,{title:"Clear JSON",children:(0,r.jsx)(pn,{onClick:function(){return x(!0)},children:(0,r.jsx)(h.VPh,{})})}),(0,r.jsx)(O,{title:"Share",children:(0,r.jsx)(pn,{onClick:function(){return w(!0)},children:(0,r.jsx)(h.uFt,{})})})]}),(0,r.jsxs)(yn,{children:[(0,r.jsx)(pn,{children:(0,r.jsx)(a(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(h.h3E,{})})})}),(0,r.jsx)(pn,{children:(0,r.jsx)(a(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(h.RrF,{})})})}),(0,r.jsx)(pn,{children:(0,r.jsx)(a(),{href:"https://www.patreon.com/aykutsarac",children:(0,r.jsx)("a",{"aria-label":"Patreon",rel:"me",target:"_blank",children:(0,r.jsx)(s.cu7,{})})})})]}),(0,r.jsx)(G,{visible:b,setVisible:m}),(0,r.jsx)(V,{visible:y,setVisible:x}),(0,r.jsx)(q,{visible:j,setVisible:w})]})};function On(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 600;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return On=function(){return t},t}var Cn=l.ZP.div.withConfig({componentId:"sc-132d618-0"})(On(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),Sn=function(){var n=(0,C.useRouter)();return(0,r.jsxs)(Cn,{children:["This app is not compatible with your device!",(0,r.jsx)(A.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},An=t(524);t(7786);function In(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function En(){var n=In(["\n  display: flex;\n  height: 100vh;\n"]);return En=function(){return n},n}function Pn(){var n=In(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return Pn=function(){return n},n}function Nn(){var n=In(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n"]);return Nn=function(){return n},n}var Rn=l.ZP.div.withConfig({componentId:"sc-dba5e242-0"})(En()),Tn=l.ZP.div.withConfig({componentId:"sc-dba5e242-1"})(Pn()),kn=(0,l.ZP)(An.o).withConfig({componentId:"sc-dba5e242-2"})(Nn(),(function(n){return n.theme.BACKGROUND_SECONDARY})),Zn=t(9604),zn=t(8485),_n=t(5434);function Dn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ln(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Un(){var n=Ln(["\n  z-index: 5;\n"]);return Un=function(){return n},n}function Gn(){var n=Ln(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return Gn=function(){return n},n}function Vn(){var n=Ln(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return Vn=function(){return n},n}function Mn(){var n=Ln(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return Mn=function(){return n},n}var Jn=l.ZP.div.withConfig({componentId:"sc-ac28434b-0"})(Un()),Bn=l.ZP.button.withConfig({componentId:"sc-ac28434b-1"})(Gn(),(function(n){var e=n.theme;return n.error?e.TEXT_DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.TEXT_DANGER})),Fn=l.ZP.span.withConfig({componentId:"sc-ac28434b-2"})(Vn()),Kn=l.ZP.pre.withConfig({componentId:"sc-ac28434b-3"})(Mn(),(function(n){return n.theme.TEXT_DANGER}),(function(n){return n.theme.SILVER_DARK})),Yn=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(Jn,{children:[(0,r.jsxs)(Bn,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Dn(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(Fn,{children:[e.message?(0,r.jsx)(_n.pKf,{size:20}):(0,r.jsx)(_n.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(_n.Faw,{size:22}):(0,r.jsx)(_n.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(Kn,{children:e.message})]})};function Hn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Xn(){var n=Hn(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return Xn=function(){return n},n}function $n(){var n=Hn(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return $n=function(){return n},n}function Wn(){var n=Hn(["\n  color: #faa81a;\n"]);return Wn=function(){return n},n}function qn(){var n=Hn(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return qn=function(){return n},n}var Qn=l.ZP.div.withConfig({componentId:"sc-40c9a20d-0"})(Xn(),(function(n){return n.theme.BLACK_DARK})),ne=l.ZP.h2.withConfig({componentId:"sc-40c9a20d-1"})($n()),ee=l.ZP.span.withConfig({componentId:"sc-40c9a20d-2"})(Wn()),te=l.ZP.div.withConfig({componentId:"sc-40c9a20d-3"})(qn()),re=function(n){var e=n.message;return(0,r.jsxs)(Qn,{children:[(0,r.jsxs)(ne,{children:[(0,r.jsx)(ee,{children:"JSON"})," Visio"]}),(0,r.jsx)(te,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})};function ie(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function oe(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ce(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){oe(n,e,t[e])}))}return n}function ue(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return ie(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ie(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function le(){var n=ae(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"]);return le=function(){return n},n}function fe(){var n=ae(["\n  display: grid;\n  height: calc(100vh - 36px);\n  grid-template-columns: 100%;\n  grid-template-rows: minmax(0, 1fr);\n"]);return fe=function(){return n},n}Zn._m.config({paths:{vs:"/monaco-editor/min/vs"}});var se=l.ZP.div.withConfig({componentId:"sc-b5e8e54e-0"})(le()),de={formatOnPaste:!0,minimap:{enabled:!1}},he=l.ZP.div.withConfig({componentId:"sc-b5e8e54e-1"})(fe()),pe=function(){var n=(0,E.Z)((function(n){return n.json})),e=(0,E.Z)((function(n){return n.settings.lightmode})),t=(0,E.Z)((function(n){return n.updateJson})),o=ue(i.useState(""),2),c=o[0],u=o[1],a=ue(i.useState({message:"",isExpanded:!0}),2),l=a[0],f=a[1],s=i.useMemo((function(){return e?"light":"vs-dark"}),[e]);return i.useEffect((function(){u(JSON.stringify(JSON.parse(n),null,2))}),[n]),i.useEffect((function(){var n=setTimeout((function(){try{if(!c)return f((function(n){return ce({},n,{message:""})})),t("[]");(0,zn.Z)(c),t(c),f((function(n){return ce({},n,{message:""})}))}catch(n){f((function(e){return ce({},e,{message:n.message})}))}}),1500);return function(){return clearTimeout(n)}}),[c,t]),(0,r.jsxs)(se,{children:[(0,r.jsx)(Yn,{error:l,setError:f}),(0,r.jsx)(he,{children:(0,r.jsx)(Zn.ZP,{height:"100%",defaultLanguage:"json",value:c,theme:s,options:de,loading:(0,r.jsx)(re,{message:"Loading Editor..."}),onChange:function(n){return u(n)}})})]})},be=(0,t(5152).default)((function(){return Promise.all([t.e(556),t.e(434),t.e(987),t.e(994),t.e(334)]).then(t.bind(t,3334))}),{loadableGenerated:{webpack:function(){return[3334]}},ssr:!1}),me=function(){var n=(0,E.Z)((function(n){return n.settings.hideEditor}));return(0,r.jsxs)(kn,{children:[(0,r.jsx)(An.o.Pane,{preferredSize:400,minSize:300,maxSize:600,visible:!n,children:(0,r.jsx)(pe,{})}),(0,r.jsx)(An.o.Pane,{children:(0,r.jsx)(be,{})})]})},ve=function(){return(0,r.jsxs)(Rn,{children:[(0,r.jsx)(wn,{}),(0,r.jsx)(Tn,{children:(0,r.jsx)(me,{})}),(0,r.jsx)(Sn,{})]})};function ye(){var n,e,t=(n=[""],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return ye=function(){return t},t}var xe=l.ZP.div.withConfig({componentId:"sc-d6876296-0"})(ye()),ge=function(){return(0,r.jsxs)(xe,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Editor | JSON Visio"}),(0,r.jsx)("meta",{name:"description",content:"View your JSON data in graphs instantly."})]}),(0,r.jsx)(ve,{})]})}}},function(n){n.O(0,[774,90,937,228,260,955,874,617,831,951,888,179],(function(){return e=2919,n(n.s=e);var e}));var e=n.O();_N_E=e}]);