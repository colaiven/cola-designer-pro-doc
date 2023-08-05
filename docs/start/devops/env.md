# 部署
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

| 软件名称  | 开发版本号 | 推荐版本号 |
|-------|------|-------|
| Mysql | 8.0  | 5.7+  |
| Redis | 5.0  |       |
| Nginx | 1.22.1 |     |
| JDK   | 17   | 1.8+  |

## 运行环境
本软件采用B/S架构，需依赖浏览器运行，建议使用chrome112.x以上版本，不支持IE浏览器！项目使用webpack进行包管理，打包使用npm run build，打包完后将打包好的文件放到服务器中间件如nginx\tomcat，使用浏览器打开配置的路径即可访问。
## 打包
商业版提供完整jar包和前端dist包，用户可在协作平台-->项目-->选择进入项目-->文档管理-->文件网盘 选择版本号自行下载

购买源码用户若需自行打包需注意切换分支，master分支为稳定分支（建议使用，更新频率 > 1个月），dev为开发分支（更新频率较高）。

打包方式：切换到代码目录执行一下命令：

前端打包：
```shell
npm run build
```
后端打包：
```shell
mvn clean pakage
```
## 部署

本软件使用前后端分离技术，静态资源与接口可由Nginx代理，下面介绍使用Nginx部署的具体步骤：
1. 安装中间件并配置环境，导入数据库
2. 下载安装包到服务器任意目录，将application-prod.yml放置与jar包同级目录
3. 修改application-prod.yml配置文件，yml配置项如下：
```yaml
spring:
  application:
    name: cola-designer-pro
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/cloud_view
    username: root
    password: '123456'
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
  redis:
    host: 127.0.0.1
    database: 3
    port: 6379
    password: 

upload:
  path: '/opt/upload/file/' #文件上传目录

logging:
  level:
    com.cola.colaboot.module: debug #日志级别
  #file:
    #name: log-cloud-view.log

#邮件服务器配置，需要执行邮件任务时使用
mail: 
  host: "smtp.qq.com"
  port: "465"
  user: "123@qq.com"
  pass: "xxx"
```
4. 添加Nginx server配置，注意file代理的上传文件夹与application-prod.yml中upload.path路径一致:
```
server {
    listen       80;
    server_name  pro.icelery.fun;
    location ^~ /designApi/ {
        proxy_pass http://127.0.0.1:6882/;
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header Ali-CDN-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ^~ /file/ {
        alias /opt/upload/file/;
    }
    location / {
        root   /opt/project/dist/;
        index  index.html;
        try_files  $uri $uri/ /index.html;
    }
}
```
5. 解压upload.zip到Nginx和jar配置的文件上传目录(可选)
6. 启动jar
```shell
nohup java -jar cola-designer-pro.jar &
```
7. 访问
```shell
http://pro.icelery.fun
```
