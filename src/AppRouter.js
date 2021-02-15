import Menu from 'components/Menu';
import PageOne from 'pages/PageOne';
import PageThree from 'pages/PageThree';
import PageTwo from 'pages/PageTwo';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Routes = (
    <Switch>
        <Route exact path="/page-two" component={PageTwo} />
        <Route path="/page-three" component={PageThree} />
        <Route path="/" component={PageOne} />
    </Switch>)

export default function AppRouter() {

    return (
        <Router>
            <Menu routes={Routes} />
        </Router>
    )
}