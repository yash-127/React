import { Header } from '../components/header';
import { products } from '../../starting-code/data/products';
import './HomePage.css'
// .toFixed(2) used to display decimal up to 2 digits 
// product.map(product) => {} takes the product array and have the ability to change it with a function or to use it inside some html 
// for data fetching map is getting used its really cool
// {`images/ratings/rating-${product.rating.stars * 10}.png`} if src is not whole provided in the array and only has details than we can use
// template strings `` and use ${} to change the insides
export function HomePage() {
    return (
        <>

            <title>HomePage</title>

            <Header></Header>

            <div class="home-page">
                <div class="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} class="product-container">
                                <div class="product-image-container">
                                    <img class="product-image"
                                        src={product.image} />
                                </div>

                                <div class="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>

                                <div class="product-rating-container">
                                    <img class="product-rating-stars"
                                        src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                                    <div class="product-rating-count link-primary">
                                        {product.rating.count}
                                    </div>
                                </div>

                                <div class="product-price">
                                    ${(product.priceCents / 100).toFixed(2)} 
                                </div>

                                <div class="product-quantity-container">
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

                                <div class="product-spacer"></div>

                                <div class="added-to-cart">
                                    <img src="images/icons/checkmark.png" />
                                    Added
                                </div>

                                <button class="add-to-cart-button button-primary">
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