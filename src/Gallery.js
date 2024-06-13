import React from 'react';
import { useNavigate } from 'react-router-dom';

function Gallery({ images, handleImageClick, isLoading, error }) {
  const navigate = useNavigate(); // Create a useNavigate instance
   if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
     <div className="row row-cols-1 row-cols-md-3 g-4 mr-2 me-2 p-3">
      {images.map((image) => (
        <div className="col" key={image.id}>
          <div className="card h-100"
           onClick={() => {
              // Use useNavigate to navigate to the image view route
              navigate(`/image/${image.id}`);
              // Optionally, call handleImageClick if needed for additional logic
              handleImageClick && handleImageClick(image.id);
            }}
          >
            <img src={image.src} className="card-img-top" alt={image.title} />
            <div className="card-body-custom">
              <h5 className="card-title">{image.title}</h5>
              <p className="card-text">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
