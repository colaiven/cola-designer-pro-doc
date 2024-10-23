import{_ as e,r as c,o,c as p,b as n,d as s,e as l,w as t,a as i}from"./app-7bc1ffc0.js";const u={},d=n("h1",{id:"常见问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),s(" 常见问题")],-1),r=n("li",null,[n("p",null,"大屏轮播如何实现？"),n("ul",null,[n("li",null,[s("软件未提供轮播管理功能，但可采用跳转组件实现，具体使用方式如下： "),n("ol",null,[n("li",null,"拖放控件分组中的跳转组件到画布，若想要不显示可在右侧配置栏-->基础 设置隐藏。"),n("li",null,"设置交互方式，选中触发方式，选择触发选项“下一页”，交互方式选择下钻，选择下一次轮播的大屏。"),n("li",null,"属性栏开启自动触发，设置触发延时（间隔多久轮播下一页大屏），选择触发类型为上一页（交互方式中选择的触发选项）。")])]),n("li",null,"轮播的下一页重复以上步骤即可完成多屏轮播，保存预览时生效。")])],-1),k=n("p",null,"如何扩充组件？",-1),g=n("p",null,"使用导入时，导入失败，提示版本不一致，如何强制导入？",-1),m=n("li",null,[n("p",null,"如何接入达梦、人大金仓、TDSQL等国产数据库？"),n("ul",null,[n("li",null,"目前版本已经内置市面常用的4种数据库：SQL Server、Oracle、Mysql、Postgre数据库，可在数据源管理通过对应数据库版本的jdbc连接串直接创建数据库连接。理论上只要数据库厂商提供jdbc连接驱动包就能接入，需要修改后端源码实现，方式如下：")])],-1),v=i(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1.在后端工程中的pom.xml中引入jdbc驱动包（以达梦为例）:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.dameng<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>DmJdbcDriver18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>你的版本号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

2.打包后端并重启
3.进入数据源管理添加数据源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建数据源时数据源类型下拉框只作为展示或搜索用，可直接在前端代码中增加一个下拉选项，此字段不参与后端实际调用数据库。</p><ul><li>为何某些账号看不见一些大屏或数据源？ <ul><li>大屏管理、模板管理、数据源管理、API数据集管理、SQL数据集管理都做了数据权限，具体用户的数据权限可在“系统管理---&gt;资源权限”菜单进行设置。</li></ul></li></ul>`,3);function _(b,h){const a=c("RouterLink");return o(),p("div",null,[d,n("ul",null,[r,n("li",null,[k,n("ul",null,[n("li",null,[s("扩充组件目前需要修改前端源码，详见"),l(a,{to:"/custom/"},{default:t(()=>[s("自定义组件")]),_:1})])])]),n("li",null,[g,n("ul",null,[n("li",null,[s("程序的后期更新会尽可能的兼容原有组件配置，但无法做到100%兼容，后续升级可能导致由于之前版本导出的数据结构还是较老版本而无法正常的渲染组件，所以做了版本校验，如果需要跳过版本校验，可用文本编辑器打开.cd后缀的文件，修改version字段为当前使用的版本号（可在登陆页底部查看当前软件版本号）。（"),l(a,{to:"/logs/"},{default:t(()=>[s("版本更新日志")]),_:1}),s("）")])])]),m]),v])}const x=e(u,[["render",_],["__file","problem.html.vue"]]);export{x as default};
