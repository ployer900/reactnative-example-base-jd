/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   12-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveHomeCell.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * active home cell
 */

import React, {Component} from 'react';

//import babel model
import BabelModViews from './index';

export default class ActiveHomeCell extends Component {
    constructor(props) {
        super(props);
    }

    //parse data
    renderFloorView() {
        let floorView;
        let self = this;
        let floorData = this.props.rowData;

        //map data to view
        let template = floorData.template;
        switch (template) {
            case 'guanggao_tonglan':
                floorView = <BabelModViews.TonglanView data={floorData}></BabelModViews.TonglanView>;
                break;
            case 'shangpin_putong':
                floorView = <BabelModViews.NormalProductView productGroup={floorData}></BabelModViews.NormalProductView>;
                break;
            case 'jiange':
                floorView = <BabelModViews.JiangeView data={floorData}></BabelModViews.JiangeView>;
                break;
            case 'loucengbiaoti':
                floorView = <BabelModViews.LoucengbiaotiView data={floorData}></BabelModViews.LoucengbiaotiView>;
                break;
            case 'guanggao_zuhe':
                floorView = <BabelModViews.ZuheView data={floorData}></BabelModViews.ZuheView>;
                break;
            case 'guanggao_beishu':
                floorView = <BabelModViews.BeishuView data={floorData}></BabelModViews.BeishuView>;
                break;
            case 'quickentry':
                //<BabelModViews.QuickEntryView data={floorData} quickEntryClicked={self.goToPage.bind(self)}></BabelModViews.QuickEntryView>
                floorView = <BabelModViews.QuickEntryView data={floorData} quickEntryClicked={this.props.goToPage}></BabelModViews.QuickEntryView>;
                break;
            case 'guanggao_lunbo':
                // <BabelModViews.LunboView data={floorData} bannerClicked={self.goToPage.bind(self)}></BabelModViews.LunboView>
                floorView = <BabelModViews.LunboView data={floorData} bannerClicked={this.props.goToPage}></BabelModViews.LunboView>;
                break;
            default:
                return (null);
        }
        return floorView;
    }

    render() {
        return this.renderFloorView();
    }
}
