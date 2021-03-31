import React from 'react';
import useStyles from './ApplyforLeaveDesign';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {Container , Col , Row , Form} from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Avatar from '@material-ui/core/Avatar';
export default function ApplyforLeave() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.display}>
        <h3 style={{marginLeft : '2%' , fontWeight: 'bold'}}>Apply for Leave</h3>
        
        </div>
        
        <Card className={classes.card}>
    <div style={{width : '75%'}}>
    <Form>
  <Form.Row>
  <Col>
    <Form.Label className={classes.labelleft}>Leave Type</Form.Label>
      <Form.Control className={classes.textDesignleft}  as='select' >
      <option>Select Leave Type</option>
      </Form.Control>
    </Col>
  </Form.Row>
  <Form.Row>
  <Col>
    <Form.Label className={classes.labelleft}>Date Type</Form.Label>
      <Form.Control className={classes.textDesignleft}  as='select' >
      <option>Select Date Type</option>
      </Form.Control>
    </Col>
  </Form.Row>
  <div style={{display : 'flex'}}>
  <Form.Label className={classes.labelleft}>To</Form.Label>
  <Form.Label className={classes.labelright}>From</Form.Label>
  </div>
  <div style={{display : 'flex'}}>
  
    
      <Form.Control className={classes.textDesignright}  type="date" />
      <Form.Control className={classes.textDesignright}  type="date" />
      
      </div>

      <Form.Row>
  <Col>
    <Form.Label className={classes.labelleft}>Inform To</Form.Label>
    <Form.Control className={classes.textDesignleft}  placeholder="hrenforce@gmail.com" />
    </Col>
  </Form.Row>
  <Form.Row>
  <Col>
    <Form.Label className={classes.labelleft}>Inform To</Form.Label>
    <Form.Control className={classes.textDesignleft}  placeholder="hrenforce@gmail.com" />
    </Col>
  </Form.Row>
  <Form.Row>
  <Col>
    <Form.Label className={classes.labelleft}>Reason</Form.Label>
    
    <textarea className={classes.textDesignleft} rows="5" placeholder="Type here leave reason"></textarea>
    </Col>
  </Form.Row>
  
  </Form>
  <div style={{display:"flex", marginTop: '9%'}}>
  <Button  variant="outlined" color="gray" className={classes.labelleft} style={{borderRadius : '5px'}} >Cancel</Button>
  <Button  variant="contained" className={classes.button }>Apply</Button>
      </div>
    </div>
    
    <Card className={classes.smallercard}>
      <h4 style={{display:'flex', margin:"4%",fontWeight: 'bold'}}>Leave Status</h4>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <card className={classes.smallestcard}>
          <h2>1</h2>
          <FiberManualRecordIcon style={{color:`#ff7f50`, fontSize:"small"}}/>
          <p style={{color:'grey'}}>
            Pending
          </p>
        </card>
        <card className={classes.smallestcard}>
          <h2>4</h2>
          <FiberManualRecordIcon style={{color:"green", fontSize:"small"}}/>
          <p style={{color:'grey'}}>
            Approved
          </p>
        </card>
        <card className={classes.smallestcard}>
          <h2>2</h2>
          <FiberManualRecordIcon style={{color:"red", fontSize:"small"}}/>
          <p style={{color:'grey'}}>
            Declined
          </p>
        </card>
      </div>
      <div className={classes.displayclass}>
        <h5 style={{fontWeight:"bold"}}>Total Leaves</h5>
        <p style={{color:'gray'}}>Taken Leaves</p>
      </div>
      
  <div className={classes.displayclass}>
    <div className={classes.display} style={{width:"60%"}}>
      <Avatar className={classes.large}>
    <LocalMallIcon style={{color:`#6495ed`}}/>
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Annual Leaves</h6>
        <p style={{display:"flex"}}>13 Days</p>
        </div>
        </div>
        <h3>6</h3>
      </div>
      <Divider/>
      <div className={classes.displayclass}>
      <div className={classes.display} style={{width:"60%"}}>
      <Avatar className={classes.large}>
        <EventIcon style={{color:`#ff7f50`}}/>
        </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Casual Leaves</h6>
        <p style={{display:"flex"}}>5 Days</p>
        </div>
        </div>
        <h3>2</h3>
      </div>
      <Divider/>
      
      <div className={classes.displayclass}>
      <div className={classes.display} style={{width:"60%"}}>
      <Avatar className={classes.large}>
      <LocalHospitalIcon style={{color:`#7b68ee`}}/>
      </Avatar>
      <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Sick Leaves</h6>
        <p style={{display:"flex"}}>3 Days</p>
        </div>
        </div>
        <h3>1</h3>
      </div>
      <Divider/>
      <div className={classes.displayclass}>
      <div className={classes.display} style={{width:"70%"}}>
      <Avatar className={classes.large}>
      <FilterHdrIcon style={{color:"gray"}}/>
      </Avatar>
      <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Holidays Vacation</h6>
        <p style={{display:"flex"}}>7 Days</p>
        </div>
        </div>
        <h3>4</h3>
      </div>
      
  
    </Card>
    </Card>
   
    </div>
  );
}