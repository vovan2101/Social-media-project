import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePost.css';

export default function CreatePost(props) {

    let navigate = useNavigate()

    useEffect(() => {

        if (!props.loggedIn){
            props.flashMessage('You must be logged in to create a post', 'danger')
            navigate('/login')
        }
    
    })
       
    const handleSubmit = (e) => {
        e.preventDefault()

        let myHeaders = new Headers()
        let myToken = localStorage.getItem('token')
        myHeaders.append('Authorization', "Bearer" + myToken)
        myHeaders.append('Content-type', 'application/json')



        let data = JSON.stringify({
        "title": e.target.title.value,
        "body": e.target.body.value
    })

        fetch('https://kekambas-blog.herokuapp.com//blog/posts',{
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    props.flashMessage(`The post ${data.title} has been created`, 'success')
                    navigate('/blog')
                }
            })

    }
  return (
    <form id='form' onSubmit={handleSubmit}>
        <h3 id='create' className='text-center'>Create New Post</h3>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type='text' className='form-control' placeholder='Enter Title Here' name='title' />

            <label htmlFor="body">Body</label>
            <input type='text' className='form-control' placeholder='Enter Body Here' name='body' />

            <input id='button' type='submit' className='btn btn-success w-100 mt-3' value='Create Post' />
        </div>
    </form>
  )
}
