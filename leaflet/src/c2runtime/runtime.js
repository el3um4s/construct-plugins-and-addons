// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.StraniAnelli_Leaflet = function(runtime) { this.runtime = runtime; };

(function () {
	var pluginProto = cr.plugins_.StraniAnelli_Leaflet.prototype;

	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin) {
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()	{	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type) {
		this.type = type;
		this.runtime = type.runtime;

		// DetoLeafletJSsupporter();
		// mi serve per gestire il disegno sul canvas e la posizione del div
		// this.detoGeometry = null;
		// this.myX = 0;
		// this.myY = 0;
		// this.myWidth = 0;
		// this.myHeight = 0;
		// this.myAngle = 0;

		// elenco delle proprietà per gestire un po' più facilmente la costruzione del plugin
		this.elencoProprieta = {
			visible: 0,
			tileLayer: 1,
			customLayer: 2,
			customLayerAttribution: 3,
			latitude: 4,
			longitude: 5,
			zoom: 6,
			showAttribution: 7,
			showZoomControl: 8,
			showScaleControl: 9,
			useImperialScale: 10
		};

		// valori costanti da usare in tutto il plugin
		this.comboItems = {
			tileLayer: ['openstreetmap',
									'michelin',
									'blackandwhite',
									'stamentoner',
									'stamentonerbackground',
									'stamentonerlite',
									'stamenwatercolor',
									'stamenterrain',
									'stamenterrainbackground',
									'openstreetmapde',
									'openstreetmapfrance',
									'openstreetmaphot',
									'opentopomap',
									'openmapsurferroad',
									'openmapsurfergrayscale',
									'hyddafull',
									'hyddabase',
									'esriworldstreetmap',
									'esridelorme',
									'esriworldtopomap',
									'esriworldimagery',
									'esriworldterrain',
									'esriworldshapedrelief',
									'esriworldphysical',
									'esrioceanbasemap',
									'esrinatgeoworldmap',
									'esriworldgraycanvas',
									'hikebike',
									'hikebikehillshading',
									'wikimedia',
									'cartodbpositron',
									'cartodbdarkmatter',
									'custom']
		};

		this.costanti = {
			tileLayer:  {
				openstreetmap: {
					tiles: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					// http://leaflet-extras.github.io/leaflet-providers/preview/index.html
					attribution: 'openstreetmap.org'
				},
				michelin: {
					tiles: 'https://map4.viamichelin.com/map/mapdirect?map=viamichelin&z={z}&x={x}&y={y}&format=png&version=0&layer=background',
					attribution: '<a href="http://info.viamichelin.it/web/crediti" target="_blank">©Michelin ©2006-2016 TomTom</a>'
				},
				blackandwhite: {
					tiles: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				stamentoner: {
					tiles: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
				},
				stamentonerbackground: {
					tiles: 'http://tile.stamen.com/toner-background/{z}/{x}/{y}.png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				stamenwatercolor: {
					tiles: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
				},
				stamentonerlite: {
					tiles: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				stamenterrain: {
					tiles: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				stamenterrainbackground: {
					tiles: 'http://tile.stamen.com/terrain-background/{z}/{x}/{y}.png',
					attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				openstreetmapde: {
					tiles: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				openstreetmapfrance: {
					tiles: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
					attribution: '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				openstreetmaphot: {
					tiles: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
				},
				opentopomap: {
					tiles: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
					attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
				},
				openmapsurferroad: {
					tiles: 'https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
					attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				openmapsurfergrayscale: {
					tiles: 'https://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}',
					attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				hyddafull: {
					tiles: 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png',
					attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				hyddabase: {
					tiles: 'https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png',
					attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				esriworldstreetmap: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
				},
				esridelorme: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
				},
				esriworldtopomap: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
				},
				esriworldimagery: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
				},
				esriworldterrain: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS'
				},
				esriworldshapedrelief: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
				},
				esriworldphysical: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service'
				},
				esrioceanbasemap: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
				},
				esrinatgeoworldmap: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
				},
				esriworldgraycanvas: {
					tiles: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
					attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
				},
				hikebike: {
					tiles: 'http://{s}.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				hikebikehillshading: {
					tiles: 'http://{s}.tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				},
				wikimedia: {
					tiles: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
					attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
				},
				cartodbpositron: {
					tiles: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
				},
				cartodbdarkmatter: {
					tiles: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
				},
				custom: {
					tiles: 'custom',
					attribution: ''
				}
			}
		};

		// id base della mappa a cui aggiungo l'UID dell'oggetto
		this.mapId = 'map_deto_leaflet_';

		// per decidere se visualizzare o meno la mappa
		this.visible = true;
		// per aggiornare la posizione della mappa nello schermo
		this.isTicking = true;

		// non so ancora se mi servirà, però mi creo una proprietà per creare un rirerimento a leafletjs
		// this.leaflet = null;

		// la mappa vera e propria
		this.mymap = null;

		// i livelli da visualizzare in formato L.tileLayer(url, {impostazioni})
		this.tileLayer = null;
		// il nome del livello da visualizzare in formato string
		this.tileLayerSelezionato = null;

		// latitudine, longitudine e zoom di partenza
		this.latitude = null;
		this.longitude = null;
		this.zoom = null;

		// per impostare zoom minimo e massimo della mappa
		this.minZoom = null;
		this.maxZoom = null;

		// per mostrare i controlli della mappa
		this.showAttribution = true;
		this.showZoomControl = true;
		this.showScaleControl = true;
		this.useImperialScale = false;

		this.controlScale = null;
	};

	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function() {
		// non so ancora se mi servirà, però mi creo una proprietà con un rirerimento a leafletjs
		// this.leaflet = L;

		// mi serve per gestire eventuali disegni sul canvas
		// this.detoGeometry = new DetoGeometry_Leaflet(this);

		// per decidere se visualizzare subito la mappa al caricamento del layout
		this.visible = this.properties[this.elencoProprieta.visible];

		// prendo il nome della mappa selezionata dalle proprietà
		// per farlo uso un array con il nome in corrispondenza al numero restitituo dall'elenco delle proprietà
		this.tileLayerSelezionato =  this.comboItems.tileLayer[this.properties[this.elencoProprieta.tileLayer]];
		// inserisco l'eventuale url e attribution di un tileLayer
		this.costanti.tileLayer.custom.tiles = this.properties[this.elencoProprieta.customLayer];
		this.costanti.tileLayer.custom.attribution = this.properties[this.elencoProprieta.customLayerAttribution];

		// recupero latitudine, longitudine e zoom di partenza
		this.latitude = this.properties[this.elencoProprieta.latitude];
		this.longitude = this.properties[this.elencoProprieta.longitude];
		this.zoom = this.properties[this.elencoProprieta.zoom];

		// recupero le informazioni su che controlli usare nella mappa
		this.showAttribution = this.properties[this.elencoProprieta.showAttribution];;
		this.showZoomControl = this.properties[this.elencoProprieta.showZoomControl];;
		this.showScaleControl = this.properties[this.elencoProprieta.showScaleControl];;
		this.useImperialScale = this.properties[this.elencoProprieta.useImperialScale];;

		// l'id della mappa: mi serve per poter avere più mappe contemporaneamente
		this.mapId += this.uid

		// creo un div dentro cui mostrare la mappa
			const div = document.createElement('div');
			div.id = this.mapId;
			document.body.appendChild(div);
			// imposto lo stile del div
			div.style.left = this.x + 'px';
	  	div.style.top = this.y + 'px';
	    div.style.width = this.width + 'px';
	    div.style.height = this.height + 'px';
	    div.style.position = "absolute";
			// div.style.transformOrigin = 'top left';
			// div.style.transform = `rotate(${angle}rad)`;

		// collego la mappa all'ID del div
		this.mymap = L.map(this.mapId);
		// imposto la latitudine e la longitudine da mostrare all'avvio della mappa
		this.mymap.setView({lat: this.latitude, lng: this.longitude});
		// imposto lo zoom di partenza della mappa
		this.mymap.setZoom(this.zoom);

		// decido se mostrare o nascondere l'attribution della mappa
		if (this.showAttribution) {
			this.mymap.addControl(this.mymap.attributionControl);
		} else {
			this.mymap.removeControl(this.mymap.attributionControl);
		}

		// decido se mostrare o nascondere i controlli dello zoom
		if (this.showZoomControl) {
			this.mymap.addControl(this.mymap.zoomControl);
		} else {
			this.mymap.removeControl(this.mymap.zoomControl);
		}

    // imposto il sistema da usare nella scala
		this.controlScale = L.control.scale({
			imperial: this.useImperialScale,
			metric: !this.useImperialScale
		});
		// mostro o nascondo la scala nella mappa
		if (this.showScaleControl) {
			this.controlScale.addTo(this.mymap);
		} else {
			this.controlScale.remove();
		}

		// imposto lo zoom minimo e massimo della mappa
		this.minZoom = 1,
		this.maxZoom = 18,
		// imposto il layer base
		this.tileLayer = L.tileLayer(this.costanti.tileLayer[this.tileLayerSelezionato]['tiles'], {
			minZoom: this.minZoom,
			maxZoom: this.maxZoom,
			attribution: this.costanti.tileLayer[this.tileLayerSelezionato]['attribution'],
			id: 'tileLayer'
		});
		// aggiungo il layer alla mappa
		this.tileLayer.addTo(this.mymap);

		this.lastLeft = 0;
		this.lastTop = 0;
		this.lastRight = 0;
		this.lastBottom = 0;
		this.lastWinWidth = 0;
		this.lastWinHeight = 0;

		this.updatePosition(true);
		this.runtime.tickMe(this);

		// MAP STATE CHANGE EVENTS
		// Fired when the map is resized.
		this.mymap.on('resize ', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnResize, this);	});
		// Fired when the map is destroyed with remove method.
		this.mymap.on('unload ', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnUnload, this);	});
		// Fired when the map needs to redraw its content (this usually happens on map zoom or load). Very useful for creating custom overlays.
		this.mymap.on('viewreset ', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnViewReset, this);	});
		// Fired when the map is initialized (when its center and zoom are set for the first time).
		this.mymap.on('load', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnLoad, this);	});
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		this.mymap.on('zoomstart', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnZoomStart, this);	});
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		this.mymap.on('movestart', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMoveStart, this);	});
		// Fired repeatedly during any change in zoom level, including zoom and fly animations.
		this.mymap.on('zoom', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnZoom, this);	});
		// Fired repeatedly during any movement of the map, including pan and fly animations.
		this.mymap.on('move', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMove, this);	});
		// Fired when the map has changed, after any animations.
		this.mymap.on('zoomend', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnZoomEnd, this);	});
		// Fired when the center of the map stops changing (e.g. user stopped dragging the map).
		this.mymap.on('moveend', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMoveEnd, this);	});

		// INTERACTION EVENTS
		// Fired when the user clicks (or taps) the map.
		this.mymap.on('click', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnClick, this);	});
		// Fired when the user double-clicks (or double-taps) the map.
		this.mymap.on('dblclick', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnDblClick, this);	});
		// Fired when the user pushes the mouse button on the map.
		this.mymap.on('mousedown', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMouseDown, this);	});
		// Fired when the user releases the mouse button on the map.
		this.mymap.on('mouseup', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMouseUp, this);	});
		// Fired when the mouse enters the map.
		this.mymap.on('mouseover', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMouseOver, this);	});
		// Fired when the mouse leaves the map.
		this.mymap.on('mouseout', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMouseOut, this);	});
		// Fired while the mouse moves over the map.
		this.mymap.on('mousemove', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnMouseMove, this);	});
		// Fired when the user pushes the right mouse button on the map, prevents default browser context menu from showing if there are listeners on this event. Also fired on mobile when the user holds a single touch for a second (also called long press).
		this.mymap.on('contextmenu', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnContextMenu, this);	});
		// Fired when the user presses a key from the keyboard while the map is focused.
		this.mymap.on('keypress', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnKeyPress, this);	});
		// Fired before mouse click on the map (sometimes useful when you want something to happen on click before any existing click handlers start running).
		this.mymap.on('preclick', () => { this.runtime.trigger(cr.plugins_.StraniAnelli_Leaflet.prototype.cnds.OnPreClick, this);	});
	};

	// per far sparire il div quando la mappa viene eliminata
	instanceProto.onDestroy = function() {
		if(document.getElementById(this.mapId)){
    	const mappaDaEliminare = document.getElementById(this.mapId);
			mappaDaEliminare.parentNode.removeChild(mappaDaEliminare);
		} else {
    	return;
		}
	};

	instanceProto.updatePosition = function(first) {
		if(!document.getElementById(this.mapId)) {
			return;
		}

		const elem = document.getElementById(this.mapId);

		let left = this.layer.layerToCanvas(this.x, this.y, true);
		let top = this.layer.layerToCanvas(this.x, this.y, false);
		let right = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, true);
		let bottom = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, false);

		const rightEdge = this.runtime.width / this.runtime.devicePixelRatio;
		const bottomEdge = this.runtime.height / this.runtime.devicePixelRatio;

		// Is entirely offscreen or invisible: hide
		if (!this.visible || !this.layer.visible || right <= 0 || bottom <= 0 || left >= rightEdge || top >= bottomEdge) {
			elem.style.display = 'none';
			return;
		}

		if (!this.visible)
		{
			this.elem.style.display = 'none';
		}

		// Truncate to canvas size
		if (left < 1)
			left = 1;
		if (top < 1)
			top = 1;
		if (right >= rightEdge)
			right = rightEdge - 1;
		if (bottom >= bottomEdge)
			bottom = bottomEdge - 1;

		var curWinWidth = window.innerWidth;
		var curWinHeight = window.innerHeight;

		// Avoid redundant updates
		if (!first && this.lastLeft === left && this.lastTop === top && this.lastRight === right && this.lastBottom === bottom && this.lastWinWidth === curWinWidth && this.lastWinHeight === curWinHeight)
		{
			if (!this.visible)
			{
				this.elem.style.display = 'none';
			}
			return;
		}
		this.lastLeft = left;
		this.lastTop = top;
		this.lastRight = right;
		this.lastBottom = bottom;
		this.lastWinWidth = curWinWidth;
		this.lastWinHeight = curWinHeight;

		const offx = Math.round(left) + this.runtime.canvas.offsetLeft;
		const offy = Math.round(top) + this.runtime.canvas.offsetTop;
		elem.style.position = 'absolute';
		elem.style.left = offx + 'px';
		elem.style.top = offy + 'px';
		elem.style.width = Math.round(right - left) + 'px';
		elem.style.height = Math.round(bottom - top) + 'px';
	};

	// controllo ogni tick se la mappa si è o meno spostata
	instanceProto.tick = function() {
		this.updatePosition();
	};

	instanceProto.draw = function(ctx) { };
  instanceProto.drawGL = function(glw) { };
	instanceProto.saveToJSON = function () {};
	instanceProto.loadFromJSON = function (o)	{};

	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections) {};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};

		// MAP STATE CHANGE EVENTS
		Cnds.prototype.OnResize = function () { return true;	};
		Cnds.prototype.OnUnload = function () { return true;	};
		Cnds.prototype.OnViewReset = function () { return true;	};
		Cnds.prototype.OnLoad = function () { return true;	};
		Cnds.prototype.OnZoomStart = function () { return true;	};
		Cnds.prototype.OnMoveStart = function () { return true;	};
		Cnds.prototype.OnZoom = function () { return true;	};
		Cnds.prototype.OnMove = function () { return true;	};
		Cnds.prototype.OnZoomEnd = function () { return true;	};
		Cnds.prototype.OnMoveEnd = function () { return true;	};

		// INTERACTION EVENTS
		Cnds.prototype.OnClick = function () { return true;	};
		Cnds.prototype.OnDblClick = function () { return true;	};
		Cnds.prototype.OnMouseDown = function () { return true;	};
		Cnds.prototype.OnMouseUp = function () { return true;	};
		Cnds.prototype.OnMouseOver = function () { return true;	};
		Cnds.prototype.OnMouseOut = function () { return true;	};
		Cnds.prototype.OnMouseMove = function () { return true;	};
		Cnds.prototype.OnContextMenu = function () { return true;	};
		Cnds.prototype.OnKeyPress = function () { return true;	};
		Cnds.prototype.OnPreClick = function () { return true;	};

		pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

		// mostro o nascondo la mappa
		Acts.prototype.SetAttributionVisible = function (v)	{
			this.showAttribution = (v === 0) ? false : true;
			if (this.showAttribution) {
				this.mymap.addControl(this.mymap.attributionControl);
			} else {
				this.mymap.removeControl(this.mymap.attributionControl);
			}
		};

		// mostro o nascondo i pulsanti dello zoom
		Acts.prototype.SetZoomControlVisible = function (v)	{
			this.showZoomControl = (v === 0) ? false : true;
			if (this.showZoomControl) {
				this.mymap.addControl(this.mymap.zoomControl);
			} else {
				this.mymap.removeControl(this.mymap.zoomControl);
			}
		};

		// mostro o nascondo la barra della scala
		Acts.prototype.SetControlScaleVisible = function (v)	{
			this.showScaleControl = (v === 0) ? false : true;
			if (this.showScaleControl) {
				this.controlScale.addTo(this.mymap);
			} else {
				this.controlScale.remove();
			}
		};

		// decido se usare o meno la scala metricodecimale oppure quella imperiale
		Acts.prototype.SetImperialOrMetricScale = function (v)	{
			this.useImperialScale = (v === 1) ? false : true;
			this.controlScale.remove();
			this.controlScale = L.control.scale({
				imperial: this.useImperialScale,
				metric: !this.useImperialScale
			});
			if (this.showScaleControl) {
				this.controlScale.addTo(this.mymap);
			} else {
				this.controlScale.remove();
			}
		};

		instanceProto.ChangeBaseTileLayerByNumericID = function (idLayer) {
			this.tileLayerSelezionato =  this.comboItems.tileLayer[idLayer];
			this.tileLayer.removeFrom(this.mymap);
			// imposto il layer base
			this.tileLayer = L.tileLayer(this.costanti.tileLayer[this.tileLayerSelezionato]['tiles'], {
				minZoom: this.minZoom,
				maxZoom: this.maxZoom,
				attribution: this.costanti.tileLayer[this.tileLayerSelezionato]['attribution'],
				id: 'tileLayer'
			});
			this.tileLayer.addTo(this.mymap);
		};

		// imposto un'altra mappa come base (scelta da un'elenco)
		Acts.prototype.ChangeBaseTileLayerByNumericID = function (idLayer) {
			this.ChangeBaseTileLayerByNumericID(idLayer);
		};

		Acts.prototype.ChangeBaseTileLayerByComboBox = function (idLayer) {
			this.ChangeBaseTileLayerByNumericID(idLayer);
		};

		// imposto un'altra mappa come base (inserendo il nome ristretto)
		Acts.prototype.ChangeBaseTileLayerByName = function (nomeLayer) {
			// imposto la proprietà con il nome del layer
			this.elencoProprieta.tileLayer = idLayer;
			this.tileLayerSelezionato =  this.comboItems.tileLayer[idLayer];
		};

		// imposto url e attribution di una mappa custom
		Acts.prototype.SetCustomBaseTileLayer = function (url, attr) {
			this.costanti.tileLayer.custom.tiles = url;
			this.costanti.tileLayer.custom.attribution = attr;
		};

		pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};

		// Returns the current zoom level of the map view
		Exps.prototype.GetZoom = function (ret) {	ret.set_int(this.mymap.getZoom()); }
		// Returns the geographical center of the map view
		Exps.prototype.GetCenterLat = function (ret) { ret.set_float(this.mymap.getCenter().lat);	}
		// Returns the geographical center of the map view
		Exps.prototype.GetCenterLng = function (ret) { ret.set_float(this.mymap.getCenter().lng); }
		// Returns the minimum zoom level of the map (if set in the minZoom option of the map or of any layers), or 0 by default.
		Exps.prototype.GetMinZoom = function (ret) { ret.set_int(this.mymap.getMinZoom()); }
		// Returns the maximum zoom level of the map (if set in the maxZoom option of the map or of any layers).
		Exps.prototype.GetMaxZoom = function (ret) { ret.set_int(this.mymap.getMaxZoom()); }
		// Returns the current size of the map container (in pixels).
		Exps.prototype.GetSizeX = function (ret) { ret.set_float(this.mymap.getSize().x); }
		Exps.prototype.GetSizeY = function (ret) { ret.set_float(this.mymap.getSize().y); }
		// Returns the projected pixel coordinates of the top left point of the map layer (useful in custom layer and overlay implementations).
		Exps.prototype.GetPixelOriginX = function (ret) { ret.set_float(this.mymap.getPixelOrigin().x); }
		Exps.prototype.GetPixelOriginY = function (ret) { ret.set_float(this.mymap.getPixelOrigin().y); }

		// Returns the geographical bounds visible in the current map view
		Exps.prototype.GetBoundsJSON = function (ret) { ret.set_string(JSON.stringify(this.mymap.getBounds()));	}
		// Returns the bounds of the current map view in projected pixel coordinates (sometimes useful in layer and overlay implementations).
		Exps.prototype.GetPixelBoundsJSON = function (ret) { ret.set_string(JSON.stringify(this.mymap.getPixelBounds()));	}

		pluginProto.exps = new Exps();

}());
