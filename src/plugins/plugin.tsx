import './plugin.css';
import React from 'react';
import ReactWebComponent from 'react-web-component';


class MainPlugin extends React.Component {
    render() {
        return <h1 className="main-plugin">Hello main Plugin</h1>;
    }
}

export default MainPlugin;

ReactWebComponent.create(<MainPlugin />, 'hello-main-plugin');