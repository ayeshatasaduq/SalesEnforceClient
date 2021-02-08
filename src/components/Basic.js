import React from 'react';
import useStyles from './BasicDesign';
import Card from '@material-ui/core/Card';


export default function Basicinfo() {
  const classes = useStyles();
  return (
    <div className = {classes.footer}>
     <Card className={classes.adjustmargin}>
     <p className={classes.heading}>Total Time</p>
     <h4 style={{fontWeight : 'bold'}}>140h 30m</h4>
     </Card>

     <Card className={classes.card}>
     <p className={classes.heading}>Time at Work</p>  
     <h4 style={{fontWeight : 'bold' , color : 'blue'}}>137h 39m</h4>  
     </Card>

     <Card className={classes.card}>
     <p className={classes.heading}>Offline Time</p> 
     <h4 style={{fontWeight : 'bold'  , color : 'red'}}>05h 20m</h4>   
     </Card>

     <Card className={classes.card}>
     <p className={classes.heading}>Productivity</p>  
     <h4 style={{fontWeight : 'bold'  , color : 'green'}}>87.3%</h4>  
     </Card>
    </div>
  );
}