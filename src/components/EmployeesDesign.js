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
    backgroundColor : `#48d1cc`, 
    color : 'white',
    paddingLeft : '1%',
    paddingRight : '1%',
    borderRadius : '10px',
    marginRight : '2%',
    marginLeft:"4%",
    textTransform : 'none',
    
  },
  displayclass:{
    display:'flex' , 
     justifyContent: "space-between" 
  },
  card: {
    width  : '96%',
    margin : '2%',
    height : '700px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius : '10px',
    display : 'flex',
      justifyContent : 'space-between',
  },
  smallercard: {
      width  : '25%',
      height : '700px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      borderRadius : '15px',
      padding:"2%"
    },
    approved:{
        backgroundColor:`#98fb98`,
        color:"green",
        
    },
    headingrow: {
        textAlign:'left' ,
         fontWeight : 'bold',
         
    },
    normalrow:{
        textAlign:'left' ,
        
        color: 'grey',
       
    },
    text: {fontWeight:"bold" ,
     textAlign : "left" ,
     marginBottom:"5%"},
     leftcontent:{
         display:"flex",
         justifyContent:"left",
         color:"gray",
         marginTop:"5%"
     },
     pending:{
        backgroundColor:`#fffff0`,
        color:`#ff7f50`,
        display:"flex",
        justifyContent:"left"
    },
}));

export default useStyles;
