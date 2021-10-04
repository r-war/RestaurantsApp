import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-button-initiator"

const createFavoriteButtonPresenter = async(restaurant) =>{
    await FavoriteButtonInitiator.init({
        FavoriteButtonContainer : document.querySelector('#favoriteButtonContainer'),
        restaurant
    })
}

export { createFavoriteButtonPresenter};