import{_ as p}from"./s1-f1d82f72.js";import{_ as s,r as t,o,c as i,b as a,d as e,e as d,a as r}from"./app-50ce3299.js";const c="/cola-designer-pro-doc/assets/n3-d0342c0a.png",h="/cola-designer-pro-doc/assets/n4-88c17b7a.png",l="/cola-designer-pro-doc/assets/n5-35828dae.png",g="/cola-designer-pro-doc/assets/n7-e886d490.png",_="/cola-designer-pro-doc/assets/s6-40c5d046.png",m="/cola-designer-pro-doc/assets/n8-da67c1b5.png",f="/cola-designer-pro-doc/assets/n9-f6f0526c.png",b={},u=r('<h1 id="设计器" tabindex="-1"><a class="header-anchor" href="#设计器" aria-hidden="true">#</a> 设计器</h1><h2 id="设计大屏" tabindex="-1"><a class="header-anchor" href="#设计大屏" aria-hidden="true">#</a> 设计大屏</h2><p>新建大屏或模板后，鼠标放置在列表页面的大屏上会弹出相应的操作按钮组，点击设计按钮将跳转到大屏或模板的设计器页面。 <img src="'+p+'" alt="login.png"></p><p>设计器头部为操作栏，中间操作栏为组件快捷操作，可进行回退/前进和层级数快速设置，开启网格对齐按钮后拖拽组件时可自动根据网格位置吸附，右侧操作部分可进行主题更改、导入、导出、清空、预览和保存操作。设计器左侧为组件栏，展示设计器所有的组件和已选图层列表，组件按照类型进行分组，可在上方的搜索框输入组件名进行模糊搜索，组件栏选中图层tab时，列表显示大屏上已经拖动的所有组件列表。在图层列表可点击某项图层，点击后大屏组件会进行高亮显示，图层列表的组件俺新增大顺序进行排序，新拖动的组件在图层列表的最上层，最上层的组件相应在设计区域也在最上层，当两个组件在垂直方向重叠时，可变更两者的图层排序位置确认其在垂直方向是的层级显示。</p><p>设计器中间部分为设计区域，使用组件时将鼠标按住需要使用到组件拖动到设计区域，拖动至设计区域的组件可随意拖放位置和拉伸，滑动设计区域左下角的滑块可以对设计区域进行缩放。 <img src="'+c+'" alt="login.png"></p><p>鼠标右键选中组件可弹出组件的操作菜单，可对组件进行删除、复制、上移、下移、置顶和置底操作。</p><p>设计器右侧为属性配置栏，可展开和收起，鼠标点击设计区域空白处时配置栏显示大屏的基础信息，鼠标点击设计区域的组件时显示当前组件的配置信息。</p><p><img src="'+h+'" alt="login.png"></p><p>组件的配置栏包含基础、属性、数据、交互四个tab，基础栏配置组件的名称、显隐、坐标、宽高以及旋转角度数据，所有的组件都可设置这些基础信息。属性tab展示组件特有的可配置信息，每个组件的配置都有所不同，如文本组件可配置文字颜色、大小等信息，柱状图组件可配置排列方向、轴线显示的等信息。右侧配置数据与设计区域的组件显示实时关联。</p><p>配置栏数据tab显示组件数据源的配置，值得注意的是不是所有的组件都含有这个tab，如边框、图片等静态组件。组件数据源当前可选为静态数据、API、SQL、数据集，默认数据为静态数据，可点击编辑数据进行数据修改。选择动态数据时可进行轮询时间配置，设置后组件将定时轮询获取最新的数据展示。具体数据源使用方式请参考本文档第五章节。</p><p>配置栏交互tab可设置组件点击时的交互事件，当前版本可选择交互类型有显示/隐藏组件、更新API参数、下钻和跳转外部链接，具体交互使用方式可参考<a href="#%E7%BB%84%E4%BB%B6%E4%BA%A4%E4%BA%92">组件交互。</a></p><h2 id="主题设置" tabindex="-1"><a class="header-anchor" href="#主题设置" aria-hidden="true">#</a> 主题设置</h2><p>设计好的大屏可根据具体场景一键切换主题，以满足设计配色的统一性，可一键设置画布上的组件的字体颜色以及主题颜色，点击配色可进行实时预览，点击取消进行还原，点击确定则设置主题生效。</p><p><img src="'+l+'" alt="login.png"></p><h2 id="保存-预览" tabindex="-1"><a class="header-anchor" href="#保存-预览" aria-hidden="true">#</a> 保存&amp;预览</h2><p>大屏设计好后可先点击预览按钮查看设计，预览时会根据大屏设置的分辨率进行按比例缩放，确认无误后可点击保存按钮将设计数据保存到数据库，保存成功会生成访问链接，可在大屏列表点击分享按钮复制链接进行访问最终的设计大屏。</p><p><img src="'+g+'" alt="login.png"></p><h2 id="复制-粘贴组件" tabindex="-1"><a class="header-anchor" href="#复制-粘贴组件" aria-hidden="true">#</a> 复制&amp;粘贴组件</h2><p>在设计器页面选中组件，点击鼠标右键会出现操作栏，点击操作栏中复制按钮会将当前组件及其配置克隆到画布上，复制后点击设计器顶部操作栏的粘贴按钮可继续克隆复制的组件。</p><p><img src="'+_+'" alt="login.png"></p><p>也可在官方组件库模板页面复制想要的组件，组件库模板页面复制的组件粘贴后默认位置为(20,20)</p>',21),x={href:"http://pro.icelery.fun/template?tab=component",target:"_blank",rel:"noopener noreferrer"},A=r('<p>注意事项：粘贴需要浏览器授权读取剪贴板的权限。剪贴板被其他内容覆盖后无法成功克隆组件。</p><h2 id="导入导出" tabindex="-1"><a class="header-anchor" href="#导入导出" aria-hidden="true">#</a> 导入导出</h2><p>在设计器头部设置栏有导出按钮，目前提供了导出为图片和设计文件两种导出方式，导出的设计文件后缀为cd的json格式文件，保存大屏组件的坐标以及配置信息。导出图片格式为png。点击导出选择导出方式，在弹出的对话框中设置保存的位置即可完成导出。</p><p>导入大屏目前暂只支持设计文件的导入，需要与导出的版本号统一才可完成导入功能，点击导入，在弹出的对话框中选择当前软件版本相同的设计cd文件，点击确定完成导入。导入大屏会将当前页面已经选择的组件进行覆盖。</p><p><img src="'+m+'" alt="login.png"></p><h2 id="组件交互" tabindex="-1"><a class="header-anchor" href="#组件交互" aria-hidden="true">#</a> 组件交互</h2><p>设计器右侧配置栏可设置指定组件的交互逻辑，当前版本支持显示/隐藏组件、更新组件API参数、下钻和跳转外部链接四种方式的交互，交互事件为点击时（选项卡组件的交互类型为切换选项时）。并不是所有组件都支持交互，具体事件绑定在哪一个元素上由组件内部逻辑指定，如文本组件事件在点击文本框时触发，柱状图组件在点击柱子时触发...。交互事件默认不勾选，需要设置交互时需要在配置栏交互TAB页勾选”触发条件”选项。</p><h3 id="显示-隐藏组件" tabindex="-1"><a class="header-anchor" href="#显示-隐藏组件" aria-hidden="true">#</a> 显示/隐藏组件</h3><p>交互类型选择“显示/隐藏组件”时，需要在下方选择显示或隐藏的对象，”显示”TAB页勾选点击当前组件时需要显示的其他组件（组件默认为显示，可在基础栏设置组件的初始状态），”隐藏”TAB页勾选点击当前组件时需要隐藏的组件。注意：”显示”栏勾选的组件在”隐藏”栏为不可勾选状态。注：报表暂不支持组件显隐交互。</p><p><img src="'+f+'" alt="login.png"></p><h3 id="更新api参数" tabindex="-1"><a class="header-anchor" href="#更新api参数" aria-hidden="true">#</a> 更新API参数</h3><p>更新API参数交互类型可实现组件数据联动效果，可对指定组件的API数据源进行修改URL参数并执行刷新，参数名对应URL的参数的name，参数值对应URL参数的value，参数值可选为固定值和自动获取，选择固定值时需要手动填写参数值的内容，选择自动获取时可获取组件设定的点击时的文本值，具体内容由组件设定，如文本组件获取的内容为文本内容，柱状图组件获取点击柱子的label，边框组件则为空值...</p><p>注意：更新API参数的交互只适用于使用API数据源的交互对象，API数据集数据源暂不支持。</p><h3 id="下钻" tabindex="-1"><a class="header-anchor" href="#下钻" aria-hidden="true">#</a> 下钻</h3><p>选择下钻交互类型时，需要设置下钻的大屏，下方选择大屏列表只展示当前登录用户拥有权限的大屏，设置好后点击组件即可下钻到设定的大屏。</p><h3 id="跳转外部链接" tabindex="-1"><a class="header-anchor" href="#跳转外部链接" aria-hidden="true">#</a> 跳转外部链接</h3><p>选择跳转外部链接时，需要设置指定的跳转网页的全链接如：”http://www.baidu.com/”, 设置好后点击组件即可在新标签页打开设定的网页链接。</p>',17);function B(I,P){const n=t("ExternalLinkIcon");return o(),i("div",null,[u,a("p",null,[e("在线组件库："),a("a",x,[e("在线组件库"),d(n)])]),A])}const k=s(b,[["render",B],["__file","designer.html.vue"]]);export{k as default};