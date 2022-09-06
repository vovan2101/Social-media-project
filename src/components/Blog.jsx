import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Blog(props) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://kekambas-blog.herokuapp.com//blog/posts')
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    setPosts(data)
                }
            })
    }, [])

    return (
        <div >
            <h1 className='text-center mt-3'>Kekambas Party</h1>
            {posts.map((post, i) => {
                return (
                    <div className="card w-40 mt-4">
                    <div className="card-body">
                    <p className="card-text text-primary">{i + 1}: {post.author.username}</p>
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.content}</p>                     
                      <a href="#" className="btn btn-success m-2">Edit</a>
                      <a href="#" className="btn btn-danger">Delete</a>
                    </div>
                  </div>
                )}
            )}
        </div>
    )
}