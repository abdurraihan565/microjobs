import React from 'react';
import { Link } from 'react-router-dom';

function Fotter() {
  return (
    <div>
      <section className="fotter_section">
        <div className="fotter_containner">
          <div className="text_fotter">
            <div className="fotter_img">
              <img src="/images/cover3.png" alt="" />
            </div>
            <p>
              We provides best Services ! small Gigs Big results this is best on
              of the most <br></br>powerfull & trustted site & you can get more
              money !
            </p>
            <div className="icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
          <div className="fotter_link_containner">
            <div className="fotter_link">
              <h6>Quick Link</h6>
              <Link to="">
                <button>Home</button>
              </Link>
              <br></br>
              <Link to="dashboard/faq">
                <button>About</button>
              </Link>
              <br></br>
              <Link to="dashboard/faq">
                <button>Contact</button>
              </Link>
            </div>
            <div className="fotter_link">
              <h6>Services</h6>
              <Link to="">
                <button>Post a Works</button>
              </Link>
              <br></br>
              <Link>
                <button>Works With Us</button>
              </Link>
              <br></br>
              <Link>
                <button>Withdraw Money</button>
              </Link>
              <Link>
                <button>Deposit Money</button>
              </Link>
              <Link>
                <button>Create Advertisment</button>
              </Link>
            </div>
            <div className="fotter_link">
              <h6>Help & Suport</h6>

              <Link to="dashboard/faq">
                <button>FAQ</button>
              </Link>
              <br></br>
              <Link to="dashboard/faq">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="copy_right">
        <p>This a copy right 2023</p>
      </section>
    </div>
  );
}

export default Fotter;
