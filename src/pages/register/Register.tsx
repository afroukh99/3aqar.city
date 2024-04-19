import React, { useState } from 'react'
import "./register.scss"

const Register: React.FC = () => {


    interface ValuesType {
        fullName : string,
        username : string,
        email : string,
        phone : string | number,
        password : string ,
        confirmPass : string,
    }


    const [values ,setvalues] = useState<ValuesType>({
        fullName : "",
        username : "",
        email : "",
        phone : "",
        password : "",
        confirmPass :""
    })

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target 
    setvalues({...values , [name] : value})
}



    return (
        <div className='register'>
            <form action="">
                <h1>Create new account</h1>
                <div className="inputs-container">
                    <input onChange={handleChange} name='fullName' type="text" placeholder='Full Name' />
                    <input onChange={handleChange} name='username' type="text" placeholder='Username' />
                </div>
                <div className="inputs-container">
                    <input onChange={handleChange} name='email' type="email" placeholder='Email address' />
                    <input onChange={handleChange} name='phone' type="number" placeholder='Phone Number' />
                </div>
                <div className="inputs-container">
                    <input onChange={handleChange} name='password' type="password" placeholder='Password' />
                    <input onChange={handleChange} name='confirmPass' type="password" placeholder='Confirm password' />
                </div>
                <div className="down">
                    <button>Register</button>
                    <span>Got an account? <b> login</b></span>
                </div>
                <button className='google-btn'> <img src="google.png" alt="" /> Sign up with Google</button>
            </form>
        </div>
    )
}

export default Register