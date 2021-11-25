import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCard } from './ProductCard';
import { IProductCardObj } from '../interfaces/ProductsInterfaces';

//recordar que todo en js es un objeto a excepcion de los primitivos
//asign lee notion o la documentacion para entender si se te olvido, recuerda que las referencias se mantienen
const ProductCardObj: IProductCardObj = Object.assign( ProductCard, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCardObj;
