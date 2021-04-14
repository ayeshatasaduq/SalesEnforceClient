import React from 'react';
import useStyles from './PayrollDesign';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Image from 'react-bootstrap/Image';
import pic from "./Capture.PNG";
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function Payroll() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.display}>
        <h3 style={{marginLeft : '2%' , fontWeight: 'bold'}}>Payroll</h3>
        </div>
        <div className={classes.display}>

            <Card className={classes.card}>
            <div className={classes.display} style={{padding:'3%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <Divider/>
      <div className={classes.text} style={{marginTop:'2%'}}>
          <p>Per hour rate</p>
          <p>8</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Total hours</p>
          <p>54</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Leave</p>
          <p>13</p>
      </div>
      <div style={{marginTop:'-3%'}}>
      <Button variant="light" className={classes.cancel}>Declined</Button>
    <Button className={classes.save}>Approved</Button>
    </div>
            </Card>
            <Card className={classes.card}>
            <div className={classes.display} style={{padding:'3%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <Divider/>
      <div className={classes.text} style={{marginTop:'2%'}}>
          <p>Per hour rate</p>
          <p>8</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Total hours</p>
          <p>54</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Leave</p>
          <p>13</p>
      </div>
      <div style={{marginTop:'-3%'}}>
      <Button variant="light" className={classes.cancel}>Declined</Button>
    <Button className={classes.save}>Approved</Button>
    </div>
            </Card>
            <Card className={classes.card}>
            <div className={classes.display} style={{padding:'3%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <Divider/>
      <div className={classes.text} style={{marginTop:'2%'}}>
          <p>Per hour rate</p>
          <p>8</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Total hours</p>
          <p>54</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Leave</p>
          <p>13</p>
      </div>
      <div style={{marginTop:'-3%'}}>
      <Button variant="light" className={classes.cancel}>Declined</Button>
    <Button className={classes.save}>Approved</Button>
    </div>
            </Card>
            <Card className={classes.card}>
            <div className={classes.display} style={{padding:'3%'}}>
    <div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
      <Avatar className={classes.large}>
      <Image src={pic} rounded />
    </Avatar>
        <div style={{marginLeft:"5%" }}>
          <h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
        <p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
        </div>
        </div>
        <MoreVertIcon/>
      </div>
      <Divider/>
      <div className={classes.text} style={{marginTop:'2%'}}>
          <p>Per hour rate</p>
          <p>8</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Total hours</p>
          <p>54</p>
      </div>
      <div className={classes.text} style={{marginTop:'-4%'}}>
          <p>Leave</p>
          <p>13</p>
      </div>
      <div style={{marginTop:'-3%'}}>
      <Button variant="light" className={classes.cancel}>Declined</Button>
    <Button className={classes.save}>Approved</Button>
    </div>
            </Card>
        </div>

        <div className={classes.display}>

<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
</div>

<div className={classes.display}>

<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
<Card className={classes.card}>
<div className={classes.display} style={{padding:'3%'}}>
<div style={{width:"60%" , display:'flex' , justifyContent:'left'}}>
<Avatar className={classes.large}>
<Image src={pic} rounded />
</Avatar>
<div style={{marginLeft:"5%" }}>
<h6 style={{fontWeight:"bold"}}>Monica Geller</h6>
<p style={{color:'blue', marginTop:'-7%'}}>Store manager</p>
</div>
</div>
<MoreVertIcon/>
</div>
<Divider/>
<div className={classes.text} style={{marginTop:'2%'}}>
<p>Per hour rate</p>
<p>8</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Total hours</p>
<p>54</p>
</div>
<div className={classes.text} style={{marginTop:'-4%'}}>
<p>Leave</p>
<p>13</p>
</div>
<div style={{marginTop:'-3%'}}>
<Button variant="light" className={classes.cancel}>Declined</Button>
<Button className={classes.save}>Approved</Button>
</div>
</Card>
</div>
   
    </div>

  );
}