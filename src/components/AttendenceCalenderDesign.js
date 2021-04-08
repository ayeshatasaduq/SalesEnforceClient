import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({

root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: '2%',
    color : 'black',
    fontWeight:"bold"
  },
  
  button:{
    backgroundColor : `#4169e1`, 
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
     justifyContent: "space-between" ,
     margin:"4%"
  },
  card: {
    width  : '96%',
    margin : '2%',
    height : 'auto',
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
      display:{
        display : 'flex',
        justifyContent : 'left', 
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor:`#f0f8ff`
      }, 
}));

export default useStyles;
