/**
 *
 * 请求类
 *
 */


import ApiHost from './api';

const toString = Object.prototype.toString;

/**
 * 请求参数默认配置
 * @type {Object}
 */
const defaults = {
    client: 'wh5',
    clientVersion: '1.0.0'
};

/**
 * 请求对象
 * @type {Object}
 */
let Request = {};

/**
 * 检测请求状态ma码
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

/**
 * 将response转换为json对象
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function parseJSON(response) {
    return response.json();
}

/**
 * 请求参数序列化
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
function serialize(params) {
    let serializedParam = '';

    if (!params || !toString.call(params) === '[object Object]') return;

    for (var props in params) {
        if (params.hasOwnProperty(props)) {
            serializedParam += props + '=' + params[props] + '&';
        }
    }
    return serializedParam.slice(0, serializedParam.length - 1);
}

/**
 * GET
 * @param  {[type]} url  [description]
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
Request.getJSON = function(url, params, opts) {
    url = url + '?' + serialize(Object.assign(defaults, params));
    let options = Object.assign({
        method: 'GET',
        credentials: 'include',
	    header: {
            'Accept': 'application/json',
    	    'Content-Type': 'application/json'
        }
    }, opts);

    console.log(url);
    
    return fetch(url, options).then(checkStatus).then(parseJSON);
};


export default Request;
