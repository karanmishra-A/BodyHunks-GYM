import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l1wg4kt', 'template_t0gad3k', form.current, 'D4DfaObnCxFqpxkQ9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className='left-j'>
        <hr />
            <div>
                <span className='stroke-text'>Subscribe</span>
                <soan> to get latest</soan>
            </div>
            <div>
                <span>updates and</span>
                <soan className="stroke-text"> offers</soan>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter your Email address"/>
                <button className='btn btn-j'>Subscribe Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Join
