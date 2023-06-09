import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navber() {
  const Navigate = useNavigate();

  const [message, setmessage] = useState([]);
  console.log(message);
  const [DepositBalance, setDepositBalance] = useState([]);

  const id = sessionStorage.getItem('id');
  const name = sessionStorage.getItem('name');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/depositbalance');
      setDepositBalance(result.data);
    };
    fetchData();
  }, []);

  const Logout = () => {
    sessionStorage.removeItem('instagram');
    sessionStorage.removeItem('facebook');
    sessionStorage.removeItem('balance');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('website');
    sessionStorage.removeItem('country');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('youtube');
    sessionStorage.removeItem('twitter');
    setTimeout(() => {
      Navigate('/login');
    }, 2000);
  };

  const notification = (e) => {
    const notification = document.querySelector('.display_notification');
    notification.style.display = 'block';
  };

  const remove_notification = (e) => {
    const notification = document.querySelector('.display_notification');
    notification.style.display = 'none';
  };

  const profileHandelar = (e) => {
    e.preventDefault();
    const profile = document.querySelector('.profile_navber');
    profile.style.display = 'block';
  };
  const profileRemove = (e) => {
    const profile = document.querySelector('.profile_navber');
    profile.style.display = 'none';
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/message');
      setmessage(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="Navber">
      <div className="Navber_title">
        <Link to="/">
          <button>Microjobs</button>
        </Link>
      </div>
      <div className="display_notification">
        <span onClick={remove_notification}>x</span>
        <div className="notification_des">
          <p>Dear {name} You are succesfully Login !</p>
          {message.map((data) => {
            if (data.id == sessionStorage.getItem('id')) {
              const { msg } = data;
              return (
                <>
                  <p>
                    Dear {name} {msg}
                  </p>
                </>
              );
            }
          })}
        </div>
      </div>

      {sessionStorage.getItem('userData') ? (
        <button className="notification" onClick={notification}>
          <i class="fa-regular fa-bell"></i>
        </button>
      ) : (
        ''
      )}

      {sessionStorage.getItem('userData') ? (
        <button className="profile" onClick={profileHandelar}>
          profile
        </button>
      ) : (
        ''
      )}

      <div className="profile_navber">
        <span onClick={profileRemove}>x</span>

        <div className="profile_dev">
          <Link to="">
            <button>Your ID : {id}</button>
          </Link>
          <Link>
            <button>
              balance :{' '}
              {sessionStorage.getItem('balance')
                ? sessionStorage.getItem('balance')
                : '00'}{' '}
            </button>
          </Link>
          <Link to="">
            {DepositBalance.map((data) => {
              if (data.id == sessionStorage.getItem('id')) {
                const { balance } = data;
                return (
                  <>
                    <button>Deposit balance : {balance} $</button>
                  </>
                );
              }
            })}
          </Link>
          <Link to="dashboard">
            <button>Dashboard</button>
          </Link>
          <Link to="dashboard/deposit">
            <button>Deposit Now</button>
          </Link>
          <Link to="dashboard/createpost">
            <button>Post a Work</button>
          </Link>
          <Link to="dashboard/withdraw">
            <button>Withdraw Money</button>
          </Link>
        </div>
      </div>

      <div className="Navber_btn">
        <nav>
          {sessionStorage.getItem('userData') ? (
            ''
          ) : (
            <Link to="/register">
              <button>register</button>
            </Link>
          )}

          {sessionStorage.getItem('userData') ? (
            <button onClick={Logout}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navber;
