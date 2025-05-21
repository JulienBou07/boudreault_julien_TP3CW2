var boutonsModale = document.querySelectorAll('.photo');
var modale = document.querySelector('.modale');
var contenueModale = document.querySelector('.contenumodale');

for (var i = 0; i < boutonsModale.length; i++) {
  boutonsModale[i].addEventListener('click', openModale);
}

function openModale() {
  var chemin = this.getAttribute("src");
  var nom = this.nextElementSibling.querySelector("h3").textContent;
  var poste = this.nextElementSibling.querySelector("p").textContent;

  var image = document.createElement("img");
  image.setAttribute("src", chemin);
  image.classList.add("zoom");

  var nomElement = document.createElement("p");
  nomElement.textContent = nom;
  nomElement.classList.add("nom-modale");

  var posteElement = document.createElement("p");
  posteElement.textContent = poste;
  posteElement.classList.add("poste-modale");

  contenueModale.appendChild(image);
  contenueModale.appendChild(nomElement);
  contenueModale.appendChild(posteElement);

  modale.classList.add("visible");

  image.addEventListener("click", closeModale);
}

function closeModale(event) {
  modale.classList.remove("visible");
  contenueModale.innerHTML = "";
}
