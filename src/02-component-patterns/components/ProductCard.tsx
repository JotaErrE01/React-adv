import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { IProduct, ProductCardContext, OnChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/ProductsInterfaces';


export const ProductContext = createContext({ } as ProductCardContext);
const { Provider } = ProductContext;

export interface Props {
  product: IProduct;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCartHandlers ) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >

        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }

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
