import{_ as p,r as e,o,c as l,b as s,d as n,e as c,w as i,a}from"./app-2b0442e9.js";const r="/cola-designer-pro-doc/assets/a1-9db1ed02.png",u="/cola-designer-pro-doc/assets/a2-a399a247.png",k="/cola-designer-pro-doc/assets/a3-81bab122.png",d="/cola-designer-pro-doc/assets/a4-e6938ec6.png",v="/cola-designer-pro-doc/assets/a5-8f42bc24.png",m={},b=a(`<h1 id="教程" tabindex="-1"><a class="header-anchor" href="#教程" aria-hidden="true">#</a> 教程</h1><h2 id="新建组件" tabindex="-1"><a class="header-anchor" href="#新建组件" aria-hidden="true">#</a> 新建组件</h2><ol><li>在components文件夹新建文件夹 mycpt</li><li>在mycpt文件夹新建cpt-test-text.vue，内容如下：</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #fff</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    当前组件宽度：{{width}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    当前组件高度：{{height}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    自定义属性color：{{option.attribute.color}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    自定义属性fontsize：{{option.attribute.fontSize}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">option</span><span class="token operator">:</span>Object<span class="token punctuation">,</span>
  <span class="token literal-property property">show</span><span class="token operator">:</span>Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在/components/registerCpt.js中的export这个组件。</li></ol><p><img src="`+r+`" alt="login.png"></p><ol start="4"><li>在mycpt文件夹新建cpt-test-text-option.vue，内容如下：</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-form</span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>文字大小<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attribute.fontSize<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color属性<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>attribute.color<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-form-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>t-form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">attribute</span><span class="token operator">:</span>Object
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在/components/registerOption.js中export这个组件。</li></ol><p><img src="`+u+'" alt="login.png"></p>',10),g={start:"6"},y=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;自定义测试&#39;</span><span class="token punctuation">,</span><span class="token comment">//分组名称</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;basic&#39;</span><span class="token punctuation">,</span><span class="token comment">//分组图标，对应/src/assets/icon/文件夹下的图片名</span>
            <span class="token literal-property property">opened</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//默认展开</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;我的组件&#39;</span><span class="token punctuation">,</span> <span class="token comment">//组件名称</span>
                    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">//分组图标，对应/src/assets/icon/components/文件夹下的svg图片名</span>
                    <span class="token literal-property property">cptKey</span><span class="token operator">:</span> <span class="token string">&#39;cpt-test-text&#39;</span><span class="token punctuation">,</span><span class="token comment">//组件名\\组件唯一标识</span>
                    <span class="token literal-property property">cptOptionKey</span><span class="token operator">:</span><span class="token string">&#39;cpt-test-text-option&#39;</span><span class="token punctuation">,</span><span class="token comment">//组件配置表单名，不写默认为:组件名-option</span>
                    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">attribute</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//配置项</span>
                            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成上述步骤算是基本创建组件了，可以在设计界面看一下效果：</p><p><img src="`+k+`" alt="login.png"></p><p>可见拉伸组件或修改属性组件内容会跟随改变。此时便可以在组件内对这些可变参数进行操作， 可将cpt-test-text.vue修改成如下内容：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{width: width+&#39;px&#39;, height: height+&#39;px&#39;, color: option.attribute.color, fontSize:option.attribute.fontSize+&#39;px&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    我是组件的自定义内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">option</span><span class="token operator">:</span>Object<span class="token punctuation">,</span>
  <span class="token literal-property property">show</span><span class="token operator">:</span>Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="`+d+`" alt="login.png"></p><p>宽高可设置为100%，这里只是演示可以这样干，部分第三方组件有设置100%的宽高视图不刷新现象，可如图设置宽高。此时一个静态组件就新增完成了，可以根据实际需要自行实现组件功能，完善组件的配置项。如果需要对内置组件属性新增或者调整，找到需要修改的组件的相应文件修改即可。</p><h2 id="设置动态数据" tabindex="-1"><a class="header-anchor" href="#设置动态数据" aria-hidden="true">#</a> 设置动态数据</h2><ol><li>在option.js中cpt-test-text的配置修改成如下内容：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;自定义测试&#39;</span><span class="token punctuation">,</span><span class="token comment">//分组名称</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;basic&#39;</span><span class="token punctuation">,</span><span class="token comment">//分组图标，对应/src/assets/icon/文件夹下的图片名</span>
            <span class="token literal-property property">opened</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//默认展开</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;我的组件&#39;</span><span class="token punctuation">,</span> <span class="token comment">//组件名称</span>
                    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">//分组图标，对应/src/assets/icon/components/文件夹下的svg图片名</span>
                    <span class="token literal-property property">cptKey</span><span class="token operator">:</span> <span class="token string">&#39;cpt-test-text&#39;</span><span class="token punctuation">,</span><span class="token comment">//组件名\\组件唯一标识</span>
                    <span class="token literal-property property">cptOptionKey</span><span class="token operator">:</span><span class="token string">&#39;cpt-test-text-option&#39;</span><span class="token punctuation">,</span><span class="token comment">//组件配置表单名，不写默认为:组件名-option</span>
                    <span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">attribute</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//配置项</span>
                            <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">cptDataForm</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//动态数据配置</span>
                            <span class="token literal-property property">dataSource</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//默认数据源1:静态数据，2:api接口,3:SQL,4:数据集,5:websocket</span>
                            <span class="token literal-property property">pollTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token comment">//默认轮询时间</span>
                            <span class="token literal-property property">dataText</span><span class="token operator">:</span> <span class="token string">&#39;{&quot;value&quot;: &quot;文本组件动态数据&quot;}&#39;</span><span class="token punctuation">,</span><span class="token comment">//静态数据，必须为JSON格式</span>
                            <span class="token literal-property property">apiUrl</span><span class="token operator">:</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span><span class="token comment">//默认api地址</span>
                            <span class="token literal-property property">sql</span><span class="token operator">:</span><span class="token string">&#39;select xxx&#39;</span><span class="token comment">//默认sql</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将cpt-test-text.vue修改成以下内容</li></ol><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{width: width+&#39;px&#39;, height: height+&#39;px&#39;, color: option.attribute.color, fontSize:option.attribute.fontSize+&#39;px&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{cptData.text}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>getDataJson<span class="token punctuation">,</span> pollingRefresh<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/refresh-cpt-data&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
  <span class="token literal-property property">option</span><span class="token operator">:</span>Object<span class="token punctuation">,</span>
  <span class="token literal-property property">show</span><span class="token operator">:</span>Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//uuid 必须</span>
<span class="token keyword">let</span> uuid <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;uuid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">v1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//自定义组件值接收字段</span>
<span class="token keyword">let</span> cptData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//refreshCptData固定写法，必须！</span>
<span class="token keyword">const</span> <span class="token function-variable function">refreshCptData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">pollingRefresh</span><span class="token punctuation">(</span>uuid<span class="token punctuation">,</span> props<span class="token punctuation">.</span>option<span class="token punctuation">.</span>cptDataForm<span class="token punctuation">,</span> loadData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//自定义数据处理方法</span>
<span class="token keyword">const</span> <span class="token function-variable function">loadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">getDataJson</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>option<span class="token punctuation">.</span>cptDataForm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//res为数据表单的静态数据或执行API返回的数据</span>
    cptData<span class="token punctuation">.</span>text <span class="token operator">=</span> res<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//初始化数据，可选。echarts类组件需要放在onMounted中执行！</span>
<span class="token function">refreshCptData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//暴露refreshCptData，必须！</span>
<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>refreshCptData<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此完成自定义组件动态数据的配置，刷新页面从新从左边拖拽组件生效，可在数据一栏设置动态数据或者修改静态数据，效果如下：</p><p><img src="`+v+'" alt="login.png"></p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ul><li>组件命名避免与已有组件名称相同如:input、el-input... 建议使用个人/公司名称简称-分组名-组件名。</li><li>需要配置动态数据的组件必须设置uuid，否则不能清除数据表单轮询定时任务。</li><li>对视图不刷新的第三方组件可对option.attribute进行深度监听，可参考进度池和地图组件写法。</li></ul>',17);function h(f,x){const t=e("RouterLink");return o(),l("div",null,[b,s("ol",g,[s("li",null,[n("打开options.js，在export default中新增输出组件的"),c(t,{to:"/custom/options.html"},{default:i(()=>[n("配置项")]),_:1}),n("：")])]),y])}const w=p(m,[["render",h],["__file","step.html.vue"]]);export{w as default};
