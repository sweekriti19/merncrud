import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class List extends Component {
    render() {
        const TodoList=this.props.todos.length?(
            this.props.todos.map(todo=>{
                return (
                    <div className='card-panel' key={todo._id}>
                    <Link to={'/todos/edit/'+todo._id}>
                       <span className="blue-text text-darken-2" > {todo.title}</span> 
                       </Link>
                       <div>
                       <button className="waves-effect waves-light btn" onClick={()=>this.props.deleteTodo(todo._id)}> Delete </button> 
                       </div>
                    </div>
                )
            })
       
        ):
        
            (
                <p className="card-panel">No task left</p>
            )
        
        return(
            <div> {TodoList}</div>
        )
    }
}

export default List

