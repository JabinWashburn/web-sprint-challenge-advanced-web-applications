import React, {useState} from "react";
import {axiosWithAuth} from './axiosWithAuth'


const Login = props =>{
  
  // make a post request to retrieve a token from the api
  const [login, setLogin] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const handleChange = (e) => {
    setLogin ({...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    axiosWithAuth()
    .post('http://localhost:5000/api/login', login)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload)
      setLogin(login)
      props.history.push('/protected')
    })
    .catch(err => {
      console.log(err.data)
    })
  }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form onChange={handleSubmit}>
        <input type='text' name='username' onChange={handleChange} value={login.username}/>
        <input type='password' name='password' onChange={handleChange} value={login.password}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login

