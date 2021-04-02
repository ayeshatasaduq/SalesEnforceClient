
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


card: {
  
  margin: "1%",
  height : '660px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius : '5px',
},
form:{
  marginTop:"2%",
  marginBottom:"2%",
  marginLeft:"10%",
  marginRight:"10%"
},
display:{
    display : 'flex',
    justifyContent : 'space-between', 
  },
text:{
    fontWeight:"bold" , textAlign: "left"
},
textDesign:{
    width:'45%',
    
    
  },
  labelleft:{
    marginTop:'2%',
    width:"45%",
    textAlign:"left",
    color:'gray',
    marginBottom:'0.5%'
  },
  textDesignTop:{
    width:'100%', 
  },
  labellefttop:{
    marginTop:'2%',
    width:"100%",
    textAlign:"left",
    color:'gray',
    marginBottom:'0.5%'
  },
  cancel:{
    paddding: '10%',
    margin:'3%',
    width : '12%',
    color: 'gray',
    marginLeft : '60%',
    
  },
  save:{
    paddding: '10%',
    margin:'3%',
    width : '12%',
    color: 'white',
  }
}));

export default useStyles;