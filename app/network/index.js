/**
 *
 * 请求类封装
 *
 */

import Request from './fetch';
import api from './api';

/**
 * 秒杀数据
 * @param  {[type]} gid    [description]
 * @param  {[type]} wareId [description]
 * @return {[type]}        [description]
 */
export function getSecskillProductGroup(gid, wareId) {
    let params = {
        gid,
        wareId
    };

    return  Request.getJSON(api.secskillHost, params);
}

/**
 * 发现达人（作者发布数据）
 * @param  {[type]} athID    [description]
 * @param  {[type]} page     [description]
 * @param  {[type]} pagesize [description]
 * @param  {[type]} type     [description]
 * @param  {[type]} position [description]
 * @return {[type]}          [description]
 */
export function getAuthorReleaseGroup(athID, page, pgsize, type, position) {
    let params = {
        functionId: 'discAuthorRelaseList',
        body: JSON.stringify({
            authorId: athID,
            page: page,
            pagesize: pgsize,
            type: type,
            position: position
        })
    };

    return Request.getJSON(api.finderHost, params);
}

/**
 * 发现清单数据
 * @param  {[type]} offSet [description]
 * @return {[type]}        [description]
 */
export function getDiscoverInvetGroup(offSet) {
    let params = {
        functionId: 'jdDiscoveryInventoryList',
        body: JSON.stringify({
            offSet
        })
    };

    return Request.getJSON(api.finderHost, params);
}

/**
 * 通天塔首屏数据
 * @param  {[type]} activityId [description]
 * @return {[type]}            [description]
 */
export function geth5BabelGenericChannel(activityId) {
    let params = {
        functionid: 'h5BabelGenericChannel',
        body: JSON.stringify({
            activityId,
            pageNum: '-1'
        })
    };

    return Request.getJSON(api.h5ApiHost, params);
}

export function getBabelProductPaged(secondTabId, pageNum, type = 0) {
    let params = {
        functionId: 'getBabelProductPaged',
        body: JSON.stringify({
            secondTabId,
            pageNum,
            type
        })
    };

    return  Request.getJSON(api.h5ApiHost, params);
}
