import{_ as n,o as a,c as s,e}from"./app-b22b8590.js";const t={},i=e(`<h1 id="本地运行" tabindex="-1"><a class="header-anchor" href="#本地运行" aria-hidden="true">#</a> 本地运行</h1><p>后端技术栈：Maven + Springboot + Mybatis-plus + SpringSecurity + Mysql + Redis</p><p>前端技术栈：Vue3 + Axios + Webpack + Echarts + Three.js + TDesign</p><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><table><thead><tr><th>软件名称</th><th>开发版本号</th><th>推荐版本号</th></tr></thead><tbody><tr><td>node</td><td>18.0</td><td>18.0</td></tr><tr><td>JDK</td><td>17</td><td>1.8+</td></tr><tr><td>Maven</td><td>3.9.2</td><td></td></tr></tbody></table><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><p>本软件采用B/S架构，需依赖浏览器运行，建议使用chrome112.x以上版本，不支持IE浏览器！项目使用webpack进行包管理，打包使用npm run build，打包完后将打包好的文件放到服务器中间件如nginx\\tomcat，使用浏览器打开配置的路径即可访问。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><ol><li>拉取前后端代码，master分支为稳定分支（建议使用，更新频率 &gt; 1个月），dev为开发分支（更新频率较高）。</li><li>启动后端（建议使用IDEA）：运行 src/main/java/com/cola/colaboot/ColaBootApplication.java中main方法.</li><li>启动前端：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="本地运行时访问静态资源" tabindex="-1"><a class="header-anchor" href="#本地运行时访问静态资源" aria-hidden="true">#</a> 本地运行时访问静态资源</h2><p>建议本地调试时直接连环境上的文件代理，如需访问本地电脑图片资源文件需要后端额外配置代理，如nginx\\tomcat，nginx配置示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
   listen       8125;
   server_name  _;
   location ^~ /file/ {
      alias /opt/upload/file/;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改vue.config.js中file的代理：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      &#39;/designApi&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> &#39;http<span class="token operator">:</span><span class="token comment">//后端IP:6882/&#39;</span>
        ws<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>
          &#39;/designApi&#39;<span class="token operator">:</span> &#39;&#39;
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      &#39;/file&#39;<span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> &#39;http<span class="token operator">:</span><span class="token comment">//后端ip:8125/&#39;,</span>
        ws<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[i];function d(o,r){return a(),s("div",null,l)}const p=n(t,[["render",d],["__file","dev.html.vue"]]);export{p as default};
