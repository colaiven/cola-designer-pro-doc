# 组件

## 边框
## 按钮
## 文本
## 滚动文字
## 图片
## 轮播图
## 装饰
## iframe
## 静态表格
## 滚动表格
## 当前时间
## 视频
## 音频
## 天气

天气组件可显示当前城市或指定城市天气图标，默认数据来源由 [心知天气](https://www.seniverse.com/) 提供，交付的软件使用个人注册的免费版，私有化部署时请购买官方套餐并更换API-KEY。

![login.png](../.vuepress/public/start/components/c1.png)

配置栏API-KEY未填写时，则使用后台jar包内置的APIKEY(此为免费版，api请求额度有限)，可以在后端application-prod.yml配置中添加以下内容并重启jar包。若前端配置栏填写了API-KEY则优先使用。

```yaml
seniverse: 
  key: '您的key'
```

省份和城市默认未选择，未选择时使用IP进行定位。鼠标放置在天气图片上时会显示具体的省份和城市。

ps:

心知天气API文档：[https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t](https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t)

心知天气价格：[https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t](https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t)


## 选项卡
## 输入框
## 下拉框
## 日期选择
## 跳转
## 导航器
## 数值文本
## 统计指标
## 数字翻牌器
## 计时器
## 增长指标
## 进度指标
## 链接卡片
## 柱状图
## 堆积柱状图
## 区间柱状图
## 排行榜
## 3D柱状图
## 基础饼图
## 玫瑰图
## 环形饼图
## 同心环图
## 动态环形图
## 聚环图
## 3D饼图
## 水位图
## 折线图
## 面积图
## 折线柱状图
## 双Y轴折线柱状图
## 多Y轴折线柱状图
## 堆叠矩阵图
## k线图
## 仪表盘
## 渐变仪表盘
## 进度池
## 环形进度
## 散点图
## 气泡图
## 雷达图
## 关系图
## 漏斗图
## 渐变地图
## 飞线地图

| 字段 | 说明      | 类型 |
|----|---------|----|
|  lines  | 飞线数据    |    |
|  bars  | 地图覆盖物数据 |    |
|  mapData  | 地图色块数据  |    |


## 3D地图
## 3D飞线地图
## 模型
## 机房场景
## 告警图
## 线路状态
## 状态图
