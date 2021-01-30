// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

// *******************************
// COMIENCE AQUÍ SI QUIERE UN PUNTO DE INICIO MÁS FÁCIL PARA ESTA ASIGNACIÓN
// *******************************
//
// Instrucciones de asignación del módulo 4.
//
// La idea de esta asignación es tomar una matriz existente de nombres
// y luego envíe Hello 'Name' o Good Bye 'Name' a la consola.
// El programa debe decir "Hola" a cualquier nombre excepto a los que comienzan con una "J"
// o "j", de lo contrario, el programa debería decir "Adiós". Entonces, el resultado final
// en la consola debería verse así:
// / *
// Hola Yaakov
// Adios john
// Adiós Jen
// Adiós Jason
// Hola paul
// Hola frank
// Hola larry
// Hola paula
// Hola Laura
// Adios jim
// ¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!
// ¡El código NO funciona actualmente! Es TU trabajo hacer que funcione
// como se describe en los requisitos y los pasos para completar este
// asignación.
// ¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!
// * /

// PASO 1: (NADA QUE HACER. YA HECHO PARA USTED)
// Envuelve todo el contenido de script.js dentro de un IIFE
// Ver Clase 52, parte 2
// (Tenga en cuenta que el paso 2 se realizará en el archivo SpeakHello.js).


(function (window) {

    Names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    conj = new Array();
    sinj= new Array();
    // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1

    // PASO 10: (NADA QUE HACER. YA HECHO PARA USTED)
    // Recorre la matriz de nombres y di "Hola" o "Adiós"
    // usando el método 'hablar' de helloSpeaker o de byeSpeaker.
    // Ver Clase 50, parte 1

    
    for (var i = 0; i < Names.length; i++) {

    var firstLetter = Names[i].charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
        window.conj = Names[i];
        byeSpeaker.speak(Names[i]);
      
 
        //console.log( byeSpeaker.speak(Names[i]));
        
    
      } else {
        window.sinj = Names[i];
        helloSpeaker.speak(Names[i]);
       
 
       // window.Names = Names[i];
        //console.log( helloSpeaker.speak(Names[i]));
      }
    
    
      }
     // window.Names = Names;
     // window.Names = Names;
        })(window);
      // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      // Look up these methods on Mozilla Developer Network web site if needed.

      // PASO 11: (NADA QUE HACER. YA HECHO POR USTED)
      // Recupera la primera letra del nombre actual en el bucle.
      // Usa la función 'charAt' del objeto string. Ya que estamos buscando
      // nombres que comienzan con mayúscula o minúscula 'J' / 'j', call
      // el método 'toLowerCase' del objeto de cadena en el resultado para que podamos comparar
      // a minúscula 'j' después.
      // Busque estos métodos en el sitio web de Mozilla Developer Network si es necesario.
     
      // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.

      // PASO 12: (NADA QUE HACER. YA HECHO PARA USTED)
      // Compare la 'primera letra' recuperada en el PASO 11 con minúsculas
      // 'j'. Si es lo mismo, llame al método 'speak' de byeSpeaker con el nombre actual
      // en el lazo. De lo contrario, llame al método 'hablar' de helloSpeaker con el
      // nombre en el bucle.

   