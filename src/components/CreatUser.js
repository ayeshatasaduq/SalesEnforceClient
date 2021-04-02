import React from 'react';
import useStyles from './CreateUserDesign';
import Card from '@material-ui/core/Card';
import {Container , Col , Row , Form , Button} from 'react-bootstrap';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export default function CreateUser() {
  const classes = useStyles();

  return (
      <div>
            <div className={classes.display}>
        <h3 style={{marginLeft : '2%' , fontWeight: 'bold'}}>Create User</h3>
        
        </div>
    <Card className={classes.card}>
    <Form className={classes.form}>
  <div>
    <Form.Label className={classes.labellefttop}>User Type</Form.Label>
    <Form.Control className={classes.textDesignTop}  as='select' >
      <option>Employee</option>
    
      </Form.Control>
   </div>
  <div className={classes.display}>
  <Form.Label className={classes.labelleft}>First Name</Form.Label>
  <Form.Label className={classes.labelleft}>Last Name</Form.Label>
  </div>
  
    <div className={classes.display}>
      <Form.Control className={classes.textDesign} placeholder="Mendoza"/>
    
      <Form.Control className={classes.textDesign} placeholder="Carver"/>
    </div>
    <div className={classes.display}>
    <Form.Label className={classes.labelleft}>Phone Number</Form.Label>
    <Form.Label className={classes.labelleft}>Email</Form.Label>
    </div>
    <div className={classes.display}>
      <Form.Control className={classes.textDesign} placeholder="+1 234 5678 9012"/>
      <Form.Control className={classes.textDesign} placeholder="max@automotivedriving.com"/>
  </div>
  <div className={classes.display}>
    <Form.Label className={classes.labelleft}>Country</Form.Label>
    <Form.Label className={classes.labelleft}>State</Form.Label>
    </div>
    <div className={classes.display}>
    <Form.Control className={classes.textDesign}  as='select' >
      <option>United States</option>
      <option>Arab Emirates</option>
      <option>United Kingdom</option>
      <option>Australia</option>
      </Form.Control>
   
      <Form.Control className={classes.textDesign}  placeholder="Wyaming" />
    </div>
    <div className={classes.display}>
    <Form.Label className={classes.labelleft}>City</Form.Label>
    <Form.Label className={classes.labelleft}>Adress</Form.Label>
    </div>
    <div className={classes.display}>
      <Form.Control className={classes.textDesign} placeholder="Casper"/>
      <Form.Control className={classes.textDesign} placeholder="1045 LoremIpsum street 5"/>
    </div>
    <div className={classes.display}>
    <Form.Label className={classes.labelleft}>Password</Form.Label>
    <Form.Label className={classes.labelleft}>Re-password</Form.Label>
    </div>
    <div className={classes.display}>
      <Form.Control className={classes.textDesign} type="password" placeholder="123456"/>
      <Form.Control className={classes.textDesign} type='password' placeholder="123456"/>
    </div>
    <div>
    <Button variant="light" className={classes.cancel}>Cancel</Button>
    <Button variant="info" className={classes.save}>Create</Button>
    </div>
    </Form>

    </Card>
    </div>
  );
}