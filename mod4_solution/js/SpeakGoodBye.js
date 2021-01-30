// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.

// ¡NOTA! Los pasos de este archivo son básicamente idénticos a los que
// realizado en el archivo SpeakHello.js.

// PASO 6: Envuelva todo el contenido de SpeakGoodBye.js dentro de un IIFE
// Ver Clase 52, parte 2


// PASO 7: Cree un objeto, llamado 'byeSpeaker' al que adjuntará
// el método "speak" y que expondrá al contexto global
// Ver Clase 52, parte 1
// var byeSpeaker =

// NO adjunte la variable speakWord al objeto 'byeSpeaker'.

(function (window){
var speakWord = "Good Bye";
var byeSpeaker = {};

byeSpeaker.speak = function () {
  console.log(speakWord+ " " + conj);
  //console.log(byeSpeaker.speakWord +" "+ Names);


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;


// PASO 9: Exponga el objeto 'byeSpeaker' al alcance global. Nombralo
// 'byeSpeaker' también en el ámbito global.
// xxxx.xxxx = byeSpeaker;
//© 2021 GitHub, Inc.
}

window.byeSpeaker = byeSpeaker;
})(window);