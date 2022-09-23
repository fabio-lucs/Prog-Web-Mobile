const h3Nome = document.getElementById("h3Nome");
const inputID = document.getElementById("inputID");
const btPesquisar = document.getElementById("btPesquisar");
//const imgDog = document.getElementById("imgDog");
//const pLink = document.getElementById("pLink");

// const getRandomDogPicture = async () => {
//   const response = await fetch("https://random.dog/woof.json");
//   const data = await response.json();
//   imgDog.src = data.url;
//   pLink.innerHTML = data.url;
// };

const handleClickBtPesquisar = async () => {
    const id = parseInt(inputID.value.trim());
    if (isNaN(id) || id <= 0) {
        alert("ID inválido! Digite um número positivo!");
        return;
    }
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const responseLand = await fetch(`https://swapi.dev/api/people/homeworld/name${id}`);
    const data = await response.json();
    console.log(data);
    h3Nome.innerHTML += "Nome = " + data.name + "<br>";
    h3Nome.innerHTML += "Altura = " + data.height + " cm " + "<br>";
    h3Nome.innerHTML += "Peso = " + data.mass + " kg " + "<hr><br>";
};


btPesquisar.onclick = handleClickBtPesquisar;

getRandomDogPicture();

/*

const handleClickBtPesquisar = () => {
  const id = parseInt(inputID.value.trim());
  if (isNaN(id) || id <= 0) {
    alert("ID inválido! Digite um número positivo!");
    return;
  }
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      h3Nome.innerHTML = "Nome = " + data.name;
    });
};

*/
