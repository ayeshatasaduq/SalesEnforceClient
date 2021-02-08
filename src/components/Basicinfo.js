import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { BrowserRouter, Route, Link } from "react-router-dom";
import useStyles from './BasicinfoDesign';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Basic from './Basic';
import Attendence from './Attendence';
import Schedule from './Schedule';
import Button from '@material-ui/core/Button';
export default function Basicinfo() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.display}>
        <h2 style={{marginLeft : '2%'}}>Profile</h2>
        <Button className={classes.button} href="/profile">Edit Profile</Button>
        </div>
        <BrowserRouter>
        <Route exact path='/' component={Basic} />
        <Card className={classes.card}>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
    
      <Link to="/" className={classes.title}>
        <h5>Basic Info</h5>
      </Link>
      <Link to="/attendence" className={classes.title}>
       <h5> Attendence</h5>
      </Link>
      <Link to="/location" className={classes.title}>
        <h5>Location</h5>
      </Link>
      <Link to="/schedule" className={classes.title}>
        <h5>Schedule</h5>
      </Link>

      
      
    </Toolbar></AppBar></div>
    <Route exact path='/attendence' component={Attendence} />
    <Route exact path='/schedule' component={Schedule} />
    </Card>
    </BrowserRouter>
    </div>
  );
}