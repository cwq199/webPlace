### wdw-music-一个基于vue的高仿网易云音乐网站


#### 前言

本项目是基于vue的仿网易云客户端的网页版音乐播放器


#### 项目简介

本项目后端接口是Github Binaryify的开源项目（[后端仓库地址](https://github.com/Binaryify/NeteaseCloudMusicApi)），接口文档直接在百度搜索“网易云音乐API”作者是Binaryify。

本项目前端均是本人独立自主开发，所用技术栈：Vue全家桶+elementUi+axios。

因为网页渲染可能会比较慢，图片加载请耐心等候，或者刷新

## 快速启动

`当前项目目录下,路径输入cmd进入命令行`

当前目录终端```
npm install     # 安装项目所需的依赖(如果速度过慢, 可以尝试cnpm或者使用代理)
npm run serve   #启动项目服务
```

浏览器打开输入http://localhost:8080网站就能打开哟(注意查看main.js的路径查看接口地址，localhost:3000是后端下载到本地开启，使用云端的api的话需要去配置哦，配置目录node_modules>@vue>cli-service>lib>option.js,找到devServer,修改为
      devServer: {
        disableHostCheck: true,
        proxy: { //解决跨域问题
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
                target: 'https://autumnfish.cn/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        port: 8081
    })
不要直接使用云端地址哦，不然会有跨域问题。

 **API安装步骤：** 

1. git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

2. npm install

3.cd api文件夹

4.node app.js





#### 关于本项目

项目下一步方向：实现其他的小功能，封装请求，增加二维码登录等操作

项目中会遇到的坑和bug只要发现都有填和修复
