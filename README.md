# 我的英国漫游地图

一个无需构建步骤的静态旅行攻略网站。首页是一张卡通伦敦地图；已完成的大英博物馆页面包含官方三小时路线、22 个可交互藏品节点、真实图片和本地打卡进度。

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

- 路线依据：[Three hours at the Museum](https://www.britishmuseum.org/visit/object-trails/three-hours-museum)
- 楼层参考：[British Museum map](https://www.britishmuseum.org/visit/museum-map)
- 每件藏品的事实来源链接显示在详情卡内。
- 图片来自 Wikimedia Commons，已本地压缩。每张图的作者、原始文件与开放许可证显示在图片说明和“图片与授权”面板中。
- 本站按个人非商业用途制作；若未来加入广告、付费服务或商业推广，应重新审核内容与图片授权。
