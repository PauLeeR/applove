/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("col-4"));
 	var work = document.getElementById("work");
 	
 	var modal, bodyModal, close, imagenC;
 	boxes.forEach(function(box){
 		box.addEventListener("click", function(){
 			//modal.innerHTML = "";
 			modal = document.createElement("div");
 			modal.classList.add("modal-work");
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;
 			modal.appendChild(bodyModal);  
 			//creando eleementos de manera dinàmica
 			close = document.createElement("div");
 			close.classList.add("close");
 			//close.innerHTML = "imagenC"
 			imagenC = document.createElement("img");
 			imagenC.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			close.appendChild(imagenC);
			modal.appendChild(close); 		
 			work.appendChild(modal);
 			//bodyModal.appendChild(close);
 			
 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 				work.removeChild(modal);
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

