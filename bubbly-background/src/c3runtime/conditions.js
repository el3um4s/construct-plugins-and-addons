"use strict";

{
	C3.Plugins.StraniAnelli_BubblyBackground.Cnds =
	{
		IsAnimate () {
			return this.animate;
		},

		IsComposeLighter () {
			return this.compose === 'lighter' ? true : false;
		}
	};
}
