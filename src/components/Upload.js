import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
        
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
          <Avatar src={this.state.file} style={{
               height:130,
               width:130,
               marginTop : '8%',
               marginLeft:'30%' ,
               marginRight:'30%' ,
               marginBottom: '-10%'
           }
          }/>
          <input type="file" onChange={this.handleChange} id="icon-button-file" style={{display: 'none'}}/>
        

    
        <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span" style={{marginLeft:'42%'}}>
          <PhotoCamera />
        </IconButton>
      </label>

      </div>
    );
  }
}
export default Upload;