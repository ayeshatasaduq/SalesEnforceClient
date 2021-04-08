import React from 'react';
import useStyles from './LoginDesign'
import Avatar from '@material-ui/core/Avatar';
import Image from 'react-bootstrap/Image';
import pic from "./SignIn.PNG";
import logo from './Logo.PNG';
import {Container , Col , Row , Form , Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
export default function Login() {
  const classes = useStyles();
  

  return (
      <div className={classes.display}>
    <div className={classes.formdiv}>
       <div style={{display:'flex', justifyContent:'center', marginTop:'20%'}}>
          
          <div className={classes.display}> <Avatar style={{backgroundColor:'white'}}>
               <Image src={logo}/>
           </Avatar>
           <h5 style={{fontWeight:'bold'}}>Sales Enforce</h5>
           </div>
       </div>
       <h3 style={{fontWeight:'bold'}}>Sign in to your account</h3>
       <div className={classes.textdiv}>
       <InputGroup className="mb-3" className={classes.textDesign}>
  <InputGroup.Prepend>
    <InputGroup.Text>
    <MailOutlineIcon style={{color:`#1e90ff`}}/>
    </InputGroup.Text>
  </InputGroup.Prepend>
  <Form.Control  placeholder="user@name.com"/>
</InputGroup>
      
      </div>
      <div className={classes.textdiv}>
      <InputGroup className="mb-3" className={classes.textDesign}>
  <InputGroup.Prepend>
    <InputGroup.Text>
    <LockOpenIcon style={{color:`#1e90ff`}}/>
    </InputGroup.Text>
  </InputGroup.Prepend>
  <Form.Control  placeholder="123456789"/>
</InputGroup>
      </div>
  <Button className={classes.save}>LOGIN</Button>
  <div className={classes.textdiv}>
  <div className={classes.display} style={{width:'28%'}}>
  <Form.Check type="checkbox" label="Remember me" style={{marginTop:'2%'}}/>
  <Button variant="link">Forgot Password?</Button>
  </div>
  </div>
  <div className={classes.textdiv}>
  <div style={{width:'28%', display:'flex', justifyContent:'center'}}>
  <p style={{marginTop:'4%'}}>Don't have an account?</p>
  <Button variant="link">Sign Up</Button>
  </div>
  </div>
    </div>
    <div className={classes.imagediv}>
        <Image src={pic} className={classes.image}/>
    </div>
    </div>
  );
}