"use strict";window.g_alo=class{constructor(c,a){this.g_alp=c,this.g_alq=a,this.g_alr=!1,this.g_aah=()=>this.g_FL()}g_als(){}g_alt(e,a,b,c){this.g_alp.g_alu(this.g_alq,e,a,!!b,c)}g_alv(e,a,b,c){return this.g_alp.g_alw(this.g_alq,e,a,!!b,c)}g_alx(d,a,b){this.g_alp.g_aly()?this.g_alt(d,a,b):this.g_alp.g_alz()._OnMessageFromDOM({type:"event",component:this.g_alq,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_alA(c,a){this.g_alp.g_alB(this.g_alq,c,a)}g_alC(d){for(const[a,b]of d)this.g_alA(a,b)}g_alD(){return this.g_alp}g_alE(){return this.g_alq}g_SE(){this.g_alr||(this.g_alp.g_alF(this.g_aah),this.g_alr=!0)}g_Ss(){this.g_alr&&(this.g_alp.g_alG(this.g_aah),this.g_alr=!1)}g_FL(){}},"use strict",window.g_alH=class extends g_alo{constructor(c,a){super(c,a),this.g_alI=new Map,this.g_alJ=!0,this.g_alA("create",b=>this.g_alK(b)),this.g_alA("destroy",b=>this.g_alL(b)),this.g_alA("set-visible",b=>this.g_alM(b)),this.g_alA("update-position",b=>this.g_alN(b)),this.g_alA("update-state",b=>this.g_alO(b)),this.g_alA("focus",b=>this.g_alP(b)),this.g_alA("set-css-style",b=>this.g_alQ(b))}g_alR(b){this.g_alJ=!!b}g_alS(c,e){this.g_alA(c,b=>{const a=b.elementId,c=this.g_alI.get(a);return e(c,b)})}g_alK(d){const a=d.elementId,b=this.g_Tc(a,d);this.g_alI.set(a,b),this.g_alJ&&document.body.appendChild(b)}g_Tc(){throw new Error("required override")}g_alT(){}g_alL(d){const a=d.elementId,b=this.g_alI.get(a);this.g_alT(b),this.g_alJ&&b.parentElement.removeChild(b),this.g_alI.delete(a)}g_alU(d,a,b){b||(b={}),b.elementId=a,this.g_alt(d,b)}g_alV(d,a,b){b||(b={}),b.elementId=a,this.g_alx(d,b)}g_alM(c){if(this.g_alJ){const a=this.g_alI.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_alN(d){if(this.g_alJ){const a=this.g_alI.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_alO(c){const a=this.g_alI.get(c.elementId);this.g_alW(a,c)}g_alW(){throw new Error("required override")}g_alP(c){const a=this.g_alI.get(c.elementId);c.focus?a.focus():a.blur()}g_alQ(c){const a=this.g_alI.get(c.elementId);a.style[c.prop]=c.val}g_alX(b){return this.g_alI.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_alY=class b{constructor(b){this.g_alZ=b.g_al_,this.g_al$=null,this.g_$m="",this.g_ama={},this.g_amb=null,this.g_amc=null,this.g_amd=[],this.g_ame=null,this.g_Zq=null,this.g_aaQ=null,this.g_ZX=-1,this.g_amf=()=>this.g_amg(),this.g_amh=[],this.g_$r=b.g_ami,"html5"===this.g_$r&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_alB("runtime","cordova-fetch-local-file",b=>this.g_amj(b)),"cordova"===this.g_$r?document.addEventListener("deviceready",()=>this.g_Rw(b)):this.g_Rw(b)}g_eA(){this.g_amk(),this.g_al$&&(this.g_al$.onmessage=null,this.g_al$=null),this.g_amb&&(this.g_amb.terminate(),this.g_amb=null),this.g_amc&&(this.g_amc.g_eA(),this.g_amc=null),this.g_Zq&&(this.g_Zq.parentElement.removeChild(this.g_Zq),this.g_Zq=null)}g_aml(){return this.g_Zq}g_fp(){return this.g_$m}g_aly(){return this.g_alZ}g_aco(){return this.g_$r}g_acp(){return"cordova"===this.g_$r&&a}g_amm(){if(!this.g_acp())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_Rw(d){if(d.g_amn)this.g_$m=d.g_amn;else{this.g_$m=location.origin+location.pathname;const b=this.g_$m.lastIndexOf("/");-1!==b&&(this.g_$m=this.g_$m.substr(0,b+1))}if(d.g_amo)for(const[a,b]of Object.entries(d.g_amo))this.g_ama[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_al$=a.port1,this.g_al$.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_amp(b)),this.g_aaQ=new self.g_amq(this),await this.g_aaQ.g_WY(),this.g_amr(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),this.g_alZ?await this.g_ams(d,a.port2):await this.g_amt(d,a.port2)}g_amu(b){return this.g_ama.hasOwnProperty(b)?this.g_ama[b]:b}async g_amv(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_acp()){const a=await this.g_yo(f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_amr(){if(this.g_amm()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_amw(d){return{baseUrl:this.g_$m,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g__s(),projectData:d.g_amx,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_ami,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_amy,jobScheduler:this.g_aaQ.g_amz(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_acp(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_ams(d,a){this.g_amb=await this.g_amv(d.g_amA,this.g_$m,{name:"Runtime"}),this.g_Zq=document.createElement("canvas"),this.g_Zq.style.display="none";const b=this.g_Zq.transferControlToOffscreen();document.body.appendChild(this.g_Zq),this.g_amb.postMessage(Object.assign(this.g_amw(d),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:b,workerDependencyScripts:d.g_amB||[],engineScripts:d.g_amC}),[a,b,...this.g_aaQ.g_amD()]),this.g_amd=h.map(b=>new b(this)),this.g_amE()}async g_amt(a,b){this.g_Zq=document.createElement("canvas"),this.g_Zq.style.display="none",document.body.appendChild(this.g_Zq),this.g_amd=h.map(b=>new b(this)),this.g_amE();const c=a.g_amC.map(b=>new URL(b,this.g_$m).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_amw(a),{isInWorker:!1,messagePort:b,canvas:this.g_Zq});this.g_amc=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_amc,d)}g_alz(){if(this.g_alZ)throw new Error("not available in worker mode");return this.g_amc}g_alu(f,a,b,c,d){this.g_al$.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},d)}g_alw(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_al$.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_amF(c);else if("result"===a)this.g_amG(c);else if("runtime-ready"===a)this.g_amH();else throw new Error(`unknown message '${a}'`)}g_amF(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_amI(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_amI(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_amI(c,!1,d.toString())}):this.g_amI(c,!0,f))}g_amI(d,a,b){this.g_al$.postMessage({type:"result",responseId:d,isOk:a,result:b})}g_amG(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_alB(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_amJ(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_amE(){for(const b of this.g_amd)if("runtime"===b.g_alE())return void(this.g_ame=b);throw new Error("cannot find runtime DOM handler")}g_amp(b){this.g_alu("debugger","message",b)}g_amH(){for(const b of this.g_amd)b.g_als()}static g__s(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_alF(b){this.g_amh.push(b),this.g_amK()}g_alG(c){const a=this.g_amh.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_amh.splice(a,1),this.g_amh.length||this.g_amk()}g_amK(){-1===this.g_ZX&&this.g_amh.length&&(this.g_ZX=requestAnimationFrame(this.g_amf))}g_amk(){-1!==this.g_ZX&&(cancelAnimationFrame(this.g_ZX),this.g_ZX=-1)}g_amg(){this.g_ZX=-1;for(const b of this.g_amh)b();this.g_amK()}g_amL(c,a){this.g_ame.g_amL(c,a)}g_amM(b){this.g_ame.g_amM(b)}g_amN(){this.g_ame.g_amN()}g_amO(b){this.g_ame.g_amO(b)}g_yN(b){return!!c[b]}async g_aaT(c){const a=await this.g_alw("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_ga(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gb(b){return!this.g_ga(b)}async g_amj(c){const a=c.filename;switch(c.as){case"text":return await this.g_yr(a);case"blob":return await this.g_yo(a);case"blob-url":return await this.g_amP(a);default:throw new Error("unsupported type");}}g_amQ(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_yr(b){const a=await this.g_amQ(b);return await q(a)}g_amR(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_amS(b.filename,b.g_amT,b.g_amU)}}g_amV(f){return new Promise((g,b)=>{d.push({filename:f,g_amT:b=>{e--,this.g_amR(),g(b)},g_amU:c=>{e--,this.g_amR(),b(c)}}),this.g_amR()})}async g_amS(c,a,b){try{const b=await this.g_amQ(c),d=await r(b);a(d)}catch(c){b(c)}}async g_yo(d,a){a||(a=s(d));const e=await this.g_amV(d);return new Blob([e],{type:a})}async g_amP(c){const a=await this.g_yo(c);return URL.createObjectURL(a)}}}{function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let b=!1;document.addEventListener("pause",()=>b=!0),document.addEventListener("resume",()=>b=!1);const c=class extends g_alo{constructor(c){super(c,"runtime"),this.g_amW=!0,this.g_amX="any",this.g_amY=null,c.g_alB("canvas","update-size",b=>this.g_amZ(b)),c.g_alB("runtime","invoke-download",b=>this.g_am_(b)),c.g_alB("runtime","raster-svg-image",b=>this.g_am$(b)),c.g_alB("runtime","set-target-orientation",b=>this.g_ana(b)),c.g_alB("runtime","register-sw",()=>this.g_anb()),c.g_alB("runtime","post-to-debugger",b=>this.g_anc(b)),c.g_alB("runtime","before-start-ticking",()=>this.g_and()),c.g_alB("runtime","debug-highlight",b=>this.g_ane(b));const a=c.g_aml();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g__m()),this.g_anf=new Set,this.g_ang=new WeakSet,this.g_anh=!1}g_and(){return window.addEventListener("visibilitychange",()=>this.g_aaS(document.hidden)),document.addEventListener("pause",()=>this.g_aaS(!0)),document.addEventListener("resume",()=>this.g_aaS(!1)),{isSuspended:!!(document.hidden||b)}}g_als(){window.addEventListener("focus",this.g_ani("window-focus")),window.addEventListener("blur",this.g_ani("window-blur")),window.addEventListener("fullscreenchange",()=>this.g__n()),window.addEventListener("webkitfullscreenchange",()=>this.g__n()),window.addEventListener("mozfullscreenchange",()=>this.g__n()),window.addEventListener("fullscreenerror",b=>this.g__o(b)),window.addEventListener("webkitfullscreenerror",b=>this.g__o(b)),window.addEventListener("mozfullscreenerror",b=>this.g__o(b)),window.addEventListener("keydown",b=>this.g_anj("keydown",b)),window.addEventListener("keyup",b=>this.g_anj("keyup",b)),window.addEventListener("mousemove",b=>this.g_ank("mousemove",b)),window.addEventListener("mousedown",b=>this.g_ank("mousedown",b)),window.addEventListener("mouseup",b=>this.g_ank("mouseup",b)),window.addEventListener("dblclick",b=>this.g_ank("dblclick",b)),window.addEventListener("wheel",b=>this.g_anl("wheel",b)),"undefined"==typeof g_anm?(window.addEventListener("touchstart",b=>this.g_ann("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_ann("pointermove",b)),window.addEventListener("touchend",b=>this.g_ann("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_ann("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_ano("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_ano("pointermove",b)),window.addEventListener("pointerup",b=>this.g_ano("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_ano("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_anp(b)),window.addEventListener("devicemotion",b=>this.g_anq(b));const b=()=>this.g_amN();window.addEventListener("pointerup",b,!0),window.addEventListener("touchend",b,!0),window.addEventListener("click",b,!0),window.addEventListener("keydown",b,!0),window.addEventListener("gamepadconnected",b,!0)}g_ani(b){this.g_alt(b,null,!0)}g__m(){this.g_alt("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_ana(b){this.g_amX=b.targetOrientation}g_anr(){const c=this.g_amX;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g__n(){const b=g_alY.g__s();b&&"any"!==this.g_amX&&this.g_anr(),this.g_alt("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g__o(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_alt("fullscreenerror",{isFullscreen:g_alY.g__s(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aaS(b){b?this.g_alp.g_amk():this.g_alp.g_amK(),this.g_alt("visibilitychange",{hidden:b})}g_anj(c,a){this.g_alx(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_ank(a,b){f(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_alx(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_anl(c,a){this.g_alt(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_ano(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_alx(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_ann(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_alx(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_anp(b){this.g_alt("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_anq(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_alt("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_amZ(d){const a=this.g_alD(),b=a.g_aml();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_amr(),this.g_amW&&(b.style.display="",this.g_amW=!1)}g_am_(g){const b=g.url,c=g.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d);const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(a),e.removeChild(d)}async g_am$(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_amN(){const c=[...this.g_anf];if(this.g_anf.clear(),!this.g_anh)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_ang.has(d)||this.g_anf.add(d)})}}g_amL(d,a){if("function"!=typeof d.play)throw new Error("missing play function");if(this.g_ang.delete(d),a)return void this.g_anf.add(d);let b;try{b=d.play()}catch(a){return void this.g_anf.add(d)}b&&b.catch(()=>{this.g_ang.has(d)||this.g_anf.add(d)})}g_amM(b){this.g_anf.delete(b),this.g_ang.add(b)}g_amO(b){this.g_anh=!!b}g_ane(d){const a=d.show;if(!a)return void(this.g_amY&&(this.g_amY.style.display="none"));this.g_amY||(this.g_amY=document.createElement("div"),this.g_amY.id="inspectOutline",document.body.appendChild(this.g_amY));const b=this.g_amY;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_anb(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_anc(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_alY.g_amJ(c)}{const c=document.currentScript.src;self.g_amq=class{constructor(a){this.g_ans=a,this.g_$m=c.substr(0,c.lastIndexOf("/")+1),this.g_ant=navigator.hardwareConcurrency||2,this.g_anu=null,this.g_anv=[],this.g_acR=null,this.g_anw=[]}async g_WY(){if(this.g_anx)throw new Error("already initialised");this.g_anx=!0;const d=this.g_ans.g_amu("dispatchWorker.js");this.g_anu=await this.g_ans.g_amv(d,this.g_$m,{name:"DispatchWorker"});const a=new MessageChannel;this.g_acR=a.port1,this.g_anu.postMessage({type:"_init","in-port":a.port2},[a.port2]);const e=[];for(let c=0,a=this.g_ant;c<a;++c)e.push(this.g_any(c));await Promise.all(e)}async g_any(f){const a=this.g_ans.g_amu("jobWorker.js"),b=await this.g_ans.g_amv(a,this.g_$m,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;this.g_anw.push(d.port1),this.g_anu.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_anv.push(b)}g_amz(){return{inputPort:this.g_acR,outputPorts:this.g_anw}}g_amD(){return[this.g_acR,...this.g_anw]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_alY({g_al_:!1,g_amA:"workerMain.js",g_amC:["scripts/c3runtime.js"],g_ami:"html5"})}{function g(b){b.stopPropagation()}const a=class extends g_alH{constructor(b){super(b,"button")}g_Tc(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.g_anz="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_alV("click",a,{isChecked:c.checked})),this.g_alW(e,b),e}g_anA(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_alW(d,a){const b=this.g_anA(d);b.id=a.id,b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d.style.display=a.isVisible?"":"none",d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_alY.g_amJ(a)}{const b=class extends g_alo{constructor(b){super(b,"browser"),this.g_$r="",this.g_alA("get-initial-state",b=>this.g_anB(b)),this.g_alA("ready-for-sw-messages",()=>this.g_anC()),this.g_alA("alert",b=>this.g_anD(b)),this.g_alA("close",()=>this.g_anE()),this.g_alA("set-focus",b=>this.g_alP(b)),this.g_alA("vibrate",b=>this.g_anF(b)),this.g_alA("lock-orientation",b=>this.g_anG(b)),this.g_alA("unlock-orientation",()=>this.g_anH()),this.g_alA("navigate",b=>this.g_anI(b)),this.g_alA("request-fullscreen",b=>this.g_anJ(b)),this.g_alA("exit-fullscreen",b=>this.g_anK(b)),window.addEventListener("online",()=>this.g_ahq(!0)),window.addEventListener("offline",()=>this.g_ahq(!1)),document.addEventListener("backbutton",()=>this.g_anL()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_anM(b))}g_anB(b){return this.g_$r=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_anC(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_alt("sw-message",b.data))}g_ahq(b){this.g_alt("online-state",{isOnline:b})}g_anL(){this.g_alt("backbutton")}g_anM(b){b.handled=!0,this.g_alt("backbutton")}g_anN(){return"nwjs"===this.g_$r?nw.Window.get():null}g_anD(b){alert(b.message)}g_anE(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_alP(c){const d=c.isFocus;if("nwjs"===this.g_$r){const b=this.g_anN();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_anF(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_anG(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_anH(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_anI(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_anO();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_ahp&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_anJ(c){const a=c.isNWjs;if(a)nw.Window.get().enterFullscreen();else{const b=document.documentElement;b.requestFullscreen?b.requestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?b.webkitRequestFullScreen():b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}}g_anK(c){const a=c.isNWjs;a?nw.Window.get().leaveFullscreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_alY.g_amJ(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_alH{constructor(b){super(b,"text-input"),this.g_alS("scroll-to-bottom",b=>this.g_anP(b))}g_Tc(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_alV("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_alV("dblclick",b)}),d.addEventListener("input",()=>this.g_alU("change",b,{text:d.value})),this.g_alW(d,c),d}g_alW(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck,c.id=a.id}g_anP(b){b.scrollTop=b.scrollHeight}};g_alY.g_amJ(b)}{function h(b){b.stopPropagation()}const a=class extends g_alH{constructor(b){super(b,"list"),this.g_alS("set-selected-index",(c,a)=>this.g_anQ(c,a.selectedIndex)),this.g_alS("add-item",(c,a)=>this.g_anR(c,a)),this.g_alS("remove-item",(c,a)=>this.g_anS(c,a)),this.g_alS("set-item",(c,a)=>this.g_anT(c,a)),this.g_alS("clear",b=>this.g_anU(b)),this.g_alS("load-state",(c,a)=>this.g_anV(c,a))}g_Tc(i,a){const b=a.isDropdown,c=a.isMultiSelect,d=a.items,e=document.createElement("select");e.style.position="absolute",e.style.g_anz="none",e.style.webkitUserSelect="none",e.multiple=c,b||(e.size=2);for(const b of d)e.add(this.g_anW(b));return e.addEventListener("touchstart",h),e.addEventListener("touchmove",h),e.addEventListener("touchend",h),e.addEventListener("mousedown",h),e.addEventListener("mouseup",h),e.addEventListener("click",b=>{b.stopPropagation(),this.g_alV("click",i,this.g_anX(e))}),e.addEventListener("dblclick",b=>{b.stopPropagation(),this.g_alV("dblclick",i,this.g_anX(e))}),e.addEventListener("change",()=>this.g_alU("change",i,this.g_anX(e))),this.g_alW(e,a),e}g_anW(c){const a=document.createElement("option");return a.text=c,a}g_anX(e){const a=e.selectedIndex,f=[];for(let a=0,b=e.length;a<b;++a)e.options[a].selected&&f.push(a);return{selectedIndex:a,selectedIndices:f}}g_alW(c,a){c.title=a.title,c.disabled=!a.isEnabled,c.id=a.id,c.multiple=!!a.isMultiSelect}g_anQ(c,a){c.selectedIndex=a}g_anR(f,a){const b=a.text,c=a.index,d=this.g_anW(b);0>c?f.add(d):f.add(d,c)}g_anS(c,a){c.remove(a.index)}g_anT(c,a){c.options[a.index].text=a.text}g_anU(b){b.innerHTML=""}g_anV(d,a){d.innerHTML="";for(const b of a.items)d.add(this.g_anW(b));d.selectedIndex=a.selectedIndex;for(const e of a.selectedIndices){const a=d.options[e];a&&(a.selected=!0)}}};g_alY.g_amJ(a)}{function e(b){b.stopPropagation()}const a=class extends g_alH{constructor(b){super(b,"sliderbar")}g_Tc(a,b){const c=document.createElement("input");return c.type="range",c.style.position="absolute",c.style.g_anz="none",c.style.webkitUserSelect="none",c.addEventListener("touchstart",e),c.addEventListener("touchmove",e),c.addEventListener("touchend",e),c.addEventListener("mousedown",e),c.addEventListener("mouseup",e),c.addEventListener("keydown",e),c.addEventListener("keyup",e),c.addEventListener("click",()=>this.g_alV("click",a)),c.addEventListener("change",()=>this.g_alU("change",a,{value:parseFloat(c.value)})),c.addEventListener("input",()=>this.g_alU("input",a,{value:parseFloat(c.value)})),this.g_alW(c,b),c}g_alW(c,a){c.max=a.max,c.min=a.min,c.step=a.step,c.value=a.value,c.disabled=!a.isEnabled,c.title=a.title,c.id=a.id}};g_alY.g_amJ(a)}{function e(b){b.stopPropagation()}const a=class extends g_alH{constructor(b){super(b,"progress-bar")}g_Tc(a,b){const c=document.createElement("progress");return c.style.position="absolute",c.style.g_anz="none",c.style.webkitUserSelect="none",c.addEventListener("touchstart",e),c.addEventListener("touchmove",e),c.addEventListener("touchend",e),c.addEventListener("mousedown",e),c.addEventListener("mouseup",e),c.addEventListener("click",()=>this.g_alV("click",a)),this.g_alW(c,b),c}g_alW(e,a){e.title=a.title,e.id=a.id;const b=a.value,c=a.max;0<c&&0<=b?(e.max=c,e.value=b):(e.removeAttribute("value"),e.removeAttribute("max"))}};g_alY.g_amJ(a)}