const urlApi = "https://rickandmortyapi.com/api/character/";
const listElement = document.getElementById("list");
let nextUrl = '';
let prevUrl = '';


const getCharacters = async (url, name = '') => {
    if(name !== ''){
        var response = await fetch(`${url}?name=${name}`);
    }else{
        var response = await fetch(url);
    }

  const data = await response.json();
  nextUrl = data.info.next;
  prevUrl = data.info.prev;
  const characters = data.results;
  render(characters);
};

const searchCharacter = (evento) =>{
    evento.preventDefault();
    const inputValue = document.querySelector('input').value;
    getCharacters(urlApi, inputValue)
};

const render = (characters) => {
    listElement.innerHTML = ''
  characters.map((character) => {
    listElement.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card-header">
            <p>${character.name}</p>
        </div>
        <div class="card-img">
            <img src="${character.image}" alt="${character.name}">
        </div>
        <div class="card-body">
            <p><b>Gender:</b> ${character.gender}</p>
            <p><b>Species:</b>: ${character.species}</p>
            <p><b>Origin:</b>: ${character.origin.name}</p>
        </div>
    </div>`
    );
  });
};

const nextPage = () => {
    getCharacters(nextUrl);
};

const prevPage = () => {
    getCharacters(prevUrl);
};
getCharacters(urlApi);
