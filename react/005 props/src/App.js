import './App.css';
import Card from './components/Card';

function App() {

  const dataArr = [
    {
      title:'card 1',
      content: 'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      title:'card 2',
      content: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      title:'card 3',
      content: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      title:'card 4',
      content: 'Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      title:'card 5',
      content: 'Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
      title:'card 6',
      content: 'Lorem 6 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    }
  ];

  // const datas = [];

  return (
    <>
      <div className='container'>
        
        {/* {
          
          dataArr.forEach((item, index)=>{
            datas.push(<Card title={item.title} content={item.content} />)
          })
        }
       {datas} */}


       {
        dataArr.map((item)=>(
          <Card title={item.title} content={item.content} />
        ))
       }
      </div>
    </>
  );
}

export default App;
