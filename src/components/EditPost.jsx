import React from 'react'
import { useState, useEffect } from 'react'

export default function SinglePost(props) {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch("https://kekambas-blog.herokuapp.com//blog/posts/1")
            .then(res => res.json())
            .then(data => {
                let postData = data
                setPost(postData)
            })
    }, [])

    return (
        <>
            <h1 className='text-center mt-4'>Single Post</h1>

            <h3>{post.title}</h3>
            <h4>{post.content}</h4>
        </>
    )
}