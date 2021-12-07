# 快速开始
本节将介绍如何在开发环境中项目中使用cola-designer。



## 开发环境

|         | 开发版本 | 推荐版本 |
| ------- | -------- | -------- |
| mysql   | 8.0      | 5.7 +    |
| jdk     | 11       | 1.8 +    |
| node    | 16.13.1  | 12 +     |
| npm     | 8.2.0    | 6 +      |
| vue-cli | 4.5.15   | 2 +      |



## 项目结构
使用技术：SpringBoot + SpringSecurity + Mysql + MyBatis-Plus + Redis + Vue + ElementUI


前端目录：
```text
├── dist                                   打包目录
├── public
├── src
    ├── api                              后端接口
    ├── assets                           静态资源
    ├── components                       组件目录
        ├── gallery.vue                      图库组件
        ├── option.js                        组件可配置项配置
        ├── registerCpt.js                   自定义组件配置
        ├── registerOption.js                自定义组件属性配置
    ├── router
    ├── utils
    ├── views
        ├── designer                            设计器
        ├── manage                              管理端
        ├── preview                             预览/访问页
├── env.js                           环境配置
├── LICENSE
├── README.md
```

后端目录：
```text
├── sql             数据库脚本
├── src
├── pom.xml                                
```

## 运行前端

1. 拉取项目
2. 切换到前端项目目录执行：yarn install
3. install完成后执行：yarn run dev

## 注意事项

* 运行后端项目前需自行创建数据库并运行数据库脚本，同时修改application.yml相关配置
* 后端项目默认端口：6882
* 前端配置详见 vue.config.js

