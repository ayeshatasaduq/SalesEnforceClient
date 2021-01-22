
import React from 'react';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import DrawerLeft from './components/DrawerLeft'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Direction from './components/Direction';



const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: "space-between"
  
},


}));
function App() {
  
  const classes = useStyles();
  return (
    <div className="App">
     
     <Navbar/>
    
        
     <h4 style={{marginLeft:'-88%' , padding:'1%'}}>Profile</h4>
  
     <div className={classes.footer}>
       <Profile/>
       <Direction/>
     </div>
  
    </div>
  );
}

export default App;
