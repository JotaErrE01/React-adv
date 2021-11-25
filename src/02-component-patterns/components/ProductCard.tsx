import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardContext, ProductCardProps } from '../interfaces/ProductsInterfaces';


export const ProductContext = createContext({ } as ProductCardContext);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={styles.productCard}
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
