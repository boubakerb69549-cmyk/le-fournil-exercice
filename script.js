console.log("Le script est chargé");

// 1. Récupérer le bouton et le tableau
const boutonHoraires = document.querySelector("#bouton-horaires");
const tableHoraires = document.querySelector("#table-horaires");

// 2. Écouter le clic sur le bouton
boutonHoraires.addEventListener("click", function () {
  // 3. Montrer ou cacher le tableau
  tableHoraires.classList.toggle("cache");
});
