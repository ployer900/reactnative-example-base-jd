/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: QuickEntryModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


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
