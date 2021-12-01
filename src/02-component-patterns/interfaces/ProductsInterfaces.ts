// import { ReactElement } from 'react';
import { Props as ProductButtonsPops } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';


export interface ProductCardContext {
    product: IProduct;
    counter: number;
    increaseBy: (value: number) => void;
    maxCount?: number;
}

export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductCardObj {
    ({ product, children }: ProductCardProps): JSX.Element;
    Title: (props: ProductTitleProps) => JSX.Element;
    Image: (props: ProductImageProps) => JSX.Element;
    Buttons: (props: ProductButtonsPops) => JSX.Element;
}

export interface OnChangeArgs {
    product: IProduct;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: IProduct;
    increaseBy: (value: number) => void;
    reset: () => void;
}
