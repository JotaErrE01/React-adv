import ProductCard, { ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { ProductButtons } from '../components/ProductButtons';
import { IProduct } from '../interfaces/ProductsInterfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: IProduct[] = [product1, product2];

export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();  

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >

        {
          products.map(product => (
            <ProductCard
              product={product}
              className="bg-dark text-white"
              key={product.id}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
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
            </ProductCard>
          ))
        }
      </div>

      <div className="shoping-cart">
        {
          Object.keys(shoppingCart).map(key => (
            <ProductCard
              product={shoppingCart[key]}
              className="bg-dark text-white"
              style={{
                width: '100px',
              }}
              key={shoppingCart[key].id}
              onChange={onProductCountChange}
              value={shoppingCart[key].count}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: '5px 3px 3px #4e4e4e33'
                }}
              />
              <ProductTitle
                title={shoppingCart[key].title}
                className='text-white'
                style={{
                  fontWeight: 'bold',
                }}
              />
              <ProductButtons
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
