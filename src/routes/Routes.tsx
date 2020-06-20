import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routesDefinition';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { NOT_FOUND } from '../utils/constants';

const Routes = () => {
  const classes = useStyles();
  return (
  <Suspense fallback={<CircularProgress className={classes.center} size={20} />}>
    <Switch>
      {
        routes.map((props, i)=> <Route {...props} key={i} />)
      }
      <Route
        render={() => (
          <div>
            <Typography 
              variant="h5" 
              gutterBottom
              className={classes.center}
            >
              { NOT_FOUND }
            </Typography>
          </div>
        )}
      />
    </Switch>
  </Suspense>
)};

const useStyles = makeStyles({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
});


export default Routes;
