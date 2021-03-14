import React from 'react'


export function Input({ ...props }) {
  return (
    <div className='search-input'>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </div>
  )
}
