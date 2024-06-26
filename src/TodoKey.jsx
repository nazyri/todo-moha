import React from 'react'
import TodoButton from './TodoButton'

export default function TodoKey({Tareas, onComplete, onDeleteItem}) {

  return (
    <>
    <div>
        {
            Tareas.map((Tarea,index) => (
                <TodoItem key = {`todo-${index}`} Tarea = {Tarea} onComplete={onComplete} onDeleteItem= {onDeleteItem}/>
            ))
        }
    </div>
    </>
  )
} 