"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_Leaflet;

	// Temporary geometry objects used in rendering
	const tempRect = new SDK.Rect();
	const tempQuad = new SDK.Quad();

	PLUGIN_CLASS.Instance = class LeafletInstance extends SDK.IWorldInstanceBase
	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}

		Release()
		{
		}

		OnCreate()
		{
			// Default to top-left origin
			this._inst.SetOrigin(0, 0);
			this.detoGeometry = null;
		}

		OnPlacedInLayout()
		{
			// Default to 400x250
			this._inst.SetSize(50, 50);
		}

		Draw(iRenderer, iDrawParams)
		{
			const thisInst = this._inst;
			const myx = thisInst.GetX();
			const myy = thisInst.GetY();
			const w = thisInst.GetWidth();
			const h = thisInst.GetHeight();
			const ruotaAttornoAdX = thisInst.GetX();
	    const ruotaAttornoAdY = thisInst.GetY();

			const thick = 6;
			const divideLenght = Math.abs(w/6);

			this.detoGeometry = new DetoGeometry_Leaflet(this, iRenderer);
			this.detoGeometry.setColorRgba(90, 210, 140, 0.6);
			this.detoGeometry.drawFillRect({ x: myx, y: myy, width: w, height: h});
	    this.detoGeometry.setColorRgba(35, 95, 20, 0.6);
			this.detoGeometry.drawPerimeterRect({ x: myx, y: myy, width: w, height: h, thick: 2});

			this.detoGeometry.setColorRgba(35, 95, 20, 0.6);

			// per sapere in che direzione dirigere gli angoli
			function direzioneAng(i) {
				return i > 0 ? 1 : -1;
			}

			// calcolo la lunghezza degli angoli. Se la lunghezza è maggiore del riferimento allora restituisco il riferimento
			function lungAng(riferimento) {
				return Math.abs(divideLenght) > Math.abs(riferimento) ? riferimento : divideLenght * direzioneAng(riferimento);
			}

			// angolare in alto a sx
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx, y1: myy, x2:myx + lungAng(w), y2: myy, thick});
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx, y1: myy, x2:myx, y2: myy + lungAng(h), thick });
			// angolare in alto a dx
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx + w, y1: myy, x2: myx + w - lungAng(w), y2: myy, thick});
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx + w, y1: myy + lungAng(h), x2: myx + w, y2: myy, thick});
			// angolare in basso a dx
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx + w, y1: myy + h, x2: myx + w - lungAng(w), y2: myy + h, thick});
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx + w, y1: myy + h, x2: myx + w, y2: myy + h - lungAng(h), thick});
			// angolare in basso a sx
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx, y1: myy + h, x2: myx + lungAng(w), y2: myy + h, thick});
			this.detoGeometry.drawLineFromPointToPoint ({ x1: myx, y1: myy + h, x2: myx, y2: myy + h - lungAng(h), thick});

			// per fare una preview della mappa

			// console.log(this._inst.GetPropertyValue("tileLayer"));
	  }

		HasDoubleTapHandler()
		{
			return true;
		}

		OnDoubleTap()
		{
		}

		OnPropertyChanged(id, value)
		{
		}

		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}
