import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export const ProductImage = () => {

  const { product: { img } } = useContext(ProductContext);

  return (
    <img className={styles.productImg} src={img || noImage} alt="No Img" />
  )
}