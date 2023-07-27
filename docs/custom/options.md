# 配置项

options.js：

| 字段     | 说明         | 是否必须 | 类型       | 默认值   |
|--------|------------|------|----------|-------|
| name   | 组件名称       | 是    | String   |     |
| icon   | 组件图标       | 否    | String   | default |
| cptKey | 组件唯一标识     | 是    | String   |       |
| cptOptionKey | 组件配置表单标识 | 否 | String  |   组件名-option  |
| width  | 组件默认宽度     | 是    | Number   | 300   |
| height | 组件默认高度     | 是    | Number   | 200   |
| option | 组件配置项      | 是    | OptionObj |       |

图标存放目录(svg格式)：/src/assets/icon/components/

OptionObj：

| 字段          | 说明     | 是否必须 | 类型          | 默认值 |
|-------------|--------|------|-------------|-----|
| attribute   | 组件属性   | 是    | JSONObject  |     |
| cptDataForm | 组件数据配置 | 否    | CptDataForm |     |
| interaction | 组件交互配置 | 否    | Interaction |     |

CptDataForm:

| 字段          | 说明      | 是否必须 | 类型         | 默认值 |
|-------------|---------|------|------------|--|
| dataText | 静态数据    | 是    | JSONString |  |
| dataSource | 默认数据源   | 否    | Number     | 1 |
| pollTime | 默认轮询时间  | 否    | Number     | 0 |
| apiUrl | 默认API地址 | 否    | String     |  |
| sql | 默认SQL   | 否    | String     |  |


Interaction:

| 字段          | 说明    | 是否必须 | 类型      | 默认值   | 备注          |
|-------------|-------|------|---------|-------|-------------|
| intType | 显示类型  | 否    | String  |       | 为'none'时不显示 |
| multi | 是否多选项 | 否    | Boolean | false | false       |