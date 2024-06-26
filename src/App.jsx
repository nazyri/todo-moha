import { useEffect, useState } from 'react'
import './App.css'
import TodoKey from './TodoKey'
import TodoVacios from './TodoVacios'


function App() {
  
  const [Tareas , setTareas] = useState ([])
  const onComplete = (id) => {
    useEffect(() =>{
      const traerDatos = async()=>{
        const datos = await getTarea();
        setTareas(datos)
      }
      traerDatos()
    },[datos])
    setTareas(Tareas.map((Tarea) => {
      return Tarea.id === Number(id) ? {...Tarea, completed: !Tarea.completed} : Tarea;
      }))
  }
  const onDeleteItem = (id) => {
    //console.log('delete', id)
    setTareas([...Tareas].filter((Tarea) => Tarea.id !== id));
  }

  const addTodo = (newTodo) =>{
      console.log('newTodo', newTodo);
      let newItem = {id : +new Date(), task: newTodo, completed: false};
      
      setTareas([...Tareas, newItem])
  }

  
    
  return (
    <>
    <p className='container'>
      <TodoVacios addTodo={addTodo}/>
      <TodoKey Tareas={Tareas} onComplete ={onComplete} onDeleteItem ={onDeleteItem}/>
    </p>
    </>
  )
  }

export default App
