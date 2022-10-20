const editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;
    this.generatedid = 0;
    document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
    document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
    document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
    document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;
    new DnD(canvas, this);
    this.onInteractionStart = function (DnD) {

        if (this.currEditingMode === editingMode.rect) {
            this.currentShape = new Rectangle(DnD.initX, DnD.initY, this.currLineWidth, this.currColour, 0, 0);
        }
        if (this.currEditingMode === editingMode.line) {
            this.currentShape = new Line(DnD.initX, DnD.initY, this.currLineWidth, this.currColour, DnD.initX, DnD.initY);
        }
    }.bind(this);
    this.onInteractionUpDate = function (DnD) {
        drawing.paint(ctx, canvas);
        if (this.currEditingMode === editingMode.rect) {
            this.currentShape.height = (DnD.finalX - this.currentShape.startX);
            this.currentShape.width = (DnD.finalY - this.currentShape.startY);
        }
        if (this.currEditingMode === editingMode.line) {
            this.currentShape.endX = DnD.finalX;
            this.currentShape.endY = DnD.finalY;
        }
        this.currentShape.paint(ctx);

    }.bind(this);
    this.onInteractionEnd = function (DnD) {
        if (this.currentShape != 0) {
            let shapeId = this.generateId();
            console.log('shapeID:');
            console.log(shapeId);
            console.log('shape:');
            console.log(this.currentShape);
            drawing.shapeArray.set(shapeId, this.currentShape);
            drawing.paint(ctx, canvas);
            updateShapeList(shapeId, this.currentShape);
            this.currentShape.paint(ctx);
            document.getElementById("remove" + shapeId).onclick = (event) => this.remove(drawing, event.currentTarget.id.substring(6), ctx, canvas);

        }
        this.currentShape = 0;
    }.bind(this);
    this.generateId = function () {
        this.generatedid++;
        return this.generatedid;
    }
    this.remove = function (drawing, id, ctx, canvas) {
        drawing.shapeArray.delete(id);
        document.getElementById("liRemove" + id).remove();
        drawing.paint(ctx, canvas);
    }
    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


