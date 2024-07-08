// import React, { useState } from 'react'

// const AccordItem = ({quest, ans}) => {
//     const [openAns, setOpenAns] = useState(false);

//     const handleToggle = ()=>{
//       setOpenAns(!openAns);
//     }

//   return (
//     <div className='border border-black' >
//         <div className='bg-[white] p-[10px_5px] cursor-pointer' onClick={handleToggle}>
//                 <h1>{quest}</h1>
//         </div>
//         <div className={`p-[10px_5px] ${openAns ? 'block' : 'hidden'}`}>
//                 {ans}
//         </div>
//     </div>
//   )
// }

// export default AccordItem

import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordItem = ({quest, ans, ifOpen, handleAns}) => {


  return (
    <div className='border border-black' >
        <div className='bg-[white] p-[10px_5px] cursor-pointer flex justify-between' onClick={handleAns} >
                <h1>{quest}</h1>
                {
                  ifOpen ? <FaMinus /> : <FaPlus />
                }
        </div>
        <div className={`p-[10px_5px] ${ifOpen ? 'block' : 'hidden'}`}>
                {ans}
        </div>
    </div>
  )
}

export default AccordItem