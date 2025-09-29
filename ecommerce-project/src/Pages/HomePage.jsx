import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import './HomePage.css'

// import { products } from '../../starting-code/data/products'; after using useState set function we dont need this array cause we're using server for that

// .toFixed(2) used to display decimal up to 2 digits 
// product.map(product) => {} takes the product array and have the ability to change it with a function or to use it inside some html 
// for data fetching map is getting used its really cool
// {`images/ratings/rating-${product.rating.stars * 10}.png`} if src is not whole provided in the array and only has details than we can use
// template strings `` and use ${} to change the insides
// axios is a cleaner way to get response from the backend less code requires and data get direcltly stored inside the response
// in the console we see two set of data that's because of strictMode runs twice to check for bugs
// useEffect let us control when some code runs 
// we used a dependency array that is used to control when useEffect run and leaved emty it will run once
// removed the localhose:3000 from axios and put it into vit.config.js for easy environment 
export function HomePage({cart}) {

    const [products, setProducts] = useState([]);
   

    useEffect(()=>{
         axios.get('/api/products')
            .then((response) => {
                 setProducts(response.data);
            });


    }, []);
   
    return (
        <>

            <title>HomePage</title>

            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image"
                                        src={product.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                        src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                                    <div className="product-rating-count link-primary">
                                        {product.rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                    ${(product.priceCents / 100).toFixed(2)} 
                                </div>

                                <div className="product-quantity-container">
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src="images/icons/checkmark.png" />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        );

                    })}
                </div>
            </div>
        </>
    );

}