# 配置项

options.js：

| 字段     | 说明     | 是否必须 | 类型        | 默认值     | 备注                             |
|--------|--------|------|-----------|---------|--------------------------------|
| name   | 组件名称   | 是    | String    |         |                                |
| icon   | 组件图标   | 否    | String    | default | 图标存放目录(svg格式)：/src/assets/icon |
| cptKey | 组件唯一标识 | 是 | String    |         |  |
| width  | 组件默认宽度 | 是 | Number    | 300     |  |
| height | 组件默认高度 | 是 | Number    | 200     |  |
| option | 组件配置项  | 是 | OptionObj |         |  |


OptionObj：