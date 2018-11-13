import React, {Component} from 'react';
import axios from 'axios';


export default  class NetUtils extends React.Component {




    /*
         *  get请求
         *  url:请求地址
         *  data:参数
         *  callback:回调函数
         * */
    static get(url, params, callback) {

        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
            console.log(paramsArray);
            console.log(url);
        }

        axios({
            method:'get',
            url : url,
        }).then (
            function (response) {
                console.log(response.data);
                callback(response.data)
            }
        );


    }

    /*
         *  post请求
         *  url:请求地址
         *  data:参数
         *  callback:回调函数
         * */
    static post(url, params, headers, callback) {
        //打印参数
        console.log(url);
        console.log(params);

        //fetch请求
        fetch(url, {
            method: 'POST',
            headers: {
                'token': headers
            },
            body: JSON.stringify(params)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                callback(responseJSON)
            }).done();
    }

    /*
     *  post请求
     *  url:请求地址
     *  callback:回调函数
     * */
    static postJson(url, params, callback) {


        //打印参数
        console.log(url);
        console.log(params);
        //fetch请求
        axios({
            url:url,
            method: 'post',
            data: params
        })
            .then(function (response) {
                console.log(response.data);
                callback(response.data)
            });
    }
}

module.exports = NetUtils;