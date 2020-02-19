"use strict";

{
  C3.Plugins.StraniAnelli_HTMLElement.Cnds = {

    /////////////// APPEARANCE

    AppearanceIsVisible() {
      const visible = this._inst.GetWorldInfo().IsVisible();
      return visible;
    },

    AppearanceCompareOpacity(cmp, value) {
      const opacity = this._inst.GetWorldInfo().GetOpacity() * 100;
      return C3.compare(opacity, cmp, value);
    },

    /////////////// TEXT

    TextHasText() {
      const testo = Dom.text(this.el);
			this.html.hasText = testo.length > 0 ? true : false;
      return this.html.hasText;
    },

    TextCompareText(value, caseSensitive) {
      // const bool = !!caseSensitive;
      const testo = Dom.text(this.el);
      // const ret = bool ? testo === value : testo.toLowerCase() === value.toLowerCase();
      return caseSensitive ? testo === value : C3.equalsNoCase(testo, value);
    },

    /////////////// SIZE & POSITION
    /* TODO: SIZE & POSITION
        - Is on-screen: Test if the object is currently in the visible screen.
        - Is outside layout: Test if the object is outside the layout boundary.
        - Pick nearest/furthest: Pick the instance nearest to or furthest froma a point in the layout.
    */
    SizeCompareWidth(cmp, value) {
      const width = this._inst.GetWorldInfo().GetWidth();
      return C3.compare(width, cmp, value);
    },

    SizeCompareHeight(cmp, value) {
      const height = this._inst.GetWorldInfo().GetHeight();
      return C3.compare(height, cmp, value);
    },

    PositionCompareX(cmp, value) {
      const x = this._inst.GetWorldInfo().GetX();
      return C3.compare(x, cmp, value);
    },

    PositionCompareY(cmp, value) {
      const y = this._inst.GetWorldInfo().GetY();
      return C3.compare(y, cmp, value);
    },

    /////////////// ANGLE
    /*  TODO: ANGLE
        - Is clockwise from: Compare if the object's angle is clockwise from another angle.
        - Is within angle: Compare if the onbject's angle is within X degrees if another angle.
    */

    AngleIsBetweenAngles(a, b) {
      const firstAngle = C3.toRadians(a)
      const secondAngle = C3.toRadians(b)
      const angle = this._inst.GetWorldInfo().GetAngle()
      return angle >= firstAngle && angle <= secondAngle;
   },

   /////////////// ORIGIN TRANSFORM

   OriginTransformCompareVertical(origin) {
     // return origin.toLowerCase() === this.transform.originVertical.toLowerCase();
     const vertical = origin == 0 ? 'top' : origin == 1 ? 'center' : 'bottom';
     return C3.equalsNoCase(vertical, this.transform.originVertical);
   },

   OriginTransformCompareHorizontal(origin) {
     // return origin.toLowerCase() === this.transform.originHorizontal.toLowerCase();
     const horizontal = origin == 0 ? 'left' : origin == 1 ? 'center' : 'right';
     return C3.equalsNoCase(horizontal, this.transform.originHorizontal);
   },

    /////////////// CSS ----------------------------------------------------------------

    CSSCompareClass(classDaVerificare) { return Dom.hasClass(this.el, classDaVerificare) },

    CSSHasStyleDefinited(style) {	return !!Dom.css(this.el, style); },

    CSSCompareStyle(style, value) {	return C3.equalsNoCase(Dom.css(this.el, style), value); },

    /////////////// HTML ---------------------------------------------------------------

    HTMLhasID() {	return Dom.attribute(this.el, 'id') == null ? false : true;  },

    HTMLcompareID(id) { return C3.equalsNoCase(Dom.attribute(this.el, 'id'), id); },

    HTMLcompareTAG(tag) { return C3.equalsNoCase(this.el.tagName, tag); },

    HTMLhasAttribute(attr) { return !!Dom.attribute(this.el, attr); },

    HTMLcompareValue(cmp, value) {
      return C3.compare(Dom.attribute(this.el, 'value'), cmp, value);
      // return C3.equalsNoCase(Dom.attribute(this.el, 'value'), value);
    },

    HTMLcompareAttribute(attr, cmp, value) {
      return C3.compare(Dom.attribute(this.el, attr), cmp, value);
      // return C3.equalsNoCase(Dom.attribute(this.el, attr), value);
    },

    HTMLcompareValueRadio(radioName, cmp, value) {
      let test = null;
      const radios = document.querySelectorAll(`[sa-uid="${this.html.uid}"] [name="${radioName}"]`);

				for (let i = 0, length = radios.length; i < length; i++) {
				    if (radios[i].checked) {
				        test = radios[i].value;
				        break;
				    }
				}

      return C3.compare(test, cmp, value);
      // return C3.equalsNoCase(this.HTMLgetValueRadio(radioName), value);
    },

    HTMLcompareValueAsString(caseSensitive, value) {
      const test = Dom.attribute(this.el, 'value');
      return caseSensitive ? test === value : C3.equalsNoCase(test, value);
    },

    HTMLcompareAttributeAsString(attr, caseSensitive, value) {
      const test = Dom.attribute(this.el, attr);
      return caseSensitive ? test === value : C3.equalsNoCase(test, value);
    },

    HTMLcompareValueRadioAsString(radioName, caseSensitive, value) {
      let test = null;
      const radios = document.querySelectorAll(`[sa-uid="${this.html.uid}"] [name="${radioName}"]`);

				for (let i = 0, length = radios.length; i < length; i++) {
				    if (radios[i].checked) {
				        test = radios[i].value;
				        break;
				    }
				}

      return caseSensitive ? test === value : C3.equalsNoCase(test, value);
    },

    HTMLisChecked() {
			return this.el.checked;
    },

    /////////////// EVENT LISTENER

        EventMouseOnClick() { return !0 },
        EventMouseOnDblClick() { return !0 },
        EventMouseOnContextMenu() { return !0 },
        EventMouseOnAuxClick() { return !0 },
        EventMouseOnWheel() { return !0 },
        EventMouseOnMouseOver() { return !0 },
        EventMouseOnMouseOut() { return !0 },
        EventMouseOnMouseDown() { return !0 },
        EventMouseOnMouseUp() { return !0 },
        EventMouseOnMouseEnter() { return !0 },
        EventMouseOnMouseLeave() { return !0 },
        EventMouseOnMouseMove() { return !0 },
        EventMouseOnMouseSelect() { return !0 },

        EventFocusOnFocus() { return !0 },
        EventFocusOnBlur() { return !0 },

        EventKeyboardOnKeyDown() { return !0 },
        EventKeyboardOnKeyPress() { return !0 },
        EventKeyboardOnKeyUp() { return !0 },

        EventValueChangeCheckboxStateChange() { return !0 },
        EventValueChangeInput() { return !0 },
        EventValueChangeRadioStateChange() { return !0 },
        EventValueChangeValueChange() { return !0 },

        EventFormReset() { return !0 },
        EventFormSubmit() { return !0 },

    /////////////// CUSTOM JS
      JSOnGetFileURL() { return !0 },
      JSOnGetBLOB() { return !0 },
      JSOnGetUrlBLOB() { return !0 },
      JSOnGetBase64ImgFromURL()  { return !0 },
      JSOnGetBase64ImgFromFILE() { return !0 }
    };
}
