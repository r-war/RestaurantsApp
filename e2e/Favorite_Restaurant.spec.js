Feature('Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });

Scenario('favorite one restaurant', ({I})=>{
    I.see('Tidak ada restaurant yang difavoritkan', '.resto_not-found');

    I.amOnPage('/');

    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());

    I.seeElement('#favoriteButtonContainer');
    I.click('#favoriteButtonContainer');

    I.amOnPage('/#/favorite')
    I.seeElement('.card-item')

});

Scenario('unfavorite one restaurant', ({I})=>{
    I.see('Tidak ada restaurant yang difavoritkan', '.resto_not-found');

    I.amOnPage('/');

    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());

    I.seeElement('#favoriteButtonContainer');
    I.click('#favoriteButtonContainer');

    I.amOnPage('/#/favorite')
    I.seeElement('.card-title a');
    I.click(locate('.card-title a').first());
    I.click('#favoriteButtonContainer');

    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant yang difavoritkan', '.resto_not-found');
});