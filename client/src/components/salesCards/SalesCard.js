import React, { useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import ProgressBar from 'react-bootstrap/ProgressBar';

const SalesCard = ({ title, revenue, revenueTitle, progress, color }) => {
  useEffect(()=>{
    // console.log("running one time ")
  },[])
  return (
    <div className='sales_card p-4 bg-white'>
      <h1 className='fs-5 mb-3 color-secondary'>{title}</h1>
      <div className='d-flex fs-5 justify-content-end'>
        <AiOutlineArrowUp className={`text-${color}`} size={40} /> {" "}
        <div className={`text-dark fs-3 justify-content-end mb-0 fw-normal`}>  $ {revenue}</div>
      </div>
      <div className='fs-6 d-flex justify-content-end mb-0'>{revenueTitle}</div>
      <div className={`text-${color}`}>{progress}% <ProgressBar className='progressBar_Height' striped variant={color} now={progress} /></div>
    </div>
  )

}

export default SalesCard