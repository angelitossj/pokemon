const container = document.querySelector(".pokemon-container")

function obtenerPokemons(id){
  // realizo la consulta a la API
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  // Convierto la respuesta en un formato Json 
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data)
    setTimeout(() => {
      crearPokemon(data)
    }, 2000);
    })
}

// Funcion para limitar la cantidad de pokemones a obtener
function pokemones(numero){
  for (let i = 1; i < numero; i++) {
    obtenerPokemons(i);
  }
}


function crearPokemon (pokemon){
  //createElement crea un elemento HTML
  const tarjeta = document.createElement('div')
  // a ese elemento le agrego una clase usando classList
  tarjeta.classList.add("pokemon-block")
// agrego un elemendo mas (DIV) y le asigno una clase 
// que va a contener la imagen
  const imagen = document.createElement('div')
  imagen.classList.add('img-container')

  // creo el elemendo donde va a ir la imagen de la consulta
  // que realice a la API
  const sprite = document.createElement('img')
  sprite.src = pokemon.sprites.front_default

  imagen.appendChild(sprite)

  const numero = document.createElement('p')
  numero.textContent = `#${pokemon.id.toString().padStart(3,0)}`

  const nombre = document.createElement('p');
  nombre.classList.add('nombre')
  // textConten representa el 
  // contenido de texto de un nodo y sus dencendientes
  nombre.textContent = pokemon.name

  tarjeta.appendChild(imagen)
  tarjeta.appendChild(numero)
  tarjeta.appendChild(nombre)

  container.appendChild(tarjeta)
}
pokemones(15)