// *******************************
// Geovane Vinicius Lopes
// *******************************
//
// Module 4.
//


(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name of names) {

    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j'){
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
    
  }

})();



