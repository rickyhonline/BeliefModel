import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PieChart from './pieChart/pieChart';
import Grid from '@material-ui/core/Grid'
import VerticalLinearStepper from '../components/stepper/stepper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
        <Grid
            container
            direction="row"
        >
        <Grid item xs={6}>
            <PieChart />
        </Grid>
        <Grid item xs={6}>
            <VerticalLinearStepper />
        </Grid>
        </Grid>
    </Paper>
  );
}