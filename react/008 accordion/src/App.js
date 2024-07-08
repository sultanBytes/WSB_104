
import { useState } from 'react';
import AccordItem from './AccordItem';
import './App.css';
// import Cookies from 'js-cookie';

function App() {

  // Cookies.set('name', 'akshay');

  const faqs = [
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      question: 'What is the difference between a React component and a function?',
      ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
  ]
  // return (
  // <>
  // <div className='w-[800px] border m-auto bg-[olive]'>
  //   <h1 className='text-center text-white text-[20px]'>Accordion</h1>
  //   <div>
  //   {
  //     faqs.map((item, index)=>(
  //       <AccordItem key={index} quest={item.question} ans={item.ans}/>
  //     ))
  //   }
      
  //   </div>
  // </div>
  // </>
  // );

  const [opneAnsIn, setOpenAnsIn] = useState(null);

  const handleToggle = (ansIn)=>{

    if(ansIn === opneAnsIn){
      setOpenAnsIn(null);
    }
    else{
      setOpenAnsIn(ansIn);
    }
  }
  return (
    <>
    <div className='w-[800px] border m-auto bg-[olive]'>
      <h1 className='text-center text-white text-[20px]'>Accordion</h1>
      <div>
      {
        faqs.map((item, index)=>(
          <AccordItem 
          key={index} 
          quest={item.question} 
          ans={item.ans}
          ifOpen={opneAnsIn === index}
          handleAns={()=>{handleToggle(index)}}
          />
          
        ))
      }
        
      </div>
    </div>
    </>
    );
}

export default App;
