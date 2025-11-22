[🇷🇺 Русский](README.md) | [🇬🇧 English](README.en.md) | **🇨🇳 中文** | [🇸🇦 العربية](README.ar.md)

---

# 焊接社区 — Cloude AI

[![Documentation](https://img.shields.io/badge/docs-MkDocs-blue)](https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/)
[![License](https://img.shields.io/badge/license-MIT-green)](docs/LICENSE.md)

欢迎来到焊接爱好者社区仓库！这是一个供科学家和实践专家分享经验、理论、方法、工艺参数和焊接领域实际案例的平台。

## 🎯 关于项目

我们的目标是整合知识，使其在车间、实验室和生产中得到应用。该项目是使用 MkDocs 和 Material 主题构建的文档网站。

### 主题方向

- 🔬 电弧物理和传输过程
- ⚗️ 焊接接头的微观结构和冶金
- ⚙️ 工艺参数、稳定性和质量控制
- 🤖 自动化、传感器、计算机视觉、模型
- 🛠️ 实践：边缘准备、填充材料、设备、安全

## 📚 文档

完整文档可在网站上查看：[https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/](https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/)

### 🌍 多语言支持

该网站支持四种语言，可在页面标题中切换：
- 🇷🇺 **俄语**（默认）
- 🇬🇧 **英语**
- 🇨🇳 **中文**
- 🇸🇦 **阿拉伯语**

### 文档部分

- **主页** — 介绍和项目概述
- **快速入门** — 从哪里开始
- **理论** — 焊接理论基础
- **实践** — 设备、参数、设置
- **材料** — 项目文件和图像
- **故障排除** — 常见问题及解决方案
- **文章和经验** — 社区出版物
- **社区** — 如何贡献

## 🚀 快速入门

### 先决条件

- Python 3.8 或更高版本
- pip（Python 包管理器）

### 安装

1. 克隆仓库：
```bash
git clone https://github.com/NickScherbakov/welding-techniques-by-Cloude-AI.git
cd welding-techniques-by-Cloude-AI
```

2. 安装依赖项：
```bash
pip install -r requirements.txt
```

### 本地预览

运行本地开发服务器：
```bash
mkdocs serve
```

文档将在以下地址可用：[http://127.0.0.1:8000](http://127.0.0.1:8000)

### 构建文档

创建网站的静态版本：
```bash
mkdocs build
```

结果将保存在 `site/` 目录中。

## 📁 仓库结构

```
welding-techniques-by-Cloude-AI/
├── docs/                       # 文档源文件
│   ├── index.md               # 主页（俄语）
│   ├── en/                    # 英文版文档
│   ├── zh/                    # 中文版文档
│   ├── ar/                    # 阿拉伯语版文档
│   ├── welding_quick_start.md # 快速入门
│   ├── welding_theory.md      # 理论
│   ├── welding_equipment.md   # 设备
│   ├── welding_params.md      # 参数
│   ├── welding_setup_guide.md # 设置指南
│   ├── welding_troubleshooting.md # 故障排除
│   ├── articles/              # 社区文章
│   ├── css/                   # 样式
│   ├── js/                    # JavaScript 文件
│   ├── contributing.md        # 贡献指南
│   ├── code_of_conduct.md     # 行为准则
│   └── LICENSE.md             # 许可证
├── .github/                    # GitHub Actions 和配置
├── .vscode/                    # VS Code 设置
├── mkdocs.yml                 # MkDocs 配置
├── requirements.txt           # Python 依赖项
└── README.md                  # 此文件
```

## 🤝 如何贡献

我们欢迎社区的贡献！如果您有想要分享的材料：

1. 查看[贡献指南](docs/contributing.md)
2. 研究[材料模板](docs/submit_guidelines.md)
3. 遵守[行为准则](docs/code_of_conduct.md)
4. 创建一个包含文章建议的 Issue 或包含更改的 Pull Request

### 贡献流程

1. Fork 仓库
2. 为您的更改创建分支（`git checkout -b feature/amazing-feature`）
3. 进行更改并提交（`git commit -m 'Add some amazing feature'`）
4. 将更改推送到您的 fork（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

## 🛠️ 技术

- [MkDocs](https://www.mkdocs.org/) — 静态网站生成器
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) — MkDocs 的现代主题
- [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n) — 多语言支持
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/) — Markdown 扩展
- [KaTeX](https://katex.org/) — 数学公式渲染

## 📄 许可证

该项目根据 MIT 许可证分发。详情请参见 [LICENSE.md](docs/LICENSE.md)。

## 📞 联系方式

- GitHub: [NickScherbakov/welding-techniques-by-Cloude-AI](https://github.com/NickScherbakov/welding-techniques-by-Cloude-AI)
- 网站: [https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/](https://nickscherbakov.github.io/welding-techniques-by-Cloude-AI/)
- Issues: [建议文章或报告问题](https://github.com/NickScherbakov/welding-techniques-by-Cloude-AI/issues)

---

**加入我们的社区！** 我们可以共同使焊接知识在实践中变得易于获取和应用。🔥⚡
