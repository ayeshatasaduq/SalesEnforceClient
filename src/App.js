
import React from 'react';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import DrawerLeft from './components/DrawerLeft'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Direction from './components/Direction';
function App() {
  const useStyles = makeStyles({ 
    footer: {
      display: 'flex',
      justifyContent: "space-between"
    
  },
  

  });
  const classes = useStyles();
  return (
    <div className="App">
     
     <Navbar/>
     <h2 style={{marginLeft:'-88%'}}>Profile</h2>
  
     <div className={classes.footer}>
       <Profile/>
       <Direction/>
     </div>
    </div>
  );
}

export default App;
