import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Clock from './Timer';
import Weather from './Weather';

function App() {


  return (
    <div className="container">
    <TodoList/>
    <Clock/>
    <Weather weather='맑음'/>
    </div>
  );
}

export default App;
