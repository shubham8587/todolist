"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-lg'>{t.desc}</h6>
            <button onClick={()=>{
              deleteHandler(i);
            }} 
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
          </div>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>Shubham To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2x1 border-zinc-800 m-8 border-2 px-4 py-2' placeholder='Enter Task Here'
          value={title} onChange={(e) => {
            settitle(e.target.value);
          }
          }
        />
        <input type='text' className='text-2x1 border-zinc-800 m-8 border-2 px-4 py-2' placeholder='Enter Description Here'
          value={desc} onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className='bg-black text-white px-4 py-3 m-5 font-bold rounded'>Submit Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page