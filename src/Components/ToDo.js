import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({text,updateMode,deleteToDo}) => {
  return (
    <div className='todo'>
        <div className="heading">
        <p>Your task is added</p>
        <div className="icons">
            <BiEdit className='icon' onClick={updateMode}/>
            <AiFillDelete className='icon1' onClick={deleteToDo}/>
        </div>
        </div>
        <div className="text">{text}</div>
    </div>
  )
}

export default ToDo