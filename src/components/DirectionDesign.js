
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles((theme) => ({


continue: {
  width  : '64%',
  marginRight : '3%',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius : '25px'
},
root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: '2%',
    color : 'black'
  },

}));

export default useStyles;