import React ,{ useState, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Gallery from './Gallery';
function App() {
      const images = [
  { id: 1, src:  'images/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg', title: 'Image 1', description: 'Description of Image 1' },
  { id: 2, src: 'images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg', title: 'Image 2', description: 'Description of Image 2' },
  { id: 3, src: 'images/kelly-sikkema-JN0SUcTOig0-unsplash.jpg', title: 'Image 3', description: 'Description of Image 3' },
 { id: 5, src: 'images/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg', title: 'Image 4', description: 'Description of Image 4' },
   { id: 5, src: 'images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg', title: 'Image 5', description: 'Description of Image 5' },
      ];
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };
  return (
    <div className="container-fluid">
       <Header />
    <Gallery images={images} onImageClick={handleImageClick} />
    </div>
   
    
  );
}

export default App;
