---
title: 解决vercel部署的twikoo评论系统国内无法加载的情况
cover: 'https://s1.ax1x.com/2022/09/19/x9xwXd.jpg'
tags:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - vercel
keywords:
  - 前端
  - HTML
  - Hexo
  - Butterfly 
categories: 前端 
abbrlink: 22919
date: 2022-09-19 18:31:39 
swiper_index: 8
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}由于vercel被墙，通过vercel部署的twikoo评论系统在国内会出现无法加载评论，云函数报错的问题，故出此教程。教程使用的域名等已腾讯云为例，万变不离其宗。
{% endnote %}

##教程
1. 打开vercel，进入你的twikoo项目。（由于被墙，大概率需要科学上网）
   ![](https://s1.ax1x.com/2022/09/19/xCSAiV.jpg)
2. 进入 `Setting` -> `Domains` ，在输入框中输入以创建你的子域名，如图所示，前缀随意，但建议使用twikoo方便管理。
   ![](https://s1.ax1x.com/2022/09/19/xCSFI0.jpg)
3. 子域名添加完成后会报错，如下图。不要关闭此页，下面的值一会要用。（我已经添加过子域名，所以图中的子域名为案例）
   ![](https://s1.ax1x.com/2022/09/19/xCSEGT.jpg)
4. 现在进入你的域名管理页面，以腾讯云为例。进入`我的域名`，选择你的域名，点击解析。
   ![](https://s1.ax1x.com/2022/09/19/xCpWcD.jpg)
5. 进入解析页面，点击添加记录；主机记录为刚刚vercel中`Name`，记录类型为`Type`，记录值为`Value`,依次填入后点击确认。
   ![](https://s1.ax1x.com/2022/09/19/xCpR1O.jpg)
6. 此时返回刚刚的vercel页面，会发现子域名已经没有报错了，如果没有反应可点击`Refresh`手动刷新。
   ![](https://s1.ax1x.com/2022/09/19/xC9qaR.jpg)
7. 然后在浏览器中输入你创建的子域名，确认云函数已经可以正常运行了。
   ![](https://s1.ax1x.com/2022/09/19/xC9LI1.jpg)
8. 最后，进入主题配置文件，找到`twikoo`的配置代码，并做如下修改。（这里以butterfly主题为例）
```diff
twikoo:
- envId: '你原来配置的vercel域名'
+ envId: 'https://twikoo.dadio.cc/' #这里修改为你刚刚创建的子域名
  region: 'AWS N. Virginia (us-east-1)'
  visitor: true
  option:
```

* 大功告成，现在上传你的代码看看是否生效吧！ 

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
教程可能有不足或遗漏的地方，欢迎在评论区留言指正、提供建议。
{% endnote %}