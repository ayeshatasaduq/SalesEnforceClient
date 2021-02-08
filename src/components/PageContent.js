import Profile from './Profile'
import Direction from './Direction';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
      display: 'flex',
      justifyContent: "space-between",
    
  },


}));
function PageContent() {
    
    const classes = useStyles();
    return (
      <div>
       
          
       <h2 style={{marginLeft:'-88%' , marginTop : '-1%'}}>Profile</h2>
    
       <div className={classes.footer}>
         <Profile/>
         <Direction/>
       </div>
    
      </div>
    );
  }
  
  export default PageContent;
  