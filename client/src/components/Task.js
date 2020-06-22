import React, { Component } from 'react'
import axios from 'axios'
export class Task extends Component {

    state={
        title:''
    }
    componentDidMount(){
        axios.get('/todos/edit/'+ this.props.match.params.id).then(response=>{
            if(response.data){
              this.setState({
                  title:response.data.title
              })
            }
         }).catch(error=>{
             console.log(error)
         })
    }
  
    handleChange=(e)=>{
        this.setState({
        title:e.target.value
    })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const updated={
            title:this.state.title
        }
        axios.put('/todos/update/'+this.props.match.params.id,updated).then(response=>{
            if(response.data){
           console.log(response)
        }
        }).catch(error=>{
             console.log(error)
         })
         this.props.history.push('/todos')
    }

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                <button type='submit'>Addtodo</button>
                </form>
            </div>
        )
    }
}

export default Task
