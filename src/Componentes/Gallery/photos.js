import File from '../../Request/files';

async function processImages(){
  var photos = [];
  await File.getImages()
  .then((res)=>{ return res.data.images}) // traigo el json de la peticion
  .then(async (data)=>{
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      
      let res = await File.getImg(data[i].url);
      // var im = new Image();
      // im.src = res.objectUrl;
      // console.log(im.width)
      //En este lugar crea la estructura con la que va a trabajar
      // en los componentes
      let img = {
        url:res.objectUrl, 
        // width: im.width, 
        // height: im.height,
        title:data[i].name,
        modified:data[i].modified,
        //startIndex:i
      }
      arr.push(img)
    }
    return arr
  }) 
  .then(arr => photos = arr)
  
  console.log('photos: ',photos)
  return photos;
}


export default processImages;

