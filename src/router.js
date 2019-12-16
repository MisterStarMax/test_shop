import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './components/header'
//ленивая подгрузка страниц
const HomePage = lazy(() => import('./pages/home'));
const CartPage = lazy(() => import('./pages/cart'));

const Router = () => {
    return (
        <BrowserRouter> 
            <Header />
            <Suspense fallback={
                <CircularProgress size={60} style={{
                    position: 'fixed',
                    left: 'calc((100vw - 30px) / 2)',
                    top: 'calc((100vh - 30px) / 2)',
                }} />
            }>
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/cart" component={CartPage} exact />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;