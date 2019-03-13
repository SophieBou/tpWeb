
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
this.PositionInitX =0
this.PositionInitY =0
this.positionFinalY =0
this.positionFinalX =0
	// Developper les 3 fonctions gérant les événements
function getPression(){

}

function getRelachement(){

}


function getDeplacement(){

}

	// Associer les fonctions précédentes aux évènements du canvas.
	
	canvas.addEventListener('mousedown', this.getPression, false);
canvas.addEventListener('mousemove', this.getDeplacement, false);
canvas.addEventListener('mouseup', this.getRelachement, false);
};




// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



