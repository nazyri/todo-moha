import React from 'react'
import TodoItem from './TodoButton'

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