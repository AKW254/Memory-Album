import React, { useState, useEffect } from 'react';
import {  Routes, Route,  } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Gallery from './Gallery';
import Galleryview from './Galleryview';
import api from './api/unsplash';


function App() {
  const [images, setImages] = useState([]);
 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   // Fetch Images
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get('/photos');
        const data = response.data;
        setImages(data.map(img => ({
          id: img.id,
          src: img.urls.regular,
          title: img.alt_description || 'Untitled',
          description: img.description || 'No description available.'
         })));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);
  



  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<Gallery images={images}  isLoading={isLoading} error={error} />} />
  <Route path="/Gallery View/:imageId" element={<Galleryview images={images} />} />
     </Routes>
     
    </>
  )
}

export default App
