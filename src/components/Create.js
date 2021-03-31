import React from 'react';
import useStyles from './CreateDesign';
import Card from '@material-ui/core/Card';
import Image from 'react-bootstrap/Image';
import pic from "./Capture.PNG";
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
export default function Create() {
  const classes = useStyles();
  

  return (
      <div>
    <Card className={classes.card}>
        <div className={classes.display}>
    
        <div className={classes.center1}>
            <h2 className={classes.text}>
                What You Create?
            </h2>
            <h6 className={classes.text}>
                Lorem Ipsum is simply dummy text of printing and typesetting industry.
            </h6>
            </div>
            <div className={classes.center2}>
            <Image src={pic} rounded />
            </div>
        </div>
        <div className={classes.display}>
            <Card className={classes.smallercard}>
                <div style={{marginRight:"-90%"}}>
            <CalendarTodayOutlinedIcon style={{color:`#6a5acd`}}/>
            </div>
            <div style={{marginLeft:"-50%"}}>
            <h6 style={{fontWeight:"bold"}}>Create Schedule</h6>
            <p style={{ marginLeft:"5%"}}>Lorem Ipsum is simply</p>
            </div>
            </Card>
            <Card className={classes.smallercard}>
                <div style={{marginRight:"-90%"}}>
            <PermIdentityIcon style={{color:`#6a5acd`}}/>
            </div>
            <div style={{marginLeft:"-50%"}}>
            <h6 style={{fontWeight:"bold"}}>Create User</h6>
            <p style={{ marginLeft:"5%"}}>Lorem Ipsum is simply</p>
            </div>
            </Card>
            <Card className={classes.smallercard}>
                <div style={{marginRight:"-90%"}}>
            <PermIdentityIcon style={{color:`#6a5acd`}}/>
            </div>
            <div style={{marginLeft:"-50%"}}>
            <h6 style={{fontWeight:"bold"}}>Create Employee</h6>
            <p style={{ marginLeft:"5%"}}>Lorem Ipsum is simply</p>
            </div>
            </Card>
            <Card className={classes.smallercard}>
                <div style={{marginRight:"-90%"}}>
            <PermIdentityIcon style={{color:`#6a5acd`}}/>
            </div>
            <div style={{marginLeft:"-50%"}}>
            <h6 style={{fontWeight:"bold"}}>Create Employee</h6>
            <p style={{ marginLeft:"5%"}}>Lorem Ipsum is simply</p>
            </div>
            </Card>
        </div>

    </Card>
    </div>
  );
}