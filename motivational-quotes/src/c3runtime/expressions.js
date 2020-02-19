"use strict";

{
	C3.Plugins.StraniAnelli_MotivationalQuotes.Exps =
	{
		GetQuoteJSON() {
			const elencoCitazioni = _stranianelli_motivational_quotes_words["motivationalQuotes"];
			const citazioneRandom = elencoCitazioni[Math.floor(Math.random()*elencoCitazioni.length)];
			const myJsonString = JSON.stringify(citazioneRandom);

			return myJsonString;
		},

		GetQuoteFromJSON(json) {
			const obj = JSON.parse(json);
			return obj['quote'];
		},

		GetAuthorFromJSON(json){
			const obj = JSON.parse(json);
			return obj['author'];
		},

		GetQuoteFromLocalJSON(nameFile, category) {
			const fileJSON = this.elencoJSONlocali.find( (element, index, array) => {
						return element["nameFile"] == nameFile;
					});
			const elencoCitazioni = fileJSON["json"][category];
			const citazioneRandom = elencoCitazioni[Math.floor(Math.random()*elencoCitazioni.length)];
			const myJsonString = JSON.stringify(citazioneRandom);
			return myJsonString;
		},

		GetPropertyFromJSON(json, property) {
			const obj = JSON.parse(json);
			return obj[property];
		}

	};
}
