import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import useStyles from "./ProfileDesign";
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Upload from "./Upload";
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
export default function Profile() {
  const classes = useStyles();
  const[avaiable,setAvaiable]=useState(true);
  const[notavaiable,setNotavaiable]=useState(false);
  
  return (
    
    <Card className={classes.back}>
       <Upload/>
       <h3>Firstname Lastname</h3>
       <p style={{color:'gray'}}>-Employee</p>
       <Button  variant={avaiable ?   "contained" : "outlined"} color="primary"
        onClick={() => { setAvaiable(!avaiable) ; setNotavaiable(!notavaiable) }} style={{marginRight:'5%'}}>
        Avaiable
      </Button>
      <Button  variant={notavaiable ?  "contained" : "outlined" } color="primary"
        onClick={() => { setNotavaiable(!notavaiable) ; setAvaiable(!avaiable)}} style={{marginLeft:'5%'}}>
        Not Avaiable
      </Button>
      <div className={classes.display}>
      <Avatar className={classes.message}>
        <MailOutlineIcon/>
      </Avatar>
      <h4 className={classes.text}>someone@email.com</h4>
      </div>
      <div className={classes.display}>
      <Avatar className={classes.phone}>
        <CallOutlinedIcon/>
      </Avatar>
      <h4 className={classes.text}>0000-00000000</h4>
      </div>
      <div className={classes.display}>
      <Avatar className={classes.location}>
    <LocationOnOutlinedIcon/>
      </Avatar>
      <h4 className={classes.text}>Home number, Street number, City and State</h4>
      </div>
    </Card>
    
  );
}