import React from 'react';
import useStyles from './AttendenceDisplayDesign';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container , Col , Row , Form} from 'react-bootstrap';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EventIcon from '@material-ui/icons/Event';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Pagination from 'react-bootstrap/Pagination';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
export default function AttendenceDisplay() {
  const classes = useStyles();
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (
    <div>
          <div className={classes.displayclass}>
        
        <h3 className={classes.title}>Attendence</h3>
        <div className={classes.displayclass} style={{width:"25%"}}>
        <Card style={{display:"flex", justifyContent:"space-between" ,color:"gray" , width:"70%", padding:"1%"}}>
            <p style={{maxWidth:"75%", margin:"1%", marginTop:"2%", marginLeft:"5%"}}>01 Jan 2020 - 27 Feb 2021</p>
            <IconButton style={{color:"gray"}} size="small">
            <ChevronLeftIcon/>
            </IconButton>
            <IconButton style={{color:"gray"}} size="small">
            <ChevronRightIcon/>
            </IconButton>
        </Card>
        <Button className={classes.button}>Quick Leave</Button>
        </div>
        </div>
        
        <Card className={classes.card}>
          <div className={classes.displayclass}>
    <Card className={classes.attendencecards }style={{backgroundColor: `#add8e6`}}>
        <div className={classes.displayclass}>
            <div>
        <p>Annual Leave</p>
        <div style={{fontWeight:"bold", display:"flex"}}>
        <h3>20</h3>
        <p>Days</p>
        </div>
        </div>
        <Avatar className={classes.annual}>
        <EventIcon/>
      </Avatar>
        </div>
    </Card>
    <Card className={classes.attendencecards }style={{backgroundColor: `#fffff0`}}>
        <div className={classes.displayclass}>
            <div>
        <p>Casual Leave</p>
        <div style={{fontWeight:"bold", display:"flex"}}>
        <h3>10</h3>
        <p>Days</p>
        </div>
        </div>
        <Avatar className={classes.casual}>
        <LocalHospitalIcon/>
      </Avatar>
        </div>
    </Card>
    <Card className={classes.attendencecards }style={{backgroundColor: `#e6e6fa`}}>
        <div className={classes.displayclass}>
            <div>
        <p>Sick Leave</p>
        <div style={{fontWeight:"bold", display:"flex"}}>
        <h3>5</h3>
        <p>Days</p>
        </div>
        </div>
        <Avatar className={classes.sick}>
        <LocalMallIcon/>
      </Avatar>
        </div>
    </Card>
    <Card className={classes.attendencecards }style={{backgroundColor: `#d3d3d3`}}>
        <div className={classes.displayclass}>
            <div>
        <p>Holidays Vacation</p>
        <div style={{fontWeight:"bold", display:"flex"}}>
        <h3>7</h3>
        <p>Days</p>
        </div>
        </div>
        <Avatar className={classes.holiday}>
        <FilterHdrIcon/>
      </Avatar>
        </div>
    </Card>
</div>
<ListGroup>
  <ListGroup.Item>
  <Row className={classes.headingrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Leave Type</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>Duration</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>Count</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Reason</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>Status</p>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <p >Action</p>
    </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Casual Leave</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Feb 2021 - 18 Feb 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.pending} disabled>Pending</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Holidays Vacation</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Jan 2021 - 18 Jan 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.approved} disabled>Approved</Button>
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Holidays Vacation</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Jan 2021 - 18 Jan 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.approved} disabled>Approved</Button>
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Holidays Vacation</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Jan 2021 - 18 Jan 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.approved} disabled>Approved</Button>
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Casual Leave</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Feb 2021 - 18 Feb 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.pending} disabled>Pending</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col style={{maxWidth:"20%"}}>
    <p>Casual Leave</p>
    </Col>
    <Col style={{maxWidth:"23%"}}>
    <p>13 Feb 2021 - 18 Feb 2021</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <p>5</p>
    </Col>
    <Col style={{maxWidth:"40%"}}>
    <p>Personal Work</p>
    </Col>
    <Col style={{maxWidth:"10%"}}>
    <card>
    <Button className={classes.pending} disabled>Pending</Button>
        
    </card>
    </Col>
    <Col style={{maxWidth:"7%"}}>
    <MoreVertIcon/>
     </Col>
  </Row>
  </ListGroup.Item>

  </ListGroup>
  <div className={classes.pagination}>
  <Pagination>{items}</Pagination>
  </div>
    </Card>
   
    </div>
  );
}