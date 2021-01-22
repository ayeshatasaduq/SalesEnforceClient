import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Container , Col , Row , Form , Button} from 'react-bootstrap';
import useStyles from './SettingDesign';
export default function Settings() {
  const classes = useStyles();
  const [category , setCategory]=useState([]);

  return (
    <Form>
  <Form.Row>
    <Col>
    <Form.Label className={classes.labelleft}>First Name</Form.Label>
      <Form.Control className={classes.textDesignleft} placeholder="First name"/>
    </Col>
    <Col>
    <Form.Label className={classes.labelright}>Phone Number</Form.Label>
      <Form.Control className={classes.textDesignright}  placeholder="Phone Number" />
    </Col>
  </Form.Row>

  <Form.Row>
    <Col>
    <Form.Label className={classes.labelleft}>Store Name</Form.Label>
      <Form.Control className={classes.textDesignleft} placeholder="Store name"/>
    </Col>
    <Col>
    <Form.Label className={classes.labelright}>Country</Form.Label>
      <Form.Control className={classes.textDesignright}  as='select' >
      <option>Pakistan</option>
      <option>China</option>
      <option>India</option>
      <option>Afghanistan</option>
      <option>Japan</option>
      </Form.Control>
    </Col>
  </Form.Row>

  <Form.Row>
    <Col>
    <Form.Label className={classes.labelleft}>Categories</Form.Label>
      <Form.Control className={classes.textDesignleft} placeholder="Add Category" type="submit"
      onSubmit={() => {setCategory= category+ ['ddd']}} 
      as="select">
     {
     category.map((item,index) => {
        <option>item.name</option>
     })
 }
      </Form.Control>
    </Col>
    <Col>
    <Form.Label className={classes.labelright}>State</Form.Label>
      <Form.Control className={classes.textDesignright}  placeholder="State" />
    </Col>
  </Form.Row>

  <Form.Row>
    <Col>
    <Form.Label className={classes.labelleft}>Products</Form.Label>
      <Form.Control className={classes.textDesignleft} placeholder="Products"/>
    </Col>
    <Col>
    <Form.Label className={classes.labelright}>City</Form.Label>
      <Form.Control className={classes.textDesignright}  placeholder="City" />
    </Col>
  </Form.Row>
  <Form.Row>
    <Col>
    <Form.Label className={classes.labelleft}>Email</Form.Label>
      <Form.Control className={classes.textDesignleft} placeholder="Email"/>
    </Col>
    <Col>
    <Form.Label className={classes.labelright}>Adress</Form.Label>
      <Form.Control className={ classes.adress}  placeholder="Adress" rows={3}/>
    </Col>
    </Form.Row>
<Form.Row>
    <Col>
    <Form.Label className={classes.spanlabel}>Password</Form.Label>
      <Form.Control className={classes.span} placeholder="Password"/>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col>
    <Form.Label className={classes.spanlabel}>Re Password</Form.Label>
      <Form.Control className={classes.span} placeholder="Re password"/>
    </Col>
    </Form.Row>
    <Button variant="light" className={classes.cancel}>Cancel</Button>
    <Button variant="info" className={classes.save}>Save</Button>
    </Form>

  );
}