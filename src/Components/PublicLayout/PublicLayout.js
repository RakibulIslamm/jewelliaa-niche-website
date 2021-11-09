import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home/Home';
import Footer from '../Shared/Footer/Footer';
import PublicHeader from '../Shared/PublicHeader/PublicHeader';

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <Switch>
                <Route>
                    <Home></Home>
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default PublicLayout;