import { useEffect, useState } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import TaskLi from './TaskLi';

function App() {
  const [inpVal, setInpVal] = useState('');
  const [taskdata, setTaskdata] = useState([]);
  const addData = ()=>{
    if(!inpVal) return alert('Please enter a value');

   let oldData =  Cookies.get('to-list-104') || [];

   if(typeof(oldData) === 'string'){
    oldData = JSON.parse(oldData);
   }
   
   const dataObj = {
    id: Math.floor(Math.random() * 1000000000000),
    value: inpVal,
    status:false
   };

   oldData.push(dataObj);

   Cookies.set('to-list-104', JSON.stringify(oldData));

   setInpVal('');
   showdata();

  };


  const showdata = ()=>{
    let oldData =  Cookies.get('to-list-104') || [];
    if(typeof(oldData) === 'string'){
      oldData = JSON.parse(oldData);
      }

      setTaskdata(oldData);

      
  }

  useEffect(()=>{
    showdata();
  },[]);

  const handleCheckData = (id, newStatus)=>{
    const arrToSet = [...taskdata];
    arrToSet[id].status = newStatus;

    Cookies.set('to-list-104', JSON.stringify(arrToSet));
    showdata();
  };

  const handleDeleteData = (id)=>{
    const res = window.confirm('Are you sure to delete data');
    if(!res) return

    const arrToSet = [...taskdata];
    arrToSet.splice(id, 1);

    Cookies.set('to-list-104', JSON.stringify(arrToSet));
    showdata();
  }

  return (
   <div className='to-do-container w-[800px] mx-auto p-[20px] bg-[purple]'>
    <h1 className='text-center text-white text-[30px]'>My To Do List</h1>
    <div className=''>
      <input type="text" value={inpVal} onChange={(e)=>{setInpVal(e.target.value)}} className='w-[100%] h-[40px] rounded my-[15px]'/>
      <button onClick={addData} className='w-[50%] rounded-lg font-[600] block mx-[auto] bg-[lightgreen] py-[8px]'>Add Task</button>
    </div>

    <div className='to-list-body'>
      <ul className=''>
        {
          taskdata.map((item, index)=>(
            <TaskLi key={index} ind={index} data={item} checkData={handleCheckData} deleteData={handleDeleteData}/>
          ))
        }
      </ul>
    </div>
   </div>
  );
}

export default App;
