
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


card: {
  
  margin: "1%",
  height : '660px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius : '5px',
  padding: '3%',
},
display:{
    display : 'flex',
    justifyContent : 'space-between', 
  },
text:{
    fontWeight:"bold" , textAlign: "left"
},
center1:{
    justifyContent:"center" ,
     width:"50%",
     marginTop:"10%",
     marginRight:"3%",
     marginLeft: '10%',
     marginBottom:'5%'
},
center2:{
    justifyContent:"center" ,
     width:"50%",
     marginRight:"10%",
     marginLeft:"3%",
     marginTop:"7%",
     marginBottom:'5%'
},
smallercard:{
    margin:"2%",
    width:"20%",
    padding:"2%",
    
    borderColor: `#6a5acd`,
    backgroundColor: `#e0ffff`,
    borderRadius:"10px"


}


}));

export default useStyles;