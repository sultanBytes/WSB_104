import React from 'react'

const TaskLi = ({data, checkData, ind, deleteData}) => {

  return (
    <li className='flex justify-between border-b py-[10px] my-[10px] mx-[100px]' >
      <input type="checkbox" value={data.id} defaultChecked={data.status} onClick={(e)=>{checkData(ind, e.target.checked)}}/>
      <span className={` text-[18px] font-[500] capitalize ${data.status ? 'line-through text-[grey]' : 'text-white'}`}>{data.value}</span>
      <button className='bg-red-500 p-[6px_20px] text-white rounded-lg' onClick={()=>{deleteData(ind)}}>Delete</button>
    </li>
  )
}

export default TaskLi