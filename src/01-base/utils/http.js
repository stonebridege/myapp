/**
 * OAuth2.0认证自适应刷新
 * @description: axios封装
 */


import axios from "axios";
import qs from "qs";
import api from "@/api";
import {Notification} from "element-ui";
import Cookies from "js-cookie";
import utils from "@/libs/utils";
import router from "@/router";
import store from "../vuex/store";

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded; charset=UTF-8";
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = true;

/*是否有请求正在刷新token*/
window.isRefreshing = false;
/*被挂起的请求数组*/
let refreshSubscribers = [];

/*获取刷新token请求的token*/
function getRefreshToken() {
    return Cookies.get("refresh_token");
}

/*获取用户token请求的token*/
function getAccessToken() {
    return Cookies.get("access_token");
}

/*push所有请求到数组中*/
function subscribeTokenRefresh(cb) {
    refreshSubscribers.push(cb);
}

function clearAuthInfo() {
    // 调用登出方法，清除Cookies登录信息
    store.dispatch("Logout").finally(() => {
        router.push({path: "/login"});
    });
}

/*刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据）*/
function onRefreshed(accessToken) {
    refreshSubscribers.map(cb => cb(accessToken));
}

axios.interceptors.request.use(
    config => {
        // loading
        let isLogin = Cookies.get("is_login");
        // 根据请求头判断是否是登录请求，登录请求忽略Authorization信息处理
        let isBasic = (config.headers || {}).isBasic === true;
        if (isLogin) {
            if (isBasic) {
                return config;
            } else {
                // 判断Token生命周期是否有效，无效则进入刷新Token流程
                if (utils.isTokenExpired() && getRefreshToken() !== "undefined") {
                    if (!window.isRefreshing) {
                        window.isRefreshing = true;
                        // 刷新token接口
                        api.login
                            .tokenRefresh(getRefreshToken())
                            .then(response => {
                                if (response.status === 200) {
                                    response = response.data;
                                    window.isRefreshing = false;
                                    if (!isBasic) {
                                        config.headers.Authorization =
                                            "Bearer " + response.access_token;
                                    }
                                    let rememberMe = eval(Cookies.get("remember_me"));
                                    store.commit("LoginSuccess", {
                                        user: response,
                                        remember: rememberMe
                                    });
                                    /*执行数组里的函数,重新发起被挂起的请求*/
                                    onRefreshed(response.access_token);
                                    /*执行onRefreshed函数后清空数组中保存的请求*/
                                    refreshSubscribers = [];
                                } else {
                                    return Promise.reject(new Error("Refresh Error!"));
                                }
                            })
                            .catch(() => {
                                // 登录Token续约失败直接跳转至Login并清除Cookies登录信息
                                clearAuthInfo();
                            });
                        return new Promise(resolve => {
                            subscribeTokenRefresh(accessToken => {
                                config.headers.Authorization = "Bearer " + accessToken;
                                resolve(config);
                            });
                        });
                    } else {
                        return new Promise(resolve => {
                            subscribeTokenRefresh(accessToken => {
                                config.headers.Authorization = "Bearer " + accessToken;
                                resolve(config);
                            });
                        });
                    }
                } else {
                    let accessToken = getAccessToken();
                    config.headers.Authorization = "Bearer " + accessToken;
                    return config;
                }
            }
        } else {
            return config;
        }
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            Notification.warning({
                offset: 100,
                title: "令牌过期，请重新登录"
            });
            clearAuthInfo();
            return Promise.reject(new Error(error.response.data.message));
        } else if (error.response.status === 400) {
            return Promise.reject(new Error(error.response.data.message));
        }
        return Promise.resolve(error.response);
    }
);

/**
 * 通用请求异常处理
 * 负责解析服务端返回的常见异常信息并Notification通知，无法处理则返回Promise.reject
 * @param response
 * @returns {Promise<never>|*}
 */
function checkStatus(response) {
    if (response && (response.status === 200 || response.status === 304)) {
        return response.data;
    } else if (response && response.status === 404) {
        Notification.error({
            offset: 100,
            title: "服务未找到"
        });
        return Promise.reject(new Error("服务未找到"));
    } else if (response && response.status === 403) {
        Notification.warning({
            offset: 100,
            title: "当前没有权限访问数据接口"
        });
        return Promise.reject(new Error("服务未找到"));
    } else if (response && response.status === 500) {
        let message = response.data.message;
        return Promise.reject(new Error(message ? message : "服务异常"));
    } else {
        Notification.error({
            offset: 100,
            title: "未知服务"
        });
        return Promise.reject(new Error("未知服务"));
    }
}

export default {
    Post(url, params) {
        return axios.post(url, qs.stringify(params)).then(response => {
            return checkStatus(response);
        });
    },
    PostJSON(url, params) {
        return axios
            .post(url, JSON.stringify(params), {
                headers: {"Content-Type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                return checkStatus(response);
            });
    },
    Put(url, params) {
        return axios.put(url, qs.stringify(params)).then(response => {
            return checkStatus(response);
        });
    },
    PutJSON(url, params) {
        return axios
            .put(url, JSON.stringify(params), {
                headers: {"Content-Type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                return checkStatus(response);
            });
    },
    Get(url, params) {
        return axios.get(url, {params: params}).then(response => {
            return checkStatus(response);
        });
    },
    Delete(url, params) {
        return axios.delete(url, {params: params}).then(response => {
            return checkStatus(response);
        });
    },
    DownloadForGet(url, params) {
        return axios
            .get(url, {responseType: "blob", params: params})
            .then(response => {
                return checkStatus(response);
            });
    },
    DownloadForPost(url, params) {
        return axios
            .post(url, qs.stringify(params), {responseType: "blob"})
            .then(response => {
                return checkStatus(response);
            });
    },
    Upload(url, params) {
        return axios
            .post(url, params, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                return checkStatus(response);
            });
    },
    Axios: axios
};
