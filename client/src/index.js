import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App tab="home" />
            </BrowserRouter>
        </PersistGate>
    </Provider>
            );
