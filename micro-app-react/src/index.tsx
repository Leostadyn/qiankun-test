import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path'

import { BrowserRouter } from "react-router-dom";

let root: ReactDOM.Root | null = null;
function render(props: { container?: any; }) {
  const { container } = props;
  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector("#subRoot")
        : document.getElementById("subRoot")
    );

  root.render(
    <BrowserRouter

      basename={(window as any).__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props: { container?: any; }) {
  console.log("[react18] props from main framework", props);
  render(props);
}
// https://github.com/kobeyk/micro-app-react-template/blob/main/config-overrides.js
export async function unmount() {
  root?.unmount();
  root = null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

