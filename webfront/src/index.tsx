import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

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