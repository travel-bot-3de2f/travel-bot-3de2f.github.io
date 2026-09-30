# 我的英国漫游地图

一个无需构建步骤的静态旅行攻略网站。首页是一张卡通伦敦地图；大英博物馆页面默认展示从上午逛到下午的“世界文明主线”，包含按馆方 Ground / Upper / Lower 结构重绘的手账地图、12 个可交互真实看点与独立打卡进度。原来的馆方三小时路线完整保留为第二选择，仍含 22 个藏品节点。

## 本地预览

```bash
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/`。站点只使用原生 HTML、CSS 和 JavaScript，没有后端、依赖安装或外部运行时请求。

## GitHub Pages

仓库名称符合用户主页格式，页面资源也全部使用相对路径。将 `main` 分支根目录设为 GitHub Pages 来源后，站点地址为：

`https://travel-bot-3de2f.github.io/`

不需要自定义域名或 `CNAME`。

## 内容与图片

- 默认路线按大中庭 → 古埃及 → 亚述 → 帕特农 → 木乃伊 → 中国馆组织；展厅位置参考：[British Museum map](https://www.britishmuseum.org/visit/museum-map)
- 第二路线依据：[Three hours at the Museum](https://www.britishmuseum.org/visit/object-trails/three-hours-museum)
- 手账地图以 SVG/CSS 原创重绘：Ground 图内部保留 Level 0、1、2 及 Room 33/33b/95 的真实关系；Upper 与 Lower 分图显示。地图同时保留主要展厅轮廓、大中庭环廊、主入口和西／北／东／南楼梯，并以相同字母对应上下层换层节点。它不是精确室内导航，也没有直接使用馆方地图图像。
- 每件藏品的事实来源链接显示在详情卡内。
- 图片来自 Wikimedia Commons，已本地压缩。每张图的作者、原始文件与开放许可证显示在图片说明和“图片与授权”面板中。
- 本站按个人非商业用途制作；若未来加入广告、付费服务或商业推广，应重新审核内容与图片授权。
