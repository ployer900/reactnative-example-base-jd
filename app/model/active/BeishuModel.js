/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: BeishuModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


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
