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
			
			let tw=tilemap.GetMapWidth()-1;
			let th=tilemap.GetMapHeight()-1;


			//console.log("W:"+tilemap.GetMapWidth() + " H:"+tilemap.GetMapHeight());


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

/*				fill(nx-1,ny); 
				fill(nx+1,ny); 
				fill(nx,ny-1);  
				fill(nx,ny+1);                 */


				if (nx>0) { fill(nx-1,ny); }
				if (nx<tw) { fill(nx+1,ny); }
				if (ny>0) { fill(nx,ny-1);  }
				if (ny<th) { fill(nx,ny+1);  } 

			}
		},



		async ForestFireBorder(x, y, bordercolor, replacementcolor)
		{

			//if (bordercolor == replacementcolor) return;

			let tilemap = this._inst.GetSdkInstance();
			const nodeColor = tilemap.GetTileAt(x, y);
			console.log("node:"+nodeColor);

			if (nodeColor == bordercolor) return;

			//tilemap.SetTileAt(x, y, replacementcolor);

			let queue = [];
			queue.push({x, y});
			
			let tw=tilemap.GetMapWidth()-1;
			let th=tilemap.GetMapHeight()-1;


			console.log("W:"+tilemap.GetMapWidth() + " H:"+tilemap.GetMapHeight());


			function fill(a,b) {
//			console.log("a:"+a + " b:"+b);

				if (tilemap.GetTileAt(a,b) != bordercolor && tilemap.GetTileAt(a,b) != replacementcolor) {
					tilemap.SetTileAt(a, b, replacementcolor);
					queue.push({"x": a, "y": b});
				}
			}

			while (queue.length > 0) {
				const n = queue.shift();
				const nx = n.x;
				const ny = n.y;

/*				fill(nx-1,ny); 
				fill(nx+1,ny); 
				fill(nx,ny-1);  
				fill(nx,ny+1);                 */


				if (nx>0) { fill(nx-1,ny); }
				if (nx<tw) { fill(nx+1,ny); }
				if (ny>0) { fill(nx,ny-1);  }
				if (ny<th) { fill(nx,ny+1);  } 

			}
		}

	};
}
