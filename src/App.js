import logo from './logo.svg';
import './App.css';
import All from './components/All';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Resume from './components/Resume';
import { useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';


function App() {
  useEffect(()=>{
    alert('Still working on it,will be done soon')
  },[])
  return (
    <Router>
      
    <div className='App'>
      <Routes>
    
        <Route exact path='/' element={<All />} />
         <Route exact path='/Resume' element={<Resume />} />
        {/* <Route exact path='/BlogLayout'  element={<BlogLayout />}/> */}
        {/* <Route exact path='/single' element={<Single />} /> */} 
      
      
      </Routes>
    </div>
    </Router>

  );
}

export default App;
