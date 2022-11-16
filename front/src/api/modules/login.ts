import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
// import Menu from "@/assets/json/menu.json";
import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(PORT1 + `/login`, params); // 正常 post json 请求  ==>  application/json
};

// * 获取菜单列表
export const getMenuList = () => {
  return {
    "code": 200,
    "data": [
      {
        "icon": "home-filled",
        "title": "首页",
        "path": "/home/index"
      }],
      "msg": "成功"
    };
};
