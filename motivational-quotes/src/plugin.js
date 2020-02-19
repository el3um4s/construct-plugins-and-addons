"use strict";

{
	////////////////////////////////////////////
	// The plugin ID is how Construct identifies different kinds of plugins.
	// *** NEVER CHANGE THE PLUGIN ID! ***
	// If you change the plugin ID after releasing the plugin, Construct will think it is an entirely different
	// plugin and assume it is incompatible with the old one, and YOU WILL BREAK ALL EXISTING PROJECTS USING THE PLUGIN.
	// Only the plugin name is displayed in the editor, so to rename your plugin change the name but NOT the ID.
	// If you want to completely replace a plugin, make it deprecated (it will be hidden but old projects keep working),
	// and create an entirely new plugin with a different plugin ID.
	const PLUGIN_ID = "StraniAnelli_MotivationalQuotes";
	////////////////////////////////////////////

	const PLUGIN_VERSION = "0.1.0.0";
	const PLUGIN_CATEGORY = "general";

	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_MotivationalQuotes = class StraniAnelli_MotivationalQuotesPlugin extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);

			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

			this._info.SetName(lang(".name"));
			this._info.SetDescription(lang(".description"));
			this._info.SetVersion(PLUGIN_VERSION);
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Strani Anelli");
			this._info.SetHelpUrl(lang(".help-url"));
			this._info.SetIsSingleGlobal(true);

			// Support both the C2 and C3 runtimes
			this._info.SetSupportedRuntimes(["c3"]);

			this._info.AddFileDependency({
				filename: "c3runtime/dom.js",
				type: "inline-script"
			});

			this._info.AddFileDependency({
				filename: "c3runtime/words.js",
				type: "inline-script"
			});

			SDK.Lang.PushContext(".properties");

			this._info.SetProperties([]);


			SDK.Lang.PopContext();		// .properties

			SDK.Lang.PopContext();

			// ESPERIMENTO

			_Create();

			function _Create(){
				_InserisciElemento();
				_AggiungiCSS();
				_InserisciNuovaCitazione();
				_AggiungiDraggable();
				_AggiungiQuadrattinoRidimensiona();
				_AggiungiMutationObserver();
				_AggiungiEventoClickSuNuovaCitazione();
				_AggiungiEventoClickSuChiudiCitazione();
			};

			function _InserisciElemento() {
						// se esiste già, non inserisco nessuna citazione
						if (Dom.id('motivationalquote')) return;

						let el = Dom.create(`
															<ui-pane fluttante captioned row1 role="complementary" id="motivationalquote" class="motivationalquote" motivationalmode="on">
																<ui-caption>
																	<span class="pane-caption-text">Motivational Quote</span>
																	<ui-close-button title="New Quote" id="motivationalquotepulsantenuovacitazione">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
																		<path d="M11,4C13.05,4 15.09,4.77 16.65,6.33C19.78,9.46 19.77,14.5 16.64,17.64C14.81,19.5 12.3,20.24 9.91,19.92L10.44,17.96C12.15,18.12 13.93,17.54 15.24,16.23C17.58,13.89 17.58,10.09 15.24,7.75C14.06,6.57 12.53,6 11,6V10.58L6.04,5.63L11,0.68V4M5.34,17.65C2.7,15 2.3,11 4.11,7.94L5.59,9.41C4.5,11.64 4.91,14.39 6.75,16.23C7.27,16.75 7.87,17.16 8.5,17.45L8,19.4C7,19 6.12,18.43 5.34,17.65Z"></path>
																		</svg>
																	</ui-close-button>
																	<ui-close-button title="Close" id="motivationalquotepulsantechiudi">
																		<svg xmlns="http://www.w3.org/2000/svg" fill="  #b8b8b8" height="48" viewBox="0 0 24 24" width="48">
																		<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
																		<path d="M0 0h24v24H0z" fill="none"></path>
																		</svg>
																	</ui-close-button>
																</ui-caption>
																<ui-body row2>
																	<blockquote class="citazione" id="motivationalquotecitazionetesto">
																		Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
																	</blockquote>
																	<div class="autore" id="motivationalquotecitazioneautore">
																		<cite>Muhammad Ali</cite>
																	</div>
																</ui-body>
																	<div id="motivationalquotehandle"></div>
															</ui-pane>`);
						Dom.append(Dom.findByTagName('body')[0], el);
					};

			function _InserisciNuovaCitazione() {
						const elencoCitazioni = _stranianelli_motivational_quotes_words.motivationalQuotes;
						const citazioneRandom = elencoCitazioni[Math.floor(Math.random()*elencoCitazioni.length)];
						Dom.text(Dom.id('motivationalquotecitazionetesto'), citazioneRandom.quote);
						Dom.text(Dom.id('motivationalquotecitazioneautore'), citazioneRandom.author);

						//_CorreggiCSSWidthHeight(360, 150);
			}

			function _AggiungiCSS(){
						Dom.css(Dom.findByClass("motivationalquote"), {
							'position': 'absolute',
							'top': '50px',
							'left': '50px',
							'width': '360px',  // 360
						  'height': '150px', // 150
							'z-index': '1',
							'border-radius': 'var(--window-border-size)',
							'box-shadow': '0 7px 7px 0 rgba(0,0,0,.26)'
						});

						Dom.css(Dom.findByClass("autore"), {
							'text-align': 'right',
							'padding': '1em'
						})

						Dom.css(Dom.findByClass("motivationalquotepane"), {
							'width': '100%',
							'height': '100%'
						});

						Dom.css(Dom.id('motivationalquotehandle'), {
							'background-color': '#727272',
				 			'width': '10px',
				 			'height': '10px',
				 			'cursor': 'crosshair',
				 			'position':'absolute',
				 			'right': '0',
				 			'bottom': '0'
						});
					};

			function _CorreggiCSSWidthHeight (w = 360, h = 150) {
				Dom.css(Dom.findByClass("motivationalquote"), {
					'width': w + 'px',
					'height': h + 'px'
				});
			};

			function _AggiungiDraggable() {
					Dom.draggable(Dom.id('motivationalquote'));
			};

			function _AggiungiEventoClickSuNuovaCitazione() {
				Dom.onClick(Dom.id('motivationalquotepulsantenuovacitazione'), (e) => {
					e.preventDefault();
					_InserisciNuovaCitazione();
				})
			};

			function _AggiungiEventoClickSuChiudiCitazione() {
				Dom.onClick(Dom.id('motivationalquotepulsantechiudi'), (e) => {
					e.preventDefault();
					Dom.attribute(Dom.id('motivationalquote'), {motivationalmode: "off"});
					_NascondiElemento(true);
				})
			};


			function _AggiungiQuadrattinoRidimensiona() {
						let box = Dom.id('motivationalquote');
						let resizeHandle = Dom.id('motivationalquotehandle');

						Dom.onClick(resizeHandle, (e) => {
							let tempHandle = Dom.create('<div id="motivationalquotetemphandle"></div>');
							Dom.append(Dom.findByTagName('body')[0], tempHandle);
							Dom.css(Dom.id('motivationalquotetemphandle'), {
								'background-color': 'red',
					 			'width': '10px',
					 			'height': '10px',
					 			'cursor': 'se-resize',
								'z-index': '1',
								'position': 'absolute',
								'left': e.x + 'px',
								'top': e.y + 'px'
							});
							window.addEventListener('mousemove', _muoviTempHandle, false);
							Dom.onClick(Dom.id('motivationalquotetemphandle'), () => {
								window.removeEventListener('mousemove', _muoviTempHandle, false);
								Dom.remove(Dom.id('motivationalquotetemphandle'));
							})
						});

						function _muoviTempHandle(e){
							if (Dom.id('motivationalquotetemphandle')){
								Dom.css(Dom.id('motivationalquotetemphandle'), {
									'left': e.x + 'px',
									'top': e.y + 'px'
								});
								Dom.css(Dom.id("motivationalquote"), {
									'top': Dom.offset(Dom.id("motivationalquote")).top + "px",
									'left': Dom.offset(Dom.id("motivationalquote")).left + "px",
									'width': e.x - Dom.offset(Dom.id("motivationalquote")).left + 'px',
									'height':  e.y - Dom.offset(Dom.id("motivationalquote")).top + 'px'
								});
							}
						}
					};

			function _NascondiElemento(nascondi = true) {
				if (!Dom.id('motivationalquote')) return;

				if (Dom.attribute(Dom.id('motivationalquote'), 'motivationalmode') == 'off') {
					Dom.css(Dom.id('motivationalquote'), {'display': 'none'});
					return;
				};

				if (nascondi){
					Dom.css(Dom.id('motivationalquote'), {'display': 'none'});
				} else {
					document.getElementById("motivationalquote").style.removeProperty('display');
				}
			};

			function _AggiungiMutationObserver() {
				_MutationObserverIntercettaNuoviNodi();
				_MutationObserver_midPaneEmpty('midPaneEmptyNoProject');
			};

			function _MutationObserverIntercettaNuoviNodi() {
				// see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
				let targetNode = document.getElementById('midPane');
				let config = { attributes: true, childList: true, subtree: true };
				let callback = function(mutationsList) {
	    		for(var mutation of mutationsList) {
	        	if (mutation.type == 'childList') {
							if (mutation.removedNodes.length > 0 && mutation.removedNodes[0].id == 'startPage')
									 _NascondiElemento(true);

							if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].id == 'startPage')
									_NascondiElemento(false);

	        	}
	    		}
				};

				let observer = new MutationObserver(callback);
				observer.observe(targetNode, config);
			};

			function _MutationObserver_midPaneEmpty(idEl) {
				let targetNode = document.getElementById(idEl);
				let config = { attributes: true };
				let callback = function(mutationsList) {
					if (mutationsList[0].attributeName == "style") {
						console.log(Dom.css(Dom.id(idEl), 'display'));
						if (Dom.css(Dom.id(idEl), 'display') == 'none') {
							// se sono nella start page non nascondo la motivationalquote
							if (!Dom.id('motivationalquote')) _NascondiElemento(true);;

						} else {
							 _NascondiElemento(false);
						}
					}
				}

				let observer = new MutationObserver(callback);
				observer.observe(targetNode, config);
			}

		}
	};

	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
