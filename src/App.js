import React, { Component } from 'react';
import './App.css';
import TodoTask from './TodoTask.js';



class App extends Component {

    render() {
      return (
        <div className="App">
<header className='App-header'>
     <div className='taskWork'>
     <TodoTask />
     
     </div>
    </header>
        </div>
      );
    }
  }

export default App;
