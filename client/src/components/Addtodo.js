import React, { Component } from 'react'
import axios from 'axios'

export class Addtodo extends Component {

    state={
        title:''
    }

    addTodo=()=>{
        const task={title:this.state.title}
        if(task.title && task.title.length > 0){
           axios.post('/todos', task)
             .then(res => {
               if(res.data){
                //  this.props.getTodos();
                 this.setState({title: ""})
               }
             })
             .catch(err => console.log(err))
         }else {
           console.log('input field required')
         }
       }

       handleChange=(e)=>{
        this.setState({
        title:e.target.value
    })
    }
    render() {
        return (
            <div className='container'>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                <button type='submit'  onClick={this.addTodo}>Addtodo</button>
            </div>
        )
    }
}

export default Addtodo
