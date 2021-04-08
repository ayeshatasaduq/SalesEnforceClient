import React from 'react';
import useStyles from './AttendenceCalenderDesign';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Avatar from '@material-ui/core/Avatar';
import Schedule from './Schedule';
export default function AttendenceCalender() {
  const classes = useStyles();


  return (
    <div>
      
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"1%"}}>
        <h3 className={classes.title}>Attedndence</h3>
        <Button className={classes.button}>Quick Leave </Button>
        </div>
        
        <Card className={classes.card}>
        
    <div style={{width : '75%'}}>
   <Schedule/>
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