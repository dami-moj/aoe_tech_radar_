exports.id=355,exports.ids=[355],exports.modules={9208:e=>{e.exports={style:{fontFamily:"'__Roboto_564f2b', '__Roboto_Fallback_564f2b'",fontStyle:"normal"},className:"__className_564f2b"}},2218:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return u}});let n=r(6249),o=r(7179);function u(e,t){return(0,o.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,"/techradar"))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(7179);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3887:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return u}});let n=r(2568),o=r(5869);function u(e){let t=o.staticGenerationAsyncStorage.getStore();if((null==t||!t.forceStatic)&&(null==t?void 0:t.isStaticGeneration))throw new n.BailoutToCSRError(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7240:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i.ReadonlyURLSearchParams},RedirectType:function(){return i.RedirectType},ServerInsertedHTMLContext:function(){return c.ServerInsertedHTMLContext},notFound:function(){return i.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect},useParams:function(){return p},usePathname:function(){return f},useRouter:function(){return d},useSearchParams:function(){return s},useSelectedLayoutSegment:function(){return h},useSelectedLayoutSegments:function(){return y},useServerInsertedHTML:function(){return c.useServerInsertedHTML}});let n=r(6689),o=r(7443),u=r(7583),a=r(4468),l=r(8362),i=r(7703),c=r(1575);function s(){let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new i.ReadonlyURLSearchParams(e):null,[e]);{let{bailoutToClientRendering:e}=r(3887);e("useSearchParams()")}return t}function f(){return(0,n.useContext)(u.PathnameContext)}function d(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function p(){return(0,n.useContext)(u.PathParamsContext)}function y(e){void 0===e&&(e="children");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let u;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)u=t[1][r];else{var i;let e=t[1];u=null!=(i=e.children)?i:Object.values(e)[0]}if(!u)return o;let c=u[0],s=(0,a.getSegmentValue)(c);return!s||s.startsWith(l.PAGE_SEGMENT_KEY)?o:(o.push(s),e(u,r,!1,o))}(t.tree,e):null}function h(e){void 0===e&&(e="children");let t=y(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===l.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7703:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(1335),o=r(599);class u extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new u}delete(){throw new u}set(){throw new u}sort(){throw new u}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},599:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8514:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1335:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return y},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return d},isRedirectError:function(){return f},permanentRedirect:function(){return s},redirect:function(){return c}});let o=r(4580),u=r(2934),a=r(8514),l="NEXT_REDIRECT";function i(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(l);n.digest=l+";"+t+";"+e+";"+r+";";let u=o.requestAsyncStorage.getStore();return u&&(n.mutableCookies=u.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=u.actionAsyncStorage.getStore();throw i(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function s(e,t){void 0===t&&(t="replace");let r=u.actionAsyncStorage.getStore();throw i(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function f(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),u=Number(o);return t===l&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(u)&&u in a.RedirectStatusCode}function d(e){return f(e)?e.digest.split(";",3)[2]:null}function p(e){if(!f(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function y(e){if(!f(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4468:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5230:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return s},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return f}});let o="refresh",u="navigate",a="restore",l="server-patch",i="prefetch",c="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},849:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7179),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9011:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(4833);function o(e){return(0,n.pathHasPrefix)(e,"/techradar")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6308:(e,t)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return a},isEqualNode:function(){return u}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let u=n[e]||e.toLowerCase();"script"===t&&("async"===u||"defer"===u||"noModule"===u)?o[u]=!!r[e]:o.setAttribute(u,r[e])}let{children:u,dangerouslySetInnerHTML:a}=r;return a?o.innerHTML=a.__html||"":u&&(o.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):""),o}function u(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),a=Number(n.content),l=[];for(let t=0,r=n.previousElementSibling;t<a;t++,r=(null==r?void 0:r.previousElementSibling)||null){var i;(null==r?void 0:null==(i=r.tagName)?void 0:i.toLowerCase())===e&&l.push(r)}let c=t.map(o).filter(e=>{for(let t=0,r=l.length;t<r;t++)if(u(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,n)),n.content=(a-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9019:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(167),o=r(997),u=n._(r(6689)),a=r(5109),l=r(350),i=r(4127),c=r(1976),s=r(9069),f=r(5469),d=r(7443),p=r(6578),y=r(849),h=r(2218),b=r(5230);function g(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let _=u.default.forwardRef(function(e,t){let r,n;let{href:i,as:_,children:m,prefetch:v=null,passHref:O,replace:j,shallow:P,scroll:R,locale:M,onClick:x,onMouseEnter:S,onTouchStart:E,legacyBehavior:C=!1,...T}=e;r=m,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let A=u.default.useContext(f.RouterContext),I=u.default.useContext(d.AppRouterContext),L=null!=A?A:I,w=!A,N=!1!==v,k=null===v?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:U,as:H}=u.default.useMemo(()=>{if(!A){let e=g(i);return{href:e,as:_?g(_):e}}let[e,t]=(0,a.resolveHref)(A,i,!0);return{href:e,as:_?(0,a.resolveHref)(A,_):t||e}},[A,i,_]),q=u.default.useRef(U),F=u.default.useRef(H);C&&(n=u.default.Children.only(r));let W=C?n&&"object"==typeof n&&n.ref:t,[D,K,z]=(0,p.useIntersection)({rootMargin:"200px"}),B=u.default.useCallback(e=>{(F.current!==H||q.current!==U)&&(z(),F.current=H,q.current=U),D(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[H,W,U,z,D]);u.default.useEffect(()=>{},[H,U,K,M,N,null==A?void 0:A.locale,L,w,k]);let $={ref:B,onClick(e){C||"function"!=typeof x||x(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,a,i,c,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};s?u.default.startTransition(d):d()}(e,L,U,H,j,P,R,M,w)},onMouseEnter(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart:function(e){C||"function"!=typeof E||E(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,c.isAbsoluteUrl)(H))$.href=H;else if(!C||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,y.getDomainLocale)(H,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);$.href=t||(0,h.addBasePath)((0,s.addLocale)(H,e,null==A?void 0:A.defaultLocale))}return C?u.default.cloneElement(n,$):(0,o.jsx)("a",{...T,...$,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7179:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return u}});let n=r(7135),o=r(4374),u=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:u}=(0,o.parsePath)(e);return/\.[^/]+\/?$/.test(t)?""+(0,n.removeTrailingSlash)(t)+r+u:t.endsWith("/")?""+t+r+u:t+"/"+r+u};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5109:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(7260),o=r(4127),u=r(5166),a=r(1976),l=r(7179),i=r(350),c=r(157),s=r(3320);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),y=p?d.slice(p[0].length):d;if((y.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(y);d=(p?p[0]:"")+t}if(!(0,i.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:l}=(0,s.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,u.omit)(r,l)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6357:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},handleClientScriptLoad:function(){return b},initScriptLoader:function(){return g}});let n=r(167),o=r(8760),u=r(997),a=n._(r(6405)),l=o._(r(6689)),i=r(1988),c=r(6308),s=r(5682),f=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}},h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:u,children:a="",strategy:l="afterInteractive",onError:i,stylesheets:s}=e,h=r||t;if(h&&d.has(h))return;if(f.has(t)){d.add(h),f.get(t).then(n,i);return}let b=()=>{o&&o(),d.add(h)},g=document.createElement("script"),_=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),n&&n.call(this,t),b()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){i&&i(e)});for(let[r,n]of(u?(g.innerHTML=u.__html||"",b()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",b()):t&&(g.src=t,f.set(t,_)),Object.entries(e))){if(void 0===n||p.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();g.setAttribute(e,n)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),s&&y(s),document.body.appendChild(g)};function b(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(b),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function _(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:c="afterInteractive",onError:f,stylesheets:p,...y}=e,{updateScripts:b,scripts:g,getIsSsr:_,appDir:m,nonce:v}=(0,l.useContext)(i.HeadManagerContext),O=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||r;O.current||(o&&e&&d.has(e)&&o(),O.current=!0)},[o,t,r]);let j=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!j.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,s.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,s.requestIdleCallback)(()=>h(e))})),j.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(b?(g[c]=(g[c]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:f,...y}]),b(g)):_&&_()?d.add(t||r):_&&!_()&&h(e)),m){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(a.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin}),(0,u.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,u.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&r&&a.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let m=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6578:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(6689),o=r(5682),u="function"==typeof IntersectionObserver,a=new Map,l=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!u,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]),[p,s,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8785:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2568:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return o}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},6249:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let n=r(4374);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:u}=(0,n.parsePath)(e);return""+t+r+o+u}},4127:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return a}});let n=r(8760)._(r(7260)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",a=e.pathname||"",l=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(n.urlQueryToSearchParams(i)));let s=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),s&&"?"!==s[0]&&(s="?"+s),""+u+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+l}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},3320:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(5466),o=r(7653);function u(e,t,r){let u="",a=(0,o.getRouteRegex)(e),l=a.groups,i=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;u=e;let c=Object.keys(l);return c.every(e=>{let t=i[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in i)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:c,result:u}}},350:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(1976),o=r(9011);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},5166:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},4374:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},4833:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(4374);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},7260:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},7135:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},5466:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(1976);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),a}}},7653:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return i},parseParameter:function(){return a}});let n=r(2407),o=r(8785),u=r(7135);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,u.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&u){let{key:e,optional:n,repeat:i}=a(u[1]);return r[e]={pos:l++,repeat:i,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!u)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(u[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function i(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:u,keyPrefix:l}=e,{key:i,optional:c,repeat:s}=a(n),f=i.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),l?u[f]=""+l+i:u[f]=i;let p=t?(0,o.escapeStringRegexp)(t):"";return s?c?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function s(e,t){let r;let a=(0,u.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),i={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&u){let[r]=e.split(u[0]);return c({getSafeRouteKey:l,interceptionMarker:r,segment:u[1],routeKeys:i,keyPrefix:t?"nxtI":void 0})}return u?c({getSafeRouteKey:l,segment:u[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:i}}function f(e,t){let r=s(e,t);return{...i(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},7583:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HooksClientContext},5469:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.RouterContext},1575:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ServerInsertedHtml},1664:(e,t,r)=>{e.exports=r(9019)},9332:(e,t,r)=>{e.exports=r(7240)},334:(e,t,r)=>{e.exports=r(6357)},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=u?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}}};