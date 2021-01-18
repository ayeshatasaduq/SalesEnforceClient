import React from 'react';
import useStyles from './SettingDesign';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function Settings() {
  const classes = useStyles();
  const [name, setName] = React.useState(' ');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form  noValidate autoComplete="off">
    <FormControl variant="outlined" className={classes.textfield}>
        <InputLabel>Name</InputLabel>
        <OutlinedInput value={name} onChange={handleChange} label="Name" margin="dense" />
      </FormControl>
      <FormControl variant="outlined" className={classes.textfield}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput label="Name" margin="dense" />
      </FormControl>

      </form>
  );
}