import { makeStyles } from '@material-ui/core/styles';


const useStyles=makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
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
  textDesignleft:{
    width:'85%',
    marginLeft:'9%'
  },
  labelleft:{
    marginTop:'2%',
    display : 'flex',
    marginLeft:'9%',
    color:'gray',
    marginBottom:'0.5%'
  },
  textDesignright:{
    width:'85%',
    marginLeft:'5%'
  },
  labelright:{
    marginTop:'2%',
    display : 'flex',
    marginLeft:'5%',
    color:'gray',
    marginBottom:'.5%'
  },
span:{
  width:'42.5%',
    marginLeft:'4.5%'
},
spanlabel:{
  marginTop:'2%',
    display : 'flex',
    marginLeft:'4.5%',
    color:'gray',
    marginBottom:'.5%'
},
adress:{
  height : '272%',
  width:'85%',
  marginTop:'2%',
    display : 'flex',
    marginLeft:'5%',
    color:'gray',
    marginBottom:'.5%'
},
cancel:{
  paddding: '10%',
  margin:'3%',
  width : '12%',
  color: 'gray',
  marginLeft : '60%'
},
save:{
  paddding: '10%',
  margin:'3%',
  width : '12%',
  color: 'white',
}

}));


export default useStyles;