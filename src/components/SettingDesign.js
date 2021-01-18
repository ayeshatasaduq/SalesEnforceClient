import { makeStyles } from '@material-ui/core/styles';


const useStyles=makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
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

  textfield:{
      width : '42.5%',
      margin : '3.5%',
  },


}));


export default useStyles;