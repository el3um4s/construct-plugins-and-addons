"use strict";

{
	// In the C3 runtime's worker mode, all the runtime scripts (e.g. plugin.js, instance.js, actions.js)
	// are loaded in a Web Worker, which has no access to the document so cannot make DOM calls. To help
	// plugins use DOM elements the runtime internally manages a postMessage() bridge wrapped in some helper
	// classes designed to manage DOM elements. Then this script (domSide.js) is loaded in the main document
	// (aka the main thread) where it can make any DOM calls on behalf of the runtime. Conceptually the two
	// ends of the messaging bridge are the "Runtime side" in a Web Worker, and the "DOM side" with access
	// to the Document Object Model (DOM). The addon's plugin.js specifies to load this script on the
	// DOM side by making the call: this._info.SetDOMSideScripts(["c3runtime/domSide.js"])
	// Note that when NOT in worker mode, this entire framework is still used identically, just with both
	// the runtime and the DOM side in the main thread. This allows non-worker mode to work the same with
	// no additional code changes necessary. However it's best to imagine that the runtime side is in a
	// Web Worker, since that is when it is necessary to separate DOM calls from the runtime.
	
	// NOTE: use a unique DOM component ID to ensure it doesn't clash with anything else
	// This must also match the ID in instance.js and plugin.js.
	const DOM_COMPONENT_ID = "stranianelli_draganddropfiles";

	function StopPropagation(e)
	{
		e.stopPropagation();
	}

	const HANDLER_CLASS = class MyDOMHandler extends DOMElementHandler
	{
		constructor(iRuntime)
		{
			super(iRuntime, DOM_COMPONENT_ID);
		}
		
		CreateElement(elementId, e)
		{
		
			const elem = document.createElement("div");
			
			
			elem.style.position = "absolute";
			elem.style.backgroundColor = e["backgroundColor"];
			
			elem.id = e["id"];
			elem.title = e["tooltip"];
			elem.textContent = e["text"];
			
			elem.style.fontFamily = "sans-serif";
            elem.style.color = e["color"];
            elem.style.fontSize = e["fontsize"];
            
            elem.style.border = e["border"];
            
            elem.style.display = "flex";
 			elem.style.alignItems = "center";
  			elem.style.justifyContent = "center";
  			
  			elem.style.fontWeight = e["wight"];
  			elem.style.fontStyle = e["style"];
  			elem.style.fontFamily = e["fontFace"];
			
			if (!e["visible"]) {
				elem.style.display = "none";
			}
			   
			// Prevent touches reaching the canvas
			elem.addEventListener("touchstart", StopPropagation);
			elem.addEventListener("touchmove", StopPropagation);
			elem.addEventListener("touchend", StopPropagation);
			
			// Prevent clicks being blocked
			elem.addEventListener("mousedown", StopPropagation);
			elem.addEventListener("mouseup", StopPropagation);
			
			// Prevent key presses being blocked by the Keyboard object
			elem.addEventListener("keydown", StopPropagation);
			elem.addEventListener("keyup", StopPropagation);
			
			elem.addEventListener("mouseover", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("mouseover", elementId);
				});
			
			elem.addEventListener("mouseleave", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("mouseleave", elementId);
				});
			
			// elem.addEventListener("drop", () => this.PostToRuntimeElement("drop", elementId));
			elem.addEventListener("dragover", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragover", elementId);
				});
				
			
			elem.addEventListener("drag", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("drag", elementId);
				});
				
			
			elem.addEventListener("dragend", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragend", elementId);
				});
			
			elem.addEventListener("dragenter", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragenter", elementId);
				});
			
			elem.addEventListener("dragexit", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragexit", elementId);
				});
			
			elem.addEventListener("dragleave", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragleave", elementId);
				});
				
			elem.addEventListener("dragstart", (ev) => {
					ev.preventDefault();
					this.PostToRuntimeElement("dragstart", elementId);
				});
			
			elem.addEventListener("drop", (ev)=> {
					ev.preventDefault();
					let elencoFile = [];
					if  (ev.dataTransfer.items)  {
						for  (let  i  =  0;  i  <  ev.dataTransfer.items.length;  i++)  {
							if  (ev.dataTransfer.items[i].kind  ===  'file')  {
				 				const file  =  ev.dataTransfer.items[i].getAsFile();
				 				const nomeFile =  file["name"];
				 				const estensioneFile = nomeFile.slice((Math.max(0, nomeFile.lastIndexOf(".")) || Infinity) + 1);
				 				if (file.type.match("^"+e["accept"]) || e["accept"] == "" || estensioneFile.match("^"+e["accept"])) {
				 					elencoFile.push(ev.dataTransfer.items[i].getAsFile());
				 				}
							}
						}
					}  else  {
						 for  (let  i  =  0;  i  <  ev.dataTransfer.files.length;  i++)  {
						 	const file  =  ev.dataTransfer.files[i];
				 			const nomeFile =  nomeFile["name"];
				 			const estensioneFile = nomeFile.slice((Math.max(0, nomeFile.lastIndexOf(".")) || Infinity) + 1);
						 	if (files[i].type.match("^"+e["accept"]) || e["accept"] == "" || estensioneFile.match("^"+e["accept"])) {
				 					elencoFile.push(ev.dataTransfer.files[i]);
				 			}							
						}
					}

					
					this.PostToRuntimeElement("drop", elementId, { "files": elencoFile });
            })

			elem.addEventListener("click", () => this.PostToRuntimeElement("click", elementId,  {}));

			// The create message includes the state retrieved by GetElementState() in instance.js,
			// so also update the element state based on those details.
			this.UpdateState(elem, e);

			return elem;
		}

		UpdateState(elem, e)
		{
			elem.id = e["id"];
			elem.textContent = e["text"];
			
			elem.style.backgroundColor =  e["backgroundColor"];
			elem.style.color =  e["color"];
			elem.style.border = e["border"]; 
			
			elem.title = e["tooltip"];
			elem.style.fontSize = e["fontsize"];
			
			elem.style.fontWeight = e["wight"];
  			elem.style.fontStyle = e["style"];
  			elem.style.fontFamily = e["fontFace"];
  			
  			if (e["visible"]) { elem.style.display = "flex"; } 
				else { elem.style.display = "none"; }
		}
	};
	
	RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}