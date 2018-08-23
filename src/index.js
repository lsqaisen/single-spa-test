import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';

declareChildApplication('layout', () => import('./layout/index.js'), () => true);
declareChildApplication('react', () => import('./react/index.js'), pathPrefix('/react'));
// declareChildApplication('angular', () => import('./angular/index.js'), pathPrefix('/angular'));

start();

function pathPrefix(prefix) {
    return function (location) {
        console.log(location)
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}
