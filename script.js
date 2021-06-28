// ********************* Ejercicio 1 *********************
// a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
// b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
// c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.

// Punto 1a.
// let frutas = [];
// for (i = 0; i < 5; i++) {
//     let item = prompt("Ingrese el nombre de 5 frutas:");
//     frutas.push(item);
// }
// console.log(frutas);



// Punto 1b.
// let frutas = [];
// let item;
// let flag = true;
// while (flag) {
//     item = prompt("Ingrese nombres de frutas. Presione 'E' para terminar:");
//     if (item === "E" || item === "e"){
//         flag = false;
//         alert("El dato ingresado no es válido");
//     } else {                
//         frutas.push(item);
//         console.log(item);                
//     }        
// }
// console.log(frutas);



// Punto 1c.
// let lista1 = [];
// for (i = 0; i < 5; i++) {
//     let item = prompt("Ingrese el nombre de 5 frutas:");
//     console.log(item);
//     lista1.push(item);
// }
// alert("Los elementos de la primera lista son: " + lista1);

// let lista2 = [];
// let producto;
// let flag = true;
// while (flag) {
//     producto = prompt("Ingrese nombres de todas las frutas que desee." + "\n" + "Presione 'E' para terminar:");
//     if (producto === "E" || producto === "e"){
//         flag = false;
//         alert("El dato ingresado no es válido");
//     } else {                
//         lista2.push(producto);
//         console.log(producto);                
//     }        
// }
// alert("Los elementos de la segunda lista son: " + lista2);

// let listaCombinada1 = lista1.concat(lista2);
// alert("Estos son los elementos de Lista 1 más Lista 2:" + "\n" + listaCombinada1);
// let listaCombinada2 = lista2.concat(lista1);
// alert("Estos son los elementos de Lista 2 más Lista 1:" + "\n" + listaCombinada2);





// ********************* Ejercicio 2 *********************
// Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.

// let ciudades = [];
// for (i=0; i<10; i++) {
//     let cityName = prompt("Ingrese el nombre de 10 ciudades");
//     ciudades.push(cityName);
//     console.log(ciudades);
// }
// let seleccion = parseInt(prompt("Ingrese un número indicando la posición de la ciudad que desea ver." + "\n" + "Los valores posibles van del 0 al 9:")) ;
// alert(ciudades[seleccion]);






// ********************* Ejercicio 3 *********************
// Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio, y desde el final del array.

// let ciudades = [];
// for (i=0; i<10; i++) {
//     let cityName = prompt("Ingrese el nombre de 10 ciudades");
//     ciudades.push(cityName);
//     console.log(ciudades);
// }
// let remItems = parseInt(prompt("Ingrese la cantidad de ciudades que desee quitar de la lista:"));
// let option = parseInt(prompt("Si desea remover las primeras ciudades, ingrese '1'. Para remover las últimas, presione '2':"));
// if (option === 1){
//     for (i=0; i<remItems; i++) {
//         ciudades.shift();
//         console.log(ciudades);
//     }    
// } else if (option === 2) {
//     for (i=0; i<remItems; i++) {
//         ciudades.pop();
//         console.log(ciudades);
//     }    
// } else {
//     alert("La opción ingresada no es válida!!")
// }
// alert("La lista ahora incluye las siguientes ciudades: " + ciudades);





// ********************* Ejercicio 4 *********************
// Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:
// a) Su longitud
// b) El último elemento.
// c) Solo las posiciones pares
// d) Todos los elementos
// e) Todos los elementos menos el último 
// f) Todos los elementos menos el primero
// g) Todos los elementos separados por “*”.
// h) Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.

let artistas = ["U2", "Soda Stereo", "Bob Marley", "Metallica", "Incubus", "Pink Floyd", "Charly Garcia", "James Brown"];

// Punto a: Su longitud
// console.log(artistas.length);

// Punto b: El último elemento
// console.log(artistas[7]);

// Punto c: Solo las posiciones pares
// for (i=0; i<8; i++) {
//     if (i%2 === 0) {
//         console.log(artistas[i]);
//     }    
// }

// Punto d: Todos los elementos
// console.log(artistas);

// O así?

// for (i=0; i<8; i++) {
//     console.log(artistas[i]);
// }

// Punto e: Todos los elementos menos el último 
// for (i=0; i<7; i++) {
//     console.log(artistas[i]);
// }

// // Punto f: Todos los elementos menos el primero
// for (i=1; i<8; i++) {
//     console.log(artistas[i]);
// }

// Punto g: Todos los elementos separados por “*”.
// let cadena = artistas.join('*');
// console.log(cadena);

// ##### Pruebas #####
// let newString = "Los Pericos,Ataque,Auténticos";
// let newArray = newString.split(',');
// console.log(newArray);
// let otroString = newArray.join('*');
// console.log(otroString);


// Punto h: Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
// let newArtist = prompt("Ingrese un nuevo artista:");
// artistas.push(newArtist);
// console.log(artistas);





// ********************* Ejercicio 5 *********************
// Crear un array de 8 posiciones con números enteros y mostrar:
// a) Su longitud
// b) Solo las posiciones impares.
// c) Solo los NUMEROS impares.
// d) El mayor de ellos
// e) Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)

let numeros = [1,2,3,6,11,120,37,68];

// Punto a: Su longitud.
// console.log(numeros.length);


// Punto b: Sólo las posiciones impares.
// for (i=0; i<numeros.length; i++) {
//     if(i%2 !== 0) {
//         console.log(i);
//     }
// }


// Punto c: Sólo los NUMEROS impares.
// for (i=0; i<numeros.length;i++) {
//     if (numeros[i]%2 === 0) {
//         console.log(numeros[i]);
//     }    
// }



// Punto d: El mayor de ellos.
// numeros = [1,2,3,6,11,120,37,68];
// let saver = 0;
// for (i=0; i<numeros.length; i++){     
//     if (numeros[i]>saver) {
//         saver = numeros[i];
//         console.log(saver);
//     }
// }
// alert("El número más alto es: " + saver);



// Punto e: Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)
// let longitud = numeros.length;
// console.log(longitud);
// for (i=0; i < (longitud/2); i++) {
//     console.log(numeros[i]);
// }

// También puede ser:
// let halfArray = [];
// for (i=0; i<(numeros.length/2); i++){
//     halfArray.push(numeros[i]);
// }
// alert(halfArray);