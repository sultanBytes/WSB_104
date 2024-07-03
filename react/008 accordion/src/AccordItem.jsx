import React from 'react'

const AccordItem = ({quest, ans}) => {
    
    const handleShow = (e)=>{
        console.log(e.target.nextElementSibling);
    };
  return (
    <div className='border border-black' >
        <div className='bg-[white] p-[10px_5px] cursor-pointer' onClick={handleShow}>
                <h1>{quest}</h1>
        </div>
        <div className={`p-[10px_5px] hidden`}>
                {ans}
        </div>
    </div>
  )
}

export default AccordItem