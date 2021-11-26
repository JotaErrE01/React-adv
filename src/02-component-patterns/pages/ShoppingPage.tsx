import ProductCard from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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
        <ProductCard 
          product={product} 
          className="bg-dark text-white"
        >
          <ProductCard.Image
            className="custom-image"
            style={{
              boxShadow: '5px 3px 3px #4e4e4e33'
            }}
          />
          <ProductCard.Title 
            title='Hello World' 
            className='text-white'
            style={{
              fontWeight: 'bold',
            }}
          />
          <ProductCard.Buttons 
            className='custom-buttons'
            style={{
              display: 'flex',
              justifyContent: 'end',
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}
