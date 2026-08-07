# Project: swiss-city-guide（瑞士城市旅行指南）

零构建静态站，三语。跟 alpine-route-planner 是刻意分开的两个仓库（产品定位不同：这个是通用城市指南，
不是湖泊徒步+轮渡规划）。用户选城市 + 出行风格（悠闲/紧凑）+ 同行人群（情侣/长辈/家庭），应用拉取
实时天气（Open-Meteo），渲染穿衣建议、嵌入式 Leaflet/OSM 地图（emoji 标记，免 API key）、按风格+人群
自适应打分筛选的景点/美食、机场/本地交通指引，以及一张莫兰迪风格手绘 SVG 行程海报。

## Commands
- 无构建/测试命令
- 本地预览：共享配置 `C:\Users\junpi\.claude\.claude\launch.json`，端口 5505

## 数据模型（两层，script.js 拼进同一个下拉框）
- `window.SWISS_CITIES` — 6 个"旗舰"城市（Zürich/Genève/Basel/Bern/Luzern/Lugano），
  每个 6-7 个景点 + 4 个美食，各自打 `tags: [couple/elders/family, relaxed/compact]` 和 `difficulty`
  供自适应打分函数使用
- `window.SWISS_CANTON_CITIES` — 21 个轻量条目，补满全 26 州覆盖。每个有 `light: true` 标记、
  `blurb`、单个 `topSight`、单个 `food`、合并的 `transitNote`（不是分开的 airport/localTransit）。
  `script.js` 的 `renderAll()` 靠 `city.light` 分支跳过打分逻辑，走专门的 `#cityBlurb` 展示位

**加新的轻量州条目 / 加深已有旗舰城市内容时，严格照两套 schema 各自的字段走**——
不要给轻量条目加 `tags`/`difficulty`（打分函数已经对缺失做了保护），也不要漏掉 `light: true`，
否则 `renderAll()` 的分支逻辑会出错。

## 文件结构
- `poster.js` — **跟 alpine-route-planner 共享的同一份文件**（手绘 SVG 海报 + PNG 导出），各自维护一份拷贝

## 已知的坑
- Leaflet 1.9.4 + OSM 瓦片走 CDN（unpkg），免 API key，符合零构建定位
- `fitBounds` 必须排除机场标记参与缩放计算——包含进去会导致地图缩得太远，城市中心区域的标记群变得难以辨认。机场依然有标记，只是不参与决定缩放级别
- 零构建家族共享的两个坑（`[hidden]` 被 CSS 覆盖、脚本缓存）见 `.claude/rules/zero-build-gotchas.md`

## 部署流程
- 改完直接 commit + push 到 `main`
- Commit 作者身份：`Junping Koch <junping.koch@gmail.com>`，仓库单独设置

## 持续维护
每次你需要重复纠正 Claude 同一件事三次以上，就把结论补进这个文件对应章节。
