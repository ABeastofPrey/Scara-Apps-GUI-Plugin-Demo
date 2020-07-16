import './index.css';
import React from 'react';
import ReactWebComponent from 'react-web-component';
import { HelloPlugin } from './hello-plugin/hello-plugin';

// class Plugin extends React.Component {
//     // // attachedCallback
//     // webComponentAttached(): void { };

//     // // connectedCallback
//     // webComponentConnected(): void;

//     // // disconnectedCallback
//     // webComponentDisconnected(): void;

//     // // attributeChangedCallback
//     // webComponentAttributeChanged(): void;

//     // // adoptedCallback
//     // webComponentAdopted(): void;
// }

ReactWebComponent.create(<HelloPlugin />, 'hello-plugin');