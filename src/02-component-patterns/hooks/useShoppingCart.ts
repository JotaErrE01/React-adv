import { useState } from 'react';
import { IProduct, OnChangeArgs } from '../interfaces/ProductsInterfaces';

interface ProductInCart extends IProduct {
    count: number;
}

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ product, count }: OnChangeArgs) => {

        setShoppingCart(prevState => {

            const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...prevState,
                    [product.id]: productInCart,
                }
            }

            // Borrar el producto
            const { [product.id]: _, ...rest } = prevState;
            return rest;
        });

        // if(count === 0){
        //   const { [product.id]: deletedElement, ...rest } = shoppingCart; 
        //   setShoppingCart(rest);
        //   return;
        // }

        // setShoppingCart({ ...shoppingCart, [product.id]: { ...product, count } });
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
};