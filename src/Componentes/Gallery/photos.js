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
    
    array.map(url => {
      File.getImg(url)
      .then(res => {
        var im = new Image();
        im.src = res.objectUrl;
        return {src:res.objectUrl, width: im.width, height: im.height}
      }).then( obj => photos.push(obj))
      .catch(e => console.log(e))  
      //console.log(photos)          
    });   
  }
  )
  return photos;
}


export default processImages;

// function processImages(){
//   var fotos =  null;
//   var width = 3;
//   var height = 4;
//   var image = [];

//   File.getImages().then((res)=>{ // url
//     fotos = res.data.images;
//     console.log(fotos)
//     fotos.map((i)=>{
//       //File.getImg(i.url).then((res2)=>{} )
//       //console.log(res2.objectUrl)
      
//        // imagen
//       //console.log(image)
//       image.push({src : i.url, 
//         width: width,
//         height: height
//       })
//       console.log(image)
      
//     });
//     console.log(image)
//     return image
//   }).catch(err => console.log(err))
// }