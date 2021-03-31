import React from 'react';
import useStyles from './EmployeesDesign';
import Card from '@material-ui/core/Card';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListGroup from 'react-bootstrap/ListGroup'
import {Container , Col , Row , Form} from 'react-bootstrap';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Divider from '@material-ui/core/Divider';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeft } from '@material-ui/icons';
export default function Employees() {
  const classes = useStyles();


  return (
    <div>
      
        <div className={classes.displayclass}>
        <h3 className={classes.title}>Employees</h3>
        
        <div className={classes.displayclass} style={{width:"20%"}}>
        <Card style={{display:"flex", justifyContent:"space-between" ,color:"gray" , width:"80%", padding:"1%"}}>
            <p style={{maxWidth:"86%", margin:"1%", marginTop:"2%"}}>01Jan 2020 - 27 Feb 2021</p>
            <IconButton style={{color:"gray"}} size="small">
            <ChevronLeftIcon/>
            </IconButton>
            <IconButton style={{color:"gray"}} size="small">
            <ChevronRightIcon/>
            </IconButton>
        </Card>
        <Button className={classes.button}>Filter <KeyboardArrowDownSharpIcon style={{fontSize:"small"}}/>
        </Button>
        </div>
        </div>
        
        <Card className={classes.card}>
        
    <div style={{width : '75%'}}>
    <ListGroup>
  <ListGroup.Item>
  <Row className={classes.headingrow}>
      <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <p>Name</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>Date</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>Time Track</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>Total Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Status</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Action</p>
    </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
  <Col style={{maxWidth:"5%"}}>
      <CheckBoxOutlineBlankRoundedIcon/>
      </Col>
    <Col style={{maxWidth:"35%"}}>
    <div style={{display:"flex" , justifyContent : "left"}}>
    <Avatar alt="Remy Sharp" src="/Profile.jpg" /> 
    <p style={{margin:"3%"}}>Monica Geller</p>
    </div>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>1-13-2021</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>10:00AM - 09:00PM</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>11 Hours</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <card>
        <Button className={classes.approved} disabled>Completed</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <div className={classes.displayclass}>
        <EditOutlinedIcon/>
        <DeleteOutlineOutlinedIcon/>
        <MoreVertOutlinedIcon/>
    </div>
     </Col>
  </Row>
  </ListGroup.Item>
  </ListGroup>
      </div>  
      
      <Card className={classes.smallercard}>
      <h4 className={classes.text}>Monica Geller</h4>
      <h6 className={classes.text}>Lorem Ipsum is Simple</h6>
      <p style={{color:"blue" , textAlign:"left", marginTop: "-4%"}}>Customer Conference</p>
      <Divider/>
      <div className={classes.leftcontent}>
          <CalendarTodayOutlinedIcon fontSize="small"/>
          <p style={{marginLeft:"3%"}}>1-06-2019</p>
      </div>
      <div className={classes.leftcontent}>
          <QueryBuilderOutlinedIcon fontSize="small"/>
          <p style={{marginLeft:"3%"}}>10:00AM - 09:00PM</p>
      </div>
      <div className={classes.leftcontent}>
          <QueryBuilderOutlinedIcon fontSize="small"/>
          <p style={{marginLeft:"3%"}}>Total 11 Hours</p>
      </div>
      <Button className={classes.pending} disabled>Pending</Button>
      </Card>
    </Card>
   
    </div>
  );
}