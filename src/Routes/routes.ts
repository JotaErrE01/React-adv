import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: IRoute[]
}

export const routes: IRoute[] = [
    {
        path: '/lazyload/*',
        component: lazy( () => import(/*webpackChunkName:"LazyLayout"*/'../01-lazyload/layout/LazyLayout') ), //es una funcion
        name: 'Lazy Loading Nested',
    },
    {
        path: '/noLayLoad',
        component: NoLazy,
        name: 'No Lazy Loading'
    }
]