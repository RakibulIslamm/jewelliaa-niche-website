import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home/Home';
import Login from '../Login/Login';
import OrderPage from '../OrderPage/OrderPage';
import MyOrders from '../PrivateLayout/MyOrders/MyOrders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import Footer from '../Shared/Footer/Footer';
import PublicHeader from '../Shared/PublicHeader/PublicHeader';
import Shop from '../Shop/Shop';

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/shop">
                    <Shop></Shop>
                </Route>
                <PrivateRoute path="/my-orders">
                    <MyOrders></MyOrders>
                </PrivateRoute>
                <PrivateRoute path="/order/:id">
                    <OrderPage></OrderPage>
                </PrivateRoute>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/register">
                    <Register></Register>
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default PublicLayout;