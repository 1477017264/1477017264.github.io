---
title: Hexo添加访客信息和地图
cover: 'https://s1.ax1x.com/2022/05/10/OtR3QO.jpg'
tags:
  - 前端
  - HTML
  - Hexo
  - Butterfly
keywords:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - IP
  - 归属地
  - 访客地图
categories: 博客魔改记录
abbrlink: 22511
date: 2022-05-10 16:02:39
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}此教程是访客IP信息卡片和访客地图的魔改版本，访客信息原教程可以参考下面这篇教程。
{% endnote %}
{% link Hexo 博客搭建 与 美化教程, https://zykj.js.org/posts/e55bad60/, https://cdn.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png %}

##教程
{% folding 访客信息侧边栏卡片预览 %}
![](https://s1.ax1x.com/2022/05/10/OtR1SK.jpg)
{% endfolding %}

###访客信息部分
1. 在`[Blogroot]\themes\butterfly\layout\includes\widget\`下创建`card_ip.pug`文件，并写入以下内容：
```jade
.card-widget.card-ip
    .card-content
    .item-headline
        i.fa-solid.fa-location-dot(aria-hidden="true")
        span= _p('aside.card_ip')
    .ip_content
        = _p('欢迎来自 ')
        span(class="p")= _p('未知区域')
        = _p(' 的小伙伴')
        br
        = _p('访问IP为： ')
        span(class="p")= _p('未知IP')
        br
        = _p('浏览器版本：')
        span(class="p")= _p('未知浏览器')
```

2. 在`[Blogroot]\themes\butterfly\layout\includes\widget\index.pug`中适当位置添加如下内容：
```diff
    .sticky_layout
      if showToc
        include ./card_post_toc.pug
      !=partial('includes/widget/card_hitokoto', {}, {cache: true})
 +    !=partial('includes/widget/card_ip', {}, {cache: true})
      !=partial('includes/widget/card_recent_post', {}, {cache: true})
      !=partial('includes/widget/card_ad', {}, {cache: true})
      !=partial('includes/widget/card_newest_comment', {}, {cache: true})
      !=partial('includes/widget/card_categories', {}, {cache: true})
      !=partial('includes/widget/card_tags', {}, {cache: true})
```

3. 编辑`[Blogroot]\themes\butterfly\languages\zh-CN.yml`文件，在 `aside`处添加`card_ip: `访问用户信息：
```diff
aside:
  articles: 文章
  tags: 标签
  …………
  card_toc: 目录
+ card_ip: 访问用户信息
```
4. 在主题配置文件`_config.butterfly.yml`的`aside`处添加`card_ip`配置项：
```diff
aside:
  …………
  card_hitokoto:
    enable: true
+ card_ip:
+   enable: true
```

5. 在`[Blogroot]\themes\butterfly\source\js\`下创建`ip_content.js`，并添加如下内容：
```javascript
//获取当前IP地址和浏览器标识
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var ip_content = document.querySelector(".ip_content");

if (ip_content != null && typeof (returnCitySN) != undefined) {
    ip_content.innerHTML = '欢迎来自 <span class="p">' + returnCitySN["cname"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p'>" + returnCitySN["cip"] + "</span><br>浏览器版本：<span class='p'>" + getBrowserInfo() + '</span>';
}
```
  
6. 在主题文件`_config.butterfly.yml`的`inject`处引入以下内容：
```diff
bottom:
+ - <script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>
+ - <script src="/js/ip_content.js"></script>
```

* 至此访客信息卡片的添加已经完成，可以先hexo三连看一下效果。但是如果访客地图分开添加的话，两个卡片显得有点多余，所以下面把它们整合到一个侧边卡片里面。

###访客地图部分
1. 首先去 [clustrmaps官网](https://clustrmaps.com/) 注册一个账号并登录，（可能需要科学上网），登录之后找到`Website Widget`，点击进入。
![](https://s1.ax1x.com/2022/05/10/OtzsP0.md.jpg)

2. 按照提示输入自己的域名之后，选择想要添加的样式，个人喜欢平面的。
![](https://s1.ax1x.com/2022/05/10/ONpx8P.md.jpg)

3. 这里就用平面的做演示，选择下面`a标签`的形式，暂时不用复制。
![](https://s1.ax1x.com/2022/05/10/ON9oin.md.jpg)

4. 打开刚才新建的`card_ip.pug`，在最后添加以下代码，注意缩进：
```diff
.card-widget.card-ip
    .card-content
    .item-headline
        i.fa-solid.fa-location-dot(aria-hidden="true")
        span= _p('aside.card_ip')
    .ip_content
        = _p('欢迎来自 ')
        span(class="p")= _p('未知区域')
        = _p(' 的小伙伴')
        br
        = _p('访问IP为： ')
        span(class="p")= _p('未知IP')
        br
        = _p('浏览器版本：')
        span(class="p")= _p('未知浏览器')
+   a(href=url_for('https://clustrmaps.com/site/1bo5g'))
+     img(src=url_for('//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=n&d=yJY4lGab-x8oGwLx6dNF9wC1EWohTS8kwsInVOZIu9s&co=2d78ad&ct=ffffff'))
```
* `a标签`和`img标签`的链接换成你自己的，就是上面选择的`a标签`形式里的，不要直接用我的，我这个只是给个参考。
* 配置到这里就基本完成了，全部保存后hexo三连看看效果吧。

##一些建议

###关于地图文字
1. 地图默认会显示访问量文字，如果不喜欢可以点击`Customize widget`进行编辑
![](https://s1.ax1x.com/2022/05/10/ONeT76.md.jpg)
2. 将`Text`的复选框取消勾选，默认并没有勾选，但地图依旧是有文字的，勾选后再取消勾选即可，然后选择右边的`Image based`，重新复制`img`中src里的图片链接，将刚才`card_ip.pug`中的src替换掉即可。
![](https://s1.ax1x.com/2022/05/10/ONeo0x.md.jpg)

###关于地图尺寸
1. 默认生成的地图尺寸看着可能会很怪，可以在自定义样式中修改。
   在`[Blogroot]\themes\butterfly\source\css\`路径下新建`_custom`文件夹，在此文件夹下新建`custom.css`，并在主题配置文件`inject`配置项`head`处引入,如果已经有了请忽略此步骤。
```diff
inject:
  head:
+    - <link rel="stylesheet" href="/css/_custom/custom.css"  media="defer" onload="this.media='all'">
```
2. 在`custom.css`中添加以下内容：
```css
/*访客地图自适应尺寸及圆角*/
.card-ip a>img{
    border-radius: 7px!important;
    width: 100% !important;
    margin-top: 5px!important;
}
```

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
1. 访问信息的IP使用的是搜狐的接口。
2. 如果遇到啥问题或建议欢迎评论。
3. 教程写的有些仓促，有错误的地方欢迎留言。
{% endnote %}