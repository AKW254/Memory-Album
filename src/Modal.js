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
                <img src={image.src} style={{ width: "100vw", height: "60vh" }}  alt={image.title} />
            <p className="mt-2">{image.description}</p>
          </div>
          <div className="modal-footer">
            <div className="btn btn-primary bi bi-arrow-left-circle-fill" onClick={onPrevious}>Previous</div>
            <div className="btn btn-primary bi bi-arrow-right-circle-fill" onClick={onNext}>Next</div>
          </div>
        </div>
      </div>
    </div>
        </>
    
  )
}

export default Modal
