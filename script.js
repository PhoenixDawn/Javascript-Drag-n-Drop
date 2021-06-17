const draggableElement = document.querySelector("#dragme");

draggableElement.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", draggableElement.id);
});

for (const dropZone of document.querySelectorAll(".box")) {
  //Drag over the drop zone
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("over");
  });
  // When draggable element is dropped on the dropzone
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();

    const droppedElementId = e.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(droppedElementId)
    dropZone.classList.remove("over")
    dropZone.appendChild(droppedElement);
  });
  // When draggable element leaves dropzone
  dropZone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropZone.classList.remove("over");
  })
}
