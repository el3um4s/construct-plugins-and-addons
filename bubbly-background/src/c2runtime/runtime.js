// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.StraniAnelli_BubblyBackground = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.StraniAnelli_BubblyBackground.prototype;

	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;

		this.elencoProprieta = {
			stylebackground: 0,			// default: true
			colorStart: 1, 					// default is blue-ish
			colorStop: 2, 					// default is blue-ish
			presetBubbly: 3,				// se seleziona preset usa i parametri già preinseriti
			animate: 4, 						// default: true
			shadowColor: 5,					// default is #fff
			compose: 6,							// default is "lighter",   "source-over"
			blur: 7, 								// default is 4
			bubbles: 8,							// Math.floor((canvas.width + canvas.height) * 0.02);
			bubbleFunc: 9,					// default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
			angleFunc: 10,					// default is () => Math.random() * Math.PI * 2,
			velocityFunc: 11,				// default is () => 0.1 + Math.random() * 0.5
			radiusFunc: 12					// default is 4 + Math.random() * width / 25
		};

		this.comboItems = {
			stylebackground: [ 'solid', 'gradient', 'bubbly' ],
			presetBubbly: [ 'custom', 'blueWithWhiteBubbles', 'blackRedWithRedBubbles', 'purpleWithMulticoloredBubbles', 'yellowPinkWithRedOrangeYellowBubbles']
		};

		this.stylebackground = 'bubbly';
		this.presetBubbly = 2;
		this.animate = true;
		this.colorStart = '#22AAEE';
		this.colorStop = '#1177BB';
		this.shadowColor = '#ffffff';
		this.compose = 'lighter';
		this.blur = 4;
		this.bubbles = "Math.floor((canvas.width + canvas.height) * 0.02)";
		this.bubbleFunc = "() => `hsla(0, 0%, 100%, ${r() * 0.1})`";
		this.angleFunc = "() => Math.random() * Math.PI * 2";
		this.velocityFunc = "() => 0.1 + Math.random() * 0.5";
		this.radiusFunc = "() => 4 + Math.random() * canvas.width / 25";
	};

	var instanceProto = pluginProto.Instance.prototype;

		// funzioni di supporto
			// elimina un elemento dal dom tramite ID
			instanceProto.destroyElementById = function (elId = 'bubbly') {
				if(document.getElementById(elId)){
		    	const elementoDaEliminare = document.getElementById(elId);
					elementoDaEliminare.parentNode.removeChild(elementoDaEliminare);
				} else {
		    	return;
				}
			}

			// funzione per creare una canvas su cui lavorare
			instanceProto.createCanvasPerDisegnareSfondo = function(elId = 'bubbly'){
				// prima elimino un'eventuale altra canvas già presente
				this.destroyElementById(elId);
				const canvas = document.createElement('canvas');
					canvas.id = elId;
					document.body.insertBefore(canvas, document.body.firstChild);
				//	document.body.appendChild(canvas);
					canvas.style.left = '0px';
					canvas.style.top = '0px';
					canvas.style.width = '100vw';
					canvas.style.height = '100vh';
					canvas.style.zIndex = '-1';
					canvas.style.position = "fixed";
				// imposto lo sfondo della pagina a trasparente
				// document.body.style.backgroundColor = '#fff0';
				document.body.style.backgroundColor = 'transparent';
				// document.body.style.zIndex = '-999';
			}

			// per convertire il colore passato in un #hex
			instanceProto.rgbToHex = function (arr) {
				const r = Math.round(arr[0]*255);
				const g = Math.round(arr[1]*255);
				const b = Math.round(arr[2]*255);
				const rgb = b | (g << 8) | (r << 16);
				return (0x1000000 | rgb).toString(16).substring(1);
			}

			// per valutare il valore delle stringhe
			instanceProto.evil = function(fn) {
		  	return new Function(
					'const canvas = document.getElementById("bubbly"); const r = () => Math.random(); return ' + fn
				)();
			}

			instanceProto.setDeafultValue = function() {
				this.stylebackground = 'bubbly';
				this.presetBubbly = 'blueWithWhiteBubbles';
				this.animate = true;
				this.colorStart = '#2AE';
				this.colorStop = '#17B';
				this.shadowColor = '#fff';
				this.compose = 'lighter';
				this.blur = 4;
				this.bubbles = "Math.floor((canvas.width + canvas.height) * 0.02)";
				this.bubbleFunc = "() => `hsla(0, 0%, 100%, ${r() * 0.1})`";
				this.angleFunc = "() => Math.random() * Math.PI * 2";
				this.velocityFunc = "() => 0.1 + Math.random() * 0.5";
				this.radiusFunc = "() => 4 + Math.random() * canvas.width / 25";
			}

			// imposto uno sfondo a colore unito
			instanceProto.showSolidBackground = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();
				this.animate = false;
				this.bubbles = '0';
				bubbly({
					canvas: canvas,
					animate: false,
					colorStart: `${this.colorStart}`,
					colorStop: `${this.colorStart}`,
					bubbles: -1
				});
			}

			// imposto uno sfondo con un gradiente
			instanceProto.showGradienteBackground = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();
				this.animate = false;
				this.bubbles = '0';
				bubbly({
					canvas: canvas,
					animate: false,
					colorStart: `${this.colorStart}`,
					colorStop: `${this.colorStop}`,
					bubbles: -1
				});
			}

			// imposto uno sfondo a bolle con tutte le proprieta personalizzate
			instanceProto.showCustomBubbly = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();
				bubbly({
					canvas: canvas,
					animate: this.animate,
					shadowColor: `${this.shadowColor}`,
					bubbles: this.evil(this.bubbles) === 0 ? -1 : this.evil(this.bubbles),
					angleFunc: this.evil(this.angleFunc),
					velocityFunc: this.evil(this.velocityFunc),
					radiusFunc: this.evil(this.radiusFunc),
					colorStart: `${this.colorStart}`,
					colorStop: `${this.colorStop}`,
					blur: this.blur,
					compose: this.compose,
					bubbleFunc: this.evil(this.bubbleFunc)
				});
			}

			// sfondo a bolle preimpostato (BlueWithWhiteBubbles)
			instanceProto.showPreseteBubblyBlueWithWhiteBubbles = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();

				// imposto le proprieta ai valori
				const tempAnimate = this.animate;
				this.setDeafultValue();
				this.animate = tempAnimate;

				bubbly({ canvas: canvas, animate: this.animate	});
			}

			// sfondo a bolle preimpostato (BlackRedWithRedBubbles)
			instanceProto.showPresetBubblyBlackRedWithRedBubbles = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();

				// imposto le proprieta ai valori
				const tempAnimate = this.animate;
				this.setDeafultValue();
				this.animate = tempAnimate;
				this.bubbleFunc = "() => `hsla(0, 100%, 50%, ${Math.random() * 0.25})`";
				this.colorStart = '#111';
				this.colorStop = '#422';

				bubbly({
					canvas: canvas,
					animate: this.animate,
					colorStart: `#111`,
					colorStop: `#422`,
					bubbleFunc: () => `hsla(0, 100%, 50%, ${Math.random() * 0.25})`
				});
			}

			// sfondo a bolle preimpostato (PurpleWithMulticoloredBubbles)
			instanceProto.showPresetBubblyPurpleWithMulticoloredBubbles = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();

				// imposto le proprieta ai valori
				const tempAnimate = this.animate;
				this.setDeafultValue();
				this.animate = tempAnimate;
				this.bubbleFunc = "() => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`";
				this.colorStart = '#4c004c';
				this.colorStop = '#1a001a';

				bubbly({
					canvas: canvas,
					animate: this.animate,
					colorStart: `#4c004c`,
					colorStop: `#1a001a`,
					bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
				});
			}

			// sfondo a bolle preimpostato (YellowPinkWithRedOrangeYellowBubbles)
			instanceProto.showPresetBubblyYellowPinkWithRedOrangeYellowBubbles = function() {
				this.createCanvasPerDisegnareSfondo('bubbly');
				const canvas = document.getElementById("bubbly");
				const r = () => Math.random();

				// imposto le proprieta ai valori
				const tempAnimate = this.animate;
				this.setDeafultValue();
				this.animate = tempAnimate;
				this.bubbleFunc = "() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`";
				this.colorStart = '#fff4e6';
				this.colorStop = '#ffe9e4';
				this.blur = 1;
				this.compose = "source-over";

				bubbly({
					canvas: canvas,
					animate: this.animate,
					colorStart: `#fff4e6`,
					colorStop: `#ffe9e4`,
					blur: 1,
					compose: "source-over",
					bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
				});
			}

			instanceProto.showBackground = function(style = 'bubbly', preset = 'blueWithWhiteBubbles') {
				if (style === 'solid' ) {
					this.showSolidBackground();
				} else if (style === 'gradient') {
					this.showGradienteBackground();
				} else if (style === 'bubbly') {
					switch (preset) {
						case 'blueWithWhiteBubbles':
							this.showPreseteBubblyBlueWithWhiteBubbles();
							break;
						case 'blackRedWithRedBubbles':
							this.showPresetBubblyBlackRedWithRedBubbles();
							break;
						case 'purpleWithMulticoloredBubbles':
							this.showPresetBubblyPurpleWithMulticoloredBubbles();
							break;
						case 'yellowPinkWithRedOrangeYellowBubbles':
							this.showPresetBubblyYellowPinkWithRedOrangeYellowBubbles();
							break;
						case 'custom':
							this.showCustomBubbly();
							break;
						default:
							this.showPreseteBubblyBlueWithWhiteBubbles();
					}
				}
			}

	instanceProto.onCreate = function() {
		// imposto lo sfondo della pagina a trasparente
		document.body.style.backgroundColor = 'transparent';
		// Read properties set in C3
			this.stylebackground = this.comboItems.stylebackground[ this.properties[this.elencoProprieta.stylebackground] ];
			this.colorStart = '#' + this.rgbToHex(this.properties[this.elencoProprieta.colorStart]);
			this.colorStop = '#' + this.rgbToHex(this.properties[this.elencoProprieta.colorStop]);
			this.presetBubbly = this.comboItems.presetBubbly[ this.properties[this.elencoProprieta.presetBubbly] ];
			this.animate = this.properties[this.elencoProprieta.animate];
			this.shadowColor = '#' + this.rgbToHex(this.properties[this.elencoProprieta.shadowColor]);
			this.compose = this.properties[this.elencoProprieta.compose] === 0 ? 'lighter' : 'source-over';
			this.blur = this.properties[this.elencoProprieta.blur];
			this.bubbles = this.properties[this.elencoProprieta.bubbles];
			this.bubbleFunc = this.properties[this.elencoProprieta.bubbleFunc];
			this.angleFunc = this.properties[this.elencoProprieta.angleFunc];
			this.velocityFunc = this.properties[this.elencoProprieta.velocityFunc];
			this.radiusFunc = this.properties[this.elencoProprieta.radiusFunc];

		this.createCanvasPerDisegnareSfondo('bubbly');

		this.showBackground(this.stylebackground, this.presetBubbly);

	};

	instanceProto.saveToJSON = function () {
		return {
			"stylebackground": this.stylebackground,
			"colorStart": this.colorStart,
			"colorStop": this.colorStop,
			"presetBubbly": this.presetBubbly,
			"animate": this.animate,
			"shadowColor": this.shadowColor,
			"compose": this.compose,
			"blur": this.blur,
			"bubbles": this.bubbles,
			"bubbleFunc": this.bubbleFunc,
			"angleFunc": this.angleFunc,
			"velocityFunc": this.velocityFunc,
			"radiusFunc": this.radiusFunc
		};
	};

	instanceProto.loadFromJSON = function (o) {
		this.stylebackground = o["stylebackground"];
		this.colorStart = o["colorStart"];
		this.colorStop = o["colorStop"];
		this.presetBubbly = o["presetBubbly"];
		this.animate = o["animate"];
		this.shadowColor = o["shadowColor"];
		this.compose = o["compose"];
		this.blur = o["blur"];
		this.bubbles = o["bubbles"];
		this.bubbleFunc = o["bubbleFunc"];
		this.angleFunc = o["angleFunc"];
		this.velocityFunc = o["velocityFunc"];
		this.radiusFunc =o["radiusFunc"];
	};

	instanceProto.saveToStringJSON = function () {
		const a = this.saveToJSON();
		const b = JSON.stringify(a);
		const c = b.replace(/"/g, '""');
		return c;
	}

	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections) {
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};

		Cnds.prototype.IsAnimate = function () {
			return this.animate;
		};

		Cnds.prototype.IsComposeLighter = function () {
			return this.compose === 'lighter' ? true : false;
		};

	pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

		// reset i valori a quelli predefiniti
		Acts.prototype.resetProperty = function () { this.setDeafultValue(); }

		// riavvia lo sfondo aggiornando le modifiche fatte
		Acts.prototype.redrawBackground = function () {
			this.showBackground(this.stylebackground, this.presetBubbly);
		}

		// modifica le proprietà del plugin
		// dopo la modifica NON riavvia il plugin: per rendere effettive le modifiche
		// va usata l'action showBackground

		// cambia lo stile del background (solid, gradient, bubbly)
		Acts.prototype.changeStyleBackground = function (style) {
			this.stylebackground = this.comboItems.stylebackground[style];
		};

		// cambia lo stile del background (solid, gradient, bubbly)
		Acts.prototype.changePresetBubbly = function (preset) {
			this.presetBubbly = this.comboItems.presetBubbly[preset];
		};

		Acts.prototype.setAnimate = function (animate) { this.animate = animate === 1 ? true : false; }
		Acts.prototype.setCompose = function (compose) { this.compose = compose === 1 ? 'lighter' : 'source-over'; }
		Acts.prototype.setBlur = function (blur) { this.blur = blur; }
		Acts.prototype.setBubbles = function (bubbles) { this.bubbles = bubbles; }
		Acts.prototype.setBubbleFunc = function (bubbleFunc) { this.bubbleFunc = bubbleFunc; }
		Acts.prototype.setAngleFunc = function (angleFunc) { this.angleFunc = angleFunc; }
		Acts.prototype.setVelocityFunc = function (velocityFunc) { this.velocityFunc = velocityFunc; }
		Acts.prototype.setRadiusFunc = function (radiusFunc) { this.radiusFunc = radiusFunc; }
		Acts.prototype.setColorStart = function (stringColor) { this.colorStart = stringColor; }
		Acts.prototype.setColorStop = function (stringColor) { this.colorStop = stringColor; }
		Acts.prototype.setColorShadow = function (stringColor) { this.shadowColor = stringColor; }

		Acts.prototype.loadBackgroundFromJSON = function (stringJSON) {
			const obj = JSON.parse(stringJSON);
			 this.loadFromJSON(obj);
		 }

	pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};

		//string
		Exps.prototype.getStyleBackground = function (ret) { ret.set_string(this.stylebackground); };
		Exps.prototype.getPresetBubbly = function (ret) { ret.set_string(this.presetBubbly); };
		// number
		Exps.prototype.getBlur = function (ret) { ret.set_int(this.blur); };
		// boolean
		Exps.prototype.isAnimate = function (ret) { ret.set_int(this.animate ? 1 : 0); };
		// string
		Exps.prototype.getCompose = function (ret) { ret.set_string(this.compose); };
		Exps.prototype.getBubbles = function (ret) { ret.set_string(this.bubbles); };
		Exps.prototype.getBubbleFunc = function (ret) { ret.set_string(this.bubbleFunc); };
		Exps.prototype.getAngleFunc = function (ret) { ret.set_string(this.angleFunc); };
		Exps.prototype.getVelocityFunc = function (ret) { ret.set_string(this.velocityFunc); };
		Exps.prototype.getRadiusFunc = function (ret) { ret.set_string(this.radiusFunc); };
		Exps.prototype.getColorStart = function (ret) { ret.set_string(this.colorStart); };
		Exps.prototype.getColorStop = function (ret) { ret.set_string(this.colorStop); };
		Exps.prototype.getColorShadow = function (ret) { ret.set_string(this.shadowColor); };

		Exps.prototype.getAsJSON = function (ret) {
				const obj = this.saveToJSON();
				const objString = JSON.stringify(obj);
			 	ret.set_string(objString);
		 };

		 Exps.prototype.getAsStringJSON = function (ret) {
			 const objString = this.saveToStringJSON();
			 ret.set_string(objString);
		 };

	pluginProto.exps = new Exps();

}());
