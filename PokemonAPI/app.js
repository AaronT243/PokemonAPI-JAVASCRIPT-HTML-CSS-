// récuperation attribut html (DOM)
let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
// on crée la fonction qui permet de changer des pokemon aléatoirement (changePokemon)
// de notre coté on utile math.random pour génerer des nombres aléatoires entre 0 et 151 pokemon
// math.ciel permettra d'arrondir 150 à la valeur au dessus c à d 151 (le plafond)
const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1; 
// l'url vers lequel on fait la requete(en y injectant la variable randomNumber) pour recevoir des nombres aléatoirs  
  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
// gestion des promesses avec fetch 
  let data = await fetch(requestString);
  console.log(data);
// convertir la reponse du fetch en json
  let response = await data.json();
  console.log(response);
// on récupere les propriétés du json
  image.src = response.sprites.front_default;
  // mettre un petit # devant l'id du pokemon géneré
  pokeNumber.textContent = `#${response.id}`;
  pokeName.textContent = response.name;
};
// call de la fonction 
changePokemon();
button.addEventListener("click", changePokemon);