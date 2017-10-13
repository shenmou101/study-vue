## vue项目说明

### 目录结构

- css 样式文件夹
- js 脚本文件
- img 图片文件
- data 异步接口数据
- index.html 首页
- app.js 服务器

```
    1.项目有三个页面，因此创建三个组件实现它们
    2.根据路由实现对组件的切换，实现对页面的切换
    3.首先使用2.0版本，遇到兼容性问题，再切换两个版本
```

### Component 元素
- 组件自定义元素：切换渲染的组件，是万能组件元素，可渲染任何组件，具体渲染哪个组件要通过设置is属性实现
- 如果让is属性值变成js环境，我们就可以使用变量，就可以动态切换
- 通过v-bind:指令，将属性值变成js环境


### 路由
- 前端的路由的实现原理，是监听hash的改变
- Hash的改变会触发hashchange事件，因此我们可以在hashchange的回调中捕获新的hash