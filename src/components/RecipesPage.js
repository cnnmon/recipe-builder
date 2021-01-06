import React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Recipe from './Recipe';
import { useSelector } from 'react-redux';

const styles = (theme) =>
  createStyles({
    root: {
      paddingTop: 10,
    },
    progress: {
      padding: 20,
    }
  });

function RecipesPage(props) {
  const { classes } = props;
  const recipes = useSelector(state => state.recipes);

  function htmlDecode(input) { //get rid of &amp;
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  
  return (
    <Container className={classes.root}>
      {recipes.length !== 0 ?
        recipes.map((data, index) => {
          const ingredients = data.ingredients.toString();
          const baseURL = (new URL (data.href)).origin.replace(/http:|\/\/|www./gi, "");

          return (
            <Recipe
              key={index}
              label={htmlDecode(data.title)}
              baseURL={baseURL}
              href={data.href}
              ingredients={ingredients}
              media={data.thumbnail}
            />
          );
      }) : <Typography variant="h3">No results. Try modifying your search.</Typography>
    }
    </Container>
  );
}

export default withStyles(styles)(RecipesPage);
