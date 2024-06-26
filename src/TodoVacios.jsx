import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { darDatos } from './Metedos';


export default function TodoVacios({addTodo}) {

    const [userInput , setUserInput] = useState ('');
    const userRef = useRef("")

    async function getTarea() {
      try {
          const respuesta = await fetch('http://localhost:3000/api/task',{
              method: "GET",
              headers: {
                  "Content-Type": "application/json"
              },
          })
          let registro = await respuesta.json()
          console.log(registro);
  
      } catch (error) {
          console.error(error);
      }  
  }
    
    async function darDatos() {
      try {
          let tarea={
              nombre:userInput,
              estado:false
          }
          console.log(JSON.stringify(tarea))
          const respuesta = await fetch('http://localhost:3000/api/task',{
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(tarea)
          })
          let registro = await respuesta.json()
          console.log(registro);
          getTarea()
          console.log(`La tarea ${tarea.id} fue agregada`);
      } catch (error) {
          console.error(error);
      }  
  }

    const handleOnChange = (e) => {
        //console.log(e);
        setUserInput(e.currentTarget.value);
        
    }

    const handleSumit = (e) => {
      e.preventDefault();
      if (!userRef.current.value) {
          alert('Ingrese el texto')
            return  
        }
          addTodo(userInput);
          setUserInput('');
          darDatos()
    }



    return (
        <>
        <div style={{margin: '20px'}}>
            <form onSubmit={handleSumit}>
                <input ref={userRef} type='text' placeholder='Ingrese la tarea' value={userInput} onChange={handleOnChange}/>
                <button className='add'>add todo</button>
            </form>
        </div>
    
        </>
      )
    }


    //put cambiar
    //get obtener