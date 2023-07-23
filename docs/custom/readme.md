# 开始

前端项目结构  
```js
- public
- src
    ...
    - components //组件目录
        ...
        - color.js              //主题相关配置
        - options.js            //组件基础、属性、数据信息
        - register-cpt.js       //组件注册器
        - register-option.js    //组件配置表单注册器
...
env.js                          //软件名称、版本号、API请求前缀配置
vue.config.js
```

* options.js 中保存所有组件的默认配置项，如文本组件的文字颜色、字体大小等等。
* register-cpt.js 为组件注册器，此文件的自定义组件将注册为全局组件。
* register-option.js 为组件配置表单注册器，此文件的自定义配置表单组件将注册为全局组件。

自定义组件创建流程：
```text
在components创建文件夹--->创建组件--->创建组件配置表单--->在options.js设置组件默认配置项  
    --->在registerCpt.js中注册组件--->在registerOption.js注册配置表单--->使用
```

组件props：

| 属性名    | 说明                   | 类型      |
|--------|----------------------|---------|
| option | 自定义组件的属性和数据源         | Object  |
| height | 组件高度                 | Number  |
| width  | 组件宽度                 | Number  |
| show   | 组件是否显示               | Boolean |
| design | 当前是否为设计模式，false为预览模式 | Boolean |


组件配置表单props：

| 属性名    | 说明                   | 类型   |
| --------- | ---------------------- | ------ |
| attribute | 自定义组件的自定义属性 | Object |

示例：
```vue
<!--简单组件结构示例-->
<template>
  <div>
    文本：{{option.text}}
    宽：{{option.width}}
    高：{{option.height}}
  </div>
</template>

<script setup>
const props = defineProps({
  width: Number,
  height: Number,
  option: Object,
  show: Boolean,
  design: Boolean,
})
</script>
```

## 动态数据
自定义组件若未在option.js中声明cptDataForm，则配置栏不会出现数据配置表单，cptDataForm中配置项如下：

| 属性名        | 说明                                         | 类型   |
|------------|--------------------------------------------| ------ |
| dataText   | 静态数据                                       | String |
| sql        | 默认SQL                                      | String |
| apiUrl     | 默认API接口地址                                    | String |
| dataSource | 默认数据源，1:静态数据、2:API接口、3:SQL、4:数据集、5:websocket | Number |
| pollTime   | 接口默认轮询时间                                   | Number |
