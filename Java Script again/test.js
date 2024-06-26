// fetch('https://jsonplaceholder.typicoe.com/users')
// .then((res)=>{

//     console.log(res);
//     // const data = res.json();

//     return 'data';
// })
// .then((data)=>{
//     console.log(data);

//     // data.forEach((v)=>{
//     //     console.log('hello');
//     // });
// })
// .catch((error)=>{
//     console.log(error);
// })


const getData = async()=>{
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    console.log(res);
  }
  catch(err){
    console.log(err);
  }
};

getData();