import React from 'react';
import orange from '@material-ui/core/colors/deepOrange';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import { Kitchen as KitchenIcon, Fastfood as FastfoodIcon } from '@material-ui/icons';
import SingleInput from './SingleInput';
import MultiInput from './MultiInput';
import doCORSRequest from '../lib/api/cors';
import { addIngredient, removeIngredient, setQuery, updateRecipes } from '../lib/redux/actions';
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { saveData } from '../lib/api/localStorage';
import store from '../lib/redux/store';

const styles = (theme) =>
  createStyles({
    root: {
      paddingTop: 10,
    },
    icon: {
      color: orange[300],
      fontSize: 15,
    },
    input: {
      alignItems: 'left',
      width: '100%',
      padding: '20px 0px 10px',
    },
    button: {
      textDecoration: 'none',
    }
  });

function HomePage(props) {
  const { classes } = props;
  const ingredients = useSelector(state => state.ingredients);
  const query = useSelector(state => state.query);
  let history = useHistory();

  const goToRecipes = () => {
    history.push('/recipes');
  }

  function getRecipes() {
    saveData('ingredients', ingredients); //save ingredients on form submit
    let urlField = `http://www.recipepuppy.com/api`;
    if (ingredients.length > 0 && query.length > 0) urlField += `/?i=${ingredients}&q=${query}`;
    else if (ingredients.length > 0) urlField += `?i=${ingredients}`;
    else if (query.length > 0) urlField += `?q=${query}`;
    doCORSRequest({
      method: 'GET',
      url: urlField,
    }, function printResult(result) {
      let recipes = JSON.parse(result);
      store.dispatch(updateRecipes(recipes.results));
    });
    return <Redirect to='/recipes' />;
  }

  return (
    <Container className={classes.root}>
      <MultiInput
        className={classes.input}
        name={"ingredients"}
        label="1. Ingredients you have."
        placeholder="strawberries bread eggs"
        icon={<KitchenIcon className={classes.icon} />}
        onEdit={addIngredient}
        onDelete={removeIngredient}
      />
      <SingleInput
        className={classes.input}
        name={"query"}
        label="2. Food preference."
        placeholder="sandwich"
        icon={<FastfoodIcon className={classes.icon} />}
        onEdit={setQuery}
      />
      <Button onClick={getRecipes} variant="contained" color="primary">
        Search
      </Button>
    </Container>
  );
}

export default withStyles(styles)(HomePage);
