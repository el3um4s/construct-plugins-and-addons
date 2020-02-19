"use strict";

{
	C3.Plugins.StraniAnelli_HTMLElement.Exps = {

		/////////////// APPEARANCE

		AppearanceGetOpacity() { // Get the object's current opacity, from 0 (transparent) to 100 (opaque).
			const o = Math.round(this._inst.GetWorldInfo().GetOpacity() * 100);
			return o;
		},

		/////////////// TEXT

		TextGetText() { // Get the object's text.
			// this.html.text = Dom.text(this.el);
			// return this.html.text;
			const text = Dom.text(this.el);
			return text;
		},

		TextGetInnerHTML() {
			const text = Dom.html(this.el);
			return text + "";
		},

		/////////////// SIZE & POSITION

		PositionGetX() { // Get the object's X co-ordinate, in pixels.
			const x = this._inst.GetWorldInfo().GetX();
			return x;
		},

		PositionGetY() { // Get the object's Y co-ordinate, in pixels.
			const y = this._inst.GetWorldInfo().GetY();
			return y;
		},

		SizeGetWidth () { // Get the object's width, in pixels.
			const w = this._inst.GetWorldInfo().GetWidth();
			return w;
		},

		SizeGetHeight () { // Get the object's height, in pixels.
			const h = this._inst.GetWorldInfo().GetHeight();
			return h;
		},

		/////////////// ANGLE

		AngleGetAngle () { // Get the object's current angle, in degrees.
			const a = this._inst.GetWorldInfo().GetAngle();
			return C3.toDegrees(a);
		},

		AngleGetAngleRAD () { // Get the object's current angle, in radians.
			const a = this._inst.GetWorldInfo().GetAngle();
			return a;
		},

		/////////////// ORIGIN TRANSFORM

		OriginTransformGetVertical() {
			return this.transform.originVertical;
		},

		OriginTransformGetHorizontal() {
			return this.transform.originHorizontal;
		},

		/////////////// CSS

		CSSGetClassesAsStringList() { // restituisce l'elenco delle class assegnate all'oggetto
			// è una stringa in cui ogni classe è separata da una virgola
			return Dom.getClass(this.el).toString();
		},

		CSSGetClassAsBoolean(classDaVerificare) { // se la classe esiste restituisce 1 altrimenti 0
			return Dom.hasClass(this.el, classDaVerificare) ? 1 : 0;
		},

		CSSgetCSS(style) {
			return Dom.css(this.el, style);
		},

		/////////////// HMTL

		HTMLgetID(){
			return Dom.attribute(this.el, 'id');
		},

		HTMLgetUID() {
			return Dom.attribute(this.el, 'sa-uid');
		},

		HTMLgetTAG() {
			return this.el.tagName;
		},

		HTMLgetAttribute(attr) {
			return Dom.attribute(this.el, attr);
		},

		HTMLgetVALUE() {
		 	return Dom.attribute(this.el, 'value');
		},

		HTMLgetValueRadio(radioName) {
			// http://jsfiddle.net/Xxxd3/610/
			const radios = document.querySelectorAll(`[sa-uid="${this.html.uid}"] [name="${radioName}"]`);
			// const radios = document.getElementsByName(radioName);
				for (let i = 0, length = radios.length; i < length; i++) {
				    if (radios[i].checked) {
				        return radios[i].value;
				        // only one radio can be logically checked, don't check the rest
				        break;
				    }
				}
		},
		HTMLgetCheckedStatus() {
			const bool = this.el.checked;
			return bool ? 1 : 0;
		},

		/////////////// EVENT
		GetLastEventAsJSON() {
				return this._SerializeEvent(this.lastEvent);
		},
		GetLastEventType() {
				return this.lastEvent["type"];
		},
		GetLastEventProperty(property) {
				if (property == "eventName") return this.lastEvent.toString();
				return this.lastEvent[property];
		},

		/////////////// CUSTOM JS
		JSGetFileURL() { return this.memory.lastFileURL; },
    JSGetFileBLOB() { return this.memory.lastBLOB; },
		JSGetUrlBLOB() { return this.memory.lastBLOB; },
		JSGetBase64ImgFromURL() { return this.memory.lastBase64; },
		JSGetBase64ImgFromFILE() { return this.memory.lastBase64; },

		/////////////// GENERIC
		GenericGetValue(id) { return document.getElementById(id).value; },
		GenericGetAttribute(id, attr) { return document.getElementById(id).getAttribute(attr);	},
		GenericGetValueWithQuerySelector(selectors){	return document.querySelector(selectors).value;	},
		GenericGetAttributeWithQuerySelector(selectors, attr) { return document.querySelector(selectors).getAttribute(attr);	},
		GenericGetCheckedStatus(id) {	return document.getElementById(id).checked ? 1 : 0;	},
		GenericGetCheckedStatusQuerySelector(selectors) { return document.querySelector(selectors).checked ? 1 : 0; },
		GenericGetValueRadio(radioName) {
			// http://jsfiddle.net/Xxxd3/610/
			const radios = document.querySelectorAll(`[name="${radioName}"]`);
			for (let i = 0, length = radios.length; i < length; i++) {
			    if (radios[i].checked) {
			        return radios[i].value;
			        break;
			    }
			}
		}

	};
}
