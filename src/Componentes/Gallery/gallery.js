import React, { useState, useCallback,useEffect } from "react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import 'bootstrap/dist/css/bootstrap.min.css';
import './gallery.css'
import SimpleReactLightbox from "simple-react-lightbox";
import  processImages  from "./photos";
import File from '../../Request/files';
import { PhoneFill } from "react-bootstrap-icons";
import {
    NavDropdown,
    Navbar,
    Nav,
    Container,
    Row,
    Col
} from 'react-bootstrap';
const url = "http://nass2.bucaramanga.upb.edu.co/api/file/img/605bfc1e2359e0059d009872"

function Gallerys() {

  const [photos, setPhotos] = useState(null);
  

 

 
  useEffect(() => {
    processImages()
    .then(array => setPhotos(array))
    // File.getImg(url)
    // .then(img => setPhotos(img))
  },[]);
  // console.log(photos)
  
    function compareDateAsc(a, b){
        var c = new Date(a.modified);
        var d = new Date(b.modified);
        return c-d;

    }
    function compareDateDesc(a, b){
        var c = new Date(a.modified);
        var d = new Date(b.modified);
        return d-c;

    }
    function compareWeigthAsc(a,b){
        var imA = new Image();
        var imB = new Image();
        imA.src = a.src;
        imB.src = b.src;
        const [hA,wA,hB,wB] = [imA.height, imA.width, imB.height, imB.width]
        var weigthA = ((hA*wA)*3)/(1024**2);
        var weigthB = ((hB*wB)*3)/(1024**2);
        //console.log(weigthA ,'mb vs ',weigthB,'mb')
        return weigthA-weigthB;
    }
    function compareWeigthDesc(a,b){
        var imA = new Image();
        var imB = new Image();
        imA.src = a.src;
        imB.src = b.src;
        const [hA,wA,hB,wB] = [imA.height, imA.width, imB.height, imB.width]
        var weigthA = ((hA*wA)*3)/(1024**2);
        var weigthB = ((hB*wB)*3)/(1024**2);
        //console.log(weigthA ,'mb vs ',weigthB,'mb')
        return weigthB-weigthA;
    }


    function compareAsc( a, b ) {
        //console.log(a.name ,'vs',b.name)
        if ( a.name < b.name ){
        return -1;
        }
        if ( a.name > b.name ){
        return 1;
        }
        return 0;
    }
    function compareDesc( a, b ) {
        //console.log(a.name ,'vs',b.name)
        if ( a.name < b.name ){
        return 1;
        }
        if ( a.name > b.name ){
        return -1;
        }
        return 0;
    }


    let sortbyNameAsc = () =>{
        let tmpPhostos = [...photos]
        //console.log('Antes: ', tmpPhostos)
        tmpPhostos = tmpPhostos.sort(compareAsc)
        //console.log('Despues: ', tmpPhostos)
        setPhotos(tmpPhostos);
              
    }
    let sortbyNameDesc = () =>{
        let tmpPhostos = [...photos] 
        tmpPhostos = tmpPhostos.sort(compareDesc)    
        setPhotos(tmpPhostos);       
    }

    let sortbyDateAsc = () =>{
        let tmpPhostos = [...photos]
        tmpPhostos = tmpPhostos.sort(compareDateAsc)  
        setPhotos(tmpPhostos);              
    }
    let sortbyDateDesc = () =>{
        let tmpPhostos = [...photos]   
        tmpPhostos = tmpPhostos.sort(compareDateDesc) 
        setPhotos(tmpPhostos)
    }
    let sortbyweightAsc = () =>{
        let tmpPhostos = [...photos]  
        tmpPhostos = tmpPhostos.sort(compareWeigthAsc) 
        setPhotos(tmpPhostos)
    }
    let sortbyweightDesc = () =>{
        let tmpPhostos = [...photos]  
        tmpPhostos = tmpPhostos.sort(compareWeigthDesc) 
        setPhotos(tmpPhostos)
    }
  return (
    <div className="view-images">
      <Container>
            <Navbar  bg="light" expand="lg"  variant="light">
            <Nav className="mr-auto">
            <NavDropdown title="Sort By ✔" id="collasible-nav-dropdown" >
                <NavDropdown.Item onClick={sortbyNameAsc}>name asc</NavDropdown.Item>
                <NavDropdown.Item onClick={sortbyNameDesc}>name desc</NavDropdown.Item>
                <NavDropdown.Item onClick={sortbyDateAsc}> date asc</NavDropdown.Item>
                <NavDropdown.Item onClick={sortbyDateDesc}>date desc</NavDropdown.Item>
                <NavDropdown.Item onClick={sortbyweightAsc}>weight asc</NavDropdown.Item>
                <NavDropdown.Item onClick={sortbyweightDesc}>weight desc</NavDropdown.Item>
            </NavDropdown> 
            </Nav>
            <Navbar.Brand href="#">Gallery</Navbar.Brand>
            </Navbar>
            
    </Container>
      
      <Container >
        <Row>
        { photos &&
          photos.map((image,i) => {
            //console.log(image)
            return (
                
                <Col className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img 
                    title={image.name}
                    className="w-100 shadow-1-strong rounded mb-4" 
                    key={i+'-img'} 
                    src={image.src} 
                    alt=""
                    />
                </Col>
                
              
              
            )
        })
        }
        </Row>
      </Container>
      
    </div>
  );
}
export default Gallerys;





