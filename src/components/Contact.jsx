import React from 'react';
import './Contact.css';

const Contact = () => {
  
  return (
    <div className='contact'>
      <div className="social-media">
        <div className="get-in-touch">
          <lord-icon
              src="https://cdn.lordicon.com/vkweisbr.json"
              trigger="loop"
              style={{width:'200px', height:'200px'}}>
          </lord-icon>

          <h1 className='invitation'>Get in touch</h1>
        </div>

        <div className="contact-icon">
          <div className="social-icon">
            <lord-icon
              src="https://cdn.lordicon.com/gzmgulpl.json"
              trigger="loop"
              style={{width:'100px', height:'100px'}}>
            </lord-icon>
            abd.rauf.lamada@gmail.com
          </div>

          <div className="social-icon">
            <lord-icon
                src="https://cdn.lordicon.com/kjkiqtxg.json"
                trigger="loop"
                colors="outline:#242424,primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
                style={{width:'100px', height:'100px'}}>
            </lord-icon>
            +62 852-3637-5312
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact;
