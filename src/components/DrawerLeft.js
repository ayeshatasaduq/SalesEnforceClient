import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import DraweruseStyles from './DrawerLeftDesign';
import Button from '@material-ui/core/Button';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import PageContent from './PageContent';
import Navbar from './Navbar';
import AppBar from '@material-ui/core/AppBar';
function DrawerLeft() {
  const classes = DraweruseStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="fixed" color="default"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
    
    <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton,open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
<Navbar/>
</Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          
        <Avatar className={classes.avatar}>C</Avatar>
         <p className={classes.name}> Company</p>
         
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DashboardOutlinedIcon />}
        className={classes.dashbutton}
      >
        DashBoard
      </Button>

      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<StoreMallDirectoryOutlinedIcon /> }
      >
       Stores
      </Button>
     
      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<GroupOutlinedIcon />}  >
       Team
      </Button>

      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<ForumOutlinedIcon/>}
      > Chat
      </Button>

      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<ContactMailOutlinedIcon/>}
      > Consultants
      </Button>

      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<RoomOutlinedIcon/>}> Location
      </Button>

      <Button className={classes.drawbuttondesign} style={{color : `#d3d3d3`}}
      startIcon={<SettingsOutlinedIcon/>}
      > Setting
      </Button>
      
     
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />          
<PageContent/>

      </main>
    </div>
  );
}


export default DrawerLeft;