"use strict";window.g_aqk=class{constructor(c,a){this.g_aql=c,this.g_aqm=a,this.g_aqn=!1,this.g_act=()=>this.g_Gv()}g_aqo(){}g_aqp(e,a,b,c){this.g_aql.g_aqq(this.g_aqm,e,a,!!b,c)}g_aqr(e,a,b,c){return this.g_aql.g_aqs(this.g_aqm,e,a,!!b,c)}g_aqt(d,a,b){this.g_aql.g_aqu()?this.g_aqp(d,a,b):this.g_aql.g_aqv()._OnMessageFromDOM({type:"event",component:this.g_aqm,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_aqw(c,a){this.g_aql.g_aqx(this.g_aqm,c,a)}g_aqy(d){for(const[a,b]of d)this.g_aqw(a,b)}g_aqz(){return this.g_aql}g_aqA(){return this.g_aqm}g_UM(){this.g_aqn||(this.g_aql.g_aqB(this.g_act),this.g_aqn=!0)}g_UA(){this.g_aqn&&(this.g_aql.g_aqC(this.g_act),this.g_aqn=!1)}g_Gv(){}},"use strict",window.g_aqD=class extends g_aqk{constructor(c,a){super(c,a),this.g_aqE=new Map,this.g_aqF=!0,this.g_aqw("create",b=>this.g_aqG(b)),this.g_aqw("destroy",b=>this.g_aqH(b)),this.g_aqw("set-visible",b=>this.g_aqI(b)),this.g_aqw("update-position",b=>this.g_aqJ(b)),this.g_aqw("update-state",b=>this.g_aqK(b)),this.g_aqw("focus",b=>this.g_aqL(b)),this.g_aqw("set-css-style",b=>this.g_aqM(b))}g_aqN(b){this.g_aqF=!!b}g_aqO(c,e){this.g_aqw(c,b=>{const a=b.elementId,c=this.g_aqE.get(a);return e(c,b)})}g_aqG(d){const a=d.elementId,b=this.g_Vk(a,d);this.g_aqE.set(a,b),this.g_aqF&&document.body.appendChild(b)}g_Vk(){throw new Error("required override")}g_aqP(){}g_aqH(d){const a=d.elementId,b=this.g_aqE.get(a);this.g_aqP(b),this.g_aqF&&b.parentElement.removeChild(b),this.g_aqE.delete(a)}g_aqQ(d,a,b){b||(b={}),b.elementId=a,this.g_aqp(d,b)}g_aqR(d,a,b){b||(b={}),b.elementId=a,this.g_aqt(d,b)}g_aqI(c){if(this.g_aqF){const a=this.g_aqE.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aqJ(d){if(this.g_aqF){const a=this.g_aqE.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aqK(c){const a=this.g_aqE.get(c.elementId);this.g_aqS(a,c)}g_aqS(){throw new Error("required override")}g_aqL(c){const a=this.g_aqE.get(c.elementId);c.focus?a.focus():a.blur()}g_aqM(c){const a=this.g_aqE.get(c.elementId);a.style[c.prop]=c.val}g_aqT(b){return this.g_aqE.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_aqU=class b{constructor(b){this.g_aqV=b.g_aqW,this.g_aqX=null,this.g_abx="",this.g_aqY={},this.g_aqZ=null,this.g_aq_=null,this.g_aq$=[],this.g_ara=null,this.g_$x=null,this.g_ada=null,this.g_aae=-1,this.g_arb=()=>this.g_arc(),this.g_ard=[],this.g_abC=b.g_are,this.g_arf=!1,"html5"===this.g_abC&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aqx("runtime","cordova-fetch-local-file",b=>this.g_arg(b)),this.g_aqx("runtime","create-job-worker",b=>this.g_arh(b)),"cordova"===this.g_abC?document.addEventListener("deviceready",()=>this.g_TF(b)):this.g_TF(b)}g_eC(){this.g_ari(),this.g_aqX&&(this.g_aqX.onmessage=null,this.g_aqX=null),this.g_aqZ&&(this.g_aqZ.terminate(),this.g_aqZ=null),this.g_aq_&&(this.g_aq_.g_eC(),this.g_aq_=null),this.g_$x&&(this.g_$x.parentElement.removeChild(this.g_$x),this.g_$x=null)}g_arj(){return this.g_$x}g_ft(){return this.g_abx}g_aqu(){return this.g_aqV}g_aeC(){return this.g_abC}g_aeD(){return"cordova"===this.g_abC&&a}g_ark(){if(!this.g_aeD())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_TF(d){if(d.g_arl)this.g_abx=d.g_arl;else{this.g_abx=location.origin+location.pathname;const b=this.g_abx.lastIndexOf("/");-1!==b&&(this.g_abx=this.g_abx.substr(0,b+1))}if(d.g_arm)for(const[a,b]of Object.entries(d.g_arm))this.g_aqY[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aqX=a.port1,this.g_aqX.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_arn(b)),this.g_ada=new self.g_aro(this),await this.g_ada.g_Zc(),this.g_arp(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_arq(),this.g_aqV?await this.g_arr(d,a.port2):await this.g_ars(d,a.port2)}g_art(b){return this.g_aqY.hasOwnProperty(b)?this.g_aqY[b]:b}async g_aru(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aeD()){const a=await this.g_yx(f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_arp(){if(this.g_ark()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_arv(d){return{baseUrl:this.g_abx,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_aaC(),projectData:d.g_arw,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_are,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_arx,jobScheduler:this.g_ada.g_ary(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_aeD(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_arr(d,a){this.g_aqZ=await this.g_aru(d.g_arz,this.g_abx,{name:"Runtime"}),this.g_$x=document.createElement("canvas"),this.g_$x.style.display="none";const b=this.g_$x.transferControlToOffscreen();document.body.appendChild(this.g_$x),this.g_aqZ.postMessage(Object.assign(this.g_arv(d),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:b,workerDependencyScripts:d.g_arA||[],engineScripts:d.g_arB}),[a,b,...this.g_ada.g_arC()]),this.g_aq$=h.map(b=>new b(this)),this.g_arD()}async g_ars(a,b){this.g_$x=document.createElement("canvas"),this.g_$x.style.display="none",document.body.appendChild(this.g_$x),this.g_aq$=h.map(b=>new b(this)),this.g_arD();const c=a.g_arB.map(b=>new URL(b,this.g_abx).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_arv(a),{isInWorker:!1,messagePort:b,canvas:this.g_$x});this.g_aq_=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aq_,d)}async g_arh(){const b=await this.g_ada.g_arE();return{outputPort:b,transferables:[b]}}g_aqv(){if(this.g_aqV)throw new Error("not available in worker mode");return this.g_aq_}g_aqq(f,a,b,c,d){this.g_aqX.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_arf?void 0:d)}g_aqs(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_aqX.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_arf?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_arF(c);else if("result"===a)this.g_arG(c);else if("runtime-ready"===a)this.g_arH();else throw new Error(`unknown message '${a}'`)}g_arF(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_arI(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_arI(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_arI(c,!1,d.toString())}):this.g_arI(c,!0,f))}g_arI(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aqX.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_arG(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_aqx(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_arJ(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_arD(){for(const b of this.g_aq$)if("runtime"===b.g_aqA())return void(this.g_ara=b);throw new Error("cannot find runtime DOM handler")}g_arn(b){this.g_aqq("debugger","message",b)}g_arH(){for(const b of this.g_aq$)b.g_aqo()}static g_aaC(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_aqB(b){this.g_ard.push(b),this.g_arK()}g_aqC(c){const a=this.g_ard.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_ard.splice(a,1),this.g_ard.length||this.g_ari()}g_arK(){-1===this.g_aae&&this.g_ard.length&&(this.g_aae=requestAnimationFrame(this.g_arb))}g_ari(){-1!==this.g_aae&&(cancelAnimationFrame(this.g_aae),this.g_aae=-1)}g_arc(){this.g_aae=-1;for(const b of this.g_ard)b();this.g_arK()}g_arL(c,a){this.g_ara.g_arL(c,a)}g_arM(b){this.g_ara.g_arM(b)}g_arN(){this.g_ara.g_arN()}g_arO(b){this.g_ara.g_arO(b)}g_yX(b){return!!c[b]}async g_add(c){const a=await this.g_aqs("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_ge(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gf(b){return!this.g_ge(b)}async g_arg(c){const a=c.filename;switch(c.as){case"text":return await this.g_yB(a);case"blob":return await this.g_yx(a);case"blob-url":return await this.g_arP(a);default:throw new Error("unsupported type");}}g_arQ(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_yB(b){const a=await this.g_arQ(b);return await q(a)}g_arR(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_arS(b.filename,b.g_arT,b.g_arU)}}g_arV(f){return new Promise((g,b)=>{d.push({filename:f,g_arT:b=>{e--,this.g_arR(),g(b)},g_arU:c=>{e--,this.g_arR(),b(c)}}),this.g_arR()})}async g_arS(c,a,b){try{const b=await this.g_arQ(c),d=await r(b);a(d)}catch(c){b(c)}}async g_yx(d,a){a||(a=s(d));const e=await this.g_arV(d);return new Blob([e],{type:a})}async g_arP(c){const a=await this.g_yx(c);return URL.createObjectURL(a)}g_arq(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_arf=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){return window.parent&&window.parent.document.hasFocus()}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_aqk{constructor(c){super(c,"runtime"),this.g_arW=!0,this.g_arX="any",this.g_arY=null,c.g_aqx("canvas","update-size",b=>this.g_arZ(b)),c.g_aqx("runtime","invoke-download",b=>this.g_ar_(b)),c.g_aqx("runtime","raster-svg-image",b=>this.g_ar$(b)),c.g_aqx("runtime","set-target-orientation",b=>this.g_asa(b)),c.g_aqx("runtime","register-sw",()=>this.g_asb()),c.g_aqx("runtime","post-to-debugger",b=>this.g_asc(b)),c.g_aqx("runtime","before-start-ticking",()=>this.g_asd()),c.g_aqx("runtime","debug-highlight",b=>this.g_ase(b));const a=c.g_arj();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_aav()),this.g_asf=new Set,this.g_asg=new WeakSet,this.g_ash=!1}g_asd(){return window.addEventListener("visibilitychange",()=>this.g_adc(document.hidden)),document.addEventListener("pause",()=>this.g_adc(!0)),document.addEventListener("resume",()=>this.g_adc(!1)),{isSuspended:!!(document.hidden||c)}}g_aqo(){window.addEventListener("focus",()=>this.g_asi("window-focus")),window.addEventListener("blur",()=>this.g_asi("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_aaw()),window.addEventListener("webkitfullscreenchange",()=>this.g_aaw()),window.addEventListener("mozfullscreenchange",()=>this.g_aaw()),window.addEventListener("fullscreenerror",b=>this.g_aax(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aax(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aax(b)),window.addEventListener("keydown",b=>this.g_asj("keydown",b)),window.addEventListener("keyup",b=>this.g_asj("keyup",b)),window.addEventListener("mousemove",b=>this.g_ask("mousemove",b)),window.addEventListener("mousedown",b=>this.g_ask("mousedown",b)),window.addEventListener("mouseup",b=>this.g_ask("mouseup",b)),window.addEventListener("dblclick",b=>this.g_ask("dblclick",b)),window.addEventListener("wheel",b=>this.g_asl("wheel",b)),"undefined"==typeof g_asm?(window.addEventListener("touchstart",b=>this.g_asn("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_asn("pointermove",b)),window.addEventListener("touchend",b=>this.g_asn("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_asn("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aso("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aso("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aso("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aso("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_asp(b)),window.addEventListener("devicemotion",b=>this.g_asq(b));const c=()=>this.g_arN();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_asi(c,a){this.g_aqp(c,a||null,!0)}g_aav(){this.g_aqp("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_asa(b){this.g_arX=b.targetOrientation}g_asr(){const c=this.g_arX;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aaw(){const b=g_aqU.g_aaC();b&&"any"!==this.g_arX&&this.g_asr(),this.g_aqp("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aax(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aqp("fullscreenerror",{isFullscreen:g_aqU.g_aaC(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_adc(b){b?this.g_aql.g_ari():this.g_aql.g_arK(),this.g_aqp("visibilitychange",{hidden:b})}g_asj(c,a){this.g_aqt(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_ask(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aqt(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_asl(c,a){this.g_aqp(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_aso(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_aqt(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_asn(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aqt(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_asp(b){this.g_aqp("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_asq(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aqp("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_arZ(d){const a=this.g_aqz(),b=a.g_arj();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_arp(),this.g_arW&&(b.style.display="",this.g_arW=!1)}g_ar_(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_ar$(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_arN(){const c=[...this.g_asf];if(this.g_asf.clear(),!this.g_ash)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_asg.has(d)||this.g_asf.add(d)})}}g_arL(d,a){if("function"!=typeof d.play)throw new Error("missing play function");if(this.g_asg.delete(d),a)return void this.g_asf.add(d);let b;try{b=d.play()}catch(a){return void this.g_asf.add(d)}b&&b.catch(()=>{this.g_asg.has(d)||this.g_asf.add(d)})}g_arM(b){this.g_asf.delete(b),this.g_asg.add(b)}g_arO(b){this.g_ash=!!b}g_ase(d){const a=d.show;if(!a)return void(this.g_arY&&(this.g_arY.style.display="none"));this.g_arY||(this.g_arY=document.createElement("div"),this.g_arY.id="inspectOutline",document.body.appendChild(this.g_arY));const b=this.g_arY;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_asb(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_asc(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_aqU.g_arJ(d)}{const c=document.currentScript.src;self.g_aro=class{constructor(a){this.g_ass=a,this.g_abx=c.substr(0,c.lastIndexOf("/")+1),this.g_aff=Math.min(navigator.hardwareConcurrency||2,16),this.g_ast=null,this.g_asu=[],this.g_afd=null,this.g_asv=null}async g_Zc(){if(this.g_asw)throw new Error("already initialised");this.g_asw=!0;const c=this.g_ass.g_art("dispatchWorker.js");this.g_ast=await this.g_ass.g_aru(c,this.g_abx,{name:"DispatchWorker"});const a=new MessageChannel;this.g_afd=a.port1,this.g_ast.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_asv=await this.g_arE()}async g_arE(){const f=this.g_asu.length,a=this.g_ass.g_art("jobWorker.js"),b=await this.g_ass.g_aru(a,this.g_abx,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_ast.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_asu.push(b),d.port1}g_ary(){return{inputPort:this.g_afd,outputPort:this.g_asv,maxNumWorkers:this.g_aff}}g_arC(){return[this.g_afd,this.g_asv]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aqU({g_aqW:!1,g_arz:"workerMain.js",g_arB:["scripts/c3runtime.js"],g_are:"html5"})}{const b=class extends g_aqk{constructor(b){super(b,"stranianelli_htmlelement"),this.g_aqw("prova",b=>this.g_asx(b))}g_asx(b){console.log(b)}};g_aqU.g_arJ(b)}{const b=class extends g_aqk{constructor(b){super(b,"browser"),this.g_abC="",this.g_aqw("get-initial-state",b=>this.g_at_(b)),this.g_aqw("ready-for-sw-messages",()=>this.g_at$()),this.g_aqw("alert",b=>this.g_aua(b)),this.g_aqw("close",()=>this.g_aub()),this.g_aqw("set-focus",b=>this.g_aqL(b)),this.g_aqw("vibrate",b=>this.g_auc(b)),this.g_aqw("lock-orientation",b=>this.g_aud(b)),this.g_aqw("unlock-orientation",()=>this.g_aue()),this.g_aqw("navigate",b=>this.g_auf(b)),this.g_aqw("request-fullscreen",b=>this.g_aug(b)),this.g_aqw("exit-fullscreen",b=>this.g_auh(b)),window.addEventListener("online",()=>this.g_asI(!0)),window.addEventListener("offline",()=>this.g_asI(!1)),document.addEventListener("backbutton",()=>this.g_aui()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_auj(b))}g_at_(b){return this.g_abC=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_at$(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aqp("sw-message",b.data))}g_asI(b){this.g_aqp("online-state",{isOnline:b})}g_aui(){this.g_aqp("backbutton")}g_auj(b){b.handled=!0,this.g_aqp("backbutton")}g_auk(){return"nwjs"===this.g_abC?nw.Window.get():null}g_aua(b){alert(b.message)}g_aub(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aqL(c){const d=c.isFocus;if("nwjs"===this.g_abC){const b=this.g_auk();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_auc(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aud(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aue(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_auf(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aul();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_asH&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aug(c){const a=c.isNWjs;if(a)nw.Window.get().enterFullscreen();else{const b=document.documentElement;b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?b.webkitRequestFullScreen():b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}}g_auh(c){const a=c.isNWjs;a?nw.Window.get().leaveFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aqU.g_arJ(b)}