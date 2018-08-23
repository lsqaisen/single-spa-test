import React, { PureComponent, Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch, } from 'react-router-dom';
import Layout from './layout/';
import Test1 from './router/test1/';
import Test2 from './router/test2/';
import Test3 from './router/test3/';

// const rootRoute = {
//     childRoutes: [{
//         path: 'react',
//         component: require('./layout/index.jsx'),
//     }]
// };

export default class extends (PureComponent || Component) {
    render() {
        console.log(this.props)
        return (
            <div >
                <div>(built with React)</div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/react" render={(...props) => (
                            <Layout {...props}>
                                <div>
                                    <Route path="/react/1" component={Test1} />
                                    <Route path="/react/2" component={Test2} />
                                    <Route path="/react/3" component={Test3} />
                                    <Redirect to="/react/1" />
                                </div>
                            </Layout>
                        )} >
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
