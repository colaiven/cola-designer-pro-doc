import{_ as t,o as d,c as e,d as a}from"./app-fa482d15.js";const r={},h=a('<h1 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h1><h2 id="服务器配置" tabindex="-1"><a class="header-anchor" href="#服务器配置" aria-hidden="true">#</a> 服务器配置</h2><p>最小配置</p><table><thead><tr><th>资源名称</th><th>配置</th></tr></thead><tbody><tr><td>应用服务器</td><td>1核2G，系统盘20G，数据盘20G，CentOS 7.6/ubuntu 1804</td></tr></tbody></table><p>推荐配置</p><table><thead><tr><th>资源名称</th><th>配置</th></tr></thead><tbody><tr><td>应用服务器</td><td>4核8G，系统盘40G，数据盘100G，CentOS 7.6/ubuntu 1804</td></tr></tbody></table><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><table><thead><tr><th>软件名称</th><th>开发版本号</th><th>推荐版本号</th></tr></thead><tbody><tr><td>Mysql</td><td>8.0</td><td>5.7+</td></tr><tr><td>Redis</td><td>5.0</td><td></td></tr><tr><td>Nginx</td><td>1.22.1</td><td></td></tr><tr><td>JDK</td><td>11.0</td><td>1.8+</td></tr></tbody></table><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><p>本软件使用B/S架构，依靠浏览器运行，推荐使用chrome 112.x +版本，不支持IE浏览器.</p><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>本软件使用前后端分离技术，静态资源与接口可由Nginx代理，下面介绍使用nginx部署的具体步骤：</p><ol><li>下载安装包到服务器</li><li>修改application.yml配置文件</li><li>修改nginx配置</li><li>启动jar</li><li>访问</li></ol>',13),i=[h];function n(l,o){return d(),e("div",null,i)}const s=t(r,[["render",n],["__file","env.html.vue"]]);export{s as default};