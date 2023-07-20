import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Create_note from './Create_note';
import Note from './Note';
import './App.css';
 

function App() {
  const [item,setItem]=useState([]);
  const autoNote =(note)=>{
      setItem((preValue)=>{
        return [...preValue,note];
      })
  };
  const onDelete =(id) =>{
       setItem((preValue)=>
       preValue.filter((val1,indx)=>{
        return indx!==id;
       }))
  }
  return (
    <>
    <Header/>
    <Create_note passnote={autoNote}/>
    {
      item.map((val,index)=>{
        return <>
        <Note key={index}
        id={index}
        title={val.title}
        content={val.content}
          deleteitem={onDelete}
        />
        </>
        
      })
    }

    
    <Footer/>

    </>
  );
}

export default App;
