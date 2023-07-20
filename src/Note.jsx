import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Note =(props)=>{
    const deleteEvent = ()=>{
        props.deleteitem(props.id);
    }
    return(
        <>
        <div className='note my_notes'> 
         <h1 className=''>{props.title}</h1>
         <p className=''>{props.content}</p>
         <Button className='btn' onClick={deleteEvent}>
            <DeleteIcon className='deleteIcon'/>
         </Button>
        </div>
        </>
    );
}
export default Note;