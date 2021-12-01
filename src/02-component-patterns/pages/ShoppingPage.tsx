import ProductCard, { ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { ProductButtons } from '../components/ProductButtons';
import { products } from '../data/products';


const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '5px 3px 3px #4e4e4e33'
                }}
              />
              <ProductTitle
                title={product.title}
                className='text-white'
                style={{
                  fontWeight: 'bold',
                }}
              />
              <ProductButtons
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)} >-2</button>
              {
                isMaxCountReached ||
                <button onClick={() => increaseBy(2)} >+2</button>
              }
              <span>{count}</span>

            </>
          )
        }
      </ProductCard>
    </div>
  )
}
