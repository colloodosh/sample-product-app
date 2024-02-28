import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="App">
            <h1>Product List</h1>
            <div className="product-container">
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.category}/>
                        <div className="card-body">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
