"use strict";self.dispatchPort=null,self.outputPort=null,self.workerNumber=-1,self.activeJobId=null,self.sentBlobs=new Map,self.JobHandlers={},self.addEventListener("message",(a)=>{const b=a.data,c=b["type"];return"init"===c?(self.workerNumber=b["number"],self.dispatchPort=b["dispatch-port"],self.dispatchPort.onmessage=OnDispatchWorkerMessage,void(self.outputPort=b["output-port"])):"terminate"===c?void self.close():void console.error("unknown message '"+c+"'")});function SendError(a,b){a||self.outputPort.postMessage({"type":"error","jobId":self.activeJobId,"error":b.toString()}),SendDone()}function SendResult(a,b){if(!a){const a=b.transferables||[];self.outputPort.postMessage({"type":"result","jobId":self.activeJobId,"result":b.result},a)}SendDone()}function SendDone(){self.activeJobId=null,self.dispatchPort.postMessage({"type":"done"})}function SendProgress(a){self.outputPort.postMessage({"type":"progress","jobId":self.activeJobId,"progress":a})}function OnDispatchWorkerMessage(a){const b=a.data,c=b["type"];if("_import_scripts"===c)return void importScripts(...b["scripts"]);if("_send_blob"===c)return void self.sentBlobs.set(b["id"],b["blob"]);const d=b["jobId"],f=b["isBroadcast"],e=b["params"];let g;if(self.activeJobId=d,!self.JobHandlers.hasOwnProperty(c))return void console.error(`no handler for message type '${c}'`);try{g=self.JobHandlers[c](e)}catch(a){return void SendError(f,"Exception in job handler: "+a)}g&&g.then?g.then((a)=>SendResult(f,a)).catch((a)=>SendError(f,"Rejection in job handler: "+a)):SendResult(f,g)}