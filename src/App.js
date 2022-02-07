import './App.css';
import { useState } from 'react';
import All from './Components/All/All';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {

                              
  return (
    <div className="App">
      
      <Nav />
      <All />
    </div>
  );
}

export default App;
