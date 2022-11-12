import logo from './logo.svg';
import './App.css';
import All from './components/All';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Resume from './components/Resume';


function App() {
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
