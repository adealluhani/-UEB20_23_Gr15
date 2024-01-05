function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target;
  
    // Kontrolloni nëse elementi është vendosur në hapësirën e dytë (hapsira2)
    if (dropTarget.id === "hapsira2") {
      dropTarget.appendChild(draggedElement);
    } else {
      // Nëse nuk është vendosur në hapësirën e dytë, kthejeni elementin në vendin fillestar (hapsira1)
      var initialPosition = document.getElementById("hapsira1");
      initialPosition.appendChild(draggedElement);
    }
  }
  
  