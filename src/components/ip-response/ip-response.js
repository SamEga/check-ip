import React from 'react';

const IpResponse = props => {
  const { result } = props;
  if (result) {
    const resultKeys = Object.keys(result).map(item => (
      <li key={item} className="list-group-item">
        {item} : {result[item]}
      </li>
    ));

    return <ul className="list-group">{resultKeys}</ul>;
  } else {
    return <div>No Data</div>;
  }
};

export default IpResponse;
