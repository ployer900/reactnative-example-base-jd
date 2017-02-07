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
