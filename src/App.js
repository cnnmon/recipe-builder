import React from 'react';
import theme from './styles/ThemeStyles';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Container, ThemeProvider, Divider, Link, Typography } from '@material-ui/core';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import RecipesPage from './components/RecipesPage';
import { resetState } from './lib/redux/actions';
import { getData } from './lib/api/localStorage';
import { setIngredients } from './lib/redux/actions';
import store from './lib/redux/store';

const styles = (theme) =>
  createStyles({
    root: {
      padding: 30,
      width: 550,
      marginTop: '10vh',
    },
    link: {
      "&:hover, &:focus": {
        textDecoration: 'none',
      },
    },
    footer: {
      float: 'right',
      padding: '30px 0px',
    }
  });

function App(props) {
  const { classes } = props;
  const savedIngredients = getData('ingredients'); //first time call
  if (savedIngredients && savedIngredients.length > 0) store.dispatch(setIngredients(savedIngredients.split(',')));

  const reset = () => {
    store.dispatch(resetState(store.getState().ingredients)); //ingredients are saved through new form submissions
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Container>
            <Link className={classes.link} onClick={reset} href="#" variant="h1" gutterBottom>Recipe Builder</Link>
            <Divider />
          </Container>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route exact path={"/recipes"} component={RecipesPage} />
          </Switch>
        </Router>
        <Typography variant="h3" className={classes.footer}>Built by Tiffany Wang with <Link color="primary" href="http://www.recipepuppy.com/" target="_blank">RecipePuppy</Link>.</Typography>
      </ThemeProvider>
    </Container>
  );
}

export default withStyles(styles)(App);
