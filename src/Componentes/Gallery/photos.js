import File from '../../Request/files';

function processImages(){
  var photos = []
  File.getImages()
  .then((res)=>{ return res.data.images}) // traigo el json de la peticion
  .then((data)=>{ 
    var arr =[] // creo una arreglo donde almaceno las url
    data.map((i) => {
      arr = [...arr,i.url]; //asigno esa informacion
    })
    return arr   // return el arreglo de url
  })
  .then( (array) =>{
    
    array.map(url => { // realizo un mapeo de la url
      File.getImg(url) // paso cada url a la funcion que me devuelve la informacion de las imagenes
      .then(res => { // dentro de la promesa
        var im = new Image();
        im.src = res.objectUrl;
        return {src:res.objectUrl, width: im.width, height: im.height} //formateo
      }).then( obj => photos.push(obj))
      .catch(e => console.log(e))        
    });   
  }
  )
  return photos;
}


export default processImages;

