"use strict";

var counter;

function moduloPage(){
	console.log("Holi");
	var controler=controler||{};
	counter = 1;
	setInterval(startMethod,5000);
};

function startMethod(){
	var opacityDelay = 50;
	var opacityChange = 0.05;
	var imagen = $("#background");
	var cambiar = true;

	var mostrar = function(opacity){
		opacity = opacity + opacityChange;
		imagen.css('opacity', opacity);
		if (opacity>= 1){
			return;
		}
		setTimeout(function(){
			mostrar(opacity);
		}, opacityDelay);
	};

	var desvanecer = function(opacity){
		opacity = opacity - opacityChange;
		imagen.css('opacity', opacity);
		if (opacity<=0){
			imagen.trigger('mostrar');
			return;
		}
		setTimeout(function(){
			desvanecer(opacity);
		}, opacityDelay)
	};

	imagen.on('mostrar', function(event) {
  	document.getElementById("background").src = "./img/downloads/" + counter +".jpg";
		var elemento = document.querySelector("#photo");
		setTimeout(	function(){
			elemento.style.border = "5px solid "+'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		},150);
  	mostrar(0);
  });

  imagen.on('siguiente', function(event) {
  	desvanecer(1);
  });




	if (counter ===6){
		counter = 0;
	}
	counter = counter + 1;
	desvanecer(1);
};

