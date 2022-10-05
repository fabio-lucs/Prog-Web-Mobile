const h3Nome = document.getElementById("h3Nome");
const inputID = document.getElementById("inputID");
const btPesquisar = document.getElementById("btPesquisar");


const handleClickBtPesquisar = async () => {
  const id = parseInt(inputID.value.trim());
  if (isNaN(id) || id <= 0) {
    alert("ID inválido! Digite um número positivo!");
    return;
  }
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const responsePlanet = await fetch(`https://swapi.dev/api/planets/${id}/`);
  const data = await response.json();
  const homeworld = await responsePlanet.json()
  let films = data.films
  let filmsListString = []
  for (let index = 0; index < films.length; index++) {
    
      let film = await getJson(films[index])
      let title = await film.title
      filmsListString.push(title)
  }

  console.log(data);
  console.log(homeworld)
  console.log(filmsListString)
  h3Nome.innerHTML += "Nome : " + data.name + "<br>";
  h3Nome.innerHTML += "Altura : " + data.height + " cm " + "<br>";
  h3Nome.innerHTML += "Peso : " + data.mass + " kg " + "<br>";
  h3Nome.innerHTML += "Planeta Natal : " + homeworld.name + "<br>";
  h3Nome.innerHTML += "Lista de filmes : " + filmsListString + "<hr><br>";
};

async function getJson(addressRequest) {
  const response = await fetch(addressRequest);
  const data = await response.json();
  return data;
}




btPesquisar.onclick = handleClickBtPesquisar;




