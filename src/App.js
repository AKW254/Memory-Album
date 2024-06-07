import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Gallery from './Gallery';
import Modal from './Modal';


function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
   // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=SFsn_UvdiYVvL7yCpoicOufEqc625-x2m8oYAPRx1Wo`
        );

        if (!response.ok) {
          throw new Error(`Error fetching images: ${response.status}`);
        }

        const jsonData = await response.json();
        setImages(jsonData.map(img => ({
          id: img.id,
          src: img.urls.regular,
          title: img.alt_description || 'Untitled',
          description: img.description || 'No description available.'
        })));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);
  
  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }

  const handlePrevious = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const previousIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[previousIndex])
  }

  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
  }
  //Select image hook
  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [selectedImage])
  return (
    <>
      <Header />
      <Gallery
        images={images}
        onImageClick={handleImageClick}
        isLoading={isLoading}
        error={error}
      />
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  )
}

export default App
