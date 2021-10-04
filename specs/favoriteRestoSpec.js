import FavoriteRestaurantDb from "../src/scripts/data/favorite-restaurant-idb";
import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator"; 
import * as testFactories from './helpers/testFactories';

const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
}

describe('Liking a Resto', () => {

    beforeEach(()=>{
        addFavoriteButtonContainer();
    })
    
    it('should show the favorite button when the resto has not been favorited before', async () =>{
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        expect(document.querySelector('[aria-label="favorite this restaurant"')).toBeTruthy();
    });

    it('should show the unfavorite button when the resto has not been favorited before', async () =>{
        await FavoriteButtonInitiator.init({
            FavoriteButtonContainer : document.querySelector('#favoriteButtonContainer'),
            restaurant : {
                id : 1,
            }
        });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"')).toBeFalsy();
    });

    it('should be able to favorite the restaurant', async () => {
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantDb.getRestaurant(1);
        
        expect(restaurant).toEqual({id : 1})

        FavoriteRestaurantDb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already favorited', async () => {
        await testFactories.createFavoriteButtonPresenter({ id : 1});

        await FavoriteRestaurantDb.putRestaurant({id : 1});

        document.querySelector("#favoriteButton").dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([{ id : 1}]);

        FavoriteRestaurantDb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () =>{
        await testFactories.createFavoriteButtonPresenter({});

        document.querySelector("#favoriteButton").dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantDb.getAllRestaurants()).toEqual([]);
    })
})