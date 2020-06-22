import React, { Component } from 'react'
import axios from 'axios'
import  Addtodo  from './Addtodo'
import List from './List'

export class Todo extends Component {
    state={
        todos:[]
    }
    componentDidMount(){
        this.getTodos()
       
    }
    getTodos(){
        axios.get('/todos').then(response=>{
            if(response.data){
                this.setState({
                    todos:response.data
                })
            }
         }).catch(error=>{
             console.log(error)
         })
    }
 
 deleteTodo=(id)=>{
     axios.delete(`/todos/${id}`).then(response=>{
         if(response.data){
            this.getTodos()
         }
     }).catch(error=>{
         console.log(error)
     })

 }
    render() {
        const {todos}=this.state
        return (
            <div>
        <h1>My Todo(s)</h1>
        <Addtodo/>
        <List todos={todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default Todo
