import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';

function App() {

                              
  return (
    
    <Router>
      <ScrollToTop />
<div className='App'>
<Nav />
  <Routes>

    <Route exact path='/'  element={<Home />}/>
    

     <Route exact path='/about'  element={<About />}/>

     <Route exact path='/projects'  element={<Projects/>}/>


    <Route exact path='/contact'  element={<Contact />}/>

  </Routes>
</div>
</Router>
      
    
  );
}

export default App;
