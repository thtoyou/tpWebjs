
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600
ctx.strokeStyle=0;

// Code temporaire pour tester le DnD

ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affichage de la vue

var rec = new Rectangle(10, 20, 5, '#00CCC0', 500,550);
rec.paint(ctx);
var ligne = new Line(10, 20, 10, '#2ccc00', 150, 500);
ligne.paint(ctx);
var dessin = new Drawing();
//dessin.addShape(rec);
//dessin.addShape(ligne);
dessin.paint(ctx);

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx);

