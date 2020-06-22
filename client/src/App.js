import React from 'react';
import './App.css';
import Todo from './components/Todo';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Task from './components/Task';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
    <Switch>
     <Route exact path='/todos' component={Todo}/>
     <Route path='/todos/edit/:id' component={Task}/>
     </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
