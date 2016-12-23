# Redis项目
Redis项目由WeHack成员共同开发。


### [ESLint](http://eslint.org/) 配置

# 使用 ESLint 进行代码风格检测

需要安装对应使用的编辑器的 ESLint 插件

1. Sublime - [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)
2. Atom - [linter-eslint](https://github.com/AtomLinter/linter-eslint)

### [EditorConfig](http://editorconfig.org/) 配置

#使用 editorConfig 保证不同编辑器代码风格一致

请根据 [Plugin](http://editorconfig.org/#download) 文档安装对应编辑器插件


##环境搭建
1.node.js
如未安装node，需要下载安装(https://nodejs.org/)

2.npm
安装node.js后需更新到最新版本，执行：npm install npm -g


#运行

``` bash   先进到项目文件
# 安装依赖
npm install

# 本地运行，在localhost:8080可查看并调试我们的项目
npm run dev

# 打包
npm run build
```



#########################
#通过创建各自的分支来协同开发
  分支命名规则为：f_1.0_wedis_xxx(这里是姓名拼音首字母，比如说我的分支就是：f_1.0_wedis_pzs)

#UI工程师如何
UI工程师在wedis-frontend => src => pages 目录下找到自己负责的模块，在各自的模块下开发。
（舒颖在admin.vue文件下开发，超人在login.vue文件下开发，建文在redis-server-manager.vue文件下开发,
 对应的页面路由是'/admin','/login','/redis-server-manager'）
##关于vue文件解释
  vue文件内<template></template>中写html; <style></style>中写css;
  如果没有运行项目，需要按照上面的命令运行项目，查看效果。

