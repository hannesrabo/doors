(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"07wX":function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return t("OzVs")}])},OzVs:function(o,e,t){"use strict";t.r(e);var n=t("hfKm"),r=t.n(n);function i(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(o,n.key,n)}}var a=t("XVgq"),s=t.n(a),c=t("Z7t5"),l=t.n(c);function u(o){return(u="function"===typeof l.a&&"symbol"===typeof s.a?function(o){return typeof o}:function(o){return o&&"function"===typeof l.a&&o.constructor===l.a&&o!==l.a.prototype?"symbol":typeof o})(o)}function d(o){return(d="function"===typeof l.a&&"symbol"===u(s.a)?function(o){return u(o)}:function(o){return o&&"function"===typeof l.a&&o.constructor===l.a&&o!==l.a.prototype?"symbol":u(o)})(o)}function p(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}var f=t("Bhuq"),x=t.n(f),m=t("TRZx"),b=t.n(m);function w(o){return(w=b.a?x.a:function(o){return o.__proto__||x()(o)})(o)}var h=t("SqZg"),y=t.n(h);function j(o,e){return(j=b.a||function(o,e){return o.__proto__=e,o})(o,e)}var g=t("MX0m"),v=t.n(g),k=t("q1tI"),N=t.n(k),_=t("8Kt/"),C=t.n(_),E=N.a.createElement,S=function(o){var e="door",t="static/door.png",n=function(){};return o.open?(e+=" door-open",t="static/door-open.png"):e+=" door-closed",o.doorClicked&&(n=o.doorClicked),E("div",{className:"jsx-482852323"},E("a",{onClick:function(){n(o.doorNumber)},className:"jsx-482852323"},E("div",{className:"jsx-482852323 "+(e||"")},E("img",{src:t,className:"jsx-482852323"}))),E(v.a,{id:"482852323"},[".door.jsx-482852323 img.jsx-482852323{width:120px;}",".door.door-closed.jsx-482852323{cursor:pointer;}",".door.door-closed.jsx-482852323:hover img.jsx-482852323{box-shadow:1px 1px 7px 4px grey;}"]))},T=function(o){var e="";for(var t in o)if(o.hasOwnProperty(t)){var n=o[t];""!==e&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n)}if(""!==e)return console.log("Sent of this data: "+e),fetch("https://script.google.com/macros/s/AKfycbxfxJuz6s8PHwfnlm4uE2E02Z7D1qNyrzWKRDNoihF8r0bGouE/exec?"+e);console.log("Warning. The object to send seems to be empty: "+o)};t.d(e,"default",function(){return D});var z=N.a.createElement,D=function(o){function e(o){var t,n,i,a,s,c;return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=w(e).call(this,o),t=!i||"object"!==d(i)&&"function"!==typeof i?p(n):i,a=p(t),c=function(o){console.log("Clicked: "+o),o&&t.setState({openDoor:o})},(s="doorClicked")in a?r()(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,t.state={openDoor:-1},t.doors=[1,2,3],t}var t,n,a;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=y()(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&j(o,e)}(e,k["Component"]),t=e,(n=[{key:"render",value:function(){var o=this;return z("div",{className:"jsx-2358995901"},z(C.a,null,z("title",{className:"jsx-2358995901"},"Game"),z("link",{rel:"icon",href:"/static/favicon.ico",importance:"low",className:"jsx-2358995901"})),z("div",{className:"jsx-2358995901 hero"},z("h1",{className:"jsx-2358995901 title"},"Welcome to the Door Game!"),z("p",{className:"jsx-2358995901 description"},"To get started, press the button below. Good luck!"),z("div",{className:"jsx-2358995901 row"},this.doors.map(function(e){return z(S,{key:e,doorNumber:e,doorClicked:o.doorClicked,open:o.state.openDoor===e||void 0})})),z("button",{onClick:function(){T({test_1:"data &\xb4+=",test_2:1,test_3:"d ata@\xe4 "})},className:"jsx-2358995901"},"Send To Sheets")),z(v.a,{id:"2358995901"},["document.jsx-2358995901{font-family:\"-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif\";}",".hero.jsx-2358995901{width:100%;color:#333;}",".title.jsx-2358995901{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-2358995901,.description.jsx-2358995901{text-align:center;}",".row.jsx-2358995901{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-2358995901{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-2358995901:hover{border-color:#067df7;}",".card.jsx-2358995901 h3.jsx-2358995901{margin:0;color:#067df7;font-size:18px;}",".card.jsx-2358995901 p.jsx-2358995901{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]))}}])&&i(t.prototype,n),a&&i(t,a),e}()}},[["07wX",1,0]]]);