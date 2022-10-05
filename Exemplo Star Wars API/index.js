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
    const responseLand = await fetch(`https://swapi.dev/api/people/homeworld/name${id}`);
    const data = await response.json();
    console.log(data);
    h3Nome.innerHTML += "Nome = " + data.name + "<br>";
    h3Nome.innerHTML += "Altura = " + data.height + " cm " + "<br>";
    h3Nome.innerHTML += "Peso = " + data.mass + " kg " + "<hr><br>";
};


btPesquisar.onclick = handleClickBtPesquisar;




