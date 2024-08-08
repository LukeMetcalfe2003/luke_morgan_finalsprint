import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../../api';
import { useShoppingCart } from '../../components/shoppingcartcontext/ShoppingCartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useShoppingCart();
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = getProductById(parseInt(id));
        setProduct(product);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setConfirmationMessage(`${product.name} has been added to your cart.`);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <p>{product.description}</p>
        <ul className="product-details">
          {product.dimensions && <li><strong>Dimensions:</strong> {product.dimensions}</li>}
          {product.weightCapacity && <li><strong>Weight Capacity:</strong> {product.weightCapacity}</li>}
          {product.material && <li><strong>Material:</strong> {product.material}</li>}
          {product.assemblyRequired !== undefined && (
            <li><strong>Assembly Required:</strong> {product.assemblyRequired ? 'Yes' : 'No'}</li>
          )}
          {product.features && (
            <li><strong>Features:</strong>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </li>
          )}
          {product.warranty && <li><strong>Warranty:</strong> {product.warranty}</li>}
        </ul>
        {confirmationMessage && (
          <div className="confirmation-message">{confirmationMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
