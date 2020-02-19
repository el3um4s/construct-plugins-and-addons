"use strict";

{
	C3.Plugins.StraniAnelli_Showdown.Instance = class ShowdownInstance extends C3.SDKInstanceBase
	{
		constructor(inst, properties)
		{
			super(inst);

			// Initialise object properties
			this._flavor = "github";

			if (properties)		// note properties may be null in some cases
			{
				this._flavor = properties[0];
			}

			showdown.setFlavor(this._flavor);
		}

		Release()
		{
			super.Release();
		}

		SaveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}

		LoadFromJson(o)
		{
			// load state for savegames
		}
	};
}
