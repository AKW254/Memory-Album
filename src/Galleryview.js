import React from 'react'
import { useParams } from 'react-router-dom' // Import useParams for image ID

function Galleryview({ images }) {
  const { imageId } = useParams() // Access image ID from route parameter

  const selectedImage = images.find((image) => image.id === imageId)

  if (!selectedImage) {
    return <p>Error: Image not found.</p> // Handle missing image
  }

  return (
 <div class="container h-100">
  <div class="card mb-1 p-2 mx-0 rounded shadow">
    <img
      src={selectedImage.src}
      class="card-img-top rounded mx-auto d-block"
      alt={selectedImage.title}
    />
    <div class="card-body text-white bg-dark">
      <h5 class="card-title text-center">{selectedImage.title}</h5>
      <p class="card-text text-black">{selectedImage.description}</p>
    </div>
  </div>
</div>


    
  )
}

export default Galleryview
