/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: LoucengbiaotiModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 楼层标题模型
 */

let model = {};

model.parseData = function(source) {
    let picture = source.floorHead.pictureUrl || '';
    picture = 'http:' + picture;

    return picture;
};


export default model;
