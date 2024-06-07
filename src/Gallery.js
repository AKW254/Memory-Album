import React from 'react'

function Gallery({ images, onImageClick, isLoading, error }) {
   if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
     <div className="row row-cols-1 row-cols-md-3 g-4 mr-2 me-2 p-3">
      {images.map((image) => (
        <div className="col" key={image.id}>
          <div className="card h-100" onClick={() => onImageClick(image)}>
            <img src={image.src} className="card-img-top" alt={image.title} />
            <div className="card-body">
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
