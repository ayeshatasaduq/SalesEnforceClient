import React from 'react';
import useStyles from './DashboardDesign';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import pic from "./Capture.PNG";
import map from './Map.PNG';
import Image from 'react-bootstrap/Image';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ListGroup from 'react-bootstrap/ListGroup';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container , Col , Row , Form} from 'react-bootstrap';
export default function Dashboard() {
  const classes = useStyles();
   
  return (
    <div  className={classes.displayclass}>
        <div style={{width:"75%"}}>
          <div className={classes.displayclass}>
        <h3 className={classes.title}>Dashboard</h3>
        </div>
        <div className={classes.displayclass}>
            <div style={{width:'75%'}}>
                <div className={classes.displayclass} style={{margin:'2%'}}>
                    <Card className={classes.smallestCard} style={{backgroundColor:`#add8e6`}}>
                        <div>
                            <h5>Total Stores</h5>
                            <h5 style={{fontWeight:'bold', textAlign:'left'}}>20</h5>
                        </div>
                        <Avatar className={classes.large}>
                            <StoreOutlinedIcon style={{color:`#1e90ff`}}/>
                             </Avatar>
                    </Card>
                    <Card className={classes.smallestCard} style={{backgroundColor:`#ffefd5`}}>
                        <div>
                            <h5>Total Employees</h5>
                            <h5 style={{fontWeight:'bold', textAlign:'left'}}>756</h5>
                        </div>
                        <Avatar className={classes.large}>
                            <PeopleAltRoundedIcon style={{color:'orange'}}/>
                             </Avatar>
                    </Card>
                    <Card className={classes.smallestCard} style={{backgroundColor: `#7fffd4`}}>
                        <div>
                            <h5>Monthly Expenses</h5>
                            <h5 style={{fontWeight:'bold', textAlign:'left'}}>$4567</h5>
                        </div>
                        <Avatar className={classes.large}>
                            <AccountBalanceWalletRoundedIcon style={{color:'green'}}/>
                             </Avatar>
                    </Card>

                </div>
            <Card className={classes.taskCard}>
              <div className={classes.displayclass} style={{margin:'2%'}}>
                <h5 style={{fontWeight:'bold'}}>
                  Recent Tasks
                </h5>
                <Button style={{color:'grey', backgroundColor:'lightgray', borderRadius:'10px'}}>
                  Weekly
                  <KeyboardArrowDownSharpIcon/>
                </Button>
              </div>
              <ListGroup>
  <ListGroup.Item>
  <Row className={classes.headingrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>#</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Store Name</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p>Location</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Date</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    <p>Employees</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <p >Status</p>
    </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>01</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Sand Fisher</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <Button className={classes.blue}>
      <FiberManualRecordSharpIcon fontSize="small"/>
      View Location
    </Button>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>22 Jan, 2021</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    
      <Avatar alt="Remy Sharp" src={pic} />
    </Col>
    <Col style={{maxWidth:"20%" , display: 'flex', justifyContent:'space-around'}}>
      <Button className={classes.orange}>Pending</Button>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>02</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Sand Fisher</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <Button className={classes.blue}>
      <FiberManualRecordSharpIcon fontSize="small"/>
      View Location
    </Button>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>22 Jan, 2021</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    
      <Avatar alt="Remy Sharp" src={pic} />
    </Col>
    <Col style={{maxWidth:"20%" , display: 'flex', justifyContent:'space-around'}}>
      <Button className={classes.blue}>In Progress</Button>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>03</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Sand Fisher</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <Button className={classes.blue}>
      <FiberManualRecordSharpIcon fontSize="small"/>
      View Location
    </Button>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>22 Jan, 2021</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    
      <Avatar alt="Remy Sharp" src={pic} />
    </Col>
    <Col style={{maxWidth:"20%" , display: 'flex', justifyContent:'space-around'}}>
      <Button className={classes.green}>Completed</Button>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>04</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Sand Fisher</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <Button className={classes.blue}>
      <FiberManualRecordSharpIcon fontSize="small"/>
      View Location
    </Button>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>22 Jan, 2021</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    
      <Avatar alt="Remy Sharp" src={pic} />
    </Col>
    <Col style={{maxWidth:"20%" , display: 'flex', justifyContent:'space-around'}}>
      <Button className={classes.green}>Completed</Button>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"5%"}}>
    <p>05</p>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>Sand Fisher</p>
    </Col>
    <Col style={{maxWidth:"20%"}}>
    <Button className={classes.blue}>
      <FiberManualRecordSharpIcon fontSize="small"/>
      View Location
    </Button>
    </Col>
    <Col style={{maxWidth:"15%"}}>
    <p>22 Jan, 2021</p>
    </Col>
    <Col style={{maxWidth:"25%"}}>
    
      <Avatar alt="Remy Sharp" src={pic} />
    </Col>
    <Col style={{maxWidth:"20%" , display: 'flex', justifyContent:'space-around'}}>
      <Button className={classes.green}>Completed</Button>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  </ListGroup>
            </Card>





            </div>
            <div style={{width:'25%'}}>
            <Card className={classes.inventoryCard}>
            <div className={classes.displayclass} style={{ margin:'3%'}}>
                    <h5 style={{fontWeight:"bold"}}>Inventory Status</h5>
                </div>
                <Divider style={{margin:"2%"}}/>
                <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'5%', marginBottom:'4%'}}>
                    <div>
                        <p>Total Products</p>
                        <h4 style={{fontWeight:'bold'}}>137</h4>
                        <Card className={classes.green} style={{padding:'4%'}}>
                         <div style={{display:'flex', justifyContent:'space-evenly'}}>
                          
                            <Avatar style={{backgroundColor:'green'}} variant="rounded" className={classes.small}>
                            <ArrowUpwardIcon style={{color:'white'}}/>
                            </Avatar>
                            <h7 style={{fontWeight:'bold'}}>
                            +8.00%
                            </h7>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <p>Stock In Hand</p>
                        <h4 style={{fontWeight:'bold'}}>2,347</h4>
                        <Card className={classes.blue} style={{padding:'4%'}}>
                         <div style={{display:'flex', justifyContent:'space-evenly'}}>
                          
                            <Avatar style={{backgroundColor:`#1e90ff`}} variant="rounded" className={classes.small}>
                            <ArrowUpwardIcon style={{color:'white'}}/>
                            </Avatar>
                            <h7 style={{fontWeight:'bold'}}>
                            +2.37%
                            </h7>
                            </div>
                        </Card>
                    </div>
                    
                </div>
            </Card>
            <Card className={classes.currentCard}>
            <div className={classes.displayclass} style={{margin:'3%', marginTop:'6%'}}>
                    <h5 style={{fontWeight:"bold"}}>Current Store</h5>
                    <p style={{color:'blue'}}>View All</p>
                </div>
                <Image src={map} rounded style={{height:'50%', width:'92%'}}/>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                  <div style={{marginTop:'5%', textAlign:'left'}}>
                    <h4 style={{fontWeight:'bold'}}>Sand Fisher</h4>
                    <p style={{marginTop:'-5%'}}> <MailOutlineIcon style={{color:'green'}}/>
                    Elwynwin@gmail.com
                    </p>
                    <Divider/>
                    <Avatar alt="Remy Sharp" src={pic} style={{marginTop:'4%'}} />
                  </div>
                  <CircularProgress variant="determinate" value={75} style={{marginTop:'10%'}} />
                </div>
            </Card>
            </div>
        </div>
        </div>
        <Card className={classes.card}>
            <Card className={classes.attendencecard}>
                <div className={classes.displayclass} style={{fontWeight:"bold",  margin:'3%'}}>
                    <h5>Attendence</h5>
                    <p>View All</p>
                </div>
                <Divider style={{color:'white' ,margin:"2%"}}/>
                <div className={classes.displayclass}>
                    <div>
                        <p style={{color:"lightgray"}}>Attendence</p>
                        <h5>17</h5>
                    </div>
                    <div>
                        <p style={{color:"lightgray"}}>Late</p>
                        <h5>12</h5>
                    </div>
                    <div>
                        <p style={{color:"lightgray"}}>Absent</p>
                        <h5>5</h5>
                    </div>
                </div>
            </Card>
            <div className={classes.displayclass} style={{marginTop:'10%'}}>
                <h5 style={{fontWeight:'bold'}}>Recent Applications</h5>
                <p style={{color:"blue"}}>View All</p>
            </div>
            <Divider/>

            <div className={classes.displayclass} style={{marginTop:'4%', marginBottom:'4%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <Button className={classes.blue}>Salary</Button>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <div style={{color:'grey' , display:"flex" , justifyContent : 'space-evenly', marginBottom:'4%'}}>
      <EventIcon/> <h6>22 Jun 2021</h6>
          <AccessTimeIcon/> <h6>2:35 pm</h6>
          </div>

          <Divider/>
          <div className={classes.displayclass} style={{marginTop:'4%', marginBottom:'4%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <Button className={classes.green}>Salary</Button>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <div style={{color:'grey' , display:"flex" , justifyContent : 'space-evenly', marginBottom:'4%'}}>
      <EventIcon/> <h6>22 Jun 2021</h6>
          <AccessTimeIcon/> <h6>2:35 pm</h6>
          </div>
          <Divider/>
          <div className={classes.displayclass} style={{marginTop:'4%', marginBottom:'4%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <Button className={classes.orange}>Salary</Button>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <div style={{color:'grey' , display:"flex" , justifyContent : 'space-evenly', marginBottom:'4%'}}>
      <EventIcon/> <h6>22 Jun 2021</h6>
          <AccessTimeIcon/> <h6>2:35 pm</h6>
          </div>
        </Card>
   
    </div>
  );
}