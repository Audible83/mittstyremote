function Km(r,n){return function(){return r.apply(n,arguments)}}const{toString:zy}=Object.prototype,{getPrototypeOf:Do}=Object,{iterator:cs,toStringTag:Zm}=Symbol,ps=(r=>n=>{const o=zy.call(n);return r[o]||(r[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Yt=r=>(r=r.toLowerCase(),n=>ps(n)===r),fs=r=>n=>typeof n===r,{isArray:Ei}=Array,xi=fs("undefined");function fn(r){return r!==null&&!xi(r)&&r.constructor!==null&&!xi(r.constructor)&&Pt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Xm=Yt("ArrayBuffer");function Ry(r){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(r):n=r&&r.buffer&&Xm(r.buffer),n}const Dy=fs("string"),Pt=fs("function"),Qm=fs("number"),hn=r=>r!==null&&typeof r=="object",By=r=>r===!0||r===!1,Zn=r=>{if(ps(r)!=="object")return!1;const n=Do(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Zm in r)&&!(cs in r)},Py=r=>{if(!hn(r)||fn(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},My=Yt("Date"),Uy=Yt("File"),Ny=Yt("Blob"),Fy=Yt("FileList"),Vy=r=>hn(r)&&Pt(r.pipe),Ly=r=>{let n;return r&&(typeof FormData=="function"&&r instanceof FormData||Pt(r.append)&&((n=ps(r))==="formdata"||n==="object"&&Pt(r.toString)&&r.toString()==="[object FormData]"))},qy=Yt("URLSearchParams"),[Wy,Hy,jy,Gy]=["ReadableStream","Request","Response","Headers"].map(Yt),Ky=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mn(r,n,{allOwnKeys:o=!1}={}){if(r===null||typeof r>"u")return;let d,p;if(typeof r!="object"&&(r=[r]),Ei(r))for(d=0,p=r.length;d<p;d++)n.call(null,r[d],d,r);else{if(fn(r))return;const m=o?Object.getOwnPropertyNames(r):Object.keys(r),_=m.length;let x;for(d=0;d<_;d++)x=m[d],n.call(null,r[x],x,r)}}function Jm(r,n){if(fn(r))return null;n=n.toLowerCase();const o=Object.keys(r);let d=o.length,p;for(;d-- >0;)if(p=o[d],n===p.toLowerCase())return p;return null}const ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ym=r=>!xi(r)&&r!==ei;function go(){const{caseless:r,skipUndefined:n}=Ym(this)&&this||{},o={},d=(p,m)=>{const _=r&&Jm(o,m)||m;Zn(o[_])&&Zn(p)?o[_]=go(o[_],p):Zn(p)?o[_]=go({},p):Ei(p)?o[_]=p.slice():(!n||!xi(p))&&(o[_]=p)};for(let p=0,m=arguments.length;p<m;p++)arguments[p]&&mn(arguments[p],d);return o}const Zy=(r,n,o,{allOwnKeys:d}={})=>(mn(n,(p,m)=>{o&&Pt(p)?r[m]=Km(p,o):r[m]=p},{allOwnKeys:d}),r),Xy=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Qy=(r,n,o,d)=>{r.prototype=Object.create(n.prototype,d),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:n.prototype}),o&&Object.assign(r.prototype,o)},Jy=(r,n,o,d)=>{let p,m,_;const x={};if(n=n||{},r==null)return n;do{for(p=Object.getOwnPropertyNames(r),m=p.length;m-- >0;)_=p[m],(!d||d(_,r,n))&&!x[_]&&(n[_]=r[_],x[_]=!0);r=o!==!1&&Do(r)}while(r&&(!o||o(r,n))&&r!==Object.prototype);return n},Yy=(r,n,o)=>{r=String(r),(o===void 0||o>r.length)&&(o=r.length),o-=n.length;const d=r.indexOf(n,o);return d!==-1&&d===o},ew=r=>{if(!r)return null;if(Ei(r))return r;let n=r.length;if(!Qm(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=r[n];return o},tw=(r=>n=>r&&n instanceof r)(typeof Uint8Array<"u"&&Do(Uint8Array)),rw=(r,n)=>{const d=(r&&r[cs]).call(r);let p;for(;(p=d.next())&&!p.done;){const m=p.value;n.call(r,m[0],m[1])}},iw=(r,n)=>{let o;const d=[];for(;(o=r.exec(n))!==null;)d.push(o);return d},nw=Yt("HTMLFormElement"),sw=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,d,p){return d.toUpperCase()+p}),Jh=(({hasOwnProperty:r})=>(n,o)=>r.call(n,o))(Object.prototype),aw=Yt("RegExp"),eg=(r,n)=>{const o=Object.getOwnPropertyDescriptors(r),d={};mn(o,(p,m)=>{let _;(_=n(p,m,r))!==!1&&(d[m]=_||p)}),Object.defineProperties(r,d)},ow=r=>{eg(r,(n,o)=>{if(Pt(r)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const d=r[o];if(Pt(d)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},lw=(r,n)=>{const o={},d=p=>{p.forEach(m=>{o[m]=!0})};return Ei(r)?d(r):d(String(r).split(n)),o},uw=()=>{},dw=(r,n)=>r!=null&&Number.isFinite(r=+r)?r:n;function cw(r){return!!(r&&Pt(r.append)&&r[Zm]==="FormData"&&r[cs])}const pw=r=>{const n=new Array(10),o=(d,p)=>{if(hn(d)){if(n.indexOf(d)>=0)return;if(fn(d))return d;if(!("toJSON"in d)){n[p]=d;const m=Ei(d)?[]:{};return mn(d,(_,x)=>{const b=o(_,p+1);!xi(b)&&(m[x]=b)}),n[p]=void 0,m}}return d};return o(r,0)},fw=Yt("AsyncFunction"),hw=r=>r&&(hn(r)||Pt(r))&&Pt(r.then)&&Pt(r.catch),tg=((r,n)=>r?setImmediate:n?((o,d)=>(ei.addEventListener("message",({source:p,data:m})=>{p===ei&&m===o&&d.length&&d.shift()()},!1),p=>{d.push(p),ei.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Pt(ei.postMessage)),mw=typeof queueMicrotask<"u"?queueMicrotask.bind(ei):typeof process<"u"&&process.nextTick||tg,gw=r=>r!=null&&Pt(r[cs]),F={isArray:Ei,isArrayBuffer:Xm,isBuffer:fn,isFormData:Ly,isArrayBufferView:Ry,isString:Dy,isNumber:Qm,isBoolean:By,isObject:hn,isPlainObject:Zn,isEmptyObject:Py,isReadableStream:Wy,isRequest:Hy,isResponse:jy,isHeaders:Gy,isUndefined:xi,isDate:My,isFile:Uy,isBlob:Ny,isRegExp:aw,isFunction:Pt,isStream:Vy,isURLSearchParams:qy,isTypedArray:tw,isFileList:Fy,forEach:mn,merge:go,extend:Zy,trim:Ky,stripBOM:Xy,inherits:Qy,toFlatObject:Jy,kindOf:ps,kindOfTest:Yt,endsWith:Yy,toArray:ew,forEachEntry:rw,matchAll:iw,isHTMLForm:nw,hasOwnProperty:Jh,hasOwnProp:Jh,reduceDescriptors:eg,freezeMethods:ow,toObjectSet:lw,toCamelCase:sw,noop:uw,toFiniteNumber:dw,findKey:Jm,global:ei,isContextDefined:Ym,isSpecCompliantForm:cw,toJSONObject:pw,isAsyncFn:fw,isThenable:hw,setImmediate:tg,asap:mw,isIterable:gw};function De(r,n,o,d,p){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),d&&(this.request=d),p&&(this.response=p,this.status=p.status?p.status:null)}F.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});const rg=De.prototype,ig={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{ig[r]={value:r}});Object.defineProperties(De,ig);Object.defineProperty(rg,"isAxiosError",{value:!0});De.from=(r,n,o,d,p,m)=>{const _=Object.create(rg);F.toFlatObject(r,_,function(k){return k!==Error.prototype},C=>C!=="isAxiosError");const x=r&&r.message?r.message:"Error",b=n==null&&r?r.code:n;return De.call(_,x,b,o,d,p),r&&_.cause==null&&Object.defineProperty(_,"cause",{value:r,configurable:!0}),_.name=r&&r.name||"Error",m&&Object.assign(_,m),_};const _w=null;function _o(r){return F.isPlainObject(r)||F.isArray(r)}function ng(r){return F.endsWith(r,"[]")?r.slice(0,-2):r}function Yh(r,n,o){return r?r.concat(n).map(function(p,m){return p=ng(p),!o&&m?"["+p+"]":p}).join(o?".":""):n}function yw(r){return F.isArray(r)&&!r.some(_o)}const ww=F.toFlatObject(F,{},null,function(n){return/^is[A-Z]/.test(n)});function hs(r,n,o){if(!F.isObject(r))throw new TypeError("target must be an object");n=n||new FormData,o=F.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(G,J){return!F.isUndefined(J[G])});const d=o.metaTokens,p=o.visitor||k,m=o.dots,_=o.indexes,b=(o.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(n);if(!F.isFunction(p))throw new TypeError("visitor must be a function");function C(P){if(P===null)return"";if(F.isDate(P))return P.toISOString();if(F.isBoolean(P))return P.toString();if(!b&&F.isBlob(P))throw new De("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(P)||F.isTypedArray(P)?b&&typeof Blob=="function"?new Blob([P]):Buffer.from(P):P}function k(P,G,J){let se=P;if(P&&!J&&typeof P=="object"){if(F.endsWith(G,"{}"))G=d?G:G.slice(0,-2),P=JSON.stringify(P);else if(F.isArray(P)&&yw(P)||(F.isFileList(P)||F.endsWith(G,"[]"))&&(se=F.toArray(P)))return G=ng(G),se.forEach(function(ae,Y){!(F.isUndefined(ae)||ae===null)&&n.append(_===!0?Yh([G],Y,m):_===null?G:G+"[]",C(ae))}),!1}return _o(P)?!0:(n.append(Yh(J,G,m),C(P)),!1)}const B=[],q=Object.assign(ww,{defaultVisitor:k,convertValue:C,isVisitable:_o});function Z(P,G){if(!F.isUndefined(P)){if(B.indexOf(P)!==-1)throw Error("Circular reference detected in "+G.join("."));B.push(P),F.forEach(P,function(se,le){(!(F.isUndefined(se)||se===null)&&p.call(n,se,F.isString(le)?le.trim():le,G,q))===!0&&Z(se,G?G.concat(le):[le])}),B.pop()}}if(!F.isObject(r))throw new TypeError("data must be an object");return Z(r),n}function em(r){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(d){return n[d]})}function Bo(r,n){this._pairs=[],r&&hs(r,this,n)}const sg=Bo.prototype;sg.append=function(n,o){this._pairs.push([n,o])};sg.toString=function(n){const o=n?function(d){return n.call(this,d,em)}:em;return this._pairs.map(function(p){return o(p[0])+"="+o(p[1])},"").join("&")};function bw(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ag(r,n,o){if(!n)return r;const d=o&&o.encode||bw;F.isFunction(o)&&(o={serialize:o});const p=o&&o.serialize;let m;if(p?m=p(n,o):m=F.isURLSearchParams(n)?n.toString():new Bo(n,o).toString(d),m){const _=r.indexOf("#");_!==-1&&(r=r.slice(0,_)),r+=(r.indexOf("?")===-1?"?":"&")+m}return r}class tm{constructor(){this.handlers=[]}use(n,o,d){return this.handlers.push({fulfilled:n,rejected:o,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){F.forEach(this.handlers,function(d){d!==null&&n(d)})}}const og={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$w=typeof URLSearchParams<"u"?URLSearchParams:Bo,vw=typeof FormData<"u"?FormData:null,xw=typeof Blob<"u"?Blob:null,Sw={isBrowser:!0,classes:{URLSearchParams:$w,FormData:vw,Blob:xw},protocols:["http","https","file","blob","url","data"]},Po=typeof window<"u"&&typeof document<"u",yo=typeof navigator=="object"&&navigator||void 0,Tw=Po&&(!yo||["ReactNative","NativeScript","NS"].indexOf(yo.product)<0),Ew=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Iw=Po&&window.location.href||"http://localhost",kw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Po,hasStandardBrowserEnv:Tw,hasStandardBrowserWebWorkerEnv:Ew,navigator:yo,origin:Iw},Symbol.toStringTag,{value:"Module"})),vt={...kw,...Sw};function Cw(r,n){return hs(r,new vt.classes.URLSearchParams,{visitor:function(o,d,p,m){return vt.isNode&&F.isBuffer(o)?(this.append(d,o.toString("base64")),!1):m.defaultVisitor.apply(this,arguments)},...n})}function Ow(r){return F.matchAll(/\w+|\[(\w*)]/g,r).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Aw(r){const n={},o=Object.keys(r);let d;const p=o.length;let m;for(d=0;d<p;d++)m=o[d],n[m]=r[m];return n}function lg(r){function n(o,d,p,m){let _=o[m++];if(_==="__proto__")return!0;const x=Number.isFinite(+_),b=m>=o.length;return _=!_&&F.isArray(p)?p.length:_,b?(F.hasOwnProp(p,_)?p[_]=[p[_],d]:p[_]=d,!x):((!p[_]||!F.isObject(p[_]))&&(p[_]=[]),n(o,d,p[_],m)&&F.isArray(p[_])&&(p[_]=Aw(p[_])),!x)}if(F.isFormData(r)&&F.isFunction(r.entries)){const o={};return F.forEachEntry(r,(d,p)=>{n(Ow(d),p,o,0)}),o}return null}function zw(r,n,o){if(F.isString(r))try{return(n||JSON.parse)(r),F.trim(r)}catch(d){if(d.name!=="SyntaxError")throw d}return(o||JSON.stringify)(r)}const gn={transitional:og,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const d=o.getContentType()||"",p=d.indexOf("application/json")>-1,m=F.isObject(n);if(m&&F.isHTMLForm(n)&&(n=new FormData(n)),F.isFormData(n))return p?JSON.stringify(lg(n)):n;if(F.isArrayBuffer(n)||F.isBuffer(n)||F.isStream(n)||F.isFile(n)||F.isBlob(n)||F.isReadableStream(n))return n;if(F.isArrayBufferView(n))return n.buffer;if(F.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let x;if(m){if(d.indexOf("application/x-www-form-urlencoded")>-1)return Cw(n,this.formSerializer).toString();if((x=F.isFileList(n))||d.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return hs(x?{"files[]":n}:n,b&&new b,this.formSerializer)}}return m||p?(o.setContentType("application/json",!1),zw(n)):n}],transformResponse:[function(n){const o=this.transitional||gn.transitional,d=o&&o.forcedJSONParsing,p=this.responseType==="json";if(F.isResponse(n)||F.isReadableStream(n))return n;if(n&&F.isString(n)&&(d&&!this.responseType||p)){const _=!(o&&o.silentJSONParsing)&&p;try{return JSON.parse(n,this.parseReviver)}catch(x){if(_)throw x.name==="SyntaxError"?De.from(x,De.ERR_BAD_RESPONSE,this,null,this.response):x}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vt.classes.FormData,Blob:vt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],r=>{gn.headers[r]={}});const Rw=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dw=r=>{const n={};let o,d,p;return r&&r.split(`
`).forEach(function(_){p=_.indexOf(":"),o=_.substring(0,p).trim().toLowerCase(),d=_.substring(p+1).trim(),!(!o||n[o]&&Rw[o])&&(o==="set-cookie"?n[o]?n[o].push(d):n[o]=[d]:n[o]=n[o]?n[o]+", "+d:d)}),n},rm=Symbol("internals");function ji(r){return r&&String(r).trim().toLowerCase()}function Xn(r){return r===!1||r==null?r:F.isArray(r)?r.map(Xn):String(r)}function Bw(r){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=o.exec(r);)n[d[1]]=d[2];return n}const Pw=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ro(r,n,o,d,p){if(F.isFunction(d))return d.call(this,n,o);if(p&&(n=o),!!F.isString(n)){if(F.isString(d))return n.indexOf(d)!==-1;if(F.isRegExp(d))return d.test(n)}}function Mw(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,d)=>o.toUpperCase()+d)}function Uw(r,n){const o=F.toCamelCase(" "+n);["get","set","has"].forEach(d=>{Object.defineProperty(r,d+o,{value:function(p,m,_){return this[d].call(this,n,p,m,_)},configurable:!0})})}let Mt=class{constructor(n){n&&this.set(n)}set(n,o,d){const p=this;function m(x,b,C){const k=ji(b);if(!k)throw new Error("header name must be a non-empty string");const B=F.findKey(p,k);(!B||p[B]===void 0||C===!0||C===void 0&&p[B]!==!1)&&(p[B||b]=Xn(x))}const _=(x,b)=>F.forEach(x,(C,k)=>m(C,k,b));if(F.isPlainObject(n)||n instanceof this.constructor)_(n,o);else if(F.isString(n)&&(n=n.trim())&&!Pw(n))_(Dw(n),o);else if(F.isObject(n)&&F.isIterable(n)){let x={},b,C;for(const k of n){if(!F.isArray(k))throw TypeError("Object iterator must return a key-value pair");x[C=k[0]]=(b=x[C])?F.isArray(b)?[...b,k[1]]:[b,k[1]]:k[1]}_(x,o)}else n!=null&&m(o,n,d);return this}get(n,o){if(n=ji(n),n){const d=F.findKey(this,n);if(d){const p=this[d];if(!o)return p;if(o===!0)return Bw(p);if(F.isFunction(o))return o.call(this,p,d);if(F.isRegExp(o))return o.exec(p);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=ji(n),n){const d=F.findKey(this,n);return!!(d&&this[d]!==void 0&&(!o||ro(this,this[d],d,o)))}return!1}delete(n,o){const d=this;let p=!1;function m(_){if(_=ji(_),_){const x=F.findKey(d,_);x&&(!o||ro(d,d[x],x,o))&&(delete d[x],p=!0)}}return F.isArray(n)?n.forEach(m):m(n),p}clear(n){const o=Object.keys(this);let d=o.length,p=!1;for(;d--;){const m=o[d];(!n||ro(this,this[m],m,n,!0))&&(delete this[m],p=!0)}return p}normalize(n){const o=this,d={};return F.forEach(this,(p,m)=>{const _=F.findKey(d,m);if(_){o[_]=Xn(p),delete o[m];return}const x=n?Mw(m):String(m).trim();x!==m&&delete o[m],o[x]=Xn(p),d[x]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return F.forEach(this,(d,p)=>{d!=null&&d!==!1&&(o[p]=n&&F.isArray(d)?d.join(", "):d)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const d=new this(n);return o.forEach(p=>d.set(p)),d}static accessor(n){const d=(this[rm]=this[rm]={accessors:{}}).accessors,p=this.prototype;function m(_){const x=ji(_);d[x]||(Uw(p,_),d[x]=!0)}return F.isArray(n)?n.forEach(m):m(n),this}};Mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Mt.prototype,({value:r},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>r,set(d){this[o]=d}}});F.freezeMethods(Mt);function io(r,n){const o=this||gn,d=n||o,p=Mt.from(d.headers);let m=d.data;return F.forEach(r,function(x){m=x.call(o,m,p.normalize(),n?n.status:void 0)}),p.normalize(),m}function ug(r){return!!(r&&r.__CANCEL__)}function Ii(r,n,o){De.call(this,r??"canceled",De.ERR_CANCELED,n,o),this.name="CanceledError"}F.inherits(Ii,De,{__CANCEL__:!0});function dg(r,n,o){const d=o.config.validateStatus;!o.status||!d||d(o.status)?r(o):n(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function Nw(r){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return n&&n[1]||""}function Fw(r,n){r=r||10;const o=new Array(r),d=new Array(r);let p=0,m=0,_;return n=n!==void 0?n:1e3,function(b){const C=Date.now(),k=d[m];_||(_=C),o[p]=b,d[p]=C;let B=m,q=0;for(;B!==p;)q+=o[B++],B=B%r;if(p=(p+1)%r,p===m&&(m=(m+1)%r),C-_<n)return;const Z=k&&C-k;return Z?Math.round(q*1e3/Z):void 0}}function Vw(r,n){let o=0,d=1e3/n,p,m;const _=(C,k=Date.now())=>{o=k,p=null,m&&(clearTimeout(m),m=null),r(...C)};return[(...C)=>{const k=Date.now(),B=k-o;B>=d?_(C,k):(p=C,m||(m=setTimeout(()=>{m=null,_(p)},d-B)))},()=>p&&_(p)]}const is=(r,n,o=3)=>{let d=0;const p=Fw(50,250);return Vw(m=>{const _=m.loaded,x=m.lengthComputable?m.total:void 0,b=_-d,C=p(b),k=_<=x;d=_;const B={loaded:_,total:x,progress:x?_/x:void 0,bytes:b,rate:C||void 0,estimated:C&&x&&k?(x-_)/C:void 0,event:m,lengthComputable:x!=null,[n?"download":"upload"]:!0};r(B)},o)},im=(r,n)=>{const o=r!=null;return[d=>n[0]({lengthComputable:o,total:r,loaded:d}),n[1]]},nm=r=>(...n)=>F.asap(()=>r(...n)),Lw=vt.hasStandardBrowserEnv?((r,n)=>o=>(o=new URL(o,vt.origin),r.protocol===o.protocol&&r.host===o.host&&(n||r.port===o.port)))(new URL(vt.origin),vt.navigator&&/(msie|trident)/i.test(vt.navigator.userAgent)):()=>!0,qw=vt.hasStandardBrowserEnv?{write(r,n,o,d,p,m){const _=[r+"="+encodeURIComponent(n)];F.isNumber(o)&&_.push("expires="+new Date(o).toGMTString()),F.isString(d)&&_.push("path="+d),F.isString(p)&&_.push("domain="+p),m===!0&&_.push("secure"),document.cookie=_.join("; ")},read(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ww(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Hw(r,n){return n?r.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):r}function cg(r,n,o){let d=!Ww(n);return r&&(d||o==!1)?Hw(r,n):n}const sm=r=>r instanceof Mt?{...r}:r;function ai(r,n){n=n||{};const o={};function d(C,k,B,q){return F.isPlainObject(C)&&F.isPlainObject(k)?F.merge.call({caseless:q},C,k):F.isPlainObject(k)?F.merge({},k):F.isArray(k)?k.slice():k}function p(C,k,B,q){if(F.isUndefined(k)){if(!F.isUndefined(C))return d(void 0,C,B,q)}else return d(C,k,B,q)}function m(C,k){if(!F.isUndefined(k))return d(void 0,k)}function _(C,k){if(F.isUndefined(k)){if(!F.isUndefined(C))return d(void 0,C)}else return d(void 0,k)}function x(C,k,B){if(B in n)return d(C,k);if(B in r)return d(void 0,C)}const b={url:m,method:m,data:m,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,withXSRFToken:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:x,headers:(C,k,B)=>p(sm(C),sm(k),B,!0)};return F.forEach(Object.keys({...r,...n}),function(k){const B=b[k]||p,q=B(r[k],n[k],k);F.isUndefined(q)&&B!==x||(o[k]=q)}),o}const pg=r=>{const n=ai({},r);let{data:o,withXSRFToken:d,xsrfHeaderName:p,xsrfCookieName:m,headers:_,auth:x}=n;if(n.headers=_=Mt.from(_),n.url=ag(cg(n.baseURL,n.url,n.allowAbsoluteUrls),r.params,r.paramsSerializer),x&&_.set("Authorization","Basic "+btoa((x.username||"")+":"+(x.password?unescape(encodeURIComponent(x.password)):""))),F.isFormData(o)){if(vt.hasStandardBrowserEnv||vt.hasStandardBrowserWebWorkerEnv)_.setContentType(void 0);else if(F.isFunction(o.getHeaders)){const b=o.getHeaders(),C=["content-type","content-length"];Object.entries(b).forEach(([k,B])=>{C.includes(k.toLowerCase())&&_.set(k,B)})}}if(vt.hasStandardBrowserEnv&&(d&&F.isFunction(d)&&(d=d(n)),d||d!==!1&&Lw(n.url))){const b=p&&m&&qw.read(m);b&&_.set(p,b)}return n},jw=typeof XMLHttpRequest<"u",Gw=jw&&function(r){return new Promise(function(o,d){const p=pg(r);let m=p.data;const _=Mt.from(p.headers).normalize();let{responseType:x,onUploadProgress:b,onDownloadProgress:C}=p,k,B,q,Z,P;function G(){Z&&Z(),P&&P(),p.cancelToken&&p.cancelToken.unsubscribe(k),p.signal&&p.signal.removeEventListener("abort",k)}let J=new XMLHttpRequest;J.open(p.method.toUpperCase(),p.url,!0),J.timeout=p.timeout;function se(){if(!J)return;const ae=Mt.from("getAllResponseHeaders"in J&&J.getAllResponseHeaders()),fe={data:!x||x==="text"||x==="json"?J.responseText:J.response,status:J.status,statusText:J.statusText,headers:ae,config:r,request:J};dg(function($e){o($e),G()},function($e){d($e),G()},fe),J=null}"onloadend"in J?J.onloadend=se:J.onreadystatechange=function(){!J||J.readyState!==4||J.status===0&&!(J.responseURL&&J.responseURL.indexOf("file:")===0)||setTimeout(se)},J.onabort=function(){J&&(d(new De("Request aborted",De.ECONNABORTED,r,J)),J=null)},J.onerror=function(Y){const fe=Y&&Y.message?Y.message:"Network Error",we=new De(fe,De.ERR_NETWORK,r,J);we.event=Y||null,d(we),J=null},J.ontimeout=function(){let Y=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded";const fe=p.transitional||og;p.timeoutErrorMessage&&(Y=p.timeoutErrorMessage),d(new De(Y,fe.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,r,J)),J=null},m===void 0&&_.setContentType(null),"setRequestHeader"in J&&F.forEach(_.toJSON(),function(Y,fe){J.setRequestHeader(fe,Y)}),F.isUndefined(p.withCredentials)||(J.withCredentials=!!p.withCredentials),x&&x!=="json"&&(J.responseType=p.responseType),C&&([q,P]=is(C,!0),J.addEventListener("progress",q)),b&&J.upload&&([B,Z]=is(b),J.upload.addEventListener("progress",B),J.upload.addEventListener("loadend",Z)),(p.cancelToken||p.signal)&&(k=ae=>{J&&(d(!ae||ae.type?new Ii(null,r,J):ae),J.abort(),J=null)},p.cancelToken&&p.cancelToken.subscribe(k),p.signal&&(p.signal.aborted?k():p.signal.addEventListener("abort",k)));const le=Nw(p.url);if(le&&vt.protocols.indexOf(le)===-1){d(new De("Unsupported protocol "+le+":",De.ERR_BAD_REQUEST,r));return}J.send(m||null)})},Kw=(r,n)=>{const{length:o}=r=r?r.filter(Boolean):[];if(n||o){let d=new AbortController,p;const m=function(C){if(!p){p=!0,x();const k=C instanceof Error?C:this.reason;d.abort(k instanceof De?k:new Ii(k instanceof Error?k.message:k))}};let _=n&&setTimeout(()=>{_=null,m(new De(`timeout ${n} of ms exceeded`,De.ETIMEDOUT))},n);const x=()=>{r&&(_&&clearTimeout(_),_=null,r.forEach(C=>{C.unsubscribe?C.unsubscribe(m):C.removeEventListener("abort",m)}),r=null)};r.forEach(C=>C.addEventListener("abort",m));const{signal:b}=d;return b.unsubscribe=()=>F.asap(x),b}},Zw=function*(r,n){let o=r.byteLength;if(o<n){yield r;return}let d=0,p;for(;d<o;)p=d+n,yield r.slice(d,p),d=p},Xw=async function*(r,n){for await(const o of Qw(r))yield*Zw(o,n)},Qw=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const n=r.getReader();try{for(;;){const{done:o,value:d}=await n.read();if(o)break;yield d}}finally{await n.cancel()}},am=(r,n,o,d)=>{const p=Xw(r,n);let m=0,_,x=b=>{_||(_=!0,d&&d(b))};return new ReadableStream({async pull(b){try{const{done:C,value:k}=await p.next();if(C){x(),b.close();return}let B=k.byteLength;if(o){let q=m+=B;o(q)}b.enqueue(new Uint8Array(k))}catch(C){throw x(C),C}},cancel(b){return x(b),p.return()}},{highWaterMark:2})},om=64*1024,{isFunction:Wn}=F,Jw=(({Request:r,Response:n})=>({Request:r,Response:n}))(F.global),{ReadableStream:lm,TextEncoder:um}=F.global,dm=(r,...n)=>{try{return!!r(...n)}catch{return!1}},Yw=r=>{r=F.merge.call({skipUndefined:!0},Jw,r);const{fetch:n,Request:o,Response:d}=r,p=n?Wn(n):typeof fetch=="function",m=Wn(o),_=Wn(d);if(!p)return!1;const x=p&&Wn(lm),b=p&&(typeof um=="function"?(P=>G=>P.encode(G))(new um):async P=>new Uint8Array(await new o(P).arrayBuffer())),C=m&&x&&dm(()=>{let P=!1;const G=new o(vt.origin,{body:new lm,method:"POST",get duplex(){return P=!0,"half"}}).headers.has("Content-Type");return P&&!G}),k=_&&x&&dm(()=>F.isReadableStream(new d("").body)),B={stream:k&&(P=>P.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(P=>{!B[P]&&(B[P]=(G,J)=>{let se=G&&G[P];if(se)return se.call(G);throw new De(`Response type '${P}' is not supported`,De.ERR_NOT_SUPPORT,J)})});const q=async P=>{if(P==null)return 0;if(F.isBlob(P))return P.size;if(F.isSpecCompliantForm(P))return(await new o(vt.origin,{method:"POST",body:P}).arrayBuffer()).byteLength;if(F.isArrayBufferView(P)||F.isArrayBuffer(P))return P.byteLength;if(F.isURLSearchParams(P)&&(P=P+""),F.isString(P))return(await b(P)).byteLength},Z=async(P,G)=>{const J=F.toFiniteNumber(P.getContentLength());return J??q(G)};return async P=>{let{url:G,method:J,data:se,signal:le,cancelToken:ae,timeout:Y,onDownloadProgress:fe,onUploadProgress:we,responseType:$e,headers:Ee,withCredentials:tt="same-origin",fetchOptions:ot}=pg(P),Ut=n||fetch;$e=$e?($e+"").toLowerCase():"text";let Ct=Kw([le,ae&&ae.toAbortSignal()],Y),pt=null;const Ot=Ct&&Ct.unsubscribe&&(()=>{Ct.unsubscribe()});let xr;try{if(we&&C&&J!=="get"&&J!=="head"&&(xr=await Z(Ee,se))!==0){let et=new o(G,{method:"POST",body:se,duplex:"half"}),rt;if(F.isFormData(se)&&(rt=et.headers.get("content-type"))&&Ee.setContentType(rt),et.body){const[pr,Sr]=im(xr,is(nm(we)));se=am(et.body,om,pr,Sr)}}F.isString(tt)||(tt=tt?"include":"omit");const He=m&&"credentials"in o.prototype,je={...ot,signal:Ct,method:J.toUpperCase(),headers:Ee.normalize().toJSON(),body:se,duplex:"half",credentials:He?tt:void 0};pt=m&&new o(G,je);let Me=await(m?Ut(pt,ot):Ut(G,je));const Wt=k&&($e==="stream"||$e==="response");if(k&&(fe||Wt&&Ot)){const et={};["status","statusText","headers"].forEach(Ur=>{et[Ur]=Me[Ur]});const rt=F.toFiniteNumber(Me.headers.get("content-length")),[pr,Sr]=fe&&im(rt,is(nm(fe),!0))||[];Me=new d(am(Me.body,om,pr,()=>{Sr&&Sr(),Ot&&Ot()}),et)}$e=$e||"text";let At=await B[F.findKey(B,$e)||"text"](Me,P);return!Wt&&Ot&&Ot(),await new Promise((et,rt)=>{dg(et,rt,{data:At,headers:Mt.from(Me.headers),status:Me.status,statusText:Me.statusText,config:P,request:pt})})}catch(He){throw Ot&&Ot(),He&&He.name==="TypeError"&&/Load failed|fetch/i.test(He.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,P,pt),{cause:He.cause||He}):De.from(He,He&&He.code,P,pt)}}},eb=new Map,fg=r=>{let n=r?r.env:{};const{fetch:o,Request:d,Response:p}=n,m=[d,p,o];let _=m.length,x=_,b,C,k=eb;for(;x--;)b=m[x],C=k.get(b),C===void 0&&k.set(b,C=x?new Map:Yw(n)),k=C;return C};fg();const wo={http:_w,xhr:Gw,fetch:{get:fg}};F.forEach(wo,(r,n)=>{if(r){try{Object.defineProperty(r,"name",{value:n})}catch{}Object.defineProperty(r,"adapterName",{value:n})}});const cm=r=>`- ${r}`,tb=r=>F.isFunction(r)||r===null||r===!1,hg={getAdapter:(r,n)=>{r=F.isArray(r)?r:[r];const{length:o}=r;let d,p;const m={};for(let _=0;_<o;_++){d=r[_];let x;if(p=d,!tb(d)&&(p=wo[(x=String(d)).toLowerCase()],p===void 0))throw new De(`Unknown adapter '${x}'`);if(p&&(F.isFunction(p)||(p=p.get(n))))break;m[x||"#"+_]=p}if(!p){const _=Object.entries(m).map(([b,C])=>`adapter ${b} `+(C===!1?"is not supported by the environment":"is not available in the build"));let x=o?_.length>1?`since :
`+_.map(cm).join(`
`):" "+cm(_[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+x,"ERR_NOT_SUPPORT")}return p},adapters:wo};function no(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ii(null,r)}function pm(r){return no(r),r.headers=Mt.from(r.headers),r.data=io.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),hg.getAdapter(r.adapter||gn.adapter,r)(r).then(function(d){return no(r),d.data=io.call(r,r.transformResponse,d),d.headers=Mt.from(d.headers),d},function(d){return ug(d)||(no(r),d&&d.response&&(d.response.data=io.call(r,r.transformResponse,d.response),d.response.headers=Mt.from(d.response.headers))),Promise.reject(d)})}const mg="1.12.2",ms={};["object","boolean","number","function","string","symbol"].forEach((r,n)=>{ms[r]=function(d){return typeof d===r||"a"+(n<1?"n ":" ")+r}});const fm={};ms.transitional=function(n,o,d){function p(m,_){return"[Axios v"+mg+"] Transitional option '"+m+"'"+_+(d?". "+d:"")}return(m,_,x)=>{if(n===!1)throw new De(p(_," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!fm[_]&&(fm[_]=!0,console.warn(p(_," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(m,_,x):!0}};ms.spelling=function(n){return(o,d)=>(console.warn(`${d} is likely a misspelling of ${n}`),!0)};function rb(r,n,o){if(typeof r!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const d=Object.keys(r);let p=d.length;for(;p-- >0;){const m=d[p],_=n[m];if(_){const x=r[m],b=x===void 0||_(x,m,r);if(b!==!0)throw new De("option "+m+" must be "+b,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+m,De.ERR_BAD_OPTION)}}const Qn={assertOptions:rb,validators:ms},tr=Qn.validators;let ti=class{constructor(n){this.defaults=n||{},this.interceptors={request:new tm,response:new tm}}async request(n,o){try{return await this._request(n,o)}catch(d){if(d instanceof Error){let p={};Error.captureStackTrace?Error.captureStackTrace(p):p=new Error;const m=p.stack?p.stack.replace(/^.+\n/,""):"";try{d.stack?m&&!String(d.stack).endsWith(m.replace(/^.+\n.+\n/,""))&&(d.stack+=`
`+m):d.stack=m}catch{}}throw d}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=ai(this.defaults,o);const{transitional:d,paramsSerializer:p,headers:m}=o;d!==void 0&&Qn.assertOptions(d,{silentJSONParsing:tr.transitional(tr.boolean),forcedJSONParsing:tr.transitional(tr.boolean),clarifyTimeoutError:tr.transitional(tr.boolean)},!1),p!=null&&(F.isFunction(p)?o.paramsSerializer={serialize:p}:Qn.assertOptions(p,{encode:tr.function,serialize:tr.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),Qn.assertOptions(o,{baseUrl:tr.spelling("baseURL"),withXsrfToken:tr.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let _=m&&F.merge(m.common,m[o.method]);m&&F.forEach(["delete","get","head","post","put","patch","common"],P=>{delete m[P]}),o.headers=Mt.concat(_,m);const x=[];let b=!0;this.interceptors.request.forEach(function(G){typeof G.runWhen=="function"&&G.runWhen(o)===!1||(b=b&&G.synchronous,x.unshift(G.fulfilled,G.rejected))});const C=[];this.interceptors.response.forEach(function(G){C.push(G.fulfilled,G.rejected)});let k,B=0,q;if(!b){const P=[pm.bind(this),void 0];for(P.unshift(...x),P.push(...C),q=P.length,k=Promise.resolve(o);B<q;)k=k.then(P[B++],P[B++]);return k}q=x.length;let Z=o;for(;B<q;){const P=x[B++],G=x[B++];try{Z=P(Z)}catch(J){G.call(this,J);break}}try{k=pm.call(this,Z)}catch(P){return Promise.reject(P)}for(B=0,q=C.length;B<q;)k=k.then(C[B++],C[B++]);return k}getUri(n){n=ai(this.defaults,n);const o=cg(n.baseURL,n.url,n.allowAbsoluteUrls);return ag(o,n.params,n.paramsSerializer)}};F.forEach(["delete","get","head","options"],function(n){ti.prototype[n]=function(o,d){return this.request(ai(d||{},{method:n,url:o,data:(d||{}).data}))}});F.forEach(["post","put","patch"],function(n){function o(d){return function(m,_,x){return this.request(ai(x||{},{method:n,headers:d?{"Content-Type":"multipart/form-data"}:{},url:m,data:_}))}}ti.prototype[n]=o(),ti.prototype[n+"Form"]=o(!0)});let ib=class gg{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(m){o=m});const d=this;this.promise.then(p=>{if(!d._listeners)return;let m=d._listeners.length;for(;m-- >0;)d._listeners[m](p);d._listeners=null}),this.promise.then=p=>{let m;const _=new Promise(x=>{d.subscribe(x),m=x}).then(p);return _.cancel=function(){d.unsubscribe(m)},_},n(function(m,_,x){d.reason||(d.reason=new Ii(m,_,x),o(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=d=>{n.abort(d)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new gg(function(p){n=p}),cancel:n}}};function nb(r){return function(o){return r.apply(null,o)}}function sb(r){return F.isObject(r)&&r.isAxiosError===!0}const bo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bo).forEach(([r,n])=>{bo[n]=r});function _g(r){const n=new ti(r),o=Km(ti.prototype.request,n);return F.extend(o,ti.prototype,n,{allOwnKeys:!0}),F.extend(o,n,null,{allOwnKeys:!0}),o.create=function(p){return _g(ai(r,p))},o}const nt=_g(gn);nt.Axios=ti;nt.CanceledError=Ii;nt.CancelToken=ib;nt.isCancel=ug;nt.VERSION=mg;nt.toFormData=hs;nt.AxiosError=De;nt.Cancel=nt.CanceledError;nt.all=function(n){return Promise.all(n)};nt.spread=nb;nt.isAxiosError=sb;nt.mergeConfig=ai;nt.AxiosHeaders=Mt;nt.formToJSON=r=>lg(F.isHTMLForm(r)?new FormData(r):r);nt.getAdapter=hg.getAdapter;nt.HttpStatusCode=bo;nt.default=nt;const{Axios:Y$,AxiosError:ev,CanceledError:tv,isCancel:rv,CancelToken:iv,VERSION:nv,all:sv,Cancel:av,isAxiosError:ov,spread:lv,toFormData:uv,AxiosHeaders:dv,HttpStatusCode:cv,formToJSON:pv,getAdapter:fv,mergeConfig:hv}=nt;window.axios=nt;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(r){const n=Object.create(null);for(const o of r.split(","))n[o]=1;return o=>o in n}const Qe={},Yi=[],Qt=()=>{},yg=()=>!1,gs=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),Uo=r=>r.startsWith("onUpdate:"),kt=Object.assign,No=(r,n)=>{const o=r.indexOf(n);o>-1&&r.splice(o,1)},ab=Object.prototype.hasOwnProperty,We=(r,n)=>ab.call(r,n),Be=Array.isArray,en=r=>_s(r)==="[object Map]",ob=r=>_s(r)==="[object Set]",Pe=r=>typeof r=="function",ct=r=>typeof r=="string",ki=r=>typeof r=="symbol",st=r=>r!==null&&typeof r=="object",wg=r=>(st(r)||Pe(r))&&Pe(r.then)&&Pe(r.catch),lb=Object.prototype.toString,_s=r=>lb.call(r),ub=r=>_s(r).slice(8,-1),db=r=>_s(r)==="[object Object]",Fo=r=>ct(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,tn=Mo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ys=r=>{const n=Object.create(null);return o=>n[o]||(n[o]=r(o))},cb=/-\w/g,Mr=ys(r=>r.replace(cb,n=>n.slice(1).toUpperCase())),pb=/\B([A-Z])/g,li=ys(r=>r.replace(pb,"-$1").toLowerCase()),bg=ys(r=>r.charAt(0).toUpperCase()+r.slice(1)),so=ys(r=>r?`on${bg(r)}`:""),ri=(r,n)=>!Object.is(r,n),ao=(r,...n)=>{for(let o=0;o<r.length;o++)r[o](...n)},ns=(r,n,o,d=!1)=>{Object.defineProperty(r,n,{configurable:!0,enumerable:!1,writable:d,value:o})},fb=r=>{const n=parseFloat(r);return isNaN(n)?r:n};let hm;const ii=()=>hm||(hm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vo(r){if(Be(r)){const n={};for(let o=0;o<r.length;o++){const d=r[o],p=ct(d)?_b(d):Vo(d);if(p)for(const m in p)n[m]=p[m]}return n}else if(ct(r)||st(r))return r}const hb=/;(?![^(]*\))/g,mb=/:([^]+)/,gb=/\/\*[^]*?\*\//g;function _b(r){const n={};return r.replace(gb,"").split(hb).forEach(o=>{if(o){const d=o.split(mb);d.length>1&&(n[d[0].trim()]=d[1].trim())}}),n}function Lo(r){let n="";if(ct(r))n=r;else if(Be(r))for(let o=0;o<r.length;o++){const d=Lo(r[o]);d&&(n+=d+" ")}else if(st(r))for(const o in r)r[o]&&(n+=o+" ");return n.trim()}const yb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wb=Mo(yb);function $g(r){return!!r||r===""}/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class bb{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!n&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,o;if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].pause();for(n=0,o=this.effects.length;n<o;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,o;if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].resume();for(n=0,o=this.effects.length;n<o;n++)this.effects[n].resume()}}run(n){if(this._active){const o=Bt;try{return Bt=this,n()}finally{Bt=o}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let o,d;for(o=0,d=this.effects.length;o<d;o++)this.effects[o].stop();for(this.effects.length=0,o=0,d=this.cleanups.length;o<d;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){for(o=0,d=this.scopes.length;o<d;o++)this.scopes[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const p=this.parent.scopes.pop();p&&p!==this&&(this.parent.scopes[this.index]=p,p.index=this.index)}this.parent=void 0}}}function $b(){return Bt}let Xe;const oo=new WeakSet;class vg{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oo.has(this)&&(oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mm(this),Tg(this);const n=Xe,o=Jt;Xe=this,Jt=!0;try{return this.fn()}finally{Eg(this),Xe=n,Jt=o,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ho(n);this.deps=this.depsTail=void 0,mm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$o(this)&&this.run()}get dirty(){return $o(this)}}let xg=0,rn,nn;function Sg(r,n=!1){if(r.flags|=8,n){r.next=nn,nn=r;return}r.next=rn,rn=r}function qo(){xg++}function Wo(){if(--xg>0)return;if(nn){let n=nn;for(nn=void 0;n;){const o=n.next;n.next=void 0,n.flags&=-9,n=o}}let r;for(;rn;){let n=rn;for(rn=void 0;n;){const o=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(d){r||(r=d)}n=o}}if(r)throw r}function Tg(r){for(let n=r.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Eg(r){let n,o=r.depsTail,d=o;for(;d;){const p=d.prevDep;d.version===-1?(d===o&&(o=p),Ho(d),vb(d)):n=d,d.dep.activeLink=d.prevActiveLink,d.prevActiveLink=void 0,d=p}r.deps=n,r.depsTail=o}function $o(r){for(let n=r.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Ig(n.dep.computed)||n.dep.version!==n.version))return!0;return!!r._dirty}function Ig(r){if(r.flags&4&&!(r.flags&16)||(r.flags&=-17,r.globalVersion===un)||(r.globalVersion=un,!r.isSSR&&r.flags&128&&(!r.deps&&!r._dirty||!$o(r))))return;r.flags|=2;const n=r.dep,o=Xe,d=Jt;Xe=r,Jt=!0;try{Tg(r);const p=r.fn(r._value);(n.version===0||ri(p,r._value))&&(r.flags|=128,r._value=p,n.version++)}catch(p){throw n.version++,p}finally{Xe=o,Jt=d,Eg(r),r.flags&=-3}}function Ho(r,n=!1){const{dep:o,prevSub:d,nextSub:p}=r;if(d&&(d.nextSub=p,r.prevSub=void 0),p&&(p.prevSub=d,r.nextSub=void 0),o.subs===r&&(o.subs=d,!d&&o.computed)){o.computed.flags&=-5;for(let m=o.computed.deps;m;m=m.nextDep)Ho(m,!0)}!n&&!--o.sc&&o.map&&o.map.delete(o.key)}function vb(r){const{prevDep:n,nextDep:o}=r;n&&(n.nextDep=o,r.prevDep=void 0),o&&(o.prevDep=n,r.nextDep=void 0)}let Jt=!0;const kg=[];function br(){kg.push(Jt),Jt=!1}function $r(){const r=kg.pop();Jt=r===void 0?!0:r}function mm(r){const{cleanup:n}=r;if(r.cleanup=void 0,n){const o=Xe;Xe=void 0;try{n()}finally{Xe=o}}}let un=0;class xb{constructor(n,o){this.sub=n,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cg{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Xe||!Jt||Xe===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==Xe)o=this.activeLink=new xb(Xe,this),Xe.deps?(o.prevDep=Xe.depsTail,Xe.depsTail.nextDep=o,Xe.depsTail=o):Xe.deps=Xe.depsTail=o,Og(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const d=o.nextDep;d.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=d),o.prevDep=Xe.depsTail,o.nextDep=void 0,Xe.depsTail.nextDep=o,Xe.depsTail=o,Xe.deps===o&&(Xe.deps=d)}return o}trigger(n){this.version++,un++,this.notify(n)}notify(n){qo();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{Wo()}}}function Og(r){if(r.dep.sc++,r.sub.flags&4){const n=r.dep.computed;if(n&&!r.dep.subs){n.flags|=20;for(let d=n.deps;d;d=d.nextDep)Og(d)}const o=r.dep.subs;o!==r&&(r.prevSub=o,o&&(o.nextSub=r)),r.dep.subs=r}}const vo=new WeakMap,ni=Symbol(""),xo=Symbol(""),dn=Symbol("");function bt(r,n,o){if(Jt&&Xe){let d=vo.get(r);d||vo.set(r,d=new Map);let p=d.get(o);p||(d.set(o,p=new Cg),p.map=d,p.key=o),p.track()}}function wr(r,n,o,d,p,m){const _=vo.get(r);if(!_){un++;return}const x=b=>{b&&b.trigger()};if(qo(),n==="clear")_.forEach(x);else{const b=Be(r),C=b&&Fo(o);if(b&&o==="length"){const k=Number(d);_.forEach((B,q)=>{(q==="length"||q===dn||!ki(q)&&q>=k)&&x(B)})}else switch((o!==void 0||_.has(void 0))&&x(_.get(o)),C&&x(_.get(dn)),n){case"add":b?C&&x(_.get("length")):(x(_.get(ni)),en(r)&&x(_.get(xo)));break;case"delete":b||(x(_.get(ni)),en(r)&&x(_.get(xo)));break;case"set":en(r)&&x(_.get(ni));break}}Wo()}function yi(r){const n=Ze(r);return n===r?n:(bt(n,"iterate",dn),ur(r)?n:n.map(qt))}function jo(r){return bt(r=Ze(r),"iterate",dn),r}const Sb={__proto__:null,[Symbol.iterator](){return lo(this,Symbol.iterator,qt)},concat(...r){return yi(this).concat(...r.map(n=>Be(n)?yi(n):n))},entries(){return lo(this,"entries",r=>(r[1]=qt(r[1]),r))},every(r,n){return _r(this,"every",r,n,void 0,arguments)},filter(r,n){return _r(this,"filter",r,n,o=>o.map(qt),arguments)},find(r,n){return _r(this,"find",r,n,qt,arguments)},findIndex(r,n){return _r(this,"findIndex",r,n,void 0,arguments)},findLast(r,n){return _r(this,"findLast",r,n,qt,arguments)},findLastIndex(r,n){return _r(this,"findLastIndex",r,n,void 0,arguments)},forEach(r,n){return _r(this,"forEach",r,n,void 0,arguments)},includes(...r){return uo(this,"includes",r)},indexOf(...r){return uo(this,"indexOf",r)},join(r){return yi(this).join(r)},lastIndexOf(...r){return uo(this,"lastIndexOf",r)},map(r,n){return _r(this,"map",r,n,void 0,arguments)},pop(){return Gi(this,"pop")},push(...r){return Gi(this,"push",r)},reduce(r,...n){return gm(this,"reduce",r,n)},reduceRight(r,...n){return gm(this,"reduceRight",r,n)},shift(){return Gi(this,"shift")},some(r,n){return _r(this,"some",r,n,void 0,arguments)},splice(...r){return Gi(this,"splice",r)},toReversed(){return yi(this).toReversed()},toSorted(r){return yi(this).toSorted(r)},toSpliced(...r){return yi(this).toSpliced(...r)},unshift(...r){return Gi(this,"unshift",r)},values(){return lo(this,"values",qt)}};function lo(r,n,o){const d=jo(r),p=d[n]();return d!==r&&!ur(r)&&(p._next=p.next,p.next=()=>{const m=p._next();return m.done||(m.value=o(m.value)),m}),p}const Tb=Array.prototype;function _r(r,n,o,d,p,m){const _=jo(r),x=_!==r&&!ur(r),b=_[n];if(b!==Tb[n]){const B=b.apply(r,m);return x?qt(B):B}let C=o;_!==r&&(x?C=function(B,q){return o.call(this,qt(B),q,r)}:o.length>2&&(C=function(B,q){return o.call(this,B,q,r)}));const k=b.call(_,C,d);return x&&p?p(k):k}function gm(r,n,o,d){const p=jo(r);let m=o;return p!==r&&(ur(r)?o.length>3&&(m=function(_,x,b){return o.call(this,_,x,b,r)}):m=function(_,x,b){return o.call(this,_,qt(x),b,r)}),p[n](m,...d)}function uo(r,n,o){const d=Ze(r);bt(d,"iterate",dn);const p=d[n](...o);return(p===-1||p===!1)&&Xo(o[0])?(o[0]=Ze(o[0]),d[n](...o)):p}function Gi(r,n,o=[]){br(),qo();const d=Ze(r)[n].apply(r,o);return Wo(),$r(),d}const Eb=Mo("__proto__,__v_isRef,__isVue"),Ag=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(ki));function Ib(r){ki(r)||(r=String(r));const n=Ze(this);return bt(n,"has",r),n.hasOwnProperty(r)}class zg{constructor(n=!1,o=!1){this._isReadonly=n,this._isShallow=o}get(n,o,d){if(o==="__v_skip")return n.__v_skip;const p=this._isReadonly,m=this._isShallow;if(o==="__v_isReactive")return!p;if(o==="__v_isReadonly")return p;if(o==="__v_isShallow")return m;if(o==="__v_raw")return d===(p?m?Mb:Pg:m?Bg:Dg).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(d)?n:void 0;const _=Be(n);if(!p){let b;if(_&&(b=Sb[o]))return b;if(o==="hasOwnProperty")return Ib}const x=Reflect.get(n,o,It(n)?n:d);if((ki(o)?Ag.has(o):Eb(o))||(p||bt(n,"get",o),m))return x;if(It(x)){const b=_&&Fo(o)?x:x.value;return p&&st(b)?To(b):b}return st(x)?p?To(x):Ko(x):x}}class Rg extends zg{constructor(n=!1){super(!1,n)}set(n,o,d,p){let m=n[o];if(!this._isShallow){const b=Si(m);if(!ur(d)&&!Si(d)&&(m=Ze(m),d=Ze(d)),!Be(n)&&It(m)&&!It(d))return b||(m.value=d),!0}const _=Be(n)&&Fo(o)?Number(o)<n.length:We(n,o),x=Reflect.set(n,o,d,It(n)?n:p);return n===Ze(p)&&(_?ri(d,m)&&wr(n,"set",o,d):wr(n,"add",o,d)),x}deleteProperty(n,o){const d=We(n,o);n[o];const p=Reflect.deleteProperty(n,o);return p&&d&&wr(n,"delete",o,void 0),p}has(n,o){const d=Reflect.has(n,o);return(!ki(o)||!Ag.has(o))&&bt(n,"has",o),d}ownKeys(n){return bt(n,"iterate",Be(n)?"length":ni),Reflect.ownKeys(n)}}class kb extends zg{constructor(n=!1){super(!0,n)}set(n,o){return!0}deleteProperty(n,o){return!0}}const Cb=new Rg,Ob=new kb,Ab=new Rg(!0);const So=r=>r,Hn=r=>Reflect.getPrototypeOf(r);function zb(r,n,o){return function(...d){const p=this.__v_raw,m=Ze(p),_=en(m),x=r==="entries"||r===Symbol.iterator&&_,b=r==="keys"&&_,C=p[r](...d),k=o?So:n?Eo:qt;return!n&&bt(m,"iterate",b?xo:ni),{next(){const{value:B,done:q}=C.next();return q?{value:B,done:q}:{value:x?[k(B[0]),k(B[1])]:k(B),done:q}},[Symbol.iterator](){return this}}}}function jn(r){return function(...n){return r==="delete"?!1:r==="clear"?void 0:this}}function Rb(r,n){const o={get(p){const m=this.__v_raw,_=Ze(m),x=Ze(p);r||(ri(p,x)&&bt(_,"get",p),bt(_,"get",x));const{has:b}=Hn(_),C=n?So:r?Eo:qt;if(b.call(_,p))return C(m.get(p));if(b.call(_,x))return C(m.get(x));m!==_&&m.get(p)},get size(){const p=this.__v_raw;return!r&&bt(Ze(p),"iterate",ni),p.size},has(p){const m=this.__v_raw,_=Ze(m),x=Ze(p);return r||(ri(p,x)&&bt(_,"has",p),bt(_,"has",x)),p===x?m.has(p):m.has(p)||m.has(x)},forEach(p,m){const _=this,x=_.__v_raw,b=Ze(x),C=n?So:r?Eo:qt;return!r&&bt(b,"iterate",ni),x.forEach((k,B)=>p.call(m,C(k),C(B),_))}};return kt(o,r?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(p){!n&&!ur(p)&&!Si(p)&&(p=Ze(p));const m=Ze(this);return Hn(m).has.call(m,p)||(m.add(p),wr(m,"add",p,p)),this},set(p,m){!n&&!ur(m)&&!Si(m)&&(m=Ze(m));const _=Ze(this),{has:x,get:b}=Hn(_);let C=x.call(_,p);C||(p=Ze(p),C=x.call(_,p));const k=b.call(_,p);return _.set(p,m),C?ri(m,k)&&wr(_,"set",p,m):wr(_,"add",p,m),this},delete(p){const m=Ze(this),{has:_,get:x}=Hn(m);let b=_.call(m,p);b||(p=Ze(p),b=_.call(m,p)),x&&x.call(m,p);const C=m.delete(p);return b&&wr(m,"delete",p,void 0),C},clear(){const p=Ze(this),m=p.size!==0,_=p.clear();return m&&wr(p,"clear",void 0,void 0),_}}),["keys","values","entries",Symbol.iterator].forEach(p=>{o[p]=zb(p,r,n)}),o}function Go(r,n){const o=Rb(r,n);return(d,p,m)=>p==="__v_isReactive"?!r:p==="__v_isReadonly"?r:p==="__v_raw"?d:Reflect.get(We(o,p)&&p in d?o:d,p,m)}const Db={get:Go(!1,!1)},Bb={get:Go(!1,!0)},Pb={get:Go(!0,!1)};const Dg=new WeakMap,Bg=new WeakMap,Pg=new WeakMap,Mb=new WeakMap;function Ub(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nb(r){return r.__v_skip||!Object.isExtensible(r)?0:Ub(ub(r))}function Ko(r){return Si(r)?r:Zo(r,!1,Cb,Db,Dg)}function Fb(r){return Zo(r,!1,Ab,Bb,Bg)}function To(r){return Zo(r,!0,Ob,Pb,Pg)}function Zo(r,n,o,d,p){if(!st(r)||r.__v_raw&&!(n&&r.__v_isReactive))return r;const m=Nb(r);if(m===0)return r;const _=p.get(r);if(_)return _;const x=new Proxy(r,m===2?d:o);return p.set(r,x),x}function sn(r){return Si(r)?sn(r.__v_raw):!!(r&&r.__v_isReactive)}function Si(r){return!!(r&&r.__v_isReadonly)}function ur(r){return!!(r&&r.__v_isShallow)}function Xo(r){return r?!!r.__v_raw:!1}function Ze(r){const n=r&&r.__v_raw;return n?Ze(n):r}function Vb(r){return!We(r,"__v_skip")&&Object.isExtensible(r)&&ns(r,"__v_skip",!0),r}const qt=r=>st(r)?Ko(r):r,Eo=r=>st(r)?To(r):r;function It(r){return r?r.__v_isRef===!0:!1}function Lb(r){return It(r)?r.value:r}const qb={get:(r,n,o)=>n==="__v_raw"?r:Lb(Reflect.get(r,n,o)),set:(r,n,o,d)=>{const p=r[n];return It(p)&&!It(o)?(p.value=o,!0):Reflect.set(r,n,o,d)}};function Mg(r){return sn(r)?r:new Proxy(r,qb)}class Wb{constructor(n,o,d){this.fn=n,this.setter=o,this._value=void 0,this.dep=new Cg(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=un-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=d}notify(){if(this.flags|=16,!(this.flags&8)&&Xe!==this)return Sg(this,!0),!0}get value(){const n=this.dep.track();return Ig(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Hb(r,n,o=!1){let d,p;return Pe(r)?d=r:(d=r.get,p=r.set),new Wb(d,p,o)}const Gn={},ss=new WeakMap;let Yr;function jb(r,n=!1,o=Yr){if(o){let d=ss.get(o);d||ss.set(o,d=[]),d.push(r)}}function Gb(r,n,o=Qe){const{immediate:d,deep:p,once:m,scheduler:_,augmentJob:x,call:b}=o,C=Y=>p?Y:ur(Y)||p===!1||p===0?Br(Y,1):Br(Y);let k,B,q,Z,P=!1,G=!1;if(It(r)?(B=()=>r.value,P=ur(r)):sn(r)?(B=()=>C(r),P=!0):Be(r)?(G=!0,P=r.some(Y=>sn(Y)||ur(Y)),B=()=>r.map(Y=>{if(It(Y))return Y.value;if(sn(Y))return C(Y);if(Pe(Y))return b?b(Y,2):Y()})):Pe(r)?n?B=b?()=>b(r,2):r:B=()=>{if(q){br();try{q()}finally{$r()}}const Y=Yr;Yr=k;try{return b?b(r,3,[Z]):r(Z)}finally{Yr=Y}}:B=Qt,n&&p){const Y=B,fe=p===!0?1/0:p;B=()=>Br(Y(),fe)}const J=$b(),se=()=>{k.stop(),J&&J.active&&No(J.effects,k)};if(m&&n){const Y=n;n=(...fe)=>{Y(...fe),se()}}let le=G?new Array(r.length).fill(Gn):Gn;const ae=Y=>{if(!(!(k.flags&1)||!k.dirty&&!Y))if(n){const fe=k.run();if(p||P||(G?fe.some((we,$e)=>ri(we,le[$e])):ri(fe,le))){q&&q();const we=Yr;Yr=k;try{const $e=[fe,le===Gn?void 0:G&&le[0]===Gn?[]:le,Z];le=fe,b?b(n,3,$e):n(...$e)}finally{Yr=we}}}else k.run()};return x&&x(ae),k=new vg(B),k.scheduler=_?()=>_(ae,!1):ae,Z=Y=>jb(Y,!1,k),q=k.onStop=()=>{const Y=ss.get(k);if(Y){if(b)b(Y,4);else for(const fe of Y)fe();ss.delete(k)}},n?d?ae(!0):le=k.run():_?_(ae.bind(null,!0),!0):k.run(),se.pause=k.pause.bind(k),se.resume=k.resume.bind(k),se.stop=se,se}function Br(r,n=1/0,o){if(n<=0||!st(r)||r.__v_skip||(o=o||new Map,(o.get(r)||0)>=n))return r;if(o.set(r,n),n--,It(r))Br(r.value,n,o);else if(Be(r))for(let d=0;d<r.length;d++)Br(r[d],n,o);else if(ob(r)||en(r))r.forEach(d=>{Br(d,n,o)});else if(db(r)){for(const d in r)Br(r[d],n,o);for(const d of Object.getOwnPropertySymbols(r))Object.prototype.propertyIsEnumerable.call(r,d)&&Br(r[d],n,o)}return r}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _n(r,n,o,d){try{return d?r(...d):r()}catch(p){ws(p,n,o)}}function cr(r,n,o,d){if(Pe(r)){const p=_n(r,n,o,d);return p&&wg(p)&&p.catch(m=>{ws(m,n,o)}),p}if(Be(r)){const p=[];for(let m=0;m<r.length;m++)p.push(cr(r[m],n,o,d));return p}}function ws(r,n,o,d=!0){const p=n?n.vnode:null,{errorHandler:m,throwUnhandledErrorInProduction:_}=n&&n.appContext.config||Qe;if(n){let x=n.parent;const b=n.proxy,C=`https://vuejs.org/error-reference/#runtime-${o}`;for(;x;){const k=x.ec;if(k){for(let B=0;B<k.length;B++)if(k[B](r,b,C)===!1)return}x=x.parent}if(m){br(),_n(m,null,10,[r,b,C]),$r();return}}Kb(r,o,p,d,_)}function Kb(r,n,o,d=!0,p=!1){if(p)throw r;console.error(r)}const Tt=[];let ir=-1;const $i=[];let Rr=null,bi=0;const Ug=Promise.resolve();let as=null;function Zb(r){const n=as||Ug;return r?n.then(this?r.bind(this):r):n}function Xb(r){let n=ir+1,o=Tt.length;for(;n<o;){const d=n+o>>>1,p=Tt[d],m=cn(p);m<r||m===r&&p.flags&2?n=d+1:o=d}return n}function Qo(r){if(!(r.flags&1)){const n=cn(r),o=Tt[Tt.length-1];!o||!(r.flags&2)&&n>=cn(o)?Tt.push(r):Tt.splice(Xb(n),0,r),r.flags|=1,Ng()}}function Ng(){as||(as=Ug.then(Vg))}function Qb(r){Be(r)?$i.push(...r):Rr&&r.id===-1?Rr.splice(bi+1,0,r):r.flags&1||($i.push(r),r.flags|=1),Ng()}function _m(r,n,o=ir+1){for(;o<Tt.length;o++){const d=Tt[o];if(d&&d.flags&2){if(r&&d.id!==r.uid)continue;Tt.splice(o,1),o--,d.flags&4&&(d.flags&=-2),d(),d.flags&4||(d.flags&=-2)}}}function Fg(r){if($i.length){const n=[...new Set($i)].sort((o,d)=>cn(o)-cn(d));if($i.length=0,Rr){Rr.push(...n);return}for(Rr=n,bi=0;bi<Rr.length;bi++){const o=Rr[bi];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Rr=null,bi=0}}const cn=r=>r.id==null?r.flags&2?-1:1/0:r.id;function Vg(r){try{for(ir=0;ir<Tt.length;ir++){const n=Tt[ir];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),_n(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;ir<Tt.length;ir++){const n=Tt[ir];n&&(n.flags&=-2)}ir=-1,Tt.length=0,Fg(),as=null,(Tt.length||$i.length)&&Vg()}}let ar,Xi=[],Io=!1;function bs(r,...n){ar?ar.emit(r,...n):Io||Xi.push({event:r,args:n})}function Lg(r,n){var o,d;ar=r,ar?(ar.enabled=!0,Xi.forEach(({event:p,args:m})=>ar.emit(p,...m)),Xi=[]):typeof window<"u"&&window.HTMLElement&&!((d=(o=window.navigator)==null?void 0:o.userAgent)!=null&&d.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{Lg(m,n)}),setTimeout(()=>{ar||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Io=!0,Xi=[])},3e3)):(Io=!0,Xi=[])}function Jb(r,n){bs("app:init",r,n,{Fragment:nr,Text:yn,Comment:oi,Static:Yn})}function Yb(r){bs("app:unmount",r)}const e0=Jo("component:added"),qg=Jo("component:updated"),t0=Jo("component:removed"),r0=r=>{ar&&typeof ar.cleanupBuffer=="function"&&!ar.cleanupBuffer(r)&&t0(r)};function Jo(r){return n=>{bs(r,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}function i0(r,n,o){bs("component:emit",r.appContext.app,r,n,o)}let or=null,Wg=null;function os(r){const n=or;return or=r,Wg=r&&r.type.__scopeId||null,n}function n0(r,n=or,o){if(!n||r._n)return r;const d=(...p)=>{d._d&&Im(-1);const m=os(n);let _;try{_=r(...p)}finally{os(m),d._d&&Im(1)}return __VUE_PROD_DEVTOOLS__&&qg(n),_};return d._n=!0,d._c=!0,d._d=!0,d}function Xr(r,n,o,d){const p=r.dirs,m=n&&n.dirs;for(let _=0;_<p.length;_++){const x=p[_];m&&(x.oldValue=m[_].value);let b=x.dir[d];b&&(br(),cr(b,o,8,[r.el,x,r,n]),$r())}}const s0=Symbol("_vte"),a0=r=>r.__isTeleport,o0=Symbol("_leaveCb");function Yo(r,n){r.shapeFlag&6&&r.component?(r.transition=n,Yo(r.component.subTree,n)):r.shapeFlag&128?(r.ssContent.transition=n.clone(r.ssContent),r.ssFallback.transition=n.clone(r.ssFallback)):r.transition=n}function Hg(r){r.ids=[r.ids[0]+r.ids[2]+++"-",0,0]}const ls=new WeakMap;function an(r,n,o,d,p=!1){if(Be(r)){r.forEach((P,G)=>an(P,n&&(Be(n)?n[G]:n),o,d,p));return}if(on(d)&&!p){d.shapeFlag&512&&d.type.__asyncResolved&&d.component.subTree.component&&an(r,n,o,d.component.subTree);return}const m=d.shapeFlag&4?nl(d.component):d.el,_=p?null:m,{i:x,r:b}=r,C=n&&n.r,k=x.refs===Qe?x.refs={}:x.refs,B=x.setupState,q=Ze(B),Z=B===Qe?yg:P=>We(q,P);if(C!=null&&C!==b){if(ym(n),ct(C))k[C]=null,Z(C)&&(B[C]=null);else if(It(C)){C.value=null;const P=n;P.k&&(k[P.k]=null)}}if(Pe(b))_n(b,x,12,[_,k]);else{const P=ct(b),G=It(b);if(P||G){const J=()=>{if(r.f){const se=P?Z(b)?B[b]:k[b]:b.value;if(p)Be(se)&&No(se,m);else if(Be(se))se.includes(m)||se.push(m);else if(P)k[b]=[m],Z(b)&&(B[b]=k[b]);else{const le=[m];b.value=le,r.k&&(k[r.k]=le)}}else P?(k[b]=_,Z(b)&&(B[b]=_)):G&&(b.value=_,r.k&&(k[r.k]=_))};if(_){const se=()=>{J(),ls.delete(r)};se.id=-1,ls.set(r,se),Lt(se,o)}else ym(r),J()}}}function ym(r){const n=ls.get(r);n&&(n.flags|=8,ls.delete(r))}ii().requestIdleCallback;ii().cancelIdleCallback;const on=r=>!!r.type.__asyncLoader,jg=r=>r.type.__isKeepAlive;function l0(r,n){Gg(r,"a",n)}function u0(r,n){Gg(r,"da",n)}function Gg(r,n,o=Et){const d=r.__wdc||(r.__wdc=()=>{let p=o;for(;p;){if(p.isDeactivated)return;p=p.parent}return r()});if($s(n,d,o),o){let p=o.parent;for(;p&&p.parent;)jg(p.parent.vnode)&&d0(d,n,o,p),p=p.parent}}function d0(r,n,o,d){const p=$s(n,r,d,!0);Kg(()=>{No(d[n],p)},o)}function $s(r,n,o=Et,d=!1){if(o){const p=o[r]||(o[r]=[]),m=n.__weh||(n.__weh=(..._)=>{br();const x=wn(o),b=cr(n,o,r,_);return x(),$r(),b});return d?p.unshift(m):p.push(m),m}}const vr=r=>(n,o=Et)=>{(!pn||r==="sp")&&$s(r,(...d)=>n(...d),o)},c0=vr("bm"),p0=vr("m"),f0=vr("bu"),h0=vr("u"),m0=vr("bum"),Kg=vr("um"),g0=vr("sp"),_0=vr("rtg"),y0=vr("rtc");function w0(r,n=Et){$s("ec",r,n)}const b0=Symbol.for("v-ndc"),ko=r=>r?h_(r)?nl(r):ko(r.parent):null,ln=kt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>ko(r.parent),$root:r=>ko(r.root),$host:r=>r.ce,$emit:r=>r.emit,$options:r=>__VUE_OPTIONS_API__?Xg(r):r.type,$forceUpdate:r=>r.f||(r.f=()=>{Qo(r.update)}),$nextTick:r=>r.n||(r.n=Zb.bind(r.proxy)),$watch:r=>__VUE_OPTIONS_API__?q0.bind(r):Qt}),co=(r,n)=>r!==Qe&&!r.__isScriptSetup&&We(r,n),$0={get({_:r},n){if(n==="__v_skip")return!0;const{ctx:o,setupState:d,data:p,props:m,accessCache:_,type:x,appContext:b}=r;let C;if(n[0]!=="$"){const Z=_[n];if(Z!==void 0)switch(Z){case 1:return d[n];case 2:return p[n];case 4:return o[n];case 3:return m[n]}else{if(co(d,n))return _[n]=1,d[n];if(p!==Qe&&We(p,n))return _[n]=2,p[n];if((C=r.propsOptions[0])&&We(C,n))return _[n]=3,m[n];if(o!==Qe&&We(o,n))return _[n]=4,o[n];(!__VUE_OPTIONS_API__||Co)&&(_[n]=0)}}const k=ln[n];let B,q;if(k)return n==="$attrs"&&bt(r.attrs,"get",""),k(r);if((B=x.__cssModules)&&(B=B[n]))return B;if(o!==Qe&&We(o,n))return _[n]=4,o[n];if(q=b.config.globalProperties,We(q,n))return q[n]},set({_:r},n,o){const{data:d,setupState:p,ctx:m}=r;return co(p,n)?(p[n]=o,!0):d!==Qe&&We(d,n)?(d[n]=o,!0):We(r.props,n)||n[0]==="$"&&n.slice(1)in r?!1:(m[n]=o,!0)},has({_:{data:r,setupState:n,accessCache:o,ctx:d,appContext:p,propsOptions:m,type:_}},x){let b,C;return!!(o[x]||r!==Qe&&x[0]!=="$"&&We(r,x)||co(n,x)||(b=m[0])&&We(b,x)||We(d,x)||We(ln,x)||We(p.config.globalProperties,x)||(C=_.__cssModules)&&C[x])},defineProperty(r,n,o){return o.get!=null?r._.accessCache[n]=0:We(o,"value")&&this.set(r,n,o.value,null),Reflect.defineProperty(r,n,o)}};function wm(r){return Be(r)?r.reduce((n,o)=>(n[o]=null,n),{}):r}let Co=!0;function v0(r){const n=Xg(r),o=r.proxy,d=r.ctx;Co=!1,n.beforeCreate&&bm(n.beforeCreate,r,"bc");const{data:p,computed:m,methods:_,watch:x,provide:b,inject:C,created:k,beforeMount:B,mounted:q,beforeUpdate:Z,updated:P,activated:G,deactivated:J,beforeDestroy:se,beforeUnmount:le,destroyed:ae,unmounted:Y,render:fe,renderTracked:we,renderTriggered:$e,errorCaptured:Ee,serverPrefetch:tt,expose:ot,inheritAttrs:Ut,components:Ct,directives:pt,filters:Ot}=n;if(C&&x0(C,d,null),_)for(const je in _){const Me=_[je];Pe(Me)&&(d[je]=Me.bind(o))}if(p){const je=p.call(o,o);st(je)&&(r.data=Ko(je))}if(Co=!0,m)for(const je in m){const Me=m[je],Wt=Pe(Me)?Me.bind(o,o):Pe(Me.get)?Me.get.bind(o,o):Qt,At=!Pe(Me)&&Pe(Me.set)?Me.set.bind(o):Qt,et=p$({get:Wt,set:At});Object.defineProperty(d,je,{enumerable:!0,configurable:!0,get:()=>et.value,set:rt=>et.value=rt})}if(x)for(const je in x)Zg(x[je],d,o,je);if(b){const je=Pe(b)?b.call(o):b;Reflect.ownKeys(je).forEach(Me=>{C0(Me,je[Me])})}k&&bm(k,r,"c");function He(je,Me){Be(Me)?Me.forEach(Wt=>je(Wt.bind(o))):Me&&je(Me.bind(o))}if(He(c0,B),He(p0,q),He(f0,Z),He(h0,P),He(l0,G),He(u0,J),He(w0,Ee),He(y0,we),He(_0,$e),He(m0,le),He(Kg,Y),He(g0,tt),Be(ot))if(ot.length){const je=r.exposed||(r.exposed={});ot.forEach(Me=>{Object.defineProperty(je,Me,{get:()=>o[Me],set:Wt=>o[Me]=Wt,enumerable:!0})})}else r.exposed||(r.exposed={});fe&&r.render===Qt&&(r.render=fe),Ut!=null&&(r.inheritAttrs=Ut),Ct&&(r.components=Ct),pt&&(r.directives=pt),tt&&Hg(r)}function x0(r,n,o=Qt){Be(r)&&(r=Oo(r));for(const d in r){const p=r[d];let m;st(p)?"default"in p?m=Jn(p.from||d,p.default,!0):m=Jn(p.from||d):m=Jn(p),It(m)?Object.defineProperty(n,d,{enumerable:!0,configurable:!0,get:()=>m.value,set:_=>m.value=_}):n[d]=m}}function bm(r,n,o){cr(Be(r)?r.map(d=>d.bind(n.proxy)):r.bind(n.proxy),n,o)}function Zg(r,n,o,d){let p=d.includes(".")?u_(o,d):()=>o[d];if(ct(r)){const m=n[r];Pe(m)&&fo(p,m)}else if(Pe(r))fo(p,r.bind(o));else if(st(r))if(Be(r))r.forEach(m=>Zg(m,n,o,d));else{const m=Pe(r.handler)?r.handler.bind(o):n[r.handler];Pe(m)&&fo(p,m,r)}}function Xg(r){const n=r.type,{mixins:o,extends:d}=n,{mixins:p,optionsCache:m,config:{optionMergeStrategies:_}}=r.appContext,x=m.get(n);let b;return x?b=x:!p.length&&!o&&!d?b=n:(b={},p.length&&p.forEach(C=>us(b,C,_,!0)),us(b,n,_)),st(n)&&m.set(n,b),b}function us(r,n,o,d=!1){const{mixins:p,extends:m}=n;m&&us(r,m,o,!0),p&&p.forEach(_=>us(r,_,o,!0));for(const _ in n)if(!(d&&_==="expose")){const x=S0[_]||o&&o[_];r[_]=x?x(r[_],n[_]):n[_]}return r}const S0={data:$m,props:vm,emits:vm,methods:Qi,computed:Qi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Qi,directives:Qi,watch:E0,provide:$m,inject:T0};function $m(r,n){return n?r?function(){return kt(Pe(r)?r.call(this,this):r,Pe(n)?n.call(this,this):n)}:n:r}function T0(r,n){return Qi(Oo(r),Oo(n))}function Oo(r){if(Be(r)){const n={};for(let o=0;o<r.length;o++)n[r[o]]=r[o];return n}return r}function St(r,n){return r?[...new Set([].concat(r,n))]:n}function Qi(r,n){return r?kt(Object.create(null),r,n):n}function vm(r,n){return r?Be(r)&&Be(n)?[...new Set([...r,...n])]:kt(Object.create(null),wm(r),wm(n??{})):n}function E0(r,n){if(!r)return n;if(!n)return r;const o=kt(Object.create(null),r);for(const d in n)o[d]=St(r[d],n[d]);return o}function Qg(){return{app:null,config:{isNativeTag:yg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I0=0;function k0(r,n){return function(d,p=null){Pe(d)||(d=kt({},d)),p!=null&&!st(p)&&(p=null);const m=Qg(),_=new WeakSet,x=[];let b=!1;const C=m.app={_uid:I0++,_component:d,_props:p,_container:null,_context:m,_instance:null,version:Om,get config(){return m.config},set config(k){},use(k,...B){return _.has(k)||(k&&Pe(k.install)?(_.add(k),k.install(C,...B)):Pe(k)&&(_.add(k),k(C,...B))),C},mixin(k){return __VUE_OPTIONS_API__&&(m.mixins.includes(k)||m.mixins.push(k)),C},component(k,B){return B?(m.components[k]=B,C):m.components[k]},directive(k,B){return B?(m.directives[k]=B,C):m.directives[k]},mount(k,B,q){if(!b){const Z=C._ceVNode||si(d,p);return Z.appContext=m,q===!0?q="svg":q===!1&&(q=void 0),r(Z,k,q),b=!0,C._container=k,k.__vue_app__=C,__VUE_PROD_DEVTOOLS__&&(C._instance=Z.component,Jb(C,Om)),nl(Z.component)}},onUnmount(k){x.push(k)},unmount(){b&&(cr(x,C._instance,16),r(null,C._container),__VUE_PROD_DEVTOOLS__&&(C._instance=null,Yb(C)),delete C._container.__vue_app__)},provide(k,B){return m.provides[k]=B,C},runWithContext(k){const B=vi;vi=C;try{return k()}finally{vi=B}}};return C}}let vi=null;function C0(r,n){if(Et){let o=Et.provides;const d=Et.parent&&Et.parent.provides;d===o&&(o=Et.provides=Object.create(d)),o[r]=n}}function Jn(r,n,o=!1){const d=a$();if(d||vi){let p=vi?vi._context.provides:d?d.parent==null||d.ce?d.vnode.appContext&&d.vnode.appContext.provides:d.parent.provides:void 0;if(p&&r in p)return p[r];if(arguments.length>1)return o&&Pe(n)?n.call(d&&d.proxy):n}}const Jg={},Yg=()=>Object.create(Jg),e_=r=>Object.getPrototypeOf(r)===Jg;function O0(r,n,o,d=!1){const p={},m=Yg();r.propsDefaults=Object.create(null),t_(r,n,p,m);for(const _ in r.propsOptions[0])_ in p||(p[_]=void 0);o?r.props=d?p:Fb(p):r.type.props?r.props=p:r.props=m,r.attrs=m}function A0(r,n,o,d){const{props:p,attrs:m,vnode:{patchFlag:_}}=r,x=Ze(p),[b]=r.propsOptions;let C=!1;if((d||_>0)&&!(_&16)){if(_&8){const k=r.vnode.dynamicProps;for(let B=0;B<k.length;B++){let q=k[B];if(vs(r.emitsOptions,q))continue;const Z=n[q];if(b)if(We(m,q))Z!==m[q]&&(m[q]=Z,C=!0);else{const P=Mr(q);p[P]=Ao(b,x,P,Z,r,!1)}else Z!==m[q]&&(m[q]=Z,C=!0)}}}else{t_(r,n,p,m)&&(C=!0);let k;for(const B in x)(!n||!We(n,B)&&((k=li(B))===B||!We(n,k)))&&(b?o&&(o[B]!==void 0||o[k]!==void 0)&&(p[B]=Ao(b,x,B,void 0,r,!0)):delete p[B]);if(m!==x)for(const B in m)(!n||!We(n,B))&&(delete m[B],C=!0)}C&&wr(r.attrs,"set","")}function t_(r,n,o,d){const[p,m]=r.propsOptions;let _=!1,x;if(n)for(let b in n){if(tn(b))continue;const C=n[b];let k;p&&We(p,k=Mr(b))?!m||!m.includes(k)?o[k]=C:(x||(x={}))[k]=C:vs(r.emitsOptions,b)||(!(b in d)||C!==d[b])&&(d[b]=C,_=!0)}if(m){const b=Ze(o),C=x||Qe;for(let k=0;k<m.length;k++){const B=m[k];o[B]=Ao(p,b,B,C[B],r,!We(C,B))}}return _}function Ao(r,n,o,d,p,m){const _=r[o];if(_!=null){const x=We(_,"default");if(x&&d===void 0){const b=_.default;if(_.type!==Function&&!_.skipFactory&&Pe(b)){const{propsDefaults:C}=p;if(o in C)d=C[o];else{const k=wn(p);d=C[o]=b.call(null,n),k()}}else d=b;p.ce&&p.ce._setProp(o,d)}_[0]&&(m&&!x?d=!1:_[1]&&(d===""||d===li(o))&&(d=!0))}return d}const z0=new WeakMap;function r_(r,n,o=!1){const d=__VUE_OPTIONS_API__&&o?z0:n.propsCache,p=d.get(r);if(p)return p;const m=r.props,_={},x=[];let b=!1;if(__VUE_OPTIONS_API__&&!Pe(r)){const k=B=>{b=!0;const[q,Z]=r_(B,n,!0);kt(_,q),Z&&x.push(...Z)};!o&&n.mixins.length&&n.mixins.forEach(k),r.extends&&k(r.extends),r.mixins&&r.mixins.forEach(k)}if(!m&&!b)return st(r)&&d.set(r,Yi),Yi;if(Be(m))for(let k=0;k<m.length;k++){const B=Mr(m[k]);xm(B)&&(_[B]=Qe)}else if(m)for(const k in m){const B=Mr(k);if(xm(B)){const q=m[k],Z=_[B]=Be(q)||Pe(q)?{type:q}:kt({},q),P=Z.type;let G=!1,J=!0;if(Be(P))for(let se=0;se<P.length;++se){const le=P[se],ae=Pe(le)&&le.name;if(ae==="Boolean"){G=!0;break}else ae==="String"&&(J=!1)}else G=Pe(P)&&P.name==="Boolean";Z[0]=G,Z[1]=J,(G||We(Z,"default"))&&x.push(B)}}const C=[_,x];return st(r)&&d.set(r,C),C}function xm(r){return r[0]!=="$"&&!tn(r)}const el=r=>r==="_"||r==="_ctx"||r==="$stable",tl=r=>Be(r)?r.map(sr):[sr(r)],R0=(r,n,o)=>{if(n._n)return n;const d=n0((...p)=>tl(n(...p)),o);return d._c=!1,d},i_=(r,n,o)=>{const d=r._ctx;for(const p in r){if(el(p))continue;const m=r[p];if(Pe(m))n[p]=R0(p,m,d);else if(m!=null){const _=tl(m);n[p]=()=>_}}},n_=(r,n)=>{const o=tl(n);r.slots.default=()=>o},s_=(r,n,o)=>{for(const d in n)(o||!el(d))&&(r[d]=n[d])},D0=(r,n,o)=>{const d=r.slots=Yg();if(r.vnode.shapeFlag&32){const p=n._;p?(s_(d,n,o),o&&ns(d,"_",p,!0)):i_(n,d)}else n&&n_(r,n)},B0=(r,n,o)=>{const{vnode:d,slots:p}=r;let m=!0,_=Qe;if(d.shapeFlag&32){const x=n._;x?o&&x===1?m=!1:s_(p,n,o):(m=!n.$stable,i_(n,p)),_=n}else n&&(n_(r,n),_={default:1});if(m)for(const x in p)!el(x)&&_[x]==null&&delete p[x]};function P0(){typeof __VUE_OPTIONS_API__!="boolean"&&(ii().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!="boolean"&&(ii().__VUE_PROD_DEVTOOLS__=!1),typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(ii().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Lt=Q0;function M0(r){return U0(r)}function U0(r,n){P0();const o=ii();o.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&Lg(o.__VUE_DEVTOOLS_GLOBAL_HOOK__,o);const{insert:d,remove:p,patchProp:m,createElement:_,createText:x,createComment:b,setText:C,setElementText:k,parentNode:B,nextSibling:q,setScopeId:Z=Qt,insertStaticContent:P}=r,G=(A,D,L,Q=null,K=null,X=null,oe=void 0,ie=null,re=!!D.dynamicChildren)=>{if(A===D)return;A&&!Ki(A,D)&&(Q=di(A),rt(A,K,X,!0),A=null),D.patchFlag===-2&&(re=!1,D.dynamicChildren=null);const{type:ee,ref:Te,shapeFlag:ue}=D;switch(ee){case yn:J(A,D,L,Q);break;case oi:se(A,D,L,Q);break;case Yn:A==null&&le(D,L,Q,oe);break;case nr:Ct(A,D,L,Q,K,X,oe,ie,re);break;default:ue&1?fe(A,D,L,Q,K,X,oe,ie,re):ue&6?pt(A,D,L,Q,K,X,oe,ie,re):(ue&64||ue&128)&&ee.process(A,D,L,Q,K,X,oe,ie,re,ht)}Te!=null&&K?an(Te,A&&A.ref,X,D||A,!D):Te==null&&A&&A.ref!=null&&an(A.ref,null,X,A,!0)},J=(A,D,L,Q)=>{if(A==null)d(D.el=x(D.children),L,Q);else{const K=D.el=A.el;D.children!==A.children&&C(K,D.children)}},se=(A,D,L,Q)=>{A==null?d(D.el=b(D.children||""),L,Q):D.el=A.el},le=(A,D,L,Q)=>{[A.el,A.anchor]=P(A.children,D,L,Q,A.el,A.anchor)},ae=({el:A,anchor:D},L,Q)=>{let K;for(;A&&A!==D;)K=q(A),d(A,L,Q),A=K;d(D,L,Q)},Y=({el:A,anchor:D})=>{let L;for(;A&&A!==D;)L=q(A),p(A),A=L;p(D)},fe=(A,D,L,Q,K,X,oe,ie,re)=>{D.type==="svg"?oe="svg":D.type==="math"&&(oe="mathml"),A==null?we(D,L,Q,K,X,oe,ie,re):tt(A,D,K,X,oe,ie,re)},we=(A,D,L,Q,K,X,oe,ie)=>{let re,ee;const{props:Te,shapeFlag:ue,transition:ve,dirs:Ie}=A;if(re=A.el=_(A.type,X,Te&&Te.is,Te),ue&8?k(re,A.children):ue&16&&Ee(A.children,re,null,Q,K,po(A,X),oe,ie),Ie&&Xr(A,null,Q,"created"),$e(re,A,A.scopeId,oe,Q),Te){for(const Ge in Te)Ge!=="value"&&!tn(Ge)&&m(re,Ge,null,Te[Ge],X,Q);"value"in Te&&m(re,"value",null,Te.value,X),(ee=Te.onVnodeBeforeMount)&&rr(ee,Q,A)}__VUE_PROD_DEVTOOLS__&&(ns(re,"__vnode",A,!0),ns(re,"__vueParentComponent",Q,!0)),Ie&&Xr(A,null,Q,"beforeMount");const Fe=N0(K,ve);Fe&&ve.beforeEnter(re),d(re,D,L),((ee=Te&&Te.onVnodeMounted)||Fe||Ie)&&Lt(()=>{ee&&rr(ee,Q,A),Fe&&ve.enter(re),Ie&&Xr(A,null,Q,"mounted")},K)},$e=(A,D,L,Q,K)=>{if(L&&Z(A,L),Q)for(let X=0;X<Q.length;X++)Z(A,Q[X]);if(K){let X=K.subTree;if(D===X||c_(X.type)&&(X.ssContent===D||X.ssFallback===D)){const oe=K.vnode;$e(A,oe,oe.scopeId,oe.slotScopeIds,K.parent)}}},Ee=(A,D,L,Q,K,X,oe,ie,re=0)=>{for(let ee=re;ee<A.length;ee++){const Te=A[ee]=ie?Dr(A[ee]):sr(A[ee]);G(null,Te,D,L,Q,K,X,oe,ie)}},tt=(A,D,L,Q,K,X,oe)=>{const ie=D.el=A.el;__VUE_PROD_DEVTOOLS__&&(ie.__vnode=D);let{patchFlag:re,dynamicChildren:ee,dirs:Te}=D;re|=A.patchFlag&16;const ue=A.props||Qe,ve=D.props||Qe;let Ie;if(L&&Qr(L,!1),(Ie=ve.onVnodeBeforeUpdate)&&rr(Ie,L,D,A),Te&&Xr(D,A,L,"beforeUpdate"),L&&Qr(L,!0),(ue.innerHTML&&ve.innerHTML==null||ue.textContent&&ve.textContent==null)&&k(ie,""),ee?ot(A.dynamicChildren,ee,ie,L,Q,po(D,K),X):oe||Me(A,D,ie,null,L,Q,po(D,K),X,!1),re>0){if(re&16)Ut(ie,ue,ve,L,K);else if(re&2&&ue.class!==ve.class&&m(ie,"class",null,ve.class,K),re&4&&m(ie,"style",ue.style,ve.style,K),re&8){const Fe=D.dynamicProps;for(let Ge=0;Ge<Fe.length;Ge++){const Re=Fe[Ge],lt=ue[Re],mt=ve[Re];(mt!==lt||Re==="value")&&m(ie,Re,lt,mt,K,L)}}re&1&&A.children!==D.children&&k(ie,D.children)}else!oe&&ee==null&&Ut(ie,ue,ve,L,K);((Ie=ve.onVnodeUpdated)||Te)&&Lt(()=>{Ie&&rr(Ie,L,D,A),Te&&Xr(D,A,L,"updated")},Q)},ot=(A,D,L,Q,K,X,oe)=>{for(let ie=0;ie<D.length;ie++){const re=A[ie],ee=D[ie],Te=re.el&&(re.type===nr||!Ki(re,ee)||re.shapeFlag&198)?B(re.el):L;G(re,ee,Te,null,Q,K,X,oe,!0)}},Ut=(A,D,L,Q,K)=>{if(D!==L){if(D!==Qe)for(const X in D)!tn(X)&&!(X in L)&&m(A,X,D[X],null,K,Q);for(const X in L){if(tn(X))continue;const oe=L[X],ie=D[X];oe!==ie&&X!=="value"&&m(A,X,ie,oe,K,Q)}"value"in L&&m(A,"value",D.value,L.value,K)}},Ct=(A,D,L,Q,K,X,oe,ie,re)=>{const ee=D.el=A?A.el:x(""),Te=D.anchor=A?A.anchor:x("");let{patchFlag:ue,dynamicChildren:ve,slotScopeIds:Ie}=D;Ie&&(ie=ie?ie.concat(Ie):Ie),A==null?(d(ee,L,Q),d(Te,L,Q),Ee(D.children||[],L,Te,K,X,oe,ie,re)):ue>0&&ue&64&&ve&&A.dynamicChildren?(ot(A.dynamicChildren,ve,L,K,X,oe,ie),(D.key!=null||K&&D===K.subTree)&&a_(A,D,!0)):Me(A,D,L,Te,K,X,oe,ie,re)},pt=(A,D,L,Q,K,X,oe,ie,re)=>{D.slotScopeIds=ie,A==null?D.shapeFlag&512?K.ctx.activate(D,L,Q,oe,re):Ot(D,L,Q,K,X,oe,re):xr(A,D,re)},Ot=(A,D,L,Q,K,X,oe)=>{const ie=A.component=s$(A,Q,K);if(jg(A)&&(ie.ctx.renderer=ht),o$(ie,!1,oe),ie.asyncDep){if(K&&K.registerDep(ie,He,oe),!A.el){const re=ie.subTree=si(oi);se(null,re,D,L),A.placeholder=re.el}}else He(ie,A,D,L,K,X,oe)},xr=(A,D,L)=>{const Q=D.component=A.component;if(Z0(A,D,L))if(Q.asyncDep&&!Q.asyncResolved){je(Q,D,L);return}else Q.next=D,Q.update();else D.el=A.el,Q.vnode=D},He=(A,D,L,Q,K,X,oe)=>{const ie=()=>{if(A.isMounted){let{next:ue,bu:ve,u:Ie,parent:Fe,vnode:Ge}=A;{const Rt=o_(A);if(Rt){ue&&(ue.el=Ge.el,je(A,ue,oe)),Rt.asyncDep.then(()=>{A.isUnmounted||ie()});return}}let Re=ue,lt;Qr(A,!1),ue?(ue.el=Ge.el,je(A,ue,oe)):ue=Ge,ve&&ao(ve),(lt=ue.props&&ue.props.onVnodeBeforeUpdate)&&rr(lt,Fe,ue,Ge),Qr(A,!0);const mt=Tm(A),zt=A.subTree;A.subTree=mt,G(zt,mt,B(zt.el),di(zt),A,K,X),ue.el=mt.el,Re===null&&X0(A,mt.el),Ie&&Lt(Ie,K),(lt=ue.props&&ue.props.onVnodeUpdated)&&Lt(()=>rr(lt,Fe,ue,Ge),K),__VUE_PROD_DEVTOOLS__&&qg(A)}else{let ue;const{el:ve,props:Ie}=D,{bm:Fe,m:Ge,parent:Re,root:lt,type:mt}=A,zt=on(D);Qr(A,!1),Fe&&ao(Fe),!zt&&(ue=Ie&&Ie.onVnodeBeforeMount)&&rr(ue,Re,D),Qr(A,!0);{lt.ce&&lt.ce._def.shadowRoot!==!1&&lt.ce._injectChildStyle(mt);const Rt=A.subTree=Tm(A);G(null,Rt,L,Q,A,K,X),D.el=Rt.el}if(Ge&&Lt(Ge,K),!zt&&(ue=Ie&&Ie.onVnodeMounted)){const Rt=D;Lt(()=>rr(ue,Re,Rt),K)}(D.shapeFlag&256||Re&&on(Re.vnode)&&Re.vnode.shapeFlag&256)&&A.a&&Lt(A.a,K),A.isMounted=!0,__VUE_PROD_DEVTOOLS__&&e0(A),D=L=Q=null}};A.scope.on();const re=A.effect=new vg(ie);A.scope.off();const ee=A.update=re.run.bind(re),Te=A.job=re.runIfDirty.bind(re);Te.i=A,Te.id=A.uid,re.scheduler=()=>Qo(Te),Qr(A,!0),ee()},je=(A,D,L)=>{D.component=A;const Q=A.vnode.props;A.vnode=D,A.next=null,A0(A,D.props,Q,L),B0(A,D.children,L),br(),_m(A),$r()},Me=(A,D,L,Q,K,X,oe,ie,re=!1)=>{const ee=A&&A.children,Te=A?A.shapeFlag:0,ue=D.children,{patchFlag:ve,shapeFlag:Ie}=D;if(ve>0){if(ve&128){At(ee,ue,L,Q,K,X,oe,ie,re);return}else if(ve&256){Wt(ee,ue,L,Q,K,X,oe,ie,re);return}}Ie&8?(Te&16&&Tr(ee,K,X),ue!==ee&&k(L,ue)):Te&16?Ie&16?At(ee,ue,L,Q,K,X,oe,ie,re):Tr(ee,K,X,!0):(Te&8&&k(L,""),Ie&16&&Ee(ue,L,Q,K,X,oe,ie,re))},Wt=(A,D,L,Q,K,X,oe,ie,re)=>{A=A||Yi,D=D||Yi;const ee=A.length,Te=D.length,ue=Math.min(ee,Te);let ve;for(ve=0;ve<ue;ve++){const Ie=D[ve]=re?Dr(D[ve]):sr(D[ve]);G(A[ve],Ie,L,null,K,X,oe,ie,re)}ee>Te?Tr(A,K,X,!0,!1,ue):Ee(D,L,Q,K,X,oe,ie,re,ue)},At=(A,D,L,Q,K,X,oe,ie,re)=>{let ee=0;const Te=D.length;let ue=A.length-1,ve=Te-1;for(;ee<=ue&&ee<=ve;){const Ie=A[ee],Fe=D[ee]=re?Dr(D[ee]):sr(D[ee]);if(Ki(Ie,Fe))G(Ie,Fe,L,null,K,X,oe,ie,re);else break;ee++}for(;ee<=ue&&ee<=ve;){const Ie=A[ue],Fe=D[ve]=re?Dr(D[ve]):sr(D[ve]);if(Ki(Ie,Fe))G(Ie,Fe,L,null,K,X,oe,ie,re);else break;ue--,ve--}if(ee>ue){if(ee<=ve){const Ie=ve+1,Fe=Ie<Te?D[Ie].el:Q;for(;ee<=ve;)G(null,D[ee]=re?Dr(D[ee]):sr(D[ee]),L,Fe,K,X,oe,ie,re),ee++}}else if(ee>ve)for(;ee<=ue;)rt(A[ee],K,X,!0),ee++;else{const Ie=ee,Fe=ee,Ge=new Map;for(ee=Fe;ee<=ve;ee++){const _t=D[ee]=re?Dr(D[ee]):sr(D[ee]);_t.key!=null&&Ge.set(_t.key,ee)}let Re,lt=0;const mt=ve-Fe+1;let zt=!1,Rt=0;const Er=new Array(mt);for(ee=0;ee<mt;ee++)Er[ee]=0;for(ee=Ie;ee<=ue;ee++){const _t=A[ee];if(lt>=mt){rt(_t,K,X,!0);continue}let Nt;if(_t.key!=null)Nt=Ge.get(_t.key);else for(Re=Fe;Re<=ve;Re++)if(Er[Re-Fe]===0&&Ki(_t,D[Re])){Nt=Re;break}Nt===void 0?rt(_t,K,X,!0):(Er[Nt-Fe]=ee+1,Nt>=Rt?Rt=Nt:zt=!0,G(_t,D[Nt],L,null,K,X,oe,ie,re),lt++)}const vn=zt?F0(Er):Yi;for(Re=vn.length-1,ee=mt-1;ee>=0;ee--){const _t=Fe+ee,Nt=D[_t],yt=D[_t+1],pi=_t+1<Te?yt.el||yt.placeholder:Q;Er[ee]===0?G(null,Nt,L,pi,K,X,oe,ie,re):zt&&(Re<0||ee!==vn[Re]?et(Nt,L,pi,2):Re--)}}},et=(A,D,L,Q,K=null)=>{const{el:X,type:oe,transition:ie,children:re,shapeFlag:ee}=A;if(ee&6){et(A.component.subTree,D,L,Q);return}if(ee&128){A.suspense.move(D,L,Q);return}if(ee&64){oe.move(A,D,L,ht);return}if(oe===nr){d(X,D,L);for(let ue=0;ue<re.length;ue++)et(re[ue],D,L,Q);d(A.anchor,D,L);return}if(oe===Yn){ae(A,D,L);return}if(Q!==2&&ee&1&&ie)if(Q===0)ie.beforeEnter(X),d(X,D,L),Lt(()=>ie.enter(X),K);else{const{leave:ue,delayLeave:ve,afterLeave:Ie}=ie,Fe=()=>{A.ctx.isUnmounted?p(X):d(X,D,L)},Ge=()=>{X._isLeaving&&X[o0](!0),ue(X,()=>{Fe(),Ie&&Ie()})};ve?ve(X,Fe,Ge):Ge()}else d(X,D,L)},rt=(A,D,L,Q=!1,K=!1)=>{const{type:X,props:oe,ref:ie,children:re,dynamicChildren:ee,shapeFlag:Te,patchFlag:ue,dirs:ve,cacheIndex:Ie}=A;if(ue===-2&&(K=!1),ie!=null&&(br(),an(ie,null,L,A,!0),$r()),Ie!=null&&(D.renderCache[Ie]=void 0),Te&256){D.ctx.deactivate(A);return}const Fe=Te&1&&ve,Ge=!on(A);let Re;if(Ge&&(Re=oe&&oe.onVnodeBeforeUnmount)&&rr(Re,D,A),Te&6)Ur(A.component,L,Q);else{if(Te&128){A.suspense.unmount(L,Q);return}Fe&&Xr(A,null,D,"beforeUnmount"),Te&64?A.type.remove(A,D,L,ht,Q):ee&&!ee.hasOnce&&(X!==nr||ue>0&&ue&64)?Tr(ee,D,L,!1,!0):(X===nr&&ue&384||!K&&Te&16)&&Tr(re,D,L),Q&&pr(A)}(Ge&&(Re=oe&&oe.onVnodeUnmounted)||Fe)&&Lt(()=>{Re&&rr(Re,D,A),Fe&&Xr(A,null,D,"unmounted")},L)},pr=A=>{const{type:D,el:L,anchor:Q,transition:K}=A;if(D===nr){Sr(L,Q);return}if(D===Yn){Y(A);return}const X=()=>{p(L),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:oe,delayLeave:ie}=K,re=()=>oe(L,X);ie?ie(A.el,X,re):re()}else X()},Sr=(A,D)=>{let L;for(;A!==D;)L=q(A),p(A),A=L;p(D)},Ur=(A,D,L)=>{const{bum:Q,scope:K,job:X,subTree:oe,um:ie,m:re,a:ee}=A;Sm(re),Sm(ee),Q&&ao(Q),K.stop(),X&&(X.flags|=8,rt(oe,A,D,L)),ie&&Lt(ie,D),Lt(()=>{A.isUnmounted=!0},D),__VUE_PROD_DEVTOOLS__&&r0(A)},Tr=(A,D,L,Q=!1,K=!1,X=0)=>{for(let oe=X;oe<A.length;oe++)rt(A[oe],D,L,Q,K)},di=A=>{if(A.shapeFlag&6)return di(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=q(A.anchor||A.el),L=D&&D[s0];return L?q(L):D};let ft=!1;const ci=(A,D,L)=>{A==null?D._vnode&&rt(D._vnode,null,null,!0):G(D._vnode||null,A,D,null,null,null,L),D._vnode=A,ft||(ft=!0,_m(),Fg(),ft=!1)},ht={p:G,um:rt,m:et,r:pr,mt:Ot,mc:Ee,pc:Me,pbc:ot,n:di,o:r};return{render:ci,hydrate:void 0,createApp:k0(ci)}}function po({type:r,props:n},o){return o==="svg"&&r==="foreignObject"||o==="mathml"&&r==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:o}function Qr({effect:r,job:n},o){o?(r.flags|=32,n.flags|=4):(r.flags&=-33,n.flags&=-5)}function N0(r,n){return(!r||r&&!r.pendingBranch)&&n&&!n.persisted}function a_(r,n,o=!1){const d=r.children,p=n.children;if(Be(d)&&Be(p))for(let m=0;m<d.length;m++){const _=d[m];let x=p[m];x.shapeFlag&1&&!x.dynamicChildren&&((x.patchFlag<=0||x.patchFlag===32)&&(x=p[m]=Dr(p[m]),x.el=_.el),!o&&x.patchFlag!==-2&&a_(_,x)),x.type===yn&&x.patchFlag!==-1&&(x.el=_.el),x.type===oi&&!x.el&&(x.el=_.el)}}function F0(r){const n=r.slice(),o=[0];let d,p,m,_,x;const b=r.length;for(d=0;d<b;d++){const C=r[d];if(C!==0){if(p=o[o.length-1],r[p]<C){n[d]=p,o.push(d);continue}for(m=0,_=o.length-1;m<_;)x=m+_>>1,r[o[x]]<C?m=x+1:_=x;C<r[o[m]]&&(m>0&&(n[d]=o[m-1]),o[m]=d)}}for(m=o.length,_=o[m-1];m-- >0;)o[m]=_,_=n[_];return o}function o_(r){const n=r.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:o_(n)}function Sm(r){if(r)for(let n=0;n<r.length;n++)r[n].flags|=8}const V0=Symbol.for("v-scx"),L0=()=>Jn(V0);function fo(r,n,o){return l_(r,n,o)}function l_(r,n,o=Qe){const{immediate:d,deep:p,flush:m,once:_}=o,x=kt({},o),b=n&&d||!n&&m!=="post";let C;if(pn){if(m==="sync"){const Z=L0();C=Z.__watcherHandles||(Z.__watcherHandles=[])}else if(!b){const Z=()=>{};return Z.stop=Qt,Z.resume=Qt,Z.pause=Qt,Z}}const k=Et;x.call=(Z,P,G)=>cr(Z,k,P,G);let B=!1;m==="post"?x.scheduler=Z=>{Lt(Z,k&&k.suspense)}:m!=="sync"&&(B=!0,x.scheduler=(Z,P)=>{P?Z():Qo(Z)}),x.augmentJob=Z=>{n&&(Z.flags|=4),B&&(Z.flags|=2,k&&(Z.id=k.uid,Z.i=k))};const q=Gb(r,n,x);return pn&&(C?C.push(q):b&&q()),q}function q0(r,n,o){const d=this.proxy,p=ct(r)?r.includes(".")?u_(d,r):()=>d[r]:r.bind(d,d);let m;Pe(n)?m=n:(m=n.handler,o=n);const _=wn(this),x=l_(p,m.bind(d),o);return _(),x}function u_(r,n){const o=n.split(".");return()=>{let d=r;for(let p=0;p<o.length&&d;p++)d=d[o[p]];return d}}const W0=(r,n)=>n==="modelValue"||n==="model-value"?r.modelModifiers:r[`${n}Modifiers`]||r[`${Mr(n)}Modifiers`]||r[`${li(n)}Modifiers`];function H0(r,n,...o){if(r.isUnmounted)return;const d=r.vnode.props||Qe;let p=o;const m=n.startsWith("update:"),_=m&&W0(d,n.slice(7));_&&(_.trim&&(p=o.map(k=>ct(k)?k.trim():k)),_.number&&(p=o.map(fb))),__VUE_PROD_DEVTOOLS__&&i0(r,n,p);let x,b=d[x=so(n)]||d[x=so(Mr(n))];!b&&m&&(b=d[x=so(li(n))]),b&&cr(b,r,6,p);const C=d[x+"Once"];if(C){if(!r.emitted)r.emitted={};else if(r.emitted[x])return;r.emitted[x]=!0,cr(C,r,6,p)}}const j0=new WeakMap;function d_(r,n,o=!1){const d=__VUE_OPTIONS_API__&&o?j0:n.emitsCache,p=d.get(r);if(p!==void 0)return p;const m=r.emits;let _={},x=!1;if(__VUE_OPTIONS_API__&&!Pe(r)){const b=C=>{const k=d_(C,n,!0);k&&(x=!0,kt(_,k))};!o&&n.mixins.length&&n.mixins.forEach(b),r.extends&&b(r.extends),r.mixins&&r.mixins.forEach(b)}return!m&&!x?(st(r)&&d.set(r,null),null):(Be(m)?m.forEach(b=>_[b]=null):kt(_,m),st(r)&&d.set(r,_),_)}function vs(r,n){return!r||!gs(n)?!1:(n=n.slice(2).replace(/Once$/,""),We(r,n[0].toLowerCase()+n.slice(1))||We(r,li(n))||We(r,n))}function Tm(r){const{type:n,vnode:o,proxy:d,withProxy:p,propsOptions:[m],slots:_,attrs:x,emit:b,render:C,renderCache:k,props:B,data:q,setupState:Z,ctx:P,inheritAttrs:G}=r,J=os(r);let se,le;try{if(o.shapeFlag&4){const Y=p||d,fe=Y;se=sr(C.call(fe,Y,k,B,Z,q,P)),le=x}else{const Y=n;se=sr(Y.length>1?Y(B,{attrs:x,slots:_,emit:b}):Y(B,null)),le=n.props?x:G0(x)}}catch(Y){ws(Y,r,1),se=si(oi)}let ae=se;if(le&&G!==!1){const Y=Object.keys(le),{shapeFlag:fe}=ae;Y.length&&fe&7&&(m&&Y.some(Uo)&&(le=K0(le,m)),ae=Ti(ae,le,!1,!0))}return o.dirs&&(ae=Ti(ae,null,!1,!0),ae.dirs=ae.dirs?ae.dirs.concat(o.dirs):o.dirs),o.transition&&Yo(ae,o.transition),se=ae,os(J),se}const G0=r=>{let n;for(const o in r)(o==="class"||o==="style"||gs(o))&&((n||(n={}))[o]=r[o]);return n},K0=(r,n)=>{const o={};for(const d in r)(!Uo(d)||!(d.slice(9)in n))&&(o[d]=r[d]);return o};function Z0(r,n,o){const{props:d,children:p,component:m}=r,{props:_,children:x,patchFlag:b}=n,C=m.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&b>=0){if(b&1024)return!0;if(b&16)return d?Em(d,_,C):!!_;if(b&8){const k=n.dynamicProps;for(let B=0;B<k.length;B++){const q=k[B];if(_[q]!==d[q]&&!vs(C,q))return!0}}}else return(p||x)&&(!x||!x.$stable)?!0:d===_?!1:d?_?Em(d,_,C):!0:!!_;return!1}function Em(r,n,o){const d=Object.keys(n);if(d.length!==Object.keys(r).length)return!0;for(let p=0;p<d.length;p++){const m=d[p];if(n[m]!==r[m]&&!vs(o,m))return!0}return!1}function X0({vnode:r,parent:n},o){for(;n;){const d=n.subTree;if(d.suspense&&d.suspense.activeBranch===r&&(d.el=r.el),d===r)(r=n.vnode).el=o,n=n.parent;else break}}const c_=r=>r.__isSuspense;function Q0(r,n){n&&n.pendingBranch?Be(r)?n.effects.push(...r):n.effects.push(r):Qb(r)}const nr=Symbol.for("v-fgt"),yn=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc");let Pr=null,rl=1;function Im(r,n=!1){rl+=r,r<0&&Pr&&n&&(Pr.hasOnce=!0)}function p_(r){return r?r.__v_isVNode===!0:!1}function Ki(r,n){return r.type===n.type&&r.key===n.key}const f_=({key:r})=>r??null,es=({ref:r,ref_key:n,ref_for:o})=>(typeof r=="number"&&(r=""+r),r!=null?ct(r)||It(r)||Pe(r)?{i:or,r,k:n,f:!!o}:r:null);function J0(r,n=null,o=null,d=0,p=null,m=r===nr?0:1,_=!1,x=!1){const b={__v_isVNode:!0,__v_skip:!0,type:r,props:n,key:n&&f_(n),ref:n&&es(n),scopeId:Wg,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:d,dynamicProps:p,dynamicChildren:null,appContext:null,ctx:or};return x?(il(b,o),m&128&&r.normalize(b)):o&&(b.shapeFlag|=ct(o)?8:16),rl>0&&!_&&Pr&&(b.patchFlag>0||m&6)&&b.patchFlag!==32&&Pr.push(b),b}const si=Y0;function Y0(r,n=null,o=null,d=0,p=null,m=!1){if((!r||r===b0)&&(r=oi),p_(r)){const x=Ti(r,n,!0);return o&&il(x,o),rl>0&&!m&&Pr&&(x.shapeFlag&6?Pr[Pr.indexOf(r)]=x:Pr.push(x)),x.patchFlag=-2,x}if(c$(r)&&(r=r.__vccOpts),n){n=e$(n);let{class:x,style:b}=n;x&&!ct(x)&&(n.class=Lo(x)),st(b)&&(Xo(b)&&!Be(b)&&(b=kt({},b)),n.style=Vo(b))}const _=ct(r)?1:c_(r)?128:a0(r)?64:st(r)?4:Pe(r)?2:0;return J0(r,n,o,d,p,_,m,!0)}function e$(r){return r?Xo(r)||e_(r)?kt({},r):r:null}function Ti(r,n,o=!1,d=!1){const{props:p,ref:m,patchFlag:_,children:x,transition:b}=r,C=n?r$(p||{},n):p,k={__v_isVNode:!0,__v_skip:!0,type:r.type,props:C,key:C&&f_(C),ref:n&&n.ref?o&&m?Be(m)?m.concat(es(n)):[m,es(n)]:es(n):m,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:x,target:r.target,targetStart:r.targetStart,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:n&&r.type!==nr?_===-1?16:_|16:_,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:b,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ti(r.ssContent),ssFallback:r.ssFallback&&Ti(r.ssFallback),placeholder:r.placeholder,el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce};return b&&d&&Yo(k,b.clone(k)),k}function t$(r=" ",n=0){return si(yn,null,r,n)}function sr(r){return r==null||typeof r=="boolean"?si(oi):Be(r)?si(nr,null,r.slice()):p_(r)?Dr(r):si(yn,null,String(r))}function Dr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ti(r)}function il(r,n){let o=0;const{shapeFlag:d}=r;if(n==null)n=null;else if(Be(n))o=16;else if(typeof n=="object")if(d&65){const p=n.default;p&&(p._c&&(p._d=!1),il(r,p()),p._c&&(p._d=!0));return}else{o=32;const p=n._;!p&&!e_(n)?n._ctx=or:p===3&&or&&(or.slots._===1?n._=1:(n._=2,r.patchFlag|=1024))}else Pe(n)?(n={default:n,_ctx:or},o=32):(n=String(n),d&64?(o=16,n=[t$(n)]):o=8);r.children=n,r.shapeFlag|=o}function r$(...r){const n={};for(let o=0;o<r.length;o++){const d=r[o];for(const p in d)if(p==="class")n.class!==d.class&&(n.class=Lo([n.class,d.class]));else if(p==="style")n.style=Vo([n.style,d.style]);else if(gs(p)){const m=n[p],_=d[p];_&&m!==_&&!(Be(m)&&m.includes(_))&&(n[p]=m?[].concat(m,_):_)}else p!==""&&(n[p]=d[p])}return n}function rr(r,n,o,d=null){cr(r,n,7,[o,d])}const i$=Qg();let n$=0;function s$(r,n,o){const d=r.type,p=(n?n.appContext:r.appContext)||i$,m={uid:n$++,vnode:r,type:d,parent:n,appContext:p,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(p.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:r_(d,p),emitsOptions:d_(d,p),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:d.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=n?n.root:m,m.emit=H0.bind(null,m),r.ce&&r.ce(m),m}let Et=null;const a$=()=>Et||or;let ds,zo;{const r=ii(),n=(o,d)=>{let p;return(p=r[o])||(p=r[o]=[]),p.push(d),m=>{p.length>1?p.forEach(_=>_(m)):p[0](m)}};ds=n("__VUE_INSTANCE_SETTERS__",o=>Et=o),zo=n("__VUE_SSR_SETTERS__",o=>pn=o)}const wn=r=>{const n=Et;return ds(r),r.scope.on(),()=>{r.scope.off(),ds(n)}},km=()=>{Et&&Et.scope.off(),ds(null)};function h_(r){return r.vnode.shapeFlag&4}let pn=!1;function o$(r,n=!1,o=!1){n&&zo(n);const{props:d,children:p}=r.vnode,m=h_(r);O0(r,d,m,n),D0(r,p,o||n);const _=m?l$(r,n):void 0;return n&&zo(!1),_}function l$(r,n){const o=r.type;r.accessCache=Object.create(null),r.proxy=new Proxy(r.ctx,$0);const{setup:d}=o;if(d){br();const p=r.setupContext=d.length>1?d$(r):null,m=wn(r),_=_n(d,r,0,[r.props,p]),x=wg(_);if($r(),m(),(x||r.sp)&&!on(r)&&Hg(r),x){if(_.then(km,km),n)return _.then(b=>{Cm(r,b)}).catch(b=>{ws(b,r,0)});r.asyncDep=_}else Cm(r,_)}else m_(r)}function Cm(r,n,o){Pe(n)?r.type.__ssrInlineRender?r.ssrRender=n:r.render=n:st(n)&&(__VUE_PROD_DEVTOOLS__&&(r.devtoolsRawSetupState=n),r.setupState=Mg(n)),m_(r)}function m_(r,n,o){const d=r.type;if(r.render||(r.render=d.render||Qt),__VUE_OPTIONS_API__){const p=wn(r);br();try{v0(r)}finally{$r(),p()}}}const u$={get(r,n){return bt(r,"get",""),r[n]}};function d$(r){const n=o=>{r.exposed=o||{}};return{attrs:new Proxy(r.attrs,u$),slots:r.slots,emit:r.emit,expose:n}}function nl(r){return r.exposed?r.exposeProxy||(r.exposeProxy=new Proxy(Mg(Vb(r.exposed)),{get(n,o){if(o in n)return n[o];if(o in ln)return ln[o](r)},has(n,o){return o in n||o in ln}})):r.proxy}function c$(r){return Pe(r)&&"__vccOpts"in r}const p$=(r,n)=>Hb(r,n,pn),Om="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ro;const Am=typeof window<"u"&&window.trustedTypes;if(Am)try{Ro=Am.createPolicy("vue",{createHTML:r=>r})}catch{}const g_=Ro?r=>Ro.createHTML(r):r=>r,f$="http://www.w3.org/2000/svg",h$="http://www.w3.org/1998/Math/MathML",yr=typeof document<"u"?document:null,zm=yr&&yr.createElement("template"),m$={insert:(r,n,o)=>{n.insertBefore(r,o||null)},remove:r=>{const n=r.parentNode;n&&n.removeChild(r)},createElement:(r,n,o,d)=>{const p=n==="svg"?yr.createElementNS(f$,r):n==="mathml"?yr.createElementNS(h$,r):o?yr.createElement(r,{is:o}):yr.createElement(r);return r==="select"&&d&&d.multiple!=null&&p.setAttribute("multiple",d.multiple),p},createText:r=>yr.createTextNode(r),createComment:r=>yr.createComment(r),setText:(r,n)=>{r.nodeValue=n},setElementText:(r,n)=>{r.textContent=n},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>yr.querySelector(r),setScopeId(r,n){r.setAttribute(n,"")},insertStaticContent(r,n,o,d,p,m){const _=o?o.previousSibling:n.lastChild;if(p&&(p===m||p.nextSibling))for(;n.insertBefore(p.cloneNode(!0),o),!(p===m||!(p=p.nextSibling)););else{zm.innerHTML=g_(d==="svg"?`<svg>${r}</svg>`:d==="mathml"?`<math>${r}</math>`:r);const x=zm.content;if(d==="svg"||d==="mathml"){const b=x.firstChild;for(;b.firstChild;)x.appendChild(b.firstChild);x.removeChild(b)}n.insertBefore(x,o)}return[_?_.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}},g$=Symbol("_vtc");function _$(r,n,o){const d=r[g$];d&&(n=(n?[n,...d]:[...d]).join(" ")),n==null?r.removeAttribute("class"):o?r.setAttribute("class",n):r.className=n}const Rm=Symbol("_vod"),y$=Symbol("_vsh"),w$=Symbol(""),b$=/(?:^|;)\s*display\s*:/;function $$(r,n,o){const d=r.style,p=ct(o);let m=!1;if(o&&!p){if(n)if(ct(n))for(const _ of n.split(";")){const x=_.slice(0,_.indexOf(":")).trim();o[x]==null&&ts(d,x,"")}else for(const _ in n)o[_]==null&&ts(d,_,"");for(const _ in o)_==="display"&&(m=!0),ts(d,_,o[_])}else if(p){if(n!==o){const _=d[w$];_&&(o+=";"+_),d.cssText=o,m=b$.test(o)}}else n&&r.removeAttribute("style");Rm in r&&(r[Rm]=m?d.display:"",r[y$]&&(d.display="none"))}const Dm=/\s*!important$/;function ts(r,n,o){if(Be(o))o.forEach(d=>ts(r,n,d));else if(o==null&&(o=""),n.startsWith("--"))r.setProperty(n,o);else{const d=v$(r,n);Dm.test(o)?r.setProperty(li(d),o.replace(Dm,""),"important"):r[d]=o}}const Bm=["Webkit","Moz","ms"],ho={};function v$(r,n){const o=ho[n];if(o)return o;let d=Mr(n);if(d!=="filter"&&d in r)return ho[n]=d;d=bg(d);for(let p=0;p<Bm.length;p++){const m=Bm[p]+d;if(m in r)return ho[n]=m}return n}const Pm="http://www.w3.org/1999/xlink";function Mm(r,n,o,d,p,m=wb(n)){d&&n.startsWith("xlink:")?o==null?r.removeAttributeNS(Pm,n.slice(6,n.length)):r.setAttributeNS(Pm,n,o):o==null||m&&!$g(o)?r.removeAttribute(n):r.setAttribute(n,m?"":ki(o)?String(o):o)}function Um(r,n,o,d,p){if(n==="innerHTML"||n==="textContent"){o!=null&&(r[n]=n==="innerHTML"?g_(o):o);return}const m=r.tagName;if(n==="value"&&m!=="PROGRESS"&&!m.includes("-")){const x=m==="OPTION"?r.getAttribute("value")||"":r.value,b=o==null?r.type==="checkbox"?"on":"":String(o);(x!==b||!("_value"in r))&&(r.value=b),o==null&&r.removeAttribute(n),r._value=o;return}let _=!1;if(o===""||o==null){const x=typeof r[n];x==="boolean"?o=$g(o):o==null&&x==="string"?(o="",_=!0):x==="number"&&(o=0,_=!0)}try{r[n]=o}catch{}_&&r.removeAttribute(p||n)}function x$(r,n,o,d){r.addEventListener(n,o,d)}function S$(r,n,o,d){r.removeEventListener(n,o,d)}const Nm=Symbol("_vei");function T$(r,n,o,d,p=null){const m=r[Nm]||(r[Nm]={}),_=m[n];if(d&&_)_.value=d;else{const[x,b]=E$(n);if(d){const C=m[n]=C$(d,p);x$(r,x,C,b)}else _&&(S$(r,x,_,b),m[n]=void 0)}}const Fm=/(?:Once|Passive|Capture)$/;function E$(r){let n;if(Fm.test(r)){n={};let d;for(;d=r.match(Fm);)r=r.slice(0,r.length-d[0].length),n[d[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):li(r.slice(2)),n]}let mo=0;const I$=Promise.resolve(),k$=()=>mo||(I$.then(()=>mo=0),mo=Date.now());function C$(r,n){const o=d=>{if(!d._vts)d._vts=Date.now();else if(d._vts<=o.attached)return;cr(O$(d,o.value),n,5,[d])};return o.value=r,o.attached=k$(),o}function O$(r,n){if(Be(n)){const o=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0},n.map(d=>p=>!p._stopped&&d&&d(p))}else return n}const Vm=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,A$=(r,n,o,d,p,m)=>{const _=p==="svg";n==="class"?_$(r,d,_):n==="style"?$$(r,o,d):gs(n)?Uo(n)||T$(r,n,o,d,m):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):z$(r,n,d,_))?(Um(r,n,d),!r.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Mm(r,n,d,_,m,n!=="value")):r._isVueCE&&(/[A-Z]/.test(n)||!ct(d))?Um(r,Mr(n),d,m,n):(n==="true-value"?r._trueValue=d:n==="false-value"&&(r._falseValue=d),Mm(r,n,d,_))};function z$(r,n,o,d){if(d)return!!(n==="innerHTML"||n==="textContent"||n in r&&Vm(n)&&Pe(o));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="form"||n==="list"&&r.tagName==="INPUT"||n==="type"&&r.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const p=r.tagName;if(p==="IMG"||p==="VIDEO"||p==="CANVAS"||p==="SOURCE")return!1}return Vm(n)&&ct(o)?!1:n in r}const R$=kt({patchProp:A$},m$);let Lm;function D$(){return Lm||(Lm=M0(R$))}const B$=(...r)=>{const n=D$().createApp(...r),{mount:o}=n;return n.mount=d=>{const p=M$(d);if(!p)return;const m=n._component;!Pe(m)&&!m.render&&!m.template&&(m.template=p.innerHTML),p.nodeType===1&&(p.textContent="");const _=o(p,!1,P$(p));return p instanceof Element&&(p.removeAttribute("v-cloak"),p.setAttribute("data-v-app","")),_},n};function P$(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function M$(r){return ct(r)?document.querySelector(r):r}var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},__={},bn={};Object.defineProperty(bn,"__esModule",{value:!0});bn.baseAssetPath=void 0;const U$=typeof window<"u"&&typeof window.document<"u",qm=U$?window.document.currentScript:null;let y_="/";qm&&(y_=qm.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"));bn.baseAssetPath=y_;var Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});Ci.defaultModelFetcher=void 0;const N$=r=>fetch(r).then(n=>n.arrayBuffer());Ci.defaultModelFetcher=N$;var dr={},Oi={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.log=r.LOG_PREFIX=void 0,r.LOG_PREFIX="[VAD]";const n=["error","debug","warn"];function o(p){return(...m)=>{console[p](r.LOG_PREFIX,...m)}}const d=n.reduce((p,m)=>(p[m]=o(m),p),{});r.log=d})(Oi);var ui={};Object.defineProperty(ui,"__esModule",{value:!0});ui.Message=void 0;var Wm;(function(r){r.AudioFrame="AUDIO_FRAME",r.SpeechStart="SPEECH_START",r.VADMisfire="VAD_MISFIRE",r.SpeechEnd="SPEECH_END",r.SpeechStop="SPEECH_STOP",r.SpeechRealStart="SPEECH_REAL_START",r.FrameProcessed="FRAME_PROCESSED"})(Wm||(ui.Message=Wm={}));Object.defineProperty(dr,"__esModule",{value:!0});dr.FrameProcessor=dr.validateOptions=dr.defaultFrameProcessorOptions=void 0;const Zi=Oi,Jr=ui;dr.defaultFrameProcessorOptions={positiveSpeechThreshold:.3,negativeSpeechThreshold:.25,preSpeechPadMs:800,redemptionMs:1400,minSpeechMs:400,submitUserSpeechOnPause:!1};function F$(r){(r.positiveSpeechThreshold<0||r.positiveSpeechThreshold>1)&&Zi.log.error("positiveSpeechThreshold should be a number between 0 and 1"),(r.negativeSpeechThreshold<0||r.negativeSpeechThreshold>r.positiveSpeechThreshold)&&Zi.log.error("negativeSpeechThreshold should be between 0 and positiveSpeechThreshold"),r.preSpeechPadMs<0&&Zi.log.error("preSpeechPadMs should be positive"),r.redemptionMs<0&&Zi.log.error("redemptionMs should be positive"),r.minSpeechMs<0&&Zi.log.error("minSpeechMs should be positive")}dr.validateOptions=F$;const Hm=r=>{const n=r.reduce((d,p)=>(d.push(d.at(-1)+p.length),d),[0]),o=new Float32Array(n.at(-1));return r.forEach((d,p)=>{const m=n[p];o.set(d,m)}),o};class V${constructor(n,o,d,p){this.modelProcessFunc=n,this.modelResetFunc=o,this.options=d,this.msPerFrame=p,this.speaking=!1,this.redemptionCounter=0,this.speechFrameCount=0,this.active=!1,this.speechRealStartFired=!1,this.reset=()=>{this.speaking=!1,this.speechRealStartFired=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0,this.speechFrameCount=0},this.pause=m=>{this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment(m):this.reset()},this.resume=()=>{this.active=!0},this.endSegment=m=>{const _=this.audioBuffer;this.audioBuffer=[];const x=this.speaking;if(this.reset(),x)if(_.reduce((C,k)=>k.isSpeech?C+1:C,0)>=this.minSpeechFrames){const C=Hm(_.map(k=>k.frame));m({msg:Jr.Message.SpeechEnd,audio:C})}else m({msg:Jr.Message.VADMisfire});return{}},this.process=async(m,_)=>{if(!this.active)return;const x=await this.modelProcessFunc(m),b=x.isSpeech>=this.options.positiveSpeechThreshold;if(_({probs:x,msg:Jr.Message.FrameProcessed,frame:m}),this.audioBuffer.push({frame:m,isSpeech:b}),b&&(this.speechFrameCount++,this.redemptionCounter=0),b&&!this.speaking&&(this.speaking=!0,_({msg:Jr.Message.SpeechStart})),this.speaking&&this.speechFrameCount===this.minSpeechFrames&&!this.speechRealStartFired&&(this.speechRealStartFired=!0,_({msg:Jr.Message.SpeechRealStart})),x.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.redemptionFrames){this.redemptionCounter=0,this.speechFrameCount=0,this.speaking=!1,this.speechRealStartFired=!1;const C=this.audioBuffer;if(this.audioBuffer=[],C.reduce((B,q)=>q.isSpeech?B+1:B,0)>=this.minSpeechFrames){const B=Hm(C.map(q=>q.frame));_({msg:Jr.Message.SpeechEnd,audio:B})}else _({msg:Jr.Message.VADMisfire})}if(!this.speaking){for(;this.audioBuffer.length>this.preSpeechPadFrames;)this.audioBuffer.shift();this.speechFrameCount=0}},this.audioBuffer=[],this.redemptionFrames=Math.floor(d.redemptionMs/this.msPerFrame),this.preSpeechPadFrames=Math.floor(d.preSpeechPadMs/this.msPerFrame),this.minSpeechFrames=Math.floor(d.minSpeechMs/this.msPerFrame),this.reset()}}dr.FrameProcessor=V$;var w_={};function wi(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var b_={exports:{}};/*!
 * ONNX Runtime Web v1.23.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */(function(r,n){var o=(()=>{var d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,_=Object.prototype.hasOwnProperty,x=(e=>typeof wi<"u"?wi:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof wi<"u"?wi:t)[i]}):e)(function(e){if(typeof wi<"u")return wi.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),b=(e,t)=>()=>(e&&(t=e(e=0)),t),C=(e,t)=>{for(var i in t)d(e,i,{get:t[i],enumerable:!0})},k=(e,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of m(t))!_.call(e,a)&&a!==i&&d(e,a,{get:()=>t[a],enumerable:!(s=p(t,a))||s.enumerable});return e},B=e=>k(d({},"__esModule",{value:!0}),e),q,Z,P,G,J,se=b(()=>{q=new Map,Z=[],P=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let s=q.get(e);if(s===void 0)q.set(e,{backend:t,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let a=Z.indexOf(e);a!==-1&&Z.splice(a,1);for(let l=0;l<Z.length;l++)if(q.get(Z[l]).priority<=i){Z.splice(l,0,e);return}Z.push(e)}return}throw new TypeError("not a valid backend")},G=async e=>{let t=q.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(s){return i||(t.error=`${s}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},J=async e=>{let t=e.executionProviders||[],i=t.map(f=>typeof f=="string"?f:f.name),s=i.length===0?Z:i,a,l=[],u=new Set;for(let f of s){let h=await G(f);typeof h=="string"?l.push({name:f,err:h}):(a||(a=h),a===h&&u.add(f))}if(!a)throw new Error(`no available backend found. ERR: ${l.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:h}of l)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${h}`);let c=t.filter(f=>u.has(typeof f=="string"?f:f.name));return[a,new Proxy(e,{get:(f,h)=>h==="executionProviders"?c:Reflect.get(f,h)})]}}),le=b(()=>{se()}),ae,Y=b(()=>{ae="1.23.0"}),fe,we,$e=b(()=>{Y(),fe="warning",we={wasm:{},webgl:{},webgpu:{},versions:{common:ae},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);fe=e}},get logLevel(){return fe}},Object.defineProperty(we,"logLevel",{enumerable:!0})}),Ee,tt=b(()=>{$e(),Ee=we}),ot,Ut,Ct=b(()=>{ot=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let a,l;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],l=e.dims[3]):(a=e.dims[3],l=e.dims[2]);let u=(t==null?void 0:t.format)!==void 0?t.format:"RGB",c=t==null?void 0:t.norm,f,h;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?h=[0,0,0,0]:typeof c.bias=="number"?h=[c.bias,c.bias,c.bias,c.bias]:(h=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(h[3]=c.bias[3]));let g=l*a,y=0,w=g,$=g*2,v=-1;u==="RGBA"?(y=0,w=g,$=g*2,v=g*3):u==="RGB"?(y=0,w=g,$=g*2):u==="RBG"&&(y=0,$=g,w=g*2);for(let S=0;S<l;S++)for(let I=0;I<a;I++){let E=(e.data[y++]-h[0])*f[0],T=(e.data[w++]-h[1])*f[1],z=(e.data[$++]-h[2])*f[2],O=v===-1?255:(e.data[v++]-h[3])*f[3];s.fillStyle="rgba("+E+","+T+","+z+","+O+")",s.fillRect(I,S,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ut=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let a,l,u;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],l=e.dims[1],u=e.dims[3]):(a=e.dims[3],l=e.dims[2],u=e.dims[1]);let c=t!==void 0&&t.format!==void 0?t.format:"RGB",f=t==null?void 0:t.norm,h,g;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?g=[0,0,0,0]:typeof f.bias=="number"?g=[f.bias,f.bias,f.bias,f.bias]:(g=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(g[3]=f.bias[3]));let y=l*a;if(t!==void 0&&(t.format!==void 0&&u===4&&t.format!=="RGBA"||u===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let w=4,$=0,v=1,S=2,I=3,E=0,T=y,z=y*2,O=-1;c==="RGBA"?(E=0,T=y,z=y*2,O=y*3):c==="RGB"?(E=0,T=y,z=y*2):c==="RBG"&&(E=0,z=y,T=y*2),s=i.createImageData(a,l);for(let R=0;R<l*a;$+=w,v+=w,S+=w,I+=w,R++)s.data[$]=(e.data[E++]-g[0])*h[0],s.data[v]=(e.data[T++]-g[1])*h[1],s.data[S]=(e.data[z++]-g[2])*h[2],s.data[I]=O===-1?255:(e.data[O++]-g[3])*h[3]}else throw new Error("Can not access image data");return s}}),pt,Ot,xr,He,je,Me,Wt=b(()=>{ci(),pt=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=t,a=t.norm??{mean:255,bias:0},l,u;typeof a.mean=="number"?l=[a.mean,a.mean,a.mean,a.mean]:l=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?u=[a.bias,a.bias,a.bias,a.bias]:u=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let c=t.format!==void 0?t.format:"RGBA",f=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",h=i*s,g=f==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),y=4,w=0,$=1,v=2,S=3,I=0,E=h,T=h*2,z=-1;c==="RGB"&&(y=3,w=0,$=1,v=2,S=-1),f==="RGBA"?z=h*3:f==="RBG"?(I=0,T=h,E=h*2):f==="BGR"&&(T=0,E=h,I=h*2);for(let O=0;O<h;O++,w+=y,v+=y,$+=y,S+=y)g[I++]=(e[w]+u[0])/l[0],g[E++]=(e[$]+u[1])/l[1],g[T++]=(e[v]+u[2])/l[2],z!==-1&&S!==-1&&(g[z++]=(e[S]+u[3])/l[3]);return f==="RGBA"?new ft("float32",g,[1,4,i,s]):new ft("float32",g,[1,3,i,s])},Ot=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,l=typeof e=="string",u,c=t??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=g=>typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||g instanceof OffscreenCanvas?g.getContext("2d"):null;if(i){let g=f();g.width=e.width,g.height=e.height;let y=h(g);if(y!=null){let w=e.height,$=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(w=t.resizedHeight,$=t.resizedWidth),t!==void 0){if(c=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=w,c.width=$}else c.tensorFormat="RGBA",c.height=w,c.width=$;y.drawImage(e,0,0),u=y.getImageData(0,0,$,w).data}else throw new Error("Can not access image data")}else if(s){let g,y;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(g=t.resizedHeight,y=t.resizedWidth):(g=e.height,y=e.width),t!==void 0&&(c=t),c.format="RGBA",c.height=g,c.width=y,t!==void 0){let w=f();w.width=y,w.height=g;let $=h(w);if($!=null)$.putImageData(e,0,0),u=$.getImageData(0,0,y,g).data;else throw new Error("Can not access image data")}else u=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let g=f();g.width=e.width,g.height=e.height;let y=h(g);if(y!=null){let w=e.height,$=e.width;return y.drawImage(e,0,0,$,w),u=y.getImageData(0,0,$,w).data,c.height=w,c.width=$,pt(u,c)}else throw new Error("Can not access image data")}else{if(l)return new Promise((g,y)=>{let w=f(),$=h(w);if(!e||!$)return y();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{w.width=v.width,w.height=v.height,$.drawImage(v,0,0,w.width,w.height);let S=$.getImageData(0,0,w.width,w.height);c.height=w.height,c.width=w.width,g(pt(S.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(u!==void 0)return pt(u,c);throw new Error("Input data provided is not supported - aborted tensor creation")},xr=(e,t)=>{let{width:i,height:s,download:a,dispose:l}=t,u=[1,s,i,4];return new ft({location:"texture",type:"float32",texture:e,dims:u,download:a,dispose:l})},He=(e,t)=>{let{dataType:i,dims:s,download:a,dispose:l}=t;return new ft({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:a,dispose:l})},je=(e,t)=>{let{dataType:i,dims:s,download:a,dispose:l}=t;return new ft({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:a,dispose:l})},Me=(e,t,i)=>new ft({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),At,et,rt,pr,Sr=b(()=>{At=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),et=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),rt=!1,pr=()=>{if(!rt){rt=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,s=typeof i<"u"&&i.from;e&&(At.set("int64",BigInt64Array),et.set(BigInt64Array,"int64")),t&&(At.set("uint64",BigUint64Array),et.set(BigUint64Array,"uint64")),s?(At.set("float16",i),et.set(i,"float16")):At.set("float16",Uint16Array)}}}),Ur,Tr,di=b(()=>{ci(),Ur=e=>{let t=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);t*=s}return t},Tr=(e,t)=>{switch(e.location){case"cpu":return new ft(e.type,e.data,t);case"cpu-pinned":return new ft({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ft({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ft({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ft({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ft,ci=b(()=>{Ct(),Wt(),Sr(),di(),ft=class{constructor(e,t,i){pr();let s,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,a=e.dims,e.location){case"cpu-pinned":{let u=At.get(s);if(!u)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,c;if(typeof e=="string")if(s=e,c=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");u=t}else{let f=At.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?u=f.from(t,BigInt):u=f.from(t)}else if(t instanceof f)u=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&f!==Uint16Array)u=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${s} tensor's data must be type of ${f}`)}else if(c=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")s="string",u=e;else if(f==="boolean")s="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",u=Uint8Array.from(e);else{let f=et.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=f,u=e}if(c===void 0)c=[u.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");a=c,this.cpuData=u,this.dataLocation="cpu"}let l=Ur(a);if(this.cpuData&&l!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(l/2)===this.cpuData.length))throw new Error(`Tensor's size(${l}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=a,this.size=l}static async fromImage(e,t){return Ot(e,t)}static fromTexture(e,t){return xr(e,t)}static fromGpuBuffer(e,t){return He(e,t)}static fromMLTensor(e,t){return je(e,t)}static fromPinnedBuffer(e,t,i){return Me(e,t,i)}toDataURL(e){return ot(this,e)}toImageData(e){return Ut(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Tr(this,e)}}}),ht,Ts=b(()=>{ci(),ht=ft}),A,D,L,Q,K,X,oe=b(()=>{$e(),A=(e,t)=>{(typeof we.trace>"u"?!we.wasm.trace:!we.trace)||console.timeStamp(`${e}::ORT::${t}`)},D=(e,t)=>{var a;let i=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],s=!1;for(let l=0;l<i.length;l++){if(s&&!i[l].includes("TRACE_FUNC")){let u=`FUNC_${e}::${i[l].trim().split(" ")[1]}`;t&&(u+=`::${t}`),A("CPU",u);return}i[l].includes("TRACE_FUNC")&&(s=!0)}},L=e=>{(typeof we.trace>"u"?!we.wasm.trace:!we.trace)||D("BEGIN",e)},Q=e=>{(typeof we.trace>"u"?!we.wasm.trace:!we.trace)||D("END",e)},K=e=>{(typeof we.trace>"u"?!we.wasm.trace:!we.trace)||console.time(`ORT::${e}`)},X=e=>{(typeof we.trace>"u"?!we.wasm.trace:!we.trace)||console.timeEnd(`ORT::${e}`)}}),ie,re=b(()=>{se(),Ts(),oe(),ie=class $_{constructor(t){this.handler=t}async run(t,i,s){L(),K("InferenceSession.run");let a={},l={};if(typeof t!="object"||t===null||t instanceof ht||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof ht)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");u=!1;for(let h of i){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(`'fetches' contains invalid output name: ${h}.`);a[h]=null}if(typeof s=="object"&&s!==null)l=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,g=Object.getOwnPropertyNames(i);for(let y of this.outputNames)if(g.indexOf(y)!==-1){let w=i[y];(w===null||w instanceof ht)&&(h=!0,u=!1,a[y]=w)}if(h){if(typeof s=="object"&&s!==null)l=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else l=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof t[h]>"u")throw new Error(`input '${h}' is missing in 'feeds'.`);if(u)for(let h of this.outputNames)a[h]=null;let c=await this.handler.run(t,a,l),f={};for(let h in c)if(Object.hasOwnProperty.call(c,h)){let g=c[h];g instanceof ht?f[h]=g:f[h]=new ht(g.type,g.data,g.dims)}return X("InferenceSession.run"),Q(),f}async release(){return this.handler.dispose()}static async create(t,i,s,a){L(),K("InferenceSession.create");let l,u={};if(typeof t=="string"){if(l=t,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(l=t,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let g=t,y=0,w=t.byteLength;if(typeof i=="object"&&i!==null)u=i;else if(typeof i=="number"){if(y=i,!Number.isSafeInteger(y))throw new RangeError("'byteOffset' must be an integer.");if(y<0||y>=g.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${g.byteLength}).`);if(w=t.byteLength-y,typeof s=="number"){if(w=s,!Number.isSafeInteger(w))throw new RangeError("'byteLength' must be an integer.");if(w<=0||y+w>g.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${g.byteLength-y}].`);if(typeof a=="object"&&a!==null)u=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");l=new Uint8Array(g,y,w)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await J(u),h=await c.createInferenceSessionHandler(l,f);return X("InferenceSession.create"),Q(),new $_(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ee,Te=b(()=>{re(),ee=ie}),ue=b(()=>{}),ve=b(()=>{}),Ie=b(()=>{}),Fe=b(()=>{}),Ge={};C(Ge,{InferenceSession:()=>ee,TRACE:()=>A,TRACE_EVENT_BEGIN:()=>K,TRACE_EVENT_END:()=>X,TRACE_FUNC_BEGIN:()=>L,TRACE_FUNC_END:()=>Q,Tensor:()=>ht,env:()=>Ee,registerBackend:()=>P});var Re=b(()=>{le(),tt(),Te(),Ts(),ue(),ve(),oe(),Ie(),Fe()}),lt=b(()=>{}),mt={};C(mt,{default:()=>Er});var zt,Rt,Er,vn=b(()=>{var e;Ph(),Nr(),Cs(),zt="ort-wasm-proxy-worker",Rt=((e=globalThis.self)==null?void 0:e.name)===zt,Rt&&(self.onmessage=t=>{let{type:i,in:s}=t.data;try{switch(i){case"init-wasm":zs(s.wasm).then(()=>{qa(s).then(()=>{postMessage({type:i})},a=>{postMessage({type:i,err:a})})},a=>{postMessage({type:i,err:a})});break;case"init-ep":{let{epName:a,env:l}=s;Wa(l,a).then(()=>{postMessage({type:i})},u=>{postMessage({type:i,err:u})});break}case"copy-from":{let{buffer:a}=s,l=Vn(a);postMessage({type:i,out:l});break}case"create":{let{model:a,options:l}=s;ja(a,l).then(u=>{postMessage({type:i,out:u})},u=>{postMessage({type:i,err:u})});break}case"release":Ga(s),postMessage({type:i});break;case"run":{let{sessionId:a,inputIndices:l,inputs:u,outputIndices:c,options:f}=s;Za(a,l,u,c,new Array(c.length).fill(null),f).then(h=>{h.some(g=>g[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:h},Qa([...u,...h]))},h=>{postMessage({type:i,err:h})});break}case"end-profiling":Xa(s),postMessage({type:i});break;default:}}catch(a){postMessage({type:i,err:a})}}),Er=Rt?null:t=>new Worker(t??yt,{type:"classic",name:zt})}),_t,Nt,yt,pi,xn,ll,ul,Es,dl,Is,cl,ks,pl,Cs=b(()=>{lt(),_t=typeof location>"u"?void 0:location.origin,Nt=()=>{var e,t;return typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0},yt=Nt(),pi=()=>{if(yt&&!yt.startsWith("blob:"))return yt.substring(0,yt.lastIndexOf("/")+1)},xn=(e,t)=>{try{let i=t??yt;return(i?new URL(e,i):new URL(e)).origin===_t}catch{return!1}},ll=(e,t)=>{let i=t??yt;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},ul=(e,t)=>`${t??"./"}${e}`,Es=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},dl=async e=>(await import(e)).default,Is=(vn(),B(mt)).default,cl=async()=>{if(!yt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xn(yt))return[void 0,Is()];let e=await Es(yt);return[e,Is(e)]},ks=void 0,pl=async(e,t,i,s)=>{let a=ks&&!(e||t);if(a)if(yt)a=xn(yt);else if(s&&!i)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,ks];{let l="ort-wasm-simd-threaded.jsep.mjs",u=e??ll(l,t),c=i&&u&&!xn(u,t),f=c?await Es(u):u??ul(l,t);return[c?f:void 0,await dl(f)]}}}),Os,Sn,Ai,As,fl,hl,ml,zs,Ke,Nr=b(()=>{Cs(),Sn=!1,Ai=!1,As=!1,fl=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},hl=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ml=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},zs=async e=>{if(Sn)return Promise.resolve();if(Ai)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(As)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ai=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!ml())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!hl())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let s=fl();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let a=e.wasmPaths,l=typeof a=="string"?a:void 0,u=a==null?void 0:a.mjs,c=(u==null?void 0:u.href)??u,f=a==null?void 0:a.wasm,h=(f==null?void 0:f.href)??f,g=e.wasmBinary,[y,w]=await pl(c,l,i>1,!!g||!!h),$=!1,v=[];if(t>0&&v.push(new Promise(S=>{setTimeout(()=>{$=!0,S()},t)})),v.push(new Promise((S,I)=>{let E={numThreads:i};if(g)E.wasmBinary=g;else if(h||l)E.locateFile=T=>h??l+T;else if(c&&c.indexOf("blob:")!==0)E.locateFile=T=>new URL(T,c).href;else if(y){let T=pi();T&&(E.locateFile=z=>T+z)}w(E).then(T=>{Ai=!1,Sn=!0,Os=T,S(),y&&URL.revokeObjectURL(y)},T=>{Ai=!1,As=!0,I(T)})})),await Promise.race(v),$)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ke=()=>{if(Sn&&Os)return Os;throw new Error("WebAssembly is not initialized yet.")}}),Ht,Tn,qe,Rs=b(()=>{Nr(),Ht=(e,t)=>{let i=Ke(),s=i.lengthBytesUTF8(e)+1,a=i._malloc(s);return i.stringToUTF8(e,a,s),t.push(a),a},Tn=(e,t,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([a,l])=>{let u=t?t+a:a;if(typeof l=="object")Tn(l,u+".",i,s);else if(typeof l=="string"||typeof l=="number")s(u,l.toString());else if(typeof l=="boolean")s(u,l?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof l}`)})},qe=e=>{let t=Ke(),i=t.stackSave();try{let s=t.PTR_SIZE,a=t.stackAlloc(2*s);t._OrtGetLastError(a,a+s);let l=Number(t.getValue(a,s===4?"i32":"i64")),u=t.getValue(a+s,"*"),c=u?t.UTF8ToString(u):"";throw new Error(`${e} ERROR_CODE: ${l}, ERROR_MESSAGE: ${c}`)}finally{t.stackRestore(i)}}}),gl,C_=b(()=>{Nr(),Rs(),gl=e=>{let t=Ke(),i=0,s=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let l=0;return(e==null?void 0:e.tag)!==void 0&&(l=Ht(e.tag,s)),i=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,l),i===0&&qe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Tn(e.extra,"",new WeakSet,(u,c)=>{let f=Ht(u,s),h=Ht(c,s);t._OrtAddRunConfigEntry(i,f,h)!==0&&qe(`Can't set a run config entry: ${u} - ${c}.`)}),[i,s]}catch(l){throw i!==0&&t._OrtReleaseRunOptions(i),s.forEach(u=>t._free(u)),l}}}),_l,yl,wl,zi,bl,$l,O_=b(()=>{Nr(),Rs(),_l=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},yl=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},wl=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},zi=(e,t,i,s)=>{let a=Ht(t,s),l=Ht(i,s);Ke()._OrtAddSessionConfigEntry(e,a,l)!==0&&qe(`Can't set a session config entry: ${t} - ${i}.`)},bl=async(e,t,i)=>{for(let s of t){let a=typeof s=="string"?s:s.name,l=[];switch(a){case"webnn":if(a="WEBNN",typeof s!="string"){let g=s==null?void 0:s.deviceType;g&&zi(e,"deviceType",g,i)}break;case"webgpu":if(a="JS",typeof s!="string"){let g=s;if(g!=null&&g.preferredLayout){if(g.preferredLayout!=="NCHW"&&g.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);zi(e,"preferredLayout",g.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let u=Ht(a,i),c=l.length,f=0,h=0;if(c>0){f=Ke()._malloc(c*Ke().PTR_SIZE),i.push(f),h=Ke()._malloc(c*Ke().PTR_SIZE),i.push(h);for(let g=0;g<c;g++)Ke().setValue(f+g*Ke().PTR_SIZE,l[g][0],"*"),Ke().setValue(h+g*Ke().PTR_SIZE,l[g][1],"*")}await Ke()._OrtAppendExecutionProvider(e,u,f,h,c)!==0&&qe(`Can't append execution provider: ${a}.`)}},$l=async e=>{let t=Ke(),i=0,s=[],a=e||{};wl(a);try{let l=_l(a.graphOptimizationLevel??"all"),u=yl(a.executionMode??"sequential"),c=typeof a.logId=="string"?Ht(a.logId,s):0,f=a.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let h=a.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log verbosity level is not valid: ${h}`);let g=typeof a.optimizedModelFilePath=="string"?Ht(a.optimizedModelFilePath,s):0;if(i=t._OrtCreateSessionOptions(l,!!a.enableCpuMemArena,!!a.enableMemPattern,u,!!a.enableProfiling,0,c,f,h,g),i===0&&qe("Can't create session options."),a.executionProviders&&await bl(i,a.executionProviders,s),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);zi(i,"enableGraphCapture",a.enableGraphCapture.toString(),s)}if(a.freeDimensionOverrides)for(let[y,w]of Object.entries(a.freeDimensionOverrides)){if(typeof y!="string")throw new Error(`free dimension override name must be a string: ${y}`);if(typeof w!="number"||!Number.isInteger(w)||w<0)throw new Error(`free dimension override value must be a non-negative integer: ${w}`);let $=Ht(y,s);t._OrtAddFreeDimensionOverride(i,$,w)!==0&&qe(`Can't set a free dimension override: ${y} - ${w}.`)}return a.extra!==void 0&&Tn(a.extra,"",new WeakSet,(y,w)=>{zi(i,y,w,s)}),[i,s]}catch(l){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&qe("Can't release session options."),s.forEach(u=>t._free(u)),l}}}),Fr,fr,Vr,En,In,Ds,Bs,Ps,xe=b(()=>{Fr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},fr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Vr=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof t=="number"?t:t.reduce((a,l)=>a*l,1);return i>0?Math.ceil(s*i):void 0},En=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},In=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ds=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Bs=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ps=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ms,vl=b(()=>{lt(),Ms=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),l;try{l=new ArrayBuffer(s)}catch(c){if(c instanceof RangeError){let f=Math.ceil(s/65536);l=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let u=0;for(;;){let{done:c,value:f}=await a.read();if(c)break;let h=f.byteLength;new Uint8Array(l,u,h).set(f),u+=h}return new Uint8Array(l,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),xl,Sl,Tl,El,Us,Il,Ue,hr=b(()=>{xe(),xl=["V","I","W","E","F"],Sl=(e,t)=>{console.log(`[${xl[e]},${new Date().toISOString()}]${t}`)},Us=(e,t)=>{Tl=e,El=t},Il=(e,t)=>{let i=In(e),s=In(Tl);i>=s&&Sl(i,typeof t=="function"?t():t)},Ue=(...e)=>{El&&Il(...e)}}),kl,fi,N,kn,Cl,Ol,Al,ke=b(()=>{kl=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},fi=class{static calcShape(e,t,i=!1){let s=e.length,a=t.length;if(s===0)return t;if(a===0)return e;let l=Math.max(e.length,t.length),u=new Array(l);if(i){if(s<2||a<2)return;let c=kl.calcMatMulShape([e[s-2],e[s-1]],[t[a-2],t[a-1]]);if(c===void 0)return;[u[l-2],u[l-1]]=c}for(let c=i?3:1;c<=l;c++){let f=s-c<0?1:e[s-c],h=a-c<0?1:t[a-c];if(f!==h&&f>1&&h>1)return;let g=Math.max(f,h);if(f&&h)u[l-c]=Math.max(f,h);else{if(g>1)return;u[l-c]=0}}return u}static isValidBroadcast(e,t){let i=e.length,s=t.length;if(i>s)return!1;for(let a=1;a<=i;a++)if(e[i-a]!==1&&e[i-a]!==t[s-a])return!1;return!0}},N=class rs{static size(t){return rs.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let s=t.length;if(s===0)return[];let a=new Array(s),l=s-1;for(;l>=0;){if(t[l]%i===0){a[l]=t[l]/i;break}if(i%t[l]!==0)throw new Error("cannot convert shape");a[l]=1,i/=t[l],l--}for(l--;l>=0;l--)a[l]=t[l];return a}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return rs.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return rs.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,s){let a=1;for(let l=i;l<s;l++){if(t[l]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[l])}return a}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=t[i-1];for(let a=i-3;a>=0;--a)s[a]=s[a+1]*t[a+1];return s}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(s=>this.normalizeAxis(s,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(s=>t[s]):t.slice().reverse()}static padShape(t,i){let s=t.length;return t.map((a,l)=>a+i[l]+i[l+s])}static areEqual(t,i){return t.length!==i.length?!1:t.every((s,a)=>s===i[a])}},kn=class Ji{static adjustPoolAttributes(t,i,s,a,l,u){if(!t&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let c=0;c<i.length-2;c++)c>=s.length?s.push(i[c+2]):s[c]=i[c+2];for(let c=0;c<s.length;c++)if(c<a.length){if(a[c]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let c=0;c<s.length;c++)if(c<l.length){if(l[c]<0)throw new Error("dilations should be greater than or equal to 1")}else l.push(1);for(let c=0;c<s.length*2;c++)if(c<u.length){if(u[c]<0)throw new Error("pad should be greater than or equal to 1")}else u.push(0);for(let c=0;c<s.length;c++){if(s[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(u[c]>=s[c]||u[c+s.length]>=s[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,s,a,l,u,c){if(c){if(l.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<t.length-2;f++)Ji.adjustPadAndReturnShape(t[f+(u?1:2)],i[f],s[f],a[f],l,f,f+t.length-2,c)}}static computePoolOutputShape(t,i,s,a,l,u,c){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let f=[i[0],i[1]];return Ji.computeShapeHelper(t,i,f,s,a,l,u,c),f}static computeConvOutputShape(t,i,s,a,l,u,c){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[t[0],i[0]];return Ji.computeShapeHelper(!1,t,f,s,a,l,u,c),f}static computeShapeHelper(t,i,s,a,l,u,c,f){if(t)for(let h=0;h<i.length-2;h++)s.push(1);else for(let h=0;h<i.length-2;h++)s.push(Ji.adjustPadAndReturnShape(i[h+2],a[h],l[h],u[h],c,h,h+i.length-2,f))}static adjustPadAndReturnShape(t,i,s,a,l,u,c,f){let h=s*(a-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return l[u]=0,l[c]=0,Math.floor((t-h)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let g=((t+i-1)/i-1)*i+a-t;return l[u]=Math.floor(f==="SAME_LOWER"?(g+1)/2:g/2),l[c]=g-l[u],Math.floor((t+g-a)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+l[u]+l[c]-h)/i+1)}},Cl=class{static getShapeOfGemmResult(e,t,i,s,a){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let l,u,c;t?(l=e[1],u=e[0]):(l=e[0],u=e[1]);let f=-1;if(s?(c=i[0],f=1):(c=i[1],f=0),i[f]!==u)throw new Error("dimension mismatch");if(l<=0||c<=0||u<=0)throw new Error("invalid shape specified");if(a&&!fi.isValidBroadcast(a,[l,c]))throw new Error("gemm: invalid bias shape for broadcast");return[l,c,u]}},Ol=-34028234663852886e22,Al=34028234663852886e22}),Ns,zl=b(()=>{xe(),Ns=(e,t)=>new(En(t))(e)}),Fs,Vs,Ls,Rl,qs,Dl,Ws,Hs,js,Bl,Pl,A_=b(()=>{xe(),hr(),Fs=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Vs=(e,t)=>{if(t==="int32")return e;let i=Fs.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let s=i/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);let a=e.byteLength/s,l=new(En(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let u=new Int32Array(a);for(let c=0;c<a;c++){let f=l[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");u[c]=Number(f)}return new Uint8Array(u.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&l.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let u=Int32Array.from(l,Number);return new Uint8Array(u.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ls=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let a=BigInt64Array.from(s,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(s.some(l=>l<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(s,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(s.some(l=>l<-128||l>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(s,Number);return new Uint8Array(a.buffer)}case"uint8":{if(s.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(l=>l<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Rl=1,qs=()=>Rl++,Dl=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ws=(e,t)=>{let i=Fs.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((s,a)=>s*a)*i/8):0},Hs=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:i,tensor:s,dataType:a,shape:l,fallbackDataType:u}=e;this.sessionId=t,this.mlContext=i,this.mlTensor=s,this.dataType=a,this.tensorShape=l,this.fallbackDataType=u}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ws(this.dataType,this.tensorShape)}destroy(){Ue("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),i=Ls(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return i.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((s,a)=>s===i[a])}setIsDataConverted(e){this.isDataConverted=e}},js=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,s){let a=this.tensorManager.getMLContext(e),l;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(l=Dl.get(t),!l||!a.opSupportLimits().input.dataTypes.includes(l))throw new Error(`WebNN backend does not support data type: ${t}`);Ue("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${l}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,i))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Ws(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,u,!0,!0,l),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Vs(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ue("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,i;if(this.activeUpload){let s=(t=this.wrapper)!=null&&t.isDataConverted?Ls(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(s):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s);return}else return s.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Bl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=qs();return this.tensorTrackersById.set(e,new js(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,s,a){Ue("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${s}, copyOld: ${a}}`);let l=this.tensorTrackersById.get(t);if(!l)throw new Error("Tensor not found.");return l.ensureTensor(e,i,s,a)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){Ue("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,s){let a=this.getMLContext(e),l=qs(),u=new Hs({sessionId:e,context:a,tensor:t,dataType:i,shape:s});return this.tensorTrackersById.set(l,new js(this,u)),this.externalTensors.add(u),l}async getCachedTensor(e,t,i,s,a,l,u){let c=this.getMLContext(e);for(let[h,g]of this.freeTensors.entries())if(g.canReuseTensor(c,t,i)){Ue("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${u?`fallbackDataType: ${u},`:""} shape: ${i}`);let y=this.freeTensors.splice(h,1)[0];return y.sessionId=e,y}Ue("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${u?`fallbackDataType: ${u},`:""} shape: ${i}}`);let f=await c.createTensor({dataType:u??t,shape:i,dimensions:i,usage:s,writable:a,readable:l});return new Hs({sessionId:e,context:c,tensor:f,dataType:t,shape:i,fallbackDataType:u})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Pl=(...e)=>new Bl(...e)}),Ri,Ml,Ul,z_=b(()=>{xe(),Nr(),zl(),A_(),hr(),Ri=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ml=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),s=Object.keys(t).sort();return i.length===s.length&&i.every((a,l)=>a===s[l]&&e[a]===t[a])},Ul=class{constructor(e){this.tensorManager=Pl(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Us(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ue("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ue("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)Ue("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){let i=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let t=this.mlContextCache.findIndex(i=>Ml(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let s=this.mlContextCache.findIndex(a=>a.mlContext===t);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ue("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,s,a){let l=Ri.get(i);if(!l)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,l,s,a)}async createTemporaryTensor(e,t,i){Ue("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let s=Ri.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,s,i,!1);let l=this.temporarySessionTensorIds.get(e);return l?l.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ue("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return Ns(i,t)}}registerMLTensor(e,t,i,s){let a=Ri.get(i);if(!a)throw new Error(`Unsupported ONNX data type: ${i}`);let l=this.tensorManager.registerTensor(e,t,a,s);return Ue("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${s}} -> {tensorId: ${l}}`),l}registerMLConstant(e,t,i,s,a,l,u=!1){if(!l)throw new Error("External mounted files are not available.");let c=e;e.startsWith("./")&&(c=e.substring(2));let f=l.get(c);if(!f)throw new Error(`File with name ${c} not found in preloaded files.`);if(t+i>f.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let h=f.slice(t,t+i).buffer,g;switch(a.dataType){case"float32":g=new Float32Array(h);break;case"float16":g=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(h):new Uint16Array(h);break;case"int32":g=new Int32Array(h);break;case"uint32":g=new Uint32Array(h);break;case"int64":if(u){let y=Vs(new Uint8Array(h),"int64");g=new Int32Array(y.buffer),a.dataType="int32"}else g=new BigInt64Array(h);break;case"uint64":g=new BigUint64Array(h);break;case"int8":g=new Int8Array(h);break;case"int4":case"uint4":case"uint8":g=new Uint8Array(h);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Ue("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${u?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),s.constant(a,g)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}isGraphOutput(e,t){let i=this.sessionGraphOutputs.get(e);return i?i.includes(t):!1}isGraphInputOutputTypeSupported(e,t,i=!0){let s=this.mlContextBySessionId.get(e),a=Ri.get(Fr(t));return typeof a>"u"?!1:i?!!(s!=null&&s.opSupportLimits().input.dataTypes.includes(a)):!!(s!=null&&s.opSupportLimits().output.dataTypes.includes(a))}flush(){}}}),Gs=b(()=>{}),Ks,Cn,On,Nl,Fl,Zs,Xs,Vl,Ll,R_=b(()=>{hr(),Gs(),Ks=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Cn=[],On=e=>Math.ceil(Number(e)/16)*16,Nl=e=>{for(let t=0;t<Cn.length;t++){let i=Cn[t];if(e<=i)return i}return Math.ceil(e/16)*16},Fl=1,Zs=()=>Fl++,Xs=async(e,t,i,s)=>{let a=On(i),l=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let u=e.getCommandEncoder();e.endComputePass(),u.copyBufferToBuffer(t,0,l,0,a),e.flush(),await l.mapAsync(GPUMapMode.READ);let c=l.getMappedRange();if(s){let f=s();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{l.destroy()}},Vl=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ks)Cn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,s=t.byteOffset,a=t.byteLength,l=On(a),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(Number(u.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${a}`);let c=this.backend.device.createBuffer({mappedAtCreation:!0,size:l,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),f=c.getMappedRange();new Uint8Array(f).set(new Uint8Array(i,s,a)),c.unmap();let h=this.backend.device.createCommandEncoder();h.copyBufferToBuffer(c,0,u.gpuData.buffer,0,l),this.backend.device.queue.submit([h.finish()]),c.destroy(),Ue("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(t);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=On(i.originalSize),l=this.backend.getCommandEncoder();this.backend.endComputePass(),l.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,a)}registerExternalBuffer(e,t,i){let s;if(i){if(s=i[0],e===i[1])return Ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Zs();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:t}),Ue("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ue("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Nl(e),s,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,l=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||l){let c=(a?this.freeBuffers:this.freeUniformBuffers).get(i);c?c.length>0?s=c.pop():s=this.backend.device.createBuffer({size:i,usage:t}):s=this.backend.device.createBuffer({size:i,usage:t})}else s=this.backend.device.createBuffer({size:i,usage:t});let u={id:Zs(),type:0,buffer:s};return this.storageCache.set(u.id,{gpuData:u,originalSize:Number(e)}),Ue("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ue("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Xs(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ks.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ue("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Ll=(...e)=>new Vl(...e)}),ql,Le,Ye=b(()=>{ql=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Le=e=>new ql(e)}),hi,An,at,wt,he,Je,Qs,mi,Ir,pe,Di,W,de,Wl,Js,Hl,jl,Ce=b(()=>{xe(),ke(),hi=64,An=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},at=(e,t=1)=>{let i=An(e,t);return typeof i=="string"?i:i[0]},wt=(e,t=1)=>{let i=An(e,t);return typeof i=="string"?i:i[1]},he=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:N.computeStrides(i)})}),t},Je=e=>e%4===0?4:e%2===0?2:1,Qs=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,mi=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,Ir=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,pe=(e,t,i,s)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?s==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:s==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Di=(e,t,i,s,a)=>{let l=typeof i=="number",u=l?i:i.length,c=[...new Array(u).keys()],f=u<2?"u32":u<=4?`vec${u}<u32>`:`array<u32, ${u}>`,h=An(t,a),g=typeof h=="string"?h:h[1],y=typeof h=="string"?h:h[0],w={indices:f,value:g,storage:y,tensor:t},$=j=>typeof j=="string"?j:`${j}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=l?"uniforms.":"",I=`${S}${e}_shape`,E=`${S}${e}_strides`,T="";for(let j=0;j<u-1;j++)T+=`
    let dim${j} = current / ${pe(E,j,u)};
    let rest${j} = current % ${pe(E,j,u)};
    indices[${j}] = dim${j};
    current = rest${j};
    `;T+=`indices[${u-1}] = current;`;let z=u<2?"":`
  fn o2i_${e}(offset: u32) -> ${w.indices} {
    var indices: ${w.indices};
    var current = offset;
    ${T}
    return indices;
  }`,O=j=>(v.offsetToIndices=!0,u<2?j:`o2i_${e}(${j})`),R=[];if(u>=2)for(let j=u-1;j>=0;j--)R.push(`${pe(E,j,u)} * (indices[${j}])`);let U=u<2?"":`
  fn i2o_${e}(indices: ${w.indices}) -> u32 {
    return ${R.join("+")};
  }`,M=j=>(v.indicesToOffset=!0,u<2?j:`i2o_${e}(${j})`),V=(...j)=>u===0?"0u":`${w.indices}(${j.map($).join(",")})`,H=(j,ne)=>u<2?`${j}`:`${pe(j,ne,u)}`,te=(j,ne,_e)=>u<2?`${j}=${_e};`:`${pe(j,ne,u)}=${_e};`,be={},ce=(j,ne)=>{v.broadcastedIndicesToOffset=!0;let _e=`${ne.name}broadcastedIndicesTo${e}Offset`;if(_e in be)return`${_e}(${j})`;let ze=[];for(let Vt=u-1;Vt>=0;Vt--){let _i=ne.indicesGet("outputIndices",Vt+ne.rank-u);ze.push(`${H(E,Vt)} * (${_i} % ${H(I,Vt)})`)}return be[_e]=`fn ${_e}(outputIndices: ${ne.type.indices}) -> u32 {
             return ${ze.length>0?ze.join("+"):"0u"};
           }`,`${_e}(${j})`},ye=(j,ne)=>(()=>{if(w.storage===w.value)return`${e}[${j}]=${ne};`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`${e}[${j}]=vec2<u32>(u32(${ne}), select(0u, 0xFFFFFFFFu, ${ne} < 0));`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`${e}[${j}]=vec2<u32>(u32(${ne}), 0u);`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`${e}[${j}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ne}));`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Ne=j=>(()=>{if(w.storage===w.value)return`${e}[${j}]`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`i32(${e}[${j}].x)`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`u32(${e}[${j}].x)`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${j}] & 0xFFu), bool(${e}[${j}] & 0xFF00u), bool(${e}[${j}] & 0xFF0000u), bool(${e}[${j}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),Oe=u<2?"":`
  fn get_${e}ByIndices(indices: ${w.indices}) -> ${g} {
    return ${Ne(`i2o_${e}(indices)`)};
  }`,ge=u<2?"":(()=>{let j=c.map(_e=>`d${_e}: u32`).join(", "),ne=c.map(_e=>`d${_e}`).join(", ");return`
  fn get_${e}(${j}) -> ${g} {
    return get_${e}ByIndices(${V(ne)});
  }`})(),Ae=(...j)=>{if(j.length!==u)throw new Error(`indices length must be ${u}`);let ne=j.map($).join(",");return u===0?Ne("0u"):u===1?Ne(ne[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${ne})`)},me=j=>u<2?Ne(j):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${j})`),Se=u<2?"":`
  fn set_${e}ByIndices(indices: ${w.indices}, value: ${g}) {
    ${ye(`i2o_${e}(indices)`,"value")}
  }`,gt=u<2?"":(()=>{let j=c.map(_e=>`d${_e}: u32`).join(", "),ne=c.map(_e=>`d${_e}`).join(", ");return`
  fn set_${e}(${j}, value: ${g}) {
    set_${e}ByIndices(${V(ne)}, value);
  }`})();return{impl:()=>{let j=[],ne=!1;return v.offsetToIndices&&(j.push(z),ne=!0),v.indicesToOffset&&(j.push(U),ne=!0),v.broadcastedIndicesToOffset&&(Object.values(be).forEach(_e=>j.push(_e)),ne=!0),v.set&&(j.push(gt),ne=!0),v.setByIndices&&(j.push(Se),ne=!0),v.get&&(j.push(ge),ne=!0),v.getByIndices&&(j.push(Oe),ne=!0),!l&&ne&&j.unshift(`const ${I} = ${w.indices}(${i.join(",")});`,`const ${E} = ${w.indices}(${N.computeStrides(i).join(",")});`),j.join(`
`)},type:w,offsetToIndices:O,indicesToOffset:M,broadcastedIndicesToOffset:ce,indices:V,indicesGet:H,indicesSet:te,set:(...j)=>{if(j.length!==u+1)throw new Error(`indices length must be ${u}`);let ne=j[u];if(typeof ne!="string")throw new Error("value must be string");let _e=j.slice(0,u).map($).join(",");return u===0?ye("0u",ne):u===1?ye(_e[0],ne):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${_e}, ${ne})`)},setByOffset:ye,setByIndices:(j,ne)=>u<2?ye(j,ne):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${j}, ${ne});`),get:Ae,getByOffset:Ne,getByIndices:me,usage:s,name:e,strides:E,shape:I,rank:u}},W=(e,t,i,s=1)=>Di(e,t,i,"input",s),de=(e,t,i,s=1)=>Di(e,t,i,"output",s),Wl=(e,t,i)=>Di(e,t,i,"atomicOutput",1),Js=(e,t,i,s=1)=>Di(e,t,i,"internal",s),Hl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=hi){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,l=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,u=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*s}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${s})
  fn main(${l}) {
    ${u}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let a=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},jl=(e,t)=>new Hl(e,t)}),Gl,Ys,Kl,Zl,Xl,Ql,Ft,Jl,Yl,kr=b(()=>{xe(),ke(),Ye(),Ce(),Gl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ys=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Kl=(e,t)=>N.sortBasedOnPerm(e,Ys(e.length,t)),Zl=(e,t,i,s)=>{let a=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let l=0;l<t;++l)a+=`a[${e[l]}]=i[${l}];`;return a+="return a;}"},Xl=(e,t)=>{let i=[],s=[];for(let a=0;a<e.length;++a)e[a]!==1&&i.push(e[a]),e[t[a]]!==1&&s.push(t[a]);return{newShape:i,newPerm:s}},Ql=(e,t)=>{let i=0;for(let s=0;s<e.length;++s)if(t[e[s]]!==1){if(e[s]<i)return!1;i=e[s]}return!0},Ft=(e,t)=>{let i=e.dataType,s=e.dims.length,a=Ys(s,t),l=Kl(e.dims,a),u=e.dims,c=l,f=s<2||Ql(a,e.dims),h;if(f)return h=v=>{let S=W("input",i,u,4),I=de("output",i,c,4);return`
  ${v.registerUniform("output_size","u32").declareVariables(S,I)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=N.size(l);return{outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(v/4)}]}},getShaderSource:h};let{newShape:g,newPerm:y}=Xl(e.dims,a),w=N.areEqual(y,[2,3,1]),$=N.areEqual(y,[3,1,2]);if(g.length===2||w||$){u=w?[g[0],g[1]*g[2]]:$?[g[0]*g[1],g[2]]:g,c=[u[1],u[0]];let v=16;return h=S=>{let I=W("a",i,u.length),E=de("output",i,c.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(I,E)}
  var<workgroup> tile : array<array<${E.type.value}, ${v+1}>, ${v}>;
  ${S.mainStart([v,v,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${v} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${v}u + local_id.x;
    let input_row = workgroup_id_x * ${v}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${I.getByIndices(`${I.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${v}u + local_id.x;
    let output_row = workgroup_id_y * ${v}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${E.setByIndices(`${E.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=N.size(l);return{outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c[1]/v),y:Math.ceil(c[0]/v)},programUniforms:[{type:12,data:S},...he(u,c)]}},getShaderSource:h}}return h=v=>{let S=W("a",i,u.length),I=de("output",i,c.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(S,I)}

  ${Zl(a,s,S,I)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=N.size(l);return{outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...he(u,c)]}},getShaderSource:h}},Jl=(e,t)=>{Gl(e.inputs,t.perm),e.compute(Ft(e.inputs[0],t.perm))},Yl=e=>Le({perm:e.perm})}),eu,tu,ru,iu,nu,su,au,ou,lu,uu,jt,du,cu,pu,fu,hu,mu,gu,_u,yu,wu,D_=b(()=>{xe(),ke(),Ce(),ta(),kr(),eu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ru={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},iu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},nu=(e,t)=>{let i=[];for(let s=t-e;s<t;++s)i.push(s);return i},su=(e,t)=>{let i=[],s=e.length;for(let l=0;l<s;l++)t.indexOf(l)===-1&&i.push(e[l]);let a=t.map(l=>e[l]);return[i,a]},au=(e,t)=>{let i=e.length+t.length,s=[],a=0;for(let l=0;l<i;l++)t.indexOf(l)===-1?s.push(e[a++]):s.push(1);return s},ou=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},lu=(e,t)=>{let i=[];if(!ou(e,t)){for(let s=0;s<t;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},uu=(e,t,i,s,a,l,u)=>{let c=i[0].dims,f=N.size(l),h=N.size(u),g=W("_A",i[0].dataType,c),y=de("output",a,l),w=64;f===1&&(w=256);let $=`
          var<workgroup> aBestValues : array<f32, ${w}>;
       `,v=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(g,y)}
        ${$}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(w)}

          let outputIndex = global_idx / ${w};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ru[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${w}) {
           let candidate = f32(${g.getByOffset("offset + k")});
           bestValue = ${eu[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${w}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tu[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${y.setByOffset("outputIndex",`${s==="mean"?`${y.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${y.type.storage}(${iu[s]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${w}`,inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:f},programUniforms:[{type:12,data:h}]})}},jt=(e,t,i,s)=>{let a=e.inputs.length===1?i:ea(e.inputs,i),l=a.axes;l.length===0&&!a.noopWithEmptyAxes&&(l=e.inputs[0].dims.map(($,v)=>v));let u=N.normalizeAxes(l,e.inputs[0].dims.length),c=u,f=e.inputs[0],h=lu(c,e.inputs[0].dims.length);h.length>0&&(f=e.compute(Ft(e.inputs[0],h),{inputs:[0],outputs:[-1]})[0],c=nu(c.length,f.dims.length));let[g,y]=su(f.dims,c),w=g;a.keepDims&&(w=au(g,u)),e.compute(uu(t,a.cacheKey,[f],s,e.inputs[0].dataType,w,y),{inputs:[f]})},du=(e,t)=>{jt(e,"ReduceMeanShared",t,"mean")},cu=(e,t)=>{jt(e,"ReduceL1Shared",t,"l1")},pu=(e,t)=>{jt(e,"ReduceL2Shared",t,"l2")},fu=(e,t)=>{jt(e,"ReduceLogSumExpShared",t,"logSumExp")},hu=(e,t)=>{jt(e,"ReduceMaxShared",t,"max")},mu=(e,t)=>{jt(e,"ReduceMinShared",t,"min")},gu=(e,t)=>{jt(e,"ReduceProdShared",t,"prod")},_u=(e,t)=>{jt(e,"ReduceSumShared",t,"sum")},yu=(e,t)=>{jt(e,"ReduceSumSquareShared",t,"sumSquare")},wu=(e,t)=>{jt(e,"ReduceLogSumShared",t,"logSum")}}),Gt,bu,zn,ea,Kt,$u,vu,xu,Su,Tu,Eu,Iu,ku,Cu,Ou,Zt,Au,zu,Ru,Du,Bu,Pu,Mu,Uu,Nu,Fu,ta=b(()=>{xe(),ke(),Ye(),Ce(),D_(),Gt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},bu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],zn=(e,t,i,s,a,l,u=!1,c=!1)=>{let f=[],h=i[0].dims,g=h.length,y=N.normalizeAxes(a,g),w=!c&&y.length===0;h.forEach((S,I)=>{w||y.indexOf(I)>=0?u&&f.push(1):f.push(S)});let $=f.length,v=N.size(f);return{name:e,shaderCache:t,getShaderSource:S=>{let I=[],E=W("_A",i[0].dataType,g),T=de("output",l,$),z=s(E,T,y),O=z[2];for(let R=0,U=0;R<g;R++)w||y.indexOf(R)>=0?(u&&U++,O=`for(var j${R}: u32 = 0; j${R} < ${h[R]}; j${R}++) {
                  ${z[2].includes("last_index")?`let last_index = j${R};`:""}
                  ${E.indicesSet("input_indices",R,`j${R}`)}
                  ${O}
                }`):(I.push(`${E.indicesSet("input_indices",R,T.indicesGet("output_indices",U))};`),U++);return`

        ${S.registerUniform("output_size","u32").declareVariables(E,T)}

        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${E.type.indices};
          let output_indices = ${T.offsetToIndices("global_idx")};

          ${I.join(`
`)}
          ${z[0]}       // init ops for reduce max/min
          ${z[1]}
          ${O}
          ${z[3]}
          ${z.length===4?T.setByOffset("global_idx","value"):z.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:l}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...he(h,f)]})}},ea=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Le({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Kt=(e,t,i,s)=>{let a=e.inputs,l=a.length===1?i:ea(a,i);e.compute(zn(t,{hint:l.cacheKey,inputDependencies:["rank"]},[a[0]],l.noopWithEmptyAxes&&l.axes.length===0?bu:s,l.axes,a[0].dataType,l.keepDims,l.noopWithEmptyAxes),{inputs:[0]})},$u=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceLogSum",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},vu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceL1",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},xu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceL2",t,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Su=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceLogSumExp",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},Tu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceMax",t,(i,s,a)=>{let l=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&l.push(i.indicesSet("input_indices",u,0));return[`${l.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},Eu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceMean",t,(i,s,a)=>{let l=1;for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&(l*=e.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${l});`]})},Iu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceMin",t,(i,s,a)=>{let l=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&l.push(`input_indices[${u}] = 0;`);return[`${l.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},ku=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceProd",t,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},Cu=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceSum",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},Ou=(e,t)=>{Gt(e.inputs),Kt(e,"ReduceSumSquare",t,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Zt=(e,t,i)=>{if(t.length===0)return i;let s=1,a=1;for(let l=0;l<t.length;l++)t.indexOf(l)===-1?s*=e[l]:a*=e[l];return a<32&&s>1024},Au=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eu(e,t):du(e,t)},zu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):cu(e,t)},Ru=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):pu(e,t)},Du=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Su(e,t):fu(e,t)},Bu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tu(e,t):hu(e,t)},Pu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):mu(e,t)},Mu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ku(e,t):gu(e,t)},Uu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):_u(e,t)},Nu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ou(e,t):yu(e,t)},Fu=(e,t)=>{Zt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$u(e,t):wu(e,t)}}),ra,Vu,Lu,ia,B_=b(()=>{xe(),Ye(),ta(),ra=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Vu=(e,t)=>{ra(e.inputs);let i=(s,a,l)=>{let u=[];for(let c=0;c<s.rank;c++)(l.indexOf(c)>=0||l.length===0)&&u.push(`input_indices[${c}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(zn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Lu=(e,t)=>{ra(e.inputs);let i=(s,a,l)=>{let u=[];for(let c=0;c<s.rank;c++)(l.indexOf(c)>=0||l.length===0)&&u.push(`input_indices[${c}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(zn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},ia=e=>Le(e)}),qu,Rn,Wu,Hu,ju,Bi,Gu,Ku,na=b(()=>{xe(),ke(),Gs(),Ce(),qu=(e,t)=>{let i=e[0],s=e[1],a=e[2],l=e[3],u=e[4],c=e[5];if(u&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],h=i.dims[1],g=i.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==g)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let y=a.dims[0]/3,w=y,$=w;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let z of t.qkvHiddenSizes)if(z%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");y=t.qkvHiddenSizes[0],w=t.qkvHiddenSizes[1],$=t.qkvHiddenSizes[2]}let v=h;if(y!==w)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==y+w+$)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(u){if(w!==$)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(u.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(u.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(u.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(u.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(u.dims[4]!==w/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(S=u.dims[3])}let I=v+S,E=-1,T=0;if(l)throw new Error("Mask not supported");if(u)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[2]!==h||c.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:S,kvSequenceLength:v,totalSequenceLength:I,maxSequenceLength:E,inputHiddenSize:g,hiddenSize:y,vHiddenSize:$,headSize:Math.floor(y/t.numHeads),vHeadSize:Math.floor($/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Rn=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Wu=(e,t,i,s,a,l,u,c)=>{let f=Je(u?1:l),h=64,g=l/f;g<h&&(h=32);let y=Math.ceil(l/f/h),w=[{type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:a},{type:12,data:g},{type:12,data:y}],$=at(e.dataType,f),v=wt(1,f),S=["type"];u&&S.push("type"),c&&S.push("type");let I=E=>{let T=de("x",e.dataType,e.dims,f),z=[T],O=u?W("seq_lens",u.dataType,u.dims):void 0;O&&z.push(O);let R=c?W("total_sequence_length_input",c.dataType,c.dims):void 0;R&&z.push(R);let U=wt(e.dataType),M=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${h}>;
  var<workgroup> thread_sum: array<f32, ${h}>;
  ${E.registerUniforms(M).declareVariables(...z)}
  ${E.mainStart([h,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Rn(O,R,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${h}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${u?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${v}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${v}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(f){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${h}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${v}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${v}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(f){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${h}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${T.type.value}(${U}(1.0) / ${U}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${v}(x[offset + i]);
        x[offset + i] = ${T.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${u?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${T.type.value}(${U}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${h};${$};${f}`,inputDependencies:S},getShaderSource:I,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*i},programUniforms:w})}},Hu=(e,t,i,s,a,l,u,c,f)=>{let h=u+l.kvSequenceLength,g=[l.batchSize,l.numHeads,l.sequenceLength,h],y=e>1&&s,w=l.kvNumHeads?l.kvNumHeads:l.numHeads,$=y?[l.batchSize,w,h,l.headSize]:void 0,v=l.nReps?l.nReps:1,S=l.scale===0?1/Math.sqrt(l.headSize):l.scale,I=Je(l.headSize),E=l.headSize/I,T=12,z={x:Math.ceil(h/T),y:Math.ceil(l.sequenceLength/T),z:l.batchSize*l.numHeads},O=[{type:12,data:l.sequenceLength},{type:12,data:E},{type:12,data:h},{type:12,data:l.numHeads},{type:12,data:l.headSize},{type:1,data:S},{type:12,data:u},{type:12,data:l.kvSequenceLength},{type:12,data:v}],R=y&&s&&N.size(s.dims)>0,U=["type","type"];R&&U.push("type"),a&&U.push("type"),c&&U.push("type"),f&&U.push("type");let M=[{dims:g,dataType:t.dataType,gpuDataType:0}];y&&M.push({dims:$,dataType:t.dataType,gpuDataType:0});let V=H=>{let te=W("q",t.dataType,t.dims,I),be=W("key",i.dataType,i.dims,I),ce=[te,be];if(R){let Se=W("past_key",s.dataType,s.dims,I);ce.push(Se)}a&&ce.push(W("attention_bias",a.dataType,a.dims));let ye=c?W("seq_lens",c.dataType,c.dims):void 0;ye&&ce.push(ye);let Ne=f?W("total_sequence_length_input",f.dataType,f.dims):void 0;Ne&&ce.push(Ne);let Oe=de("output",t.dataType,g),ge=[Oe];y&&ge.push(de("present_key",t.dataType,$,I));let Ae=wt(1,I),me=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${T}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${T*T}>;
  var<workgroup> tileK: array<${te.type.storage}, ${T*T}>;
  ${H.registerUniforms(me).declareVariables(...ce,...ge)}
  ${H.mainStart([T,T,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${v===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${v===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Rn(ye,Ne,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${R&&y?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${y?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Ae}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${R&&y?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${y?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Ae}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(I){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${I}`)}})()};
        output[outputIdx] = ${Oe.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${I};${a!==void 0};${s!==void 0};${e}`,inputDependencies:U},getRunData:()=>({outputs:M,dispatchGroup:z,programUniforms:O}),getShaderSource:V}},ju=(e,t,i,s,a,l,u=void 0,c=void 0)=>{let f=l+a.kvSequenceLength,h=a.nReps?a.nReps:1,g=a.vHiddenSize*h,y=e>1&&s,w=a.kvNumHeads?a.kvNumHeads:a.numHeads,$=y?[a.batchSize,w,f,a.headSize]:void 0,v=[a.batchSize,a.sequenceLength,g],S=12,I={x:Math.ceil(a.vHeadSize/S),y:Math.ceil(a.sequenceLength/S),z:a.batchSize*a.numHeads},E=[{type:12,data:a.sequenceLength},{type:12,data:f},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:g},{type:12,data:l},{type:12,data:a.kvSequenceLength},{type:12,data:h}],T=y&&s&&N.size(s.dims)>0,z=["type","type"];T&&z.push("type"),u&&z.push("type"),c&&z.push("type");let O=[{dims:v,dataType:t.dataType,gpuDataType:0}];y&&O.push({dims:$,dataType:t.dataType,gpuDataType:0});let R=U=>{let M=W("probs",t.dataType,t.dims),V=W("v",i.dataType,i.dims),H=[M,V];T&&H.push(W("past_value",s.dataType,s.dims));let te=u?W("seq_lens",u.dataType,u.dims):void 0;u&&H.push(te);let be=c?W("total_sequence_length_input",c.dataType,c.dims):void 0;c&&H.push(be);let ce=[de("output",t.dataType,v)];y&&ce.push(de("present_value",t.dataType,$));let ye=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${M.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${M.type.value}, ${S*S}>;
  ${U.registerUniforms(ye).declareVariables(...H,...ce)}
  ${U.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${h===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${h===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Rn(te,be,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${T&&y?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${y?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${M.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${T&&y?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${y?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:O,dispatchGroup:I,programUniforms:E}),getShaderSource:R}},Bi=(e,t,i,s,a,l,u,c,f,h,g=void 0,y=void 0)=>{let w=Math.min(e.outputCount,1+(u?1:0)+(c?1:0)),$=w>1?h.pastSequenceLength:0,v=$+h.kvSequenceLength,S=f&&N.size(f.dims)>0?f:void 0,I=[t,i];w>1&&u&&N.size(u.dims)>0&&I.push(u),S&&I.push(S),g&&I.push(g),y&&I.push(y);let E=e.compute(Hu(w,t,i,u,S,h,$,g,y),{inputs:I,outputs:w>1?[-1,1]:[-1]})[0];e.compute(Wu(E,h.batchSize,h.numHeads,$,h.sequenceLength,v,g,y),{inputs:g&&y?[E,g,y]:[E],outputs:[]});let T=[E,s];w>1&&c&&N.size(c.dims)>0&&T.push(c),g&&T.push(g),y&&T.push(y),e.compute(ju(w,E,s,c,h,$,g,y),{inputs:T,outputs:w>1?[0,2]:[0]})},Gu=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],s=t.sequenceLength,a=t.inputHiddenSize,l=t.headSize,u=12,c={x:Math.ceil(t.headSize/u),y:Math.ceil(t.sequenceLength/u),z:t.batchSize*t.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],h=[{type:12,data:s},{type:12,data:a},{type:12,data:l},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],g=y=>{let w=de("output_q",f[0].dataType,i),$=de("output_k",f[0].dataType,i),v=de("output_v",f[0].dataType,i),S=W("input",f[0].dataType,f[0].dims),I=W("weight",f[1].dataType,f[1].dims),E=W("bias",f[2].dataType,f[2].dims),T=S.type.storage,z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileInput: array<${T}, ${u*u}>;
  var<workgroup> tileWeightQ: array<${T}, ${u*u}>;
  var<workgroup> tileWeightK: array<${T}, ${u*u}>;
  var<workgroup> tileWeightV: array<${T}, ${u*u}>;
  ${y.registerUniforms(z).declareVariables(S,I,E,w,$,v)}
  ${y.mainStart([u,u,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${T}(0);
    var valueK = ${T}(0);
    var valueV = ${T}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:h}),getShaderSource:g},{inputs:f,outputs:[-1,-1,-1]})},Ku=(e,t)=>{let i=qu(e.inputs,t),[s,a,l]=Gu(e,i);return Bi(e,s,a,l,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),Zu,Xu,Qu,Ju,P_=b(()=>{Re(),xe(),ke(),Ye(),Ce(),Zu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,a,l)=>{let u=a.length;if(u!==s.length)throw new Error(`${l}: num dimensions != ${u}`);a.forEach((c,f)=>{if(c!==s[f])throw new Error(`${l}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let s=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},Xu=(e,t)=>{let{epsilon:i,spatial:s,format:a}=t,l=e[0].dims,u=s?Je(l[l.length-1]):1,c=a==="NHWC"&&l.length>1?u:1,f=N.size(l)/u,h=s,g=h?l.length:l,y=W("x",e[0].dataType,e[0].dims,u),w=W("scale",e[1].dataType,e[1].dims,c),$=W("bias",e[2].dataType,e[2].dims,c),v=W("inputMean",e[3].dataType,e[3].dims,c),S=W("inputVar",e[4].dataType,e[4].dims,c),I=de("y",e[0].dataType,g,u),E=()=>{let z="";if(s)z=`let cOffset = ${l.length===1?"0u":a==="NHWC"?`outputIndices[${l.length-1}] / ${u}`:"outputIndices[1]"};`;else if(a==="NCHW")z=`
            ${I.indicesSet("outputIndices","0","0")}
            let cOffset = ${I.indicesToOffset("outputIndices")};`;else{z=`var cIndices = ${w.type.indices}(0);
                       cIndices[0] = outputIndices[${l.length-1}];`;for(let O=1;O<w.rank;O++)z+=`cIndices[${O}] = outputIndices[${O}];`;z+=`let cOffset = ${w.indicesToOffset("cIndices")};`}return z},T=z=>`
  const epsilon = ${i};
  ${z.registerUniform("outputSize","u32").declareVariables(y,w,$,v,S,I)}
  ${z.mainStart()}
  ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${I.offsetToIndices(`global_idx * ${u}`)};
    ${E()}
    let scale = ${w.getByOffset("cOffset")};
    let bias = ${$.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${y.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${I.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${s}_${u}`,inputDependencies:h?["rank","type","type","type","type"]:void 0},getShaderSource:T,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h?[{type:12,data:f},...he(l)]:[{type:12,data:f}]})}},Qu=e=>Le(e),Ju=(e,t)=>{let{inputs:i,outputCount:s}=e,a=Qu({...t,outputCount:s});if(Ee.webgpu.validateInputContent&&Zu(i,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Xu(i,a))}}),Yu,ed,td,M_=b(()=>{ke(),Ce(),Yu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ed=e=>{let t=e[0].dims,i=e[0].dims[2],s=N.size(t)/4,a=e[0].dataType,l=W("input",a,t,4),u=W("bias",a,[i],4),c=W("residual",a,t,4),f=de("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:h=>`
  const channels = ${i}u / 4;
  ${h.declareVariables(l,u,c,f)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${l.getByOffset("global_idx")}
      + ${u.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},td=e=>{Yu(e.inputs),e.compute(ed(e.inputs))}}),rd,Ve,id,nd,sd,ad,od,ld,ud,dd,cd,pd,fd,hd,md,gd,Pi,_d,Dn,yd,wd,bd,$d,vd,xd,Sd,Td,Ed,Id,kd,Cd,Od,Ad,zd,Rd,sa,Dd,aa,oa,Bd,Pd,Md,Ud,Nd,Fd,la=b(()=>{xe(),ke(),Ye(),Ce(),rd=(e,t,i,s,a,l,u)=>{let c=Math.ceil(t/4),f="";typeof a=="string"?f=`${a}(a)`:f=a("a");let h=W("inputData",i,[c],4),g=de("outputData",s,[c],4),y=[{name:"vec_size",type:"u32"}];return u&&y.push(...u),`
      ${e.registerUniforms(y).declareVariables(h,g)}

  ${l??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${h.getByOffset("global_idx")};
    ${g.setByOffset("global_idx",f)}
  }`},Ve=(e,t,i,s,a,l=e.dataType,u,c)=>{let f=[{type:12,data:Math.ceil(N.size(e.dims)/4)}];return u&&f.push(...u),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:h=>rd(h,N.size(e.dims),e.dataType,l,i,s,c),getRunData:h=>({outputs:[{dims:e.dims,dataType:l}],dispatchGroup:{x:Math.ceil(N.size(h[0].dims)/64/4)},programUniforms:f})}},id=e=>{e.compute(Ve(e.inputs[0],"Abs","abs"))},nd=e=>{e.compute(Ve(e.inputs[0],"Acos","acos"))},sd=e=>{e.compute(Ve(e.inputs[0],"Acosh","acosh"))},ad=e=>{e.compute(Ve(e.inputs[0],"Asin","asin"))},od=e=>{e.compute(Ve(e.inputs[0],"Asinh","asinh"))},ld=e=>{e.compute(Ve(e.inputs[0],"Atan","atan"))},ud=e=>{e.compute(Ve(e.inputs[0],"Atanh","atanh"))},dd=e=>Le(e),cd=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ve(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},pd=e=>{let t,i,s=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=s?e[1].getUint16Array()[0]:64511,i=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Le({min:t,max:i})},fd=(e,t)=>{let i=t||pd(e.inputs),s=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},hd=e=>{e.compute(Ve(e.inputs[0],"Ceil","ceil"))},md=e=>{e.compute(Ve(e.inputs[0],"Cos","cos"))},gd=e=>{e.compute(Ve(e.inputs[0],"Cosh","cosh"))},Pi=e=>Le(e),_d=(e,t)=>{let i=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,yd=e=>{let t=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Dn(t)))},wd=e=>{e.compute(Ve(e.inputs[0],"Exp","exp"))},bd=e=>{e.compute(Ve(e.inputs[0],"Floor","floor"))},$d=e=>{let t=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Dn(t)))},vd=(e,t)=>{let i=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},xd=e=>{e.compute(Ve(e.inputs[0],"Not",t=>`!${t}`))},Sd=e=>{e.compute(Ve(e.inputs[0],"Neg",t=>`-${t}`))},Td=e=>{e.compute(Ve(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Ed=e=>{let t=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Id=e=>{e.compute(Ve(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},kd=e=>Le(e),Cd=(e,t)=>{let i=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${s} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Od=e=>{e.compute(Ve(e.inputs[0],"Sin","sin"))},Ad=e=>{e.compute(Ve(e.inputs[0],"Sinh","sinh"))},zd=e=>{e.compute(Ve(e.inputs[0],"Sqrt","sqrt"))},Rd=e=>{e.compute(Ve(e.inputs[0],"Tan","tan"))},sa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Dd=e=>{e.compute(Ve(e.inputs[0],"Tanh",sa))},aa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${sa("v")};
}
`,oa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Bd=e=>{let t=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"FastGelu",oa,aa(t),void 0,e.inputs[0].dataType))},Pd=(e,t)=>{let i=wt(e.inputs[0].dataType);return e.compute(Ve(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Md=e=>{e.compute(Ve(e.inputs[0],"Log","log"))},Ud=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Nd=e=>`quick_gelu_impl(${e})`,Fd=(e,t)=>{let i=wt(e.inputs[0].dataType);e.compute(Ve(e.inputs[0],"QuickGelu",Nd,Ud(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Vd,Ld,qd,U_=b(()=>{ke(),Ce(),la(),Vd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ld=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=W("input",e[0].dataType,e[0].dims,4),s=W("bias",e[0].dataType,[e[0].dims[2]],4),a=de("output",e[0].dataType,t,4),l=N.size(t)/4,u=at(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${c.declareVariables(i,s,a)}

  ${Dn(u)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(l)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},qd=e=>{Vd(e.inputs),e.compute(Ld(e.inputs))}}),Wd,Hd,Xt,jd,Gd,Kd,Zd,Xd,Qd,Jd,Yd,ec,tc,N_=b(()=>{xe(),ke(),Ce(),Wd=(e,t,i,s,a,l,u,c,f,h,g,y)=>{let w,$;typeof c=="string"?w=$=(T,z)=>`${c}((${T}),(${z}))`:typeof c=="function"?w=$=c:(w=c.scalar,$=c.vector);let v=de("outputData",g,s.length,4),S=W("aData",f,t.length,4),I=W("bData",h,i.length,4),E;if(a)if(l){let T=N.size(t)===1,z=N.size(i)===1,O=t.length>0&&t[t.length-1]%4===0,R=i.length>0&&i[i.length-1]%4===0;T||z?E=v.setByOffset("global_idx",$(T?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),z?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"))):E=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${I.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",$(u||O?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,u||R?I.getByOffset("offsetB / 4u"):`${I.type.value}(${I.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else E=v.setByOffset("global_idx",$(S.getByOffset("global_idx"),I.getByOffset("global_idx")));else{if(!l)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let T=(z,O,R="")=>{let U=`aData[indexA${O}][componentA${O}]`,M=`bData[indexB${O}][componentB${O}]`;return`
            let outputIndices${O} = ${v.offsetToIndices(`global_idx * 4u + ${O}u`)};
            let offsetA${O} = ${S.broadcastedIndicesToOffset(`outputIndices${O}`,v)};
            let offsetB${O} = ${I.broadcastedIndicesToOffset(`outputIndices${O}`,v)};
            let indexA${O} = offsetA${O} / 4u;
            let indexB${O} = offsetB${O} / 4u;
            let componentA${O} = offsetA${O} % 4u;
            let componentB${O} = offsetB${O} % 4u;
            ${z}[${O}] = ${R}(${w(U,M)});
          `};g===9?E=`
            var data = vec4<u32>(0);
            ${T("data",0,"u32")}
            ${T("data",1,"u32")}
            ${T("data",2,"u32")}
            ${T("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:E=`
            ${T("outputData[global_idx]",0)}
            ${T("outputData[global_idx]",1)}
            ${T("outputData[global_idx]",2)}
            ${T("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(S,I,v)}

        ${y??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${E}
      }`},Hd=(e,t,i,s,a,l,u=i.dataType)=>{let c=i.dims.map(S=>Number(S)??1),f=s.dims.map(S=>Number(S)??1),h=!N.areEqual(c,f),g=c,y=N.size(c),w=!1,$=!1,v=[h];if(h){let S=fi.calcShape(c,f,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");g=S.slice(),y=N.size(g);let I=N.size(c)===1,E=N.size(f)===1,T=c.length>0&&c[c.length-1]%4===0,z=f.length>0&&f[f.length-1]%4===0;v.push(I),v.push(E),v.push(T),v.push(z);let O=1;for(let R=1;R<g.length;R++){let U=c[c.length-R],M=f[f.length-R];if(U===M)O*=U;else break}O%4===0?($=!0,w=!0):(I||E||T||z)&&(w=!0)}else w=!0;return v.push(w),{name:e,shaderCache:{hint:t+v.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>Wd(S,c,f,g,w,h,$,a,i.dataType,s.dataType,u,l),getRunData:()=>({outputs:[{dims:g,dataType:u}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(N.size(g)/4)},...he(c,f,g)]})}},Xt=(e,t,i,s,a,l)=>{e.compute(Hd(t,a??"",e.inputs[0],e.inputs[1],i,s,l))},jd=e=>{Xt(e,"Add",(t,i)=>`${t}+${i}`)},Gd=e=>{Xt(e,"Div",(t,i)=>`${t}/${i}`)},Kd=e=>{Xt(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},Zd=e=>{Xt(e,"Mul",(t,i)=>`${t}*${i}`)},Xd=e=>{let t=W("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Xt(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Qd=e=>{Xt(e,"Sub",(t,i)=>`${t}-${i}`)},Jd=e=>{Xt(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},Yd=e=>{Xt(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},ec=e=>{Xt(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},tc=e=>{Xt(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),rc,ic,nc,sc,ac,oc,F_=b(()=>{xe(),ke(),Ye(),Ce(),rc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],a=s.dataType,l=s.dims.length;e.forEach((u,c)=>{if(c!==i){if(u.dataType!==a)throw new Error("input tensors should be one type");if(u.dims.length!==l)throw new Error("input tensors should have the same shape");u.dims.forEach((f,h)=>{if(h!==t&&f!==s.dims[h])throw new Error("non concat dimensions must match")})}})},ic=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,nc=(e,t)=>{let i=e.length,s=[];for(let a=0;a<i;++a){let l=t.setByOffset("global_idx",e[a].getByIndices("indices"));i===1?s.push(l):a===0?s.push(`if (inputIndex == ${a}u) { ${l} }`):a===i-1?s.push(`else { ${l} }`):s.push(`else if (inputIndex == ${a}) { ${l} }`)}return s.join(`
`)},sc=(e,t,i,s)=>{let a=N.size(i),l=new Array(e.length),u=new Array(e.length),c=0,f=[],h=[],g=[{type:12,data:a}];for(let S=0;S<e.length;++S)c+=e[S].dims[t],l[S]=c,h.push(e[S].dims.length),u[S]=W(`input${S}`,s,h[S]),f.push("rank"),g.push({type:12,data:l[S]});for(let S=0;S<e.length;++S)g.push(...he(e[S].dims));g.push(...he(i));let y=de("output",s,i.length),w=y.indicesGet("indices",t),$=Array.from(Array(l.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),v=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let I=0;I<e.length;I++)S.registerUniform(`sizeInConcatAxis${I}`,"u32");return S.declareVariables(...u,y)})()}

  ${ic(l.length,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${y.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${w});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${l.length}u>(${$});
      ${w} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${nc(u,y)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g}),getShaderSource:v}},ac=(e,t)=>{let i=e.inputs,s=i[0].dims,a=N.normalizeAxis(t.axis,s.length);rc(i,a);let l=s.slice();l[a]=i.reduce((c,f)=>c+(f.dims.length>a?f.dims[a]:0),0);let u=i.filter(c=>N.size(c.dims)>0);e.compute(sc(u,a,l,i[0].dataType),{inputs:u})},oc=e=>Le({axis:e.axis})}),Lr,qr,Wr,ua,Hr=b(()=>{xe(),ke(),Lr=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},qr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Wr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ua=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:i,beta:s}}else if(t==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[Ol,Al];return{activation:t,clipMax:s,clipMin:i}}else if(t==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:i}}return{activation:t}}}),ut,lc,da=b(()=>{ut=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},lc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),uc,V_=b(()=>{uc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Mi,ca,pa=b(()=>{xe(),ke(),Ce(),Hr(),Mi=(e,t,i,s,a)=>{let l=s-i;return`
      ${Array.from({length:i}).map((u,c)=>`
      if (${pe(t.shape,c,t.rank)} != 1) {
        ${t.indicesSet(e,c,pe(a,c+l,s))}
      } else {
        ${t.indicesSet(e,c,0)}
      }`).join("")}
`},ca=(e,t,i,s,a=!1,l)=>{let u=e[0].dims,c=e[1].dims,f=u[u.length-2],h=c[c.length-1],g=u[u.length-1],y=Je(h),w=Je(g),$=Je(f),v=N.size(i)/y/$,S=e.length>2,I=s?s.slice(0,-2):i.slice(0,-2),E=[N.size(I),f,h],T=[{type:12,data:v},{type:12,data:f},{type:12,data:h},{type:12,data:g}];qr(t,T),T.push(...he(I,u,c)),S&&T.push(...he(e[2].dims)),T.push(...he(E));let z=O=>{let R=Js("batch_dims",e[0].dataType,I.length),U=W("a",e[0].dataType,u.length,w),M=W("b",e[1].dataType,c.length,y),V=de("output",e[0].dataType,E.length,y),H=at(V.type.tensor),te=Lr(t,V.type.value,H),be=[U,M],ce="";if(S){let Oe=a?y:1;be.push(W("bias",e[2].dataType,e[2].dims.length,Oe)),ce=`${a?`value += bias[col / ${Oe}];`:`value += ${V.type.value}(bias[row + i]);`}`}let ye=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Wr(t,ye);let Ne=()=>{let Oe=`var a_data: ${U.type.value};`;for(let ge=0;ge<w;ge++)Oe+=`
              let b_data${ge} = b[(b_offset + (k + ${ge}) * uniforms.N + col) / ${y}];`;for(let ge=0;ge<$;ge++){Oe+=`a_data = a[(a_offset + (row + ${ge}) * uniforms.K + k) / ${w}];`;for(let Ae=0;Ae<w;Ae++)Oe+=`
            values[${ge}] = fma(${M.type.value}(a_data${w===1?"":`[${Ae}]`}), b_data${Ae}, values[${ge}]);
`}return Oe};return`
  ${O.registerUniforms(ye).registerInternalVariables(R).declareVariables(...be,V)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${y})) * ${y};
    var index1 = global_idx / (uniforms.N / ${y});
    let stride1 = uniforms.M / ${$};
    let row = (index1 % stride1) * ${$};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${R.offsetToIndices("batch")};`}

    var a_indices: ${U.type.indices};
    ${Mi("a_indices",U,U.rank-2,R.rank,"batch_indices")}
    ${U.indicesSet("a_indices",U.rank-2,0)}
    ${U.indicesSet("a_indices",U.rank-1,0)}
    let a_offset = ${U.indicesToOffset("a_indices")};

    var b_indices: ${M.type.indices};
    ${Mi("b_indices",M,M.rank-2,R.rank,"batch_indices")}
    ${M.indicesSet("b_indices",M.rank-2,0)}
    ${M.indicesSet("b_indices",M.rank-1,0)}
    let b_offset = ${M.indicesToOffset("b_indices")};
    var values: array<${V.type.value}, ${$}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${w}) {
      ${Ne()}
    }
    for (var i = 0u; i < ${$}u; i++) {
      var value = values[i];
      ${ce}
      ${te}
      let cur_indices = ${V.type.indices}(batch, row + i, col);
      let offset = ${V.indicesToOffset("cur_indices")};
      ${V.setByOffset(`offset / ${y}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${y};${w};${$};${a}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:l?l(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:T}),getShaderSource:z}}}),dc,cc,fa,ha,pc,ma,fc,Bn,ga=b(()=>{xe(),ke(),Ce(),Hr(),pa(),da(),dc=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,cc=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,fa=(e,t,i="f32",s,a=!1,l=32,u=!1,c=32)=>{let f=t[1]*e[1],h=t[0]*e[0],g=a?f:l,y=a?l:f,w=g/t[0],$=l/t[1];if(!((a&&w===4&&e[1]===4||!a&&(w===3||w===4))&&g%t[0]===0&&l%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${w} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${w} must be 3 or 4.
  tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}. tileInner ${l} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${w}<${i}>, ${g/w}>, ${y}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${h/e[0]}>, ${l}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${w};
const tileInner = ${l};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${u?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${f};

  let num_tiles = ${u?`${Math.ceil(c/l)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${u?`i32(globalId.z) * ${c}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${$};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${dc(a,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${w===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${cc(a,w)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ha=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,pc=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ma=(e,t,i="f32",s,a=!1,l=32,u=!1,c=32,f=!1)=>{let h=e[1]*t[1],g=e[0]*t[0],y=a?h:l,w=a?l:h;if(!(w%t[1]===0&&y%t[0]===0&&l%t[1]===0))throw new Error(`tileAHight ${w} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${y} must be divisible by workgroupSize[0]${t[0]}, tileInner ${l} must be divisible by workgroupSize[1]${t[1]}`);let $=w/t[1],v=y/t[0],S=l/t[1],I=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${h};
    let globalColStart = i32(workgroupId.x) * ${g};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${w}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${t[0]}) {
          ${ha(a,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${l}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${h};

let tileRowA = i32(localId.y) * ${$};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${S};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ha(a,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${pc(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${y}>, ${w}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${g}>, ${l}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${l};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${u?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${u?`${Math.ceil(c/l)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${u?`i32(globalId.z) * ${c}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${I}
  }
`},fc=(e,t,i,s,a=!1)=>{let[l,u,c,f]=s,h=at(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${l.type.indices}) -> ${ut(e,h)} {
      var value = ${ut(e,h)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${u.type.indices};
        ${Mi("aIndices",u,u.rank-2,l.rank,"batchIndices")}
        ${u.indicesSet("aIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("aIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${l.type.indices}) -> ${ut(e,h)} {
      var value = ${ut(e,h)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${c.type.indices};
        ${Mi("bIndices",c,c.rank-2,l.rank,"batchIndices")}
        ${c.indicesSet("bIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("bIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ut(e,h)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${ut(e,h)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Bn=(e,t,i,s,a=!1,l)=>{let u=e[0].dims,c=e[1].dims,f=u.slice(0,-2),h=c.slice(0,-2),g=s?s.slice(0,-2):i.slice(0,-2),y=N.size(g),w=u[u.length-2],$=u[u.length-1],v=c[c.length-1],S=$%4===0&&v%4===0,I=w<=8?[4,1,1]:[4,4,1],E=[8,8,1],T=[Math.ceil(v/E[0]/I[0]),Math.ceil(w/E[1]/I[1]),Math.ceil(y/E[2]/I[2])],z=S?4:1,O=[...f,w,$/z],R=O.length,U=[...h,$,v/z],M=U.length,V=[y,w,v/z],H=[{type:6,data:w},{type:6,data:v},{type:6,data:$}];qr(t,H),H.push(...he(g,O,U));let te=["rank","rank"],be=e.length>2;be&&(H.push(...he(e[2].dims)),te.push("rank")),H.push(...he(V));let ce=ye=>{let Ne=g.length,Oe=Js("batchDims",e[0].dataType,Ne,1),ge=at(e[0].dataType),Ae=W("a",e[0].dataType,R,z),me=W("b",e[1].dataType,M,z),Se=de("result",e[0].dataType,V.length,z),gt=[Ae,me];if(be){let Vt=a?z:1;gt.push(W("bias",e[2].dataType,e[2].dims.length,Vt))}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Wr(t,j);let ne=at(Se.type.tensor),_e=Lr(t,Se.type.value,ne),ze=fc(z,be,_e,[Oe,Ae,me,Se],a);return`
  ${ye.registerUniforms(j).registerInternalVariables(Oe).declareVariables(...gt,Se)}
  ${ze}
  ${S?fa(I,E,ge,Oe):ma(I,E,ge,Oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${I};${t.activation};${S};${a}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:l?l(i):i,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:H}),getShaderSource:ce}}}),hc,mc,L_=b(()=>{xe(),hr(),Ce(),Hr(),da(),V_(),ga(),hc=(e,t,i,s,a=!1,l,u=4,c=4,f=4,h="f32")=>{let g=H=>{switch(H){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${h}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},y=H=>{switch(H){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},w=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,$=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",I=e?"row":"col",E=e?"col":"row",T=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${I} / outWidth;
    let outCol = ${I} % outWidth;

    let WRow = ${E} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${E} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${E} % inChannels;
    var resData = ${ut(u,h)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${S}) {
      ${w}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${g(u)}
    }
    return resData;`,z=e?t&&s?`
    let col = colIn * ${u};
    ${T}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${T}
    }
    return ${ut(u,h)}(0.0);`:s&&i?`
    let col = colIn * ${u};
    ${T}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${T}
    }
    return ${ut(u,h)}(0.0);`,O=e?s&&i?y(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y(c)}
    }
    return ${ut(c,h)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${y(c)}
    }
    return ${ut(c,h)}(0.0);`,R=ut(f,h),U=ut(e?u:c,h),M=ut(e?c:u,h),V=Lr(l,R,h);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${U} {
      ${e?z:O}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?O:z}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${R}) {
      let col = colIn * ${f};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${$}
      ${lc(a)}
      ${V}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},mc=(e,t,i,s,a,l,u,c,f)=>{let h=t.format==="NHWC",g=h?e[0].dims[3]:e[0].dims[1],y=i[0],w=h?i[2]:i[3],$=h?i[1]:i[2],v=h?i[3]:i[1],S=h&&(g%4===0||g%3===0)&&v%4===0,I=h?v:w*$,E=h?w*$:v,T=[8,8,1],z=s<=8?[4,1,1]:[4,4,1],O=[Math.ceil(I/T[0]/z[0]),Math.ceil(E/T[1]/z[1]),Math.ceil(y/T[2]/z[2])];Ue("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${O}`);let R=S?h&&g%4!==0?3:4:1,U=T[1]*z[1],M=T[0]*z[0],V=Math.max(T[0]*R,T[1]),H=s%U===0,te=a%M===0,be=l%V===0,ce=S?[R,4,4]:[1,1,1],ye=[{type:6,data:s},{type:6,data:a},{type:6,data:l},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];qr(t,ye),ye.push(...he(e[0].dims,e[1].dims));let Ne=["rank","rank"];u&&(ye.push(...he(e[2].dims)),Ne.push("rank")),ye.push(...he(i));let Oe=ge=>{let Ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Wr(t,Ae);let me=S?4:1,Se=at(e[0].dataType),gt=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${Se}>`:Se}) {
        result[flatIndex] = ${S?`vec4<${Se}>`:Se}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${Se}>`:Se}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,j=W("x",e[0].dataType,e[0].dims.length,R===3?1:R),ne=W("w",e[1].dataType,e[1].dims.length,me),_e=[j,ne],ze=de("result",e[0].dataType,i.length,me);if(u){let Vt=W("bias",e[2].dataType,e[2].dims.length,me);_e.push(Vt),gt+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${Se}>`:Se} {
          return bias[coords.${h?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${uc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ge.registerUniforms(Ae).declareVariables(..._e,ze)}
        ${gt}
        ${hc(h,H,te,be,u,t,ce[0],ce[1],ce[2],Se)}
        ${S?fa(z,T,Se,void 0,!h,V):ma(z,T,Se,void 0,!h,V,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${R};${S};${H};${te};${be};${U};${M};${V}`,inputDependencies:Ne},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:O[0],y:O[1],z:O[2]},programUniforms:ye}),getShaderSource:Oe}}}),gc,_a,Ui,_c,ya,yc,wc,bc,q_=b(()=>{xe(),hr(),ke(),Ce(),Hr(),da(),gc=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},_a=e=>typeof e=="number"?[e,e,e]:e,Ui=(e,t)=>t<=1?e:e+(e-1)*(t-1),_c=(e,t,i,s=1)=>{let a=Ui(t,s);return Math.floor((e[0]*(i-1)-i+a)/2)},ya=(e,t,i,s,a)=>{a==null&&(a=_c(e,t[0],s[0]));let l=[0,0,0,i];for(let u=0;u<3;u++)e[u]+2*a>=t[u]&&(l[u]=Math.trunc((e[u]-t[u]+2*a)/s[u]+1));return l},yc=(e,t,i,s,a,l,u,c,f,h)=>{let g,y,w,$;if(e==="VALID"&&(e=0),typeof e=="number"){g={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=ya([t,i,s,1],[c,f,h],1,[a,l,u],e);y=v[0],w=v[1],$=v[2]}else if(Array.isArray(e)){if(!e.every((S,I,E)=>S===E[0]))throw Error(`Unsupported padding parameter: ${e}`);g={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=ya([t,i,s,1],[c,f,h],1,[a,l,u],e[0]);y=v[0],w=v[1],$=v[2]}else if(e==="SAME_UPPER"){y=Math.ceil(t/a),w=Math.ceil(i/l),$=Math.ceil(s/u);let v=(y-1)*a+c-t,S=(w-1)*l+f-i,I=($-1)*u+h-s,E=Math.floor(v/2),T=v-E,z=Math.floor(S/2),O=S-z,R=Math.floor(I/2),U=I-R;g={top:z,bottom:O,left:R,right:U,front:E,back:T}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:g,outDepth:y,outHeight:w,outWidth:$}},wc=(e,t,i,s,a,l=!1,u="channelsLast")=>{let c,f,h,g,y;if(u==="channelsLast")[c,f,h,g,y]=e;else if(u==="channelsFirst")[c,y,f,h,g]=e;else throw new Error(`Unknown dataFormat ${u}`);let[w,,$,v,S]=t,[I,E,T]=_a(i),[z,O,R]=_a(s),U=Ui($,z),M=Ui(v,O),V=Ui(S,R),{padInfo:H,outDepth:te,outHeight:be,outWidth:ce}=yc(a,f,h,g,I,E,T,U,M,V),ye=l?w*y:w,Ne=[0,0,0,0,0];return u==="channelsFirst"?Ne=[c,ye,te,be,ce]:u==="channelsLast"&&(Ne=[c,te,be,ce,ye]),{batchSize:c,dataFormat:u,inDepth:f,inHeight:h,inWidth:g,inChannels:y,outDepth:te,outHeight:be,outWidth:ce,outChannels:ye,padInfo:H,strideDepth:I,strideHeight:E,strideWidth:T,filterDepth:$,filterHeight:v,filterWidth:S,effectiveFilterDepth:U,effectiveFilterHeight:M,effectiveFilterWidth:V,dilationDepth:z,dilationHeight:O,dilationWidth:R,inShape:e,outShape:Ne,filterShape:t}},bc=(e,t,i,s,a,l)=>{let u=l==="channelsLast";u?e[0].dims[3]:e[0].dims[1];let c=[64,1,1],f={x:i.map((I,E)=>E)},h=[Math.ceil(gc(f.x.map(I=>i[I]))/c[0]),1,1];Ue("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let g=1,y=N.size(i),w=[{type:12,data:y},{type:12,data:s},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];qr(t,w),w.push(...he(e[0].dims,e[1].dims));let $=["rank","rank"],v=e.length===3;v&&(w.push(...he(e[2].dims)),$.push("rank")),w.push(...he(i));let S=I=>{let E=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Wr(t,E);let T=1,z=at(e[0].dataType),O=W("x",e[0].dataType,e[0].dims.length,g),R=W("W",e[1].dataType,e[1].dims.length,T),U=[O,R],M=de("result",e[0].dataType,i.length,T),V="";if(v){let be=W("bias",e[2].dataType,e[2].dims.length,T);U.push(be),V+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${z} {
          return bias[${u?pe("coords",4,5):pe("coords",1,5)}];
        }`}let H=ut(g,z),te=Lr(t,H,z);return`
            ${V}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${O.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${R.getByIndices("aIndices")};
            }
          ${I.registerUniforms(E).declareVariables(...U,M)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${pe("coords",0,O.rank)};
              let d2 = ${u?pe("coords",O.rank-1,O.rank):pe("coords",1,O.rank)};
              let xFRCCorner = vec3<u32>(${u?pe("coords",1,O.rank):pe("coords",2,O.rank)},
              ${u?pe("coords",2,O.rank):pe("coords",3,O.rank)},
              ${u?pe("coords",3,O.rank):pe("coords",4,O.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${u?pe("uniforms.x_shape",1,O.rank):pe("uniforms.x_shape",2,O.rank)};
              let xShapeZ = ${u?pe("uniforms.x_shape",2,O.rank):pe("uniforms.x_shape",3,O.rank)};
              let xShapeW = ${u?pe("uniforms.x_shape",3,O.rank):pe("uniforms.x_shape",4,O.rank)};
              let xShapeU = ${u?pe("uniforms.x_shape",4,O.rank):pe("uniforms.x_shape",1,O.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${u?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${u?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${u?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${u?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${v?"value = value + getBiasByOutputCoords(coords)":""};
              ${te}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${u};${g};${v}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:w}),getShaderSource:S}}}),$c,vc,W_=b(()=>{xe(),ke(),Ce(),Hr(),$c=(e,t,i,s)=>{let a=e.length>2,l=a?"value += b[output_channel];":"",u=e[0].dims,c=e[1].dims,f=t.format==="NHWC",h=f?i[3]:i[1],g=h/t.group,y=f&&g>=4?Je(h):1,w=N.size(i)/y,$=[{type:12,data:w},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:g}];qr(t,$),$.push(...he(u,[c[0],c[1],c[2],c[3]/y]));let v=a?["rank","rank","rank"]:["rank","rank"];$.push(...he([i[0],i[1],i[2],i[3]/y]));let S=I=>{let E=de("output",e[0].dataType,i.length,y),T=at(E.type.tensor),z=Lr(t,E.type.value,T),O=W("x",e[0].dataType,u.length),R=W("w",e[1].dataType,c.length,y),U=[O,R];a&&U.push(W("b",e[2].dataType,e[2].dims,y));let M=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Wr(t,M);let V=f?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${O.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${R.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${O.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${R.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${I.registerUniforms(M).declareVariables(...U,E)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${E.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${f?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${f?1:2}], outputIndices[${f?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${y} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${f?2:1}];

    var value: ${E.type.value} = ${E.type.value}(0);
    ${V}
    ${l}
    ${z}
    ${E.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${y}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:$}),getShaderSource:S}},vc=(e,t,i,s)=>{let a=e.length>2,l=Je(i[3]),u=Je(i[2]),c=N.size(i)/l/u,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/l],h=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/l],g=[i[0],i[1],i[2],i[3]/l],y=[{type:12,data:c},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];qr(t,y),y.push(...he(f,h,g));let w=(u-1)*t.strides[1]+h[1],$=v=>{let S=de("output",e[0].dataType,g.length,l),I=at(S.type.tensor),E=Lr(t,S.type.value,I),T=W("x",e[0].dataType,f.length,l),z=W("w",e[1].dataType,h.length,l),O=[T,z];a&&O.push(W("b",e[2].dataType,e[2].dims,l));let R=a?"value += b[output_channel];":"",U=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Wr(t,U),`
  ${v.registerUniforms(U).declareVariables(...O,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${u}u;
    let col = (index1 % width1) * ${u}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${T.type.value}, ${w}>;
    var values: array<${S.type.value}, ${u}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${h[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${w}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${T.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${T.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${h[1]}; w_width++) {
          let w_val = ${z.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${u}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${u}u; i++) {
      var value = values[i];
      ${R}
      ${E}
      ${S.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${l};${u};${w};${h[0]};${h[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:$}}}),xc,Pn,Sc,Mn,wa,ba,Tc,Ec,$a,H_=b(()=>{ke(),L_(),q_(),ga(),W_(),Hr(),pa(),kr(),xc=(e,t,i,s,a,l)=>{let u=e[0],c=e.slice(l?1:2,l?3:4),f=c.length,h=t[0],g=t.slice(2).map((w,$)=>w+(w-1)*(i[$]-1)),y=c.map((w,$)=>w+s[$]+s[$+f]).map((w,$)=>Math.floor((w-g[$]+a[$])/a[$]));return y.splice(0,0,u),y.splice(l?3:1,0,h),y},Pn=[2,3,1,0],Sc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*t.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Mn=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let l=2;l<t[1].dims.length;++l)i[l-2]===0&&(i[l-2]=t[1].dims[l]);let s=e.pads.slice();kn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:i,pads:s}),a},wa=e=>{let t=ua(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,l=e.group,u=e.kernel_shape,c=e.pads,f=e.strides,h=e.w_is_const();return{autoPad:s,format:i,dilations:a,group:l,kernelShape:u,pads:c,strides:f,wIsConst:h,...t,cacheKey:`${e.format};${t.activation};`}},ba=(e,t,i,s)=>{let a=i.format==="NHWC",l=xc(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,a);if(i.group!==1){let U=[t[0]];if(a){let M=e.kernelCustomData.wT??e.compute(Ft(t[1],Pn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=M),U.push(M)}else U.push(t[1]);t.length===3&&U.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(vc(U,i,l,s),{inputs:U}):e.compute($c(U,i,l,s),{inputs:U});return}let u=t.length===3,c=t[0].dims[a?1:2],f=t[0].dims[a?2:3],h=t[0].dims[a?3:1],g=t[1].dims[2],y=t[1].dims[3],w=l[a?1:2],$=l[a?2:3],v=l[a?3:1],S=a&&g===c&&y===f&&i.pads[0]===0&&i.pads[1]===0;if(S||g===1&&y===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let U=l[0],M,V,H,te=[];if(a){let ye=e.kernelCustomData.wT??e.compute(Ft(t[1],Pn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ye),S){let Ne=c*f*h;M=t[0].reshape([1,U,Ne]),V=ye.reshape([1,Ne,v]),H=[1,U,v]}else M=t[0].reshape([U,c*f,h]),V=ye.reshape([1,h,v]),H=[U,w*$,v];te.push(M),te.push(V)}else M=t[0].reshape([U,h,c*f]),V=t[1].reshape([1,v,h]),H=[U,v,w*$],te.push(V),te.push(M);u&&te.push(t[2]);let be=H[2],ce=te[0].dims[te[0].dims.length-1];be<8&&ce<8?e.compute(ca(te,i,l,H,a,s),{inputs:te}):e.compute(Bn(te,i,l,H,a,s),{inputs:te});return}let I=!0,E=e.kernelCustomData.wT??e.compute(Ft(t[1],Pn),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E);let T=[t[0],E];u&&T.push(t[2]);let z=a?w*$:v,O=a?v:w*$,R=g*y*h;e.compute(mc(T,i,l,z,O,R,u,I,s),{inputs:T})},Tc=(e,t)=>{let i=t.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],l=[1].concat(t.strides),u=[1].concat(t.dilations),c=[1].concat(t.kernelShape),f=Mn({...t,pads:a,strides:l,dilations:u,kernelShape:c},s);ba(e,s,f,h=>i?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Ec=(e,t,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",a=Mn(i,t),l=i.autoPad==="NOTSET"?i.pads:i.autoPad,u=wc(t[0].dims,t[1].dims,i.strides,i.dilations,l,!1,s);e.compute(bc(t,a,u.outShape,[u.filterDepth,u.filterHeight,u.filterWidth],[u.padInfo.front,u.padInfo.top,u.padInfo.left],s))},$a=(e,t)=>{if(Sc(e.inputs,t),e.inputs[0].dims.length===3)Tc(e,t);else if(e.inputs[0].dims.length===5)Ec(e,e.inputs,t);else{let i=Mn(t,e.inputs);ba(e,e.inputs,i)}}}),Ic,j_=b(()=>{xe(),hr(),ke(),Ce(),Ic=(e,t,i)=>{let s=e.length>2,a=t.outputShape,l=t.format==="NHWC",u=t.group,c=e[1].dims,f=c[2]/u,h=c[3],g=l?Je(f):1,y=l&&h===1&&f>=4,w=y?Math.floor(f/4)*4:Math.floor(f/g)*g,$=f-w,v=l?Je(h):1,S=l?h===1?g:v:1,I=N.size(a)/v,E=[Math.ceil(I/64),1,1];Ue("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${E}`);let T=["rank","rank"],z=[t.strides[0],t.strides[1]],O=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],R=[t.dilations[0],t.dilations[1]],U=[O[0]+(t.dilations[0]<=1?0:(t.kernelShape[l?1:2]-1)*(t.dilations[0]-1)),O[1]+(t.dilations[1]<=1?0:(t.kernelShape[l?2:3]-1)*(t.dilations[1]-1))],M=[U[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),U[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],V=[{type:12,data:I},{type:12,data:z},{type:12,data:O},{type:12,data:R},{type:12,data:U},{type:6,data:M},{type:12,data:w},{type:12,data:f},{type:12,data:h},...he(e[0].dims,e[1].dims)];s&&(V.push(...he(e[2].dims)),T.push("rank")),V.push(...he(a));let H=te=>{let be=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:z.length},{name:"filter_dims",type:"u32",length:O.length},{name:"dilations",type:"u32",length:O.length},{name:"effective_filter_dims",type:"u32",length:U.length},{name:"pads",type:"i32",length:M.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ce=at(e[0].dataType),ye=l?1:2,Ne=l?2:3,Oe=l?3:1,ge=W("W",e[1].dataType,e[1].dims.length,S),Ae=W("Dy",e[0].dataType,e[0].dims.length,g),me=[Ae,ge];s&&me.push(W("bias",e[2].dataType,[a[Oe]].length,v));let Se=de("result",e[0].dataType,a.length,v),gt=()=>{let _e="";if(y)g===4?_e+=`
        let xValue = ${Ae.getByOffset("x_offset")};
        let wValue = ${ge.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:g===2?_e+=`
          dotProd = dotProd + dot(vec4<${ce}>(${Ae.getByOffset("x_offset")}, ${Ae.getByOffset("x_offset + 1u")}), vec4<${ce}>(${ge.getByOffset("w_offset")}, ${ge.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:g===1&&(_e+=`
          dotProd = dotProd + dot(vec4<${ce}>(${Ae.getByOffset("x_offset")}, ${Ae.getByOffset("x_offset + 1u")}, ${Ae.getByOffset("x_offset + 2u")}, ${Ae.getByOffset("x_offset + 3u")}), vec4<${ce}>(${ge.getByOffset("w_offset")}, ${ge.getByOffset("w_offset + 1u")}, ${ge.getByOffset("w_offset + 2u")}, ${ge.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(_e+=`
                  let xValue = ${l?Ae.getByOffset(`${Ae.indicesToOffset(`${Ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g}`):Ae.get("batch","inputChannel","idyR","idyC")};
        `,g===1)_e+=`
          let w_offset = ${ge.indicesToOffset(`${ge.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ge.getByOffset(`w_offset / ${S}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ze=0;ze<g;ze++)_e+=`
            let wValue${ze} = ${ge.getByOffset(`${ge.indicesToOffset(`${ge.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ze}, wOutChannel)`)} / ${S}`)};
            dotProd = dotProd + xValue[${ze}] * wValue${ze};`;return _e},j=()=>{if($===0)return"";if(!y)throw new Error(`packInputAs4 ${y} is not true.`);let _e="";if(g===1){_e+="dotProd = dotProd";for(let ze=0;ze<$;ze++)_e+=`
            + ${Ae.getByOffset(`x_offset + ${ze}`)} * ${ge.getByOffset(`w_offset + ${ze}`)}`;_e+=";"}else if(g===2){if($!==2)throw new Error(`Invalid inputChannelsRemainder ${$}.`);_e+=`
          let xValue = ${Ae.getByOffset("x_offset")};
          let wValue = ${ge.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return _e},ne=`
            let outputIndices = ${Se.offsetToIndices(`global_idx * ${v}`)};
            let batch = ${Se.indicesGet("outputIndices",0)};
            let d1 = ${Se.indicesGet("outputIndices",Oe)};
            let r = ${Se.indicesGet("outputIndices",ye)};
            let c = ${Se.indicesGet("outputIndices",Ne)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Se.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ce}(dyRCorner) + ${ce}(wR)) / ${ce}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ce}(uniforms.Dy_shape[${ye}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ce}(dyCCorner) + ${ce}(wC)) / ${ce}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ce}(uniforms.Dy_shape[${Ne}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${y?`
                var x_offset = ${Ae.indicesToOffset(`${Ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g};
                var w_offset = ${ge.indicesToOffset(`${ge.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${S};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${y?4:g}) {
                  ${gt()}
                  inputChannel = inputChannel + ${y?4:g};
                }
                ${j()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${s?` + bias[d1 / ${v}]`:""};
            ${Se.setByOffset("global_idx","value")};
          `;return`
    ${te.registerUniforms(be).declareVariables(...me,Se)}
      ${te.mainStart()}
      ${te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ne}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${g}${S}${v}${y}${$}`,inputDependencies:T},getRunData:()=>({dispatchGroup:{x:E[0],y:E[1],z:E[2]},outputs:[{dims:i?i(a):a,dataType:e[0].dataType}],programUniforms:V}),getShaderSource:H}}}),kc,Cc,Oc,va,Ac,zc,xa,Rc,Dc,G_=b(()=>{j_(),Hr(),kr(),kc=(e,t,i,s,a,l)=>(e-1)*t+i+(s-1)*a+1-l,Cc=(e,t,i,s,a)=>{let l=Math.floor(e/2);t==="SAME_UPPER"?(i[s]=l,i[a]=e-l):t==="SAME_LOWER"&&(i[s]=e-l,i[a]=l)},Oc=(e,t,i,s,a,l,u,c,f,h)=>{let g=e.length-2,y=h.length===0;f.length<g&&f.push(...Array(g-f.length).fill(0));let w=e[0],$=t[c?3:1]*a;for(let v=0,S=e.length-g-(c?1:0);v<g;++v,++S){let I=e[S],E=y?I*u[v]:h[v],T=kc(I,u[v],l[v],t[S],i[v],E);Cc(T,s,l,v,v+g),y&&h.push(u[v]*(I-1)+f[v]+(t[S]-1)*i[v]+1-l[v]-l[v+g])}h.splice(0,0,w),h.splice(c?3:1,0,$)},va=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((y,w)=>y*w,1)===0){i.length=0;for(let y=2;y<t[1].dims.length;++y)i.push(t[1].dims[y])}let s=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(s?3:1,0,t[1].dims[1]);let a=e.pads.slice(),l=e.outputShape.slice(),u=e.outputPadding.slice(),c=t[0].dims,f=e.dilations.slice();if(f.reduce((y,w)=>y+w,0)===0){let y=t[0].dims.length-2;f=new Array(y).fill(1)}let h=e.strides.slice();if(h.reduce((y,w)=>y+w,0)===0){let y=t[0].dims.length-2;h=new Array(y).fill(1)}Oc(c,i,f,e.autoPad,e.group,a,h,s,u,l);let g=Object.assign({},e);return Object.assign(g,{kernelShape:i,pads:a,outputPadding:u,outputShape:l,dilations:f,strides:h}),g},Ac=e=>{let t=ua(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,l=e.group,u=e.kernelShape,c=e.pads,f=e.strides,h=e.wIsConst(),g=e.outputPadding,y=e.outputShape;return{autoPad:s,format:i,dilations:a,group:l,kernelShape:u,outputPadding:g,outputShape:y,pads:c,strides:f,wIsConst:h,...t,cacheKey:`${e.format};${t.activation};`}},zc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let l=e[0].dims.length-2;if(t.dilations.reduce((u,c)=>u+c,0)>0&&t.dilations.length!==l)throw new Error(`dilations should be ${l}D`);if(t.strides.reduce((u,c)=>u+c,0)>0&&t.strides.length!==l)throw new Error(`strides should be ${l}D`);if(t.pads.reduce((u,c)=>u+c,0)>0&&t.pads.length!==l*2)throw new Error(`pads should be ${l*2}D`);if(t.outputPadding.length!==l&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${l}D`);if(t.kernelShape.reduce((u,c)=>u+c,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},xa=(e,t,i,s)=>{let a=e.kernelCustomData.wT??e.compute(Ft(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let l=[t[0],a];t.length===3&&l.push(t[2]),e.compute(Ic(l,i,s),{inputs:l})},Rc=(e,t)=>{let i=t.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let l=t.dilations;(l.length===0||l[0]===0)&&(l=[1]);let u=t.strides;(u.length===0||u[0]===0)&&(u=[1]);let c=t.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],u=[1].concat(u),l=[1].concat(l),a=[1].concat(a);let f=t.outputPadding;f=[0].concat(f);let h=va({...t,pads:c,strides:u,dilations:l,kernelShape:a,outputPadding:f},s);xa(e,s,h,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Dc=(e,t)=>{if(zc(e.inputs,t),e.inputs[0].dims.length===3)Rc(e,t);else{let i=va(t,e.inputs);xa(e,e.inputs,i)}}}),Bc,Pc,Mc,K_=b(()=>{xe(),ke(),Ye(),Ce(),Bc=(e,t,i,s)=>{let a=N.size(t),l=t.length,u=W("input",e,l),c=de("output",e,l),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),h=N.normalizeAxis(f,l),g=y=>{let w=` i32(${u.indicesGet("inputIndices","uniforms.axis")}) `,$=pe("uniforms.input_shape","uniforms.axis",l),v=s.reverse?w+(s.exclusive?" + 1":""):"0",S=s.reverse?$:w+(s.exclusive?"":" + 1");return`
                ${y.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(u,c)}
                ${y.mainStart()}
                  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${c.offsetToIndices("global_idx")};
                  var sum = ${c.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${S};
                  for (var i : i32 = first; i < last; i++) {
                    ${u.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${u.getByIndices("inputIndices")};
                  }
                  ${c.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:h},...he(t,t)]}),getShaderSource:g}},Pc=(e,t)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,a=e.inputs[1];e.compute(Bc(s,i,a,t),{inputs:[0]})},Mc=e=>{let t=e.exclusive===1,i=e.reverse===1;return Le({exclusive:t,reverse:i})}}),Uc,Nc,Fc,Vc,Lc,Z_=b(()=>{xe(),ke(),Ye(),Ce(),Uc=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Nc=(e,t,i,s)=>{let a=[];a.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let l=0;l<t;++l)a.push(i.indicesSet("a",e[l],`i[${l}]`));return a.push("return a;}"),a.join(`
`)},Fc=(e,t)=>{let i,s,a,l,u,c,f=t.format==="NHWC",h=t.blocksize,g=t.mode==="DCR";f?([i,s,a,l]=e.dims,u=g?[i,s,a,h,h,l/h**2]:[i,s,a,l/h**2,h,h],c=g?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,a,l]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],u=g?[i,h,h,l/h**2,s,a]:[i,l/h**2,h,h,s,a],c=g?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let y=e.reshape(u),w=y.dims.length,$=e.dataType,v=W("a",$,w),S=de("output",$,w),I=E=>`
  ${E.registerUniform("output_size","u32").declareVariables(v,S)}

  ${Nc(c,w,v,S)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:E=>{let T=f?[i,s*h,a*h,l/h**2]:[i,l/h**2,s*h,a*h],z=N.size(T),O=y.dims,R=N.sortBasedOnPerm(O,c);return{outputs:[{dims:T,dataType:E[0].dataType}],dispatchGroup:{x:Math.ceil(z/64)},programUniforms:[{type:12,data:z},...he(O,R)]}},getShaderSource:I}},Vc=(e,t)=>{Uc(e.inputs),e.compute(Fc(e.inputs[0],t))},Lc=e=>Le({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Un,Ni,Sa,qc,Wc,Hc,jc,Ta,Gc,Kc,Zc,X_=b(()=>{xe(),ke(),Ye(),Ce(),Un="[a-zA-Z]|\\.\\.\\.",Ni="("+Un+")+",Sa="^"+Ni+"$",qc="("+Ni+",)*"+Ni,Wc="^"+qc+"$",Hc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},jc=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(Wc)))throw new Error("Invalid LHS term");if(i.split(",").forEach((l,u)=>{let c=e[u].dims.slice();if(!l.match(RegExp(Sa)))throw new Error("Invalid LHS term");let f=this.processTerm(l,!0,c,u);this.lhs.push(f)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([l,u])=>u.count===1||l==="...").map(([l])=>l).join("");else if(!s.match(RegExp(Ni)))throw new Error("Invalid RHS");(a=s.match(RegExp(Un,"g")))==null||a.forEach(l=>{if(l==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let u=this.symbolToInfo.get(l);if(u===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(u.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,t,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==t&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,t,i,s=-1){let a=i.length,l=!1,u=[],c=0;if(!e.match(RegExp(Sa))&&!t&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Un,"g")),h=new Hc(s);return f==null||f.forEach((g,y)=>{if(g==="..."){if(l)throw new Error("Only one ellipsis is allowed per input term");l=!0;let w=a-f.length+1;if(w<0)throw new Error("Ellipsis out of bounds");if(u=i.slice(c,c+w),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let $=0;$<u.length;$++){let v=String.fromCharCode(48+$);h.addSymbol(v,y+$),this.addSymbol(v,i[c++],s)}}else h.addSymbol(g,y+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(g,i[c++],s)}),h}},Ta=e=>e+"_max",Gc=(e,t,i,s)=>{let a=e.map(h=>h.length).map((h,g)=>W(`input${g}`,t,h)),l=N.size(s),u=de("output",t,s.length),c=[...i.symbolToInfo.keys()].filter(h=>!i.rhs.symbolToIndices.has(h)),f=h=>{let g=[],y="var prod = 1.0;",w="var sum = 0.0;",$="sum += prod;",v=[],S=[],I=[],E=[],T=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((O,R)=>{var U;if(i.rhs.symbolToIndices.has(R)){let M=(U=i.rhs.symbolToIndices.get(R))==null?void 0:U[0];M!==void 0&&i.lhs.forEach((V,H)=>{if(O.inputIndices.includes(H)){let te=V.symbolToIndices.get(R);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(be=>{g.push(`${a[H].indicesSet(`input${H}Indices`,be,u.indicesGet("outputIndices",M))}`)})}})}else i.lhs.forEach((M,V)=>{if(O.inputIndices.includes(V)){let H=M.symbolToIndices.get(R);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(te=>{v.push(`${a[V].indicesSet(`input${V}Indices`,te,`${R}`)}`)}),E.push(`prod *= ${a[V].getByIndices(`input${V}Indices`)};`)}}),S.push(`for(var ${R}: u32 = 0; ${R} < uniforms.${Ta(R)}; ${R}++) {`),I.push("}")});let z=T?[...g,`let sum = ${a.map((O,R)=>O.getByIndices(`input${R}Indices`)).join(" * ")};`]:[...g,w,...S,...v,y,...E,$,...I];return`
            ${h.registerUniforms(c.map(O=>({name:`${Ta(O)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,u)}

            ${h.mainStart()}
            ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${a.map((O,R)=>`var input${R}Indices: ${a[R].type.indices};`).join(`
`)}
            ${z.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let h=c.filter(y=>i.symbolToInfo.has(y)).map(y=>{var w;return{type:12,data:((w=i.symbolToInfo.get(y))==null?void 0:w.dimValue)||0}});h.push({type:12,data:l});let g=e.map((y,w)=>[...he(y)]).reduce((y,w)=>y.concat(w),h);return g.push(...he(s)),{outputs:[{dims:s,dataType:t}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}},getShaderSource:f}},Kc=(e,t)=>{let i=new jc(e.inputs,t.equation),s=i.outputDims,a=e.inputs.map((l,u)=>l.dims);e.compute(Gc(a,e.inputs[0].dataType,i,s))},Zc=e=>{let t=e.equation.replace(/\s+/g,"");return Le({equation:t})}}),Xc,Ea,Qc,Jc,Yc,Q_=b(()=>{xe(),ke(),Ce(),Xc=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<t.length?0:i.length-t.length,a=t.length<i.length?0:t.length-i.length;for(;s<i.length&&a<t.length;++s,++a)if(i[s]!==t[a]&&i[s]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ea=(e,t)=>{let i=e.length-t.length,s=[];for(let a=0;a<i;++a)s.push(e[a]);for(let a=0;a<t.length;++a)s.push(t[a]===1?e[a+i]:t[a]);return s},Qc=(e,t)=>e.length>t.length?Ea(e,t):Ea(t,e),Jc=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=Qc(t,i),a=e[0].dataType,l=a===9||N.size(t)===1,u=a===9||t.length>0&&t[t.length-1]%4===0?4:1,c=l||s.length>0&&s[s.length-1]%4===0?4:1,f=Math.ceil(N.size(s)/c),h=y=>{let w=W("input",a,t.length,u),$=de("output",a,s.length,c),v;if(a===9){let S=(I,E,T="")=>`
          let outputIndices${E} = ${$.offsetToIndices(`outputOffset + ${E}u`)};
          let offset${E} = ${w.broadcastedIndicesToOffset(`outputIndices${E}`,$)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${I}[${E}] = ${T}(${w.getByOffset(`index${E}`)}[component${E}]);
        `;v=`
        let outputOffset = global_idx * ${c};
        var data = vec4<u32>(0);
        ${S("data",0,"u32")}
        ${S("data",1,"u32")}
        ${S("data",2,"u32")}
        ${S("data",3,"u32")}
        ${$.setByOffset("global_idx","data")}
      }`}else v=`
        let outputIndices = ${$.offsetToIndices(`global_idx * ${c}`)};
        let inputOffset = ${w.broadcastedIndicesToOffset("outputIndices",$)};
        let data = ${$.type.value}(${w.getByOffset(`inputOffset / ${u}`)});
        ${$.setByOffset("global_idx","data")}
      }`;return`
    ${y.registerUniform("vec_size","u32").declareVariables(w,$)}
    ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${v}`},g=[{type:12,data:f},...he(t,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${u}${c}`,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g})}},Yc=e=>{Xc(e.inputs),e.compute(Jc(e.inputs),{inputs:[0]})}}),ep,tp,J_=b(()=>{xe(),ke(),Ce(),la(),ep=e=>{let t=e[0].dataType,i=N.size(e[0].dims),s=N.size(e[1].dims),a=s%4===0,l=u=>{let c=W("x",t,[1],4),f=W("bias",t,[1],4),h=de("y",t,[1],4),g=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],y=$=>`
      let bias${$}_offset: u32 = (global_idx * 4 + ${$}) % uniforms.bias_size;
      let bias${$} = ${f.getByOffset(`bias${$}_offset / 4`)}[bias${$}_offset % 4];`,w=a?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${y(0)}${y(1)}${y(2)}${y(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${u.registerUniforms(g).declareVariables(c,f,h)}

    ${aa(wt(t))}

    ${u.mainStart(hi)}
      ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${w}
      let x_in = x + bias;
      ${h.setByOffset("global_idx",oa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:l,getRunData:u=>({outputs:[{dims:u[0].dims,dataType:u[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/hi/4)}})}},tp=e=>{e.inputs.length<2||N.size(e.inputs[1].dims)===0?Bd(e):e.compute(ep(e.inputs))}}),rp,ip,np,sp,Y_=b(()=>{xe(),ke(),Ye(),Ce(),rp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ip=(e,t)=>{let i=e[0].dims,s=e[1].dims,a=i.length,l=N.normalizeAxis(t.axis,a),u=i.slice(0);u.splice(l,1,...s);let c=i[l],f=e[0].dataType===9?4:1,h=Math.ceil(N.size(u)/f),g=[{type:12,data:h},{type:6,data:c},{type:12,data:l},...he(e[0].dims,e[1].dims,u)],y=w=>{let $=W("data",e[0].dataType,e[0].dims.length,f),v=W("inputIndices",e[1].dataType,e[1].dims.length),S=de("output",e[0].dataType,u.length,f),I=T=>{let z=s.length,O=`var indicesIndices${T}  = ${v.type.indices}(0);`;for(let R=0;R<z;R++)O+=`${z>1?`indicesIndices${T}[${R}]`:`indicesIndices${T}`} = ${u.length>1?`outputIndices${T}[uniforms.axis + ${R}]`:`outputIndices${T}`};`;O+=`
          var idx${T} = ${v.getByIndices(`indicesIndices${T}`)};
          if (idx${T} < 0) {
            idx${T} = idx${T} + uniforms.axisDimLimit;
          }
          var dataIndices${T} : ${$.type.indices};
        `;for(let R=0,U=0;R<a;R++)R===l?(O+=`${a>1?`dataIndices${T}[${R}]`:`dataIndices${T}`} = u32(idx${T});`,U+=z):(O+=`${a>1?`dataIndices${T}[${R}]`:`dataIndices${T}`} = ${u.length>1?`outputIndices${T}[${U}]`:`outputIndices${T}`};`,U++);return O},E;if(e[0].dataType===9){let T=(z,O,R="")=>`
          let outputIndices${O} = ${S.offsetToIndices(`outputOffset + ${O}u`)};
          ${I(O)};
          let offset${O} = ${$.indicesToOffset(`dataIndices${O}`)};
          let index${O} = offset${O} / 4u;
          let component${O} = offset${O} % 4u;
          ${z}[${O}] = ${R}(${$.getByOffset(`index${O}`)}[component${O}]);
        `;E=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${T("value",0,"u32")}
        ${T("value",1,"u32")}
        ${T("value",2,"u32")}
        ${T("value",3,"u32")}
        ${S.setByOffset("global_idx","value")}
      `}else E=`
      let outputIndices = ${S.offsetToIndices("global_idx")};
      ${I("")};
      let value = ${$.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables($,v,S)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${E}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:y}},np=e=>Le({axis:e.axis}),sp=(e,t)=>{let i=e.inputs;rp(i),e.compute(ip(e.inputs,t))}}),ap,op,lp,ey=b(()=>{xe(),ke(),Ce(),ap=(e,t,i,s,a,l,u,c,f)=>{let h=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:i},{type:12,data:u},{type:12,data:c},{type:12,data:f}],g=[l];h.push(...he(t.dims,g));let y=w=>{let $=W("indices_data",t.dataType,t.dims.length),v=de("input_slice_offsets_data",12,1,1),S=[$,v],I=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${w.registerUniforms(I).declareVariables(...S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:y},{inputs:[t],outputs:[-1]})[0]},op=(e,t)=>{let i=e.inputs,s=i[0].dims,a=i[0].dataType,l=i[1].dims,u=l[l.length-1],c=N.sizeToDimension(l,l.length-1),f=N.sizeFromDimension(s,t.batchDims+u),h=N.sizeToDimension(s,t.batchDims),g=N.sizeFromDimension(s,t.batchDims),y=c/h,w=new Array(u),$=f;for(let O=0;O<u;++O)w[u-1-O]=$,$*=s[t.batchDims+u-1-O];let v=ap(e,i[1],w,t.batchDims,s,c,y,g,u),S=t.batchDims+u;if(S>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let I=l.slice(0,-1).concat(s.slice(S)),E=N.size(I),T=[{type:12,data:E},{type:12,data:f},...he(i[0].dims,v.dims,I)],z=O=>{let R=W("data",i[0].dataType,i[0].dims.length),U=W("slice_offsets",12,v.dims.length),M=de("output",i[0].dataType,I.length);return`
          ${O.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(R,U,M)}
            ${O.mainStart()}
            ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:I,dataType:a}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:T}),getShaderSource:z},{inputs:[i[0],v]})},lp=e=>({batchDims:e.batch_dims,cacheKey:""})}),up,dp,cp,pp,ty=b(()=>{xe(),ke(),Ye(),Ce(),up=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=N.normalizeAxis(t.quantizeAxis,e[0].dims.length),s=t.blockSize,a=e[0],l=e[2],u=e.length===4?e[3]:void 0;if(l.dims.length!==a.dims.length||!a.dims.map((c,f)=>f===i?Math.ceil(c/s)===l.dims[f]:c===l.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(u){if(u.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(u.dims.length!==l.dims.length||!u.dims.map((c,f)=>c===l.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},dp=(e,t)=>{let i=e[0].dims,s=e[1].dims,a=i.length,l=N.normalizeAxis(t.gatherAxis,a),u=N.normalizeAxis(t.quantizeAxis,a),c=i.slice(0);c.splice(l,1,...s);let f=N.size(c),h=e[2].dataType,g=e[0].dataType===22,y=[{type:12,data:f},{type:12,data:u},{type:12,data:l},{type:12,data:t.blockSize},...he(...e.map(($,v)=>$.dims),c)],w=$=>{let v=W("data",e[0].dataType,e[0].dims.length),S=W("inputIndices",e[1].dataType,e[1].dims.length),I=W("scales",e[2].dataType,e[2].dims.length),E=e.length>3?W("zeroPoint",e[3].dataType,e[3].dims.length):void 0,T=de("output",h,c.length),z=[v,S,I];E&&z.push(E);let O=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${$.registerUniforms(O).declareVariables(...z,T)}
        ${$.mainStart()}
        let output_indices = ${T.offsetToIndices("global_idx")};
        var indices_indices = ${S.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${T.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${S.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${T.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${T.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${S.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[l]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${c.length}; i++) {
          let index = ${T.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${I.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${I.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${I.getByIndices("scale_indices")};
        ${E?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${E.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${E.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${wt(h)}(quantized_data - zero_point) * scale;
        ${T.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter(($,v)=>v!==1).map($=>$.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},($,v)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:h}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:w}},cp=(e,t)=>{let i=e.inputs;up(i,t),e.compute(dp(e.inputs,t))},pp=e=>Le({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fp,hp,mp,gp,ry=b(()=>{xe(),ke(),Ye(),Ce(),fp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},hp=(e,t)=>{let i=e[0].dims,s=e[0].dataType,a=i.length,l=e[1].dims,u=e[1].dataType,c=N.normalizeAxis(t.axis,a),f=i[c],h=l.slice(0),g=N.size(h),y=W("input",s,a),w=W("indicesInput",u,l.length),$=de("output",s,h.length),v=[{type:12,data:g},{type:6,data:f},{type:12,data:c}];return v.push(...he(i,l,h)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:v}),getShaderSource:S=>`
      ${S.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,w,$)}
      ${S.mainStart()}
      ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${$.offsetToIndices("global_idx")};

      var idx = ${w.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${y.type.indices}(outputIndices);
      ${y.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${y.getByIndices("inputIndices")};

      ${$.setByOffset("global_idx","value")};
  }`}},mp=e=>Le({axis:e.axis}),gp=(e,t)=>{let i=e.inputs;fp(i),e.compute(hp(e.inputs,t))}}),_p,yp,wp,bp,iy=b(()=>{xe(),ke(),Ce(),_p=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yp=(e,t)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[a,l,u]=Cl.getShapeOfGemmResult(i,t.transA,s,t.transB,e.length===3?e[2].dims:void 0),c=[a,l];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,h=Math.ceil(l/f),g=Math.ceil(a/f),y=!0,w=N.size(c),$=[{type:12,data:y?h:w},{type:12,data:a},{type:12,data:l},{type:12,data:u},{type:1,data:t.alpha},{type:1,data:t.beta}],v=["type","type"];e.length===3&&($.push(...he(e[2].dims)),v.push("rank")),$.push(...he(c));let S=E=>{let T="";t.transA&&t.transB?T="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?T="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?T="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(T="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let z=t.alpha===1?"":"value *= uniforms.alpha;",O=W("a",e[0].dataType,e[0].dims),R=W("b",e[1].dataType,e[1].dims),U=O.type.value,M=null,V=[O,R];e.length===3&&(M=W("c",e[2].dataType,e[2].dims.length),V.push(M));let H=de("output",e[0].dataType,c.length);V.push(H);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${E.registerUniforms(te).declareVariables(...V)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${U}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${T}
    }

    ${z}
    ${M!=null?`let cOffset = ${M.broadcastedIndicesToOffset("vec2(m, n)",H)}; value += ${U}(uniforms.beta) * ${M.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},I=E=>{let T=W("a",e[0].dataType,e[0].dims),z=W("b",e[1].dataType,e[1].dims),O=null,R=[T,z];e.length===3&&(O=W("c",e[2].dataType,e[2].dims.length),R.push(O));let U=de("output",e[0].dataType,c.length);R.push(U);let M=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],V="",H="";t.transA&&t.transB?(H=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(H=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,V="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(H=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(H=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${z.type.value}(0);
      }
      `,V="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let te=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${E.registerUniforms(M).declareVariables(...R)}
  var<workgroup> tile_a: array<array<${T.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${z.type.storage}, ${f}>, ${f}>;
  ${E.mainStart([f,f,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${f};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${f};
    let num_tiles = (uniforms.K - 1) / ${f} + 1;
    var k_start = 0u;
    var value = ${U.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${H}
      k_start = k_start + ${f};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${f}; k++) {
        ${V}
      }
      workgroupBarrier();
    }

    ${te}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",U)}; value += ${U.type.value}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return y?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:h*g},programUniforms:$}),getShaderSource:I}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:$}),getShaderSource:S}},wp=e=>{let t=e.transA,i=e.transB,s=e.alpha,a=e.beta;return{transA:t,transB:i,alpha:s,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bp=(e,t)=>{_p(e.inputs),e.compute(yp(e.inputs,t))}}),er,mr,jr,Gr,$p,vp,xp,Sp,Tp,Ep,Ip,kp,Cp,Op,ny=b(()=>{xe(),ke(),Ye(),Ce(),[er,mr,jr,Gr]=[0,1,2,3],$p=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},vp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,xp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Sp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Tp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ep=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${er}] = batch;
     indices[${mr}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${jr}] = u32(r);
            indices[${Gr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${jr}] = u32(clamp(r, 0, H - 1));
          indices[${Gr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${jr}] = gs_reflect(r, border[1], border[3]);
          indices[${Gr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ip=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${er}], indices[${mr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${er}], indices[${mr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${er}], indices[${mr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${er}], indices[${mr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${er}], indices[${mr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${er}], indices[${mr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,kp=(e,t)=>{let i=W("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=W("grid",e[1].dataType,s.length,2),l=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(l=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[er,mr,jr,Gr]=[0,3,1,2]);let u=de("output",e[0].dataType,l.length),c=i.type.value,f=N.size(l),h=[{type:12,data:f},...he(e[0].dims,s,l)],g=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(i,a,u)}
  ${vp}
  ${xp(c)}
  ${Sp(t)}
  ${Tp(t)}
  ${Ep(i,c,t)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${jr}]);
      let W_in = i32(uniforms.x_shape[${Gr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${u.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${er}], indices[${jr}], indices[${Gr}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ip(u,c,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:y=>{let w=N.size(l);return{outputs:[{dims:l,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:h}},getShaderSource:g}},Cp=(e,t)=>{$p(e.inputs),e.compute(kp(e.inputs,t))},Op=e=>Le({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),xt,Ap,zp,Ia,Rp,Fi,Dp,Bp=b(()=>{xe(),ke(),Ye(),Gs(),na(),Ce(),kr(),xt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ap=(e,t)=>{let i=e[0],s=xt(e,1),a=xt(e,2),l=xt(e,3),u=xt(e,4),c=xt(e,5),f=xt(e,6),h=xt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let g=i.dims[0],y=i.dims[1],w=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],$=y,v=0,S=0,I=Math.floor(w/t.numHeads);if(f&&h&&N.size(f.dims)&&N.size(h.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==g||f.dims[1]!==t.numHeads||f.dims[3]!==I)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[0]!==g||h.dims[1]!==t.numHeads||h.dims[3]!==I)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==h.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(h.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=f.dims[2],S=f.dims[2]}else if(f&&N.size(f.dims)||h&&N.size(h.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E;if(s&&N.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');E=2,$=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==I)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');E=5,$=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==I)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');E=0,$=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}if(l&&N.size(l.dims)>0){if(l.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let T=v+$,z=0;if(u&&N.size(u.dims)>0){z=8;let M=u.dims;throw M.length===1?M[0]===g?z=1:M[0]===3*g+2&&(z=3):M.length===2&&M[0]===g&&M[1]===T&&(z=5),z===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let O=!1,R=w;if(a&&N.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if($!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');R=a.dims[2]}else{if($!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');R=a.dims[1]*a.dims[3],O=!0}}let U=!1;if(u&&N.size(u.dims)>0)throw new Error("Key padding mask is not supported");if(c&&N.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==g||c.dims[1]!==t.numHeads||c.dims[2]!==y||c.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:g,sequenceLength:y,pastSequenceLength:v,kvSequenceLength:$,totalSequenceLength:T,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:w,vHiddenSize:R,headSize:I,vHeadSize:Math.floor(R/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:z,scale:t.scale,broadcastResPosBias:U,passPastInKv:O,qkvFormat:E}},zp=e=>Le({...e}),Ia=Le({perm:[0,2,1,3]}),Rp=(e,t,i,s,a,l,u)=>{let c=[s,a,l],f=N.size(c),h=[{type:12,data:f},{type:12,data:u},{type:12,data:l}],g=y=>{let w=de("qkv_with_bias",t.dataType,c),$=W("qkv",t.dataType,c),v=W("bias",i.dataType,c),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables($,v,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h}),getShaderSource:g},{inputs:[t,i],outputs:[-1]})[0]},Fi=(e,t,i,s,a,l,u,c)=>{let f=l;if(u&&N.size(u.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=Rp(e,l,u,t,s,i*a,c),f=f.reshape([t,s,i,a]),i===1||s===1?f:e.compute(Ft(f,Ia.perm),{inputs:[f],outputs:[-1]})[0]}else return l.dims.length===3&&(f=l.reshape([t,s,i,a])),i===1||s===1?f:e.compute(Ft(f,Ia.perm),{inputs:[f],outputs:[-1]})[0]},Dp=(e,t)=>{let i=Ap(e.inputs,t),s=e.inputs[0],a=xt(e.inputs,1),l=xt(e.inputs,2),u=xt(e.inputs,3),c=xt(e.inputs,4),f=xt(e.inputs,5),h=xt(e.inputs,6),g=xt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let y=a&&l&&a.dims.length===4&&l.dims.length===4,w=Fi(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,u,0);if(y)return Bi(e,w,a,l,c,void 0,h,g,f,i);if(!a||!l)throw new Error("key and value must be provided");let $=Fi(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,a,u,i.hiddenSize),v=Fi(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,l,u,2*i.hiddenSize);Bi(e,w,$,v,c,void 0,h,g,f,i)}}),Pp,Mp,Up,Np,ka,Fp,Vp,Lp=b(()=>{xe(),ke(),Ye(),Ce(),Pp=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Mp=(e,t)=>{let i=[],s=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>i.push(Number(a))),s=i.length),Le({numOutputs:s,axis:t.axis,splitSizes:i})},Up=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${pe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Np=e=>{let t=e.length,i=[];for(let s=0;s<t;++s){let a=e[s].setByIndices("indices","input[global_idx]");t===1?i.push(a):s===0?i.push(`if (output_number == ${s}u) { ${a} }`):s===t-1?i.push(`else { ${a} }`):i.push(`else if (output_number == ${s}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},ka=(e,t)=>{let i=e[0].dims,s=N.size(i),a=e[0].dataType,l=N.normalizeAxis(t.axis,i.length),u=new Array(t.numOutputs),c=W("input",a,i.length),f=new Array(t.numOutputs),h=[],g=[],y=0,w=[{type:12,data:s}];for(let v=0;v<t.numOutputs;v++){y+=t.splitSizes[v],f[v]=y;let S=i.slice();S[l]=t.splitSizes[v],g.push(S),u[v]=de(`output${v}`,a,S.length),h.push({dims:g[v],dataType:e[0].dataType})}w.push({type:12,data:f},...he(i,...g));let $=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",f.length).declareVariables(c,...u)}
  ${Up(f.length)}
  ${Np(u)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${c.offsetToIndices("global_idx")};
    var index = ${c.indicesGet("indices",l)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${pe("uniforms.size_in_split_axis","output_number - 1u",f.length)};
      ${c.indicesSet("indices",l,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:h,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:w})}},Fp=(e,t)=>{Pp(e.inputs);let i=e.inputs.length===1?t:Mp(e.inputs,t);e.compute(ka(e.inputs,i),{inputs:[0]})},Vp=e=>{let t=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Le({axis:t,numOutputs:s,splitSizes:i})}}),qp,Nn,Wp,Hp=b(()=>{xe(),ke(),Ye(),Ce(),qp=(e,t)=>{let[i,s,a,l]=e,{numHeads:u,rotaryEmbeddingDim:c}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!N.areEqual(s.dims,[])&&!N.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(l.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${l.dims.length}`);if(!N.areEqual(a.dims,l.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&u===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],h=i.dims[i.dims.length-2],g=a.dims[0],y=N.sizeFromDimension(i.dims,1)/h,w=c===0?a.dims[1]*2:y/u;if(c>w)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(f!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(h!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(w/2!==a.dims[1]&&c/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(h>g)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Nn=(e,t)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:a,scale:l}=t,u=e[0].dims[0],c=N.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],h=c/f,g=e[2].dims[1],y=a===0?g*2:h/s,w=new Array(u,f,h/y,y-g),$=N.computeStrides(w),v=[{type:1,data:l},{type:12,data:w},{type:12,data:$},...e[0].dims.length===3?new Array({type:12,data:[c,h,y,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,y,f*y,1]}):[],...he(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],S=I=>{let E=W("input",e[0].dataType,e[0].dims.length),T=W("position_ids",e[1].dataType,e[1].dims.length),z=W("cos_cache",e[2].dataType,e[2].dims.length),O=W("sin_cache",e[3].dataType,e[3].dims.length),R=de("output",e[0].dataType,e[0].dims.length);return I.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:w.length},{name:"global_strides",type:"u32",length:$.length},{name:"input_output_strides",type:"u32",length:$.length}]),`
        ${I.declareVariables(E,T,z,O,R)}

        ${I.mainStart(hi)}
          let half_rotary_emb_dim = uniforms.${z.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${T.broadcastedIndicesToOffset("bsnh.xy",de("",T.type.tensor,2))};
            let position_id =
                u32(${T.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${E.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} -
                ${E.getByOffset("j")} * ${O.get("position_id","bsnh[3]")};
            ${R.setByOffset("i","re")}
            let im = ${E.getByOffset("i")} * ${O.get("position_id","bsnh[3]")} +
                ${E.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${R.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${R.setByOffset("k",E.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Le({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(w)/hi)},programUniforms:v})}},Wp=(e,t)=>{qp(e.inputs,t),e.compute(Nn(e.inputs,t))}}),jp,Gp,Ca,Kp,Zp,sy=b(()=>{Ye(),xe(),na(),Bp(),Lp(),kr(),Hp(),Ce(),jp=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],s=e[1],a=e[2],l=e[3],u=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],h=i.dims[1],g=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],y=h,w=0,$=!s||s.dims.length===0,v=Math.floor($?g/(t.numHeads+2*t.kvNumHeads):g/t.numHeads);$&&(g=v*t.numHeads);let S=l&&l.dims.length!==0,I=u&&u.dims.length!==0;if(S&&l.dims.length===4&&l.dims[0]===f&&l.dims[1]!==t.kvNumHeads&&l.dims[2]===t.kvNumHeads&&l.dims[3]===v)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&I){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=l.dims[2]}else if(S||I)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E=1;if(s&&s.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');y=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');y=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}let T=0,z=!1,O=t.kvNumHeads?v*t.kvNumHeads:g;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');O=a.dims[1]*a.dims[3],z=!0}}let R=e.length>4?e[5]:void 0;if(R&&R.dims.length!==1&&R.dims[0]!==f)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:f,sequenceLength:h,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:g,vHiddenSize:O,headSize:v,vHeadSize:Math.floor(O/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:T,scale:t.scale,broadcastResPosBias:!1,passPastInKv:z,qkvFormat:E}},Gp=Le({perm:[0,2,1,3]}),Ca=(e,t,i)=>{let s=t,a=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(s=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize]),s=e.compute(Ft(s,Gp.perm),{inputs:[s],outputs:[-1]})[0]),s},Kp=(e,t,i,s)=>{let a=7,l=["type","type"],u=[e*t],c=e*t,f=[{type:12,data:c},{type:12,data:t},{type:12,data:e}],h=g=>{let y=W("seq_lens",i.dataType,i.dims),w=W("total_seq_lens",s.dataType,s.dims),$=de("pos_ids",a,u),v=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${g.registerUniforms(v).declareVariables(y,w,$)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${w.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${y.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${$.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${$.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${$.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:h}},Zp=(e,t)=>{var O;let i=jp(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((O=e.inputs[1])==null?void 0:O.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,l=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,u=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,h=e.inputs.length>5?e.inputs[6]:void 0,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=Le({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,g*i.headSize,g*i.headSize]}),[w,$,v]=!a&&!l?e.compute(ka([s],y),{inputs:[s],outputs:[-1,-1,-1]}):[s,a,l],S,I;if(t.doRotary){let R=e.compute(Kp(i.batchSize,i.sequenceLength,f,h),{inputs:[f,h],outputs:[-1]})[0],U=e.inputs[7],M=e.inputs[8],V=Le({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),H=[w,R,U,M],te=[-1];S=e.compute(Nn(H,V),{inputs:H,outputs:te})[0],H.splice(0,1,$);let be=Le({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});I=e.compute(Nn(H,be),{inputs:H,outputs:te})[0]}let E=Fi(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?S:w,void 0,0),T=Ca(e,t.doRotary?I:$,i),z=Ca(e,v,i);Bi(e,E,T,z,void 0,void 0,u,c,void 0,i,f,h)}}),Oa,Xp,Qp,Jp,ay=b(()=>{xe(),ke(),kr(),Ce(),Oa=(e,t,i,s,a,l,u,c)=>{let f=Je(l),h=f===1?"f32":`vec${f}f`,g=f===1?"vec2f":`mat2x${f}f`,y=a*u,w=64;y===1&&(w=256);let $=[a,u,l/f],v=[a,u,2],S=["rank","type","type"],I=[];I.push(...he($,v));let E=T=>{let z=W("x",t.dataType,3,f),O=W("scale",i.dataType,i.dims),R=W("bias",s.dataType,s.dims),U=de("output",1,3,2),M=[z,O,R,U];return`
  var<workgroup> workgroup_shared : array<${g}, ${w}>;
  const workgroup_size = ${w}u;
  ${T.declareVariables(...M)}
  ${T.mainStart(w)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${h}(0);
    var squared_sum = ${h}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${h}(${z.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${g}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ir("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${Ir("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${w}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:v,dataType:1}],dispatchGroup:{x:y},programUniforms:I}),getShaderSource:E},{inputs:[t,i,s],outputs:[-1]})[0]},Xp=(e,t,i)=>{let s=t[0].dims,a=s,l=2,u=s[0],c=s[1],f=N.sizeFromDimension(s,l),h=Je(f),g=N.size(a)/h,y=Oa(e,t[0],t[1],t[2],u,f,c,i.epsilon),w=[u,c,f/h],$=[u,c],v=["type","none"],S=I=>{let E=W("x",t[0].dataType,w.length,h),T=W("scale_shift",1,$.length,2),z=de("output",t[0].dataType,w.length,h),O=[E,T,z];return`
  ${I.registerUniform("output_size","u32").declareVariables(...O)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${z.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${T.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${E.getByOffset("global_idx")} * ${z.type.value}(scale_shift.x) + ${z.type.value}(scale_shift.y);
      ${z.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${h}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...he(w,$,w)]}),getShaderSource:S},{inputs:[t[0],y]})},Qp=(e,t,i)=>{let s=t[0].dims,a=s,l=s[0],u=s[s.length-1],c=N.sizeFromDimension(s,1)/u,f=Je(u),h=N.size(a)/f,g=[{type:12,data:c},{type:12,data:Math.floor(u/f)}],y=["type","type"],w=!1,$=[0,s.length-1];for(let E=0;E<s.length-2;E++)w=w||s[E+1]!==1,$.push(E+1);w=w&&s[s.length-1]!==1;let v=w?e.compute(Ft(e.inputs[0],$),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(E,T)=>s[$[T]])),S=Oa(e,v,t[1],t[2],l,c,u,i.epsilon),I=E=>{let T=at(t[0].dataType),z=f===1?"vec2f":`mat${f}x2f`,O=M=>{let V=M===0?"x":"y",H=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${T}(${H}(scale.${V}))`;case 2:return`vec2<${T}>(${H}(scale[0].${V}, scale[1].${V}))`;case 4:return`vec4<${T}>(${H}(scale[0].${V}, scale[1].${V}, scale[2].${V}, scale[3].${V}))`;default:throw new Error(`Not supported compoents ${f}`)}},R=W("input",t[0].dataType,t[0].dims,f),U=de("output",t[0].dataType,a,f);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${z}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${U.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${E.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${O(0)}, ${O(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:I},{inputs:[t[0],S]})},Jp=(e,t)=>{t.format==="NHWC"?Qp(e,e.inputs,t):Xp(e,e.inputs,t)}}),Yp,ef,tf,oy=b(()=>{xe(),ke(),Ce(),Yp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},ef=(e,t,i)=>{let s=t.simplified,a=e[0].dims,l=e[1],u=!s&&e[2],c=a,f=N.normalizeAxis(t.axis,a.length),h=N.sizeToDimension(a,f),g=N.sizeFromDimension(a,f),y=N.size(l.dims),w=u?N.size(u.dims):0;if(y!==g||u&&w!==g)throw new Error(`Size of X.shape()[axis:] == ${g}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${y} and bias size of ${w}`);let $=[];for(let R=0;R<a.length;++R)R<f?$.push(a[R]):$.push(1);let v=Je(g),S=["type","type"],I=[{type:12,data:h},{type:1,data:g},{type:12,data:Math.floor(g/v)},{type:1,data:t.epsilon}];u&&S.push("type");let E=i>1,T=i>2,z=R=>{let U=at(e[0].dataType),M=[W("x",e[0].dataType,e[0].dims,v),W("scale",l.dataType,l.dims,v)];u&&M.push(W("bias",u.dataType,u.dims,v)),M.push(de("output",e[0].dataType,c,v)),E&&M.push(de("mean_data_output",1,$)),T&&M.push(de("inv_std_output",1,$));let V=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${R.registerUniforms(V).declareVariables(...M)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Qs("f32",v)};
    var mean_square_vector = ${Qs("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${mi(U,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ir("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ir("mean_square_vector",v)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${mi(U,v,"x[j + offset]")};
      let f32scale = ${mi(U,v,"scale[j]")};
      output[j + offset] = ${M[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${u?`+ ${mi(U,v,"bias[j]")}`:""}
      );
    }

    ${E?"mean_data_output[global_idx] = mean":""};
    ${T?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},O=[{dims:c,dataType:e[0].dataType}];return E&&O.push({dims:$,dataType:1}),T&&O.push({dims:$,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${i};${s}`,inputDependencies:S},getRunData:()=>({outputs:O,dispatchGroup:{x:Math.ceil(h/64)},programUniforms:I}),getShaderSource:z}},tf=(e,t)=>{Yp(e.inputs),e.compute(ef(e.inputs,t,e.outputCount))}}),rf,nf,ly=b(()=>{ke(),pa(),ga(),rf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},nf=e=>{rf(e.inputs);let t=fi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&s<8)e.compute(ca(e.inputs,{activation:""},t));else{let a=t[t.length-2],l=N.size(e.inputs[0].dims.slice(0,-2)),u=N.size(e.inputs[1].dims.slice(0,-2));if(l!==1&&a===1&&u===1){let c=e.inputs[0].reshape([1,l,s]),f=e.inputs[1].reshape([1,s,i]),h=[1,l,i],g=[c,f];e.compute(Bn(g,{activation:""},t,h),{inputs:g})}else e.compute(Bn(e.inputs,{activation:""},t))}}}),sf,af,of,lf,uf,uy=b(()=>{xe(),ke(),Ye(),Ce(),sf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),l=t.blockSize/8*t.bits,u=e[1];if(!N.areEqual(u.dims,[t.n,a,l]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=e[2].dims;if(N.size(c)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let f=e[3].dims,h=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(N.size(f)!==h)throw new Error("zeroPoints input size error.")}},af=(e,t)=>{let i=e[0].dims,s=i.length,a=i[s-2],l=t.k,u=t.n,c=i.slice(0,s-2),f=N.size(c),h=e[1].dims[2]/4,g=e[0].dataType,y=Je(t.k),w=Je(h),$=Je(u),v=c.concat([a,u]),S=a>1&&u/$%2===0?2:1,I=N.size(v)/$/S,E=64,T=[],z=[f,a,l/y],O=N.convertShape(e[1].dims).slice();O.splice(-1,1,h/w),T.push(...he(z)),T.push(...he(O)),T.push(...he(e[2].dims)),e.length===4&&T.push(...he(N.convertShape(e[3].dims)));let R=[f,a,u/$];T.push(...he(R));let U=M=>{let V=z.length,H=W("a",e[0].dataType,V,y),te=W("b",12,O.length,w),be=W("scales",e[2].dataType,e[2].dims.length),ce=[H,te,be],ye=e.length===4?W("zero_points",12,e[3].dims.length):void 0;ye&&ce.push(ye);let Ne=R.length,Oe=de("output",e[0].dataType,Ne,$),ge=at(e[0].dataType),Ae=(()=>{switch(y){case 1:return`array<${ge}, 8>`;case 2:return`mat4x2<${ge}>`;case 4:return`mat2x4<${ge}>`;default:throw new Error(`${y}-component is not supported.`)}})(),me=()=>{let j=`
          // reuse a data
            var input_offset = ${H.indicesToOffset(`${H.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Ae};
            for (var j: u32 = 0; j < ${8/y}; j++) {
              a_data[j] = ${H.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let ne=0;ne<$*S;ne++)j+=`
            b_value = ${w===1?`b${ne}_data`:`b${ne}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Ae}(${Array.from({length:4},(_e,ze)=>`${ge}(b_value_lower[${ze}]), ${ge}(b_value_upper[${ze}])`).join(", ")});
            b_dequantized_values = ${y===1?`${Ae}(${Array.from({length:8},(_e,ze)=>`(b_quantized_values[${ze}] - ${ye?`zero_point${ne}`:"zero_point"}) * scale${ne}`).join(", ")});`:`(b_quantized_values - ${Ae}(${Array(8).fill(`${ye?`zero_point${ne}`:"zero_point"}`).join(",")})) * scale${ne};`};
            workgroup_shared[local_id.x * ${S} + ${Math.floor(ne/$)}]${$>1?`[${ne%$}]`:""} += ${Array.from({length:8/y},(_e,ze)=>`${y===1?`a_data[${ze}] * b_dequantized_values[${ze}]`:`dot(a_data[${ze}], b_dequantized_values[${ze}])`}`).join(" + ")};
          `;return j},Se=()=>{let j=`
            var col_index = col * ${$};
            ${ye?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ge}(8);`}
            `;for(let ne=0;ne<$*S;ne++)j+=`
            let scale${ne} = ${be.getByOffset("col_index * nBlocksPerCol + block")};
            ${ye?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ye.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ne} = ${ge}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return j},gt=()=>{let j=`col_index = col * ${$};`;for(let ne=0;ne<$*S;ne++)j+=`
            let b${ne}_data = ${te.getByIndices(`${te.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Ae};
            var b_dequantized_values: ${Ae};`,j};return`
        var<workgroup> workgroup_shared: array<${Oe.type.value}, ${S*E}>;
        ${M.declareVariables(...ce,Oe)}
        ${M.mainStart([E,1,1])}
          let output_indices = ${Oe.offsetToIndices(`(global_idx / ${E}) * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${E}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/y};
            ${Se()}
            for (var word: u32 = 0; word < ${h}; word += ${w}) {
              ${gt()}
              for (var i: u32 = 0; i < ${w}; i++) {
                ${me()}
                word_offset += ${8/y};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${S}) {
            var output_value: ${Oe.type.value} = ${Oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${E}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${S};
            }
            ${Oe.setByIndices(`${Oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${y};${w};${$};${S};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:g}],dispatchGroup:{x:I},programUniforms:T}),getShaderSource:U}},of=(e,t)=>{let i=e[0].dims,s=i.length,a=i[s-2],l=t.k,u=t.n,c=i.slice(0,s-2),f=N.size(c),h=e[1].dims[2]/4,g=e[0].dataType,y=Je(t.k),w=Je(h),$=c.concat([a,u]),v=128,S=u%8===0?8:u%4===0?4:1,I=v/S,E=I*w*8,T=E/y,z=E/t.blockSize,O=N.size($)/S,R=[],U=[f,a,l/y],M=N.convertShape(e[1].dims).slice();M.splice(-1,1,h/w),R.push(...he(U)),R.push(...he(M)),R.push(...he(e[2].dims)),e.length===4&&R.push(...he(N.convertShape(e[3].dims)));let V=[f,a,u];R.push(...he(V));let H=te=>{let be=U.length,ce=W("a",e[0].dataType,be,y),ye=W("b",12,M.length,w),Ne=W("scales",e[2].dataType,e[2].dims.length),Oe=[ce,ye,Ne],ge=e.length===4?W("zero_points",12,e[3].dims.length):void 0;ge&&Oe.push(ge);let Ae=V.length,me=de("output",e[0].dataType,Ae),Se=at(e[0].dataType),gt=()=>{switch(y){case 1:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${y}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ce.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${me.type.value}, ${I}>, ${S}>;
        ${te.declareVariables(...Oe,me)}
        ${te.mainStart([I,S,1])}
          let output_indices = ${me.offsetToIndices(`workgroup_index * ${S}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${z} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ce.getByIndices(`${ce.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ce.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${z} + local_id.x;
            ${ge?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ge.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Se}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Se}(8);`}
            let scale = ${Ne.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ye.getByIndices(`${ye.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/y};
            for (var i: u32 = 0; i < ${w}; i++) {
              ${gt()}
              let b_value = ${w===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Se}>(${Array.from({length:4},(j,ne)=>`${Se}(b_value_lower[${ne}]), ${Se}(b_value_upper[${ne}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Se}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(j,ne)=>`${`dot(a_data${ne}, b_dequantized_values[${ne}])`}`).join(" + ")};
              word_offset += ${8/y};
            }
            workgroupBarrier();
          }

          if (local_idx < ${S}) {
            var output_value: ${me.type.value} = ${me.type.value}(0);
            for (var b = 0u; b < ${I}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${me.setByIndices(`${me.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${y};${w};${I};${S}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:g}],dispatchGroup:{x:O},programUniforms:R}),getShaderSource:H}},lf=(e,t)=>{sf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(of(e.inputs,t)):e.compute(af(e.inputs,t))},uf=e=>Le(e)}),df,cf,pf,ff,hf,mf,gf,_f,yf,dy=b(()=>{xe(),ke(),Ce(),df=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},cf=(e,t,i)=>{let s="";for(let a=t-1;a>=0;--a)s+=`
            k = i32(${e.indicesGet("indices",a)}) - ${pe("uniforms.pads",a,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${pe("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${pe("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},pf=(e,t,i)=>{let s="";for(let a=t-1;a>=0;--a)s+=`
                k = i32(${e.indicesGet("indices",a)}) - ${pe("uniforms.pads",a,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${pe("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${pe("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${pe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},ff=(e,t,i)=>{let s="";for(let a=t-1;a>=0;--a)s+=`
                k = i32(${e.indicesGet("indices",a)}) - ${pe("uniforms.pads",a,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${pe("uniforms.x_shape",a,t)})) {
                  k = i32(${pe("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${pe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},hf=(e,t,i)=>{let s="";for(let a=t-1;a>=0;--a)s+=`
                k = i32(${e.indicesGet("indices",a)}) - ${pe("uniforms.pads",a,i)};
                if (k < 0)  {
                  k += i32(${pe("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${pe("uniforms.x_shape",a,t)})) {
                  k -= i32(${pe("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${pe("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},mf=(e,t,i)=>{switch(i.mode){case 0:return cf(e,t,i.pads.length);case 1:return pf(e,t,i.pads.length);case 2:return ff(e,t,i.pads.length);case 3:return hf(e,t,i.pads.length);default:throw new Error("Invalid mode")}},gf=(e,t)=>{let i=N.padShape(e[0].dims.slice(),t.pads),s=e[0].dims,a=N.size(i),l=[{type:12,data:a},{type:6,data:t.pads}],u=e.length>=3&&e[2].data;t.mode===0&&l.push({type:u?e[2].dataType:1,data:t.value}),l.push(...he(e[0].dims,i));let c=["rank"],f=h=>{let g=de("output",e[0].dataType,i.length),y=W("x",e[0].dataType,s.length),w=y.type.value,$=mf(g,s.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:u?w:"f32"}),`
            ${h.registerUniforms(v).declareVariables(y,g)}
            ${h.mainStart()}
            ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${g.offsetToIndices("global_idx")};

            var value = ${w}(0);
            ${$}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${u}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(i)/64)},programUniforms:l}),getShaderSource:f}},_f=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,l=new Int32Array(2*a).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)l[Number(c[f])]=Number(i[f]),l[Number(c[f])+a]=Number(i[f+c.length])}else i.forEach((c,f)=>l[Number(f)]=Number(c));let u=[];return l.forEach(c=>u.push(c)),{mode:t.mode,value:s,pads:u}}else return t},yf=(e,t)=>{df(e.inputs);let i=_f(e.inputs,t);e.compute(gf(e.inputs,i),{inputs:[0]})}}),Vi,Aa,za,Ra,Da,wf,bf,Ba,Pa,$f,vf,Ma,xf,Sf,Ua,Tf,Ef,If,kf,cy=b(()=>{Re(),xe(),ke(),Ce(),Vi=e=>{if(Ee.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Aa=(e,t,i)=>{let s=t.format==="NHWC",a=e.dims.slice();s&&a.splice(1,0,a.pop());let l=Object.hasOwnProperty.call(t,"dilations"),u=t.kernelShape.slice(),c=t.strides.slice(),f=l?t.dilations.slice():[],h=t.pads.slice();kn.adjustPoolAttributes(i,a,u,c,f,h);let g=kn.computePoolOutputShape(i,a,c,f,u,h,t.autoPad),y=Object.assign({},t);l?Object.assign(y,{kernelShape:u,strides:c,pads:h,dilations:f,cacheKey:t.cacheKey}):Object.assign(y,{kernelShape:u,strides:c,pads:h,cacheKey:t.cacheKey});let w=g.slice();return w.push(w.splice(1,1)[0]),[y,s?w:g]},za=(e,t)=>{let i=t.format==="NHWC",s=N.size(e),a=N.size(t.kernelShape),l=[{type:12,data:s},{type:12,data:a}],u=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let c=t.kernelShape[t.kernelShape.length-1],f=t.strides[t.strides.length-1],h=t.pads[t.pads.length/2-1],g=t.pads[t.pads.length-1],y=!!(h+g);l.push({type:12,data:c},{type:12,data:f},{type:12,data:h},{type:12,data:g}),u.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let w=!1;if(t.kernelShape.length===2){let $=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],S=t.pads[t.pads.length/2-2],I=t.pads[t.pads.length-2];w=!!(S+I),l.push({type:12,data:$},{type:12,data:v},{type:12,data:S},{type:12,data:I}),u.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[l,u,!0,y,w]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=N.computeStrides(t.kernelShape);l.push({type:12,data:c},{type:12,data:t.pads},{type:12,data:t.strides}),u.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let f=t.pads.reduce((h,g)=>h+g);return[l,u,!!f,!1,!1]}},Ra=(e,t,i,s,a,l,u,c,f,h,g,y)=>{let w=a.format==="NHWC",$=t.type.value,v=de("output",t.type.tensor,s);if(a.kernelShape.length<=2){let S="",I="",E="",T=i-(w?2:1);if(g?S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${T}] < 0 || xIndices[${T}]
                      >= uniforms.x_shape[${T}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${l}
                }`:S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${l}
                }`,a.kernelShape.length===2){let z=i-(w?3:2);y?I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${z}] < 0 || xIndices[${z}] >= uniforms.x_shape[${z}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${z}] = indices[${z}] * uniforms.sh - uniforms.phStart + j;
                `,E=`
              }
            `}return`
            ${e.registerUniforms(f).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${$}(${c});
              var pad = 0;
              ${I}
              ${S}
              ${E}
              ${u}

              output[global_idx] = value;
            }`}else{if(w)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=a.kernelShape.length,I=a.pads.length,E="";return h?E=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${l}
              }`:E=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${l}
            `,`
            ${e.registerUniforms(f).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${S}>;

              var value = ${$}(${c});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${S-1}u; j++) {
                  offsets[j] = offset / ${pe("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${pe("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${i-S}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${pe("uniforms.strides",`j - ${i-S}u`,S)}
                    + offsets[j - ${i-S}u] - ${pe("uniforms.pads","j - 2u",I)};
                  ${E}
              }
              ${u}

              output[global_idx] = value;
            }`}},Da=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,wf=e=>`${Da(e)};${e.countIncludePad}`,bf=e=>`${Da(e)};${e.storageOrder};${e.dilations}`,Ba=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Pa=(e,t,i,s)=>{let[a,l]=Aa(t,s,i),u=W("x",t.dataType,t.dims.length),c=u.type.value,f="value += x_val;",h="";a.countIncludePad?h+=`value /= ${c}(uniforms.kernelSize);`:h+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[g,y,w,$,v]=za(l,a);g.push(...he(t.dims,l));let S=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${w};${$};${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(l)/64)},programUniforms:g}),getShaderSource:I=>Ra(I,u,t.dims.length,l.length,a,f,h,0,y,w,$,v)}},$f=e=>{let t=e.count_include_pad!==0,i=Ba(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let s={countIncludePad:t,...i,cacheKey:""};return{...s,cacheKey:wf(s)}},vf=(e,t)=>{Vi(e.inputs),e.compute(Pa("AveragePool",e.inputs[0],!1,t))},Ma={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},xf=e=>{let t=e.format;return{format:t,...Ma,cacheKey:t}},Sf=(e,t)=>{Vi(e.inputs),e.compute(Pa("GlobalAveragePool",e.inputs[0],!0,t))},Ua=(e,t,i,s)=>{let[a,l]=Aa(t,s,i),u=`
      value = max(x_val, value);
    `,c="",f=W("x",t.dataType,t.dims.length),h=["rank"],[g,y,w,$,v]=za(l,a);return g.push(...he(t.dims,l)),{name:e,shaderCache:{hint:`${s.cacheKey};${w};${$};${v}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(l)/64)},programUniforms:g}),getShaderSource:S=>Ra(S,f,t.dims.length,l.length,a,u,c,t.dataType===10?-65504:-1e5,y,w,$,v)}},Tf=(e,t)=>{Vi(e.inputs),e.compute(Ua("MaxPool",e.inputs[0],!1,t))},Ef=e=>{let t=e.storage_order,i=e.dilations,s=Ba(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:i,...s,cacheKey:""};return{...a,cacheKey:bf(a)}},If=e=>{let t=e.format;return{format:t,...Ma,cacheKey:t}},kf=(e,t)=>{Vi(e.inputs),e.compute(Ua("GlobalMaxPool",e.inputs[0],!0,t))}}),Cf,Of,Af,zf,py=b(()=>{xe(),ke(),Ye(),Ce(),Cf=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,l)=>l===t.axis||a===e[0].dims[l]).reduce((a,l)=>a&&l,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],s=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/s)||t.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Of=(e,t)=>{let i=N.normalizeAxis(t.axis,e[0].dims.length),s=e[0].dataType,a=s===3,l=e[0].dims,u=e[1].dataType,c=N.size(l),f=s===3||s===2,h=f?[Math.ceil(N.size(e[0].dims)/4)]:e[0].dims,g=e[1].dims,y=e.length>2?e[2]:void 0,w=y?f?[Math.ceil(N.size(y.dims)/4)]:y.dims:void 0,$=g.length===0||g.length===1&&g[0]===1,v=$===!1&&g.length===1,S=Je(c),I=$&&(!f||S===4),E=I?S:1,T=I&&!f?S:1,z=W("input",f?12:s,h.length,T),O=W("scale",u,g.length),R=y?W("zero_point",f?12:s,w.length):void 0,U=de("output",u,l.length,E),M=[z,O];R&&M.push(R);let V=[h,g];y&&V.push(w);let H=[{type:12,data:c/E},{type:12,data:i},{type:12,data:t.blockSize},...he(...V,l)],te=be=>{let ce=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${be.registerUniforms(ce).declareVariables(...M,U)}
      ${be.mainStart()}
          ${be.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${U.offsetToIndices("global_idx")};

          // Set input x
          ${f?`
            let input = ${z.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${E===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${z.getByOffset("global_idx")};`};

          // Set scale input
          ${$?`let scale_value= ${O.getByOffset("0")}`:v?`
            let scale_index = ${U.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${O.getByOffset("scale_index")};`:`
            var scale_indices: ${O.type.indices} = output_indices;
            let index = ${O.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${O.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${O.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${R?$?f?`
                let zero_point_input = ${R.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${R.getByOffset("0")}`:v?f?`
                let zero_point_index = ${U.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${R.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${U.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${R.getByOffset("zero_point_index")};`:f?`
                let zero_point_offset = ${O.indicesToOffset("scale_indices")};
                let zero_point_input = ${R.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${R.getByIndices("scale_indices")};`:`let zero_point_value = ${f?a?"i32":"u32":z.type.value}(0);`};
      // Compute and write output
      ${U.setByOffset("global_idx",`${U.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:R?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:l,dataType:u}],dispatchGroup:{x:Math.ceil(c/E/64),y:1,z:1},programUniforms:H})}},Af=(e,t)=>{Cf(e.inputs,t),e.compute(Of(e.inputs,t))},zf=e=>Le({axis:e.axis,blockSize:e.blockSize})}),Rf,Df,Bf,fy=b(()=>{Re(),xe(),Ce(),Rf=(e,t,i)=>{let s=e===t,a=e<t&&i<0,l=e>t&&i>0;if(s||a||l)throw new Error("Range these inputs' contents are invalid.")},Df=(e,t,i,s)=>{let a=Math.abs(Math.ceil((t-e)/i)),l=[a],u=a,c=[{type:12,data:u},{type:s,data:e},{type:s,data:i},...he(l)],f=h=>{let g=de("output",s,l.length),y=g.type.value,w=[{name:"outputSize",type:"u32"},{name:"start",type:y},{name:"delta",type:y}];return`
        ${h.registerUniforms(w).declareVariables(g)}
        ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${y}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c})}},Bf=e=>{let t=0,i=0,s=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),Ee.webgpu.validateInputContent&&Rf(t,i,s),e.compute(Df(t,i,s,e.inputs[0].dataType),{inputs:[]})}}),Pf,Mf,Uf,Nf,hy=b(()=>{xe(),ke(),Ye(),Ce(),Pf=(e,t,i,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,l=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return s==="i32"||s==="u32"?`atomicAdd(&${t}, bitcast<${s}>(${i}));`:`
              ${a}bitcast<${s}>(oldValue) + (${i})${l}`;case"max":return s==="i32"||s==="u32"?`atomicMax(&${t}, bitcast<${s}>(${i}));`:`
                ${a}max(bitcast<f32>(oldValue), (${i}))${l}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${t}, bitcast<${s}>(${i}));`:`${a}min(bitcast<${s}>(oldValue), (${i}))${l}`;case"mul":return`${a}(bitcast<${s}>(oldValue) * (${i}))${l}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Mf=(e,t)=>{let i=e[0].dims,s=e[1].dims,a=i,l=1,u=Math.ceil(N.sizeToDimension(s,s.length-1)/l),c=s[s.length-1],f=N.sizeFromDimension(i,c),h=[{type:12,data:u},{type:12,data:c},{type:12,data:f},...he(e[1].dims,e[2].dims,a)],g=y=>{let w=W("indices",e[1].dataType,e[1].dims.length),$=W("updates",e[2].dataType,e[2].dims.length,l),v=t.reduction!=="none"&&t.reduction!==""?Wl("output",e[0].dataType,a.length):de("output",e[0].dataType,a.length,l);return`
      ${y.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(w,$,v)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Pf(t.reduction,"output[data_offset + i]","value",v.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:g}},Uf=e=>Le({reduction:e.reduction}),Nf=(e,t)=>{e.compute(Mf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Ff,Vf,Lf,Na,qf,Wf,Hf,jf,Gf,Kf,Zf,Xf,Fa,Qf,Jf,Yf,eh,th,rh,ih,my=b(()=>{xe(),ke(),Ye(),Ce(),Ff=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Vf=(e,t,i)=>{t.every(a=>a>=0&&a<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return t.forEach((a,l)=>s[a]=e[l]),s},Lf=(e,t,i,s,a,l)=>{let[u,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],h=e[0].dims.length;if(u>0&&e.length>u&&e[u].dims.length>0)e[u].getFloat32Array().forEach(g=>l.push(g));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(g=>s.push(g)),s.length!==0&&s.length!==h&&i>=18&&s.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ff(s,t),t.axes.length>0&&Vf(s,t.axes,h).forEach((g,y)=>s[y]=g)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(g=>a.push(Number(g))),a.length!==0&&a.length!==h&&i>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof a<"u"&&s.length>0&&a.length>h)throw new Error("Resize requires only of scales or sizes to be specified")},Na=(e,t,i,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${s}(big / (${i}));
  let fract = ${s}(big % (${i})) / ${s}(${i});
  return whole + fract;
`,qf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Na("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Na("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Wf=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Hf=(e,t,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),a=e.length===0?s:e.slice();return t.length>0?(t.forEach((l,u)=>{s[l]=a[u],s[u+i]=a[t.length+u]}),s):a},jf=(e,t,i,s)=>{let a=[];if(i.length>0)if(s.length>0){if(e.forEach(l=>a.push(l)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((l,u)=>a[l]=i[u])}else i.forEach(l=>a.push(l));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((l,u)=>Math.round(l*t[u]))}return a},Gf=(e,t,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(l=>t[l]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(l=>t[l]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return i.axes.length>0?(i.axes.forEach(l=>t[l]=s),i.axes.forEach(l=>a[l]=Math.round(e[l]*t[l]))):(t.fill(s,0,t.length),a.forEach((l,u)=>a[u]=Math.round(l*t[u]))),a},Kf=(e,t,i,s,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${pe("uniforms.scales","i",s)};
        var roi_low = ${pe("uniforms.roi","i",a)};
        var roi_hi = ${pe("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${pe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Zf=(e,t,i,s,a,l,u)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${pe("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${pe("uniforms.roi","i",l)};
          var roi_hi = ${pe("uniforms.roi",`i + ${i.length}`,l)};
          var input_shape_i = ${pe("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${pe("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${u} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Xf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${pe("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Fa=(e,t,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",Qf=(e,t,i,s,a)=>{let[l,u,c,f]=i.length===2?[-1,0,1,-1]:[0,2,3,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(row, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(col, ${i[c]} - 1))`)};
      ${Fa(e,f,l,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${h} = originalIndices[${u}];
      var col:${h} = originalIndices[${c}];
      ${s?`if (row < 0 || row > (${i[u]} - 1) || col < 0 || col > (${i[c]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${i[u]} - 1));
      col = max(0, min(col, ${i[c]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${f}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${l}])`:"0"};
      var x11: ${h} = getInputValue(batch, channel, row1, col1);
      var x12: ${h} = getInputValue(batch, channel, row1, col2);
      var x21: ${h} = getInputValue(batch, channel, row2, col1);
      var x22: ${h} = getInputValue(batch, channel, row2, col2);
      var dx1: ${h} = abs(row - ${h}(row1));
      var dx2: ${h} = abs(${h}(row2) - row);
      var dy1: ${h} = abs(col - ${h}(col1));
      var dy2: ${h} = abs(${h}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Jf=(e,t,i,s,a,l,u,c,f,h)=>{let g=i.length===2,[y,w]=g?[0,1]:[2,3],$=e.type.value,v=S=>{let I=S===y?"row":"col";return`
      fn ${I}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${$} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${$} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[S]},
        ${s[S]}, ${i[S]}, ${l[S]}, ${l[S]} + ${i.length});
        var fractOriginalIdx: ${$} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${c} && (originalIdx < 0 || originalIdx > (${i[S]} - 1))) {
          return ${f};
        }
        var data: array<${$}, 4> = array<${$}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${I}: ${$} = originalIdx + ${$}(i);
          if (${I} < 0 || ${I} >= ${i[S]}) {
            ${h?`coefs[i + 1] = 0.0;
                        continue;`:c?`return ${f};`:`${I} = max(0, min(${I}, ${i[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${I})`)};
          data[i + 1] = ${S===y?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(y)};
    ${v(w)};
  fn getCubicInterpolationCoefs(s: ${$}) -> array<${$}, 4> {
    var absS = abs(s);
    var coeffs: array<${$}, 4> = array<${$}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${$} = 1.0 - absS;
    var twoMinusAbsS: ${$} = 2.0 - absS;
    var onePlusAbsS: ${$} = 1.0 + absS;
    coeffs[0] = ((${u} * onePlusAbsS - 5 * ${u}) * onePlusAbsS + 8 * ${u}) * onePlusAbsS - 4 * ${u};
    coeffs[1] = ((${u} + 2) * absS - (${u} + 3)) * absS * absS + 1;
    coeffs[2] = ((${u} + 2) * oneMinusAbsS - (${u} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${u} * twoMinusAbsS - 5 * ${u}) * twoMinusAbsS + 8 * ${u}) * twoMinusAbsS - 4 * ${u};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${$}, 4>, coefs: array<${$}, 4>) -> ${$} {
    var coefsSum: ${$} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${$} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Yf=(e,t,i,s,a)=>{let[l,u,c,f,h]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(depth, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(height, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(width, ${i[f]} - 1))`)};
      ${Fa(e,h,l,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${g} = originalIndices[${u}];
      var height:${g} = originalIndices[${c}];
      var width:${g} = originalIndices[${f}];
      ${s?`if (depth < 0 || depth > (${i[u]} - 1) || height < 0 || height > (${i[c]} - 1) || width < 0 || (width > ${i[f]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${i[u]} - 1));
      height = max(0, min(height, ${i[c]} - 1));
      width = max(0, min(width, ${i[f]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${h}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${l}])`:"0"};

      var x111: ${g} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${g} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${g} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${g} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${g} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${g} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${g} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${g} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${g} = abs(depth - ${g}(depth1));
      var dx2: ${g} = abs(${g}(depth2) - depth);
      var dy1: ${g} = abs(height - ${g}(height1));
      var dy2: ${g} = abs(${g}(height2) - height);
      var dz1: ${g} = abs(width - ${g}(width1));
      var dz2: ${g} = abs(${g}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},eh=(e,t,i,s,a,l)=>{let u=e.dims,c=Hf(l,t.axes,u.length),f=jf(u,s,a,t.axes),h=s.slice();s.length===0&&(h=u.map((T,z)=>T===0?1:f[z]/T),t.keepAspectRatioPolicy!=="stretch"&&(f=Gf(u,h,t)));let g=de("output",e.dataType,f.length),y=W("input",e.dataType,u.length),w=N.size(f),$=u.length===f.length&&u.every((T,z)=>T===f[z]),v=t.coordinateTransformMode==="tf_crop_and_resize",S=t.extrapolationValue,I=y.type.value,E=T=>`
      ${$?"":`
      ${qf(t.coordinateTransformMode,I)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Xf(y,u)};
              ${Wf(t.nearestMode,i,I)};
              ${Zf(y,g,u,f,h.length,c.length,v)};
              `;case"linear":return`
              ${Kf(g,u,f,h.length,c.length)};
              ${(()=>{if(u.length===2||u.length===4)return`${Qf(y,g,u,v,S)}`;if(u.length===3||u.length===5)return`${Yf(y,g,u,v,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(u.length===2||u.length===4)return`${Jf(y,g,u,f,h,c,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${T.registerUniform("output_size","u32").registerUniform("scales","f32",h.length).registerUniform("roi","f32",c.length).declareVariables(y,g)}
      ${T.mainStart()}
        ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${$?"output[global_idx] = input[global_idx];":`
        let output_indices = ${g.offsetToIndices("global_idx")};
        var input_indices: ${y.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${y.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${u.length===2||u.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${h.length>0?t.mode==="cubic"?h:h.length:""}|${a.length>0?a:""}|${c.length>0?c:""}|${$}|${t.mode==="nearest"?u.length:u}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},{type:1,data:h},{type:1,data:c},...he(u,f)]})}},th=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},rh=(e,t)=>{let i=[],s=[],a=[],l=th(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Lf(e.inputs,t,l,i,s,a),e.compute(eh(e.inputs[0],t,l,i,s,a),{inputs:[0]})},ih=e=>{let t=e.antialias,i=e.axes,s=e.coordinateTransformMode,a=e.cubicCoeffA,l=e.excludeOutside!==0,u=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,h=e.nearestMode===""?"simple":e.nearestMode;return Le({antialias:t,axes:i,coordinateTransformMode:s,cubicCoeffA:a,excludeOutside:l,extrapolationValue:u,keepAspectRatioPolicy:c,mode:f,nearestMode:h})}}),nh,sh,ah,gy=b(()=>{xe(),ke(),Ce(),nh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],s=e[2];if(t.dataType!==i.dataType||t.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],l=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==l)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let u=e[3];if(u.dims.length!==1)throw new Error("Beta must be 1D");if(u.dims[u.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let u=e[4];if(u.dims.length!==1)throw new Error("Bias must be 1D");if(u.dims[u.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},sh=(e,t,i,s)=>{let a=t.simplified,l=e[0].dims,u=N.size(l),c=l,f=u,h=l.slice(-1)[0],g=s?l.slice(0,-1).concat(1):[],y=!a&&e.length>3,w=e.length>4,$=s&&i>1,v=s&&i>2,S=i>3,I=64,E=Je(h),T=[{type:12,data:f},{type:12,data:E},{type:12,data:h},{type:1,data:t.epsilon}],z=R=>{let U=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],M=[W("x",e[0].dataType,e[0].dims,E),W("skip",e[1].dataType,e[1].dims,E),W("gamma",e[2].dataType,e[2].dims,E)];y&&M.push(W("beta",e[3].dataType,e[3].dims,E)),w&&M.push(W("bias",e[4].dataType,e[4].dims,E)),M.push(de("output",e[0].dataType,c,E)),$&&M.push(de("mean_output",1,g)),v&&M.push(de("inv_std_output",1,g)),S&&M.push(de("input_skip_bias_sum",e[0].dataType,c,E));let V=at(e[0].dataType),H=at(1,E);return`

      ${R.registerUniforms(U).declareVariables(...M)}
      var<workgroup> sum_shared : array<${H}, ${I}>;
      var<workgroup> sum_squared_shared : array<${H}, ${I}>;

      ${R.mainStart([I,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${I};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${I};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${I-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${w?"bias[offset1d + i]":V+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${mi(V,E,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${I};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ir("sum",E)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ir("square_sum",E)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${$?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${V}(mean)`}) *
            ${V}(inv_std_dev) * gamma[offset1d + i]
            ${y?"+ beta[offset1d + i]":""};
        }
      }`},O=[{dims:c,dataType:e[0].dataType}];return i>1&&O.push({dims:g,dataType:1}),i>2&&O.push({dims:g,dataType:1}),i>3&&O.push({dims:l,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${E};${$};${v};${S}`,inputDependencies:e.map((R,U)=>"type")},getShaderSource:z,getRunData:()=>({outputs:O,dispatchGroup:{x:Math.ceil(f/h)},programUniforms:T})}},ah=(e,t)=>{nh(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(sh(e.inputs,t,e.outputCount,!1),{outputs:i})}}),oh,Li,lh,Va,uh,dh,ch,ph,_y=b(()=>{xe(),ke(),Ye(),Ce(),oh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Li=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},lh=(e,t)=>{if(e.length>1){let i=Li(e,1),s=Li(e,2),a=Li(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),Le({starts:i,ends:s,axes:a})}else return t},Va=(e,t,i,s,a)=>{let l=e;return e<0&&(l+=i[s[t]]),a[t]<0?Math.max(0,Math.min(l,i[s[t]]-1)):Math.max(0,Math.min(l,i[s[t]]))},uh=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${pe("uniforms.input_shape","i",i.length)};
            let steps_i = ${pe("uniforms.steps","i",i.length)};
            let signs_i = ${pe("uniforms.signs","i",i.length)};
            let starts_i = ${pe("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,dh=(e,t)=>{let i=e[0].dims,s=N.size(i),a=t.axes.length>0?N.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],l=Li(e,4);l.forEach(E=>E!==0||(()=>{throw new Error("step cannot be 0")})),l.length===0&&(l=Array(a.length).fill(1));let u=t.starts.map((E,T)=>Va(E,T,i,a,l)),c=t.ends.map((E,T)=>Va(E,T,i,a,l));if(a.length!==u.length||a.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==i.length)for(let E=0;E<i.length;++E)a.includes(E)||(u.splice(E,0,0),c.splice(E,0,i[E]),l.splice(E,0,1));let f=l.map(E=>Math.sign(E));l.forEach((E,T,z)=>{if(E<0){let O=(c[T]-u[T])/E,R=u[T],U=R+O*l[T];u[T]=U,c[T]=R,z[T]=-E}});let h=i.slice(0);a.forEach((E,T)=>{h[E]=Math.ceil((c[E]-u[E])/l[E])});let g={dims:h,dataType:e[0].dataType},y=de("output",e[0].dataType,h.length),w=W("input",e[0].dataType,e[0].dims.length),$=N.size(h),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:u.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:l.length}],S=[{type:12,data:$},{type:12,data:u},{type:6,data:f},{type:12,data:l},...he(e[0].dims,h)],I=E=>`
      ${E.registerUniforms(v).declareVariables(w,y)}
        ${uh(w,y,i)}
        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${y.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${y.setByOffset("global_idx",w.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${u.length}_${l.length}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[g],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:S})}},ch=(e,t)=>{oh(e.inputs,t);let i=lh(e.inputs,t);e.compute(dh(e.inputs,i),{inputs:[0]})},ph=e=>{let t=e.starts,i=e.ends,s=e.axes;return Le({starts:t,ends:i,axes:s})}}),fh,hh,mh,gh,yy=b(()=>{xe(),ke(),Ye(),kr(),Ce(),fh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},hh=(e,t)=>{let i=e.inputs[0],s=i.dims,a=N.size(s),l=s.length,u=N.normalizeAxis(t.axis,l),c=u<s.length-1,f,h=[];c?(h=Array.from({length:l},(M,V)=>V),h[u]=l-1,h[l-1]=u,f=e.compute(Ft(i,h),{inputs:[i],outputs:[-1]})[0]):f=i;let g=f.dims,y=g[l-1],w=a/y,$=Je(y),v=y/$,S=64;w===1&&(S=256);let I=(M,V)=>V===4?`max(max(${M}.x, ${M}.y), max(${M}.z, ${M}.w))`:V===2?`max(${M}.x, ${M}.y)`:V===3?`max(max(${M}.x, ${M}.y), ${M}.z)`:M,E=W("x",f.dataType,f.dims,$),T=de("result",f.dataType,f.dims,$),z=E.type.value,O=at(f.dataType)==="f32"?`var threadMax = ${z}(-3.402823e+38f);`:`var threadMax = ${z}(-65504.0h);`,R=M=>`
      var<workgroup> rowMaxShared : ${z};
      var<workgroup> rowSumShared : ${z};
      var<workgroup> threadShared : array<${z}, ${S}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${z} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${z}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${M.registerUniform("packedCols","i32").declareVariables(E,T)}
      ${M.mainStart(S)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${S};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${O}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${z}(${I("threadShared[0]",$)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${z}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${z}(${Ir("threadShared[0]",$)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${z}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,U=e.compute({name:"Softmax",shaderCache:{hint:`${$};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:g,dataType:f.dataType}],dispatchGroup:{x:w},programUniforms:[{type:6,data:v}]}),getShaderSource:R},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(Ft(U,h),{inputs:[U]})},mh=(e,t)=>{fh(e.inputs),hh(e,t)},gh=e=>Le({axis:e.axis})}),La,_h,yh,wh,bh,wy=b(()=>{xe(),ke(),Ce(),La=e=>Array.from(e.getBigInt64Array(),Number),_h=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(La(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},yh=(e,t)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*t[s]);return i},wh=(e,t)=>{let i=e[0].dims,s=t??La(e[1]),a=yh(i,s),l=N.size(a),u=e[0].dataType,c=W("input",u,i.length),f=de("output",u,a.length),h=g=>`
      const inputShape = ${c.indices(...i)};
      ${g.registerUniform("output_size","u32").declareVariables(c,f)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${f.offsetToIndices("global_idx")};
      var input_indices: ${c.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${c.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${f.indicesGet("output_indices","i")}  % input_dim_i;

        ${c.indicesSet("input_indices","i","input_dim_value")}
      }
      ${f.setByOffset("global_idx",c.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...he(e[0].dims,a)]}),getShaderSource:h}},bh=e=>{_h(e.inputs),e.compute(wh(e.inputs),{inputs:[0]})}}),$h,vh,xh,by=b(()=>{xe(),ke(),Ce(),$h=(e,t,i,s,a)=>{let l=de("output_data",a,i.length,4),u=W("a_data",t[1].dataType,t[1].dims.length,4),c=W("b_data",t[2].dataType,t[2].dims.length,4),f=W("c_data",t[0].dataType,t[0].dims.length,4),h,g=(y,w,$)=>`select(${w}, ${y}, ${$})`;if(!s)h=l.setByOffset("global_idx",g(u.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let y=(w,$,v="")=>{let S=`a_data[index_a${$}][component_a${$}]`,I=`b_data[index_b${$}][component_b${$}]`,E=`bool(c_data[index_c${$}] & (0xffu << (component_c${$} * 8)))`;return`
            let output_indices${$} = ${l.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offset_a${$} = ${u.broadcastedIndicesToOffset(`output_indices${$}`,l)};
            let offset_b${$} = ${c.broadcastedIndicesToOffset(`output_indices${$}`,l)};
            let offset_c${$} = ${f.broadcastedIndicesToOffset(`output_indices${$}`,l)};
            let index_a${$} = offset_a${$} / 4u;
            let index_b${$} = offset_b${$} / 4u;
            let index_c${$} = offset_c${$} / 4u;
            let component_a${$} = offset_a${$} % 4u;
            let component_b${$} = offset_b${$} % 4u;
            let component_c${$} = offset_c${$} % 4u;
            ${w}[${$}] = ${v}(${g(S,I,E)});
          `};a===9?h=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:h=`
            ${y("output_data[global_idx]",0)}
            ${y("output_data[global_idx]",1)}
            ${y("output_data[global_idx]",2)}
            ${y("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(f,u,c,l)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${h}
      }`},vh=e=>{let t=e[1].dims,i=e[2].dims,s=e[0].dims,a=e[1].dataType,l=!(N.areEqual(t,i)&&N.areEqual(i,s)),u=t,c=N.size(t);if(l){let h=fi.calcShape(fi.calcShape(t,i,!1),s,!1);if(!h)throw new Error("Can't perform where op on the given tensors");u=h,c=N.size(u)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:h=>$h(h,e,u,l,a),getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...he(s,t,i,u)]})}},xh=e=>{e.compute(vh(e.inputs))}}),Sh,$y=b(()=>{B_(),na(),P_(),M_(),U_(),N_(),F_(),H_(),G_(),K_(),Z_(),X_(),Q_(),J_(),Y_(),ey(),ty(),ry(),iy(),ny(),sy(),ay(),oy(),ly(),uy(),Bp(),dy(),cy(),py(),fy(),hy(),ta(),my(),Hp(),gy(),_y(),yy(),Lp(),wy(),kr(),la(),by(),Sh=new Map([["Abs",[id]],["Acos",[nd]],["Acosh",[sd]],["Add",[jd]],["ArgMax",[Lu,ia]],["ArgMin",[Vu,ia]],["Asin",[ad]],["Asinh",[od]],["Atan",[ld]],["Atanh",[ud]],["Attention",[Ku]],["AveragePool",[vf,$f]],["BatchNormalization",[Ju]],["BiasAdd",[td]],["BiasSplitGelu",[qd]],["Cast",[cd,dd]],["Ceil",[hd]],["Clip",[fd]],["Concat",[ac,oc]],["Conv",[$a,wa]],["ConvTranspose",[Dc,Ac]],["Cos",[md]],["Cosh",[gd]],["CumSum",[Pc,Mc]],["DepthToSpace",[Vc,Lc]],["DequantizeLinear",[Af,zf]],["Div",[Gd]],["Einsum",[Kc,Zc]],["Elu",[_d,Pi]],["Equal",[Kd]],["Erf",[yd]],["Exp",[wd]],["Expand",[Yc]],["FastGelu",[tp]],["Floor",[bd]],["FusedConv",[$a,wa]],["Gather",[sp,np]],["GatherElements",[gp,mp]],["GatherBlockQuantized",[cp,pp]],["GatherND",[op,lp]],["Gelu",[$d]],["Gemm",[bp,wp]],["GlobalAveragePool",[Sf,xf]],["GlobalMaxPool",[kf,If]],["Greater",[Jd]],["GreaterOrEqual",[ec]],["GridSample",[Cp,Op]],["GroupQueryAttention",[Zp]],["HardSigmoid",[Cd,kd]],["InstanceNormalization",[Jp]],["LayerNormalization",[tf]],["LeakyRelu",[vd,Pi]],["Less",[Yd]],["LessOrEqual",[tc]],["Log",[Md]],["MatMul",[nf]],["MatMulNBits",[lf,uf]],["MaxPool",[Tf,Ef]],["Mul",[Zd]],["MultiHeadAttention",[Dp,zp]],["Neg",[Sd]],["Not",[xd]],["Pad",[yf]],["Pow",[Xd]],["QuickGelu",[Fd,Pi]],["Range",[Bf]],["Reciprocal",[Td]],["ReduceMin",[Pu]],["ReduceMean",[Au]],["ReduceMax",[Bu]],["ReduceSum",[Uu]],["ReduceProd",[Mu]],["ReduceL1",[zu]],["ReduceL2",[Ru]],["ReduceLogSum",[Fu]],["ReduceLogSumExp",[Du]],["ReduceSumSquare",[Nu]],["Relu",[Ed]],["Resize",[rh,ih]],["RotaryEmbedding",[Wp]],["ScatterND",[Nf,Uf]],["Sigmoid",[Id]],["Sin",[Od]],["Sinh",[Ad]],["Slice",[ch,ph]],["SkipLayerNormalization",[ah]],["Split",[Fp,Vp]],["Sqrt",[zd]],["Softmax",[mh,gh]],["Sub",[Qd]],["Tan",[Rd]],["Tanh",[Dd]],["ThresholdedRelu",[Pd,Pi]],["Tile",[bh]],["Transpose",[Jl,Yl]],["Where",[xh]]])}),Th,vy=b(()=>{Re(),hr(),Ce(),Th=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,s,a){L(e.programInfo.name);let l=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let h of t)c.push({binding:c.length,resource:{buffer:h.buffer}});for(let h of i)c.push({binding:c.length,resource:{buffer:h.buffer}});a&&c.push({binding:c.length,resource:a});let f=l.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let h={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(h)}u.setPipeline(e.computePipeline),u.setBindGroup(0,f),u.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Q(e.programInfo.name)}dispose(){}build(e,t){L(e.name);let i=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(h=>{i.features.has(h.feature)&&s.push(`enable ${h.extension};`)});let a=jl(t,this.backend.device.limits),l=e.getShaderSource(a),u=`${s.join(`
`)}
${a.additionalImplementations}
${l}`,c=i.createShaderModule({code:u,label:e.name});Ue("verbose",()=>`[WebGPU] ${e.name} shader code: ${u}`);let f=i.createComputePipeline({compute:{module:c,entryPoint:"main"},layout:"auto",label:e.name});return Q(e.name),{programInfo:e,computePipeline:f,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&i<=a&&s<=a)return[t,i,s];let l=t*i*s,u=Math.ceil(Math.sqrt(l));if(u>a){if(u=Math.ceil(Math.cbrt(l)),u>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}}),Eh={};C(Eh,{WebGpuBackend:()=>Oh});var Ih,kh,Ch,Oh,xy=b(()=>{Re(),xe(),hr(),zl(),R_(),$y(),vy(),Ih=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let a=e[s].dataType;switch(t[s]){case"none":{i.push("");break}case"type":{i.push(`${a}`);break}case"rank":{let l=e[s].dims.length;i.push(`${a};${l}`);break}case"dims":{let l=e[s].dims.join(",");i.push(`${a};${l}`);break}default:throw new Error(`unsupported input dependency: ${t[s]}`)}}return i.join("|")},kh=(e,t,i)=>{var a,l;let s=e.name;return(a=e.shaderCache)!=null&&a.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${Ih(t,((l=e.shaderCache)==null?void 0:l.inputDependencies)??new Array(t.length).fill("dims"))}`,s},Ch=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Oh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},a=l=>t.features.has(l)&&i.push(l)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(s),this.adapterInfo=new Ch(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Ll(this),this.programManager=new Th(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Us(e.logLevel,!!e.debug),this.device.onuncapturederror=l=>{l.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${l.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;L(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let l=i[a],u=l.kernelId,c=this.kernels.get(u),f=c.kernelType,h=c.kernelName,g=l.programName,y=l.inputTensorViews,w=l.outputTensorViews,$=t[a*2],v=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=$);let S=Number($-this.queryTimeBase),I=Number(v-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(I))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:y.map(E=>({dims:E.dims,dataType:fr(E.dataType)})),outputsMetadata:w.map(E=>({dims:E.dims,dataType:fr(E.dataType)})),kernelId:u,kernelType:f,kernelName:h,programName:g,startTime:S,endTime:I});else{let E="";y.forEach((z,O)=>{E+=`input[${O}]: [${z.dims}] | ${fr(z.dataType)}, `});let T="";w.forEach((z,O)=>{T+=`output[${O}]: [${z.dims}] | ${fr(z.dataType)}, `}),console.log(`[profiling] kernel "${u}|${f}|${h}|${g}" ${E}${T}start time: ${S} ns, execution time: ${I-S} ns`)}A("GPU",`${g}::${$}::${v}`)}e.unmap(),this.pendingQueries.delete(e)}),Q()}run(e,t,i,s,a,l){L(e.name);let u=[];for(let T=0;T<t.length;++T){let z=t[T].data;if(z===0)continue;let O=this.gpuDataManager.get(z);if(!O)throw new Error(`no GPU data for input: ${z}`);u.push(O)}let{outputs:c,dispatchGroup:f,programUniforms:h}=e.getRunData(t),g=i.length===0?c.map((T,z)=>z):i;if(g.length!==c.length)throw new Error(`Output size ${g.length} must be equal to ${c.length}.`);let y=[],w=[];for(let T=0;T<c.length;++T){if(!Number.isInteger(g[T])||g[T]<-3||g[T]>=l)throw new Error(`Invalid output index: ${g[T]}`);if(g[T]===-3)continue;let z=g[T]===-1,O=g[T]===-2,R=z||O?a(c[T].dataType,c[T].dims):s(g[T],c[T].dataType,c[T].dims);if(y.push(R),R.data===0)continue;let U=this.gpuDataManager.get(R.data);if(!U)throw new Error(`no GPU data for output: ${R.data}`);if(z&&this.temporaryData.push(U),O){let M=this.kernelPersistentData.get(this.currentKernelId);M||(M=[],this.kernelPersistentData.set(this.currentKernelId,M)),M.push(U)}w.push(U)}if(u.length!==t.length||w.length!==y.length){if(w.length===0)return Q(e.name),y;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let $;if(h){let T=0,z=[];h.forEach(M=>{let V=typeof M.data=="number"?[M.data]:M.data;if(V.length===0)return;let H=M.type===10?2:4,te,be;M.type===10?(be=V.length>4?16:V.length>2?8:V.length*H,te=V.length>4?16:H*V.length):(be=V.length<=2?V.length*H:16,te=16),T=Math.ceil(T/be)*be,z.push(T);let ce=M.type===10?8:4;T+=V.length>4?Math.ceil(V.length/ce)*te:V.length*H});let O=16;T=Math.ceil(T/O)*O;let R=new ArrayBuffer(T);h.forEach((M,V)=>{let H=z[V],te=typeof M.data=="number"?[M.data]:M.data;if(M.type===6)new Int32Array(R,H,te.length).set(te);else if(M.type===12)new Uint32Array(R,H,te.length).set(te);else if(M.type===10)new Uint16Array(R,H,te.length).set(te);else if(M.type===1)new Float32Array(R,H,te.length).set(te);else throw new Error(`Unsupported uniform type: ${fr(M.type)}`)});let U=this.gpuDataManager.create(T,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(U.buffer,0,R,0,T),this.gpuDataManager.release(U.id),$={offset:0,size:T,buffer:U.buffer}}let v=this.programManager.normalizeDispatchGroupSize(f),S=v[1]===1&&v[2]===1,I=kh(e,t,S),E=this.programManager.getArtifact(I);if(E||(E=this.programManager.build(e,v),this.programManager.setArtifact(I,E),Ue("info",()=>`[artifact] key: ${I}, programName: ${e.name}`)),h&&E.uniformVariablesInfo){if(h.length!==E.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${E.uniformVariablesInfo.length}, got ${h.length} in program "${E.programInfo.name}".`);for(let T=0;T<h.length;T++){let z=h[T],O=z.type,R=typeof z.data=="number"?1:z.data.length,[U,M]=E.uniformVariablesInfo[T];if(O!==U||R!==M)throw new Error(`Uniform variable ${T} mismatch: expect type ${U} with size ${M}, got type ${O} with size ${R} in program "${E.programInfo.name}".`)}}if(Ue("info",()=>`[ProgramManager] run "${e.name}" (key=${I}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let T={kernelId:this.currentKernelId,programName:E.programInfo.name,inputTensorViews:t,outputTensorViews:y};this.pendingKernels.push(T),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(T)}return this.programManager.run(E,u,w,v,$),Q(e.name),y}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,s){let a=Sh.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let l={kernelType:e,kernelName:s,kernelEntry:a[0],attributes:[a[1],i]};this.kernels.set(t,l)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let a=s.kernelType,l=s.kernelName,u=s.kernelEntry,c=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${l}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),Ue("info",()=>`[WebGPU] Start to run kernel "[${a}] ${l}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),u(t,c[1]),0}catch(h){return i.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${l}" failed. ${h}`)),1}finally{f&&i.push(this.device.popErrorScope().then(h=>h?`GPU validation error for kernel "[${a}] ${l}": ${h.message}`:null));for(let h of this.temporaryData)this.gpuDataManager.release(h.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,s){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let l=a.get(t),u=this.gpuDataManager.registerExternalBuffer(i,s,l);return a.set(t,[u,i]),u}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let s=await Xs(this,e,t);return Ns(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ue("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ue("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ue("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let a=this.getComputePassEncoder(),l=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(l.computePipeline),a.setBindGroup(0,l.bindGroup),a.dispatchWorkgroups(...l.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Ah={};C(Ah,{init:()=>Rh});var Fn,zh,Rh,Sy=b(()=>{xe(),hr(),ke(),z_(),Fn=class v_{constructor(t,i,s,a){this.module=t,this.dataType=i,this.data=s,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(N.size(t)!==N.size(this.dims))throw new Error("Invalid new shape");return new v_(this.module,this.dataType,this.data,t)}},zh=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let s=e.PTR_SIZE,a=i/e.PTR_SIZE,l=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*a++,l));let u=Number(e.getValue(s*a++,l));this.outputCount=Number(e.getValue(s*a++,l)),this.customDataOffset=Number(e.getValue(s*a++,"*")),this.customDataSize=Number(e.getValue(s*a++,l));let c=[];for(let f=0;f<u;f++){let h=Number(e.getValue(s*a++,l)),g=Number(e.getValue(s*a++,"*")),y=Number(e.getValue(s*a++,l)),w=[];for(let $=0;$<y;$++)w.push(Number(e.getValue(s*a++,l)));c.push(new Fn(e,h,g,w))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var u;let i=((u=t==null?void 0:t.inputs)==null?void 0:u.map(c=>typeof c=="number"?this.inputs[c]:c))??this.inputs,s=(t==null?void 0:t.outputs)??[],a=(c,f,h)=>new Fn(this.module,f,this.output(c,h),h),l=(c,f)=>{let h=Vr(c,f);if(!h)throw new Error(`Unsupported data type: ${c}`);let g=h>0?this.backend.gpuDataManager.create(h).id:0;return new Fn(this.module,c,g,f)};return this.backend.run(e,i,s,a,l,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let s=this.module.PTR_SIZE,a=s===4?"i32":"i64",l=this.module.stackAlloc((1+t.length)*s);this.module.setValue(l,t.length,a);for(let u=0;u<t.length;u++)this.module.setValue(l+s*(u+1),t[u],a);return this.module._JsepOutput(this.opKernelContext,e,l)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},Rh=async(e,t,i,s)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let l=(xy(),B(Eh)).WebGpuBackend,u=new l;await u.initialize(i,s),a("webgpu",[u,c=>u.alloc(Number(c)),c=>u.free(c),(c,f,h,g=!1)=>{if(g)Ue("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(h)}`),u.memcpy(Number(c),Number(f));else{Ue("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(h)}`);let y=t.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(h));u.upload(Number(f),y)}},async(c,f,h)=>{Ue("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${h}`),await u.download(Number(c),()=>t.HEAPU8.subarray(Number(f)>>>0,Number(f+h)>>>0))},(c,f,h)=>u.createKernel(c,Number(f),h,t.UTF8ToString(t._JsepGetNodeName(Number(f)))),c=>u.releaseKernel(c),(c,f,h,g)=>{Ue("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${h}, kernel=${c}, contextDataOffset=${f}`);let y=new zh(t,u,Number(f));return u.computeKernel(Number(c),y,g)},()=>u.captureBegin(),()=>u.captureEnd(),()=>u.replay()])}else{let l=new Ul(i);a("webnn",[l,()=>l.reserveTensorId(),u=>l.releaseTensorId(u),async(u,c,f,h,g)=>l.ensureTensor(u,c,f,h,g),(u,c)=>{l.uploadTensor(u,c)},async(u,c)=>l.downloadTensor(u,c),(u,c)=>l.registerMLContext(u,c),!!i.trace])}}}),Dh,qa,Wa,Cr,Bh,Ha,Vn,ja,Ga,Ka,Za,Xa,Qa,Ph=b(()=>{Re(),C_(),O_(),xe(),Nr(),Rs(),vl(),Dh=(e,t)=>{Ke()._OrtInit(e,t)!==0&&qe("Can't initialize onnxruntime.")},qa=async e=>{Dh(e.wasm.numThreads,In(e.logLevel))},Wa=async(e,t)=>{var s,a;(a=(s=Ke()).asyncInit)==null||a.call(s);let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let l=e.webgpu.powerPreference;if(l!==void 0&&l!=="low-power"&&l!=="high-performance")throw new Error(`Invalid powerPreference setting: "${l}"`);let u=e.webgpu.forceFallbackAdapter;if(u!==void 0&&typeof u!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${u}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:l,forceFallbackAdapter:u}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let l=(Sy(),B(Ah)).init;t==="webgpu"&&await l("webgpu",Ke(),e,i),t==="webnn"&&await l("webnn",Ke(),e)}},Cr=new Map,Bh=e=>{let t=Ke(),i=t.stackSave();try{let s=t.PTR_SIZE,a=t.stackAlloc(2*s);t._OrtGetInputOutputCount(e,a,a+s)!==0&&qe("Can't get session input/output count.");let l=s===4?"i32":"i64";return[Number(t.getValue(a,l)),Number(t.getValue(a+s,l))]}finally{t.stackRestore(i)}},Ha=(e,t)=>{let i=Ke(),s=i.stackSave(),a=0;try{let l=i.PTR_SIZE,u=i.stackAlloc(2*l);i._OrtGetInputOutputMetadata(e,t,u,u+l)!==0&&qe("Can't get session input/output metadata.");let c=Number(i.getValue(u,"*"));a=Number(i.getValue(u+l,"*"));let f=i.HEAP32[a/4];if(f===0)return[c,0];let h=i.HEAPU32[a/4+1],g=[];for(let y=0;y<h;y++){let w=Number(i.getValue(a+8+y*l,"*"));g.push(w!==0?i.UTF8ToString(w):Number(i.getValue(a+8+(y+h)*l,"*")))}return[c,f,g]}finally{i.stackRestore(s),a!==0&&i._OrtFree(a)}},Vn=e=>{let t=Ke(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},ja=async(e,t)=>{var y,w,$,v;let i,s,a=Ke();Array.isArray(e)?[i,s]=e:e.buffer===a.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=Vn(e);let l=0,u=0,c=0,f=[],h=[],g=[];try{if([u,f]=await $l(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let V=[];for(let H of t.externalData){let te=typeof H=="string"?H:H.path;V.push(Ms(typeof H=="string"?H:H.data).then(be=>{a.mountExternalData(te,be)}))}await Promise.all(V)}for(let V of(t==null?void 0:t.executionProviders)??[])if((typeof V=="string"?V:V.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof V!="string"){let H=V,te=H==null?void 0:H.context,be=H==null?void 0:H.gpuDevice,ce=H==null?void 0:H.deviceType,ye=H==null?void 0:H.powerPreference;te?a.currentContext=te:be?a.currentContext=await a.webnnCreateMLContext(be):a.currentContext=await a.webnnCreateMLContext({deviceType:ce,powerPreference:ye})}else a.currentContext=await a.webnnCreateMLContext();break}l=await a._OrtCreateSession(i,s,u),(y=a.webgpuOnCreateSession)==null||y.call(a,l),l===0&&qe("Can't create a session."),(w=a.jsepOnCreateSession)==null||w.call(a),a.currentContext&&(a.webnnRegisterMLContext(l,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[S,I]=Bh(l),E=!!(t!=null&&t.enableGraphCapture),T=[],z=[],O=[],R=[],U=[];for(let V=0;V<S;V++){let[H,te,be]=Ha(l,V);H===0&&qe("Can't get an input name."),h.push(H);let ce=a.UTF8ToString(H);T.push(ce),O.push(te===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:fr(te),shape:be})}for(let V=0;V<I;V++){let[H,te,be]=Ha(l,V+S);H===0&&qe("Can't get an output name."),g.push(H);let ce=a.UTF8ToString(H);z.push(ce),R.push(te===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:fr(te),shape:be});{if(E&&(t==null?void 0:t.preferredOutputLocation)===void 0){U.push("gpu-buffer");continue}let ye=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:(($=t==null?void 0:t.preferredOutputLocation)==null?void 0:$[ce])??"cpu",Ne=a.webnnIsGraphOutput;if(ye==="cpu"&&Ne&&Ne(l,ce)){U.push("ml-tensor-cpu-output");continue}if(ye!=="cpu"&&ye!=="cpu-pinned"&&ye!=="gpu-buffer"&&ye!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ye}.`);if(E&&ye!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ye}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);U.push(ye)}}let M=null;return U.some(V=>V==="gpu-buffer"||V==="ml-tensor"||V==="ml-tensor-cpu-output")&&(c=a._OrtCreateBinding(l),c===0&&qe("Can't create IO binding."),M={handle:c,outputPreferredLocations:U,outputPreferredLocationsEncoded:U.map(V=>V==="ml-tensor-cpu-output"?"ml-tensor":V).map(V=>Ps(V))}),Cr.set(l,[l,h,g,M,E,!1]),[l,T,z,O,R]}catch(S){throw h.forEach(I=>a._OrtFree(I)),g.forEach(I=>a._OrtFree(I)),c!==0&&a._OrtReleaseBinding(c)!==0&&qe("Can't release IO binding."),l!==0&&a._OrtReleaseSession(l)!==0&&qe("Can't release session."),S}finally{a._free(i),u!==0&&a._OrtReleaseSessionOptions(u)!==0&&qe("Can't release session options."),f.forEach(S=>a._free(S)),(v=a.unmountExternalData)==null||v.call(a)}},Ga=e=>{var f,h,g;let t=Ke(),i=Cr.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,a,l,u,c]=i;u&&(c&&t._OrtClearBoundOutputs(u.handle)!==0&&qe("Can't clear bound outputs."),t._OrtReleaseBinding(u.handle)!==0&&qe("Can't release IO binding.")),(f=t.jsepOnReleaseSession)==null||f.call(t,e),(h=t.webnnOnReleaseSession)==null||h.call(t,e),(g=t.webgpuOnReleaseSession)==null||g.call(t,e),a.forEach(y=>t._OrtFree(y)),l.forEach(y=>t._OrtFree(y)),t._OrtReleaseSession(s)!==0&&qe("Can't release session."),Cr.delete(e)},Ka=async(e,t,i,s,a,l,u=!1)=>{if(!e){t.push(0);return}let c=Ke(),f=c.PTR_SIZE,h=e[0],g=e[1],y=e[3],w=y,$,v;if(h==="string"&&(y==="gpu-buffer"||y==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(u&&y!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${l} when enableGraphCapture is true.`);if(y==="gpu-buffer"){let E=e[2].gpuBuffer;v=Vr(Fr(h),g);{let T=c.jsepRegisterBuffer;if(!T)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');$=T(s,l,E,v)}}else if(y==="ml-tensor"){let E=e[2].mlTensor;v=Vr(Fr(h),g);let T=c.webnnRegisterMLTensor;if(!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');$=T(s,E,Fr(h),g)}else{let E=e[2];if(Array.isArray(E)){v=f*E.length,$=c._malloc(v),i.push($);for(let T=0;T<E.length;T++){if(typeof E[T]!="string")throw new TypeError(`tensor data at index ${T} is not a string`);c.setValue($+T*f,Ht(E[T],i),"*")}}else{let T=c.webnnIsGraphInput,z=c.webnnIsGraphOutput;if(h!=="string"&&T&&z){let O=c.UTF8ToString(a);if(T(s,O)||z(s,O)){let R=Fr(h);v=Vr(R,g),w="ml-tensor";let U=c.webnnCreateTemporaryTensor,M=c.webnnUploadTensor;if(!U||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let V=await U(s,R,g);M(V,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),$=V}else v=E.byteLength,$=c._malloc(v),i.push($),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,v),$)}else v=E.byteLength,$=c._malloc(v),i.push($),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,v),$)}}let S=c.stackSave(),I=c.stackAlloc(4*g.length);try{g.forEach((T,z)=>c.setValue(I+z*f,T,f===4?"i32":"i64"));let E=c._OrtCreateTensor(Fr(h),$,v,I,g.length,Ps(w));E===0&&qe(`Can't create tensor for input/output. session=${s}, index=${l}.`),t.push(E)}finally{c.stackRestore(S)}},Za=async(e,t,i,s,a,l)=>{var be,ce,ye,Ne;let u=Ke(),c=u.PTR_SIZE,f=Cr.get(e);if(!f)throw new Error(`cannot run inference. invalid session id: ${e}`);let h=f[0],g=f[1],y=f[2],w=f[3],$=f[4],v=f[5],S=t.length,I=s.length,E=0,T=[],z=[],O=[],R=[],U=u.stackSave(),M=u.stackAlloc(S*c),V=u.stackAlloc(S*c),H=u.stackAlloc(I*c),te=u.stackAlloc(I*c);try{[E,T]=gl(l),K("wasm prepareInputOutputTensor");for(let me=0;me<S;me++)await Ka(i[me],z,R,e,g[t[me]],t[me],$);for(let me=0;me<I;me++)await Ka(a[me],O,R,e,y[s[me]],S+s[me],$);X("wasm prepareInputOutputTensor");for(let me=0;me<S;me++)u.setValue(M+me*c,z[me],"*"),u.setValue(V+me*c,g[t[me]],"*");for(let me=0;me<I;me++)u.setValue(H+me*c,O[me],"*"),u.setValue(te+me*c,y[s[me]],"*");if(w&&!v){let{handle:me,outputPreferredLocations:Se,outputPreferredLocationsEncoded:gt}=w;if(g.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${g.length}).`);K("wasm bindInputsOutputs");for(let j=0;j<S;j++){let ne=t[j];await u._OrtBindInput(me,g[ne],z[j])!==0&&qe(`Can't bind input[${j}] for session=${e}.`)}for(let j=0;j<I;j++){let ne=s[j];(be=a[j])!=null&&be[3]?u._OrtBindOutput(me,y[ne],O[j],0)!==0&&qe(`Can't bind pre-allocated output[${j}] for session=${e}.`):u._OrtBindOutput(me,y[ne],0,gt[ne])!==0&&qe(`Can't bind output[${j}] to ${Se[j]} for session=${e}.`)}X("wasm bindInputsOutputs"),Cr.set(e,[h,g,y,w,$,!0])}(ce=u.jsepOnRunStart)==null||ce.call(u,h),(ye=u.webnnOnRunStart)==null||ye.call(u,h);let Oe;w?Oe=await u._OrtRunWithBinding(h,w.handle,I,H,E):Oe=await u._OrtRun(h,V,M,S,te,I,H,E),Oe!==0&&qe("failed to call OrtRun().");let ge=[],Ae=[];K("wasm ProcessOutputTensor");for(let me=0;me<I;me++){let Se=Number(u.getValue(H+me*c,"*"));if(Se===O[me]){ge.push(a[me]);continue}let gt=u.stackSave(),j=u.stackAlloc(4*c),ne=!1,_e,ze=0;try{u._OrtGetTensorData(Se,j,j+c,j+2*c,j+3*c)!==0&&qe(`Can't access output tensor data on index ${me}.`);let Vt=c===4?"i32":"i64",_i=Number(u.getValue(j,Vt));ze=u.getValue(j+c,"*");let Qh=u.getValue(j+c*2,"*"),Cy=Number(u.getValue(j+c*3,Vt)),Ar=[];for(let dt=0;dt<Cy;dt++)Ar.push(Number(u.getValue(Qh+dt*c,Vt)));u._OrtFree(Qh)!==0&&qe("Can't free memory for tensor dims.");let zr=Ar.reduce((dt,it)=>dt*it,1);_e=fr(_i);let Hi=w==null?void 0:w.outputPreferredLocations[s[me]];if(_e==="string"){if(Hi==="gpu-buffer"||Hi==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let dt=[];for(let it=0;it<zr;it++){let gr=u.getValue(ze+it*c,"*"),Oy=u.getValue(ze+(it+1)*c,"*"),Ay=it===zr-1?void 0:Oy-gr;dt.push(u.UTF8ToString(gr,Ay))}ge.push([_e,Ar,dt,"cpu"])}else if(Hi==="gpu-buffer"&&zr>0){let dt=u.jsepGetBuffer;if(!dt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let it=dt(ze),gr=Vr(_i,zr);if(gr===void 0||!Ds(_e))throw new Error(`Unsupported data type: ${_e}`);ne=!0,ge.push([_e,Ar,{gpuBuffer:it,download:u.jsepCreateDownloader(it,gr,_e),dispose:()=>{u._OrtReleaseTensor(Se)!==0&&qe("Can't release tensor.")}},"gpu-buffer"])}else if(Hi==="ml-tensor"&&zr>0){let dt=u.webnnEnsureTensor,it=u.webnnIsGraphInputOutputTypeSupported;if(!dt||!it)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Vr(_i,zr)===void 0||!Bs(_e))throw new Error(`Unsupported data type: ${_e}`);if(!it(e,_e,!1))throw new Error(`preferredLocation "ml-tensor" for ${_e} output is not supported by current WebNN Context.`);let gr=await dt(e,ze,_i,Ar,!1);ne=!0,ge.push([_e,Ar,{mlTensor:gr,download:u.webnnCreateMLTensorDownloader(ze,_e),dispose:()=>{u.webnnReleaseTensorId(ze),u._OrtReleaseTensor(Se)}},"ml-tensor"])}else if(Hi==="ml-tensor-cpu-output"&&zr>0){let dt=u.webnnCreateMLTensorDownloader(ze,_e)(),it=ge.length;ne=!0,Ae.push((async()=>{let gr=[it,await dt];return u.webnnReleaseTensorId(ze),u._OrtReleaseTensor(Se),gr})()),ge.push([_e,Ar,[],"cpu"])}else{let dt=En(_e),it=new dt(zr);new Uint8Array(it.buffer,it.byteOffset,it.byteLength).set(u.HEAPU8.subarray(ze,ze+it.byteLength)),ge.push([_e,Ar,it,"cpu"])}}finally{u.stackRestore(gt),_e==="string"&&ze&&u._free(ze),ne||u._OrtReleaseTensor(Se)}}w&&!$&&(u._OrtClearBoundOutputs(w.handle)!==0&&qe("Can't clear bound outputs."),Cr.set(e,[h,g,y,w,$,!1]));for(let[me,Se]of await Promise.all(Ae))ge[me][2]=Se;return X("wasm ProcessOutputTensor"),ge}finally{(Ne=u.webnnOnRunEnd)==null||Ne.call(u,h),u.stackRestore(U),z.forEach(Oe=>u._OrtReleaseTensor(Oe)),O.forEach(Oe=>u._OrtReleaseTensor(Oe)),R.forEach(Oe=>u._free(Oe)),E!==0&&u._OrtReleaseRunOptions(E),T.forEach(Oe=>u._free(Oe))}},Xa=e=>{let t=Ke(),i=Cr.get(e);if(!i)throw new Error("invalid session id");let s=i[0],a=t._OrtEndProfiling(s);a===0&&qe("Can't get an profile file name."),t._OrtFree(a)},Qa=e=>{let t=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&t.push(s.buffer)}return t}}),Or,Dt,gi,qi,Wi,Ln,Ja,qn,Kr,Zr,Mh,Uh,Nh,Fh,Vh,Lh,qh,Wh,Hh=b(()=>{Re(),Ph(),Nr(),Cs(),Or=()=>!!Ee.wasm.proxy&&typeof document<"u",gi=!1,qi=!1,Wi=!1,qn=new Map,Kr=(e,t)=>{let i=qn.get(e);i?i.push(t):qn.set(e,[t])},Zr=()=>{if(gi||!qi||Wi||!Dt)throw new Error("worker not ready")},Mh=e=>{switch(e.data.type){case"init-wasm":gi=!1,e.data.err?(Wi=!0,Ja[1](e.data.err)):(qi=!0,Ja[0]()),Ln&&(URL.revokeObjectURL(Ln),Ln=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Uh=async()=>{if(!qi){if(gi)throw new Error("multiple calls to 'initWasm()' detected.");if(Wi)throw new Error("previous call to 'initWasm()' failed.");if(gi=!0,Or())return new Promise((e,t)=>{Dt==null||Dt.terminate(),cl().then(([i,s])=>{try{Dt=s,Dt.onerror=l=>t(l),Dt.onmessage=Mh,Ja=[e,t];let a={type:"init-wasm",in:Ee};if(!a.in.wasm.wasmPaths&&i){let l=pi();l&&(a.in.wasm.wasmPaths=l)}Dt.postMessage(a),Ln=i}catch(a){t(a)}},t)});try{await zs(Ee.wasm),await qa(Ee),qi=!0}catch(e){throw Wi=!0,e}finally{gi=!1}}},Nh=async e=>{if(Or())return Zr(),new Promise((t,i)=>{Kr("init-ep",[t,i]);let s={type:"init-ep",in:{epName:e,env:Ee}};Dt.postMessage(s)});await Wa(Ee,e)},Fh=async e=>Or()?(Zr(),new Promise((t,i)=>{Kr("copy-from",[t,i]);let s={type:"copy-from",in:{buffer:e}};Dt.postMessage(s,[e.buffer])})):Vn(e),Vh=async(e,t)=>{if(Or()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Zr(),new Promise((i,s)=>{Kr("create",[i,s]);let a={type:"create",in:{model:e,options:{...t}}},l=[];e instanceof Uint8Array&&l.push(e.buffer),Dt.postMessage(a,l)})}else return ja(e,t)},Lh=async e=>{if(Or())return Zr(),new Promise((t,i)=>{Kr("release",[t,i]);let s={type:"release",in:e};Dt.postMessage(s)});Ga(e)},qh=async(e,t,i,s,a,l)=>{if(Or()){if(i.some(u=>u[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(u=>u))throw new Error("pre-allocated output tensor is not supported for proxy.");return Zr(),new Promise((u,c)=>{Kr("run",[u,c]);let f=i,h={type:"run",in:{sessionId:e,inputIndices:t,inputs:f,outputIndices:s,options:l}};Dt.postMessage(h,Qa(f))})}else return Za(e,t,i,s,a,l)},Wh=async e=>{if(Or())return Zr(),new Promise((t,i)=>{Kr("end-profiling",[t,i]);let s={type:"end-profiling",in:e};Dt.postMessage(s)});Xa(e)}}),Ya,jh,Gh,Ty=b(()=>{Re(),Hh(),xe(),lt(),vl(),Ya=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jh=e=>{switch(e[3]){case"cpu":return new ht(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ds(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:a}=e[2];return ht.fromGpuBuffer(i,{dataType:t,dims:e[1],download:s,dispose:a})}case"ml-tensor":{let t=e[0];if(!Bs(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:a}=e[2];return ht.fromMLTensor(i,{dataType:t,dims:e[1],download:s,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Gh=class{async fetchModelAndCopyToWasmMemory(e){return Fh(await Ms(e))}async loadModel(e,t){L();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Vh(i,t),Q()}async dispose(){return Lh(this.sessionId)}async run(e,t,i){L();let s=[],a=[];Object.entries(e).forEach(y=>{let w=y[0],$=y[1],v=this.inputNames.indexOf(w);if(v===-1)throw new Error(`invalid input '${w}'`);s.push($),a.push(v)});let l=[],u=[];Object.entries(t).forEach(y=>{let w=y[0],$=y[1],v=this.outputNames.indexOf(w);if(v===-1)throw new Error(`invalid output '${w}'`);l.push($),u.push(v)});let c=s.map((y,w)=>Ya(y,()=>`input "${this.inputNames[a[w]]}"`)),f=l.map((y,w)=>y?Ya(y,()=>`output "${this.outputNames[u[w]]}"`):null),h=await qh(this.sessionId,a,c,u,f,i),g={};for(let y=0;y<h.length;y++)g[this.outputNames[u[y]]]=l[y]??jh(h[y]);return Q(),g}startProfiling(){}endProfiling(){Wh(this.sessionId)}}}),Kh={};C(Kh,{OnnxruntimeWebAssemblyBackend:()=>to,initializeFlags:()=>eo,wasmBackend:()=>Zh});var eo,to,Zh,Ey=b(()=>{Re(),Hh(),Ty(),eo=()=>{(typeof Ee.wasm.initTimeout!="number"||Ee.wasm.initTimeout<0)&&(Ee.wasm.initTimeout=0);let e=Ee.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Ee.wasm.simd=!1),typeof Ee.wasm.proxy!="boolean"&&(Ee.wasm.proxy=!1),typeof Ee.wasm.trace!="boolean"&&(Ee.wasm.trace=!1),typeof Ee.wasm.numThreads!="number"||!Number.isInteger(Ee.wasm.numThreads)||Ee.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ee.wasm.numThreads=1;else{let t=typeof navigator>"u"?x("node:os").cpus().length:navigator.hardwareConcurrency;Ee.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},to=class{async init(e){eo(),await Uh(),await Nh(e)}async createInferenceSessionHandler(e,t){let i=new Gh;return await i.loadModel(e,t),i}},Zh=new to}),Xh={};C(Xh,{InferenceSession:()=>ee,TRACE:()=>A,TRACE_EVENT_BEGIN:()=>K,TRACE_EVENT_END:()=>X,TRACE_FUNC_BEGIN:()=>L,TRACE_FUNC_END:()=>Q,Tensor:()=>ht,default:()=>ky,env:()=>Ee,registerBackend:()=>P}),Re(),Re(),Re();var Iy="1.23.0",ky=Ge;{let e=(Ey(),B(Kh)).wasmBackend;P("webgpu",e,5),P("webnn",e,5),P("cpu",e,10),P("wasm",e,10)}return Object.defineProperty(Ee.versions,"web",{value:Iy,enumerable:!0}),B(Xh)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */r.exports=o})(b_);var x_=b_.exports,sl={},S_={};Object.defineProperty(S_,"__esModule",{value:!0});var xs={},T_;Object.defineProperty(xs,"__esModule",{value:!0});xs.SileroLegacy=void 0;const jm=Oi;class al{constructor(n,o,d,p,m){this.ortInstance=n,this._session=o,this._h=d,this._c=p,this._sr=m,this.reset_state=()=>{const _=Array(128).fill(0);this._h=new this.ortInstance.Tensor("float32",_,[2,1,64]),this._c=new this.ortInstance.Tensor("float32",_,[2,1,64])},this.process=async _=>{var q;const b={input:new this.ortInstance.Tensor("float32",_,[1,_.length]),h:this._h,c:this._c,sr:this._sr},C=await this._session.run(b);this._h=C.hn,this._c=C.cn;const[k]=(q=C.output)==null?void 0:q.data;return{notSpeech:1-k,isSpeech:k}}}}xs.SileroLegacy=al;T_=al;al.new=async(r,n)=>{jm.log.debug("initializing vad");const o=await n(),d=await r.InferenceSession.create(o),p=new r.Tensor("int64",[16000n]),m=Array(2*64).fill(0),_=new r.Tensor("float32",m,[2,1,64]),x=new r.Tensor("float32",m,[2,1,64]);return jm.log.debug("vad is initialized"),new T_(r,d,_,x,p)};var Ss={},E_;Object.defineProperty(Ss,"__esModule",{value:!0});Ss.SileroV5=void 0;const Gm=Oi;function I_(r){const n=Array(256).fill(0);return new r.Tensor("float32",n,[2,1,128])}class ol{constructor(n,o,d,p){this._session=n,this._state=o,this._sr=d,this.ortInstance=p,this.reset_state=()=>{this._state=I_(this.ortInstance)},this.process=async m=>{var B;const x={input:new this.ortInstance.Tensor("float32",m,[1,m.length]),state:this._state,sr:this._sr},b=await this._session.run(x);this._state=b.stateN;const[C]=(B=b.output)==null?void 0:B.data;return{notSpeech:1-C,isSpeech:C}}}}Ss.SileroV5=ol;E_=ol;ol.new=async(r,n)=>{Gm.log.debug("Loading VAD...");const o=await n(),d=await r.InferenceSession.create(o),p=new r.Tensor("int64",[16000n]),m=I_(r);return Gm.log.debug("...finished loading VAD"),new E_(d,m,p,r)};(function(r){var n=$t&&$t.__createBinding||(Object.create?function(m,_,x,b){b===void 0&&(b=x);var C=Object.getOwnPropertyDescriptor(_,x);(!C||("get"in C?!_.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return _[x]}}),Object.defineProperty(m,b,C)}:function(m,_,x,b){b===void 0&&(b=x),m[b]=_[x]}),o=$t&&$t.__exportStar||function(m,_){for(var x in m)x!=="default"&&!Object.prototype.hasOwnProperty.call(_,x)&&n(_,m,x)};Object.defineProperty(r,"__esModule",{value:!0}),r.SileroV5=r.SileroLegacy=void 0,o(S_,r);var d=xs;Object.defineProperty(r,"SileroLegacy",{enumerable:!0,get:function(){return d.SileroLegacy}});var p=Ss;Object.defineProperty(r,"SileroV5",{enumerable:!0,get:function(){return p.SileroV5}})})(sl);var $n={};Object.defineProperty($n,"__esModule",{value:!0});$n.Resampler=void 0;const L$=Oi;class q${constructor(n){this.options=n,this.process=o=>{const d=[];for(const p of o)for(this.inputBuffer.push(p);this.hasEnoughDataForFrame();){const m=this.generateOutputFrame();d.push(m)}return d},n.nativeSampleRate<16e3&&L$.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}async*stream(n){for(const o of n)for(this.inputBuffer.push(o);this.hasEnoughDataForFrame();)yield this.generateOutputFrame()}hasEnoughDataForFrame(){return this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>=this.options.targetFrameSize}generateOutputFrame(){const n=new Float32Array(this.options.targetFrameSize);let o=0,d=0;for(;o<this.options.targetFrameSize;){let p=0,m=0;for(;d<Math.min(this.inputBuffer.length,(o+1)*this.options.nativeSampleRate/this.options.targetSampleRate);){const _=this.inputBuffer[d];_!==void 0&&(p+=_,m++),d++}n[o]=p/m,o++}return this.inputBuffer=this.inputBuffer.slice(d),n}}$n.Resampler=q$;(function(r){var n=$t&&$t.__createBinding||(Object.create?function(q,Z,P,G){G===void 0&&(G=P);var J=Object.getOwnPropertyDescriptor(Z,P);(!J||("get"in J?!Z.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return Z[P]}}),Object.defineProperty(q,G,J)}:function(q,Z,P,G){G===void 0&&(G=P),q[G]=Z[P]}),o=$t&&$t.__setModuleDefault||(Object.create?function(q,Z){Object.defineProperty(q,"default",{enumerable:!0,value:Z})}:function(q,Z){q.default=Z}),d=$t&&$t.__importStar||function(q){if(q&&q.__esModule)return q;var Z={};if(q!=null)for(var P in q)P!=="default"&&Object.prototype.hasOwnProperty.call(q,P)&&n(Z,q,P);return o(Z,q),Z};Object.defineProperty(r,"__esModule",{value:!0}),r.NonRealTimeVAD=r.defaultNonRealTimeVADOptions=void 0;const p=d(x_),m=bn,_=Ci,x=dr,b=ui,C=sl,k=$n;r.defaultNonRealTimeVADOptions={...x.defaultFrameProcessorOptions,modelURL:m.baseAssetPath+"silero_vad_legacy.onnx",modelFetcher:_.defaultModelFetcher};class B{static async new(Z={}){const P={...r.defaultNonRealTimeVADOptions,...Z};(0,x.validateOptions)(P),P.ortConfig!==void 0&&P.ortConfig(p);const G=()=>P.modelFetcher(P.modelURL),J=await C.SileroLegacy.new(p,G),se=new x.FrameProcessor(J.process,J.reset_state,{positiveSpeechThreshold:P.positiveSpeechThreshold,negativeSpeechThreshold:P.negativeSpeechThreshold,redemptionMs:P.redemptionMs,preSpeechPadMs:P.preSpeechPadMs,minSpeechMs:P.minSpeechMs,submitUserSpeechOnPause:P.submitUserSpeechOnPause},1536/16);return se.resume(),new this(G,p,P,se)}constructor(Z,P,G,J){this.modelFetcher=Z,this.ort=P,this.options=G,this.frameProcessor=J,this.frameSamples=1536}async*run(Z,P){const G={nativeSampleRate:P,targetSampleRate:16e3,targetFrameSize:this.frameSamples},J=new k.Resampler(G);let se=0,le=0,ae=0;for await(const fe of J.stream(Z)){const we=[];await this.frameProcessor.process(fe,$e=>{we.push($e)});for(const $e of we)switch($e.msg){case b.Message.SpeechStart:se=ae*this.frameSamples/16;break;case b.Message.SpeechEnd:le=(ae+1)*this.frameSamples/16,yield{audio:$e.audio,start:se,end:le};break}ae++}const Y=[];this.frameProcessor.endSegment(fe=>{Y.push(fe)});for(const fe of Y)switch(fe.msg){case b.Message.SpeechEnd:yield{audio:fe.audio,start:se,end:ae*this.frameSamples/16}}}}r.NonRealTimeVAD=B})(w_);var lr={};Object.defineProperty(lr,"__esModule",{value:!0});lr.audioFileToArray=lr.encodeWAV=lr.arrayBufferToBase64=lr.minFramesForTargetMS=void 0;function W$(r,n,o=16e3){return Math.ceil(r*o/1e3/n)}lr.minFramesForTargetMS=W$;function H$(r){const n=new Uint8Array(r),o=n.byteLength,d=new Array(o);for(var p=0;p<o;p++){const m=n[p];if(m===void 0)break;d[p]=String.fromCharCode(m)}return btoa(d.join(""))}lr.arrayBufferToBase64=H$;function j$(r,n=3,o=16e3,d=1,p=32){var m=p/8,_=d*m,x=new ArrayBuffer(44+r.length*m),b=new DataView(x);return Kn(b,0,"RIFF"),b.setUint32(4,36+r.length*m,!0),Kn(b,8,"WAVE"),Kn(b,12,"fmt "),b.setUint32(16,16,!0),b.setUint16(20,n,!0),b.setUint16(22,d,!0),b.setUint32(24,o,!0),b.setUint32(28,o*_,!0),b.setUint16(32,_,!0),b.setUint16(34,p,!0),Kn(b,36,"data"),b.setUint32(40,r.length*m,!0),n===1?K$(b,44,r):G$(b,44,r),x}lr.encodeWAV=j$;function G$(r,n,o){for(var d=0;d<o.length;d++,n+=4)r.setFloat32(n,o[d],!0)}function K$(r,n,o){for(var d=0;d<o.length;d++,n+=2){var p=Math.max(-1,Math.min(1,o[d]));r.setInt16(n,p<0?p*32768:p*32767,!0)}}function Kn(r,n,o){for(var d=0;d<o.length;d++)r.setUint8(n+d,o.charCodeAt(d))}async function Z$(r){const n=new OfflineAudioContext(1,1,44100),o=new FileReader;let d=null;if(await new Promise(_=>{o.addEventListener("loadend",x=>{const b=o.result;n.decodeAudioData(b,C=>{d=C,n.startRendering().then(k=>{console.log("Rendering completed successfully"),_()}).catch(k=>{console.error(`Rendering failed: ${k}`)})},C=>{console.log(`Error with decoding audio data: ${C}`)})}),o.readAsArrayBuffer(r)}),d===null)throw Error("some shit");let p=d,m=new Float32Array(p.length);for(let _=0;_<p.length;_++)for(let x=0;x<p.numberOfChannels;x++)m[_]+=p.getChannelData(x)[_];return{audio:m,sampleRate:p.sampleRate}}lr.audioFileToArray=Z$;var k_={};(function(r){var n=$t&&$t.__createBinding||(Object.create?function(se,le,ae,Y){Y===void 0&&(Y=ae);var fe=Object.getOwnPropertyDescriptor(le,ae);(!fe||("get"in fe?!le.__esModule:fe.writable||fe.configurable))&&(fe={enumerable:!0,get:function(){return le[ae]}}),Object.defineProperty(se,Y,fe)}:function(se,le,ae,Y){Y===void 0&&(Y=ae),se[Y]=le[ae]}),o=$t&&$t.__setModuleDefault||(Object.create?function(se,le){Object.defineProperty(se,"default",{enumerable:!0,value:le})}:function(se,le){se.default=le}),d=$t&&$t.__importStar||function(se){if(se&&se.__esModule)return se;var le={};if(se!=null)for(var ae in se)ae!=="default"&&Object.prototype.hasOwnProperty.call(se,ae)&&n(le,se,ae);return o(le,se),le};Object.defineProperty(r,"__esModule",{value:!0}),r.AudioNodeVAD=r.MicVAD=r.getDefaultRealTimeVADOptions=r.ort=r.DEFAULT_MODEL=void 0;const p=d(x_),m=Ci,_=dr,x=Oi,b=ui,C=sl,k=$n;r.DEFAULT_MODEL="legacy",r.ort=p;const B="vad.worklet.bundle.min.js",q="silero_vad_v5.onnx",Z="silero_vad_legacy.onnx",P=se=>({..._.defaultFrameProcessorOptions,onFrameProcessed:(le,ae)=>{},onVADMisfire:()=>{x.log.debug("VAD misfire")},onSpeechStart:()=>{x.log.debug("Detected speech start")},onSpeechEnd:()=>{x.log.debug("Detected speech end")},onSpeechRealStart:()=>{x.log.debug("Detected real speech start")},baseAssetPath:"./",onnxWASMBasePath:"./",model:se,workletOptions:{},getStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),pauseStream:async le=>{le.getTracks().forEach(ae=>{ae.stop()})},resumeStream:async le=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),ortConfig:le=>{le.env.logLevel="error"},startOnLoad:!0});r.getDefaultRealTimeVADOptions=P;class G{static async new(le={}){const ae={...(0,r.getDefaultRealTimeVADOptions)(le.model??r.DEFAULT_MODEL),...le};(0,_.validateOptions)(ae);const Y=new AudioContext,fe=await J.new(Y,ae),we=new G(ae,Y,fe);if(ae.startOnLoad)try{await we.start()}catch($e){console.error("Error starting micVad",$e)}return we}constructor(le,ae,Y,fe=!1){this.options=le,this.audioContext=ae,this.audioNodeVAD=Y,this.listening=fe,this.initialized=!1,this.pause=()=>{this.stream&&this.options.pauseStream(this.stream),this.audioNodeVAD.pause(),this.listening=!1},this.resume=async()=>{if(!this.stream){console.warn("Stream not initialized");return}this.stream=await this.options.resumeStream(this.stream),this.sourceNode&&this.sourceNode.disconnect(),this.sourceNode=new MediaStreamAudioSourceNode(this.audioContext,{mediaStream:this.stream}),this.audioNodeVAD.receive(this.sourceNode)},this.start=async()=>{var we;this.initialized||(this.initialized=!0,this.stream=await this.options.getStream(),this.sourceNode=new MediaStreamAudioSourceNode(this.audioContext,{mediaStream:this.stream}),this.audioNodeVAD.receive(this.sourceNode)),(we=this.stream)!=null&&we.active?(this.audioNodeVAD.start(),this.listening=!0):(await this.resume(),this.audioNodeVAD.start(),this.listening=!0)},this.destroy=()=>{this.listening&&this.pause(),this.stream?this.options.pauseStream(this.stream):console.warn("Stream not initialized"),this.sourceNode?this.sourceNode.disconnect():console.warn("Source node not initialized"),this.audioNodeVAD.destroy(),this.audioContext.close()},this.setOptions=we=>{this.audioNodeVAD.setFrameProcessorOptions(we)}}}r.MicVAD=G;class J{static async new(le,ae={}){const Y={...(0,r.getDefaultRealTimeVADOptions)(ae.model??r.DEFAULT_MODEL),...ae};(0,_.validateOptions)(Y),r.ort.env.wasm.wasmPaths=Y.onnxWASMBasePath,Y.ortConfig!==void 0&&Y.ortConfig(r.ort);const fe=Y.model==="v5"?q:Z,we=Y.baseAssetPath+fe,$e=Y.model==="v5"?C.SileroV5.new:C.SileroLegacy.new;let Ee;try{Ee=await $e(r.ort,()=>(0,m.defaultModelFetcher)(we))}catch(pt){throw console.error(`Encountered an error while loading model file ${we}`),pt}const tt=Y.model==="v5"?512:1536,ot=tt/16,Ut=new _.FrameProcessor(Ee.process,Ee.reset_state,{positiveSpeechThreshold:Y.positiveSpeechThreshold,negativeSpeechThreshold:Y.negativeSpeechThreshold,redemptionMs:Y.redemptionMs,preSpeechPadMs:Y.preSpeechPadMs,minSpeechMs:Y.minSpeechMs,submitUserSpeechOnPause:Y.submitUserSpeechOnPause},ot),Ct=new J(le,Y,Ut,tt,ot);return await Ct.setupAudioNode(),Ct}constructor(le,ae,Y,fe,we){this.ctx=le,this.options=ae,this.frameSamples=fe,this.msPerFrame=we,this.pause=()=>{this.frameProcessor.pause(this.handleFrameProcessorEvent)},this.start=()=>{this.frameProcessor.resume()},this.receive=$e=>{$e.connect(this.audioNode)},this.processFrame=async $e=>{await this.frameProcessor.process($e,this.handleFrameProcessorEvent)},this.handleFrameProcessorEvent=$e=>{switch($e.msg){case b.Message.FrameProcessed:this.options.onFrameProcessed($e.probs,$e.frame);break;case b.Message.SpeechStart:this.options.onSpeechStart();break;case b.Message.SpeechRealStart:this.options.onSpeechRealStart();break;case b.Message.VADMisfire:this.options.onVADMisfire();break;case b.Message.SpeechEnd:this.options.onSpeechEnd($e.audio);break}},this.destroy=()=>{var $e;this.audioNode instanceof AudioWorkletNode&&this.audioNode.port.postMessage({message:b.Message.SpeechStop}),this.audioNode.disconnect(),($e=this.gainNode)==null||$e.disconnect()},this.setFrameProcessorOptions=$e=>{this.frameProcessor.options={...this.frameProcessor.options,...$e}},this.frameProcessor=Y}async setupAudioNode(){if("audioWorklet"in this.ctx&&typeof AudioWorkletNode=="function")try{const fe=this.options.baseAssetPath+B;await this.ctx.audioWorklet.addModule(fe);const we=this.options.workletOptions??{};we.processorOptions={...we.processorOptions??{},frameSamples:this.frameSamples},this.audioNode=new AudioWorkletNode(this.ctx,"vad-helper-worklet",we),this.audioNode.port.onmessage=async $e=>{var Ee;switch((Ee=$e.data)==null?void 0:Ee.message){case b.Message.AudioFrame:let tt=$e.data.data;tt instanceof ArrayBuffer||(tt=new ArrayBuffer($e.data.data.byteLength),new Uint8Array(tt).set(new Uint8Array($e.data.data)));const ot=new Float32Array(tt);await this.processFrame(ot);break}};return}catch(fe){console.log("AudioWorklet setup failed, falling back to ScriptProcessor",fe)}this.resampler=new k.Resampler({nativeSampleRate:this.ctx.sampleRate,targetSampleRate:16e3,targetFrameSize:this.frameSamples??480});const ae=4096;this.audioNode=this.ctx.createScriptProcessor(ae,1,1),this.gainNode=this.ctx.createGain(),this.gainNode.gain.value=0;let Y=!1;this.audioNode.onaudioprocess=async fe=>{if(!Y){Y=!0;try{const we=fe.inputBuffer.getChannelData(0);if(fe.outputBuffer.getChannelData(0).fill(0),this.resampler){const Ee=this.resampler.process(we);for(const tt of Ee)await this.processFrame(tt)}}catch(we){console.error("Error processing audio:",we)}finally{Y=!1}}},this.audioNode.connect(this.gainNode),this.gainNode.connect(this.ctx.destination)}}r.AudioNodeVAD=J})(k_);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.getDefaultRealTimeVADOptions=r.MicVAD=r.DEFAULT_MODEL=r.AudioNodeVAD=r.utils=r.NonRealTimeVAD=r.Message=r.FrameProcessor=r.defaultModelFetcher=r.baseAssetPath=void 0;var n=bn;Object.defineProperty(r,"baseAssetPath",{enumerable:!0,get:function(){return n.baseAssetPath}});var o=Ci;Object.defineProperty(r,"defaultModelFetcher",{enumerable:!0,get:function(){return o.defaultModelFetcher}});var d=dr;Object.defineProperty(r,"FrameProcessor",{enumerable:!0,get:function(){return d.FrameProcessor}});var p=ui;Object.defineProperty(r,"Message",{enumerable:!0,get:function(){return p.Message}});var m=w_;Object.defineProperty(r,"NonRealTimeVAD",{enumerable:!0,get:function(){return m.NonRealTimeVAD}});const _=lr;r.utils={audioFileToArray:_.audioFileToArray,minFramesForTargetMS:_.minFramesForTargetMS,arrayBufferToBase64:_.arrayBufferToBase64,encodeWAV:_.encodeWAV};var x=k_;Object.defineProperty(r,"AudioNodeVAD",{enumerable:!0,get:function(){return x.AudioNodeVAD}}),Object.defineProperty(r,"DEFAULT_MODEL",{enumerable:!0,get:function(){return x.DEFAULT_MODEL}}),Object.defineProperty(r,"MicVAD",{enumerable:!0,get:function(){return x.MicVAD}}),Object.defineProperty(r,"getDefaultRealTimeVADOptions",{enumerable:!0,get:function(){return x.getDefaultRealTimeVADOptions}})})(__);class X${constructor(){this.vad=null,this.audioContext=null,this.chunks=[],this.isRecording=!1,this.onChunkCallback=null,this.sampleRate=16e3}async start(n){this.onChunkCallback=n,this.chunks=[],this.isRecording=!0;try{this.audioContext=new(window.AudioContext||window.webkitAudioContext)({sampleRate:this.sampleRate}),this.vad=await __.MicVAD.new({positiveSpeechThreshold:.8,negativeSpeechThreshold:.35,redemptionFrames:8,frameSamples:1536,minSpeechFrames:3,preSpeechPadFrames:1,onSpeechStart:()=>{console.log("[VAD] Speech detected")},onSpeechEnd:async o=>{console.log("[VAD] Speech ended, processing audio"),await this.processAudioSegment(o)},onVADMisfire:()=>{console.log("[VAD] False positive detected, ignoring")},onFrameProcessed:o=>{}}),await this.vad.start(),console.log("[VAD] Recording started")}catch(o){throw console.error("[VAD] Failed to start:",o),new Error("Kunne ikke starte VAD: "+o.message)}}async processAudioSegment(n){try{const o=this.float32ArrayToWav(n,this.sampleRate);console.log("[VAD] Created WAV chunk:",{size:o.size,duration:n.length/this.sampleRate}),this.onChunkCallback&&await this.onChunkCallback(o)}catch(o){console.error("[VAD] Failed to process audio segment:",o)}}float32ArrayToWav(n,o){const d=new Int16Array(n.length);for(let P=0;P<n.length;P++){const G=Math.max(-1,Math.min(1,n[P]));d[P]=G<0?G*32768:G*32767}const p=1,m=16,_=o*p*m/8,x=p*m/8,b=d.length*2,C=44,k=new ArrayBuffer(C+b),B=new DataView(k),q=(P,G)=>{for(let J=0;J<G.length;J++)B.setUint8(P+J,G.charCodeAt(J))};return q(0,"RIFF"),B.setUint32(4,36+b,!0),q(8,"WAVE"),q(12,"fmt "),B.setUint32(16,16,!0),B.setUint16(20,1,!0),B.setUint16(22,p,!0),B.setUint32(24,o,!0),B.setUint32(28,_,!0),B.setUint16(32,x,!0),B.setUint16(34,m,!0),q(36,"data"),B.setUint32(40,b,!0),new Int16Array(k,C).set(d),new Blob([k],{type:"audio/wav"})}async stop(){this.isRecording=!1,this.vad&&(this.vad.pause(),this.vad.destroy(),this.vad=null),this.audioContext&&(await this.audioContext.close(),this.audioContext=null),console.log("[VAD] Recording stopped")}pause(){this.vad&&this.vad.pause()}async resume(){this.vad&&await this.vad.start()}}window.Vue={createApp:B$};window.VADRecorder=X$;
