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
