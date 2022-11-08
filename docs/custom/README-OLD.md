# 自定义组件1.8.x(已废弃)
旧版教程。


再看一下前端项目结构  
<img src="../.vuepress/public/source/d1.png" width="360px" height="480px">


* options.js 中保存所有组件的默认配置项，如文本组件的文字颜色、字体大小等等。
* registerCpt.js 为组件注册器，在此将自定义组件放置在cptList完成注册。
* registerOption.js 为组件配置表单注册器，在此将自定义组件的配置表单放置在cptOptionsList完成注册。

自定义组件创建流程：
```text
在components创建文件夹--->创建组件--->创建组件配置表单--->在options.js设置组件默认配置项  
    --->在registerCpt.js中注册组件--->在registerOption.js注册配置表单--->使用
```

在创建组件后需在export default 输出以下属性：

| 属性名      | 说明          | 类型    |是否必填  | 默认值|
   |  ----      |  ----        | ----   | ----   | ----  |
| name       | 组件唯一标识   | String | 是      | 无 |
| title      | 组件名        | String  | 是    | 未命名组件 |
| icon       | 组件图标      | String  | 是     | el-icon-question |
| initWidth  | 组件宽度(px)   | Number  | 否     | 300 |
| initHeight | 组件高度(px)   | Number  | 否     | 200 |
| group      | 组件分组标识   | String  | 否     | default |

组件props（以下属性可直接在组建中使用，值与页面同步）：

| 属性名      | 说明          | 类型    |
   |  ----      |  ----        | ----   |
| option     | 自定义组件的属性和数据源| Object |
| height     | 组件高度| Number |
| width      | 组件宽度| Number |


组件配置表单props（以下属性可直接在表单中绑定，值与页面同步）：
| 属性名      | 说明          | 类型    |
|  ----      |  ----        | ----   |
| attribute     | 自定义组件的自定义属性| Object |

示例：
```vue
<template>
  <div>
    文本：{{option.text}}
    宽：{{option.width}}
    高：{{option.height}}
  </div>
</template>

<script>
export default {
    name: "cpt-text",
    title: '文字框',
    icon: 'el-icon-chat-line-square',
    initWidth: 300,
    initHeight: 50,
    group:'element',
    props: {
        option: Object,
        width:{type:Number,default:300},
        height:{type:Number,default:200},
    },
}
</script>
```

## 动态数据
自定义组件若未在option.js中声明cptDataForm，则配置栏不会出现数据配置表单，cptDataForm中配置项如下：

| 属性名      | 说明          | 类型    |
|  ----      |  ----        | ----   |
| dataText     | 静态数据/API接口地址/SQL| String |
| dataSource     | 数据源，1:静态数据、2:API接口、3:SQL| Number |
| pollTime     | 接口轮询时间| Number |


# 示例1.8.x
## 创建自定义组件
旧版教程

本节将以文本组件为例，从0开始创建自定义组件。

