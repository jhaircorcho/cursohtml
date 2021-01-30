// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.

// PASO 2: Envuelva todo el contenido de SpeakHello.js dentro de un IIFE
// Ver Clase 52, parte 2


// PASO 3: Crea un objeto, llamado 'helloSpeaker' al que adjuntarás
// el método "speak" y que expondrá al contexto global
// Ver Clase 52, parte 1
// var helloSpeaker =

// NO adjunte la variable speakWord al objeto 'helloSpeaker'.
(function (window){

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// PASO 4: Vuelva a escribir la función 'hablar' de manera que esté adjunta a la
// objeto helloSpeaker en lugar de ser una función independiente.
// Ver Clase 52, parte 2
var speakWord = "Hello";

var helloSpeaker ={};

helloSpeaker.speak =   function() {

  console.log(speakWord + " " + sinj);
 
}



window.helloSpeaker = helloSpeaker;
})(window);
