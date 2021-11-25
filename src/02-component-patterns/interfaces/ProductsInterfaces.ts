import { ReactElement } from 'react';


export interface ProductCardProps {
    product: IProduct;
    children?: ReactElement | ReactElement[];
}

export interface ProductCardContext {
    product: IProduct;
    counter: number;
    increaseBy: (value: number) => void;
}

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductCardObj {
    ({ product, children }: ProductCardProps) : JSX.Element;
    Title: () => JSX.Element;
    Image: () => JSX.Element;
    Buttons: () => JSX.Element;
}
