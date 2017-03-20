/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   07-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: NormalProductModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 普通商品
 */

let model = {};

model.parseData = function(source) {
    let styleId = source.styleId || 3;
    let groupList = source.waresList[0].groupInfoList;

    groupList.forEach(function(item, idx) {
        item.imgUrl = 'http:' + item.image;
        item.price = item.pPrice;
        item.oriPrice = item.pcpPrice;
    });

    return {
        styleId,
        groupList
    };
};


export default model;
