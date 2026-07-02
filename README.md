# 常州工学院人工智能协会 · 招新宣传页

> **课程**：Web 前端开发实训 / 软件工程实践  
> **提交日期**：2025 年 7 月  
> **项目类型**：单页滚动招新网站 (SPA)

---

## 一、项目介绍

本项目是为常州工学院人工智能协会（CZU AI Association）设计并开发的招新宣传单页网站。页面以单页滚动形式呈现协会的基本信息、核心优势、技术方向、部门介绍、成果展示、研究方向投票、AI 知识小测验以及在线报名表单，旨在吸引全校各专业同学了解并加入协会。

**核心交互功能：**
- 协会名称打字机动画（首屏）
- 深浅主题一键切换（localStorage 持久化）
- 技术方向 3D 翻转卡片（点击翻转查看详细路线）
- 研究方向投票（含实时百分比结果）
- AI 知识小测验（5 道单选题 + 结果弹窗）
- 在线报名表单（表单验证 + 提交成功弹窗）
- Intersection Observer 滚动淡入动画

---

## 二、技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 核心框架 | React | 18.3.1 |
| 类型系统 | TypeScript | 5.6.3 |
| 构建工具 | Vite | 5.4.14 |
| 样式方案 | CSS（自定义属性 + BEM 命名） | — |
| 包管理 | npm | 10.x |
| 代码检查 | oxlint | 0.15.15 |
| 运行环境 | Node.js | ≥ 18.0.0 |

**选型理由：**
- **Vite** 替代传统的 webpack / CRA，冷启动 < 1 秒，HMR 即时生效
- **TypeScript** 提供静态类型检查，减少运行时错误，适合小组协作
- **React 18** 稳定生态，丰富的社区资源和教程
- **零 UI 框架依赖** — 纯 CSS 手写样式，降低学习成本和依赖体积

---

## 三、环境要求

### 硬件要求
- 任何能运行 VS Code + 浏览器的电脑即可（无 GPU 要求）

### 软件要求

| 软件 | 最低版本 | 推荐版本 | 说明 |
|------|----------|----------|------|
| Node.js | 18.0.0 LTS | 20.x LTS | 低于 18 会拒绝安装（engine-strict） |
| npm | 9.x | 10.x | 随 Node.js 附带 |
| Git | 2.x | 2.40+ | 代码版本管理 |
| 浏览器 | Chrome 90+ / Edge 90+ | 最新版 | 开发调试建议 Chrome |

### 环境检查命令

```bash
node -v   # 应输出 v18.x 或以上
npm -v    # 应输出 9.x 或以上
git --version  # 应输出 2.x 或以上
```

---

## 四、启动步骤

### 4.1 克隆项目

```bash
git clone <仓库地址>
cd czu-ai-association
```

### 4.2 安装依赖

```bash
npm install
```

> **注意**：项目已配置 `.npmrc` 自动使用国内镜像源（npmmirror.com），无需额外设置。
> 若在实验室电脑上安装失败，检查 Node.js 版本是否 ≥ 18。

### 4.3 启动开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:5173`。修改任意 `.tsx` / `.css` 文件保存后，浏览器即时热更新，无需手动刷新。

### 4.4 生产构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录，可直接部署到 GitHub Pages、Vercel、Netlify 等平台。

### 4.5 预览生产版本

```bash
npm run preview
```

### 可用脚本一览

| 脚本 | 作用 |
|------|------|
| `npm run dev` | 启动 Vite 开发服务器（热更新） |
| `npm run build` | TypeScript 类型检查 + Vite 生产打包 |
| `npm run preview` | 本地预览生产构建产物 |
| `npm run lint` | 运行 oxlint 静态代码检查 |

---

## 五、目录结构

