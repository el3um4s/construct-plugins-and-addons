"use strict";

{
  C3.Plugins.StraniAnelli_InjectCSS.Instance = class StraniAnelli_InjectCSSInstance extends C3.SDKInstanceBase {
    constructor(inst, properties) {
      super(inst);

      this.elencoProprieta = {
        CSSFiles: 0,      // elenco dei file css inseriti nel progetto
        CSSExternal: 1,   // elenco dei file da importare da risorse esterne
        JSFiles: 2,
        JSExternal: 3,
        destroyCanvasOnStart: 4,
        disableBodyStyleInlineOnStart: 5,
        disableHtmlPageStyleInlineOnStart: 6,
        removePreloadedCSSOnStart: 7
      };

      // imposto i valori predefiniti
      this.elencoCSSpresenti = [];

      this.CSSFiles = '';
      this.CSSExternal = '';
      this.JSFiles = '';
      this.JSExternal = '';
      this.destroyCanvasOnStart = false;
      this.disableBodyStyleInlineOnStart = false;
      this.disableHtmlPageStyleInlineOnStart = false;
      this.removePreloadedCSSOnStart = false;

      // assegno i valori
      if (properties) {
        this.CSSFiles = properties[this.elencoProprieta.CSSFiles];
        this.CSSExternal = properties[this.elencoProprieta.CSSExternal];
        this.JSFiles = properties[this.elencoProprieta.JSFiles];
        this.JSExternal = properties[this.elencoProprieta.JSExternal];
        this.destroyCanvasOnStart = properties[this.elencoProprieta.destroyCanvasOnStart];
        this.disableBodyStyleInlineOnStart = properties[this.elencoProprieta.disableBodyStyleInlineOnStart];
        this.disableHtmlPageStyleInlineOnStart = properties[this.elencoProprieta.disableHtmlPageStyleInlineOnStart];
        this.removePreloadedCSSOnStart = properties[this.elencoProprieta.removePreloadedCSSOnStart];
      }

      if (this.destroyCanvasOnStart) { this.DestroyCanvasFromPage(); }

      if (this.disableBodyStyleInlineOnStart) {
        const body = document.body;
        this.EnableHTMLElementInlineStyle(body, false);
      }

      if (this.disableHtmlPageStyleInlineOnStart) {
        const html = document.getElementsByTagName("html")[0];
        this.EnableHTMLElementInlineStyle(html, false);
      }

      if (this.removePreloadedCSSOnStart) { this.RemoveAllCSSFromPage(); }

      const isLocal = true;
      const notLocal = false;

      if (this.CSSExternal != '') {
        this.ProcessaElencoFileProprieta(this.CSSExternal, "CSS", notLocal);
      }

      if (this.CSSFiles != '') {
        this.ProcessaElencoFileProprieta(this.CSSFiles, "CSS", isLocal);
      }

      if (this.JSExternal != '') {
        this.ProcessaElencoFileProprieta(this.JSExternal, "JS", notLocal);
      }

      if (this.JSFiles != '') {
        this.ProcessaElencoFileProprieta(this.JSFiles, "JS", isLocal);
      }

    }
    //
    // async _IsCSSAlreadyPresent() {
    //   await this.TriggerAsync(C3.Plugins.StraniAnelli_InjectCSS.Cnds.IsCSSAlreadyPresent)
    // }
    //
    // async _IsCSSEnabled() {
    //   await this.TriggerAsync(C3.Plugins.StraniAnelli_InjectCSS.Cnds.IsCSSEnabled)
    // }

    Release() { super.Release(); }

    SaveToJson() { return {}; }

    LoadFromJson(o) {}
  };


  // per inserire funzioni generali utili
  var InstanceFunctionsObject = {
    // https://github.com/Scirra/Construct-3-bugs/issues/1954
    // per recuperare il nome del file in locale devo usare
    // https://www.construct.net/it/make-games/manuals/addon-sdk/runtime-reference/manager-classes/assetmanager
    // async LoadProjectFileUrl(filename)

        async InjectElementIntoHead(nameFile, type = "CSS", local = false){
          if (local) {
            const url = await this._runtime.GetAssetManager().LoadProjectFileUrl(nameFile);
            if (type == "CSS") {
              this.RegistraCSSnelPlugin(nameFile, url, true, "ADD", local);
              this.InjectCSSIntoHead(url);
            } else if (type == "JS") {
              this.InjectJSIntoHead(url);
            }
          } else {
            if (type == "CSS") {
              this.RegistraCSSnelPlugin(nameFile, nameFile, true, "ADD", local);
              this.InjectCSSIntoHead(nameFile);
            } else if (type == "JS") {
              const urlForGithub = nameFile.replace("raw.githubusercontent.com", "cdn.rawgit.com");
              this.InjectJSIntoHead(urlForGithub);
            }
          }
        },

        async ProcessaFile(nameFile, type = "CSS", local = "isLocal", action = "ADD"){
            if (local == "isLocal") {
              const url = await this._runtime.GetAssetManager().LoadProjectFileUrl(nameFile);
              if (type == "CSS") {
                const tempBool = action != "DISABLE" ? true : false;
                this.RegistraCSSnelPlugin(nameFile, url, tempBool, action, true);
              }
              this.ProcessaFileGenerico(url, type, action);
            } else if (local == "isNotLocal") {
              const urlForGithub = nameFile.replace("raw.githubusercontent.com", "cdn.rawgit.com");
              if (type == "CSS") {
                const tempBool = action != "DISABLE" ? true : false;
                this.RegistraCSSnelPlugin(urlForGithub, urlForGithub, tempBool, action, false);
              }
              this.ProcessaFileGenerico(urlForGithub, type, action);
            }
        },

        ProcessaElencoFileProprieta(elencoFile, type = "CSS", local = false) {
            let righe = [];
            righe = elencoFile.split('\n');

            for (let i = 0; i < righe.length; i++) {
              // salta la riga se contiene solo spazi oppure se è vuota
              let tempNameFile = righe[i];
              if (!tempNameFile.replace(/\s/g, '').length) continue;
              this.InjectElementIntoHead(tempNameFile, type, local);
              }
        },

        ProcessaFileGenerico(nameFile, type = "CSS", action = "ADD") {
          if (action == "ADD") {
            if (type == "CSS") { this.InjectCSSIntoHead(nameFile); }
            else if (type == "JS") { this.InjectJSIntoHead(nameFile); }
          }
          else if (action == "REMOVE") {
            if (type == "CSS") {
                const links = document.head.getElementsByTagName("link");
                this.RemoveCSSFromPage(links, nameFile);
               }
            else if (type == "JS") {
              const scripts = document.head.getElementsByTagName("script");
              this.RemoveJSFromPage(scripts, nameFile);
             }
          }
          else if (action == "DISABLE") {
            if (type == "CSS") {
              const links = document.head.getElementsByTagName("link");
              this.EnableCSS(links, nameFile, "DISABLE");
            }
          }
          else if (action == "ENABLE") {
            if (type == "CSS") {
              const links = document.head.getElementsByTagName("link");
              this.EnableCSS(links, nameFile, "ENABLE");
            }
          }
        },

    // ----- CSS ----- //
        // inserisci il file CSS nell'head
        InjectCSSIntoHead(nameCSS) {
          let element = document.createElement("link");
          element.setAttribute("rel", "stylesheet");
          element.setAttribute("type", "text/css");
          element.setAttribute("href", nameCSS);
          element.setAttribute("createdbystranianelliinjectcss","");
          document.head.appendChild(element);
        },
        RemoveCSSFromPage(arrayCSS, nameCSS) {
          for (let i = 0; i < arrayCSS.length; i++) {
            if (arrayCSS[i].href.substr(-nameCSS.length) == nameCSS) {
              arrayCSS[i].parentNode.removeChild(arrayCSS[i]);
              i--;
            }
          }
        },
        RemoveAllImportedCSSFromPage() {
          const links = document.head.getElementsByTagName("link");
          for (let i = 0; i < links.length; i++) {
            if (links[i].hasAttribute("createdbystranianelliinjectcss")) {
              links[i].parentNode.removeChild(links[i]);
              i--;
            }
          }
          this.elencoCSSpresenti = [];
        },

        RemoveAllCSSFromPage() {
          const links = document.head.getElementsByTagName("link");
          for (let i = 0; i < links.length; i++) {
            if (links[i].rel="stylesheet") {
              links[i].parentNode.removeChild(links[i]);
              i--;
            }
          }
          this.elencoCSSpresenti = [];
        },

        EnableCSS(arrayCSS, nameCSS, enable = "ENABLE") {
          const isEnabled = (enable == "ENABLE" ? true : false);
          for (let i = 0; i < arrayCSS.length; i++) {
            if (arrayCSS[i].href.substr(-nameCSS.length) == nameCSS) {
              arrayCSS[i].disabled = !isEnabled;
            }
          }
        },

    // ----- JS ----- //
        // inserisci il file JS nell'head
        InjectJSIntoHead(nameJS) {
          let element = document.createElement("script");
          // element.setAttribute("type", "text/javascript");
          element.setAttribute("src", nameJS);
          element.setAttribute("createdbystranianelliinjectcss","");
          document.head.appendChild(element);
        },
        RemoveJSFromPage(arrayJS, nameJS) {
          for (let i = 0; i < arrayJS.length; i++) {
            if (arrayJS[i].src.substr(-nameJS.length) == nameJS) {
              arrayJS[i].parentNode.removeChild(arrayJS[i]);
              i--;
            }
          }
        },
        RemoveAllImportedJSFromPage() {
          const scripts = document.head.getElementsByTagName("script");
          for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].hasAttribute("createdbystranianelliinjectcss")) {
              scripts[i].parentNode.removeChild(scripts[i]);
              i--;
            }
          }
        },

    // ----- CANVAS ----- //
        DestroyCanvasFromPage() {
          // aggiungi controllo se esiste
          const canvas = document.body.getElementsByTagName("canvas");
          canvas[0].parentNode.removeChild(canvas[0]);
        },

    // ----- HTML ----- //
        CreateHTMLElement(newElement) {
          let fragment =  document.createDocumentFragment();
          let temp = document.createElement("div");
          temp.innerHTML = newElement;
          while (temp.firstChild) {
            fragment.appendChild(temp.firstChild);
          }
          return fragment;
        },

        DestroyHTMLElementByID(idElement) {
          const element = document.getElementById(idElement);
          element.parentNode.removeChild(element);
        },

        EnableHTMLElementInlineStyle(element, enabled) {
          // se è impostato uno stile online e voglio disabilitarlo
          if (element.hasAttribute("style") && !enabled) {
            // recupero il contentuo di style
            const style = element.getAttribute("style");
            element.removeAttribute("style");
            element.setAttribute("stylestranianelli", style);
          } else if (element.hasAttribute("stylestranianelli") && enabled) {
            const style = element.getAttribute("stylestranianelli");
            element.removeAttribute("stylestranianelli");
            element.setAttribute("style", style);
          }

        },

    // ----- REGISTRA E CERCA I FILE NEL PLUGIN ----- //
      RegistraCSSnelPlugin(nameCSS, urlCSS = "", enabled = true, action = "ADD", local = true){
        // nell'array this.elencoCSSpresenti inserisco degli oggetti nel formato
        // { name: "", url: "", enabled: boolean, islocal: boolean }
        // this.elencoCSSpresenti
        // controllo se il nome del CSS è già presente nel plugin
        let cssPresenteNellElenco = false;
        if (this.elencoCSSpresenti.length > 0) {
          cssPresenteNellElenco = this.elencoCSSpresenti.filter(e => (e.name == nameCSS)).length  > 0 ? true : false;
        }
        // se non è presente nell'elenco
        if (!cssPresenteNellElenco && action == "ADD"){
          this.elencoCSSpresenti.push({
            name: nameCSS,
            url: urlCSS,
            enabled: enabled,
            islocal: local
          });
        } else {
          let newElenco = this.elencoCSSpresenti.map(function(item, index){
            if (item.name == nameCSS) {
              if (action != "REMOVE"){
                item.url = urlCSS;
                item.enabled = enabled;
                item.islocal = local;
                return item;
              }
            } else {
              return item;
            }
          });

          this.elencoCSSpresenti = newElenco.filter(function(e){return e}); ;
        }
      }
  }

  for( var k in InstanceFunctionsObject )
  {
    C3.Plugins.StraniAnelli_InjectCSS.Instance.prototype[k] = InstanceFunctionsObject[k];
  }

}
