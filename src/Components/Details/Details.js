import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {postId}=useParams();

    const [post,setPost]=useState({})
    useEffect(()=>{
       const url=`https://jsonplaceholder.typicode.com/posts/${postId}`

       fetch(url)
       .then(res=>res.json())
       .then(data=>setPost(data))

    },[])
    return (
        <div>

            <h4>This is post details of: {postId}</h4>
            <h5>This is the userId: {post.userId}</h5>

            <h1>Post Title : {post.title}</h1>
            <h3>Post Body:  {post.body}</h3>
            
        </div>
    );
};

export default Details;