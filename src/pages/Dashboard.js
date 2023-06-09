import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [products, setProducts] = useState([]);

  // const [value, setvalue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState('');
  // searchProducts start
  const handleChange = (e) => {
    setSearchText(e.target.value);
    let value = searchText.toLowerCase();
    const newProducts = products.filter((product) => {
      const productsName = product.name.toLowerCase();
      return productsName.startsWith(value);
    });
    setProducts(newProducts);
  };
  useEffect(() => {}, [searchText]);
  // searchProducts ends

  return (
    <div>
      <section className="dashboard">
        <div className="dashboard_containner">
          <div className="dashboard_profile">
            <h1>Dashboard</h1>
            <Link to="createpost">
              <button>Create A Post</button>
            </Link>
            <Link>
              <button>Find works</button>
            </Link>
            <Link to="deposit">
              <button>Deposit Now</button>
            </Link>
            <Link to="/dashboard/history">
              <button>My Work History</button>
            </Link>
            <Link to="createpost/posthistory">
              <button>My Post History</button>
            </Link>

            <Link to="/">
              <button>Contact Us</button>
            </Link>
          </div>
          <div className="dashboard_img">
            <img src="/images/cover3.png" alt="" />
          </div>
        </div>
      </section>
      <section className="products_containner">
        <input
          className="search_btn"
          type="text"
          placeholder="search your work..."
          value={searchText}
          onChange={handleChange}
        />
        <div className="products">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Payout</th>
                <th>Click Here</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const {
                  id,
                  name,
                  price,
                  country,
                  countInStock,
                  countOutStock,
                  desone,
                  destwo,
                } = product;
                return (
                  <>
                    <tr>
                      <td>{name}</td>

                      <td>{country}</td>
                      <td>{price}</td>
                      <td>
                        <Link
                          to={`/product/${product.slug}`}
                          state={{
                            id,
                            name,
                            price,
                            country,
                            countInStock,
                            countOutStock,
                            desone,
                            destwo,
                          }}
                        >
                          <button className="btn">click Here</button>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
