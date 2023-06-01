import React from 'react';

function Faq() {
  const about = () => {
    setInterval(() => {
      const panel = document.querySelector('.panel');
      panel.style.display = 'none';
    }, 10000);

    const panel = document.querySelector('.panel');
    panel.style.display = 'block';
  };
  const post = () => {
    setInterval(() => {
      const panel2 = document.querySelector('.panel2');
      panel2.style.display = 'none';
    }, 10000);

    const panel2 = document.querySelector('.panel2');
    panel2.style.display = 'block';
  };
  const work = () => {
    setInterval(() => {
      const panel3 = document.querySelector('.panel3');
      panel3.style.display = 'none';
    }, 10000);
    const panel3 = document.querySelector('.panel3');
    panel3.style.display = 'block';
  };
  const deposit = () => {
    setInterval(() => {
      const panel4 = document.querySelector('.panel4');
      panel4.style.display = 'none';
    }, 10000);
    const panel4 = document.querySelector('.panel4');
    panel4.style.display = 'block';
  };
  const contact = () => {
    setInterval(() => {
      const panel5 = document.querySelector('.panel5');
      panel5.style.display = 'none';
    }, 10000);
    const panel5 = document.querySelector('.panel5');
    panel5.style.display = 'block';
  };
  return (
    <div className="faq">
      <h1>FAQ</h1>

      <button className="accordion" onClick={about}>
        About Us ?
      </button>
      <div className="panel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={post}>
        How to create post?
      </button>
      <div className="panel2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={work}>
        How to work?
      </button>
      <div className="panel3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={deposit}>
        How to Deposit ?
      </button>
      <div className="panel4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={contact}>
        How to contact Us?
      </button>
      <div className="panel5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default Faq;
