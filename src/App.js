import React, { Component } from 'react';
import{ observer, inject } from 'mobx-react'

import services from './views/services'

import './App.css';
import logo from './logo.svg';

@inject('stores')
@observer
class App extends React.Component {

  constructor() {
    super()

    this._getProjectList = this._getProjectList.bind(this)
  }

  _getProjectList () {
    services.projectsServices.getProjectsList()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <div onClick={ this._getProjectList }>
            Configuration path is { this.props.stores.projectsStore.projects }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
