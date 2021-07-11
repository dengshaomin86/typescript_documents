# 配置

## 安装依赖

- 1. npm init -y
- 2. npm i -D webpack webpack-cli typescript ts-loader
- 3. html 生成插件 npm i -D html-webpack-plugin
- 4. webpack 开发服务器 npm i -D webpack-dev-server
- 5. 清除 dist 打包目录 npm i -D clean-webpack-plugin
- 6. 安装 babel 转换插件 npm i -D @babel/core @babel/preset-env babel-loader core-js
  - core-js 模拟一个浏览器环境，主要用于处理 ie Promise 兼容。corejs 内部实现了 Promise

## 安装 typedoc 文档插件

- npm i -D typedoc
- 配置：

```
// typedoc.json
{
  "entryPoints": ["src/app.ts", "src/user.ts"],
  "out": "docs"
}
```

- 安装生成 markdown 插件：npm i -D typedoc-plugin-markdown
- 配置运行命令

```
// package.json
scripts: {
  "doc": "typedoc --plugin none", // 生成 html 文档
  "doc:md": "typedoc --out docs/md" // 生成 markdown 文档
}
```
