import { ColorModeScript } from '@chakra-ui/react';
import App from 'App';
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import store from 'store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');

const root = createRoot(container);

function render() {
  root.render(
    <Fragment>
      <ColorModeScript />
      <App />
    </Fragment>
  );
}

store.subscribe(render);

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
