"use strict";

{
  C3.Plugins.StraniAnelli_InjectCSS.Acts = {

    // ----- CSS ----- //

        AddLocalCSSFile(nomeFile) {
          this.ProcessaFile(nomeFile, "CSS", "isLocal", "ADD");
        },

        AddExternalCSSFile(nomeFile) {
          this.ProcessaFile(nomeFile, "CSS", "isNotLocal", "ADD");
        },

        RemoveLocalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isLocal", "REMOVE");
        },

    		RemoveExternalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isNotLocal", "REMOVE");
        },

        RemoveAllImportedCSSFile() {
          this.RemoveAllImportedCSSFromPage();
        },

        RemoveAllCSSFile() {
          this.RemoveAllCSSFromPage();
        },

        DisableLocalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isLocal", "DISABLE");
        },

        DisableExternalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isNotLocal", "DISABLE");
        },

        EnableLocalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isLocal", "ENABLE");
        },

        EnableExternalCSSFile(nameFile) {
          this.ProcessaFile(nameFile, "CSS", "isNotLocal", "ENABLE");
        },

    // ----- JS ----- //

        AddLocalJSFile(nameFile) {
          this.ProcessaFile(nameFile, "JS", "isLocal", "ADD");
        },

        AddExternalJSFile(nameFile) {
          this.ProcessaFile(nameFile, "JS", "isNotLocal", "ADD");
        },

        RemoveLocalJSFile(nameFile) {
            this.ProcessaFile(nameFile, "JS", "isLocal", "REMOVE");
        },

    		RemoveExternalJSFile(nameFile) {
          this.ProcessaFile(nameFile, "JS", "isNotLocal", "REMOVE");
        },

        RemoveAllImportedJSFile() {
          this.RemoveAllImportedJSFromPage();
        },

    // ----- CANVAS ----- //

        DestroyCanvas() {
          this.DestroyCanvasFromPage();
        },

    // ----- HTML ----- //

        AddHTMLElement(newElement) {
          const fragment = this.CreateHTMLElement(newElement);
          document.body.appendChild(fragment);
        },

        RemoveHTMLElementByID(idElement) {
          this.DestroyHTMLElementByID(idElement);
        },

        ChangeViewport(width, initialScale, maximumScale, mimimumScale, userScalable, other) {
          let viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute('content', `width=${width}, initial-scale=${initialScale}, maximum-scale=${maximumScale}, minimum-scale=${mimimumScale}, user-scalable=${userScalable}` + (other == "" ? "" :`, ${other}`) );
        },

        AddAttributeViaID(id, attr, value) {
          const el = document.getElementById(id);
          if (!!el) el.setAttribute(attr, value);
        },

        RemoveAttributeViaID(id, attr) {
          const el = document.getElementById(id);
          if (!!el) el.removeAttribute(attr);
        },

        ChangeAttributeViaID(id, attr, value) {
          const el = document.getElementById(id);
          if (!!el) el.setAttribute(attr, value);
        },

        AddAttributeViaQuerySelector(selectors, attr, value) {
          const el = document.querySelectorAll(selectors);
          for (let i = 0, length = el.length; i < length; i++) {
            el[i].setAttribute(attr, value);
          }
        },

        RemoveAttributeViaQuerySelector(selectors, attr) {
          const el = document.querySelectorAll(selectors);
          for (let i = 0, length = el.length; i < length; i++) {
            el[i].removeAttribute(attr);
          }
        },

        ChangeAttributeViaQuerySelector(selectors, attr, value) {
          const el = document.querySelectorAll(selectors);
          for (let i = 0, length = el.length; i < length; i++) {
            el[i].setAttribute(attr, value);
          }
        }
  };
}
