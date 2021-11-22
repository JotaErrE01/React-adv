import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element;

interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | (JSXComponent);
    name: string;
}

const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
    {
        to: '/lazyload',
        path: 'lazyload/*',
        Component: Lazy1,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]