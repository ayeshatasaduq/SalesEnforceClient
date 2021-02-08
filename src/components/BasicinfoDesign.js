
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


card: {
  width  : '96%',
  margin : '2%',
  height : '650px',
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
    justifyContent : 'space-between', 
  },
  button:{
    backgroundColor : `#48d1cc`, 
    color : 'white',
    paddingLeft : '1%',
    paddingRight : '1%',
    borderRadius : '10px',
    marginRight : '2%',
    textTransform : 'none',
  }
}));

export default useStyles;