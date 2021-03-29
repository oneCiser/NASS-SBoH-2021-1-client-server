import React, { useState, useCallback,useEffect } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallery.css'
import  processImages  from "./photos";
import File from '../../Request/files';
import { PhoneFill } from "react-bootstrap-icons";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
const url = "http://nass2.bucaramanga.upb.edu.co/api/file/img/605bfc1e2359e0059d009872"

function Gallerys() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState(null);
  

 

 
  useEffect(() => {
    processImages()
    .then(array => setPhotos(array))
    // File.getImg(url)
    // .then(img => setPhotos(img))
  },[]);
  // console.log(photos)
  return (
    <div className="view-images">
      <Container >
        <Row>
        { photos &&
          photos.map((image,i) => {
            console.log(image)
            return (
              
                <Col className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img 
                    title={image.name}
                    className="w-100 shadow-1-strong rounded mb-4" 
                    key={i+'-img'} 
                    src={image.src} />
                </Col>
                
              
              
            )
        })
        }
        </Row>
      </Container>
      {/* {
        photos && 
        <img src={photos.objectUrl} width="100px" height="100px"/>
      } */}
 
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





