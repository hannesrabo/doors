(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RNiq:function(e,t,n){"use strict";n.r(t);var o=n("MX0m"),r=n.n(o),i=n("q1tI"),s=n.n(i),a=n("8Kt/"),c=n.n(a),l=n("YFqc"),p=n.n(l),f=s.a.createElement;t.default=function(){return f("div",{className:"jsx-2656813517"},f(c.a,null,f("title",{className:"jsx-2656813517"},"Home"),f("link",{rel:"icon",href:"/static/favicon.ico",importance:"low",className:"jsx-2656813517"})),f("div",{className:"jsx-2656813517 hero"},f("h1",{className:"jsx-2656813517 title"},"Welcome to the Door Game!"),f("p",{className:"jsx-2656813517 description"},"To get started, press the button below. Good luck!"),f("div",{className:"jsx-2656813517 row"},f(p.a,{href:"/game",as:"/doors/game"},f("a",{className:"jsx-2656813517 card"},f("h3",{className:"jsx-2656813517"},"Start Game"))))),f(r.a,{id:"2746355557"},["document{font-family:\"-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu', 'Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif\";}"]),f(r.a,{id:"243749409"},[".hero.jsx-2656813517{width:100%;color:#333;}",".title.jsx-2656813517{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-2656813517,.description.jsx-2656813517{text-align:center;}",".row.jsx-2656813517{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-2656813517{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}",".card.jsx-2656813517:hover{border-color:#067df7;}",".card.jsx-2656813517 h3.jsx-2656813517{margin:0;color:#067df7;font-size:18px;}",".card.jsx-2656813517 p.jsx-2656813517{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("/HRN"),r=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=l(n("LX0d")),u=n("CxY0"),d=c(n("q1tI")),h=(l(n("17x9")),l(n("nOHt"))),x=(n("P5f7"),n("g/15"));function v(e){return e&&"object"===typeof e?(0,x.formatWithValidation)(e):e}var m=new f.default,w=window.IntersectionObserver;function g(){return p||(w?p=new w(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return o(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,o=null;return function(r,i){if(o&&r===t&&i===n)return o;var s=e(r,i);return t=r,n=i,o=s,s}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,o=t.nodeName,r=t.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,x.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,u.resolve)(c,s),a=a?(0,u.resolve)(c,a):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return a(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,u.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),o=n.href,r=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=r||o),d.default.cloneElement(i,s)}}]),t}(d.Component);y.propTypes=void 0;var b=y;t.default=b},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);