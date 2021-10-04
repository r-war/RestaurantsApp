import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
            <div class="hero-image">
              <picture>
                <source media="(max-width : 600px)" srcset="/images/heros/hero-image_2-small.jpg" />
                <source srcset="/images/heros/hero-image_2.webp" type="image/webp" />
                <source srcset="/images/heros/hero-image_2.jpg" type="image/jpeg" />
                <img src="/images/heros/hero-image_2.jpg" alt="hero-image" class="jumbotron-image">
              </picture>
                <div class="text">Easy Way find Resto Around you.</div>
            </div>
            <div class="container">
                <h2 class="subtitle">Explore Restaurant</h2>
                <div id="restaurants" class="restaurants container"></div>
            </div>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const restaurants = await RestaurantSource.getRestaurants();
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
