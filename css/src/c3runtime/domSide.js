"use strict";

{

	const DOM_COMPONENT_ID = "StraniAnelli_InjectCSS_v2";

	function StopPropagation(e)
	{
		e.stopPropagation();
	}
	
	function addLink(e) {
	
		deleteLinkByURL(e);
		
		const linkCSS = document.createElement("link");
	        	linkCSS.setAttribute("rel", "stylesheet");
	        	linkCSS.setAttribute("type", "text/css");
	        	linkCSS.setAttribute("href", e["url"]);
	        	linkCSS.setAttribute("createdbystranianelliinjectcss2","");
	        	linkCSS.setAttribute("idunico", e["idUnico"]);
		
		document.head.appendChild(linkCSS);
	}
	
	function deleteLinkByURL(e) {
		const links = document.head.getElementsByTagName("link");
        const nameFile = e["url"];
        for (let i = 0; i < links.length; i++) {
 	       if (links[i].href.substr(-nameFile.length) == nameFile) {
 	          	links[i].parentNode.removeChild(links[i]);
				i--;
           }
        }
	}
	
	function deleteLinkByIDUNICO(elem) {
		const idunico = elem.getAttribute("idunico");
		const links = document.head.getElementsByTagName("link");
		for (let i = 0; i < links.length; i++) {
 	       if (links[i].getAttribute("idunico") == idunico) {
 	          	links[i].parentNode.removeChild(links[i]);
				i--;
           }
        }
	}
	
	function manageClassList(e) {
		const items = document.querySelectorAll(e["class_selector"]);
		const action = e["class_action"];
		const firstClassName = e["class_option_first"];
		const secondClassName = e["class_options_second"];
		
		items.forEach(function(elem) {
			changeClassList(action, elem, firstClassName, secondClassName);
		});
	}
	
	function addClassList(elem, firstClassName) { elem.classList.add(firstClassName); }
	function removeClassList(elem, firstClassName) { elem.classList.remove(firstClassName); }
	function replaceClassList(elem, firstClassName, secondClassName) { elem.classList.replace(firstClassName, secondClassName); }
	function toggleClassList(elem, firstClassName) { elem.classList.toggle(firstClassName); }
	
	function changeClassList(action, elem, firstClassName, secondClassName) {
		if (action === "NONE") return;
		if (action === "ADD") addClassList(elem, firstClassName);
		if (action === "REMOVE") removeClassList(elem, firstClassName);
		if (action === "REPLACE") replaceClassList(elem, firstClassName, secondClassName);
		if (action === "TOGGLE") toggleClassList(elem, firstClassName);
	}
	
	
	const HANDLER_CLASS = class InjectCSS_v2Handler extends self.DOMElementHandler
	{
		constructor(iRuntime)
		{
			super(iRuntime, DOM_COMPONENT_ID);
		}
		
	
		CreateElement(elementId, e) {
								
			const elem = document.createElement("span");
			elem.style.position = "absolute";
			elem.style.display = "none";
			elem.setAttribute("idunico", e["idUnico"]);
			
			this.UpdateState(elem, e);
          	
          	return elem;
		}
		
		UpdateState(elem, e) {
		
			if(e["action"] === "NONE") return;
          	
          	if(e["action"] === "ADD") {
          	    addLink(e);
          	    this.PostToRuntimeElement("changeaction", DOM_COMPONENT_ID, { "action": "NONE" });
          	}
          	
          	if(e["action"] === "CHANGE") {
          		deleteLinkByIDUNICO(elem);
          		addLink(e);
          		this.PostToRuntimeElement("changeaction", DOM_COMPONENT_ID, { "action": "NONE" });
          	}
          	
          	if(e["action"] === "DELETE") {
          		deleteLinkByURL(e);
          		this.PostToRuntimeElement("changeaction", DOM_COMPONENT_ID, { "action": "NONE" });
          	}
          	
          	if(e["action"] === "DESTROY"){
          		deleteLinkByURL(e);
          	}
          	
          	if(e["action"] === "CLASS") {
          		manageClassList(e);
          		this.PostToRuntimeElement("changeaction", DOM_COMPONENT_ID, { "action": "NONE" });
          	}
       }
       
       DestroyElement(elem) {
       		deleteLinkByIDUNICO(elem);
       }
		
	};
	
	
	self.RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);

}