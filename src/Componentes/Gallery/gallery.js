import React, { useState, useCallback,useEffect } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import  processImages  from "./photos";
import File from '../../Request/files';
import { PhoneFill } from "react-bootstrap-icons";
const url = "http://nass2.bucaramanga.upb.edu.co/api/file/img/605bfc1e2359e0059d009872"

function Gallerys() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState(null);
  

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  useEffect(() => {
    processImages()
    .then(array => setPhotos(array))
    // File.getImg(url)
    // .then(img => setPhotos(img))
  },[]);
  // console.log(photos)
  return (
    <div>
      <a>Hola</a>
      {/* {
        photos && 
        <img src={photos.objectUrl} width="100px" height="100px"/>
      } */}
      { photos &&
        photos.map((image,i) => {
          console.log(image)
          return <img title={image.name} key={i+'-img'} src={image.src} width="100px" height="100px"/>
      })
      }
      {/* <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
    </div>
  );
}
export default Gallerys;





