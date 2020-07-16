import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === "development") {
	ReactDOM.render(
		<React.StrictMode>
			<h1>Plugin test</h1>
			<hello-plugin></hello-plugin>
		</React.StrictMode>,
		document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://bit.ly/CRA-PWA
	serviceWorker.unregister();
} else {
	console.log('Plugins: ');
	console.log('hello-plugin');
}