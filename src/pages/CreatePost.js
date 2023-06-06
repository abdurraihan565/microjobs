import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CreatePost() {
  const [PostSelectValue, setPostSelectValue] = useState('');
  const [PostSelectValueCountry, setPostSelectValueCountry] = useState('');
  const [PostSelectValueAudience, setPostSelectValueAudience] = useState('');
  const [SelectValue, setSelectValue] = useState('');
  const [PostLink, setPostLink] = useState('');
  const [PostInput, setPostInput] = useState('');
  const [PostInputTwo, setPostInputTwo] = useState('');
  const [DepositBalance, setDepositBalance] = useState([]);

  const name = sessionStorage.getItem('name');
  const id = sessionStorage.getItem('id');

  // const Deposit = 20;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/depositbalance');
      setDepositBalance(result.data);
    };
    fetchData();
  }, []);
  const postBtn = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const post_cart = document.querySelector('.post_cart');
      post_cart.style.display = 'block';
    }, 1000);
  };

  const checkoutBtn = async (e) => {
    setTimeout(() => {
      const post_containner = document.querySelector('.post_containner');
      post_containner.style.display = 'none';
    }, 1000);

    const Post_msg = document.querySelector('.Post_msg');
    Post_msg.style.display = 'block';
    try {
      await axios
        .post('http://localhost:7000/createPost', {
          id,
          PostSelectValue,
          PostSelectValueCountry,
          PostSelectValueAudience,
          SelectValue,
          PostLink,
          PostInput,
          PostInputTwo,
        })
        .then((response) => {
          console.log(response.data.message);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="post_containner">
        <div className="post-des">
          <h1>Create a Post</h1>
          <p>Choose Your Catagory</p>

          <select
            onChange={(e) => {
              setPostSelectValue(e.target.value);
            }}
          >
            <option>Choose Catagory</option>
            <option>Youtube like, comment, subscribe, & watch Time</option>
            <option>Youtube like, subscribe & watch time</option>
            <option>Youtube like, comment & subscribe</option>
            <option>Facebook like, comment, follow, & watch Time</option>
            <option>Facebook like, follow & watch time</option>
            <option>Facebook like, comment & follow</option>
            <option>Instagram like, comment, follow, & watch Time</option>
            <option>Instagram like, follow & watch time</option>
            <option>Instagram like, comment & follow</option>
            <option>Apps intall & Sign up </option>
            <option>Apps intall </option>
            <option>websites & sign up </option>
            <option>websites & views </option>
          </select>
          <br></br>
          <select
            onChange={(e) => {
              setPostSelectValueCountry(e.target.value);
            }}
          >
            <option>Choose Your odiance country </option>
            <option>ALL country</option>
            <option>USA</option>
            <option>Australia</option>
            <option>Newzeland</option>
            <option>England</option>
            <option>italy</option>
            <option>India</option>
            <option>Rassia</option>
            <option>Jarmany</option>
            <option>dubai</option>
          </select>
          <br></br>
          <select
            onChange={(e) => {
              setPostSelectValueAudience(e.target.value);
            }}
          >
            <option>Choose Your odiance </option>
            <option value="100">1-100</option>
            <option value="500">1-500</option>
            <option value="1000">1-1000</option>
            <option value="10000">1-10000</option>
            <option value="20000">1-20000</option>
            <option value="30000">1-30000</option>
            <option value="40000">1-40000</option>
            <option value="50000">1-50000</option>
          </select>
          <br></br>
          <select
            onChange={(e) => {
              setSelectValue(e.target.value);
            }}
          >
            <option>Make sure odiance (its very important) </option>
            <option value="10">1-100</option>
            <option value="19">1-500</option>
            <option value="29">1-1000</option>
            <option value="39">1-10000</option>
            <option value="49">1-20000</option>
            <option value="59">1-30000</option>
            <option value="69">1-40000</option>
            <option value="99">1-50000</option>
          </select>
          <p>Your website Link (its very important)</p>
          <input
            type="text"
            onChange={(e) => {
              setPostLink(e.target.value);
            }}
          />
          <p>What is expected from workers?**</p>
          <div className="post_input">
            <textarea
              type="text"
              onChange={(e) => {
                setPostInput(e.target.value);
              }}
            />
          </div>
          <p>Required proof that task was finished**</p>
          <div className="post_input">
            <textarea
              type="text"
              onChange={(e) => {
                setPostInputTwo(e.target.value);
              }}
            />
          </div>
          <button onClick={postBtn}>Next</button>
        </div>
        <div className="post_cart">
          <h1>Pocess to Check Out</h1>
          <h6>Catagory : {PostSelectValue} </h6>
          <h6>Country : {PostSelectValueCountry} </h6>
          <h6>Audience : {PostSelectValueAudience}</h6>
          <h6>website Link : {PostLink}</h6>
          <h6>expected Works : {PostInput}</h6>
          <h6>Required proof : {PostInputTwo}</h6>
          <h3> Sub Toatal : {SelectValue} $</h3>

          {DepositBalance.map((data) => {
            if (data.id == sessionStorage.getItem('id')) {
              const { balance } = data;
              return (
                <>
                  {SelectValue <= balance ? (
                    <button type="submit" onClick={checkoutBtn}>
                      process to check out
                    </button>
                  ) : (
                    <div className="deposit_btn">
                      <p>
                        Dear {name} Your Balance Was {balance} Please Deposit
                        Now
                      </p>
                    </div>
                  )}
                </>
              );
            }
          })}
        </div>
      </div>
      <div className="Post_msg">
        <p>
          Dear {name} Your Post was succesfully submitted ! Our Clint review
          Your Post . Please wait 24/h bussnees Time .{'   '}
          <Link to="posthistory">
            <span>See Your Post</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreatePost;
