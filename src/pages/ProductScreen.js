import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
function ProductScreen() {
  const { slug } = useParams();

  const location = useLocation();
  const id = sessionStorage.getItem('id');
  const name = location.state.name;
  const country = location.state.country;
  const price = location.state.price;
  const desone = location.state.desone;

  const destwo = location.state.destwo;

  // submit prove
  const [proveDes, setProveDes] = useState('');

  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/uploads');
      setdata(result.data);
    };
    fetchData();
  }, []);

  const areaText = (e) => {
    e.preventDefault();
    setProveDes(e.target.value);
  };
  // img

  const submitHandler = async (e) => {
    const submit_msg = document.querySelector('.submit_msg');
    submit_msg.style.display = 'block';

    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/provedata', {
        id,
        proveDes,
        name,
        country,
        price,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <div className="prodct_detals">
        <div></div>
        <h1>{location.state.name}</h1>
        <p>
          work done: {location.state.countInStock}/
          {location.state.countOutStock}
        </p>
        <p>This task takes less than 3 minutes to finish</p>
        <p>Post Id: {id}</p>
        <p>You will Earn Money: ${location.state.price} </p>
        <h3>
          You can accept this job if you are from
          <span> THESE COUNTRIES ONLY!:</span>
          <br></br>
          <p>{location.state.country}</p>
        </h3>
        <div className="worker_des">
          <h4>
            <span>?</span>What is expected from workers?
          </h4>
          <p>{desone}</p>
        </div>
        <div className="worker_des">
          <h4>
            <span>?</span>Required proof that task was finished?
          </h4>
          <p>{destwo}</p>
        </div>

        <form
          action="http://localhost:7000/upload"
          method="post"
          encType="multipart/form-data"
        >
          <div className="submit_required">
            <h3>SUBMIT REQUIRED WORK PROVE </h3>
            <textarea type="text" name="area" onChange={areaText}></textarea>
          </div>

          <div className="show_img">
            <h3>SUBMIT REQUIRED WORK PROVE </h3>
            <input type="file" name="avater" />
            <input className="submit_btn" type="submit" value="show Img" />
            <div className="display_img">
              {data.map((value) => {
                if (value.id == sessionStorage.getItem('id')) {
                  const { id, img } = value;
                  return (
                    <>
                      <img
                        src={`http://localhost:7000/uploads/` + img}
                        alt=""
                      />
                    </>
                  );
                }
              })}
            </div>
          </div>
          <div className="img_value">
            <input value={name} name="name" />
            <input value={country} name="country" />
            <input value={price} name="price" />
            <input value={id} name="id" />
          </div>
        </form>
        <img src={`http://localhost:7000/uploads/` + data.img} alt="" />
        {location.state.countInStock === location.state.countOutStock ? (
          <div className="Unavailable_btn">
            <p>
              This task is Unavailable becouse alreay complate work please try
              another task<Link to="/dashboard"> Work</Link>
            </p>
          </div>
        ) : (
          <button type="submit" onClick={submitHandler}>
            submit Now
          </button>
        )}
      </div>
      <div className="submit_msg">
        Your Task succesfully Submitted. Go to Another
        <Link to="/dashboard"> Work</Link>
      </div>
    </section>
  );
}

export default ProductScreen;
