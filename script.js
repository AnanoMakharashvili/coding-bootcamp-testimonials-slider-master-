const getSlideNext = document.getElementById("icon-next");
const getSlidePreview = document.getElementById("icon-preview");
const mainContainer = document.getElementById("container");
const getContainerTwo = document.getElementById("container-two");

getSlideNext.addEventListener("click", (event) => {
  if (event.target) {
    getContainerTwo.style.display = "flex";
    mainContainer.style.display = "none";
  }
});

getSlidePreview.addEventListener("click", (event) => {
  if (event.target) {
    mainContainer.style.display = "flex";
    getContainerTwo.style.display = "none";
  }
});
