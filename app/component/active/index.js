/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   14-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: index.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 * 视图组件集合
 *
 */

//广告通栏
import TonglanView from './TonglanView';

//普通商品
import NormalProductView from './NormalProductView';

//间隔
import JiangeView from './JiangeView';

//楼层标题
import LoucengbiaotiView from './LoucengbiaotiView';

//广告组合
import ZuheView from './ZuheView';

//广告倍数
import BeishuView from './BeishuView';

//快速导航
import QuickEntryView from './QuickEntryView';

//广告轮播
import LunboView from './LunboView';

//视图容器
let BabelModViews = {
    TonglanView,
    NormalProductView,
    JiangeView,
    LoucengbiaotiView,
    ZuheView,
    BeishuView,
    QuickEntryView,
    LunboView
};


//暴露组件容器
//
export default BabelModViews;

/**
 * 操作入口
 * @param  {[type]} type [description]
 * @return {[type]}      [description]
 */
// export default function(type) {
//     let t = type.indexOf('_') != -1;
//
//     //如果模板名称有'_'，取后半部分
//     if (t) type = type.split('_')[1];
//
//     //首字母大写
//     type = type.replace(type.charAt(0), type.charAt(0).toUpperCase());
//
//     //末尾添加View，以符合命名规范
//     type += 'View';
//
//     //返回相应view
//     if (type in babelModViews) return babelModViews[type];
//     else return;
// }
