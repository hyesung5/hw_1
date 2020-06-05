import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
id=1;
state={
  todos:[],
};

handleInsert=(u_id, pass)=>{

  this.setState({
    todos: this.state.todos.concat({
      user_id: u_id,
      password: pass,
      id: this.id,
      done: false,
    }),
    
  },
  () => {
    this.state.todos.forEach((todo)=>{
      if(todo.done === true){
        this.handleUpdate(todo.id);
      }
      })
}
  );
  
  this.id++;



};

handleUpdate=(id)=>{

  this.setState({
    todos: this.state.todos.map((todo)=>{
      if(todo.id === id){
       
        return{
          ...todo,
          done:!todo.done,
        }
      }else {
        return{
          ...todo,
          done: false,
        }
      }
      
    })
  });

};

  render(){
      return(
        <div className='App'>
          <Form onInsert={this.handleInsert}
          />
          <List 
            todos={this.state.todos}
            onUpdate={this.handleUpdate}
            
          />
        </div>
      )
  }
  
}

export default App;
