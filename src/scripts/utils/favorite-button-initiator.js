import FavoriteRestaurantDb from '../data/favorite-restaurant-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/template/template-creator';

const FavoriteButtonInitiator = {
  async init({ FavoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = FavoriteButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._rendeFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurant(id);
    return !!restaurant;
  },

  async _rendeFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.deleteRestaurant(this._restaurant.id);

      this._renderButton();
    });
  },

  async _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDb.putRestaurant(this._restaurant);

      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
