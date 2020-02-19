"use strict";

{
	C3.Behaviors.StraniAnelli_TilemapFloodFill.Acts =
	{

		async StackBasedeRecursive (x, y, targetcolor, replacementcolor) {
			this.FloodFill(x, y, targetcolor, replacementcolor);
		},

		async ForestFire(x, y, targetcolor, replacementcolor)
		{

			if (targetcolor == replacementcolor) return;

			let tilemap = this._inst.GetSdkInstance();
			const nodeColor = tilemap.GetTileAt(x, y);

			if (nodeColor != targetcolor) return;

			tilemap.SetTileAt(x, y, replacementcolor);

			let queue = [];
			queue.push({x, y});

			function fill(a,b) {
				if (tilemap.GetTileAt(a,b) == targetcolor) {
					tilemap.SetTileAt(a, b, replacementcolor);
					queue.push({"x": a, "y": b});
				}
			}

			while (queue.length > 0) {
				const n = queue.shift();
				const nx = n.x;
				const ny = n.y;

				fill(nx-1,ny);
				fill(nx+1,ny);
				fill(nx,ny-1);
				fill(nx,ny+1);
			}
		}
	};
}
