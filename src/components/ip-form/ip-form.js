import React from 'react';

import IpResponse from '../ip-response/ip-response';
import './ip-form.css';

const IpForm = props => {
  const { result } = props.state;

  return (
    <div>
      <form>
        <label htmlFor="ip">IP Address</label>
        <input
          type="text"
          className="form-control"
          id="ip"
          onChange={props.handleIp}
          value={props.state.curIp}
        />
        <button
          className="btn btn-primary btn-submit"
          type="submit"
          onClick={e => {
            props.submitForm(e);
          }}
        >
          Submit
        </button>
      </form>
      <IpResponse result={result} />
    </div>
  );
};

export default IpForm;
