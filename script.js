// Fuer alle Elemente in der ToDo-Liste soll gelten:
// Wenn auf das Element geklickt wird, wird der Stil des Elements von 'offen' zu 'abgehakt' wechseln
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Funktion um ein neues ToDo Element zur Liste hinzuzufuegen
// Wird aufgerufen wenn man auf den "Hinzufuegen" Knopf drueckt
function newToDoElement() {
  // Lese die Eingabe in das ToDo Feld aus und speichere es in der Variable 'inputValue'
  var myInput = document.getElementById("myInput");
  var inputValue = myInput.value;

  // Falls kein ToDO eingegeben wurde, gebe eine Warnung ueber ein Alert an den Nutzer aus und mache nichts weiter
  if (inputValue === '') {
    alert("Bitte gib ein ToDo ein!");
    return;
  }

  // Erzeuge ein neues Listenelement mit der eingegebenen 'inputValue' und fuege es als neues Kind zur ToDoListe hinzu
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myToDoList").appendChild(li);

  // Fuege dem neuen Listenelement einen 'X'-Bereich hinzu
  // Der 'X'-Bereich ist in der Variable 'close' gespeichert
  var close = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  close.className = "close";
  close.appendChild(txt);
  li.appendChild(close);
  // Wenn man auf den 'X'-Bereich klickt soll das zugehoerige Listenelement verschwinden
  close.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }

  // Am Ende leeren wir noch das ToDo Eingabefeld, damit der Nutzer ein neues ToDo eingeben kann
  document.getElementById("myInput").value = "";
}
