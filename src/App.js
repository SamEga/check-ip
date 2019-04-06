import React, { Component } from 'react';

import IpForm from './components/ip-form/ip-form';

class App extends Component {
  state = { curIp: '', result: '' };

  componentDidMount() {
    const curIp = localStorage.getItem('curIp');
    const result = localStorage.getItem('result');

    if (curIp || result) {
      this.setState(() => {
        return {
          curIp: JSON.parse(curIp),
          result: JSON.parse(result)
        };
      });
    }
  }

  handleIp = e => {
    const { value } = e.target;
    this.setState({ curIp: value });
    this.saveLocal();
  };

  saveLocal = () => {
    localStorage.setItem('curIp', JSON.stringify(this.state.curIp));
    localStorage.setItem('result', JSON.stringify(this.state.result));
  };

  submitForm = e => {
    e.preventDefault();
    fetch(`https://api.2ip.ua/geo.json?ip=${this.state.curIp}`)
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
        this.setState(() => ({ result }));
        this.saveLocal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Check IP Address</h1>
        <IpForm
          state={this.state}
          handleIp={this.handleIp}
          submitForm={this.submitForm}
        />
      </div>
    );
  }
}

export default App;
