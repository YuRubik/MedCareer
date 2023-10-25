import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//       <Home></Home>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ConfigProvider locale={zhCN}>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Router></Router>
            </Suspense>
        </BrowserRouter>
    </ConfigProvider>
)