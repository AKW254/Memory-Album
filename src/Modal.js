import React from 'react';
const modal = document.querySelector('.modal');
const imageContainer = modal.querySelector('.modal-body img'); // For keyboard focus

modal.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    // Handle previous image logic (replace with your actual logic)
    console.log('Previous image'); // Replace with your function call
  } else if (event.key === 'ArrowRight') {
    // Handle next image logic (replace with your actual logic)
    console.log('Next image'); // Replace with your function call
  } else if (event.key === 'Escape') {
    modal.classList.remove('show'); // Close modal on Esc key press
  }
});

// Focus on the image to start navigation from the modal body
imageContainer.focus();

function Modal({ image, onClose, onPrevious, onNext }) {
  return (
    <div class="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{image.title}</h5>
        <button type="button" class="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div class="modal-body">
        <img src={image.src} alt={image.title} />
        <p class="mt-2">{image.description}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal
