import React, { PureComponent, Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends (PureComponent || Component) {
    render() {
        const { children } = this.props;
        return (
            <div>
                xxx
                <Link to="/react">home</Link><br />
                <Link to="/react/1">link1</Link><br />
                <Link to="/react/2">link2</Link><br />
                <Link to="/react/3">link3</Link><br />
                {children}
            </div>
        )
    }
}