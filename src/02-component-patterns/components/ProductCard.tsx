import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { IProduct, ProductCardContext, OnChangeArgs } from '../interfaces/ProductsInterfaces';


export const ProductContext = createContext({ } as ProductCardContext);
const { Provider } = ProductContext;

export interface Props {
  product: IProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >

        {children}

      {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

      </div>
    </Provider>
  )
}

//estamos agregando propiedades a la interface de ProductCard, transformando el componente como si de un objeto se tratase //? OJO => RECORDAR QUE LO TODO EN JS ES UN OBJETO MENOS LOS PRIMITIVOS, POR ENDE PODEMOS AGREGAR ESTAS PROPIEDADES COMO UN OBJETO DE TODA LA VIDA Y ACCEDER A ELLAS DE IGUAL FORMA
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
