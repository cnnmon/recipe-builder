import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Chip, Container, TextField, InputAdornment } from '@material-ui/core';
import store from '../lib/redux/store';

const styles = (theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      marginBottom: 10,
    },
    chip: {
      margin: 5,
      fontSize: 12,
      height: 25,
      backgroundColor: theme.palette.secondary.main,
    },
  });

function MultiInput(props) {
  const { classes } = props;
  let chipData = useSelector(state => state[props.name]);

  //ADD ingredient or food
  const keyPress = (e) => {
    if (e.key === 'Enter' && e.target.value !== "") {
      store.dispatch(props.onEdit(e.target.value.replace(/[^a-zA-Z ]/g, "").trim()));
      e.target.value = "";
    }
  }
  //REMOVE ingredient or food
  const handleDelete = (chipToDelete) => () => {
    store.dispatch(props.onDelete(chipToDelete));
  }

  return (
    <Container className={classes.root}>
      <TextField
        className={props.className}
        label={props.label}
        placeholder={props.placeholder}
        onKeyDown={keyPress}
        helperText="Press enter after each item."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.icon}
            </InputAdornment>
          )
        }}
        InputLabelProps={{ style: { fontWeight: 800, marginTop: 15 } }}
        />
      <div className={classes.chips}>
        {chipData.map((data, index) => {
          return (
            <li key={index}>
              <Chip
                label={data}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </div>
    </Container>
  );
}

export default withStyles(styles)(MultiInput);
