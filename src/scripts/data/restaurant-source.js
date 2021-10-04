import API from '../global/api';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API.RESTAURANT_LIST);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async getRestaurant(id) {
    const response = await fetch(API.RESTAURANT_DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
}

export default RestaurantSource;
