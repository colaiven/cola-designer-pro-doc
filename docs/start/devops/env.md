# 环境搭建
## 服务器配置

最小配置

| 资源名称  | 配置                                        |
|-------|-------------------------------------------|
| 应用服务器 | 1核2G，系统盘20G，数据盘20G，CentOS 7.6/ubuntu 1804 |

 推荐配置

| 资源名称  | 配置                                         |
|-------|--------------------------------------------|
| 应用服务器 | 4核8G，系统盘40G，数据盘100G，CentOS 7.6/ubuntu 1804 |
## 中间件

| 软件名称  | 开发版本号  | 推荐版本号 |
|-------|--------|-------|
| Mysql | 8.0    | 5.7+  |
| Redis | 5.0    |       |
| Nginx | 1.22.1 |       |
| JDK   | 11.0   | 1.8+  |

## 运行环境
本软件使用B/S架构，依靠浏览器运行，推荐使用chrome 112.x +版本，不支持IE浏览器.
## 部署

本软件使用前后端分离技术，静态资源与接口可由Nginx代理，下面介绍使用nginx部署的具体步骤：

1. 下载安装包到服务器
2. 修改application.yml配置文件
3. 修改nginx配置
4. 启动jar
5. 访问