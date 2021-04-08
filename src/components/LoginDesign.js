
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


display:{
    display : 'flex',
    justifyContent : 'space-between', 
  },
text:{
    fontWeight:"bold" , textAlign: "left"
},
image:{
    width:'100%',
    height:'100%'
},
imagediv:{
    width:'30%',
    height:'100%'
},
formdiv:{
    width:'70%',
    height:'100%'
},
textDesign:{
    width:'25%',  
},
textdiv:{
    display:'flex',
     justifyContent:'center', 
     margin:'2%'
},
save:{
    color:'white',
    backgroundColor:`#1e90ff`,
    width:'25%',
    
}
}));

export default useStyles;