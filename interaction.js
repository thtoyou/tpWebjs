// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    this.initX = 0;
    this.initY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.isclicked = false;

// Developper les 3 fonctions gérant les événements
    this.clic = function (evt) {
        let pos = getMousePosition(canvas, evt);
        this.initX = pos.x;
        this.initY = pos.y;
        this.isclicked = true;
        interactor.onInteractionStart(this);
    }.bind(this);

    this.drag = function (evt) {
        if (this.isclicked) {
            let pos = getMousePosition(canvas, evt);
            this.finalX = pos.x;
            this.finalY = pos.y;
            this.isclicked = true;
            interactor.onInteractionUpDate(this);
        }
    }.bind(this);

    this.drop = function (evt) {
        let pos = getMousePosition(canvas, evt);
        this.finalX = pos.x;
        this.finalY = pos.y;
        this.isclicked = false;
        interactor.onInteractionEnd(this);

    }.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.clic, false);
    canvas.addEventListener('mousemove', this.drag, false);
    canvas.addEventListener('mouseup', this.drop, false);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



