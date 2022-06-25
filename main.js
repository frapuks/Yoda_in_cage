let cageSize = prompt("Choisissez la taille de la cage");

let x = Math.floor(cageSize / 2);
let y = Math.floor(cageSize / 2);

// Définition du tableau
let cage = document.createElement('table');
cage.style.borderCollapse = `collapse`;
cage.style.margin = `200px auto`;
out.appendChild(cage);

// Création des lignes et des cellules
for (a = 0; a < cageSize; a++) {
	let tr = cage.insertRow();
	for (b = 0; b < cageSize; b++) {
		let td = tr.insertCell();
		td.style.border = `1px solid black`;
		td.style.width = `100px`;
		td.style.height = `100px`;
	}
}

// ----------------FONCTIONS----------------

// Placement du pion
function placement(){
	cage.rows[x].cells[y].style.backgroundImage = `url("baby_yoda.jpg")`;
	cage.rows[x].cells[y].style.backgroundSize = `cover`;
}

//Suppression du pion
function clear(){
	cage.rows[x].cells[y].style.backgroundImage = null;
}

// Déplacement du pion
function deplacement(key){
	if(key.code === 'ArrowUp' && x > 0) {
		clear();
		x--;
	}
	if(key.code === 'ArrowDown' && x < cageSize-1) {
		clear();
		x++;
	}
	if(key.code === 'ArrowLeft' && y > 0) {
		clear();
		y--;
	}10
	if(key.code === 'ArrowRight' && y < cageSize-1) {
		clear();
		y++;
	}
	placement();
}


// -----------------PROGRAMME PRINCIPAL-----------------
window.addEventListener('keydown', deplacement);
placement();