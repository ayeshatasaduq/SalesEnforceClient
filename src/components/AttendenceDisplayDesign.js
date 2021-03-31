import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({
card: {
  width  : '96%',
  margin : '2%',
  height : '700px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius : '10px',
  
},
root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: '2%',
    color : 'black',
    fontWeight:"bold"
  },
  
  button:{
    backgroundColor : `#1e90ff`, 
    color : 'white',
    borderRadius : '5px',
    marginRight : '2%',
    textTransform : 'none',
    display : 'flex',
    marginLeft:'2%',
    width:"25%",
    padding:"2%"
    
  },
  displayclass:{
    display:'flex' , 
     justifyContent: "space-between" 
  },
  attendencecards:{
      margin:"2%",
      width:"22%",
      borderRadius : '10px',
      padding:"2%",
      height : "130px"
    },
  annual:{
    color:`#6495ed`,
    backgroundColor:"white",
    borderRadius:"25px",
    margin:"2%"
  },
  casual:{
    color:`#ff7f50`,
    backgroundColor:"white",
    borderRadius:"25px",
    margin:"2%"
  },
  sick:{
    color:`#7b68ee`,
    backgroundColor:"white",
    borderRadius:"25px",
    margin:"2%"
  },
  holiday:{
    color:"gray",
    backgroundColor:"white",
    borderRadius:"25px",
    margin:"2%",
    fontSize:"large"
  },
  headingrow: {
    textAlign:'left' ,
     fontWeight : 'bold',
     
},
normalrow:{
    textAlign:'left' ,
    
    
   
},
pending:{
    backgroundColor:`#fffff0`,
    color:`#ff7f50`,
    width:"30%",
    textTransform:"none"
},
approved:{
    backgroundColor:`#98fb98`,
    color:"green",
    width:"30%",
    textTransform:"none"
},
pagination:{
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width:"20%",
    margin:"1%"
},
}));

export default useStyles;
