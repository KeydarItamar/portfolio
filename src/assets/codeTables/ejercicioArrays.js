
//Funcion para buscar infomarcion en un JSON
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error(`Error al cargar el archivo JSON desde ${url}:`, error);
            throw error;
        });
}


function mostrarTabla() {
    let pokemonArray = [];
    let municipiosArray = [];
    let meteoritosArray = [];
    let moviesArray = [];

    //Concatenamos todos los Json con el metodo .then para cargarlos todos a la vez
    fetchData('/data/pokemon.json')
        .then(data => {
            data.pokemon.forEach(pokemon => {
                pokemonArray.push(pokemon.name);
            });
        })
        .then(() => fetchData('/assets/data/municipis.json'))
        .then(data => {
            data.elements.forEach(muni => {
                municipiosArray.push(muni.municipi_nom);
            });
        })
        .then(() => fetchData('/assets/data/earthMeteorites.json'))
        .then(data => {
            data.meteoritos.forEach(meteo => {
                meteoritosArray.push(meteo.name);
            });
        })
        .then(() => fetchData('/assets/data/movies.json'))
        .then(data => {
            data.movies.forEach(peli => {
                moviesArray.push(peli.title);
            });
        })
        .then(() => {
            let dataArray = [];
            for (let i = 0; i < 1000; i++) {
                dataArray.push({
                    Pokemon: pokemonArray[i],
                    Municipios: municipiosArray[i],
                    Movies: moviesArray[i],
                    Meteoritos: meteoritosArray[i]
                });
            }
            console.table(dataArray);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

let pokemons;
let listaPokemons=[];
const headersPokemons= ["num","name","type","weaknesses","height", "weight", "img"];

let municipios;
let listaMunicipios=[];
const headersMunicipios= ["ine","municipi_nom","nombre_habitants", "extensio", "altitud", "municipi_escut"];

let listaMovies = [];
const headersMovies = ["title","genres", "year","url"];
let movies;

let meteoritos;
let listaMeteoritos=[];
const headersMeteoritos = ["id","name", "year","mass"];



//Segundo boton que hace el reload de la pantalla. 
function reload(){
    location.reload();
}

function orderAscend(arrayM){
    return  arrayM.sort()
}
function orderDescend(arrayM){
    arrayM.sort();
    arrayM.reverse();
    return arrayM;
}


(async()=>{
    try {
        const response = await fetch('/assets/codeTables/data/pokemon.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         pokemons = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    pokemons.pokemon.forEach(function(pokemon){
        listaPokemons.push([pokemon.num,pokemon.name, pokemon.type, pokemon.weaknesses, pokemon.height, pokemon.weight, pokemon.img]);
    });
    })();


(async()=>{
    try {
        const response = await fetch('/assets/codeTables/data/municipis.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         municipios = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    municipios.elements.forEach(function(municipio){
        listaMunicipios.push([municipio.ine, municipio.municipi_nom, municipio.nombre_habitants,municipio.extensio, municipio.altitud, municipio.municipi_escut]);
    });
    })();


(async()=>{
    try {
        const response = await fetch('/assets/codeTables/data/movies.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
         movies = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
    movies.movies.forEach(function(movie){
        listaMovies.push([movie.title, movie.genres, movie.year, movie.url]);
    });
    })();
    

(async()=>{
    try {
        const response = await fetch('/assets/codeTables/data/earthMeteorites.json');
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
            meteoritos = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
        meteoritos.meteoritos.forEach(function(movie){
        listaMeteoritos.push([meteoritos.id, movie.name, movie.year, movie.mass]);
    });
    })();
       
    function printTabla(listaJson, headers) {
        const tableContainer = document.getElementById("tableContainer");
        tableContainer.innerHTML = "";
        const table = document.createElement("table");
    
        // Aplicar estilos a la tabla
        table.style.borderRadius = "20px";
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.style.border = "1px solid #ddd";
        table.style.fontFamily = "'Mifuente'";
        table.style.fontSize = "small";
    
        const headerRow = document.createElement("tr");
        headers.forEach(header => {
            th = document.createElement("th");
            th.textContent = header;
            th.style.padding = "5px";
            th.style.textAlign = "left";
            th.style.backgroundColor = "#dc0965";
            th.style.borderBottom = "2px solid #ddd";
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
    
        // Crear filas de la tabla
        listaJson.forEach(function(item) {
            const row = document.createElement("tr");
            for (let i = 0; i < headers.length; i++) {
                const td = document.createElement("td");
                td.style.padding = "5px";
                td.style.borderBottom = "1px solid #ddd";
    
                if (headers[i] == "url" || headers[i] == "img" || headers[i] == "municipi_escut") {
                    td.innerHTML = "<img src='" + item[i] + "'>";
                } else {
                    td.textContent = item[i];
                }
                row.appendChild(td);
            }
            table.appendChild(row);
        });
        tableContainer.appendChild(table);
    }

function orderList(word){
    const selectedJson = document.getElementById("jsonSelector").value;
    let listaOrdenada= []
    let tabla=[]
    switch (selectedJson) {
        case "pokemon":
            listaOrdenada = listaPokemons;
            if (word === 'asc'){
                 orderAscend(listaOrdenada)
            }else{
                 orderDescend(listaOrdenada)
            }
            printTabla(listaOrdenada, headersPokemons);
            break;
        case "municipios":
            listaOrdenada = listaMunicipios;
            if (word === 'asc'){
                 orderAscend(listaOrdenada)
            }else{
                 orderDescend(listaOrdenada)
            }
            printTabla(listaOrdenada,headersMunicipios);
            break;
        case "movies":
            listaOrdenada = listaMovies;
            if (word === 'asc'){
                 orderAscend(listaOrdenada)
            }else{
                 orderDescend(listaOrdenada)
            }
            printTabla(listaOrdenada, headersMovies);
            break;
        case "meteoritos":
            listaOrdenada = listaMeteoritos;
            if (word === 'asc'){
                 orderAscend(listaOrdenada)
            }else{
                 orderDescend(listaOrdenada)
            }
            printTabla(listaOrdenada, headersMeteoritos);
            break;
    }
}
function searchList(palabra){
    palabra.toLowerCase
    const selectedJson = document.getElementById("jsonSelector").value;
    let newLista=[]
    switch (selectedJson) {
        case "pokemon":
            newLista = listaPokemons.filter(pokemons => pokemons[1].toLowerCase().includes(palabra));
            printTabla(newLista, headersPokemons)
            break;
        case "municipios":
            newLista = listaMunicipios.filter(municipios => municipios[1].toLowerCase().includes(palabra));
            printTabla(newLista,headersMunicipios);
            break;
        case "movies":
            newLista = listaMovies.filter(movies => movies[0].toLowerCase().includes(palabra));
            printTabla(newLista,headersMovies);
            break;
        case "meteoritos":
            newLista = listaMeteoritos.filter(meteoritos => meteoritos[1].toLowerCase().includes(palabra));
            printTabla(newLista,headersMeteoritos);
            break;
    }
}



async function escogerTabla() {
    const selectedJson = document.getElementById("jsonSelector").value;

    switch (selectedJson) {
        case "pokemon":
            printTabla(listaPokemons,headersPokemons);
            break;
        case "municipios":
            printTabla(listaMunicipios,headersMunicipios);
            break;
        case "movies":
            printTabla(listaMovies,headersMovies);
            break;
        case "meteoritos":
            printTabla(listaMeteoritos,headersMeteoritos);
            break;
    }

}    
let pokemonTypes = ["Grass","Poison","Fire","Flying","Water","Bug","Normal","Electric","Ground","Fighting","Psychic","Rock",
    "Ice","Ghost","Dragon"];
let pokemonTypesData= [14, 33, 12, 19, 32, 12, 24, 9, 14, 8, 14, 11, 5, 3, 3];
let moviesGenres= ["Drama", "Crime", "Action", "Thriller", "Biography", "History", "Adventure", "Fantasy", "Western", "Romance", "Sci-Fi", "Mystery", "Comedy", "War", "Family", "Animation", "Musical", "Music", "Horror", "Film-Noir", "Sport"];
let movesGenresData= [85, 53, 39, 60, 27, 15, 57, 28, 8, 27, 32, 33, 44, 28, 25, 22, 5, 8, 4, 6, 10];

function randomColor(array){
    let randomColor = []
    array.forEach(function(e){
        let color1=Math.floor(Math.random() * 256);
        let color2=Math.floor(Math.random() * 256);
        let color3=Math.floor(Math.random() * 256);
        randomColor.push(`rgba(${color1},${color2},${color3}`);
    })
        return randomColor;
  }

  function colorSelect(array, word){
    let array2=[]
    let color;
    array.forEach(function (e){
       if(word == 'borde'){
        color= e + ')';
        array2.push(color);
       }else{
        color= e + ',0.4)';
        array2.push(color);
       }
    });
    return array2;
  }
 
colorPok=randomColor(pokemonTypes)
colorMovies=randomColor(moviesGenres)

function grafico(){
    const selectedJson = document.getElementById("jsonSelector").value;
    switch (selectedJson) {
        case "pokemon":
            mostrarGrafico(pokemonTypes,"Tipos de Pokemon", pokemonTypesData, colorPok)
            break;;
        case "movies":
            mostrarGrafico(moviesGenres,"Generos de Peliculas", movesGenresData, colorMovies)
            break;
    }

}

function mostrarGrafico(header, label, data, color){
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'polarArea',
      data: {
        labels: header,
          datasets: [{
            label: label,
            data: data,
            borderColor: colorSelect(color,'border'),
            backgroundColor: colorSelect(color,'ground')
          }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}

function searchEvent(){
    let inputSearch = document.getElementById('txtSearch')
    inputSearch.addEventListener('input', (e) => {
       searchList(e.target.value)
});
}
