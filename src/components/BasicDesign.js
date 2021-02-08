
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


card: {
  width  : '22.5%',
  marginTop : '1%',
  marginLeft : '0%',
  marginBottom : '1%',
  marginRight: '2%',
  height : '100px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius : '5px',
  padding: '1%',
  textAlign : 'left'
},
adjustmargin : {
    width  : '22.5%',
    marginTop : '1%',
    marginLeft : '2%',
    marginBottom : '1%',
    marginRight: '2%',
    height : '100px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius : '5px',
    padding: '1%',
    textAlign : 'left'
},
heading : {
    color:'gray',
    
},
footer: {
    display: 'flex',
    justifyContent: "space-between",
  
},
  

}));

export default useStyles;