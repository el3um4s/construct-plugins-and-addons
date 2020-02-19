"use strict";

{
	C3.Plugins.StraniAnelli_BubblyBackground.Exps =
	{
		//string
		getStyleBackground () { return this.stylebackground; },
		getPresetBubbly () { return this.presetBubbly; },
		// number
		getBlur () { return this.blur; },
		// boolean
		isAnimate () {return this.animate ? 1 : 0; },
		// string
		getCompose () { return this.compose; },
		getBubbles () { return this.bubbles; },
		getBubbleFunc () { return this.bubbleFunc; },
	 	getAngleFunc () { return this.angleFunc; },
	 	getVelocityFunc () { return this.velocityFunc; },
		getRadiusFunc () { return this.radiusFunc; },
		getColorStart () { return this.colorStart; },
		getColorStop () { return this.colorStop; },
	 	getColorShadow () { return this.shadowColor; },

		getAsJSON () {
				const obj = this.SaveToJson();
				const objString = JSON.stringify(obj);
			 	return objString;
		 },

		 getAsStringJSON () {
			 const objString = this.saveToStringJSON();
			 return objString;
		 }
	};
}
