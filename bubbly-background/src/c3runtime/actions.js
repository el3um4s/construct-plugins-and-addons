"use strict";

{
	C3.Plugins.StraniAnelli_BubblyBackground.Acts =
	{
		resetProperty () { this.setDeafultValue(); },

		redrawBackground () { this.showBackground(this.stylebackground, this.presetBubbly); },

		changeStyleBackground (style) { this.stylebackground = this.comboItems.stylebackground[style]; },

		changePresetBubbly (preset) { this.presetBubbly = this.comboItems.presetBubbly[preset]; },

		setAnimate (animate) { this.animate = animate === 1 ? true : false; },
		setCompose (compose) { this.compose = compose === 1 ? 'lighter' : 'source-over'; },
		setBlur (blur) { this.blur = blur; },
		setBubbles (bubbles) { this.bubbles = bubbles; },
		setBubbleFunc (bubbleFunc) { this.bubbleFunc = bubbleFunc; },
		setAngleFunc (angleFunc) { this.angleFunc = angleFunc; },
		setVelocityFunc (velocityFunc) { this.velocityFunc = velocityFunc; },
		setRadiusFunc (radiusFunc) { this.radiusFunc = radiusFunc; },
		setColorStart (stringColor) { this.colorStart = stringColor; },
		setColorStop (stringColor) { this.colorStop = stringColor; },
		setColorShadow (stringColor) { this.shadowColor = stringColor; },

		loadBackgroundFromJSON (stringJSON) {
			const obj = JSON.parse(stringJSON);
			this.LoadFromJson(obj);
			// this.loadFromJSON(obj);
		 }

	};
}
