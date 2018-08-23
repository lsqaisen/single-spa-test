import React, { PureComponent, Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends (PureComponent || Component) {
    // componentWillMount() {
    //     Nprogress.start();
    // }
    // componentDidMount() {
    //     Nprogress.done();
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     Nprogress.start();
    // }
    render() {
        return (
            <div>
                <a onClick={() => window.history.pushState(null, null, '/react')}>link1</a> |
                <a onClick={() => window.history.pushState(null, null, '/angular')}>link2</a> |
                <a href="/react/3">link3</a>
            </div>
        )
    }
}