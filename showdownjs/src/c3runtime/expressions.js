"use strict";

{
	C3.Plugins.StraniAnelli_Showdown.Exps =
	{
		MakeHtml(text) {
			const converter = new showdown.Converter();
			const t = !text ? " " : text;
			const html = converter.makeHtml(text);
			return html;
		}
	};
}
