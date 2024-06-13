import React from 'react'
import { useParams } from 'react-router-dom' // Import useParams for image ID

function Galleryview({ images }) {
  const { imageId } = useParams() // Access image ID from route parameter

  const selectedImage = images.find((image) => image.id === imageId)

  if (!selectedImage) {
    return <p>Error: Image not found.</p> // Handle missing image
  }

  return (
    <div className="card bg-white mb-3 p-4 mx-4">
      <img
        src={selectedImage.src}
        className="card-img-top"
        alt={selectedImage.title}
      />
      <div className="card-body text-white bg-dark">
        <h5 className="card-title ">{selectedImage.title}</h5>
        <p className="card-text text-black">{selectedImage.description}</p>
      </div>
    </div>
  )
}

export default Galleryview
