import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Container, TextField, InputAdornment } from '@material-ui/core';
import store from '../lib/redux/store';

const styles = (theme) =>
  createStyles({
    root: {
      padding: 0,
    },
  });

function SingleInput(props) {
  const { classes } = props;

  //CHANGE query
  const onChange = (e) => {
    store.dispatch(props.onEdit(e.target.value));
  }

  return (
    <Container className={classes.root}>
      <TextField
        className={props.className}
        label={props.label}
        placeholder={props.placeholder}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.icon}
            </InputAdornment>
          )
        }}
        InputLabelProps={{ style: { fontWeight: 800, marginTop: 15 } }}
        />
    </Container>
  );
}

export default withStyles(styles)(SingleInput);
