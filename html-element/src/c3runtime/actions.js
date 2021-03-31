
"use strict";

{
  const C3 = self.C3;
  C3.Plugins.StraniAnelli_HTMLElement.Acts = {

    /////////////// APPEARANCE

    AppearanceToggleVisible() { // Toggle visible: toggle whether the object is hidden or shown
      this.html.isVisible = !this.html.isVisible;
      this.SetVisible(this.html.isVisible);
    },

    AppearanceSetVisible(visible) { // Set whether the object is hidden or shown
      this.html.isVisible = !!visible; // converte 0 a false, 1 a true
      this.SetVisible(this.html.isVisible);
    },

    AppearanceSetOpacity(opacity) { // Set how transparent the object appears.
      const o = opacity >= 100 ? 1 : opacity <= 0 ? 0 : opacity / 100;
      this.SetOpacity(o);
    },

    /////////////// TEXT

    TextSetText(string) { // Set the text of this object.
      this.html.text = string;
      //Dom.text(this.el, string);
      this.html.hasText = this.html.text.length > 0 ? true : false;
    },

    TextAppendText(string) { // Add text to the end of the existing text.
      const testo = Dom.text(this.el);
      this.html.text = testo + string;
      //Dom.text(this.el, testo + string);
      this.html.hasText = this.html.text.length > 0 ? true : false;
    },

    /////////////// SIZE & POSITION

    PositionSetPosition(x, y) { // Set the object's X and Y co-ordinates at the same time.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetXY(x, y);
      myinstance.SetBboxChanged();
    },

    PositionSetX(x) { // Set the object's X co-ordinate.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetX(x);
      myinstance.SetBboxChanged();
    },

    PositionSetY(y) { // Set the object's Y co-ordinate.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetY(y);
      myinstance.SetBboxChanged();
    },

    SizeSetSize(w, h) { // Set the object's width and height at the same time.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetSize(w, h);
      myinstance.SetBboxChanged();
    },

    SizeSetWidth(w) { // Set the object's width.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetWidth(w);
      myinstance.SetBboxChanged();
    },

    SizeSetHeight(h) { // Set the object's height.
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetHeight(h);
      myinstance.SetBboxChanged();
    },

    /////////////// ANGLE

    AngleSetAngle(a) { // Set the angle the object is oriented at.
      const myinstance = this._inst.GetWorldInfo();
      const angle = C3.toRadians(a)
      myinstance.SetAngle(angle);
      myinstance.SetBboxChanged();
    },

    AngleRotateClockwise(a) { // Rotate the object's angle clockwise by a number of degrees.
      const myinstance = this._inst.GetWorldInfo();
      const angle = myinstance.GetAngle() + C3.toRadians(a);
      myinstance.SetAngle(angle);
      myinstance.SetBboxChanged();
    },

    AngleRotateCounterClockwise(a) { // Rotate the object's angle counter-clockwise by a number of degrees.
      const myinstance = this._inst.GetWorldInfo();
      const angle = myinstance.GetAngle() - C3.toRadians(a);
      myinstance.SetAngle(angle);
      myinstance.SetBboxChanged();
    },

    /////////////// ORIGIN TRANSFORM

    OriginTransformSetVerticalOrigin(origin) {
      this.transform.originVertical = origin == 0 ? 'top' : origin == 1 ? 'center' : 'bottom';
      this._inst.GetWorldInfo().SetBboxChanged();
    },

    OriginTransformSetHorizontalOrigin(origin) {
      this.transform.originHorizontal = origin == 0 ? 'left' : origin == 1 ? 'center' : 'right';
      this._inst.GetWorldInfo().SetBboxChanged();
    },

    OriginTransformSetOrigin(vertical, horizontal) {
      this.transform.originVertical = vertical == 0 ? 'top' : vertical == 1 ? 'center' : 'bottom';
      this.transform.originHorizontal = horizontal == 0 ? 'left' : horizontal == 1 ? 'center' : 'right';
      this._inst.GetWorldInfo().SetBboxChanged();
    },

    /* TODO: CSS
    			- Set tooltip: set the element's tooltip
    			- Text selectable: set whether selectable text is true or not
    			- Change CSS Style: cambia lo stile CSS (se non esiste lo crea)
    			- Clear CSS: clear all CSS Style
    */

    CSSAddClass(nameClass) {
      this.el.classList.add(nameClass);
    },

    CSSRemoveClass(nameClass) {
      this.el.classList.remove(nameClass);
    },

    CSSToggleClass(nameClass) {
      this.el.classList.toggle(nameClass);
    },

    CSSReplaceClass(oldClass, newClass) {
      this.el.classList.replace(oldClass, newClass);
    },

    CSSSetStyle(style) {
      this.SetStyleViaSTRING(style);
    },

    /////////////// ORIGIN TRANSFORM
    HTMLAddAttribute(attr, value) {
      const string = `{ "${attr}": "${value}" }`
      this.SetAttributeViaSTRING(string);
    },
    HTMLRemoveAttribute(attr) {
      this.el.removeAttribute(attr);
    },
    HTMLChangeAttribute(attr, value) {
      const string = `{ "${attr}": "${value}" }`
      this.SetAttributeViaSTRING(string);
    },
    HTMLSetID(value) {
      this.html.id = value;
      this.SetAttributeViaSTRING(`{ "id": "${this.html.id}" }`);
    },

    /////////////// CUSTOM JS

    CustomJSGetFileURL(nameFile) {
      this.GetFileURL(nameFile);
    },
    CustomJSGetFileBLOB(nameFile) {
      this.GetFileBLOB(nameFile);
    },
    CustomJSGetUrlBLOB(url) {
      this.GetUrlBLOB(url);
    },
    CustomJSGetBase64ImgFromURL(url) {
      this.GetBase64ImgFromURL(url)
    },
    CustomJSGetBase64ImgFromFILE(nameFile) {
      this.GetBase64ImgFromFILE(nameFile)
    }

    /* TODO: Z ORDER
    			- Move to bottom: Place the object at the bottom of its layer.
    			- Move to object: Move the object next to another object in the Z order.
    			- Move to top: Place the object at the top of its layer.
    */
  };
}
