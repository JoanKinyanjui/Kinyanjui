import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import BlogLayout from './Components/Blog/BlogLayout';
import Single from './Components/Blog/SinglePost/Single';
import Write from './Components/Blog/Write/Write';
import Topbar from './Components/Blog/Topbar/Topbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Post from './Components/Blog/Posts';
import SinglePost from './Components/Blog/SinglePost/SinglePost';
import All from './Components/All';


function App() {

                              
  return (
    <Router>
      
    <div className='App'>
      <Routes>
    
        <Route exact path='/' element={<All />} />
        <Route exact path='/BlogLayout'  element={<BlogLayout />}/>
        <Route exact path='/single' element={<Single />} />
      
      
      </Routes>
    </div>
    </Router>
      
    
    




 
      
    
  );
}

export default App;
