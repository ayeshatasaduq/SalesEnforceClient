import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({
card: {
  width  : '25%',
  height : '750px',
  margin:'-1%',
  padding: "2%"
},
  title: {
    marginLeft: '2%',
    color : 'black',
    fontWeight:"bold"
  },
  displayclass:{
    display:'flex' , 
     justifyContent: "space-between" 
  },
  attendencecard:{
      margin:"2%",
      width:"95%",
      borderRadius : '10px',
      height : "150px",
     backgroundColor: `#1e90ff`,
     color:'white',
     padding:"4%"
    },
    blue:{
        backgroundColor:`lightgray`,
        color:`#1e90ff`,
        textTransform:"none",
    },
    green:{
        backgroundColor:`#98fb98`,
        color:"green",
        textTransform:"none"
    },
    orange:{
        backgroundColor:`#ffefd5`,
        color:"orange",
        textTransform:"none"
    },
    inventoryCard:{
        height : '220px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius : '10px',
        padding: "2%",
        margin:'1%'
    },
    currentCard:{
        
        height : '400px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius : '10px',
        padding: "2%",
        margin:'1%',
        marginTop:"4%"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    smallestCard:{
        padding:'2%',
        width :'30%', 
        height: 'auto', 
        borderRadius: '10px',
        display: "flex",
        justifyContent:'space-between'
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor:'white'
      },
      taskCard:{
          margin:'2%',
          borderRadius: '10px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          width:'95%',
          height:'500px',
    
      },
      headingrow: {
        textAlign:'left' ,
         fontWeight : 'bold',
    },
    normalrow:{
        textAlign:'left' ,   
    },


}));

export default useStyles;
