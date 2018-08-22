import React, { PureComponent, Component } from 'react';

export default class extends (PureComponent || Component) {
    componentDidMount() {
        console.log(3)
    }
    render() {
        return (
            <div>xxxxx</div>
        )
    }
}