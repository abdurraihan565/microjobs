import axios from 'axios';
import React, { useState } from 'react';

function UserDeposit() {
  const id = sessionStorage.getItem('id');
  const [deposit_value, setdeposit_value] = useState('');
  const [Deposit, setDeposit] = useState('');
  const [Deposit_des, setDeposit_des] = useState('');
  const [DepositMsg, setDepositMsg] = useState('');
  console.log(DepositMsg);

  const Deposit_btn = (e) => {
    e.preventDefault();
    setdeposit_value(e.target.value);
  };

  const display_des = async (e) => {
    const Deposit = document.querySelector('.deposit');
    Deposit.style.display = 'block';
  };

  const btn = async () => {
    alert('are you sure you want to deposit');
    try {
      await axios
        .post('http://localhost:7000/deposit', {
          id,
          deposit_value,
          Deposit,
          Deposit_des,
        })
        .then((response) => {
          setDepositMsg(response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="Diposit_containner">
        <h1>Deposit Now</h1>

        <select onChange={Deposit_btn}>
          <option>Choose Payments method</option>
          <option value=" Perfect Money Number : 756488594 ">
            Perfect Money
          </option>
          <option value=" Payeer Number : P7465745">payeer</option>
        </select>
        <br></br>
        <input
          type="number"
          placeholder="Enter amount..."
          onChange={(e) => {
            setDeposit(e.target.value);
          }}
        />
        <button onClick={display_des}>next</button>
        <div className="deposit">
          <h1>Money transfer by Perfect Money</h1>
          <p>Your ID : {id}</p>

          <p>Total Deposit : {Deposit} $</p>
          <h2>
            <span>NOTE: </span> This is Our
            {deposit_value} . You can diposit This number. AND submit you your
            account number & Tranjection id.
          </h2>

          <textarea
            type="text"
            placeholder="1."
            onChange={(e) => {
              setDeposit_des(e.target.value);
            }}
          ></textarea>
          <br></br>

          <button onClick={btn}>submit now</button>
          <p>{DepositMsg}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDeposit;
