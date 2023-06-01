import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PostHistory() {
  const [createPost, setcreatePost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/createpost');
      setcreatePost(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="post_history_containner">
        <h1>Your Post History</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Total Audiance</th>
              <th>Total prices</th>
            </tr>
          </thead>
          <tbody>
            {createPost.map((data) => {
              const {
                PostSelectValue,
                PostSelectValueCountry,
                PostSelectValueAudience,
                SelectValue,
              } = data;
              return (
                <>
                  <tr>
                    <td>{PostSelectValue}</td>

                    <td>{PostSelectValueCountry}</td>
                    <td>{PostSelectValueAudience}</td>
                    <td>{SelectValue}$</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostHistory;
