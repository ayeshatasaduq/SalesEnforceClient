import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;
const DraweruseStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'black'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor : 'black'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
   avatar:{
    left:10 ,
    position: 'absolute',
    backgroundColor : `#ffd700`
   },
   name:{
    color: 'white',
    left:60 ,
    position: 'absolute',
    fontWeight: 'bold',
    marginTop : '5%'
   },
   dashbutton:{
     width: 150,
     left:45 ,
     margin:5
   },
   drawbuttoncolor:{
    color : `#d3d3d3`
   },
   drawbuttondesign:{
     alignItems: 'left',
     justifyContent:'left',
     margin : 15,
     width:240,
  
   },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  export default DraweruseStyles;