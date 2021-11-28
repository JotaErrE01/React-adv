import { useEffect, useRef, useState } from 'react';
import { IProduct, OnChangeArgs } from '../interfaces/ProductsInterfaces';

interface useProductArgs {
    product: IProduct;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 } : useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );
    
    const increaseBy = (value: number) => {

        if(isControlled.current){
            return onChange!({ count: value, product });
        }        

        const newCount = Math.max(0, counter + value);
        setCounter( newCount );
        onChange && onChange({ product, count: newCount });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    }
}
