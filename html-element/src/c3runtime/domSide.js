"use strict";
{
    const a = class extends DOMHandler {
        constructor(a) {
            super(a, "stranianelli_htmlelement"),
            this.AddRuntimeMessageHandler("prova", (a)=>this._prova(a))
        }
        _prova(a) {
            console.log(a);
        }
    };
    RuntimeInterface.AddDOMHandlerClass(a)
}
