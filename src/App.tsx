import React from 'react';
import './App.css';
import Profile from './profile/Profile';

import ReactDOM from 'react-dom';

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name') as string;
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}



function App() {
  customElements.define('x-search', XSearch);
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <x-search></x-search>
      </header>
    </div>
  );
}

export default App;
