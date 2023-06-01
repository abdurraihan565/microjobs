import axios from 'axios';
import React, { useEffect, useState } from 'react';

function History() {
  // const id = location.state.id;
  const [userinfo, setuserinfo] = useState([]);
  const [provedata, setprovedata] = useState([]);
  console.log(provedata);

  //console.log(provedata);
  //const [userMatched, setuserMatched] = useState('');
  //console.log(userMatched);
  // localStoage

  /* sessionStorage.setItem('id', id);
   const name = userinfo.username;
   sessionStorage.setItem('name', name);
   const country = userMatched.country;
   sessionStorage.setItem('country', country);*/
  /*userinfo.filter((obj) => {
    if (obj.id == sessionStorage.getItem('id')) {
      const { id, status } = obj;
      console.log(id, status);
    }
    return false;
  });*/

  //console.log(userMatch[0]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/userinfo');
      setuserinfo(result.data);
    };

    fetchData();
  }, []);
  // fetch data form provedata

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/provedata');
      setprovedata(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="history_session">
        <h1>Your Total WorK History</h1>
      </div>
      <div className="total_card">
        <div className="history_containner">
          <div className="all_history_card">
            <h6>YouTube Releated Works Done</h6>
            <h6>
              {sessionStorage.getItem('youtube')
                ? sessionStorage.getItem('youtube')
                : '00'}
            </h6>
          </div>
          <div className="all_history_card">
            <h6>YouTube Releated Works Done</h6>
            <h6>
              {sessionStorage.getItem('facebook')
                ? sessionStorage.getItem('facebook')
                : '00'}
            </h6>
          </div>
          <div className="all_history_card">
            <h6>YouTube Releated Works Done</h6>
            <h6>
              {sessionStorage.getItem('twitter')
                ? sessionStorage.getItem('twitter')
                : '00'}
            </h6>
          </div>
          <div className="all_history_card">
            <h6>YouTube Releated Works Done</h6>
            <h6>
              {sessionStorage.getItem('instagram')
                ? sessionStorage.getItem('instagram')
                : '00'}
            </h6>
          </div>
          <div className="all_history_card">
            <h6>YouTube Releated Works Done</h6>
            <h6>
              {sessionStorage.getItem('website')
                ? sessionStorage.getItem('website')
                : '00'}
            </h6>
          </div>
        </div>
        <div>
          <div className="list_title">
            <h6>Lasted Works</h6>
          </div>
          <div className="list_work">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>datalis</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {provedata.map((data) => {
                  if (data.id == sessionStorage.getItem('id')) {
                    const { id, provedes, name, country, price } = data;
                    return (
                      <>
                        <tr>
                          <td>{provedes}</td>
                          <td>
                            id :{id} description: {name} {country} {price}{' '}
                          </td>
                          <td>{price}</td>
                        </tr>
                      </>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    /* <div>
      {userinfo.map((obj) => {
        if (obj.id == sessionStorage.getItem('id')) {
          const {
            id,
            status,
            withdraw,
            payments,
            details,
            title,
            youtube,
            facebook,
            twitter,
            instagram,
          } = obj;
          console.log(title);

          return (
            <div key={obj.id}>
              
            </div>
          );
        }
      })}
    </div>*/
  );
}

export default History;
