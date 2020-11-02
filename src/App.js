import React from 'react';
import './App.css';

const validEmailRegex = RegExp(
  /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(\.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }
  checkValidation=(name,value)=>{
    let errors = this.state.errors;
    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    return errors
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if(value.length === 0)
          {
              alert("fill input field first")
          }

    // let errors = this.state.errors;
    let errors = this.state.errors;
 let response = this.checkValidation(name,value)

    this.setState({errors, [name]: value});
  }

  Click = (event) => {
    event.preventDefault();
    let {fullName,email,password} = this.state
let errors = this.state.errors;
if(!fullName){
  errors.fullName = 'enter you full name'
}
 if(!email){
  errors.email = 'enter your email'
}
 if(!password){
  errors.password = 'enter you password'
}
this.setState({
  errors
})
    if(validateForm(this.state.errors)) {
      alert(JSON.stringify(this.state.errors))
     }else
     {
      
alert('fill form')

    
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} >
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName'  placeholder="first name" onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' placeholder="@example.com" onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' placeholder="password"  onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button onClick={this.Click}>Sing up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default App;