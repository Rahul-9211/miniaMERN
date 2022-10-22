import React from 'react'

const BreadCrumb =({title , page, section}) => {
    return (
      <div className='breadCrumb mb-4'>
        <h1 className='fs-4 text-muted'> {title}</h1>
        <div className='text-info d-flex'> {page} {">"} <p className='text-grey'>{section}</p> </div>
      </div>
    )
}

export default BreadCrumb