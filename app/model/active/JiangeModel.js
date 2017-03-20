/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   07-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: JiangeModel.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 间隔
 */


let model = {};

model.parseData = function(source) {
    source.height = source.height / 3;
    return source;
};


export default model;
