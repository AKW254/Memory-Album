import React from 'react'

function Modal({ image, onClose, onPrevious, onNext }) {
    return (
        <>
 <div className="modal-backdrop show"></div>
    <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true">
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{image.title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img  src={image.src} alt={image.title} />
            <p className="mt-2">{image.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
            <button type="button" className="btn btn-secondary" onClick={onNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
        </>
    
  )
}

export default Modal
