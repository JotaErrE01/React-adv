import { useState } from 'react';
import { IProduct, OnChangeArgs } from '../interfaces/ProductsInterfaces';

interface ProductInCart extends IProduct {
    count: number;
}

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ product, count }: OnChangeArgs) => {
        if(count === 0){
          const { [product.id]: deletedElement, ...rest } = shoppingCart; 
          setShoppingCart(rest);
          return;
        }

        setShoppingCart({ ...shoppingCart, [product.id]: { ...product, count } });
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
};