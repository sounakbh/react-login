import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import {Button, Menu, MenuItem} from '@material-ui/core';
import Dashboard from './Dashboard';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Router>
        <div className={classes.root}>
        {/* MenuBar Starts */}
        <Button variant="contained" color="primary" aria-controls="users" aria-haspopup="true" onClick={handleClick}>
          <GroupRoundedIcon/>Users
        </Button>
        <Menu
          id="users"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to='/Users/Jane'>Jane</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/Users/Adam'>Adam</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to='/Users/Mary'>Mary</Link>
          </MenuItem>
        </Menu>
        <Button variant="contained">
          <DashboardIcon/><Link style={{ textDecoration: 'none' }} to='/Dashboard'>Dashboard</Link>
        </Button>
        <Button variant="contained">
          <PersonOutlineRoundedIcon/><Link style={{ textDecoration: 'none' }} to='/Profile'>Profile</Link>
        </Button>
        <Button variant="contained">
          <BookmarkRoundedIcon/><Link style={{ textDecoration: 'none' }} to='/Publisher'>Publisher</Link>
        </Button>
        <Button variant="contained">
          <PersonAddRoundedIcon/><Link style={{ textDecoration: 'none' }} to='/UserPublisher'>User Publisher</Link>
        </Button>
        <Button variant="contained">
          <ReceiptRoundedIcon/><Link style={{ textDecoration: 'none' }} to='/Invoices'>Invoices</Link>
        </Button>
        <Button variant="contained">
          <EqualizerRoundedIcon/><Link style={{ textDecoration: 'none' }} to='/Reports'>Reports</Link>
        </Button>
        </div>
        {/* MenuBar Ends */}
        {/* Routes */}
        <Route path='/Dashboard' exact strict component={Dashboard}/>
        <Route path='/Profile' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Profile Page</h1>)
            }
          }
        />
        <Route path='/Publisher' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Publisher Page</h1>)
            }
          }
        />
        <Route path='/UserPublisher' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>User Publisher Page</h1>)
            }
          }
        />
        <Route path='/Invoices' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Invoices Page</h1>)
            }
          }
        />
        <Route path='/Reports' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Reports Page</h1>)
            }
          }
        />
        {/* User Routes */}
        <Route path='/Users/Jane' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Welcome Jane</h1>)
            }
          }
        />
        <Route path='/Users/Adam' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Welcome Adam</h1>)
            }
          }
        />
        <Route path='/Users/Mary' exact strict render={
            () => {
              return (<h1 style={{textAlign: "center"}}>Welcome Mary</h1>)
            }
          }
        />
        {/* Routes End */}
      </Router>
    </div>
  );
}
