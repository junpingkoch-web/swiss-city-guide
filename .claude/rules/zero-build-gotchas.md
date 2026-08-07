---
paths:
  - "script.js"
  - "style.css"
  - "data.js"
---

# 零构建家族共享的坑

这两个坑不是这个项目独有的，整个 sibling 工具家族用同一套零构建卡片模式都会踩到：

## `[hidden]` 属性被 CSS 覆盖
`.results { display: flex }`（或任何卡片容器类）会静默覆盖 `[hidden]` 属性默认的
`display:none`——author CSS 优先于 UA 样式表，跟 specificity/源码顺序无关。
必须显式加 `.results[hidden] { display: none; }` 这条规则，否则结果区块会在用户操作前就显示空卡片。
新增任何卡片容器类都要照此模式补一条。

## 脚本缓存
改完 `data.js`/`script.js` 后，浏览器会顽固缓存 `<script src>`——`location.reload(true)`
不会绕过这个缓存。验证改动要用带 `?v=N` 版本号的 URL 强制刷新。
