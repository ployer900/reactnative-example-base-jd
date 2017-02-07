/**
 * 广告倍数
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

     //限制广告图片个数
     if (pictures.length >= 3) pictures = pictures.slice(0, 3);

     return pictures;
 };

 export default model;
