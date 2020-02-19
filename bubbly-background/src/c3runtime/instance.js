"use strict";

{
	C3.Plugins.StraniAnelli_BubblyBackground.Instance = class BubblyBackgroundInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);

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

			if (properties)		// note properties may be null in some cases
			{
				this.stylebackground = this.comboItems.stylebackground[ properties[this.elencoProprieta.stylebackground] ];
				this.colorStart = '#' + this.rgbToHex(properties[this.elencoProprieta.colorStart]);
				this.colorStop = '#' + this.rgbToHex(properties[this.elencoProprieta.colorStop]);
				this.presetBubbly = this.comboItems.presetBubbly[ properties[this.elencoProprieta.presetBubbly] ];
				this.animate = properties[this.elencoProprieta.animate];
				this.shadowColor = '#' + this.rgbToHex(properties[this.elencoProprieta.shadowColor]);
				this.compose = properties[this.elencoProprieta.compose] === 0 ? 'lighter' : 'source-over';
				this.blur = properties[this.elencoProprieta.blur];
				this.bubbles = properties[this.elencoProprieta.bubbles];
				this.bubbleFunc = properties[this.elencoProprieta.bubbleFunc];
				this.angleFunc = properties[this.elencoProprieta.angleFunc];
				this.velocityFunc = properties[this.elencoProprieta.velocityFunc];
				this.radiusFunc = properties[this.elencoProprieta.radiusFunc];
			}

			this.createElement();
		}


		destroyElementById (elId = 'bubbly') {
			if(document.getElementById(elId)){
				const elementoDaEliminare = document.getElementById(elId);
				elementoDaEliminare.parentNode.removeChild(elementoDaEliminare);
			} else {
				return;
			}
		}

		createCanvasPerDisegnareSfondo (elId = 'bubbly') {
			// prima elimino un'eventuale altra canvas già presente
			this.destroyElementById(elId);
			const canvas = document.createElement('canvas');
				canvas.id = elId;
				document.body.appendChild(canvas);
				canvas.style.left = '0px';
				canvas.style.top = '0px';
				canvas.style.width = '100vw';
				canvas.style.height = '100vh';
				canvas.style.zIndex = '-1';
				canvas.style.position = "fixed";
			document.body.style.backgroundColor = 'transparent';
		}

		rgbToHex (arr) {
			const r = Math.round(arr[0]*255);
			const g = Math.round(arr[1]*255);
			const b = Math.round(arr[2]*255);
			const rgb = b | (g << 8) | (r << 16);
			return (0x1000000 | rgb).toString(16).substring(1);
		}

		evil (fn) {
			return new Function(
				'const canvas = document.getElementById("bubbly"); const r = () => Math.random(); return ' + fn
			)();
		}

		setDeafultValue () {
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

		showSolidBackground () {
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

		showGradienteBackground () {
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

		showCustomBubbly () {
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

		showPreseteBubblyBlueWithWhiteBubbles () {
			this.createCanvasPerDisegnareSfondo('bubbly');
			const canvas = document.getElementById("bubbly");
			const r = () => Math.random();

			// imposto le proprieta ai valori
			const tempAnimate = this.animate;
			this.setDeafultValue();
			this.animate = tempAnimate;

			bubbly({ canvas: canvas, animate: this.animate	});
		}

		showPresetBubblyBlackRedWithRedBubbles () {
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

		showPresetBubblyPurpleWithMulticoloredBubbles () {
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

		showPresetBubblyYellowPinkWithRedOrangeYellowBubbles () {
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

		showBackground (style = 'bubbly', preset = 'blueWithWhiteBubbles') {
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

		createElement () {
			// document.body.style.background = '#fff0';
			document.body.style.backgroundColor = 'transparent';

			this.createCanvasPerDisegnareSfondo('bubbly');

			this.showBackground(this.stylebackground, this.presetBubbly);
		}

		saveToStringJSON () {
			// const a = this.saveToJSON();
			const a = this.SaveToJson();
			const b = JSON.stringify(a);
			const c = b.replace(/"/g, '""');
			return c;
		}


		/*
########################################################
		*/

		Release() {
			super.Release();
		}

		SaveToJson() {
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
		}

		LoadFromJson(o) {
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
		}
	};
}
