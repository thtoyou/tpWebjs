// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.startX, this.startY, this.height, this.width);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {

    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArray.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

function updateShapeList(id, shape) {
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', toDom(id, shape));
}

function toDom(id, shape) {
    if (shape && typeof shape === 'object') {
        let innerHtml = `<li id="liRemove${id}">`
        console.log(shape.color);
        if (shape.type === "Rectangle") {
            innerHtml += `<span style="color:` + shape.color + `"> Rectangle n° ${id}</span> `;}
        else if (shape.type === "Line"){
            innerHtml += '<span style="color:' + shape.color + `"> Ligne n° ${id}</span> `;}
        innerHtml += `<button type="button" class="btn btn-default remove" id="remove${id}">
        <span class="glyphicon glyphicon-remove-sign"></span> </button>` ;
        return innerHtml +`</li>`
    }
}


