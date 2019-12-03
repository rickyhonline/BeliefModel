import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PieChart from '../../container/pieChart/pieChart'
import { Toolbar } from '@material-ui/core';
import MindBody from '../../assets/images/mindbody.jpg'
import Card from '../card'
import Auth from '../../authentication/auth'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={6}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: 128,
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Toolbar>
          </Toolbar>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Core Value Model" {...a11yProps(0)} />
          <Tab label="Buisness Value Model" {...a11yProps(1)} />
          <Tab label="Relevant Models" {...a11yProps(2)} />
          <Tab label="Blog Posts" {...a11yProps(3)} />
          <Tab label="Notes and Quotes" {...a11yProps(4)} />
          <Tab label="Additional" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card />
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Auth />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item 6
      </TabPanel>
    </div>
  );
}