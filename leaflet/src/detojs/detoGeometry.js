"use strict";

class DetoGeometry_Leaflet {
  // passo un oggetto per poter semplificare la gestione dei parametri più avanti
  constructor(obj, iRenderer = null) {

    if (obj._inst) {
      // per capire se si è nell'editor oppure no
      this.onEditor = true;
      this.iRenderer = iRenderer;
      this.contesto = 'editor';
      // per disegnares sull'editor
      // this.bbox = obj._inst.GetBoundingBox();
      this.angle = obj._inst.GetAngle();
      this.ruotaAttornoAdX = obj._inst.GetX();
      this.ruotaAttornoAdY = obj._inst.GetY();
      // console.log(obj._inst);
    } else {
      // non si è nell'editor
      this.onEditor = false;
      this.iRenderer = null;
      // per gestire i metodi di disegno mi serve capire in che contesto sono
      // i metodi cambiano in base alla canvas, se è 2d oppure webgl
      this.contextGL = !obj.runtime.glwrap ? false : true;
      this.contesto = this.contextGL ? 'webgl' : 'c2';
      // mi trascino dentro il wrap di WebGL fatto da Scirra
      this.glw = obj.runtime.glwrap;
      // mi trascino dentor il context per la canvas '2d'
      this.ctx = obj.runtime.ctx;

      // l'angolo di rotazione dell'oggetto (in radianti)
      this.obj = obj;
      // this.bbox = obj.bbox;
      this.angle = obj.angle;
      // this.bquad = obj.bquad;
      this.ruotaAttornoAdX = obj.x;
      this.ruotaAttornoAdY = obj.y;
    }
  }

  // Set the current color by directly passing the RGBA components.
  setColorRgba(r, g, b, a = 1) {
    switch (this.contesto) {
      case 'editor':
        this.iRenderer.SetColorRgba(r > 1 ? r / 255.0 : r, g > 1 ? g / 255.0 : g, b > 1 ? b / 255.0 : b, a);
        break;
      case 'c2':
        this.ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        break;
      default: // webgl
        this.glw.setColorFillMode(r > 1 ? r / 255.0 : r, g > 1 ? g / 255.0 : g, b > 1 ? b / 255.0 : b, a);
    }
  }

  // Set only the alpha component of the current color. Note this does not affect the RGB components.
  setOpacity(op = 1) {
    switch (this.contesto) {
      case 'editor':
        this.iRenderer.SetOpacity(op);
        break;
      case 'c2':
        this.ctx.globalAlpha = op;
        break;
      default: // webgl
        this.glw.setOpacity(op);
    }
  }

  // ruota un punto attorno a un altro punto
  // serve per disegnare all'interno di oggetti ruotati
  rotatePOINT ({ ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY, x = 0, y = 0, angle = this.angle, isRadiant = true }) {
      if (angle === 0) {
        return {
          x: x,
          y: y
        };
      }

      const rad = isRadiant ? angle : angle * Math.PI / 180.0;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const newX = (cos * (x - ruotaAttornoAdX)) - (sin * (y - ruotaAttornoAdY)) + ruotaAttornoAdX;
      const newY = (cos * (y - ruotaAttornoAdY)) + (sin * (x - ruotaAttornoAdX)) + ruotaAttornoAdY;
      return {
        x: newX,
        y: newY
      };
  }

  // restituisce un punto ruotato di angle attorno ad x,y e alla distanza definita da distance
  rotatePOINTwithAngleDistance ({ x = 0, y = 0, angle = this.angle, distance = 0, isRadiant = true }) {
        const rad = isRadiant ? angle : angle * Math.PI / 180.0;

        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const newX = cos * distance + x;
        const newY = sin * distance + y;

        return {
          x: newX,
          y: newY
        };
  }

