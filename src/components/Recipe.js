import React from 'react';
import clsx from 'clsx';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Button, Card, Divider, CardContent, CardActions, Typography, Collapse, IconButton } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const styles = (theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      width: '47%',
      margin: '5px',
    },
    /*
    media: {
      height: 0,
      paddingTop: '12%',
      filter: 'blur(10px) saturate(120%)',
      margin: '-5px -10px -10px -5px',
    },*/
    crop: {
      overflow: 'hidden',
    },
    content: {
      marginTop: 7,
    },
    header: {
      height: 55,
      textOverflow: 'ellipses',
      overflow: 'auto',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });

function Recipe(props) {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2" component="h2" className={classes.header}>
          {props.label}
        </Typography>
        <Divider />
        <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
          {props.baseURL}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" href={props.href} target="_blank">Learn More</Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Divider />
          <br />
          <Typography paragraph>
          Ingredients.
          </Typography>
          <Typography paragraph>
            {props.ingredients}.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default withStyles(styles)(Recipe);
