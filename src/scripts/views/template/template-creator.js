import CONFIG from '../../global/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantListTemplate = (restaurant) => `
        <div class="card-item">
            <div class="card-image">
                <img class="lazyload"
                 data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
                <div class="location">${restaurant.city}</div>
            </div>
            <div class="card-content">
            <span class="rating">Rating : ${restaurant.rating}</span>
            <p class="card-title">
                <a href="${`/#/restaurant/${restaurant.id}`}">
                    ${restaurant.name}
                </a>
            </p>
            <p class="card-description" >${restaurant.description}</p>
            </div>
        </div>
    `;

const createRestaurantDetailTemplate = (restaurant) => {
  const template = `
        <div class="resto-image__wrapper">
            <img class="resto-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
            <div id="favoriteButtonContainer" class="favorite"></div> 
        </div>
        <div class="resto__wrapper">
            <h2 class="resto__title">${restaurant.name}</h2>
            <p class="location">${restaurant.city}</p>
            <p class="rating"><i class="fa fa-star"></i>${restaurant.rating}</p>
            <hr/>
            <p>Categories : ${restaurant.categories.map(({ name }) => ` ${name}`)} </p>
            <p>Adress : ${restaurant.address}</p>
            <p class="description">${restaurant.description}</p>
            <hr />
            <h3>Menu</h3>
            <p>Foods : ${restaurant.menus.foods.map(({ name }) => ` ${name}`)}</p>
            <p>Drinks : ${restaurant.menus.drinks.map(({ name }) => ` ${name}`)}</p>
            <hr />
            <h3>Review</h3>
            <div class="reviews">
                ${restaurant.customerReviews.map(({ name, review, date }) => `<div class="reviews__customer"><p>"${review}"</p><blockquote>${name}, ${date}</blockquote></div>`).join('\n')}
            </div>
        </div>
    `;
  return template;
};

const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
        <i class="fa fa-bookmark-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
        <i class="fa fa-bookmark" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
