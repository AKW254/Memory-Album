import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Header';
import Gallery from './Gallery';
import Galleryview from './Galleryview';


function App() {
  const [images, setImages] = useState([]);
 const navigate = useNavigate();
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
  
  const handleImageClick = (event, { photo }) => {
    navigate(`/image/${photo.id}`);
  };


  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<Gallery images={images} onImageClick={handleImageClick} isLoading={isLoading} error={error} />} />
  <Route path="/image/:imageId" element={<Galleryview images={images} />} />
     </Routes>
     
    </>
  )
}

export default App
