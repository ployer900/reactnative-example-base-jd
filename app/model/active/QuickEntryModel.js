/**
 * 快速导航
 */


let model = {};

model.parseData = function(source) {
  let ads = source.adsList;

  ads.forEach(function(ad, idx) {
      let pictureUrl = ad.pictureUrl || '';

      //入口图片
      ad.imgUrl = 'http:' + pictureUrl;

      //跳转链接
      ad.url = 'http:' + ad.jump.params.url;
  });

  return ads;
};

export default model;
