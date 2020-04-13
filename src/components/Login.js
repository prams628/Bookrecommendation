import React, { Component } from 'react';
import fire from '../Fire';

var button1 = {
  color: "white",
  textTransform: 'uppercase',
  textDecoration: 'none',
  background: '#581845',
  padding: '10px',
  borderRadius: '5px',
  display: 'inline-block',
  border: 'none',
  transition: "all 0.4s ease 0s",
  fontFamily: "Acme",
  paddingRight: "35px", 
  paddingLeft: "35px",
  fontSize: "30px"
}

var input1 = {
  marginTop: "200px",
  marginLeft: "250px",
  width: "1000px",
  border: "none",
  borderBottom: "4px solid #581845",
  fontFamily: "Acme",
  fontSize: "30px"
}

var input2 = {
  marginTop: "75px",
  marginLeft: "250px",
  width: "1000px",
  border: "none",
  borderBottom: "4px solid #581845",
  fontFamily: "Acme",
  fontSize: "30px"
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <input  style={input1} value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input style={input2} value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div style={{width: "800px", marginLeft: '550px'}}>
            <button style={button1} type="submit" onClick={this.login}>Login</button>
            <button style={button1} onClick={this.signup}>Signup</button>
          </div>
        </form>
      
      </div>
    );
  }
}
export default Login;

