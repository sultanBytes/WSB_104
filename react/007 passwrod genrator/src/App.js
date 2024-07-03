import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [pass, setPass] = useState('');
  const [ifNum, setIfNum] = useState(false);
  const [ifChar, setChar] = useState(false);
  const [ifUpper, setUpper] = useState(false);

  const createPassword = ()=>{
    let string = 'abcdefghijklmnopqrstuvwxyz';

    if(ifUpper) string += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(ifNum) string += '1234567890';
    if(ifChar) string += '!@#$%^&*()?';
    
    let password = '';

    for(let i = 1; i <= length; i++){
      let random = Math.floor(Math.random() * string.length);
      password += string[random];

      
    }

    setPass(password);
  };

  useEffect(()=>{
    createPassword();
  },[ifNum, ifChar, ifUpper, length]);


  return (
    <>
      <div className='h-[100vh] w-full bg-[lightblue] grid place-items-center' >
        <div className='rounded bg-[white] p-[20px] w-[600px]'>
          <div className=''>
            <input type='text' value={pass} className='w-full rounded p-[6px] border border-black' />
          </div>
          <div className='mt-4 flex justify-between'>
            <div >
              <input min={8} max={20} value={length} onChange={(e) => { setLength(e.target.value); }} type='range' />
            </div>

            <div>
              <input onClick={(e)=>{setUpper(e.target.checked);}} type='checkbox' />
              <label>Uppercase</label>
            </div>

            <div>
              <input type='checkbox' onClick={(e)=>{setIfNum(e.target.checked);}} />
              <label>Number</label>
            </div>
            <div>
              <input type='checkbox' onClick={(e)=>{setChar(e.target.checked);}}/>
              <label>Special charactor</label>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
