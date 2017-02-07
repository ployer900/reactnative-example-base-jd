/**
 * 广告通栏模型
 */

let model = {};

/**
 * 解析数据
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
model.parseData = function (source) {
    let height = (source.height / 3) || 20;
    let ads = source.adsList || [];
    let imgUrl = '';

    if (ads.length < 1) imgUrl = '';
    else imgUrl = ads[0].pictureUrl || '';

    imgUrl = 'http:' + imgUrl;

    //返回数据
    return {
        imgUrl,
        height
    };
};

export default model;
