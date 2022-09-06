import React from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom'


export default function SignUp(props) {

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        let password = e.target.password.value
        let confirmPass = e.target.confirmPass.value
        if (password !== confirmPass){
           props.flashMessage('Passwords do not match, please try again', 'danger')
        } else {

        let myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        let formData = JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: password,
        })

        fetch('https://kekambas-blog.herokuapp.com/auth/users', {
            method: 'POST',
            headers: myHeaders,
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage('You successfully signid up!', 'success')
                    navigate('/')
            }
        })
    }
}

  return (
    <>
            
            <form id='form' onSubmit={handleSubmit}>
            <h3 id='signup' className="text-center">Sign Up</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='text' className='form-control' placeholder='Enter Email' name='email' />
                    <label htmlFor="username">Username</label>
                    <input type='text' className='form-control' placeholder='Enter Username' name='username' />
                    <label htmlFor="password">Password</label>
                    <input type='password' className='form-control' placeholder='Enter Password' name='password' />
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type='password' className='form-control' placeholder='Enter Password Again' name='confirmPass' />

                    <input id='button' type='submit' className='btn btn-primary w-100 mt-3' value='Register' />
                </div>
            </form>
        </>
  )
}
