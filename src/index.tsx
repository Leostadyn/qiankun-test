import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {registerMicroApps, start} from "qiankun";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:5173',
    container: '#container',
    activeRule: '/app-vue',
  },
  // {
  //   name: 'angularApp',
  //   entry: '//localhost:4200',
  //   container: '#container',
  //   activeRule: '/app-angular',
  // },
])
start({
  sandbox:{
    experimentalStyleIsolation: true
  }
})
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