```
czu-ai-association/
├── index.html                        # Vite 入口 HTML（含 SEO meta）
├── vite.config.ts                    # Vite 配置（别名、HMR、分包）
├── tsconfig.json                     # TS 项目引用根配置
├── tsconfig.app.json                 # 应用端 TS 配置
├── tsconfig.node.json                # Node 端 TS 配置（vite.config 用）
├── package.json                      # 依赖 & 脚本
├── .npmrc                            # npm 配置（镜像源、严格引擎检查）
├── .nvmrc                            # Node 版本声明（nvm 用户自动切换）
│
├── public/                           # 静态资源（原样输出，不经编译）
│   ├── favicon.svg
│   └── icons.svg
│
└── src/                              # 源代码根目录
    ├── main.tsx                      # 应用入口 → createRoot + 挂载
    ├── App.tsx                       # 根组件（主题管理 + 全站页面编排）
    │
    ├── data/                         # 全站数据配置（类型即数据）
    │   ├── index.ts                  # 统一导出入口
    │   └── websiteData.ts            # 所有类型定义 + 数据常量
    │
    ├── components/                   # 组件（按页面区块划分子目录）
    │   ├── layout/                   # 布局类 — 成员 A
    │   │   ├── Header.tsx            # 固定顶部导航（Logo + 链接 + 主题切换）
    │   │   └── Footer.tsx            # 页脚（版权 + 座右铭）
    │   ├── hero/                     # 展示类 — 成员 B
    │   │   └── Hero.tsx              # 首屏（打字机动画 + CTA 按钮）
    │   ├── about/                    # 展示类 — 成员 B
    │   │   └── About.tsx             # 协会介绍（多段文本）
    │   ├── advantages/               # 展示类 — 成员 B
    │   │   └── AdvantageCards.tsx    # 核心优势卡片（4 张）
    │   ├── flipcards/                # 展示类 — 成员 C
    │   │   └── TechFlipCards.tsx     # 技术方向 3D 翻转卡片
    │   ├── departments/              # 展示类 — 成员 C
    │   │   └── Departments.tsx       # 部门介绍（4 部门网格）
    │   ├── achievements/             # 展示类 — 成员 C
    │   │   └── Achievements.tsx      # 成果展示列表
    │   ├── vote/                     # 交互类 — 成员 D
    │   │   └── VoteSection.tsx       # 研究方向投票（含结果展示）
    │   ├── quiz/                     # 交互类 — 成员 D
    │   │   └── QuizSection.tsx       # AI 知识小测验（5 题 + 结果弹窗）
    │   ├── join/                     # 交互类 — 成员 D
    │   │   └── JoinForm.tsx          # 在线报名表单
    │   ├── modal/                    # 通用 — 全局复用
    │   │   └── ResultModal.tsx       # 操作结果弹窗
    │   └── ui/                       # 可复用 UI 原子组件
    │       ├── Button.tsx            # 通用按钮（primary/secondary/outline）
    │       ├── SectionTitle.tsx      # 区块标题（含副标题）
    │       ├── ProgressBar.tsx       # 进度条（当前/总数 + 百分比填充）
    │       ├── Modal.tsx             # 通用弹窗（遮罩层 + ESC 关闭）
    │       ├── FlipCard.tsx          # 3D 翻转卡片
    │       ├── VoteOptionCard.tsx    # 投票选项卡片
    │       ├── QuizOption.tsx        # 测验选项（正确/错误/已选三态）
    │       └── QuizCard.tsx          # 单道测验题卡片
    │
    ├── hooks/                        # 自定义 React Hooks
    │   └── index.ts                  # useTheme（主题）+ useScrollFade（滚入动画）
    ├── styles/                       # 全局样式
    │   └── globals.css               # CSS 变量 + 重置 + 动画基础
    ├── utils/                        # 工具函数
    │   └── index.ts                  # typewriter / debounce / currentYear
    └── assets/                       # 编译时资源（通过 import 引用）
        ├── images/
        └── fonts/
```

---

## 六、功能说明

### 6.1 导航栏（Header）
- 固定在页面顶部，滚动超过 50px 后添加阴影（sticky 效果）
- 7 个导航链接点击平滑滚动到对应区块
- 深浅主题切换按钮（☀️ / 🌙），状态持久化到 localStorage

### 6.2 首屏展示（Hero）
- 协会全称打字机动画（逐字显示 + 闪烁光标）
- 引入 Intersection Observer 实现滚动淡入
- "立即报名" CTA 按钮跳转到报名表单区

### 6.3 协会介绍（About）
- 3 段文字介绍协会背景、活动内容、招新理念

### 6.4 核心优势（AdvantageCards）
- 4 张卡片网格布局：项目驱动学习、导师引路成长、企业合作资源、竞赛成果转化
- 每张卡片含 emoji 图标、标题、高亮关键词、详细描述

