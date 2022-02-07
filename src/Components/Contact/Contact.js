import React,{useState} from 'react';
import './Contact.css';



 function Contact() {
        const [input,setInput]= useState('');
        const [textInput,setTextInput]=useState('');
      
        const onChange =(e)=>{
         setInput(e.target.value)
        }
        const onTextChange =(e)=>{
          setTextInput(e.target.value)
         }
        const onhandleSubmit =(e)=>{
          e.preventDefault()
          setInput('')
          setTextInput('')
         }
        return (
            <div className='Contact'>
                <h1>Contact Me</h1>
                <div className='contact-1'>
      <form  onSubmit={onhandleSubmit} className='form'>
          <input 
          style={{padding:'5px 33px', borderRadius:'5px', border:'none'}}
          className='form-control'
          placeholder='email address'
          type='text'
          value={input}
          onChange={onChange}
          />
          <br/>
          <textarea placeholder='message'
          value={textInput}
          onChange={onTextChange}
           style={{ margin:'2rem',borderRadius:'5px', border:'none'}}
           className='form-control' cols='40' rows='9'>
      
          </textarea>
          <br />
          <button style={{padding:'5px 23px', borderRadius:'5px', border:'none'}}>Submit</button>
      </form>
      
      
            </div>
            </div>
  )
}

export default Contact;
