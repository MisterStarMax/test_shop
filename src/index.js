import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store-configure';

import ErrorBoundary from './components/error-boundary';
import Router from './router';

import Service from './service'
import { ServiceContext } from './context';

import './index.css';

const store = configureStore();
const service = new Service();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceContext.Provider value={service}>
                <Router />
            </ServiceContext.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
