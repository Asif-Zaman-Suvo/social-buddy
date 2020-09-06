import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';

const Posts = () => {

    const [posts,setPosts]=useState([])

   useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts`)
       .then(res => res.json())
       .then(data =>setPosts(data))
   },[])


    return (
        <div>           
            {
                posts.map(pt => <Title post={pt}></Title>)
            }

    
            
            
        </div>
    );

    
};

export default Posts;



