import React, { useState } from 'react'
import "./login.scss"






const Login: React.FC = () => {
    type InputsType = {
        username : string,
        password : string,
    }
    
    const [input , setInput] = useState<InputsType>({
        username : "",
        password : "",
    })
    
    
    const handleChange =  (e :React.ChangeEvent<HTMLInputElement> ) => {
            const {name , value} = e.target;
            setInput({...input,[name] : value})
    }

    return (
        <div className='login'>
            <form action="">
                <h1>Login to your account</h1>
                <input onChange={handleChange} name='username' type="text" placeholder=' Username' />
                <input onChange={handleChange} name='password' type="password" placeholder=' Password' />
                <div className="down">
                    <button>Login</button>
                    <span>Forgot password?</span>
                </div>
                <button className='google-btn'> <img src="google.png" alt="" /> Sign in with Google</button>
            </form>
        </div>
    )
}

export default Login