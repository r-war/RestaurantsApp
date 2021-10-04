import FavoriteRestaurantDb from "../src/scripts/data/favorite-restaurant-idb";
import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import * as testFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
}

describe('unfavoriting a movie', () => {
    beforeEach(async()=>{
        addFavoriteButtonContainer();
        await FavoriteRestaurantDb.putRestaurant({id : 1});
    })

    afterEach(async() =>{
        await FavoriteRestaurantDb.deleteRestaurant(1);
    })

    it('should display unfavorite widget when the restaurant has been liked', async () =>{
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
    })

    it('should not display favorite widget when the restaurant has been favorited', async()=>{
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        expect(document.querySelector('[aria-label="favorite this restaurant"')).toBeFalsy();
    })

    it('should be able remove favorited restaurant from the list' , async () => {
         await testFactories.createFavoriteButtonPresenter({ id : 1});

        document.querySelector('[aria-label="unfavorite this restaurant"').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
    })

    it('should not throw error if the favorited restaurant is not in the list', async () => {
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        await FavoriteRestaurantDb.deleteRestaurant(1);

        document.querySelector('[aria-label="unfavorite this restaurant"').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([])
    })
})