1. 在components文件夹新建文件夹 mycpt
2. 在mycpt文件夹新建cpt-test-text.vue，内容如下：
```vue
<template>
  <div>
    文本：{{option.attribute.text}}
    宽：{{width}}
    高：{{height}}
    自定义属性color：{{option.attribute.color}}
  </div>
</template>

<script>
export default {
  name: "cpt-test-text",
  title: '我的组件',
  icon: '',//自行下载svg图标文件放在/src/assets/icon/目录下，icon对应文件名称(没有后缀)
  initWidth: 300,
  initHeight: 50,
  group:'test',
  props: {
    option: Object,
    width:{type:Number,default:300},
    height:{type:Number,default:200},
  },
}
</script>
```
3. 在/components/registerCpt.js中的cptList注册这个组件。
4. 在mycpt文件夹新建cpt-test-text-option.vue，内容如下：
```vue
<template>
  <div>
    <el-form label-width="100px" size="mini">
      <el-form-item label="文本">
        <el-input v-model="attribute.text" show-alpha/>
      </el-form-item>
      <el-form-item label="color属性">
        <el-color-picker v-model="attribute.color" show-alpha/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-test-text-option",
  props: { attribute: Object },
}
</script>
```
5. 在/components/registerOption.js中的cptList注册cpt-test-text-option这个组件。
6. 打开options.js，在cptOptions中新增如下内容：
```javascript
const cptOptions = {
    ......
    test: {//分组标识，对应cpt-test-text.vue中的group
        name: '自定义测试',//分组名称
        icon: '',
        opened: true,//默认展开
        options: {
            'cpt-test-text-option': {
                attribute:{
                    text: '我是文本',
                    color: '#409eff',
                }
            }
        }
    }
}
```
完成上述步骤算是基本创建组件了，可以在设计界面看一下效果：
![](../.vuepress/public/exm/d1.png)
可见拉伸组件或修改属性组件内容会跟随改变。此时便可以在组件内对这些可变参数进行操作，
可将cpt-test-text.vue修改成如下内容：
```vue
<template>
  <div :style="{width: width+'px', height: height+'px', color: option.attribute.color}">
    {{option.attribute.text}}
  </div>
</template>

<script>
export default {
  name: "cpt-test-text",
  title: '我的组件',
  icon: '',//自行下载svg图标文件放在/src/assets/icon/目录下，icon对应文件名称(没有后缀)
  initWidth: 300,
  initHeight: 50,
  group:'test',
  props: {
    option: Object,
    width:{type:Number,default:300},
    height:{type:Number,default:200},
  },
}
</script>
```
效果如下：
![](../.vuepress/public/exm/d2.png)
宽高可设置为100%，这里只是演示可以这样干，部分第三方组件有设置100%的宽高视图不刷新现象，可如图设置宽高。
## 设置动态数据
1. 在option.js中cpt-test-text-option的配置修改成如下内容：
```javascript
const cptOptions = {
    test: {//分组标识，对应cpt-test-text.vue中的group
        name: '自定义测试',//分组名称
        icon: '',
        opened: true,//默认展开
        options: {
            'cpt-test-text-option': {
                cptDataForm: {
                    dataSource: 1,
                    dataText:'{"value":"我是文本"}',
                    poolTime: 0
                },
                attribute:{
                    color: '#409eff',
                }
            }
        }
    }
}

```
2. 将cpt-test-text.vue修改成以下内容
```vue
<template>
  <div :style="{width: width+'px', height: height+'px', color: option.attribute.color}">
    {{cptData.value}}
  </div>
</template>

<script>
import {getDataJson, pollingRefresh} from "@/utils/refreshCptData";

export default {
  name: "cpt-test-text",
  title: '我的组件',
  icon: '',//自行下载svg图标文件放在/src/assets/icon/目录下，icon对应文件名称(没有后缀)
  initWidth: 300,
  initHeight: 50,
  group:'test',
  props: {
    option: Object,
    width: Number,
    height: Number,
  },
  data(){
    return {
      cptData:'',
      uuid:null
    }
  },
  created() {
    this.uuid = require('uuid').v1();
    this.refreshCptData();
  },
  methods: {
    refreshCptData() {
      pollingRefresh(this.uuid, this.option.cptDataForm, this.loadData)//固定写法
    },
    loadData() {//设置数据
      getDataJson(this.option.cptDataForm).then(res => {
        //res为数据表单的静态数据或执行API返回的数据
        this.cptData = res;
      });
    }
  }
}
</script>

```
3. 将cpt-test-text-option.vue修改成以下内容：
```vue
<template>
  <div>
    <el-form label-width="100px" size="mini">
      <el-form-item label="color属性">
        <el-color-picker v-model="attribute.color" show-alpha/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "cpt-test-text-option",
  props: { attribute: Object },
}
</script>

```
至此完成自定义组件动态数据的配置。可在数据一栏设置，效果如下：
![](../.vuepress/public/exm/d3.png)

## 注意事项
* 组件命名避免与已有组件名称相同如:input、el-input... 建议使用个人/公司名称简称-分组名-组件名。
* 组件自定义属性表单命名为：组件名-option。
* 需要配置动态数据的组件必须设置uuid，否则不能清除数据表单轮询定时任务。
* 对视图不刷新的第三方组件可对option.attribute进行深度监听，可参考进度池和地图组件写法。
