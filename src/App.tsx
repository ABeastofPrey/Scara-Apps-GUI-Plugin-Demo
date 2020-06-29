import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import { Hello } from './hello/Hello';
import ReactWebComponent from 'react-web-component';


class UserProfile extends React.Component {
  render() {
    return <Profile />
  }
}

ReactWebComponent.create(<UserProfile />, 'user-profile');
ReactWebComponent.create(<Hello />, 'hello-react');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <user-profile></user-profile>
        <hello-react></hello-react>
      </header>
    </div>
  );
}

export default App;
