import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Clock from './Timer';

function App() {


  return (
    <div className="container">
    <TodoList/>
    <Clock/>
    </div>
  );
}

export default App;
