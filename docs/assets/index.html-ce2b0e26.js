import{_ as e,r as o,o as t,c as p,b as l,d as i,e as a,a as s}from"./app-e1b7efbf.js";const u={},c=l("h1",{id:"更新日志",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),i(" 更新日志")],-1),d=l("li",null,[i("v2.6.3 2025-01-02 "),l("ul",null,[l("li",null,"[新增]新增图标组件"),l("li",null,"[优化]音频组件播放时显示播放动画"),l("li",null,"[优化]按钮组件新增背景颜色和边框配置")])],-1),r=l("li",null,[i("v2.6.2 2024-12-25 "),l("ul",null,[l("li",null,"[优化]交互配置支持不勾选触发条件也缓存交互参数"),l("li",null,"[修复]修复编辑api数据集请求方式不对的问题"),l("li",null,"[修复]修复websocket连接失败大屏预览一直loading问题")])],-1),k=l("li",null,"[新增]音频组件增加循环次数配置",-1),_=l("li",null,"[新增]跳转组件新增数据触发配置",-1),v={href:"https://cloud.tencent.com/product/hunyuan",target:"_blank",rel:"noopener noreferrer"},b=l("li",null,"[优化]组件图标优化",-1),g=l("li",null,"[优化]代码编辑器优化，API/SQL数据集编辑弹窗显示优化",-1),h=l("li",null,"[修复]修复矩阵图组件复制后配色无法修改的问题",-1),y=l("li",null,"[修复]修复矩阵图组件预览时偶发显示过大的问题",-1),w=l("li",null,"[修复]修复2.5.2之后的版本cookie参数无法解析的问题",-1),m=s("<li>v2.6.0 2024-11-19 <ul><li>[新增]新增kpi组件</li><li>[新增]新增电池组件</li><li>[新增]新增胶囊占比组件</li><li>[新增]视频组件新增过滤器配置</li><li>[新增]新增趋势指标组件</li><li>[新增]新增矩阵图组件</li><li>[新增]新增螺旋图组件</li><li>[新增]新增3D单列堆积柱状图</li><li>[新增]新增3D柱状容积图</li><li>[新增]新增环形刻度图</li><li>[优化]轮播图组件新增切换效果、滑动方向、卡片模式、间隔时间、导航器相关属性配置</li><li>[优化]同心环形图新增边框、标签相关属性配置</li><li>[优化]3D模型组件新增天空盒、HDR配置</li><li>[优化]3D模型组件GLTF模型文件兼容性优化、新增交互事件支持</li><li>[优化]设计器页面登录失效结束loading</li><li>[优化]暗黑模式跟随大屏背景开启（修复浅色背景下下拉框\\文本框组件文字看不清的问题）</li><li>[优化]3d模型列表显示文件大小</li><li>[修复]修复更改主题字体颜色后再调整组件字体颜色影响别的组件的问题</li></ul></li>",1),L=s('<p>增量sql</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>design_model<span class="token punctuation">`</span></span> \n<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>file_size<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;文件大小b&#39;</span><span class="token punctuation">,</span>\n<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>update_time<span class="token punctuation">`</span></span> <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span><span class="token punctuation">,</span>\n<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>update_user<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>v2.5.2 2024-10-24 <ul><li>[新增]sql数据源和sql数据集支持响应交互参数</li><li>[优化]3D模型组件模型尺寸自适应优化</li><li>[修复]前端启动tbody报错修复</li></ul></li><li>v2.5.1 2024-10-12 <ul><li>[新增]新增单列柱状图组件</li><li>[新增]设计器新增组件锁定功能</li><li>[优化]设计器图层列表显示组件状态以及数据源类型</li></ul></li><li>v2.5.0 2024-09-09 <ul><li><p>[新增]地图资源管理</p></li><li><p>[新增]支持配置用户登录后跳转默认首页</p></li><li><p>[优化]滚动列表增加滚动时间间隔和颜色配置</p></li><li><p>[修复]修复带前缀部署时登录失效跳转登录页面错误问题</p><p>⚠️ 本次升级包含增量脚本请前往文件网盘-历史版本中下载</p></li></ul></li><li>v2.4.4 2024-07-29 <ul><li>[优化]日期控件支持默认当前时间</li><li>[修复]修复设计报表时按钮组件无法拉伸问题</li><li>[修复]修复报表在移动端预览时无法滑动问题</li><li>[修复]修复日期控件预览时默认时间不生效的问题</li></ul></li><li>v2.4.3 2024-07-26 <ul><li>[优化]饼图系列组件标签支持换行配置</li><li>[修复]修复开启接口签名在并发请求下的数据串的问题</li></ul></li><li>v2.4.2 2024-07-08 <ul><li>[新增]显示隐藏切换交互</li><li>[优化]日期、下拉框、输入框组件增加尺寸、状态、label宽度、提示配置</li><li>[优化]日期组件增加默认值、选择模式、时间选择配置</li><li>[修复]修复关闭接口签名配置报错问题</li></ul></li><li>v2.4.1 2024-05-25 <ul><li>[新增]新增扇形饼图组件</li><li>[新增]新增贝壳图组件</li><li>[新增]饼图增加起始和截止角度配置</li><li>[修复]折线图x轴不显示label问题</li><li>[修复]在白色主题下视频组件配置链接框文本颜色没有变化的问题</li><li>[其他]部分安全更新</li></ul></li><li>v2.4.0 2024-05-07 <ul><li>[新增]报表管理</li><li>[新增]回收站</li><li>[新增]设计器支持亮/暗主题切换</li><li>[新增]刷新api交互支持api数据集</li><li>[优化]设计器图标风格优化</li><li>[优化]保存设计时卡顿优化</li><li>[修复]修复静态表格组件在缩放比例非100%的情况下页码显示不完整bug</li><li>[修复]设计器打开选色器后偶发布局错乱问题</li><li>[修复]配置下钻后接口调用未获取到url参数问题</li><li>[修复]滚动表格组件图片过大显示超出表格bug</li></ul></li><li>v2.3.0 2024-02-28 <ul><li>[新增]记录登录IP和时间</li></ul></li></ul><p>增量sql:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> sys_user <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> login_ip <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;登录IP&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> sys_user <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> login_time <span class="token keyword">datetime</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;登录时间&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>v2.2.7 2024-02-06</p><ul><li>[新增]按钮组件新增图标配置</li><li>[优化]按钮组件背景颜色配置调整为主题，新增是否点击全屏配置</li><li>[优化]文本组件行高支持配置居中</li><li>[优化]数字翻牌器组件支持显示负数</li><li>[修复]数字翻牌器数值格式不显示bug</li><li>[修复]文件上传中取消上传无法重新上传bug</li></ul></li><li><p>v2.2.6 2024-01-18</p><ul><li>[新增]水球图组件新增数值单位配置</li><li>[优化]文本组件配置栏排列优化</li><li>[优化]水球图组件支持小数</li></ul></li><li><p>v2.2.5 2023-12-25</p><ul><li>[优化]状态图组件支持自定义状态</li><li>[修复]修复url参数中文解析乱码问题</li></ul></li><li><p>v2.2.4 2023-12-16</p><ul><li>[新增]数据集支持通过表达式解析当前时间</li><li>[优化]大屏列表页显示创建时间，删除大屏停留在当前页</li><li>[修复]修复3D机房视图组件复制后背景变黑bug</li></ul></li><li><p>v2.2.3 2023-12-11</p><ul><li>[新增]设计器新增实时保存功能</li><li>[新增]api数据集合sql数据集新增快速复制功能</li><li>[优化]静态表格和滚动表格组件字段列配置支持拖拽排序</li><li>[优化]撤销回退设计优化</li><li>[修复]删除API数据集提示无资源权限bug</li><li>[修复]内网环境图标不显示bug</li></ul></li><li><p>v2.2.2 2023-12-06</p><ul><li>[优化]折线图新增轴字体大小配置</li><li>[修复]数据集编辑后点新增按钮无反应bug</li></ul></li><li><p>v2.2.1 2023-11-15</p><ul><li>[优化]导入设计时版本校验优化(只校验到次版本号)</li><li>[修复]修复水位图未选择数据集刷新数据时页面卡死bug</li></ul></li><li><p>v2.2.0 2023-10-25</p><ul><li>[新增]大屏缩放模式配置</li></ul></li></ul><p>增量sql:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> design_data <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> scale_type <span class="token keyword">TINYINT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">1</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;缩放模式：1铺满缩放，2比例缩放，3响应布局&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>v2.1.1 2023-10-18 <ul><li>[优化]跳转外部链接支持传参</li><li>[修复]修复缩放时画布被隐藏bug</li><li>[修复]修复拖放组件配置不聚焦bug</li><li>[修复]修复自定义sql前面包含空格无法执行bug</li></ul></li><li>v2.1.0 2023-10-09 <ul><li>[新增]新增词云图组件</li><li>[新增]新增3D折线图组件</li><li>[新增]新增大屏水印配置</li><li>[优化]浏览器兼容性优化，兼容适用于安卓设备的浏览器</li><li>[优化]更新api交互支持多组件参数响应</li><li>[优化]大屏下钻交互支持参数传递</li><li>[优化]跳转外部链接交互支持选择跳转方式</li><li>[修复]环形图显示bug修复</li><li>[修复]轮播图组件超出高度bug修复</li></ul></li></ul><p>增量sql:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>design_data<span class="token punctuation">`</span></span> <span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> water_mark json <span class="token keyword">COMMENT</span> <span class="token string">&#39;水印配置&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',11),A=l("li",null,"[新增]数字翻牌器新增圆角配置",-1),D=l("li",null,"[新增]新增水球图组件",-1),N=l("li",null,"[新增]新增堆叠矩阵图",-1),T={href:"https://cdesign.fun/template?tab=component",target:"_blank",rel:"noopener noreferrer"},E=l("li",null,"[优化]天气组件api-key可配置",-1),f=l("li",null,"[优化]页面风格样式优化",-1),q=l("li",null,"[优化]第三方数据源连接异常重连优化",-1),U=l("li",null,"[优化]API数据集请求头动态参数获取",-1),M=l("li",null,"[修复]部分图表组件切换显示隐藏后尺寸错乱bug",-1),I=l("li",null,"[修复]导入设计无法保存bug",-1),C=l("li",null,"[修复]数据源编辑后测试连接密码错误bug",-1),O=s("<li>v2.0.0 2023-07-31 <ul><li>[新增]设计器顶部新增快捷操作台</li><li>[新增]资源权限集删除</li><li>[新增]设计器新增滚动列表组件</li><li>[优化]界面主题调整</li><li>[优化]角色权限模块优化</li><li>[优化]组件配色选择器优化</li><li>[优化]飞线地图组件弹框优化</li><li>[优化]vue3 Composition API重构</li><li>[优化]升级TDesign1.3.12</li><li>[优化]后台功能权限认证逻辑调整</li><li>[优化]预览页按比例缩放调整为自适应缩放</li><li>[修复]上传图片不能修改图片名称bug</li></ul></li><li>v1.11.0 2023-06-07 <ul><li>[新增]设计器界面图层栏显示组件接入的数据源类型</li><li>[新增]大屏支持socket数据源</li><li>[新增]设计器新增导航器组件</li><li>[新增]分组管理支持大屏/模板/数据源分组的新增、修改和删除（原菜单名称为&quot;数据集分组管理&quot;，需要自行在菜单管理中修改菜单名称）</li><li>[新增]设计器新增堆叠矩阵图组件</li><li>[优化]配置栏颜色选择器整体调整，支持实时更新</li><li>[优化]配置栏图表类型组件标题、图例的位置配置项优化</li><li>[优化]静态表格组件支持动态数据轮询</li><li>[优化]音频组件支持自定义文本语音播报</li><li>[优化]链接卡片组件增加左边距配置</li><li>[优化]滚动表格组件支持点击表头对字段排序</li><li>[优化]状态图组件状态码调整为数字</li><li>[优化]数据源管理明文密码调整为加密密码（重新保存生效）</li><li>[优化]后台兼容jdk1.8</li><li>[修复]数据源测试连接无错误信息bug</li><li>[修复]导入cd文件没有背景图和背景颜色bug</li><li>[修复]轮播图和状态图配置栏没有图片删除按钮</li><li>[修复]大屏预览时浏览器返回按钮无效bug</li><li>[修复]邮件任务时间无法编辑</li></ul></li><li>v1.10.2 2023-03-15 <ul><li>[新增]PostgreSQL数据源</li><li>[新增]链接卡片组件</li><li>[新增]状态图片组件</li><li>[新增]计时器组件新增显示格式、label位置配置</li><li>[新增]滚动表格组件新增边框类型、列文本颜色配置</li><li>[新增]基础折线图/柱状图新增Y轴网格线颜色配置</li><li>[新增]进度指标组件</li><li>[优化]飞线地图组件覆盖物尺寸配置支持宽高调整</li><li>[优化]当前时间组件新增指定时间、字体、加粗配置</li><li>[优化]组件动态数据源轮询时间上限调整</li><li>[优化]升级vue到2.6.14，升级t-design到1.0.8</li><li>[优化]图片组件增加背景颜色配置</li><li>[优化]用户管理页面提示信息调整</li><li>[修复]下钻到同模板大屏时页面数据不刷新bug</li><li>[修复]下拉框组件下拉选项无法切换下钻大屏bug</li><li>[修复]下拉框和选项卡组件复制后交互不出现触发选项bug</li><li>[修复]省份地图组件切换不显示bug</li></ul></li><li>v1.10.1 2023-02-02 <ul><li>[新增]新增3D饼图组件</li><li>[新增]新增3D飞线地图组件</li><li>[优化]宽屏比例预览显示优化</li><li>[优化]主题配置代码结构优化</li><li>[优化]飞线地图增加图例、路线、涟漪、自定义覆盖物等配置</li><li>[优化]设计器下钻交互时，选择大屏列表调整为弹窗分页表格</li><li>[优化]大屏/模板/报表无数据权限时锁住状态调整为不显示</li><li>[修复]时间日期组件显示星期异常</li><li>[修复]访问码访问报错bug</li><li>[修复]设计器屏幕比例超宽不能操作情况</li><li>[修复]密码重置后登录密码错误bug</li></ul></li><li>v1.9.11 2022-12-26 <ul><li>[新增]动态数据源支持url参数获取</li><li>[新增]新增DIN-MEDIUM字体</li><li>[新增]数字翻牌器组件增加千分位分隔符显示配置</li><li>[优化]组件栏图标完善</li><li>[优化]大屏/报表/模板页面滚动分页调整为按钮分页</li><li>[修复]切换显隐导致echarts图表尺寸错误bug</li><li>[修复]权限集设置权限时名称一直为管理员</li></ul></li><li>v1.9.10 2022-12-09 <ul><li>[新增]新增双Y轴折线柱状图</li><li>[新增]新增Arial字体</li><li>[新增]柱状图新增数值单位配置</li><li>[新增]柱状图新增x轴文本显示间隔配置</li><li>[新增]饼图新增label显示隐藏配置</li><li>[新增]渐变地图新增图例显示隐藏配置</li><li>[新增]渐变地图默认底色配置</li><li>[新增]增长指标组件新增字体加粗配置</li><li>[新增]漏斗图新增标签线配置</li><li>[修复]下拉框组件交互不生效bug</li><li>[修复]babel语法导致项目启动报错</li><li>[修复]数据集根据名称查询无效</li></ul></li><li>v1.9.9 2022-11-25 <ul><li>[新增]新增增长指标组件</li><li>[新增]新增多Y轴折线柱图</li><li>[新增]饼图组件增加label配置</li><li>[优化]饼图圆角配置滑块调整为数字输入框</li><li>[优化]海南省地图小地图优化</li><li>[修复]边框组件遮挡其他组件问题</li></ul></li><li>v1.9.8 2022-11-11 <ul><li>[新增]新增计时器组件</li><li>[新增]进度池组件新增百分比显示隐藏属性</li><li>[优化]选项卡组件和数值文本组件响应主题颜色</li><li>[优化]仪表盘配置增加分组</li><li>[优化]渐变地图组件条件配色配置优化</li><li>[优化]火狐浏览器滚动条样式优化</li><li>[修复]机房场景不显示bug</li><li>[修复]渐变地图下钻无效bug</li><li>[修复]数值文本报错修复</li><li>[修复]报表交互方式调整</li><li>[修复]API调试时请求体表单脏数据清理</li><li>[修复]报表图片导出不完整bug</li><li>[修复]导出图片滚动表格组件显示不完整bug</li></ul></li><li>v1.9.7 2022-11-07 <ul><li>[新增]报表导入/导出</li><li>[新增]原始配置JSON编辑框，设计器url拼接&quot;&amp;mode=dev&quot;可见</li><li>[新增]文本组件增加条件配色配置</li><li>[新增]新增840A1978字体</li><li>[优化]报表/大屏组件栏和顶部操作栏合并</li><li>[优化]去除报表预览页margin</li><li>[优化]组件统一命名规范</li><li>[修复]3D柱状图组件柱子大小配置无效bug</li><li>[修复]collapse组件默认展开失效bug</li></ul></li><li>v1.9.6 2022-11-01 <ul><li>[新增]拓扑图组件矩形元素新增圆角配置</li><li>[新增]拓扑图组件新增告警闪烁数据配置</li><li>[优化]设计器增加过度动画</li><li>[修复]拓扑图组件框选移动位置无效问题</li><li>[修复]动态设置localStorage token无效问题</li></ul></li><li>v1.9.5 2022-10-21 <ul><li>[新增]设计器新增主题颜色配置</li><li>[新增]邮件任务管理</li><li>[优化]关系图组件优化</li><li>[优化]3D柱状图配置优化</li><li>[优化]全局颜色配置抽取</li><li>[修复]跳转组件按钮方向配置不生效</li></ul></li><li>v1.9.4 2022-10-12 <ul><li>[新增]新增跳转组件，支持自动跳转，适用自动轮播场景</li><li>[新增]新增音频组件，支持高级条件配置</li><li>[新增]报表设计器增加复制组件</li><li>[新增]新增3D地图组件</li><li>[新增]字体新增液晶数字体</li><li>[新增]图片组件增加自动旋转配置</li><li>[优化]机柜颜色调整</li><li>[优化]折线图配置优化</li><li>[优化]升级G6依赖，关系图组件优化，关系图编辑器支持自由拖拽、放大或缩小</li><li>[优化]logo提取到配置文件</li><li>[优化]地图组件增强</li><li>[优化]告警图片组件增加自定义告警阀值配置</li><li>[优化]报表预览支持自适应</li><li>[修复]水位图、进度池组件数据不显示</li><li>[修复]关系图组件节点不能删除bug</li><li>[修复]数据集轮询bug</li><li>[修复]登陆页验证码请求两次</li></ul></li><li>v1.9.3 2022-09-23 <ul><li>[新增]报表管理</li><li>[新增]新增文本框、下拉框、日期选择框组件</li><li>[新增]k线走势组件</li><li>[新增]下钻支持大屏和报表</li><li>[新增]报表新增分组</li><li>[优化]video组件改由原生实现</li><li>[优化]按钮组件鼠标样式调整</li><li>[优化]报表预览页显示优化</li><li>[优化]升级t-design到0.47.0</li><li>[优化]地图组件颜色配置抽取</li><li>[优化]k线图组件配置优化</li></ul></li><li>v1.9.2 2022-09-15 <ul><li>[新增]设计器新增多选</li><li>[新增]设计器实现框选</li><li>[新增]代码打包混淆</li><li>[修复]地图组件交互bug</li></ul></li><li>v1.9.1 2022-09-08 <ul><li>[新增]组件配置折叠组件</li><li>[新增]新增数据集权限控制</li><li>[优化]设计器接口错误loading关闭</li><li>[优化]SQL数据集数据权限过滤</li><li>[优化]装饰组件、边框组件配置栏下拉框调整为列表</li></ul></li><li>v1.8.2 2022-09-02 <ul><li>[新增]数据集管理</li><li>[新增]SQL数据集执行测试</li><li>[新增]报表设计器</li><li>[新增]组件交互事件处理下钻、显隐、更新API、跳转</li><li>[优化]导入id重复bug</li><li>[优化]对旧版交互事件数据缺失的处理</li><li>[优化]下钻时权限控制</li><li>[修复]组件复制时聚焦错乱</li></ul></li><li>v1.8.1 2022-08-17 <ul><li>[新增]移至3D机房组件</li><li>[优化]饼图组件属性字段调整</li></ul></li><li>v1.7.1 2022-07-19 ...</li><li>v1.6.5 2022-06-30 <ul><li>[新增]数据集增加分组</li><li>[修复]预览/#/ bug</li></ul></li><li>v1.6.4 2022-06-27 <ul><li>[新增]资源权限管理</li><li>[优化]自定义SQL增强</li><li>[优化]线路状态组件优化</li><li>[修复]firefox设计器显示错位</li><li>[修复]使用模板bug</li></ul></li><li>v1.6.3 2022-06-15 <ul><li>[新增]新增基础K线图</li><li>[新增]新增立体柱状图</li><li>[新增]修改用户密码</li><li>[优化]菜单层级调整</li><li>[优化]角色授权完善</li><li>[优化]地图组件提示框自定义</li><li>[修复]打包后内网环境图标不显示</li></ul></li><li>v1.6.2 2022-05-27 <ul><li>[新增]菜单管理，菜单列表，新增菜单，删除菜单</li><li>[新增]大屏分组新增、删除</li><li>[优化]设计器复制和新拖动的组件置顶</li><li>[优化]雷达图组件增加图例配置</li><li>[优化]折线图组件增加边界间隙配置</li><li>[优化]表格组件字符串超长处理</li><li>[优化]API数据集转换脚本由服务器执行改为由客户端执行</li><li>[修复]折线图组件循环监听导致页面崩溃</li></ul></li>",22),x=l("li",null,"[新增]新增渐变仪表盘组件",-1),P={href:"https://www.seniverse.com/",target:"_blank",rel:"noopener noreferrer"},R=l("li",null,"[新增]大屏管理新增大屏分组",-1),S=l("li",null,"[新增]大屏设置新增分组配置",-1),B=l("li",null,"[新增]设计器组件数据源新增数据集选择",-1),F=l("li",null,"[新增]API数据集管理新增测试接口",-1),Q=l("li",null,"[优化]API数据集管理优化",-1),V=l("li",null,"[优化]环形进度组件增加内环显示配置",-1),Y=l("li",null,"[优化]ICON指标卡组件增加标题、正常、异常、进度显示配置",-1),j=s("<li>v1.5.2 2022-05-07 <ul><li>[新增]大屏模板管理，支持新增模板、设计模板、删除模板、使用模板</li><li>[新增]新建大屏选择模板</li><li>[新增]大屏设置为模板</li><li>[新增]资源库弹窗支持删除图片</li><li>[新增]资源库弹窗支持增加、删除分组</li><li>[优化]文件命名规范</li><li>[优化]大屏/模板管理操作按钮鼠标划过弹出动画</li><li>[优化]大屏/模板管理操作按钮鼠标划过弹出动画</li><li>[优化]选项卡组件支持自动切换</li><li>[优化]数字翻牌器组件动画优化</li><li>[优化]大屏数据结构调整（大屏数据和大屏组件数据分离）</li></ul></li>",1);function G(H,z){const n=o("ExternalLinkIcon");return t(),p("div",null,[c,l("ul",null,[d,r,l("li",null,[i("v2.6.1 2024-12-22 "),l("ul",null,[k,_,l("li",null,[i("[新增]API/SQL数据集支持AI生成转换脚本("),l("a",v,[i("腾讯混元大模型"),a(n)]),i(")")]),b,g,h,y,w])]),m]),L,l("ul",null,[l("li",null,[i("v2.0.2 2023-09-02 "),l("ul",null,[A,D,N,l("li",null,[i("[新增]公有云环境新增"),l("a",T,[i("模板素材库"),a(n)])]),E,f,q,U,M,I,C])]),O,l("li",null,[i("v1.6.1 2022-05-19 "),l("ul",null,[x,l("li",null,[i("[新增]新增天气组件("),l("a",P,[i("心知天气"),a(n)]),i(")")]),R,S,B,F,Q,V,Y])]),j])])}const K=e(u,[["render",G],["__file","index.html.vue"]]);export{K as default};
