import React from 'react'

export default function TodoButton({Tarea, onComplete, onDeleteItem}) {

    const getStyle = () => {
        return {
            textDecoration: Tarea.completed ? 'Line-through' : 'none',
            margin: '20px',
            border: '1px solid #fff',
            backgroudColor: '#ccf7e3'
            }
            }
            return (
                <>
    <div style={getStyle()}>
        <input type='checkbox' checked={Tarea.completed}
            onChange={() => onComplete(Tarea.id)}
            />
        {Tarea.task}
        <button className='add-btn' onClick={() => onDeleteItem(Tarea.id)}>x</button>
    </div>
        
    </>
  )
  }
