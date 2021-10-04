import RestaurantSource from '../../data/restaurant-source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import UrlParser from '../../utils/url-parser';
import { createRestaurantDetailTemplate } from '../template/template-creator';

const Detail = {
  async render() {
    return `
            <div class="container" id="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonInitiator.init({
      FavoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
