import React , { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
 
function Login() {

    // useHistory to redirect

    const history = useHistory();

    // declaring or using useState for input fields initialize to ''
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    // login function 
    const login = e => {
        e.preventDefault();
        // do the login here..
        //console.log(email,password);

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            // logged In, redirect to Home page

            history.push('/');
        })
        .catch((e) => { alert(e.message)});
        
    }

    // register or signup function
    const register = e =>{
        e.preventDefault();
        // do the register logic

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // created a user and logged in , redirect to Homepage

            history.push('/');
        })
        .catch((e)=> alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
               <img 
               className="login__logo"
               src="logo.png" 
               alt="Logo"/>
            </Link>
            <div className="login__container">
               <div className="login__title">Sign-In</div>
               <form className="login__form">
               <label className="login__label">Email</label>
               <input 
               type="text"
               onChange={event => setEmail(event.target.value)} 
               className="login__input"
               />
               <label className="login__label">Password</label>
               <input 
               type="password" 
               className="login__input"
               onChange={event => setPassword(event.target.value)}
               />
               <button 
               onClick={login}
               className="login__btn">
               Login
               </button>
               </form>

               <p className="login__des">By creating an account, you agree to Amazon Conditions of Use and Privacy Notice</p>
            
            </div>
            <div className="sign__title">
              <span>New to Amazon?</span>
            </div>
           
            <button 
            onClick={register}
            className="signup__btn">
            Create your Amazon account
            </button>
           
        </div>
    )
}

export default Login
