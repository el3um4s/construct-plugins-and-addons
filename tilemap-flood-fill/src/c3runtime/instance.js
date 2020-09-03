"use strict";

{
	C3.Behaviors.StraniAnelli_TilemapFloodFill.Instance = class TilemapFloodFillInstance extends C3.SDKBehaviorInstanceBase
	{
		constructor(behInst, properties)
		{
			super(behInst);
		}

		async FloodFill (x, y, targetcolor, replacementcolor) {

			if (targetcolor == replacementcolor) return;

			let tilemap = this._inst.GetSdkInstance();
			const nodeColor = tilemap.GetTileAt(x, y);

			if (nodeColor != targetcolor) return;

			tilemap.SetTileAt(x, y, replacementcolor);

			this.FloodFill(x, y+1, targetcolor, replacementcolor);
			this.FloodFill(x, y-1, targetcolor, replacementcolor);
			this.FloodFill(x-1, y, targetcolor, replacementcolor);
			this.FloodFill(x+1, y, targetcolor, replacementcolor);


		}

		Release()
		{
			super.Release();
		}
		
		SaveToJson()
		{
			return {
				// data to store for savegames
			};
		}

		LoadFromJson(o)
		{
			// load state for savegames
		}

	};
}