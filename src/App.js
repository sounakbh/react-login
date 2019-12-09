import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LoginPage from './components/LoginPage';

class App extends Component {  
  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: '',
      login: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    let {password, username} = this.state;
    if(username === 'sounakbh' && password === '123456') {
      this.setState({login: true})
    }
    else {
      alert('Invalid Credentials!');
    }
  }
  
  render() {
    const mystyle = {
      textAlign: "center",
      paddingTop: "5%"
    };
    let content;
    // Rendering login page if correct credentials
    if(!this.state.login) {
      content = (<div style={mystyle}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h3" gutterBottom>
              Login 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              onChange = {(e) => this.setState({username:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="Password"
              onChange = {(e) => this.setState({password:e.target.value})}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={this.handleClick} variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
    </div>)
    }
    else {
      content = <LoginPage/>
    }
    return (
      <div>
        {content}
      </div>
        
    );
    
  }  
}

export default App;
