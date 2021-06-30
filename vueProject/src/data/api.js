/*
 * @Author: mhy
 * @Date: 2021-06-30
 * @LastEditors: mhy
 */
export default {
    //get请求
    get(url, param, isIntercept = true) {
        let params = {
            ...param
        };
        return new Promise((resolve, reject) => {
            window.axios({
                method: 'get',
                url: url,
                headers: {'Auth-User-Token': sessionStorage.getItem("token") || '' },
                params: params,
                isIntercept: isIntercept
            }).then(res => {
                resolve(res.data)
            }).catch(e => {
                reject(e)
            });
        });
    },
    //----------------------------------------------post请求
    post(url, param, isIntercept = true) {
        let params = {
            ...param
        };
        return new Promise((resolve, reject) => {
            window.axios({
                method: 'post',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Auth-User-Token': sessionStorage.getItem("token") || ''
                },
                data: param,
                url: url,
                isIntercept: isIntercept
            }).then(res => {
                resolve(res.data)
            }).catch(e => {
                reject(e)
            });
        });
    },
    //formdata -----------------------------------post请求
    formPost(url, params, isIntercept = true) {
        return new Promise((resolve, reject) => {
            //表单提交判断是null转为"" 防止回显变成"null"
            for (const key in params) {
                params[key] = params[key] === null ? "" : params[key];
            }
            window.axios({
                method: 'post',
                url: url,
                data: params,
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret;
                }],
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'Auth-User-Token': sessionStorage.getItem("token")||'' },
                isIntercept: isIntercept
            }).then(res => {
                resolve(res.data);
            }).catch(e => {
                reject(e)
            });
        });
    },
    //文件上传----------------------------请求
    formDataPost(url, params) {
        return new Promise((resolve, reject) => {
            window.axios({
                method: 'post',
                url: url,
                data: params,
                // transformRequest: [function (data) {
                //     let ret = ''
                //     for (let it in data) {
                //       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                //     }
                //     return ret;
                // }],
                headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' }
                // headers: { 'Content-Type': 'multipart/form-data;charset=utf-8', 'Auth-User-Token': sessionStorage.getItem("token")||'' }
            }).then(res => {
                resolve(res.data);
            }).catch(e => {
                reject(e)
            });
        });
    },
    commonPost(url, param, isIntercept = true) {
        return new Promise((resolve, reject) => {
          window.axios({
            method: 'get',
            url,
            params: param,
            isIntercept: isIntercept
          }).then(res => {
            resolve(res.data)
          }).catch(err => {
            reject(err)
          });
        })
      },
      //post请求
      commonGet(url, param,  isIntercept = true) {
        return new Promise((resolve, reject) => {
          window.axios({
            method: 'post',
            url,
            isIntercept: isIntercept,
            data: param
          }).then(res => {
            resolve(res.data)
          }).catch(err => {
            reject(err)
          });
        })
      }


}