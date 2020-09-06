import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './Title.css';
import { useHistory } from 'react-router-dom';

const Title = (props) => {
const {title,id}= props.post;

const history= useHistory();

const handleClick=(postId)=>{

    const url=`/posts/${postId}`
    history.push(url);
}

 return (
        <div className='posts'>


            <Grid item xs={12}>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
               

            <h4> No: {id}</h4>
            <h3> {title}</h3>  
            <br></br>

            
            <button onClick={()=>handleClick(id)} className='see-more'>See More</button>
            <br></br>
            <br></br>
            

         
            </Box>
            </Grid>          

           
        </div>
    );
};

export default Title;