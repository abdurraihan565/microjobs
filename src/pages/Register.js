import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
function Register() {
  const Navigate = useNavigate();
  const [UserName, setUserName] = useState('');
  const [Country, setCountry] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [id, setid] = useState('');
  const [valueMsg, setvalueMsg] = useState('');

  const Register = async (e) => {
    setTimeout(() => {
      Navigate('/login');
    }, 1000);

    e.preventDefault();
    try {
      await axios
        .post('http://localhost:7000/register', {
          id,
          UserName,
          Country,
          Email,
          Password,
        })
        .then((response) => {
          setvalueMsg(response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="register_input">
        <level> Create Pin code : </level>
        <input
          placeholder="only 5 digit number"
          type="text"
          onChange={(event) => {
            setid(event.target.value);
          }}
          required
        />
      </div>
      <div className="register_input">
        <level>Enter Your Name : </level>
        <input
          placeholder="name"
          type="text"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          required
        />
      </div>
      <br></br>
      <div className="register_input">
        <level>Enter Your country : </level>
        <input
          placeholder="country"
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
          required
        />
      </div>
      <div className="register_input">
        <level>Enter Your Email : </level>
        <input
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </div>
      <div className="register_input">
        <level>Enter Your password : </level>
        <input
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
      </div>
      <p>p:{valueMsg}</p>
      <div className="register_btn">
        <button onClick={Register}>Register </button>
      </div>
    </div>
  );
}

export default Register;
