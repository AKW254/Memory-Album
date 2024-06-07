import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Gallery from './Gallery';
import Modal from './Modal';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
function App() {
  const images = ([images, setImages] = useState([]))
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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
      <Gallery images={images} onImageClick={handleImageClick} />
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