  // ruota un rettagolo e restituice le coordinate dei vertici come obj {tlx, tly, trx, try_, brx, bry, blx, bly}
  rotateRECT ({ x = 0, y = 0, width = 0, height = 0, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    let tlx = x;
    let tly = y;
    let trx = x + width;
    let try_ = y;
    let brx = x + width;
    let bry = y + height;
    let blx = x;
    let bly = y + height;

    if (this.contesto !== 'editor') {
      ruotaAttornoAdX = this.obj.x;
      ruotaAttornoAdY = this.obj.y;
    }

    let rotazione = {
      ruotaAttornoAdX: ruotaAttornoAdX,
      ruotaAttornoAdY: ruotaAttornoAdY,
      x: 0,
      y: 0,
      angle: angle,
      isRadiant: true
    };

    let newPoint = this.rotatePOINT(rotazione);

    rotazione.x = tlx;
    rotazione.y = tly;
    newPoint = this.rotatePOINT(rotazione);
    tlx = newPoint.x;
    tly = newPoint.y;

    rotazione.x = trx;
    rotazione.y = try_;
    newPoint = this.rotatePOINT(rotazione);
    trx = newPoint.x;
    try_ = newPoint.y;

    rotazione.x = brx;
    rotazione.y = bry;
    newPoint = this.rotatePOINT(rotazione);
    brx = newPoint.x;
    bry = newPoint.y;

    rotazione.x = blx;
    rotazione.y = bly;
    newPoint = this.rotatePOINT(rotazione);
    blx = newPoint.x;
    bly = newPoint.y;

    return { tlx, tly, trx, try_, brx, bry, blx, bly };
  }

  // ruota un rettangolo (nella forma di QUAD) e restituisce le coordinate dei vertici come obj {tlx, tly, trx, try_, brx, bry, blx, bly}
  rotateQUAD ({ tlx = 0, tly = 0, trx = 0, try_ = 0, brx = 0, bry = 0, blx = 0, bly = 0, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (this.contesto !== 'editor') {
      ruotaAttornoAdX = this.obj.x;
      ruotaAttornoAdY = this.obj.y;
    }

    let rotazione = {
      ruotaAttornoAdX: ruotaAttornoAdX,
      ruotaAttornoAdY: ruotaAttornoAdY,
      x: 0,
      y: 0,
      angle: angle,
      isRadiant: true
    };

    let newPoint = this.rotatePOINT(rotazione);

    rotazione.x = tlx;
    rotazione.y = tly;
    newPoint = this.rotatePOINT(rotazione);
    tlx = newPoint.x;
    tly = newPoint.y;

    rotazione.x = trx;
    rotazione.y = try_;
    newPoint = this.rotatePOINT(rotazione);
    trx = newPoint.x;
    try_ = newPoint.y;

    rotazione.x = brx;
    rotazione.y = bry;
    newPoint = this.rotatePOINT(rotazione);
    brx = newPoint.x;
    bry = newPoint.y;

    rotazione.x = blx;
    rotazione.y = bly;
    newPoint = this.rotatePOINT(rotazione);
    blx = newPoint.x;
    bly = newPoint.y;

    return { tlx, tly, trx, try_, brx, bry, blx, bly };
  }

  // disegna un rettangolo prendendo la x, la y e poi altezza e larghezza
  drawFillRect ({ x = 0, y = 0, width = 0, height = 0, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (width * height === 0) {
      return;
    }

    // mi ricavo le coordinate di vertici
    const n = this.rotateRECT({ x, y, width, height, angle, isRotated, ruotaAttornoAdX, ruotaAttornoAdY });

    switch (this.contesto) {
      case 'editor':
        this.iRenderer.SetColorFillMode();
        this.iRenderer.ConvexPoly([n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly]);
        // this.iRenderer.Quad2(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly);
        break;
      case 'c2':
        this.ctx.beginPath();
        this.ctx.moveTo(n.tlx, n.tly);
        this.ctx.lineTo(n.trx, n.try_);
        this.ctx.lineTo(n.brx, n.bry);
        this.ctx.lineTo(n.blx, n.bly);
        this.ctx.closePath();
        this.ctx.fill();
        break;
      default: // webgl
        this.glw.quad(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly);
    }

  }

  // disegna un punto (come un rettangolo con però altezza uguale all'altezza)
  drawPoint ({ x = 0, y = 0, thick = 1, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (thick === 0) {
      return;
    }
    // this.drawFillRect({x: x, y: y, width: size, height: size, angle: angle, isRotated: isRotated, ruotaAttornoAdX: ruotaAttornoAdX, ruotaAttornoAdY: ruotaAttornoAdY});
    this.drawFillRect({
      x,
      y,
      width: thick,
      height: thick,
      angle,
      isRotated,
      ruotaAttornoAdX,
      ruotaAttornoAdY
    });
  }

  calcolaPuntiPerFreccia({ x1 = 0, y1 = 0, x2 = 0, y2 = 0, distanzaDaPunta = 0, distanzaDaLineaDoppio = 0 }) {
    const a = {
      x: x1,
      y: y1
    };

    const b = {
      x: x2,
      y: y2
    };

    const dir = {
      x: b.x - a.x,
      y: b.y - a.y
    };

    const dirMOD = Math.sqrt(( dir.x * dir.x ) + ( dir.y * dir.y ));

    const q = {
      x: dir.y / dirMOD,
      y: -dir.x / dirMOD
    };

    const h = distanzaDaPunta; // è la distanza dalla punta della riga
    const w = distanzaDaLineaDoppio; // è la distanza dalla retta

    const c = {
      x: b.x - (h * dir.x) + (w * q.x/2.0),
      y: b.y - (h * dir.y) + (w * q.y/2.0),
    }

    const d = {
      x: b.x - (h * dir.x) - (w * q.x/2.0),
      y: b.y - (h * dir.y) - (w * q.y/2.0),
    }

    return {
      c,
      d
    }
  }

  // disegna una riga di spessore thick partendo dalle coordinate del punto di partenza e del punto di arrivo
  drawLineFromPointToPoint ({ x1 = 0, y1 = 0, x2 = 0, y2 = 0, thick = 1, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {

    if ((x1 === x2 && y1 === y2) || (thick === 0)) {
      return;
    }

    // const tlx = x1 - ( thick/2 );
    // const tly = y1 - ( thick/2 );
    // const trx = x1 + ( thick/2 );
    // const try_ = y1 + ( thick/2 );
    // const brx = x2 + ( thick/2 );
    // const bry = y2 + ( thick/2 );
    // const blx = x2 - ( thick/2 );
    // const bly = y2 - ( thick/2 );

    // https://stackoverflow.com/questions/31462791/find-coordinates-to-draw-arrow-head-isoscele-triangle-at-the-end-of-a-line

    // const a = {
    //   x: x1,
    //   y: y1
    // };
    //
    // const b = {
    //   x: x2,
    //   y: y2
    // };
    //
    // const dir = {
    //   x: b.x - a.x,
    //   y: b.y - a.y
    // };
    //
    // const dirMOD = Math.sqrt(( dir.x * dir.x ) + ( dir.y * dir.y ));
    //
    // const q = {
    //   x: dir.y / dirMOD,
    //   y: -dir.x / dirMOD
    // };
    //
    // const h = 0; // è la distanza dalla punta della riga
    // const w = thick; // è la distanza dalla retta
    //
    // const c = {
    //   x: b.x - (h * dir.x) + (w * q.x/2.0),
    //   y: b.y - (h * dir.y) + (w * q.y/2.0),
    // }
    //
    // const d = {
    //   x: b.x - (h * dir.x) - (w * q.x/2.0),
    //   y: b.y - (h * dir.y) - (w * q.y/2.0),
    // }

    // const tlx = x1;
    // const tly = y1;
    // const trx = x1;
    // const try_ = y1;
    // const brx = c.x;
    // const bry = c.y;
    // const blx = d.x;
    // const bly = d.y;

    const estremoDX = this.calcolaPuntiPerFreccia({x1, y1, x2, y2, distanzaDaPunta: 0, distanzaDaLineaDoppio: thick});
    const estremoSX = this.calcolaPuntiPerFreccia({x1: x2, y1: y2, x2: x1, y2: y1, distanzaDaPunta: 0, distanzaDaLineaDoppio: thick});

    const tlx = estremoSX.c.x;
    const tly = estremoSX.c.y;
    const trx = estremoSX.d.x;
    const try_ = estremoSX.d.y;
    const brx = estremoDX.c.x;
    const bry = estremoDX.c.y;
    const blx = estremoDX.d.x;
    const bly = estremoDX.d.y;

    const n = this.rotateQUAD({tlx, tly, trx, try_, brx, bry, blx, bly, angle, isRotated, ruotaAttornoAdX, ruotaAttornoAdY });

    switch (this.contesto) {
      case 'editor':
      this.iRenderer.SetColorFillMode();
      this.iRenderer.Quad2(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly);
      break;
      case 'c2':
        this.ctx.beginPath();
        this.ctx.moveTo(n.tlx, n.tly);
        this.ctx.lineTo(n.trx, n.try_);
        this.ctx.lineTo(n.brx, n.bry);
        this.ctx.lineTo(n.blx, n.bly);
        this.ctx.closePath();
        this.ctx.fill();
        break;
      default: // webgl
      this.glw.quad(n.tlx, n.tly, n.trx, n.try_, n.brx, n.bry, n.blx, n.bly);
    }
  }

  // disegna una riga di spessore thick partendo dalle coordinate di partenza e dalla lunghezza della riga
  drawLineForLenght ({ x = 0, y = 0, thick = 1, lenght = 0, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (thick * lenght === 0) {
      return;
    }

    const centerX = x;
    const centerY = y - (thick / 2);

    this.drawFillRect({
      x: centerX,
      y: centerY,
      width: lenght,
      height: thick,
      angle,
      isRotated,
      ruotaAttornoAdX,
      ruotaAttornoAdY
    });
  }

  // disegna una riga di spessore thick e con rotazione angle partendo dalle coordinate di partenza e dalla lunghezza della riga
  drawLineRotatedForLenght ({ x = 0, y = 0, thick = 1, lenght = 0, angle = this.angle, isRadiant = true, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (lenght === 0 || thick === 0) {
      return;
    }

    const x1 = x;
    const y1 = y;
    const newPoint = this.rotatePOINTwithAngleDistance({
      x,
      y,
      angle,
      distance: lenght,
      isRadiant
    })
    const x2 = newPoint.x;
    const y2 = newPoint.y;

    this.drawLineFromPointToPoint({
      x1,
      y1,
      x2,
      y2,
      thick,
      isRotated,
      ruotaAttornoAdX,
      ruotaAttornoAdY
    });
  }

  drawPerimeterRect ({ x = 0, y = 0, width = 0, height = 0, thick = 1, angle = this.angle, isRotated = true, ruotaAttornoAdX = this.ruotaAttornoAdX, ruotaAttornoAdY = this.ruotaAttornoAdY }) {
    if (width * height * thick === 0) {
      return;
    }

    let tlx = x;
    let tly = y;
    let trx = x + width;
    let try_ = y;
    let brx = x + width;
    let bry = y + height;
    let blx = x;
    let bly = y + height;

    this.drawLineFromPointToPoint({ x1: tlx, y1: tly, x2: trx, y2: try_, thick, isRotated, ruotaAttornoAdX, ruotaAttornoAdY});
    this.drawLineFromPointToPoint({ x1: trx, y1: try_, x2: brx, y2: bry, thick, isRotated, ruotaAttornoAdX, ruotaAttornoAdY});
    this.drawLineFromPointToPoint({ x1: brx, y1: bry, x2: blx, y2: bly, thick, isRotated, ruotaAttornoAdX, ruotaAttornoAdY});
    this.drawLineFromPointToPoint({ x1: blx, y1: bly, x2: tlx, y2: tly, thick, isRotated, ruotaAttornoAdX, ruotaAttornoAdY});

  }

}
