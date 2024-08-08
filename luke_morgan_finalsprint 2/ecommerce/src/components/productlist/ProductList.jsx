import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api'; 
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (products.length === 0) return <div>No products found</div>;

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} width="300" height="250" />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
