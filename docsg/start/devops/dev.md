# 本地运行

后端技术栈：Maven + Springboot + Mybatis-plus + SpringSecurity + Mysql + Redis

前端技术栈：Vue3 + Axios + Webpack + Echarts + Three.js + TDesign

## 开发环境

| 软件名称  | 开发版本号 | 推荐版本号 |
|-------|-------|------|
| node  | 18.0  | 18.0 |
| JDK   | 17    | 1.8+ |
| Maven | 3.9.2 |  |

## 运行环境
本软件采用B/S架构，需依赖浏览器运行，建议使用chrome112.x以上版本，不支持IE浏览器！项目使用webpack进行包管理，打包使用npm run build，打包完后将打包好的文件放到服务器中间件如nginx\tomcat，使用浏览器打开配置的路径即可访问。
## 运行
1. 拉取前后端代码，master分支为稳定分支（建议使用，更新频率 > 1个月），dev为开发分支（更新频率较高）。
2. 启动后端（建议使用IDEA）：运行 src/main/java/com/cola/colaboot/ColaBootApplication.java中main方法.
3. 启动前端：
```shell
yarn install
```
```shell
yarn run serve
```
