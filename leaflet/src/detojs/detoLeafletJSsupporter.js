class DetoLeafletJSsupporter {

  // arrotonda un numero al decimale selezionato
  static round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  // restituisce le coordinate mostrate nella mappa
  static getCoordinateVista(mymap) {
    const bounds = mymap.getBounds();
    const center = mymap.getCenter(); // {lat, lng}
    const coordinateVista = {
        ovest: this.round(bounds.getWest(), 2),
        nord: this.round(bounds.getNorth(), 2),
        est: this.round(bounds.getEast(), 2),
        sud: this.round(bounds.getSouth(), 2),
        centerLAT: this.round(center.lat, 2),
        centerLNG: this.round(center.lng, 2),
        zoom: mymap.getZoom(),
        bounds: bounds
    };
    return coordinateVista;
  }
}


/*
const bounds = this.mymap.getBounds();
const coordinateVista = {
    ovest: DetoLeafletJSsupporter.round(bounds.getWest(), 2),
    nord: DetoLeafletJSsupporter.round(bounds.getNorth(), 2),
    est: DetoLeafletJSsupporter.round(bounds.getEast(), 2),
    sud: DetoLeafletJSsupporter.round(bounds.getSouth(), 2),
    zoom: this.mymap.getZoom(),
    bounds: bounds
};
ret.set_float(number * 2);
*/
