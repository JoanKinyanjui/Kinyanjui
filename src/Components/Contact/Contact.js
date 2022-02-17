import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';



 function Contact() {
        const [input,setInput]= useState('');
        const [inputTwo,setInputTwo]= useState('');
        const [textInput,setTextInput]=useState('');
      
        const onChange =(e)=>{
         setInput(e.target.value)

        }
        const onChangeTwo =(e)=>{
          setInputTwo(e.target.value)
 
         }
        const onTextChange =(e)=>{
          setTextInput(e.target.value)

         }
        const onhandleSubmit =(e)=>{
          e.preventDefault()
          setInput('')
          setInputTwo('')
          setTextInput('')
         }
        return (
          <div className='Contact-main'>
          <h1 className='h1'>~ Contact Me ~</h1>
            <div className='Contact'>
            <div className='contact-2'>
              <ul className='location'>
                <li >
                  <a> <i class="fas fa-2x fa-map-marker-alt"></i> <p  className='location-icon' >Nairobi,Kenya. </p></a>
                </li>
                <li>
                <a ><i class="fas fa-2x fa-2x fa-envelope"></i>  <p  className='location-icon' >kinyanjuijoan52@gmail.com </p></a>
                </li>
                <li>
                  <a> <i class="fas fa-2x fa-phone-alt"></i> <p  className='location-icon' > +254790236990 </p> </a>
                </li>
              </ul>
            </div>
                
                <div className='contact-1'>
      <form  onSubmit={onhandleSubmit} className='form'>
          <input 
          style={{padding:'5px 33px', borderRadius:'5px', border:'none'}}
          className='form-control'
          placeholder='Email address'
          type='text'
          value={input}
          onChange={onChange}
          />
            <input 
          style={{padding:'5px 33px',marginLeft:'1rem', borderRadius:'5px', border:'none'}}
          className='form-control'
          placeholder='Phone number'
          type='text'
          value={inputTwo}
          onChange={onChangeTwo}
          />
          <br/>
          <textarea placeholder='message'
          value={textInput}
          onChange={onTextChange}
           style={{ margin:'2rem',borderRadius:'5px', border:'none'}}
           className='form-control' cols='40' rows='9'>
      
          </textarea>
          <br />
          <Button 
          type='Submit'
          style={{
       color:'gray',
      margin:'auto', 
      padding:'2px 25px',
       borderRadius:'12px', 
       backgroundColor:'blueviolet',
       color:'black',
       border:'none'}}>Send</Button>
      </form>
      
      
            
    </div>
           
            </div>
            <div className='div-logo'>
              <img  className='logo' src='/Images/mylogo.png'/>
            </div>
            <div class='handcraft'>
              <hr />
        <div class='hr'>
 &copy2022|JoanKinyanjui|handcraftedbyme
            </div>
            </div>
            </div>
  )
}

export default Contact;
