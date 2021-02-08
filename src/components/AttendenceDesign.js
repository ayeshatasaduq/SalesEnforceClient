
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


headingrow: {
    textAlign:'left' ,
     fontWeight : 'bold',
     marginLeft : '2%',
},
normalrow:{
    textAlign:'left' ,
    marginLeft : '2%',
    color: 'grey',
   
},
button:{
    backgroundColor : 'lightblue' ,
     color : 'blue' ,
     textTransform : 'none',
}
}));

export default useStyles;