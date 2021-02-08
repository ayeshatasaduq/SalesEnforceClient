import { makeStyles , useTheme} from '@material-ui/core/styles';
import { ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  back: { 
    width  : '28%',
    marginLeft : '3%' ,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius : '25px',
  
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  message:{
    color: `#1e90ff`,
    backgroundColor:`#add8e6`,
    marginRight : '5%'
  },
  phone:{
    color: `#ffd700`,
    backgroundColor: `#fffacd`,
    marginRight : '5%'
  },
  location:{
    color: `#ff4500` ,
    backgroundColor: `#ffb6c1`,
    marginRight : '5%',
  },
  display:{
    display : 'flex',
    justifyContent : 'space-between',
    marginTop: '6%', marginBottom : '6%',
    marginLeft: '10%' , marginRight : '10%',
  
  },

  text:{
    width:'70%',
     textAlign : 'start',
    marginTop:'2%',
    fontWeight : 'bold',
  },
  button:{
    marginTop : '3%',
    textTransform : 'none'
  }
}));

export default useStyles;