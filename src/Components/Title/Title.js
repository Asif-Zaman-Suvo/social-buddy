import React from 'react';
import Button from '@material-ui/core/Button';
import './Title.css';

const Title = (props) => {
 const {title,id}= props.post;

 return (
        <div className="posts">
            <h4>Post No: {id}</h4>
            <h3>{title}</h3>  

            <Button variant="contained" color="secondary">See More</Button>
        </div>
    );
};

export default Title;