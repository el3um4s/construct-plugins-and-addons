"use strict";window.g_agS=class{constructor(c,a){this.g_agT=c,this.g_agU=a,this.g_agV=!1,this.g_aah=()=>this.g_FL()}g_agW(){}g_agX(e,a,b,c){this.g_agT.g_agY(this.g_agU,e,a,!!b,c)}g_agZ(e,a,b,c){return this.g_agT.g_ag_(this.g_agU,e,a,!!b,c)}g_ag$(d,a,b){this.g_agT.g_aha()?this.g_agX(d,a,b):this.g_agT.g_ahb()._OnMessageFromDOM({type:"event",component:this.g_agU,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_ahc(c,a){this.g_agT.g_ahd(this.g_agU,c,a)}g_ahe(d){for(const[a,b]of d)this.g_ahc(a,b)}g_ahf(){return this.g_agT}g_ahg(){return this.g_agU}g_SE(){this.g_agV||(this.g_agT.g_ahh(this.g_aah),this.g_agV=!0)}g_Ss(){this.g_agV&&(this.g_agT.g_ahi(this.g_aah),this.g_agV=!1)}g_FL(){}},"use strict",window.g_ahj=class extends g_agS{constructor(c,a){super(c,a),this.g_ahk=new Map,this.g_ahl=!0,this.g_ahc("create",b=>this.g_ahm(b)),this.g_ahc("destroy",b=>this.g_ahn(b)),this.g_ahc("set-visible",b=>this.g_aho(b)),this.g_ahc("update-position",b=>this.g_ahp(b)),this.g_ahc("update-state",b=>this.g_ahq(b)),this.g_ahc("focus",b=>this.g_ahr(b)),this.g_ahc("set-css-style",b=>this.g_ahs(b))}g_aht(b){this.g_ahl=!!b}g_ahu(c,e){this.g_ahc(c,b=>{const a=b.elementId,c=this.g_ahk.get(a);return e(c,b)})}g_ahm(d){const a=d.elementId,b=this.g_Tc(a,d);this.g_ahk.set(a,b),this.g_ahl&&document.body.appendChild(b)}g_Tc(){throw new Error("required override")}g_ahv(){}g_ahn(d){const a=d.elementId,b=this.g_ahk.get(a);this.g_ahv(b),this.g_ahl&&b.parentElement.removeChild(b),this.g_ahk.delete(a)}g_ahw(d,a,b){b||(b={}),b.elementId=a,this.g_agX(d,b)}g_ahx(d,a,b){b||(b={}),b.elementId=a,this.g_ag$(d,b)}g_aho(c){if(this.g_ahl){const a=this.g_ahk.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_ahp(d){if(this.g_ahl){const a=this.g_ahk.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_ahq(c){const a=this.g_ahk.get(c.elementId);this.g_ahy(a,c)}g_ahy(){throw new Error("required override")}g_ahr(c){const a=this.g_ahk.get(c.elementId);c.focus?a.focus():a.blur()}g_ahs(c){const a=this.g_ahk.get(c.elementId);a.style[c.prop]=c.val}g_ahz(b){return this.g_ahk.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_ahA=class b{constructor(b){this.g_ahB=b.g_ahC,this.g_ahD=null,this.g_$m="",this.g_ahE={},this.g_ahF=null,this.g_ahG=null,this.g_ahH=[],this.g_ahI=null,this.g_Zq=null,this.g_aaQ=null,this.g_ZX=-1,this.g_ahJ=()=>this.g_ahK(),this.g_ahL=[],this.g_$r=b.g_ahM,"html5"===this.g_$r&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_ahd("runtime","cordova-fetch-local-file",b=>this.g_ahN(b)),"cordova"===this.g_$r?document.addEventListener("deviceready",()=>this.g_Rw(b)):this.g_Rw(b)}g_eA(){this.g_ahO(),this.g_ahD&&(this.g_ahD.onmessage=null,this.g_ahD=null),this.g_ahF&&(this.g_ahF.terminate(),this.g_ahF=null),this.g_ahG&&(this.g_ahG.g_eA(),this.g_ahG=null),this.g_Zq&&(this.g_Zq.parentElement.removeChild(this.g_Zq),this.g_Zq=null)}g_ahP(){return this.g_Zq}g_fp(){return this.g_$m}g_aha(){return this.g_ahB}g_aco(){return this.g_$r}g_acp(){return"cordova"===this.g_$r&&a}g_ahQ(){if(!this.g_acp())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_Rw(d){if(d.g_ahR)this.g_$m=d.g_ahR;else{this.g_$m=location.origin+location.pathname;const b=this.g_$m.lastIndexOf("/");-1!==b&&(this.g_$m=this.g_$m.substr(0,b+1))}if(d.g_ahS)for(const[a,b]of Object.entries(d.g_ahS))this.g_ahE[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_ahD=a.port1,this.g_ahD.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_ahT(b)),this.g_aaQ=new self.g_ahU(this),await this.g_aaQ.g_WY(),this.g_ahV(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),this.g_ahB?await this.g_ahW(d,a.port2):await this.g_ahX(d,a.port2)}g_ahY(b){return this.g_ahE.hasOwnProperty(b)?this.g_ahE[b]:b}async g_ahZ(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_acp()){const a=await this.g_yo(f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_ahV(){if(this.g_ahQ()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_ah_(d){return{baseUrl:this.g_$m,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g__s(),projectData:d.g_ah$,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_ahM,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aia,jobScheduler:this.g_aaQ.g_aib(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_acp(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_ahW(d,a){this.g_ahF=await this.g_ahZ(d.g_aic,this.g_$m,{name:"Runtime"}),this.g_Zq=document.createElement("canvas"),this.g_Zq.style.display="none";const b=this.g_Zq.transferControlToOffscreen();document.body.appendChild(this.g_Zq),this.g_ahF.postMessage(Object.assign(this.g_ah_(d),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:b,workerDependencyScripts:d.g_aid||[],engineScripts:d.g_aie}),[a,b,...this.g_aaQ.g_aif()]),this.g_ahH=h.map(b=>new b(this)),this.g_aig()}async g_ahX(a,b){this.g_Zq=document.createElement("canvas"),this.g_Zq.style.display="none",document.body.appendChild(this.g_Zq),this.g_ahH=h.map(b=>new b(this)),this.g_aig();const c=a.g_aie.map(b=>new URL(b,this.g_$m).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_ah_(a),{isInWorker:!1,messagePort:b,canvas:this.g_Zq});this.g_ahG=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_ahG,d)}g_ahb(){if(this.g_ahB)throw new Error("not available in worker mode");return this.g_ahG}g_agY(f,a,b,c,d){this.g_ahD.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},d)}g_ag_(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_ahD.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aih(c);else if("result"===a)this.g_aii(c);else if("runtime-ready"===a)this.g_aij();else throw new Error(`unknown message '${a}'`)}g_aih(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aik(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aik(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aik(c,!1,d.toString())}):this.g_aik(c,!0,f))}g_aik(d,a,b){this.g_ahD.postMessage({type:"result",responseId:d,isOk:a,result:b})}g_aii(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_ahd(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_ail(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_aig(){for(const b of this.g_ahH)if("runtime"===b.g_ahg())return void(this.g_ahI=b);throw new Error("cannot find runtime DOM handler")}g_ahT(b){this.g_agY("debugger","message",b)}g_aij(){for(const b of this.g_ahH)b.g_agW()}static g__s(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_ahh(b){this.g_ahL.push(b),this.g_aim()}g_ahi(c){const a=this.g_ahL.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_ahL.splice(a,1),this.g_ahL.length||this.g_ahO()}g_aim(){-1===this.g_ZX&&this.g_ahL.length&&(this.g_ZX=requestAnimationFrame(this.g_ahJ))}g_ahO(){-1!==this.g_ZX&&(cancelAnimationFrame(this.g_ZX),this.g_ZX=-1)}g_ahK(){this.g_ZX=-1;for(const b of this.g_ahL)b();this.g_aim()}g_ain(c,a){this.g_ahI.g_ain(c,a)}g_aio(b){this.g_ahI.g_aio(b)}g_aip(){this.g_ahI.g_aip()}g_aiq(b){this.g_ahI.g_aiq(b)}g_yN(b){return!!c[b]}async g_aaT(c){const a=await this.g_ag_("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_ga(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gb(b){return!this.g_ga(b)}async g_ahN(c){const a=c.filename;switch(c.as){case"text":return await this.g_yr(a);case"blob":return await this.g_yo(a);case"blob-url":return await this.g_air(a);default:throw new Error("unsupported type");}}g_ais(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_yr(b){const a=await this.g_ais(b);return await q(a)}g_ait(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_aiu(b.filename,b.g_aiv,b.g_aiw)}}g_aix(f){return new Promise((g,b)=>{d.push({filename:f,g_aiv:b=>{e--,this.g_ait(),g(b)},g_aiw:c=>{e--,this.g_ait(),b(c)}}),this.g_ait()})}async g_aiu(c,a,b){try{const b=await this.g_ais(c),d=await r(b);a(d)}catch(c){b(c)}}async g_yo(d,a){a||(a=s(d));const e=await this.g_aix(d);return new Blob([e],{type:a})}async g_air(c){const a=await this.g_yo(c);return URL.createObjectURL(a)}}}{function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let b=!1;document.addEventListener("pause",()=>b=!0),document.addEventListener("resume",()=>b=!1);const c=class extends g_agS{constructor(c){super(c,"runtime"),this.g_aiy=!0,this.g_aiz="any",this.g_aiA=null,c.g_ahd("canvas","update-size",b=>this.g_aiB(b)),c.g_ahd("runtime","invoke-download",b=>this.g_aiC(b)),c.g_ahd("runtime","raster-svg-image",b=>this.g_aiD(b)),c.g_ahd("runtime","set-target-orientation",b=>this.g_aiE(b)),c.g_ahd("runtime","register-sw",()=>this.g_aiF()),c.g_ahd("runtime","post-to-debugger",b=>this.g_aiG(b)),c.g_ahd("runtime","before-start-ticking",()=>this.g_aiH()),c.g_ahd("runtime","debug-highlight",b=>this.g_aiI(b));const a=c.g_ahP();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g__m()),this.g_aiJ=new Set,this.g_aiK=new WeakSet,this.g_aiL=!1}g_aiH(){return window.addEventListener("visibilitychange",()=>this.g_aaS(document.hidden)),document.addEventListener("pause",()=>this.g_aaS(!0)),document.addEventListener("resume",()=>this.g_aaS(!1)),{isSuspended:!!(document.hidden||b)}}g_agW(){window.addEventListener("focus",this.g_aiM("window-focus")),window.addEventListener("blur",this.g_aiM("window-blur")),window.addEventListener("fullscreenchange",()=>this.g__n()),window.addEventListener("webkitfullscreenchange",()=>this.g__n()),window.addEventListener("mozfullscreenchange",()=>this.g__n()),window.addEventListener("fullscreenerror",b=>this.g__o(b)),window.addEventListener("webkitfullscreenerror",b=>this.g__o(b)),window.addEventListener("mozfullscreenerror",b=>this.g__o(b)),window.addEventListener("keydown",b=>this.g_aiN("keydown",b)),window.addEventListener("keyup",b=>this.g_aiN("keyup",b)),window.addEventListener("mousemove",b=>this.g_aiO("mousemove",b)),window.addEventListener("mousedown",b=>this.g_aiO("mousedown",b)),window.addEventListener("mouseup",b=>this.g_aiO("mouseup",b)),window.addEventListener("dblclick",b=>this.g_aiO("dblclick",b)),window.addEventListener("wheel",b=>this.g_aiP("wheel",b)),"undefined"==typeof g_aiQ?(window.addEventListener("touchstart",b=>this.g_aiR("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aiR("pointermove",b)),window.addEventListener("touchend",b=>this.g_aiR("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aiR("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aiS("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aiS("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aiS("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aiS("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_aiT(b)),window.addEventListener("devicemotion",b=>this.g_aiU(b));const b=()=>this.g_aip();window.addEventListener("pointerup",b,!0),window.addEventListener("touchend",b,!0),window.addEventListener("click",b,!0),window.addEventListener("keydown",b,!0),window.addEventListener("gamepadconnected",b,!0)}g_aiM(b){this.g_agX(b,null,!0)}g__m(){this.g_agX("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_aiE(b){this.g_aiz=b.targetOrientation}g_aiV(){const c=this.g_aiz;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g__n(){const b=g_ahA.g__s();b&&"any"!==this.g_aiz&&this.g_aiV(),this.g_agX("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g__o(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_agX("fullscreenerror",{isFullscreen:g_ahA.g__s(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aaS(b){b?this.g_agT.g_ahO():this.g_agT.g_aim(),this.g_agX("visibilitychange",{hidden:b})}g_aiN(c,a){this.g_ag$(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_aiO(a,b){f(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_ag$(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_aiP(c,a){this.g_agX(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_aiS(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_ag$(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_aiR(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_ag$(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_aiT(b){this.g_agX("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_aiU(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_agX("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_aiB(d){const a=this.g_ahf(),b=a.g_ahP();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_ahV(),this.g_aiy&&(b.style.display="",this.g_aiy=!1)}g_aiC(g){const b=g.url,c=g.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d);const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(a),e.removeChild(d)}async g_aiD(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_aip(){const c=[...this.g_aiJ];if(this.g_aiJ.clear(),!this.g_aiL)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aiK.has(d)||this.g_aiJ.add(d)})}}g_ain(d,a){if("function"!=typeof d.play)throw new Error("missing play function");if(this.g_aiK.delete(d),a)return void this.g_aiJ.add(d);let b;try{b=d.play()}catch(a){return void this.g_aiJ.add(d)}b&&b.catch(()=>{this.g_aiK.has(d)||this.g_aiJ.add(d)})}g_aio(b){this.g_aiJ.delete(b),this.g_aiK.add(b)}g_aiq(b){this.g_aiL=!!b}g_aiI(d){const a=d.show;if(!a)return void(this.g_aiA&&(this.g_aiA.style.display="none"));this.g_aiA||(this.g_aiA=document.createElement("div"),this.g_aiA.id="inspectOutline",document.body.appendChild(this.g_aiA));const b=this.g_aiA;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aiF(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aiG(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_ahA.g_ail(c)}{const c=document.currentScript.src;self.g_ahU=class{constructor(a){this.g_aiW=a,this.g_$m=c.substr(0,c.lastIndexOf("/")+1),this.g_aiX=navigator.hardwareConcurrency||2,this.g_aiY=null,this.g_aiZ=[],this.g_acR=null,this.g_ai_=[]}async g_WY(){if(this.g_ai$)throw new Error("already initialised");this.g_ai$=!0;const d=this.g_aiW.g_ahY("dispatchWorker.js");this.g_aiY=await this.g_aiW.g_ahZ(d,this.g_$m,{name:"DispatchWorker"});const a=new MessageChannel;this.g_acR=a.port1,this.g_aiY.postMessage({type:"_init","in-port":a.port2},[a.port2]);const e=[];for(let c=0,a=this.g_aiX;c<a;++c)e.push(this.g_aja(c));await Promise.all(e)}async g_aja(f){const a=this.g_aiW.g_ahY("jobWorker.js"),b=await this.g_aiW.g_ahZ(a,this.g_$m,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;this.g_ai_.push(d.port1),this.g_aiY.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aiZ.push(b)}g_aib(){return{inputPort:this.g_acR,outputPorts:this.g_ai_}}g_aif(){return[this.g_acR,...this.g_ai_]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_ahA({g_ahC:!1,g_aic:"workerMain.js",g_aie:["scripts/c3runtime.js"],g_ahM:"html5"})}