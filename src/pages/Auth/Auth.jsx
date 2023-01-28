import React, {useState}from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
const Auth = () => {
    const [isSignup,setIsSignup] = useState(false)
    const handleSwitch =()=>{
        setIsSignup(!isSignup)
    }
  return (
    
    <section class ='auth-section'>
        {isSignup &&<AboutAuth/>}
        <div class ='auth-container-2'>
        {!isSignup && <img src={icon}alt='stack overflow' className='login-logo'/>}
     <form >
      {
        isSignup &&(
            <label htmlFor="name">
                <h4>Display name</h4>
                <input type="text" id='name'name ='name' />
            </label>
        )
      }
      <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" id='email'name ='email' />
            </label>
            <label htmlFor="password">
                <div style ={{display:"flex",justifyContent:"space-between"}}>
                <h4>Password</h4>
                {! isSignup && <p style={{color:"#007ac6",fontSize:"13px"}}> forgot password</p>}
                </div>
                <input type="password" id='password'name ='password' />
                <p style={{color:"#666767",fontSize:"13px"}}>Passwords must contain at least eight<br/> charachters,including at least 1 letter and 1<br/>number</p>
            </label>
            {
                isSignup &&(
                    <label htmlFor="check">
                        <input type="checkbox" id='check' />
                        <p style={{fontSize:"13px"}}>Opt-in to recive occasional,<br/>product updates,user research invitations,<br/>company announcement and digests</p>
                    </label>

                )
            }
            <button type= 'submit'className='auth-btn'>{ isSignup?'Sign up':'Log in'}</button>
        {
            isSignup &&(
                <p style={{color:"#666767",fontSize:"13px"}}>
                    By clicking "Sign up" you agree to our
                    <span style={{color:"#007ac6"}}> term of<br/> service </span>,
                    < span style={{color:"#007ac6"}}> privacy policy </span>and
                    <span style={{color:"#007ac6"}}> cookie policy</span>
                </p>
            )
        }
     
     </form>
       <p>
        {isSignup? 'Already hava an account?':"Don't have an account "}
        <button type='button' className='hanle-switch-btn'onClick={handleSwitch}>{isSignup?"Log in":'signup'}</button>
       </p>


        </div>
    </section>
  )
}

export default Auth