"use strict";

{
	C3.Plugins.StraniAnelli_InjectCSS.Exps =
	{
		GetValue(id) {
			const el = document.getElementById(id);
			return el.value;
		},
		GetAttribute(id, attr) {
			const el = document.getElementById(id);
			return el.getAttribute(attr);
		},
		GetValueWithQuerySelector(selectors){
			const el = document.querySelector(selectors);
			return el.value;
		},
		GetAttributeWithQuerySelector(selectors, attr) {
			const el = document.querySelector(selectors);
			return el.getAttribute(attr);
		},
		GetCheckedStatus(id) {
			const el = document.getElementById(id);
			const bool = el.checked;
			return bool ? 1 : 0;
		},
		GetCheckedStatusQuerySelector(selectors) {
			const el = document.querySelector(selectors);
			const bool = el.checked;
			return bool ? 1 : 0;
		},
		GetValueRadio(radioName) {
			// http://jsfiddle.net/Xxxd3/610/
			const radios = document.querySelectorAll(`[name="${radioName}"]`);
			for (let i = 0, length = radios.length; i < length; i++) {
			    if (radios[i].checked) {
			        return radios[i].value;
			        break;
			    }
			}
		},

		GetAttrFromString(string, attr) {

			// permette di estrarre attr da una stringa tipo
			// <label><input name="prefer" value="2" type="checkbox" class="userRatings">Back-end Projects</label>

			function extract(s, prefix, suffix) {
				var i = s.indexOf(prefix);
				if (i >= 0) { s = s.substring(i + prefix.length); }
				else { return '';	}
				if (suffix) {
					i = s.indexOf(suffix);
					if (i >= 0) {	s = s.substring(0, i);}
					else { return '';	}
				}
				return s;
			};

			const suffix = '" '
			let prefix = attr + '="'
			let risultato = extract(string, prefix, suffix);
			if (risultato != '') return risultato;

			prefix = attr + ' ="'
			risultato = extract(string, prefix, suffix);
			if (risultato != '') return risultato;

			prefix = attr + ' = "'
			risultato = extract(string, prefix, suffix);
			if (risultato != '') return risultato;

			prefix = attr + '= "'
			risultato = extract(string, prefix, suffix);
			if (risultato != '') return risultato;

			return '';

		}


	};
}
