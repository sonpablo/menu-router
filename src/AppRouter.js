import Menu from 'components/Menu';
import MobileMenu from 'components/MobileMenu';
import useWindow from 'hooks/useWindow';
import PageCounter from 'pages/PageCounter';
import PageThree from 'pages/PageThree';
import PageTwo from 'pages/PageTwo';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = (
    <Switch>
        <Route path="/" exact component={PageCounter} />
        <Route path="/page-two" component={PageTwo} />
        <Route path="/page-three" component={PageThree} />
    </Switch>)

export default function AppRouter() {

    const { isMobileWindow } = useWindow()

    return (
        <Router>
            {
                isMobileWindow
                    ? <MobileMenu routes={Routes} />
                    : <Menu routes={Routes} />
            }

        </Router>
    )
}