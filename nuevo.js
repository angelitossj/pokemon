const consultar = async ()=>{
  try {
    let peticion = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
    let respuesta= await peticion.json()
    console.log(respuesta)
    
    return respuesta
  } catch (error) {
    console.log(error)
  }
}


const obtenerPersonajes= async (id)=>{
    try {
        let peticion= await fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/${nombreOid}`) 
        const respuesta = await peticion.json()
        
        console.log(respuesta)
        return respuesta


    } catch (error) {
        return 'El personaje no se ha encontrado '
        
    }
}
// consultar()

let container=document.querySelector(".pokemon-container");

const capitalizar = (estring)=> estring.replace(/^\w/, e => e?.toUpperCase() )

const goku = async ()=>{
try {
    let ssj = await consultar();
    ssj.forEach(ssjs => {
        let personajes = ssjs.name
        let img = ssjs.imageUrl
        console.log(ssjs)
       
       
       
        container.innerHTML += `
        <h1>${personajes}</h1>
        <img class="img" src=${img}></img>
        
      
        
        
        `

        
    });



} catch (error) {
    
}



}

goku()
