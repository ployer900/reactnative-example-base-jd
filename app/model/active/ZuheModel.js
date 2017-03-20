/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: ZuheModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


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
