import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './app';

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => document.getElementById('layout')
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];
