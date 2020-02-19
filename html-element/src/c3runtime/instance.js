"use strict";

{
  C3.Plugins.StraniAnelli_HTMLElement.Instance = class StraniAnelli_HTMLElementInstance extends C3.SDKWorldInstanceBase {
    constructor(inst, properties) {
      super(inst, "stranianelli_htmlelement");

      function proprieta(numeroProprieta, valorePredefinito = "") {
        return properties ? properties[numeroProprieta] : valorePredefinito;
      };

      function getArrayFromString(string) {
        let array = [];
        try {
          array = JSON.parse(string);
        } catch (_error) {}
        return array
      };

      const contatoreValore = {
        memory: 0,
        domStructure: 2,
        html: 7,
        inlineStyle: 15,
        editorPreview: 29,
        text: 35,
        transform: 41,
        inline: 43,
        mouse: 44,
        focus: 70,
        keyboard: 74,
        valuechange: 80,
        form: 88
      }

      // imposto i valori predefiniti
      this.el = null; // è l'elemento nel DOM
      this.lastEvent = null; // l'ultimo evento intercettato

      let contatore = contatoreValore.memory;
      this.memory = {
        // objectModel
        instVarNames: getArrayFromString(proprieta(contatore, "[]")),
        objectStore: getArrayFromString(proprieta(contatore+1 , "[]")),
        text: "", // per modificare il contenuto del dom solo quando il text cambia
        resizeWindowForSize: true,
        resizeWindowForPosition: true,
        resizeWindowForRotation: true,
        resizeWindowForFontSize: true,
        lastFileURL: "",
        lastBLOB: "",
        lastBase64: ""
      };

      contatore = contatoreValore.domStructure;
      this.domStructure = {
        parentUID: proprieta(contatore, ""),
        parentID: proprieta(contatore+1, ""),
        useC3position: proprieta(contatore+2, ""),
        useC3size: proprieta(contatore+3, ""),
        useC3rotation: proprieta(contatore+4, "")
      };

      contatore = contatoreValore.html;
      this.html = {
        // uid: this._inst._uid,
        uid: this.GetInstance().GetUID(),
        isVisible: proprieta(contatore, false),
        tag: proprieta(contatore+1, ""),
        id: proprieta(contatore+2, ""),
        class: proprieta(contatore+3, ""),
        attribute: proprieta(contatore+4, ""),
        hasText: proprieta(contatore+5, false),
        textAsHTML: proprieta(contatore+6, false),
        text: proprieta(contatore+7, ""),
      };

      contatore = contatoreValore.inlineStyle;
      this.inlineStyle = {
        usePreviewColor: proprieta(contatore, false),
        usePreviewBorderSettings: proprieta(contatore+1, false),
        borderStyle: this.GetElementInArray(proprieta(contatore+2, 0), ['', 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']),
        borderRadius: proprieta(contatore+3, ""),
        usePreviewFontFamily: proprieta(contatore+4, ""),
        usePreviewFontSettings: proprieta(contatore+5, false),
        usePreviewFontAutoSize: proprieta(contatore+6, false),
        padding: proprieta(contatore+7, ""),
        boxSizing: this.GetElementInArray(proprieta(contatore+8, 0), ['', 'content-box', 'border-box']),
        wordBreak: this.GetElementInArray(proprieta(contatore+9, 0), ['', 'normal', 'break-all', 'keep-all', 'break-word']),
        whiteSpace: this.GetElementInArray(proprieta(contatore+10, 0), ['', 'normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line']),
        overflowx: this.GetElementInArray(proprieta(contatore+11, 0), ['', 'visible', 'hidden', 'scroll', 'auto']),
        overflowy: this.GetElementInArray(proprieta(contatore+12, 0), ['', 'normal', 'hidden', 'scroll', 'auto']),
        style: proprieta(contatore+13, "")
      };

      contatore = contatoreValore.editorPreview;
      this.editorPreview = {
        previewColor: proprieta(contatore, [1, 1, 0]),
        previewBorderWidth: proprieta(contatore+1, 2),
        previewBorderColor: proprieta(contatore+2, [1, 1, 0])
      };

      contatore = contatoreValore.text;
      this.text = {
        font: proprieta(contatore, ""),
        size: proprieta(contatore+1, 12),
        color: proprieta(contatore+2, [0, 0, 0]),
        isBold: proprieta(contatore+3, false),
        isItalic: proprieta(contatore+4, false),
        align: this.GetElementInArray(proprieta(contatore+5, 0), ['left', 'center', 'right'])
      };

      contatore = contatoreValore.transform;
      this.transform = {
        originVertical: this.GetElementInArray(proprieta(contatore, 0), ['top', 'center', 'bottom']),
        originHorizontal: this.GetElementInArray(proprieta(contatore+1, 0), ['left', 'center', 'right'])
      };

      this.event = {
        inline: {},
        mouse: {},
        focus: {},
        keyboard: {},
        valuechange: {},
        form: {}
      }

      contatore = contatoreValore.inline;
      this.event.inline = {
        event: proprieta(contatore, "")
      };

      contatore = contatoreValore.mouse;
      this.event.mouse = {
        onClick: proprieta(contatore, false),
        onClickFunct: proprieta(contatore+1, ""),
        onDoubleClick: proprieta(contatore+2, false),
        onDoubleClickFunct: proprieta(contatore+3, ""),
        onContextMenu: proprieta(contatore+4, false),
        onContextMenuFunct: proprieta(contatore+5, ""),
        onAuxClick: proprieta(contatore+6, false),
        onAuxClickFunct: proprieta(contatore+7, ""),
        onMouseWheel: proprieta(contatore+8, false),
        onMouseWheelFunct: proprieta(contatore+9, ""),
        onMouseOver: proprieta(contatore+10, false),
        onMouseOverFunct: proprieta(contatore+11, ""),
        onMouseOut: proprieta(contatore+12, false),
        onMouseOutFunct: proprieta(contatore+13, ""),
        onMouseDown: proprieta(contatore+14, false),
        onMouseDownFunct: proprieta(contatore+15, ""),
        onMouseUp: proprieta(contatore+16, false),
        onMouseUpFunct: proprieta(contatore+17, ""),
        onMouseEnter: proprieta(contatore+18, false),
        onMouseEnterFunct: proprieta(contatore+19, ""),
        onMouseLeave: proprieta(contatore+20, false),
        onMouseLeaveFunct: proprieta(contatore+21, ""),
        onMouseMove: proprieta(contatore+22, false),
        onMouseMoveFunct: proprieta(contatore+23, ""),
        onMouseSelect: proprieta(contatore+24, false),
        onMouseSelectFunct: proprieta(contatore+25, "")
      };

      contatore = contatoreValore.focus;
      this.event.focus = {
        onFocus: proprieta(contatore, false),
        onFocusFunct: proprieta(contatore+1, ""),
        onBlur: proprieta(contatore+2, false),
        onBlurFunct: proprieta(contatore+3, "")
      };

      contatore = contatoreValore.keyboard;
      this.event.keyboard = {
        onKeyDown: proprieta(contatore, false),
        onKeyDownFunct: proprieta(contatore+1, ""),
        onKeyPress: proprieta(contatore+2, false),
        onKeyPressFunct: proprieta(contatore+3, ""),
        onKeyUp: proprieta(contatore+4, false),
        onKeyUpFunct: proprieta(contatore+5, "")
      };

      contatore = contatoreValore.valuechange;
      this.event.valuechange = {
        onCheckboxStateChange: proprieta(contatore, false),
        onCheckboxStateChangeFunct: proprieta(contatore+1, ""),
        onInput: proprieta(contatore+2, false),
        onInputFunct: proprieta(contatore+3, ""),
        onRadioStateChange: proprieta(contatore+4, false),
        onRadioStateChangeFunct: proprieta(contatore+5, ""),
        onValueChange: proprieta(contatore+6, false),
        onValueChangeFunct: proprieta(contatore+7, "")
      };

      contatore = contatoreValore.form;
      this.event.form = {
        onReset: proprieta(contatore, false),
        onResetFunct: proprieta(contatore+1, ""),
        onSubmit: proprieta(contatore+2, false),
        onSubmitFunct: proprieta(contatore+3, "")
      };

      // creo un elemento HTML a partire dalle proprietà impostate
      this.CreateElement();

      window.onresize = () => {
        this.memory.resizeWindowForSize = true;
        this.memory.resizeWindowForPosition = true;
        this.memory.resizeWindowForRotation = true;
        this.memory.resizeWindowForFontSize = true;
      };

      this._StartTicking();
    }

    Release() {
      Dom.remove(this.el);
      super.Release();
    }

    Draw(renderer) {
      this.DrawPosition();
      this.DrawSize();
      this.DrawAutoFontSize();
      this.DrawRotation();
    }

    Tick() {
      if (this.html.hasText && !this.html.textAsHTML) {
        const newText = this.ParseMustacheVariable(this.html.text);
        if (this.memory.text != newText) {
          this.SetText(this.html.text);
          this.memory.text = Dom.text(this.el);
        }
      } else if (this.html.hasText && this.html.textAsHTML) {
        const newTextMustached = this.ParseMustacheVariable(this.html.text);
        const newText = this.ParseEventOnAttributeProperty(newTextMustached);
        if (this.memory.text != newText) {
          Dom.html(this.el, this.ParseMustacheVariable(newText));
          this.memory.text = newText;
        }
      }
      this.DrawPosition();
      this.DrawSize();
      this.DrawAutoFontSize();
      this.DrawRotation();
    }

    // TODO: SAVE TO JSON
    SaveToJson() {
      return {};
    }
    // TODO: SET FROM JSON
    LoadFromJson(o) {}
  };

  // per inserire funzioni generali utili
  var InstanceFunctionsObject = {

    SetEl() {
      // imposta a this.el l'emento su cui si sta lavorando
      this.el = Dom.find(`[sa-uid="${this.html.uid}"]`)[0];
    },

    GetElementInArray(pos, array) {
      return array[pos];
    },

    RgbToRGB(array) {
      // converte un color rgb 0-1 in una stringa rgb(r,g,b) in 0-255
      const r = array[0],
        g = array[1],
        b = array[2];
      return `rgb(${Math.floor(r*255)}, ${Math.floor(g*255)}, ${Math.floor(b*255)})`;
    },

    ParseCSSText(cssText) {
      // converte una stringa che rapprenseta uno stile CSS in un oggetto js
      // https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object
      // updated 2017-09-28
      let cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
      cssTxt = this.ParseMustacheVariable(cssTxt);
      let style = {},
        [, ruleName, rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/) || [, , cssTxt];
      let cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());
      let props = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
      for (let [property, value] of props) style[cssToJs(property)] = value;
      return {
        cssText,
        ruleName,
        style
      };
    },

    ParseMustacheVariable(string) {
      const regex = /\{\{.*?\}\}/gi;

      const ret = string.replace(regex, (str, pos, string) => {
        // creo un array con tutti i nomi/numeri usati dentro la string compresi tra le due parentesi graffe {{...}}
        const properties = str.replace('{{', '').replace('}}', '').trim().split(' ');
        let newString = '';
        const maxVar = this.GetInstance().GetInstanceVariableCount();
        for (let i = 0; i < properties.length; i++) {
          const tag = properties[i];
          let tempString = '';
          if (!isNaN(tag)) { // se il tag tra parentesi graffe è un numero
            tempString = tag >= maxVar || tag < 0 ? '' : this.GetInstance().GetInstanceVariableValue(tag);
          } else { // se invece è una stringa
            const index = this.GetInstanceVariableIndexFromName(tag);
            // controllo se la stringa esiste nell'elenco delle variabili
            if (index >= 0) { // se esiste allora prendo il valore corrispondente
              tempString = index >= maxVar || index < 0 ? '' : this.GetInstance().GetInstanceVariableValue(index);
            } else { // se non esiste provo a controllare nello store

              if (this.memory.objectStore.length > 0) {
                for (let j = 0; j<this.memory.objectStore.length; j++) {
                  const store = parseInt(this.memory.objectStore[j]);
                  const instanceStore = this.GetRuntime().GetInstanceByUID(store);
                  if (instanceStore != null && store != this.GetInstance().GetUID()) {
                      const tempVarNames = instanceStore.GetSdkInstance().memory.instVarNames;
                      const posVarNames = tempVarNames.indexOf(tag);
                      if (posVarNames >= 0) {
                        const maxVarStore = instanceStore.GetInstanceVariableCount();
                        tempString = posVarNames >= maxVarStore ? '' : instanceStore.GetInstanceVariableValue(posVarNames);
                        break;
                      }
                  }
                }
              }

            }
          }
          // il nuovo valore che sostituice il tag dentro le parentesi (e le parentesi stesse)
          newString += tempString;
        }
        return newString;
      });

      return ret;
    },

    GetInstanceVariableIndexFromName(string) {
      const varNames = this.memory.instVarNames;
      const pos = varNames.indexOf(string)
      return pos;
    },

    GetRotationFromCSS(tipo = "rad") {
      // restituisce l'eventuale rotazione dell'elemento, in rad o in deg
      var el = this.el;
      var transform = this.GetStyle("transform");

      if (transform == "none") return 0;

      let values = transform.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');

      const a = values[0];
      const b = values[1];
      const c = values[2];
      const d = values[3];

      const scale = Math.sqrt(a * a + b * b);

      let radians = Math.atan2(b, a);
      if (radians < 0) radians += (2 * Math.PI);
      const degrees = Math.round(radians * (180 / Math.PI));

      return tipo.toLowerCase() == "rad" ? radians : degrees;
    },

    SetAttributeViaOBJ(obj) {
      // aggiungi un attributo (nella forma { nomeAttributo: valoreAttributo })
      Dom.attribute(this.el, obj);
    },

    SetAttributeViaSTRING(string) {
      // aggiungi un attributo (partendo da una stringa)
      const s = this.ParseMustacheVariable(string);
      let json = {};
      try {
        json = JSON.parse(s);
      } catch (_error) {}
      this.SetAttributeViaOBJ(json);
    },

    AddClass(nameClass) {
      const s = this.ParseMustacheVariable(nameClass);
      const classi = s.replace(/\s+/g, ' ');
      const ar = classi.split(' ');
      if (classi != "" && classi != " ") {
        for (let i = 0; i < ar.length; i++) {
          this.el.classList.add(ar[i]);
        }
      }
      // Dom.addClass(this.el, nameClass);
    },

    SetVisible(bool = true) {
      // imposta se l'elemento è visibile o meno
      let myinstance = this._inst.GetWorldInfo();
      myinstance.SetVisible(bool);
      this.SetStyle({
        'display': bool ? '' : 'none'
      });
      myinstance.SetBboxChanged();
      this.html.isVisible = bool;
    },

    SetOpacity(opacity) {
      let myinstance = this._inst.GetWorldInfo();
      const o = Math.abs(opacity) > 1 ? Math.abs(opacity) / 100 : Math.abs(opacity)
      myinstance.SetOpacity(o);
      this.SetStyle({
        'opacity': o
      });
      myinstance.SetBboxChanged();
    },

    SetStyle(obj) {
      // imposta style tramite un oggetto nella forma { stile: valore}
      Dom.css(this.el, obj);
    },

    SetStyleViaSTRING(string) {
      const cssAttribute = this.ParseCSSText(string);
      Dom.css(this.el, cssAttribute.style);
    },

    SetText(string) {
      if (this.html.textAsHTML) {
        const newText = this.ParseMustacheVariable(string)
        Dom.html(this.el, this.ParseEventOnAttributeProperty(newText));
      } else {
        Dom.text(this.el, this.ParseMustacheVariable(string));
      }
    },

    SetTransformOrigin(vertical = "top", horizontal = "left") {
      this.SetStyle({
        'transform-origin': `${vertical} ${horizontal}`
      });
    },

    DrawAutoFontSize() {
      // cambia la dimensione del font
      // se è impostata la proprietà autofontsize === true
      // se la nuova dimensione è diversa da quella precedente

      if (!this.inlineStyle.usePreviewFontAutoSize) return;

      const wi = this._inst.GetWorldInfo();
      const layer = wi.GetLayer();
      const exTextSize = this.text.size;
      const newTextSize = layer.LayerToDrawSurface(0, exTextSize)[1];
      if (exTextSize !== newTextSize || this.memory.resizeWindowForFontSize) {
        this.memory.resizeWindowForFontSize = false;
        this.SetStyle({
          'font-size': newTextSize + 'px'
        });
      }
    },

    DrawPosition() {

      // per gestire eventuali elementi inseriti dentro altri elementi nel domSide
      // estraggo l'eventuale UID dell'elemento genitore
      if (this.domStructure.parentID != "") {
        const parentElement = document.getElementById(this.domStructure.parentID);
        if (!!parentElement) {
          const attr = parentElement.getAttribute("sa-uid");
          this.domStructure.parentUID = attr;
        }
      }
      if (this.domStructure.parentUID != "") {
        const parentElement = document.querySelectorAll(`[sa-uid="${this.domStructure.parentUID}"]`)[0]
        if (!!parentElement) {
          const childIsDefined = document.querySelectorAll(`[sa-uid="${this.domStructure.parentUID}"] [sa-uid="${this.html.uid}"]`)[0];
          // l'elemento non è ancora inserito nel dom
          if (typeof childIsDefined == 'undefined') {
            this.el.parentElement.removeChild(this.el);
            parentElement.appendChild(this.el);
          };
        }
      }

      if (!this.domStructure.useC3position) return;

      // conservo la posizione precedente, se quella nuova è uguale non devo fare nulla
      const exX = Dom.offset(this.el).left;
      const exY = Dom.offset(this.el).top;
      // per posizionare sullo schermo devo partire dalle coordinate sulla canvas
      // e poi correggerle in base alla posizione della canvas sullo schermo
      const canvas = Dom.findByTagName('canvas')[0];
      let correggiX = 0;
      let correggiY = 0;
      if (null !== canvas) {
        const offsetDocument = Dom.offset(canvas);
        correggiX = offsetDocument.left;
        correggiY = offsetDocument.top;
      }

      // adesso calcolo la posizione sulla canvas
      // uso l'oggetto virtuale creato da construct3
      const wi = this._inst.GetWorldInfo();
      const layer = wi.GetLayer();
      const quad = wi.GetBoundingQuad();
      const tlx = quad.getTlx();
      const tly = quad.getTly();

      // calcolo le nuove coordinate
      const newX = layer.LayerToDrawSurface(tlx, tly)[0] + correggiX;
      const newY = layer.LayerToDrawSurface(tlx, tly)[1] + correggiY;

      // se l'elemento è il children di un altro elemento allora devo calcolare la posizione in base al parent
      let parentX = 0;
      let parentY = 0;

      if (this.domStructure.parentUID != "") {
        //const parentElement = this._runtime.GetInstanceByUID(parseInt(this.domStructure.parentUID));
        const parentElement = document.querySelectorAll(`[sa-uid="${this.domStructure.parentUID}"]`)[0]
        if (!!parentElement) {
          const parentRect = parentElement.getBoundingClientRect();
          parentX = parentRect.x;
          parentY = parentRect.y;
        }
      }
      // se le nuove coordinate sono diverse da quelle precedenti
      // allora aggiorno la posizione dell'elemento
      if (exX !== newX || exY !== newY || this.memory.resizeWindowForPosition) {
        this.memory.resizeWindowForPosition = false;
        this.SetStyle({
          'position': 'absolute',
          'left': newX - parentX + 'px',
          'top': newY - parentY + 'px'
        });
      }
    },

    DrawSize() {

      if (!this.domStructure.useC3size) return;

      // conservo la dimensione precedente
      // se è uguale non devo fare nulla
      const exWidth = Dom.width(this.el);
      const exHeight = Dom.height(this.el);

      // mi prendo i riferimenti per calcolare le dimensioni
      const wi = this._inst.GetWorldInfo();
      const layer = wi.GetLayer();
      const quad = wi.GetBoundingQuad();
      // prendo l'angolo in alto a sinistra e poi le coordinate in alto a dx e in basso a sx
      const tlx = quad.getTlx();
      const tly = quad.getTly();
      const trx = quad.getTrx();
      const bly = quad.getBly();

      // calcolo le nuove dimensioni

      const myinstance = this._inst.GetWorldInfo();
      const instWidth = myinstance.GetWidth();
      const instHeight = myinstance.GetHeight();
      const newWidth = Math.abs(layer.LayerToDrawSurface(instWidth, 0)[0]);
      const newHeight = Math.abs(layer.LayerToDrawSurface(0, instHeight)[1]);

      // se le nuove dimensioni sono diverse da quelle precedenti
      // allora aggiorno la dimensione dell'elemento
      if (exWidth !== newWidth || exHeight !== newHeight || this.memory.resizeWindowForSize) {
        this.memory.resizeWindowForSize = false;
        this.SetStyle({
          'width': newWidth + 'px',
          'height': newHeight + 'px'
        });
      }
    },
    DrawRotation() {

      if (!this.domStructure.useC3rotation) return;

      const exAngle = this.GetRotationFromCSS("rad");
      const myinstance = this._inst.GetWorldInfo();
      const newAngle = myinstance.GetAngle();

      if (exAngle !== newAngle || this.memory.resizeWindowForRotation) {
        this.memory.resizeWindowForRotation = false;
        const newDeg = Math.round(newAngle * (180 / Math.PI));
        this.SetStyle({
          'transform': 'rotate(' + newDeg + 'deg)'
        });
      }
    },
    GetStyle(nameStyle) {
      return Dom.css(this.el, nameStyle);
    },
    CallFunction(nameFunction = "", param = []) {
      if (self["c3_callFunction"] && nameFunction != "") {
        if (param.length === 0) { // se non ci sono parametri
          self["c3_callFunction"](nameFunction);
        } else {
          self["c3_callFunction"](nameFunction, param);
        }
      }
    },

    _SerializeEvent(e) {
      // https://code.i-harness.com/en/q/b03418
      function pathToSelector(node) {
        if (!node || !node.outerHTML) {
          return null;
        }

        var path;
        while (node.parentElement) {
          var name = node.localName;
          if (!name) break;
          name = name.toLowerCase();
          var parent = node.parentElement;

          var domSiblings = [];

          if (parent.children && parent.children.length > 0) {
            for (var i = 0; i < parent.children.length; i++) {
              var sibling = parent.children[i];
              if (sibling.localName && sibling.localName.toLowerCase) {
                if (sibling.localName.toLowerCase() === name) {
                  domSiblings.push(sibling);
                }
              }
            }
          }

          if (domSiblings.length > 1) {
            name += ':eq(' + domSiblings.indexOf(node) + ')';
          }
          path = name + (path ? '>' + path : '');
          node = parent;
        }

        return path;
      };
      if (e) {
        const o = {
          eventName: e.toString(),
          altKey: e.altKey,
          bubbles: e.bubbles,
          button: e.button,
          buttons: e.buttons,
          cancelBubble: e.cancelBubble,
          cancelable: e.cancelable,
          clientX: e.clientX,
          clientY: e.clientY,
          composed: e.composed,
          ctrlKey: e.ctrlKey,
          currentTarget: e.currentTarget ? e.currentTarget.outerHTML : null,
          defaultPrevented: e.defaultPrevented,
          detail: e.detail,
          eventPhase: e.eventPhase,
          fromElement: e.fromElement ? e.fromElement.outerHTML : null,
          isTrusted: e.isTrusted,
          layerX: e.layerX,
          layerY: e.layerY,
          metaKey: e.metaKey,
          movementX: e.movementX,
          movementY: e.movementY,
          offsetX: e.offsetX,
          offsetY: e.offsetY,
          pageX: e.pageX,
          pageY: e.pageY,
          path: pathToSelector(e.path && e.path.length ? e.path[0] : null),
          relatedTarget: e.relatedTarget ? e.relatedTarget.outerHTML : null,
          returnValue: e.returnValue,
          screenX: e.screenX,
          screenY: e.screenY,
          shiftKey: e.shiftKey,
          sourceCapabilities: e.sourceCapabilities ? e.sourceCapabilities.toString() : null,
          target: e.target ? e.target.outerHTML : null,
          timeStamp: e.timeStamp,
          toElement: e.toElement ? e.toElement.outerHTML : null,
          type: e.type,
          view: e.view ? e.view.toString() : null,
          which: e.which,
          x: e.x,
          y: e.y
        };
        return JSON.stringify(o, null, 2);
      }
      return "";
    },
    _GetFunctionForEvent(stringFunction) { // converte una stringa nomeFunzione(parametro1, parametro2, altroparametro) in un oggetto {nameFunction, param}

      const regex = /('([^']|"")*')/g;  // trova i doppi apici dentro gli apici singoli
      const s = stringFunction.match(regex);
      let newS = stringFunction;
      const quotes = '&quot;';

      // sostituisce apici doppi dentro apici singoli con la string &quot;
      if ( s!= null) {
        for (let i = 0; i < s.length; i++) {
            const temp = s[i];
            const nwS = temp.replace(/"/g, quotes);
            newS = newS.replace(temp, nwS);
        }
      }

      const string = this.ParseMustacheVariable(newS.trim()).replace(/'/g, '"');
      const isOpenParentheses = string.includes('(');
      if (!isOpenParentheses) return {
        nameFunction: string,
        param: []
      };

      const nameFunction = string.substr(0, string.indexOf('(')).trim();

      const isCloseParentheses = string.includes(')');
      if (!isCloseParentheses) return {
        nameFunction: nameFunction,
        param: []
      };

      let parametri = string.substr(string.indexOf('(') + 1).trim();
      parametri = parametri.substr(0, parametri.lastIndexOf(')')).trim();

      // const array = JSON.parse("[" + parametri + "]");

      let array = JSON.parse("[" + parametri + "]");
      /*if (array != null) {
        for (let i = 0; i < array.length; i++) {
          // https://stackoverflow.com/questions/3752769/how-to-escape-double-quotes-in-title-attribute
          // array[i]= array[i].replace(/&quot;/g, '‘');
        }
      }*/

      return {
        nameFunction: nameFunction,
        param: array,
        // paramString: "[" + parametri.replace(/"/g, "'").replace(/&quot;/g, '‘') + "]"
        paramString: "[" + parametri.replace(/"/g, "'") + "]"
      };
    },
    _AddEventStandard(nomeAzione = "click", nomeTrigger = "EventMouseOnClick", stringFunction = "", stopPropagation = true, preventDefault = true) {
      this.el.addEventListener(nomeAzione, (event) => {
        this.lastEvent = event;
        if (preventDefault) event.preventDefault();
        if (stopPropagation) event.stopPropagation();
        this.Trigger(this._GetTrigger(nomeTrigger));
        const funct = this._GetFunctionForEvent(stringFunction);
        this.CallFunction(funct.nameFunction, funct.param);
      });
    },
    _GetTrigger(nomeTrigger) { // restituisce il trigger corrispondente all'evento chiamato
      // uso uno switch qui perché è più semplice che farlo in AddEventStandard (e così ho tutto in ordine e leggibile)
      switch (nomeTrigger) {
        case "EventMouseOnClick":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnClick;
        case "EventMouseOnDblClick":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnDblClick;
        case "EventMouseOnContextMenu":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnContextMenu;
        case "EventMouseOnAuxClick":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnAuxClick;
        case "EventMouseOnWheel":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnWheel;
        case "EventMouseOnMouseOver":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseOver;
        case "EventMouseOnMouseOut":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseOut;
        case "EventMouseOnMouseDown":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseDown;
        case "EventMouseOnMouseUp":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseUp;
        case "EventMouseOnMouseEnter":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseEnter;
        case "EventMouseOnMouseLeave":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseLeave;
        case "EventMouseOnMouseMove":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseMove;
        case "EventMouseOnMouseSelect":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventMouseOnMouseSelect;

        case "EventFocusOnFocus":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventFocusOnFocus;
        case "EventFocusOnBlur":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventFocusOnBlur;

        case "EventKeyboardOnKeyDown":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventKeyboardOnKeyDown;
        case "EventKeyboardOnKeyPress":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventKeyboardOnKeyPress;
        case "EventKeyboardOnKeyUp":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventKeyboardOnKeyUp;

        case "EventValueChangeCheckboxStateChange":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventValueChangeCheckboxStateChange;
        case "EventValueChangeInput":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventValueChangeInput;
        case "EventValueChangeRadioStateChange":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventValueChangeRadioStateChange;
        case "EventValueChangeValueChange":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventValueChangeValueChange;

        case "EventFormReset":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventFormReset;
        case "EventFormSubmit":
          return C3.Plugins.StraniAnelli_HTMLElement.Cnds.EventFormSubmit

        default:
      }
    },
    AddEvents() { // https://developer.mozilla.org/en-US/docs/Web/Events
      // aggiungo gli eventi
      if (this.event.mouse.onClick) this._AddEventStandard("click", "EventMouseOnClick", this.event.mouse.onClickFunct); // A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.
      if (this.event.mouse.onDoubleClick) this._AddEventStandard("dblclick", "EventMouseOnDblClick", this.event.mouse.onDoubleClickFunct); // A pointing device button is clicked twice on an element.
      if (this.event.mouse.onContextMenu) this._AddEventStandard("contextmenu", "EventMouseOnContextMenu", this.event.mouse.onContextMenuFunct); // The right button of the mouse is clicked (before the context menu is displayed).
      if (this.event.mouse.onAuxClick) this._AddEventStandard("auxclick", "EventMouseOnAuxClick", this.event.mouse.onAuxClickFunct); // A pointing device button (ANY non-primary button) has been pressed and released on an element.
      if (this.event.mouse.onMouseWheel) this._AddEventStandard("wheel", "EventMouseOnWheel", this.event.mouse.onMouseWheelFunct); // A wheel button of a pointing device is rotated in any direction.
      if (this.event.mouse.onMouseOver) this._AddEventStandard("mouseover", "EventMouseOnMouseOver", this.event.mouse.onMouseOverFunct); // A pointing device is moved onto the element that has the listener attached or onto one of its children.
      if (this.event.mouse.onMouseOut) this._AddEventStandard("mouseout", "EventMouseOnMouseOut", this.event.mouse.onMouseOutFunct); // A pointing device is moved off the element that has the listener attached or off one of its children.
      if (this.event.mouse.onMouseDown) this._AddEventStandard("mousedown", "EventMouseOnMouseDown", this.event.mouse.onMouseDownFunct); // A pointing device button is pressed on an element.
      if (this.event.mouse.onMouseUp) this._AddEventStandard("mouseup", "EventMouseOnMouseUp", this.event.mouse.onMouseUpFunct); // A pointing device button is released over an element.
      if (this.event.mouse.onMouseEnter) this._AddEventStandard("mouseenter", "EventMouseOnMouseEnter", this.event.mouse.onMouseEnterFunct); // A pointing device is moved onto the element that has the listener attached.
      if (this.event.mouse.onMouseLeave) this._AddEventStandard("mouseleave", "EventMouseOnMouseLeave", this.event.mouse.onMouseLeaveFunct); // A pointing device is moved off the element that has the listener attached.
      if (this.event.mouse.onMouseMove) this._AddEventStandard("mousemove", "EventMouseOnMouseMove", this.event.mouse.onMouseMoveFunct); // A pointing device is moved over an element. (Fired continously as the mouse moves.)
      if (this.event.mouse.onMouseSelect) this._AddEventStandard("select", "EventMouseOnMouseSelect", this.event.mouse.onMouseSelectFunct); // Some text is being selected.

      if (this.event.focus.onFocus) this._AddEventStandard("focus", "EventFocusOnFocus", this.event.focus.onFocusFunct); // 	An element has received focus (does not bubble).
      if (this.event.focus.onBlur) this._AddEventStandard("blur", "EventFocusOnBlur", this.event.focus.onBluFunct); // An element has lost focus (does not bubble).

      if (this.event.keyboard.onKeyDown) this._AddEventStandard("keydown", "EventKeyboardOnKeyDown", this.event.keyboard.onKeyDownFunct, false, false); // ANY key is pressed
      if (this.event.keyboard.onKeyPress) this._AddEventStandard("keypress", "EventKeyboardOnKeyPress", this.event.keyboard.onKeyPressFunct, false, false); // ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)
      if (this.event.keyboard.onKeyUp) this._AddEventStandard("keyup", "EventKeyboardOnKeyUp", this.event.keyboard.onKeyUpFunct, false, false); // ANY key is released

      if (this.event.valuechange.onCheckboxStateChange) this._AddEventStandard("change", "EventValueChangeCheckboxStateChange", this.event.valuechange.onCheckboxStateChangeFunct); // The CheckboxStateChange event is executed when the state of a <checkbox> element has changed.
      if (this.event.valuechange.onInput) this._AddEventStandard("input", "EventValueChangeInput", this.event.valuechange.onInputFunct); // The DOM input event is fired synchronously when the value of an <input>, <select>, or <textarea> element is changed.
      if (this.event.valuechange.onRadioStateChange) this._AddEventStandard("change", "EventValueChangeRadioStateChange", this.event.valuechange.onRadioStateChangeFunct); // The RadioStateChange event is executed when the state of a <radio> element has changed.
      if (this.event.valuechange.onValueChange) this._AddEventStandard("change", "EventValueChangeValueChange", this.event.valuechange.onValueChangeFunct); // The ValueChange event is executed when the value of an element, <progress> for example, has changed.

      if (this.event.form.onReset) this._AddEventStandard("reset", "EventFormReset", this.event.form.onResetFunct); // The reset button is pressed
      if (this.event.form.onSubmit) this._AddEventStandard("submit", "EventFormSubmit", this.event.form.onSubmitFunct); // The submit button is pressed
    },

    CreateElement() {
      const newEl = Dom.create(`<${this.html.tag} sa-uid=${this.html.uid}></${this.html.tag}>`);
      // const newEl = document.createElement(`${this.html.tag}`); //
      // newEl.setAttribute("sa-uid", `${this.html.uid}`);

      // inserisco l'elemento nella pagina
      Dom.append(Dom.findByTagName('body')[0], newEl);

      // seleziono l'elemento appena inserito
      this.SetEl();
      // aggiungo l'ID
      // const tempID = this.ParseMustacheVariable(this.html.id);
      // this.SetAttributeViaOBJ({
      //   id: this.html.id
      // });
      this.SetAttributeViaSTRING(`{ "id": "${this.html.id}" }`);

      // aggiungo le classi
      this.AddClass(this.html.class);
      // aggiungo gli attribute
      this.SetAttributeViaSTRING(this.html.attribute);
      // controllo che abbia il testo ed eventualmente lo inserisco
      if (this.html.hasText) this.SetText(this.html.text);
      // imposto lo stile dello sfondo in base al colore impostato nell'anteprima
      if (this.inlineStyle.usePreviewColor) {
        this.SetStyle({
          'background-color': this.RgbToRGB(this.editorPreview.previewColor)
        });
      }
      // imposto il colore e lo spessore del bordo in base alle impostazioni dell'anteprima
      if (this.inlineStyle.usePreviewBorderSettings) {
        this.SetStyle({
          'border-width': this.editorPreview.previewBorderWidth + 'px',
          'border-color': this.RgbToRGB(this.editorPreview.previewBorderColor)
        });
      }
      // imposto il font in base alle impostazioni dell'anteprima
      if (this.inlineStyle.usePreviewFontFamily) {
        this.SetStyle({
          'font-family': this.text.font
        });
      };

      if (this.inlineStyle.usePreviewFontSettings) {
        this.SetStyle({
          'font-size': this.text.size + 'px',
          'color': this.RgbToRGB(this.text.color),
          'font-weight': this.text.isBold ? 'bold' : 'normal',
          'font-style': this.text.isItalic ? 'italic' : 'normal',
          'text-align': this.text.align
        });
      };

      // aggiungo un po' di stili utili (se ci sono dei valori inseriti)
      this.SetStyle({
        'border-style': this.inlineStyle.borderStyle,
        'border-radius': this.inlineStyle.borderRadius,
        'padding': this.inlineStyle.padding,
        'box-sizing': this.inlineStyle.boxSizing,
        'word-break': this.inlineStyle.wordBreak,
        'white-space': this.inlineStyle.whiteSpace,
        'overflow-x': this.inlineStyle.overflowx,
        'overflow-y': this.inlineStyle.overflowy,
      });

      // aggiungo gli stili (inline)
      this.SetStyleViaSTRING(this.inlineStyle.style);
      // cambio la posizione attorno alla quale modificare l'immagine
      this.SetTransformOrigin(this.transform.originVertical, this.transform.originHorizontal);
      // imposta se l'elemento è visibile o meno
      this.SetVisible(this.html.isVisible);
      // imposta la trasparenza dell'oggetto
      this.SetOpacity(this._inst.GetWorldInfo().GetOpacity());

      // aggiungo gli eventi
      this.AddEvents();

      // analizzo e aggiungo eventuali eventi inseriti inline con l'attributo el:on
      this.ProcessaElencoEventsOnProperty(this.event.inline.event);
    },

    async GetFileURL(nameFile) {
      const url = await this.GetRuntime().GetAssetManager().LoadProjectFileUrl(nameFile);
      this.memory.lastFileURL = url;
      this.Trigger(C3.Plugins.StraniAnelli_HTMLElement.Cnds.JSOnGetFileURL);
    },
    async GetFileBLOB(nameFile) {
      const url = await this.GetRuntime().GetAssetManager().LoadProjectFileUrl(nameFile);
      const blob = await this.GetRuntime().GetAssetManager().FetchBlob(url);
      this.memory.lastBLOB = blob;
      this.Trigger(C3.Plugins.StraniAnelli_HTMLElement.Cnds.JSOnGetBLOB);
    },
    async GetUrlBLOB(url) {
      const blob = await this.GetRuntime().GetAssetManager().FetchBlob(url);
      this.memory.lastBLOB = blob;
      this.Trigger(C3.Plugins.StraniAnelli_HTMLElement.Cnds.JSOnGetUrlBLOB);
    },
    ConvertImgToDataURLviaCanvas(url, callback, outputFormat) {
      // https://jsfiddle.net/handtrix/YvQ5y/
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
      };
      img.src = url;
    },
    async GetBase64ImgFromURL(imageUrl) {
      await this.ConvertImgToDataURLviaCanvas(imageUrl, (base64Img) => {
        this.memory.lastBase64 = base64Img;
        this.Trigger(C3.Plugins.StraniAnelli_HTMLElement.Cnds.JSOnGetBase64ImgFromURL);
      });
    },
    async GetBase64ImgFromFILE(nameFile) {
      const imageUrl = await this.GetRuntime().GetAssetManager().LoadProjectFileUrl(nameFile);
      await this.ConvertImgToDataURLviaCanvas(imageUrl, (base64Img) => {
        this.memory.lastBase64 = base64Img;
        this.Trigger(C3.Plugins.StraniAnelli_HTMLElement.Cnds.JSOnGetBase64ImgFromFILE);
      });
    },


    ParseEventOnAttributeProperty(string) {
      //const regex = /(?<= el-on=")(.*)(?=" )/g
      //const found = string.match(regex);
      const regex = /(?<= el\-on\:)(.*?)(?=\s*\>)/g; // click.stop="functionTest('ciao', ' mondo ', '222')" forse altre cose >
      // const regexPartEvetn = /(?<= el\-on\:)(.*?)(?=\s*\=)/g // click.stop
      let stringModificata = string;
      const found = string.match(regex);

      if (found == null) return string;

      for (let i = 0, length = found.length; i < length; i++) {
        const comandoTrovato = found[i];
        let newString = ""
        // analizzo la parte dove c'è il nome dell'evento da assegnare
        // se esiste un modificatore (separato dal puntino) separo il nome dell'evento da quello del modificatore
        const eventPart = comandoTrovato.substr(0, comandoTrovato.indexOf('=')).trim();
        let nameEvent = eventPart;
        let modifiers = "";
        if (eventPart.includes('.')) {
          nameEvent = eventPart.substr(0, eventPart.indexOf('.')).trim();
          modifiers = eventPart.substr(eventPart.indexOf('.')).trim();
        };

        // analizzo la parte dove c'è la funzione e i suoi argomenti
        // per prima cosa devo estrarre solo la parte compresa tra " e "
        //const stringFunction = comandoTrovato.substr(comandoTrovato.indexOf('"') + 1).trim();
        const stringFunctionInizio = comandoTrovato.substr(comandoTrovato.indexOf('"'));
        // const regexBetweenQuotes = /"(.*?)"/;
        const regexBetweenQuotes = /"(.*?);"/; // finisce con :  ;"
        // const regexBetweenQuotes = /("([^"]|"")*")/;
        const tempStringFunctionRegex = stringFunctionInizio.match(regexBetweenQuotes);
        const stringFunction = tempStringFunctionRegex == null ? "" : tempStringFunctionRegex[1];
        // const stringFunction = tempStringFunctionRegex == null ? "" : tempStringFunctionRegex[0];
        const funct = this._GetFunctionForEvent(stringFunction.trim());
        const nameFunction = funct.nameFunction;
        const param = funct.paramString;
        // inserisco in newString il codice da usare nel dom
        if (!nameEvent.replace(/\s+/g, '').length) { // se non c'è un nome evento
          newString = "";
        } else if (!nameFunction.replace(/\s+/g, '').length) { // se non c'è un nome funzione
          newString = "";
        } else if (!param.replace(/\s+/g, '').length) { // se non ci sono parametri
          newString = ` ${nameEvent}="funzioniRegistrateInC3file('${modifiers}','${nameFunction}')"`;
        } else { // se ci sono parametri
          newString = ` ${nameEvent}="funzioniRegistrateInC3file('${modifiers}','${nameFunction}',${param})"`;
        }
        // infine sostituisco la string originale con quella nuova
        //stringModificata = stringModificata.replace(" el-on:"+comandoTrovato, newString);
        stringModificata = stringModificata.replace(` el-on:${eventPart}="${stringFunction};"`, newString);
      }

      return stringModificata;
    },

    ParseEventOnProperty(string) {
      // il nome dell'eventi è contentuno prima della virgola, sempre
      const nameEvent = string.substr(0, string.indexOf(',')).trim();
      // la funzione e i parametri vanno dopo la prima virgola
      const stringFunction = string.substr(string.indexOf(',') + 1).trim();
      const funct = this._GetFunctionForEvent(stringFunction);

      return {
        nameEvent: nameEvent,
        nameFunction: funct.nameFunction,
        param: funct.paramString
      }
    },

    ProcessaElencoEventsOnProperty(string) {
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers
      // event, f('param1', 'param2', 'param3', ...)
      let righe = [];
      righe = string.split('\n');

      for (let i = 0; i < righe.length; i++) {
        // salta la riga se contiene solo spazi oppure se è vuota
        let s = righe[i];
        if (!s.replace(/\s+/g, '').length) continue;
        // salta se non c'è nessuna virgola: vuol dire che c'è solo l'evento ma nessuna funzione
        if (!s.includes(',')) continue;
        // tolgo gli spazi dell'inizio e dalla fine
        s = s.trim();

        const parsed = this.ParseEventOnProperty(s)

        const eventPart = parsed.nameEvent.trim();
        let nameEvent = eventPart;
        let modifiers = "";
        if (eventPart.includes('.')) {
          nameEvent = eventPart.substr(0, string.indexOf('.')).trim();
          modifiers = eventPart.substr(string.indexOf('.')).trim();
        };

        const nameFunction = parsed.nameFunction;

        const param = parsed.param;
        // controllo nuovamente che non sia zero il nome della funzione o dell'evento
        if (!nameEvent.replace(/\s+/g, '').length) continue;
        if (!nameFunction.replace(/\s+/g, '').length) continue;

        if (!param.replace(/\s+/g, '').length) { // se non ci sono parametri
          // this.SetAttributeViaSTRING(`{ "${nameEvent}": "self['c3_callFunction']('${nameFunction}')" }`);
          this.SetAttributeViaSTRING(`{ "${nameEvent}": "funzioniRegistrateInC3file('${modifiers}','${nameFunction}')" }`);
        } else { // se ci sono parametri
          //this.SetAttributeViaSTRING(`{ "${nameEvent}": "self['c3_callFunction']('${nameFunction}',${param})" }`);
          this.SetAttributeViaSTRING(`{ "${nameEvent}": "funzioniRegistrateInC3file('${modifiers}','${nameFunction}',${param})" }`);
        }
      }
    }
  }

  for (var k in InstanceFunctionsObject) {
    C3.Plugins.StraniAnelli_HTMLElement.Instance.prototype[k] = InstanceFunctionsObject[k];
  }

}
