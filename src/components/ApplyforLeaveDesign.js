
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({

    textDesignleft:{
        width:'40%',
        marginLeft:'2%',
        color:'gray',
        float:"left"
      },
      labelleft:{
        display : 'flex',
        marginTop:'2%',
        marginLeft:'2%',
        color:'black',
        marginBottom:'0.5%'
      },
      textDesignright:{
        width:'25%',
        marginLeft:'2%'
      },
      labelright:{
        marginTop:'2%',
        display : 'flex',
        marginLeft:'26%',
        color:'black',
        marginBottom:'.5%'
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor:`#f0f8ff`
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
    padding:"1.5%"
  },
  smallestcard:{
    width  : '30%',
    marginTop:"2%",
    marginBottom:"2%",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius : '10px'
  },
 
root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: '2%',
    color : 'black'
  },
  display:{
    display : 'flex',
    justifyContent : 'left', 
  },
  button:{
    backgroundColor : `#48d1cc`, 
    color : 'white',
    paddingLeft : '2%',
    paddingRight : '2%',
    borderRadius : '5px',
    marginRight : '2%',
    textTransform : 'none',
    display : 'flex',
        marginTop:'2%',
        marginLeft:'2%',
    
        marginBottom:'0.5%'
  },
  displayclass:{
    display:'flex' , 
     justifyContent: "space-between" ,
      margin:"4%"
  }
}));

export default useStyles;
