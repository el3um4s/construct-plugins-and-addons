"use strict";

{
	C3.Plugins.StraniAnelli_Showdown.Acts =
	{
		SetOption(optionKey, value) {
			showdown.setOption('optionKey', 'value');
		},

		SetFlavor(flavor) {
			showdown.setFlavor(flavor);
		}
	};
}
