import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { BrowserRouter, Route, Link } from "react-router-dom";
import useStyles from './DirectionDesign';
import Settings from './Settings';
import History from './History';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export default function Direction() {
  const classes = useStyles();
  return (
    <BrowserRouter>
        <Card className={classes.continue}>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
    
      <Link to="/profile" className={classes.title}>
        <h5>Setting</h5>
      </Link>
      <Link to="/history" className={classes.title}>
       <h5> History</h5>
      </Link>

      
      
    </Toolbar></AppBar></div>
    <Route exact path='/profile' component={Settings} />
      <Route exact path='/history' component={History} />
    </Card>
    </BrowserRouter>
  );
}