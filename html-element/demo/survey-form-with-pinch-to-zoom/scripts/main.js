"use strict";window.g_arl=class{constructor(c,a){this.g_arm=c,this.g_arn=a,this.g_aro=!1,this.g_act=()=>this.g_Gv()}g_arp(){}g_arq(e,a,b,c){this.g_arm.g_arr(this.g_arn,e,a,!!b,c)}g_ars(e,a,b,c){return this.g_arm.g_art(this.g_arn,e,a,!!b,c)}g_aru(d,a,b){this.g_arm.g_arv()?this.g_arq(d,a,b):this.g_arm.g_arw()._OnMessageFromDOM({type:"event",component:this.g_arn,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_arx(c,a){this.g_arm.g_ary(this.g_arn,c,a)}g_arz(d){for(const[a,b]of d)this.g_arx(a,b)}g_arA(){return this.g_arm}g_arB(){return this.g_arn}g_UM(){this.g_aro||(this.g_arm.g_arC(this.g_act),this.g_aro=!0)}g_UA(){this.g_aro&&(this.g_arm.g_arD(this.g_act),this.g_aro=!1)}g_Gv(){}},"use strict",window.g_arE=class extends g_arl{constructor(c,a){super(c,a),this.g_arF=new Map,this.g_arG=!0,this.g_arx("create",b=>this.g_arH(b)),this.g_arx("destroy",b=>this.g_arI(b)),this.g_arx("set-visible",b=>this.g_arJ(b)),this.g_arx("update-position",b=>this.g_arK(b)),this.g_arx("update-state",b=>this.g_arL(b)),this.g_arx("focus",b=>this.g_arM(b)),this.g_arx("set-css-style",b=>this.g_arN(b))}g_arO(b){this.g_arG=!!b}g_arP(c,e){this.g_arx(c,b=>{const a=b.elementId,c=this.g_arF.get(a);return e(c,b)})}g_arH(d){const a=d.elementId,b=this.g_Vk(a,d);this.g_arF.set(a,b),this.g_arG&&document.body.appendChild(b)}g_Vk(){throw new Error("required override")}g_arQ(){}g_arI(d){const a=d.elementId,b=this.g_arF.get(a);this.g_arQ(b),this.g_arG&&b.parentElement.removeChild(b),this.g_arF.delete(a)}g_arR(d,a,b){b||(b={}),b.elementId=a,this.g_arq(d,b)}g_arS(d,a,b){b||(b={}),b.elementId=a,this.g_aru(d,b)}g_arJ(c){if(this.g_arG){const a=this.g_arF.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_arK(d){if(this.g_arG){const a=this.g_arF.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_arL(c){const a=this.g_arF.get(c.elementId);this.g_arT(a,c)}g_arT(){throw new Error("required override")}g_arM(c){const a=this.g_arF.get(c.elementId);c.focus?a.focus():a.blur()}g_arN(c){const a=this.g_arF.get(c.elementId);a.style[c.prop]=c.val}g_arU(b){return this.g_arF.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_arV=class b{constructor(b){this.g_arW=b.g_arX,this.g_arY=null,this.g_abx="",this.g_arZ={},this.g_ar_=null,this.g_ar$=null,this.g_asa=[],this.g_asb=null,this.g_$x=null,this.g_ada=null,this.g_aae=-1,this.g_asc=()=>this.g_asd(),this.g_ase=[],this.g_abC=b.g_asf,this.g_asg=!1,"html5"===this.g_abC&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_ary("runtime","cordova-fetch-local-file",b=>this.g_ash(b)),this.g_ary("runtime","create-job-worker",b=>this.g_asi(b)),"cordova"===this.g_abC?document.addEventListener("deviceready",()=>this.g_TF(b)):this.g_TF(b)}g_eC(){this.g_asj(),this.g_arY&&(this.g_arY.onmessage=null,this.g_arY=null),this.g_ar_&&(this.g_ar_.terminate(),this.g_ar_=null),this.g_ar$&&(this.g_ar$.g_eC(),this.g_ar$=null),this.g_$x&&(this.g_$x.parentElement.removeChild(this.g_$x),this.g_$x=null)}g_ask(){return this.g_$x}g_ft(){return this.g_abx}g_arv(){return this.g_arW}g_aeC(){return this.g_abC}g_aeD(){return"cordova"===this.g_abC&&a}g_asl(){if(!this.g_aeD())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_TF(d){if(d.g_asm)this.g_abx=d.g_asm;else{this.g_abx=location.origin+location.pathname;const b=this.g_abx.lastIndexOf("/");-1!==b&&(this.g_abx=this.g_abx.substr(0,b+1))}if(d.g_asn)for(const[a,b]of Object.entries(d.g_asn))this.g_arZ[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_arY=a.port1,this.g_arY.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aso(b)),this.g_ada=new self.g_asp(this),await this.g_ada.g_Zc(),this.g_asq(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_asr(),this.g_arW?await this.g_ass(d,a.port2):await this.g_ast(d,a.port2)}g_asu(b){return this.g_arZ.hasOwnProperty(b)?this.g_arZ[b]:b}async g_asv(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aeD()){const a=await this.g_yx(f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_asq(){if(this.g_asl()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_asw(d){return{baseUrl:this.g_abx,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_aaC(),projectData:d.g_asx,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_asf,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_asy,jobScheduler:this.g_ada.g_asz(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_aeD(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_ass(d,a){this.g_ar_=await this.g_asv(d.g_asA,this.g_abx,{name:"Runtime"}),this.g_$x=document.createElement("canvas"),this.g_$x.style.display="none";const b=this.g_$x.transferControlToOffscreen();document.body.appendChild(this.g_$x),this.g_ar_.postMessage(Object.assign(this.g_asw(d),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:b,workerDependencyScripts:d.g_asB||[],engineScripts:d.g_asC}),[a,b,...this.g_ada.g_asD()]),this.g_asa=h.map(b=>new b(this)),this.g_asE()}async g_ast(a,b){this.g_$x=document.createElement("canvas"),this.g_$x.style.display="none",document.body.appendChild(this.g_$x),this.g_asa=h.map(b=>new b(this)),this.g_asE();const c=a.g_asC.map(b=>new URL(b,this.g_abx).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_asw(a),{isInWorker:!1,messagePort:b,canvas:this.g_$x});this.g_ar$=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_ar$,d)}async g_asi(){const b=await this.g_ada.g_asF();return{outputPort:b,transferables:[b]}}g_arw(){if(this.g_arW)throw new Error("not available in worker mode");return this.g_ar$}g_arr(f,a,b,c,d){this.g_arY.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_asg?void 0:d)}g_art(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_arY.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_asg?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_asG(c);else if("result"===a)this.g_asH(c);else if("runtime-ready"===a)this.g_asI();else throw new Error(`unknown message '${a}'`)}g_asG(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_asJ(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_asJ(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_asJ(c,!1,d.toString())}):this.g_asJ(c,!0,f))}g_asJ(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_arY.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_asH(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_ary(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_asK(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_asE(){for(const b of this.g_asa)if("runtime"===b.g_arB())return void(this.g_asb=b);throw new Error("cannot find runtime DOM handler")}g_aso(b){this.g_arr("debugger","message",b)}g_asI(){for(const b of this.g_asa)b.g_arp()}static g_aaC(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_arC(b){this.g_ase.push(b),this.g_asL()}g_arD(c){const a=this.g_ase.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_ase.splice(a,1),this.g_ase.length||this.g_asj()}g_asL(){-1===this.g_aae&&this.g_ase.length&&(this.g_aae=requestAnimationFrame(this.g_asc))}g_asj(){-1!==this.g_aae&&(cancelAnimationFrame(this.g_aae),this.g_aae=-1)}g_asd(){this.g_aae=-1;for(const b of this.g_ase)b();this.g_asL()}g_asM(c,a){this.g_asb.g_asM(c,a)}g_asN(b){this.g_asb.g_asN(b)}g_asO(){this.g_asb.g_asO()}g_asP(b){this.g_asb.g_asP(b)}g_yX(b){return!!c[b]}async g_add(c){const a=await this.g_art("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_ge(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gf(b){return!this.g_ge(b)}async g_ash(c){const a=c.filename;switch(c.as){case"text":return await this.g_yB(a);case"blob":return await this.g_yx(a);case"blob-url":return await this.g_asQ(a);default:throw new Error("unsupported type");}}g_asR(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_yB(b){const a=await this.g_asR(b);return await q(a)}g_asS(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_asT(b.filename,b.g_asU,b.g_asV)}}g_asW(f){return new Promise((g,b)=>{d.push({filename:f,g_asU:b=>{e--,this.g_asS(),g(b)},g_asV:c=>{e--,this.g_asS(),b(c)}}),this.g_asS()})}async g_asT(c,a,b){try{const b=await this.g_asR(c),d=await r(b);a(d)}catch(c){b(c)}}async g_yx(d,a){a||(a=s(d));const e=await this.g_asW(d);return new Blob([e],{type:a})}async g_asQ(c){const a=await this.g_yx(c);return URL.createObjectURL(a)}g_asr(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_asg=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){return window.parent&&window.parent.document.hasFocus()}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_arl{constructor(c){super(c,"runtime"),this.g_asX=!0,this.g_asY="any",this.g_asZ=null,c.g_ary("canvas","update-size",b=>this.g_as_(b)),c.g_ary("runtime","invoke-download",b=>this.g_as$(b)),c.g_ary("runtime","raster-svg-image",b=>this.g_ata(b)),c.g_ary("runtime","set-target-orientation",b=>this.g_atb(b)),c.g_ary("runtime","register-sw",()=>this.g_atc()),c.g_ary("runtime","post-to-debugger",b=>this.g_atd(b)),c.g_ary("runtime","before-start-ticking",()=>this.g_ate()),c.g_ary("runtime","debug-highlight",b=>this.g_atf(b));const a=c.g_ask();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_aav()),this.g_atg=new Set,this.g_ath=new WeakSet,this.g_ati=!1}g_ate(){return window.addEventListener("visibilitychange",()=>this.g_adc(document.hidden)),document.addEventListener("pause",()=>this.g_adc(!0)),document.addEventListener("resume",()=>this.g_adc(!1)),{isSuspended:!!(document.hidden||c)}}g_arp(){window.addEventListener("focus",()=>this.g_atj("window-focus")),window.addEventListener("blur",()=>this.g_atj("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_aaw()),window.addEventListener("webkitfullscreenchange",()=>this.g_aaw()),window.addEventListener("mozfullscreenchange",()=>this.g_aaw()),window.addEventListener("fullscreenerror",b=>this.g_aax(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_aax(b)),window.addEventListener("mozfullscreenerror",b=>this.g_aax(b)),window.addEventListener("keydown",b=>this.g_atk("keydown",b)),window.addEventListener("keyup",b=>this.g_atk("keyup",b)),window.addEventListener("mousemove",b=>this.g_atl("mousemove",b)),window.addEventListener("mousedown",b=>this.g_atl("mousedown",b)),window.addEventListener("mouseup",b=>this.g_atl("mouseup",b)),window.addEventListener("dblclick",b=>this.g_atl("dblclick",b)),window.addEventListener("wheel",b=>this.g_atm("wheel",b)),"undefined"==typeof g_atn?(window.addEventListener("touchstart",b=>this.g_ato("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_ato("pointermove",b)),window.addEventListener("touchend",b=>this.g_ato("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_ato("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_atp("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_atp("pointermove",b)),window.addEventListener("pointerup",b=>this.g_atp("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_atp("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_atq(b)),window.addEventListener("devicemotion",b=>this.g_atr(b));const c=()=>this.g_asO();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_atj(c,a){this.g_arq(c,a||null,!0)}g_aav(){this.g_arq("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_atb(b){this.g_asY=b.targetOrientation}g_ats(){const c=this.g_asY;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aaw(){const b=g_arV.g_aaC();b&&"any"!==this.g_asY&&this.g_ats(),this.g_arq("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aax(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_arq("fullscreenerror",{isFullscreen:g_arV.g_aaC(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_adc(b){b?this.g_arm.g_asj():this.g_arm.g_asL(),this.g_arq("visibilitychange",{hidden:b})}g_atk(c,a){this.g_aru(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_atl(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aru(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_atm(c,a){this.g_arq(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_atp(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_aru(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_ato(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aru(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_atq(b){this.g_arq("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_atr(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_arq("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_as_(d){const a=this.g_arA(),b=a.g_ask();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_asq(),this.g_asX&&(b.style.display="",this.g_asX=!1)}g_as$(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_ata(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_asO(){const c=[...this.g_atg];if(this.g_atg.clear(),!this.g_ati)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_ath.has(d)||this.g_atg.add(d)})}}g_asM(d,a){if("function"!=typeof d.play)throw new Error("missing play function");if(this.g_ath.delete(d),a)return void this.g_atg.add(d);let b;try{b=d.play()}catch(a){return void this.g_atg.add(d)}b&&b.catch(()=>{this.g_ath.has(d)||this.g_atg.add(d)})}g_asN(b){this.g_atg.delete(b),this.g_ath.add(b)}g_asP(b){this.g_ati=!!b}g_atf(d){const a=d.show;if(!a)return void(this.g_asZ&&(this.g_asZ.style.display="none"));this.g_asZ||(this.g_asZ=document.createElement("div"),this.g_asZ.id="inspectOutline",document.body.appendChild(this.g_asZ));const b=this.g_asZ;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_atc(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_atd(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_arV.g_asK(d)}{const c=document.currentScript.src;self.g_asp=class{constructor(a){this.g_att=a,this.g_abx=c.substr(0,c.lastIndexOf("/")+1),this.g_aff=Math.min(navigator.hardwareConcurrency||2,16),this.g_atu=null,this.g_atv=[],this.g_afd=null,this.g_atw=null}async g_Zc(){if(this.g_atx)throw new Error("already initialised");this.g_atx=!0;const c=this.g_att.g_asu("dispatchWorker.js");this.g_atu=await this.g_att.g_asv(c,this.g_abx,{name:"DispatchWorker"});const a=new MessageChannel;this.g_afd=a.port1,this.g_atu.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_atw=await this.g_asF()}async g_asF(){const f=this.g_atv.length,a=this.g_att.g_asu("jobWorker.js"),b=await this.g_att.g_asv(a,this.g_abx,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_atu.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_atv.push(b),d.port1}g_asz(){return{inputPort:this.g_afd,outputPort:this.g_atw,maxNumWorkers:this.g_aff}}g_asD(){return[this.g_afd,this.g_atw]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_arV({g_arX:!1,g_asA:"workerMain.js",g_asC:["scripts/c3runtime.js"],g_asf:"html5"})}{const b=class extends g_arl{constructor(b){super(b,"stranianelli_htmlelement"),this.g_arx("prova",b=>this.g_aty(b))}g_aty(b){console.log(b)}};g_arV.g_asK(b)}{const b=class extends g_arl{constructor(b){super(b,"browser"),this.g_abC="",this.g_arx("get-initial-state",b=>this.g_atz(b)),this.g_arx("ready-for-sw-messages",()=>this.g_atA()),this.g_arx("alert",b=>this.g_atB(b)),this.g_arx("close",()=>this.g_atC()),this.g_arx("set-focus",b=>this.g_arM(b)),this.g_arx("vibrate",b=>this.g_atD(b)),this.g_arx("lock-orientation",b=>this.g_atE(b)),this.g_arx("unlock-orientation",()=>this.g_atF()),this.g_arx("navigate",b=>this.g_atG(b)),this.g_arx("request-fullscreen",b=>this.g_atH(b)),this.g_arx("exit-fullscreen",b=>this.g_atI(b)),window.addEventListener("online",()=>this.g_apV(!0)),window.addEventListener("offline",()=>this.g_apV(!1)),document.addEventListener("backbutton",()=>this.g_atJ()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_atK(b))}g_atz(b){return this.g_abC=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_atA(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_arq("sw-message",b.data))}g_apV(b){this.g_arq("online-state",{isOnline:b})}g_atJ(){this.g_arq("backbutton")}g_atK(b){b.handled=!0,this.g_arq("backbutton")}g_atL(){return"nwjs"===this.g_abC?nw.Window.get():null}g_atB(b){alert(b.message)}g_atC(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_arM(c){const d=c.isFocus;if("nwjs"===this.g_abC){const b=this.g_atL();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_atD(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_atE(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_atF(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_atG(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_atM();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_apU&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_atH(c){const a=c.isNWjs;if(a)nw.Window.get().enterFullscreen();else{const b=document.documentElement;b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?b.webkitRequestFullScreen():b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}}g_atI(c){const a=c.isNWjs;a?nw.Window.get().leaveFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_arV.g_asK(b)}