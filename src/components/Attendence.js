import React from 'react';
import {Container , Col , Row , Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import useStyles from './AttendenceDesign';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Attendence() {
  const classes = useStyles();
  return (
    <div>
        <ListGroup>
  <ListGroup.Item>
  <Row className={classes.headingrow}>
    <Col>
    <p>Date</p>
    </Col>
    <Col>
    <p>Time Track</p>
    </Col>
    <Col>
    <p>Location Time</p>
    </Col>
    <Col>
    <p>Total Hours</p>
    </Col>
    <Col>
    <p>Event Type</p>
    </Col>
  </Row>
  </ListGroup.Item>
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col>
    <p>01-01-2020</p>
    </Col>
    <Col>
    <p>12:00AM - 01:00PM</p>
    </Col>
    <Col>
    <Button className={classes.button}>
    <FiberManualRecordIcon style={{fontSize : 'medium'}}/> View Location
  </Button>
    </Col>
    <Col>
    <p>11 Hours</p>
    </Col>
    <Col>
    <p>Customer Conference</p>
    </Col>
  </Row>
  </ListGroup.Item>
  
  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col>
    <p>01-01-2020</p>
    </Col>
    <Col>
    <p>12:00AM - 01:00PM</p>
    </Col>
    <Col>
    <Button className={classes.button}>
    <FiberManualRecordIcon style={{fontSize : 'medium'}}/> View Location
  </Button>
    </Col>
    <Col>
    <p>11 Hours</p>
    </Col>
    <Col>
    <p>Customer Conference</p>
    </Col>
  </Row>
  </ListGroup.Item>

  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col>
    <p>01-01-2020</p>
    </Col>
    <Col>
    <p>12:00AM - 01:00PM</p>
    </Col>
    <Col>
    <Button className={classes.button}>
    <FiberManualRecordIcon style={{fontSize : 'medium'}}/> View Location
  </Button>
    </Col>
    <Col>
    <p>11 Hours</p>
    </Col>
    <Col>
    <p>Customer Conference</p>
    </Col>
  </Row>
  </ListGroup.Item>

  <ListGroup.Item>
  <Row className={classes.normalrow}>
    <Col>
    <p>01-01-2020</p>
    </Col>
    <Col>
    <p>12:00AM - 01:00PM</p>
    </Col>
    <Col>
    <Button className={classes.button}>
    <FiberManualRecordIcon style={{fontSize : 'medium'}}/> View Location
  </Button>
    </Col>
    <Col>
    <p>11 Hours</p>
    </Col>
    <Col>
    <p>Customer Conference</p>
    </Col>
  </Row>
  </ListGroup.Item>

  
</ListGroup>
      
    </div>
  );
}