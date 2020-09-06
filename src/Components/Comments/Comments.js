import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(3),
        margin: 'auto',
        maxWidth: 1000,
        marginTop:'50px',
        backgroundColor:'Lightgray',
        color:'black',
        textAlign:'center',
        marginBottom:'10px'
        
    },


}));


const Comments = (props) => {

    // console.log(props)

    const {name,email,body}=props.comment;

    

    const randomStyle={
        height:'70px',
        width:'70px',
       
        borderRadius:'50%'
    }

   
    const classes = useStyles();

    return (
        <div className={classes.root}>

            
            <Paper className={classes.paper}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">


                                    <h1><img style={randomStyle} src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*70)}.jpg`} alt=""/> {name}</h1>


                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <p>Comments: {body}</p>

                                   
                                </Typography>

                                <Typography variant="body2" gutterBottom>
                                    <p><small>Contact: {email}</small></p>

                                   
                                </Typography>


                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>

          
            
        </div>
    );
}


export default Comments;