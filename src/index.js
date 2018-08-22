import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';

declareChildApplication('layout', () => import('./layout/index.js'), () => true);

start();

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
