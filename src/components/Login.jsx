import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';

export default function Login(props) {

    let navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value

        let myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`))

        let response = await fetch("https://kekambas-blog.herokuapp.com//auth/token", {
            method: "POST",
            headers: myHeaders})

        if (response.ok){
            console.log('OK!')
            let data = await response.json()

            localStorage.setItem('token', data.token)

            props.login()
            props.flashMessage('You successfully loged in!', 'success')
            navigate('/blog')
        }else {
            props.flashMessage('Login or password are incorect, please try again', 'warning')
        }
    }


  return (
    <>
        
        <form id='form' onSubmit={handleSubmit}>
        <h3 id='login' className='text-center'>Login</h3>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type='text' className='form-control' placeholder='Enter Username' name='username' />
                    
            <label htmlFor="password">Password</label>
            <input type='password' className='form-control' placeholder='Enter Password' name='password' />
                    
            <input id='button' type='submit' className='btn btn-success w-100 mt-3' value='Login' />
            </div>
        </form>
    </>
  )
}
