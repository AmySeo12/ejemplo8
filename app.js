var numeros = parseInt(prompt("Escoja una opción \n" + "1. Suma \n" + 
	"2. Resta \n" + 
	"3. Multiplicación \n" + 
	"4. División \n" + 
	"5. Módulo \n" + 
	"6. Mayor, menor o igual"))
if (numeros < 7) {
	var número1 = parseInt(prompt("Ingrese tu primer número"))
	var número2 = parseInt(prompt("Ingrese tu segundo número"))
	switch(numeros){ 
		case 1 :
		window.alert("La suma es: " + (número1 + número2))
		break
		case 2 :
		window.alert("La reste es: " + (número1 - número2))
		break
		case 3 :
		window.alert("El producto es: " + (número1 * número2))
		break
		case 4 :
		window.alert("La división es: " + (número1 / número2))
		break
		case 5 :
		window.alert("El módulo es: " + (número1 % número2))
		break
		case 6 :
			if (número1 > número2)
				window.alert(número1 + " es mayor " + número2);
			else if(número2 > número1)
				window.alert(número1 + " es menor " + número2);
			else 
				window.alert(número1 + " es igual a " + número2);
		break
	}
} else
	window.alert("Está no es una opción")