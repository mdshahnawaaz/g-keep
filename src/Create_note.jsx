import React,{ useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Create_note =(props)=>{
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
    const [expand,setExpand]=useState(false);
   
    const Inputevent =(event)=>{
        const{name,value}=event.target;
        setNote((preValue)=>{
           return{
                ...preValue,
                [name]:value,
           };
        });
    }
    const autoNote =()=>{
            props.passnote(note);
            setNote({
                title:"",
                content:"",
            })
    }
    const changeEvent=()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(false);
    }
    return(
        <>
        <div className='main_note form' onDoubleClick={btoNormal}> 
        { expand ?
         <input type='text' 
         autoComplete='off' 
         name="title"  
         value={note.title} 
         onChange={Inputevent} 
         placeholder='Title'/>:null}
         <br/>
         <textarea className='text_area'
          row="" column=""  
          name="content" 
          onChange={Inputevent} 
          value={note.content}  
          placeholder='write the notes ...'
          onClick={changeEvent}></textarea>
          <br/>
          {
            expand?
            <Button className="MuiButton-root" onClick={autoNote}>
            <AddIcon/>
         </Button>:null
          }
         
        </div>
        </>
    );
}
export default Create_note;