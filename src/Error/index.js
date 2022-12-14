import React from 'react';

const Error = ({ response, status }) => (
  <div className="error">
    <h2>user not found</h2>
    <b>
      {status}: {response.message}
    </b>
    <p>Please try searching again.</p>
  </div>
);

export default Error;
