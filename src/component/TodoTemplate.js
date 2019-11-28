import React from 'react';
import './TodoTemplate.css'

const TodoTemplate=({form, children})=>{
    return(
        <main classNme="todo-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}
export default TodoTemplate;