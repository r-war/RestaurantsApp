import FavoriteRestaurantDb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../template/template-creator';

// eslint-disable-next-line linebreak-style
const Favorite = {
  async render() {
    return `
            <div class="container">
                <h2>Favorite Restaurants</h2>
                <div id="restaurants" class="restaurants"></div>
            </div>
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');
    const favoriteRestaurant = await FavoriteRestaurantDb.getAllRestaurants();
    if (favoriteRestaurant.length > 0) {
      favoriteRestaurant.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = '<h3 class="message resto_not-found">Tidak ada restaurant yang difavoritkan</h3>';
    }
  },
};

export default Favorite;
