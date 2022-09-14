const consultar = async ()=>{
try {
  let peticion=await fetch('https://pokeapi.co/api/v2/pokedex/national')
  const respuesta = await peticion.json()
  console.log(respuesta.pokemon_entries)
  return respuesta.pokemon_entries
  

} catch (error) {
  
}

}
// const consultars = async ()=>{
//   try {
//     let peticion=await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
//     const respuesta = await peticion.json()
//     console.log(respuesta)
//     return respuesta
    
  
//   } catch (error) {
    
//   }
  
//   }

  


// nombre del pokemon o el id+1
const obtenerPoke = async (nombreOid)=>{
try {
  let peticion= await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${nombreOid}`)
  const respuesta = await peticion.json()

  
  return respuesta
} catch (error) {
  return "El pokemon buscado no existe, intenta escribir bien el nombre."
}

}

let containerpoke = document.querySelector(".pokemon-container")

const capitalizar = (estring) => estring.replace(/^\w/, e => e?.toUpperCase() )


const asain = async () => {
  try {
    let pokemones = await consultar();
    pokemones.forEach(async pokemoncito => {
      let nombrePokemonn =pokemoncito.name
    // let poke = await obtenerPoke(nombrePokemonn);
    let imagen= pokemoncito.pokemon_species.url

    console.log(poke.name)
    console.log(poke.abilities)
    console.log(poke.types)

    let nombreSkill = capitalizar(poke.abilities[0].ability?.name);
    let nombreSkill2 = capitalizar(poke.abilities[1].ability?.name);
    let pokeTipoNombre = capitalizar(poke.types[0].type?.name);
    let pokeTipoNombre2 = (poke.types[1].type?.name);



    containerpoke.innerHTML += `
      <h3> ${nombrePokemonn} </h3>
      <img src=${imagen}></img>
      <p> ${pokeTipoNombre}  </p>
    `
    });

  } catch (error) {
    
  }
}
// asain()
// consultar()
consultar()
