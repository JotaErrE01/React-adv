import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;

interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | (JSXComponent);
    name: string;
}

export const routes: IRoute[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy(() => import(/*webpackChunkName: "LazyLoad1"*/'../01-lazyload/pages/LazyPage1')),
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy(() => import(/*webpackChunkName: "LazyLoad2"*/'../01-lazyload/pages/LazyPage2')),
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy(() => import(/*webpackChunkName: "LazyLoad3"*/'../01-lazyload/pages/LazyPage3')),
        name: 'Lazy-3'
    },
]