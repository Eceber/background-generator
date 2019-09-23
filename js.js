var css = document.querySelector("h3"); //donde vamos a poner el codigo del color escogido en el input
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body); //para comprobar que de verdad lo estamos seleccionado 

//el addEventListener es como un onclick o oninput del html para tener el html en el html y js en el js
// color1.addEventListener("input",cambiarColor);

// color2.addEventListener("input",cambiarColor);

function cambiarColor(){
	body.style.background =
		 "linear-gradient(to right, "+color1.value+","+color2.value+")";

	// textContent= sacar el contenido del elemento
	css.textContent = body.style.background+";";
}


