/**
 *  广告轮播
 */

let model = {};

model.parseData = function(source) {
    let ads = source.adsList;
    ads.forEach(function(ad, idx) {
        ad.imgUrl = 'http:' + (ad.pictureUrl || 0);
        ad.url = 'http:' + (ad.jump.params.url || '');
    });

    return ads;
};


export default model;
