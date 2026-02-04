import React from 'react'

export default function Modal({ onClose, children }) {
  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  )
}
