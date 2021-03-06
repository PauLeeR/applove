/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("col-4"));
 	var work = document.getElementById("modal-work");
 	
 	var modal, close, imagenC;
 	boxes.forEach(function(box){
 		box.addEventListener("click", function(){
 			work.innerHTML = ""; //esto es para dejar en blanco todo lo que está dentro del modal(es) work
 			modal = document.createElement("div");
 			modal.classList.add("modal-work");
 			modal.innerHTML = box.innerHTML;

 			work.appendChild(modal);
 			work.classList.remove("hide");
 			
 			/*bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;
 			modal.appendChild(bodyModal);*/

 			//creando elementos de manera dinàmica, aquí el ícono X de cerrar irá en otro div
 			close = document.createElement("div");
 			close.classList.add("close");
 			//close.innerHTML = "imagenC"

 			//creo el elemento imagen con su src 
 			//imagenC = document.createElement("img"); 
 			//creo otro tipo de elemento (i) porque la imagen close (X) que originalmente saqué de un ej q hizo onlyblank es blanca y no se ve con las imagenes que tienen fondo blanco
 			imagenC = document.createElement("i");
 			//le doy class 
 			imagenC.classList.add("fa", "fa-times-circle-o");

 			//imagenC.setAttribute("aria-hidden='true'");
 			//imagenC.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");

			//<i class="fa fa-times-circle-o" aria-hidden="true"></i>

 			close.appendChild(imagenC); //el icono X se "apenda" a close y esto al modal
			work.appendChild(close); 		
 			
 			//work.appendChild(modal);
 			//bodyModal.appendChild(close);
 			close.addEventListener("click", function(){
 				work.classList.add("hide");
 				//work.removeChild(modal);
 			});
 		//alert(box.innerHTML);
 	});
 	});

 })();


 //querySelector busca el primer elemento de...(devuelve solo un elemento, el primero)

 /*funcion autoinvocada

 (function miAlert(){
	....
 })()

 Es equivalente a:

 function miAlert(){
	...
 };

 miAlert(); */

