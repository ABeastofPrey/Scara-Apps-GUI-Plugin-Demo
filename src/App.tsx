import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import ReactWebComponent from 'react-web-component';

function HelloWorld() {
  return (
    <div>
      Hello World!!!
    </div>
  )
}
 
class Hello extends React.Component {
  render() {
    return <HelloWorld />
  }
}

ReactWebComponent.create(<Hello />, 'user-profile');
// ReactWebComponent.create(<HelloWorld />, 'user-profile');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <user-profile></user-profile>
      </header>
    </div>
  );
}

export default App;