### 6.5 技术方向（TechFlipCards）
- 3 张 3D 翻转卡片：机器学习入门、深度学习实战、AI 应用开发
- 正面：标题 + 一句话简介
- 背面：详细学习路线 + 推荐资源（点击 / 键盘 Enter 翻转）

### 6.6 部门介绍（Departments）
- 4 个部门卡片：技术部、运营部、宣传部、外联部

### 6.7 成果展示（Achievements）
- 5 条竞赛获奖与成果列表

### 6.8 研究方向投票（VoteSection）
- 4 个投票选项：LLM、计算机视觉、NLP、AI + 行业应用
- 选择后提交，显示实时百分比进度条
- 支持"重新投票"

### 6.9 AI 知识小测验（QuizSection）
- 5 道单选题，每题 4 个选项
- 进度条显示当前进度
- 提交答案后显示对错标记 + 文字解析
- 答题完成弹窗显示得分 + 评语（满分 / 及格 / 继续加油）

### 6.10 报名表单（JoinForm）
- 7 个字段：姓名、学号、学院、手机号、QQ、意向部门、自我介绍
- HTML5 表单验证（required）
- 提交后弹出成功提示弹窗（ESC / 点击遮罩 / 按钮关闭）

---

## 七、小组分工

| 成员 | 负责模块 | 具体文件 |
|------|----------|----------|
| **成员 A** | 布局组件 + 工程配置 | `layout/Header.tsx`, `layout/Footer.tsx`, `vite.config.ts`, 全局样式 `globals.css` |
| **成员 B** | 首屏 + 介绍 + 优势卡片 | `hero/Hero.tsx`, `about/About.tsx`, `advantages/AdvantageCards.tsx` |
| **成员 C** | 翻转卡片 + 部门 + 成果 | `flipcards/TechFlipCards.tsx`, `departments/Departments.tsx`, `achievements/Achievements.tsx` |
| **成员 D** | 投票 + 测验 + 报名表单 | `vote/VoteSection.tsx`, `quiz/QuizSection.tsx`, `join/JoinForm.tsx`, `modal/ResultModal.tsx` |

**协作规范：**
1. 每位成员在独立分支上开发，完成后提交 Pull Request
2. 公共数据统一在 `src/data/websiteData.ts` 中维护，修改需全组知晓
3. 可复用组件 `src/components/ui/*` 由发现复用机会的成员提出，全组 Review 后合并
4. 提交前运行 `npm run build` 确保 TypeScript 零错误

---

## 八、常见问题排查

### Q1: npm install 报依赖版本不兼容
**原因**：Node.js 版本低于 18，或 npm 版本过旧。  
**排查**：
```bash
node -v   # 确认 ≥ 18.0.0
npm -v    # 确认 ≥ 9.0.0
```
**修复**：
- 使用 nvm-windows 切换 Node 版本：`nvm install 20 && nvm use 20`
- 删除 `node_modules` 和 `package-lock.json` 后重新安装
- 检查 `.npmrc` 是否存在且 `registry` 指向 npmmirror

### Q2: 修改代码后浏览器不刷新（HMR 失效）
**原因**：Windows 文件系统监听依赖 `fs.watch`（不可靠），或 VS Code 的原子保存模式。  
**修复**：
- 已在 `vite.config.ts` 中设置 `watch.usePolling: true`（轮询模式）
- 若仍不生效，降低轮询间隔：`watch.interval: 100`
- VS Code 设置：`"files.atomicSave": false`（仅当问题持续时）

### Q3: npm run build 报模块路径解析错误
**原因**：路径别名在 `vite.config.ts` 和 `tsconfig.app.json` 中不一致，或 `tsconfig.node.json` 使用了过严的模块解析模式。  
**排查**：
```bash
npx tsc -b    # 先单独跑类型检查，看具体哪个文件报错
```
**修复**：
- 确认 `vite.config.ts` 的 `resolve.alias` 与 `tsconfig.app.json` 的 `paths` 一一对应
- 确认 `tsconfig.node.json` 的 `module` 为 `ESNext`（非 `nodenext`）
- 确认所有 `import` 路径使用 `@components`、`@data` 等别名而非相对路径 `../../`

### Q4: 端口被占用
**原因**：之前的 Vite 进程未关闭。  
**修复**：
```bash
# Windows 终端
netstat -ano | findstr :5173
taskkill /PID <进程ID> /F
```
或 Vite 会自动尝试下一个可用端口（5174, 5175...）。
