/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: LunboModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


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
