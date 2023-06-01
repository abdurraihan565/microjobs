import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Withdraw() {
  const id = sessionStorage.getItem('id');
  const [Wallet, setWallet] = useState('');
  const [Account_Number, setAccount_Number] = useState('');
  const [Wallet_Input, setWallet_Input] = useState('');
  const [Withdraw_msg, setWithdraw_msg] = useState('');
  const [UserData, setUserData] = useState([]);

  console.log(UserData);

  const next_btn = (e) => {
    const withdraw_containner_des = document.querySelector(
      '.withdraw_containner_des'
    );
    withdraw_containner_des.style.display = 'block';
  };

  const withdraw = async (e) => {
    const withdraw_containner_des = document.querySelector(
      '.withdraw_containner_des'
    );
    withdraw_containner_des.style.display = 'none';
    try {
      await axios
        .post('http://localhost:7000/api/withdraw', {
          id,
          Wallet,
          Account_Number,
          Wallet_Input,
        })
        .then((response) => {
          setWithdraw_msg(response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/userdata');
      setUserData(result.data);
    };
    fetchData();
  }, []);

  const balance = UserData.map((data) => {
    if (data.id == sessionStorage.getItem('id')) {
      const { balance } = data;

      return balance;
    }
    return false;
  });

  //const balance = 5;
  return (
    <div>
      <div className="withdraw_containner">
        <h1>Withdraw Money</h1>

        <select
          onChange={(e) => {
            setWallet(e.target.value);
          }}
        >
          <option value="perfect money">Perfect Money</option>
          <option value="Payeer">Payeer</option>
        </select>
        <br></br>
        <p>Set Your {Wallet} account Number</p>
        <input
          type="text"
          placeholder="Enter Account Number.."
          onChange={(e) => {
            setAccount_Number(e.target.value);
          }}
        />
        <button onClick={next_btn}>Next</button>

        <div className="withdraw_containner_des">
          <h1>Create payout request</h1>
          <h3>Available funds : {balance}$</h3>
          <h3>Minimum withdrawal amount : 5 $</h3>
          <h3>Wallet type : {Wallet}</h3>
          <h3>account Number : {Account_Number}</h3>
          <input
            type="number"
            placeholder="Enter Amount.."
            onChange={(e) => {
              setWallet_Input(e.target.value);
            }}
          />

          {balance >= 5 ? (
            <button type="submit" onClick={withdraw}>
              Withdraw
            </button>
          ) : (
            <div className="withdraw_btn">
              <p>
                Dear Your Available funds {balance}$ When Your Funds 5 $ then
                You can Withdraw Money$
              </p>
            </div>
          )}
        </div>
        <p>{Withdraw_msg}</p>
      </div>
    </div>
  );
}

export default Withdraw;
