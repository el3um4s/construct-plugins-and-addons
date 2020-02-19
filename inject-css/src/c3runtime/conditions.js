"use strict";

{
	C3.Plugins.StraniAnelli_InjectCSS.Cnds =
	{
		IsCSSAlreadyPresent(nameFile) {
			const cssPresenteNellElenco = this.elencoCSSpresenti.filter(e => (e.name == nameFile)).length  > 0 ? true : false;
			return cssPresenteNellElenco;
		},

		IsCSSEnabled(nameFile) {
			const cssAbilitato = this.elencoCSSpresenti.filter(e => (e.name == nameFile && e.enabled)).length  > 0 ? true : false;
			return cssAbilitato;
		}



		/*async IsCSSAlreadyPresent(nameFile) {
			 await this.TriggerAsync(C3.Plugins.StraniAnelli_InjectCSS.Cnds.IsCSSAlreadyPresentVerified)
	 	},*/
		/*IsCSSAlreadyPresent(nomeCSS) {

			let urlCSSinC3 = '';
			if ( this._runtime.IsPreview() ) {
				urlCSSinC3 = this._runtime.GetAssetManager().GetProjectFileUrl(nomeCSS);
			}  else {
				urlCSSinC3 = nomeCSS;
			}

			const links = document.head.getElementsByTagName("link");
    	for(let i = 0; i < links.length; i++) {
        if (links[i].href.substr(-nomeCSS.length) == nomeCSS) return true;
				if (links[i].href.substr(-urlCSSinC3.length) == urlCSSinC3) return true;
    		}
			return false;
		},*/

		/*IsCSSEnabled(nomeCSS) {

			let urlCSSinC3 = '';
			if ( this._runtime.IsPreview() ) {
				urlCSSinC3 = this._runtime.GetAssetManager().GetProjectFileUrl(nomeCSS);
			}  else {
				urlCSSinC3 = nomeCSS;
			}

			const links = document.head.getElementsByTagName("link");
    	for(let i = 0; i < links.length; i++) {
        if (links[i].href.substr(-nomeCSS.length) == nomeCSS) return !links[i].disabled;
				if (links[i].href.substr(-urlCSSinC3.length) == urlCSSinC3) return !links[i].disabled;
    		}
			return false;
		}*/

		// async IsCSSAlreadyPresent(nameFile) {
		// 	let url = await this._runtime.GetAssetManager().LoadProjectFileUrl(nameFile);
		// 	const links = document.head.getElementsByTagName("link");
    // 	for(let i = 0; i < links.length; i++) {
    //     if (links[i].href.substr(-nameFile.length) == nameFile) return true;
		// 		if (links[i].href.substr(-url.length) == url) return true;
    // 		}
		// 	return false;
		// },

		// IsCSSAlreadyPresent(nameFile) {
		// 	this._runtime.GetAssetManager().LoadProjectFileUrl( nameFile ).then(url=>
		// 	{
		// 		const links = document.head.getElementsByTagName("link");
		// 		for(let i = 0; i < links.length; i++) {
		//         if (links[i].href.substr(-nameFile.length) == nameFile) return true;
		// 				if (links[i].href.substr(-url.length) == url) return true;
		//     	}
		// 			return false;
		// 	});
		// },
		//
		// IsCSSEnabled(nameFile) {
		// 	this._runtime.GetAssetManager().LoadProjectFileUrl( nameFile ).then(url=>
		// 	{
		// 			const links = document.head.getElementsByTagName("link");
		// 			for(let i = 0; i < links.length; i++) {
		// 		    if (links[i].href.substr(-nameFile.length) == nameFile) return !links[i].disabled;
		// 				if (links[i].href.substr(-url.length) == url) return !links[i].disabled;
		// 				}
		// 			return false;
		// 	});
		// }

		// async IsCSSEnabled(nameFile) {
		// 	let url = await this._runtime.GetAssetManager().LoadProjectFileUrl(nameFile);
		// 	const links = document.head.getElementsByTagName("link");
    // 	for(let i = 0; i < links.length; i++) {
    //     if (links[i].href.substr(-nameFile.length) == nameFile) return !links[i].disabled;
		// 		if (links[i].href.substr(-url.length) == url) return !links[i].disabled;
    // 		}
		// 	return false;
		// }

	};
}
