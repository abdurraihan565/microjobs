import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SigninScreen() {
  const Navigate = useNavigate();
  const [loginemail, setloginemail] = useState('');
  const [loginpassword, setloginpassword] = useState('');
  const [loginstatus, setloginstatus] = useState('');
  console.log(loginstatus);
  const [loginMsg, setloginMsg] = useState('');
  console.log(loginMsg);
  // localStoage set up form userdata
  const id = loginstatus.id;
  sessionStorage.setItem('id', id);
  const balance = loginstatus.balance;
  sessionStorage.setItem('balance', balance);
  const name = loginstatus.username;
  sessionStorage.setItem('name', name);
  const country = loginstatus.country;
  sessionStorage.setItem('country', country);
  const youtube = loginstatus.youtube;
  sessionStorage.setItem('youtube', youtube);
  const facebook = loginstatus.facebook;
  sessionStorage.setItem('facebook', facebook);
  const twitter = loginstatus.twitter;
  sessionStorage.setItem('twitter', twitter);
  const instagram = loginstatus.instagram;
  sessionStorage.setItem('instagram', instagram);
  const website = loginstatus.website;
  sessionStorage.setItem('website', website);

  /*
  /// counrty
  //const country = loginstatus.country;
  localStorage.setItem('country', loginstatus.country);
  // localStorage.getItem('country');
  ///username
  const username = loginstatus.username;
  localStorage.setItem('username', username);
  ///*/

  const login = async (e) => {
    e.preventDefault();
    /*Navigate('/paymentinfo', {
      replace: true,
      state: { name: loginstatus },
    });*/
    /*setTimeout(() => {
      Navigate('/paymentinfo', {
        replace: true,
        state: { name:  },
      });
    }, 1000);*/

    try {
      await axios
        .post('http://localhost:7000/login', {
          loginemail,
          loginpassword,
        })
        .then((response) => {
          if (response.data.message) {
            setloginMsg(response.data.message);
          } else {
            //setloginstatus(response.data[0]);

            sessionStorage.setItem(
              'userData',
              JSON.stringify(response.data[0])
            );
            const userDataAll = JSON.parse(sessionStorage.getItem('userData'));
            setloginstatus(userDataAll);
            setTimeout(() => {
              Navigate('/');
            }, 1000);
          }
          //
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login_containner">
      <h1>Login</h1>
      <form>
        <div className="login_input">
          <label>Email</label>
          <input
            type="text"
            onChange={(event) => {
              setloginemail(event.target.value);
            }}
            required
          />
        </div>
        <div className="login_input">
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setloginpassword(event.target.value);
            }}
            required
          />
        </div>
        <div className="login_btn">
          <button type="submit" onClick={login}>
            login
          </button>
        </div>
        <div className="create_user">
          New User?
          <Link to="/register">Create Your Account</Link>
        </div>
      </form>
      <h1>
        {sessionStorage.getItem('userData') ? (
          <p>You are Successfully Login !</p>
        ) : (
          <p className="login_Msg">{loginMsg}</p>
        )}
      </h1>
    </div>
  );
}

export default SigninScreen;
