
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({

card: {
  width  : '22%',
  margin : '2%',
  height : 'auto',
  borderRadius : '10px',
  padding:'1%'
},
display:{
    display:'flex',
    justifyContent: 'space-between'
}, 
text:{
    display:'flex',
    justifyContent: 'space-between',
    color: 'gray',
},
cancel:{
    paddding: '10%',
    margin:'3%',
    width : '24%',
    color: 'black',
    marginLeft : '43%',
    borderRadius:'5px',
    textTransform:'None'
  },
  save:{
    paddding: '10%',
    margin:'3%',
    width : '24%',
    color: 'white',
    borderRadius:'5px',
    backgroundColor: `#40e0d0`,
    textTransform:'None'
  }
}));

export default useStyles;
