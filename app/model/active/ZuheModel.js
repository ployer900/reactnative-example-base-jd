/**
 * 广告组合
 */

let model = {};

model.parseData = function(source) {
    let ads = source.adsList;
    let pictures = [];

    ads.forEach(function(ad, idx) {
        let pictureUrl = ad.pictureUrl || '';
        let imgUrl = 'http:' + pictureUrl;

        pictures.push(imgUrl);
    });

    return pictures;
};

export default model;
