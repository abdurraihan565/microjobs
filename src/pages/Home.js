import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const name = sessionStorage.getItem('name');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const contact_btn = () => {
    setInterval(() => {
      const contact_msg = document.querySelector('.contact_msg');
      contact_msg.style.display = 'none';
    }, 3000);

    const contact_msg = document.querySelector('.contact_msg');
    contact_msg.style.display = 'block';
  };

  const refreash_msg = () => {
    const refreash_msg = document.querySelector('.refreash_msg');
    refreash_msg.style.display = 'none';
  };
  return (
    <div>
      {sessionStorage.getItem('userData') ? (
        <div className="refreash_msg">
          <span onClick={refreash_msg}>x</span>
          <p>Dear {name} please Refreash the page </p>
        </div>
      ) : (
        ''
      )}

      <section>
        <div className="hero_containner">
          <div className="hero_des">
            <h1 data-aos="fade-right">
              Best Microjob & Freelance Site To Make Money Online
            </h1>
            <h6>small Gigs Big Results !</h6>
            {sessionStorage.getItem('userData') ? (
              <Link to="dashboard">
                <button>Earn Money</button>
              </Link>
            ) : (
              <Link to="login">
                <button>Login Now</button>
              </Link>
            )}
          </div>
          <div className="hero_img">
            <img src="/images/cover4.png" alt="" />
          </div>
        </div>
        <section className="card_containner">
          <h1>How Its Works</h1>
          <div className="card">
            <div className="card_items" data-aos="flip-right">
              <div className="card_icon">
                <i class="fa-solid fa-user-plus"></i>
              </div>
              <h6>Sign Up</h6>
              <p>
                Select jobs you like & Then Complete these tasks and Explore
                required tasks Send required proofs
              </p>
            </div>
            <div className="card_items" data-aos="flip-right">
              <div className="card_icon">
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <h6>works</h6>
              <p>
                Select jobs you like & Then Complete these tasks and Explore
                required tasks Send required proofs
              </p>
            </div>
            <div className="card_items" data-aos="flip-right">
              <div className="card_icon">
                <i class="fa-solid fa-money-bill-transfer"></i>
              </div>
              <h6>Deposit</h6>
              <p>
                Select jobs you like & Then Complete these tasks and Explore
                required tasks Send required proofs
              </p>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="news_containner">
            <div className="news_card">
              <h1>We provides best Services ! small Gigs Big results</h1>
              <p>
                this is best on of the most powerfull & trustted site & you can
                get more money !
              </p>
            </div>
            <div className="news_img" data-aos="flip-right">
              <img src="/images/cover3.png" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="contacts">
            <div className="contact_pera">
              <p>
                <i class="fa-solid fa-phone"></i> contact us
              </p>
              <p>abdurraihan565@gmail.com</p>
              <p>abdurraihan901@gmail.com</p>
            </div>
            <div>
              <div className="contact_input">
                <lebel>Enter Your name :</lebel>

                <input type="text" />
              </div>
              <br></br>
              <div className="contact_input">
                <lebel>Enter Your Email :</lebel>

                <input type="text" />
              </div>
              <br></br>
              <div className="textarea">
                <lebel>message :</lebel>
                <br></br>
                <textarea type="text"></textarea>
              </div>
              <div className="contact_btn">
                <button onClick={contact_btn}>sumit now</button>
              </div>
              <div className="contact_msg">
                <p>Your Message Successfully submited</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
