import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavProvider} from './context/NavContext';
import {FooterProvider} from "./context/FooterContext.tsx";

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';
import {BackgroundProvider} from "./context/BackgroundContext.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <NavProvider>
                    <BackgroundProvider>
                        <FooterProvider>
                            <App/>
                        </FooterProvider>
                    </BackgroundProvider>
                </NavProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);