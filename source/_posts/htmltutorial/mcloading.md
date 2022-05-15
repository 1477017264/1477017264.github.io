---
title: Minecraft旋转方块加载动画
cover: 'https://s1.ax1x.com/2022/05/07/OlKL3q.jpg'
tags:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - 加载动画
keywords:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - 加载动画
categories: 博客魔改记录
abbrlink: 22507
date: 2022-05-07 20:48:39
swiper_index: 4
description: Hexo博客添加自定义加载动画
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}此教程用的是修改源码的方式，会替换掉原始的加载动画。{% del 应该没人会喜欢Butterfly默认的加载动画吧 %}😂
如果想要有好几个加载动画，随时可切换的话，可以参考 [Akilar店长](https://akilar.top/) 下面这篇教程。{% endnote %}

{% link Loading Animation, https://akilar.top/posts/3d221bf2/, https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.ico %}


##教程
{% folding Minecraft加载动画预览 %}
![](https://s1.ax1x.com/2022/05/07/OlnNVJ.gif)
{% endfolding %}

1. 修改 `[Blogroot]\themes\butterfly\layout\includes\loading\loading.pug`,复制以下代码替换源文件。
```puml
#loading-box
  .loading-container
    .show-front.animate
      .loading-front
      .loading-back
      .loading-right
      .loading-left
      .loading-top
      .loading-bottom
    h1
      | Loading...
      br
      | Generating your adventure.
```

2. 修改 `[Blogroot]\themes\butterfly\source\css\_layout\loading.styl`,复制以下代码替换源文件。
```stylus
#loading-box
  position fixed
  z-index 1000
  background #212121 /*加载动画背景颜色*/
  width 100vw
  height 100vh
  overflow hidden
  text-align center
  &.loaded
    z-index -1000
    .loading-container
      display none

.loading-container
  width 100px
  height 100px
  position absolute
  top 40%
  left 50%
  right auto
  perspective 600px
  margin 0 auto
  transform translateX(-150px)
@media all and (min-width: 768px)
  .loading-container
    transform translateX(-200px)
    top 43%
.loading-container
  h1
    position absolute
    text-align start
    width 200%
    bottom 20px
    left 100%
    right auto
    transform translateX(25px) translatey(0px)
    transform-origin bottom left
    margin 0
    color #dddddd
    font-size 15px
@media all and (min-width: 768px)
  .loading-container
    h1
      bottom 5px
      text-align start
      width 300%
      font-size 23px
.loading-container
  .show-front
    width 100%
    height 100%
    position absolute
    transform-style preserve-3d
    transform translateZ(-100px) rotateY(0deg) rotateX(0deg)
    -webkit-transform translateZ(-100px) rotateY(0deg) rotateX(0deg)
    -moz-transform translateZ(-100px) rotateY(0deg) rotateX(0deg)
    -ms-trasform translateZ(-100px) rotateY(0deg) rotateX(0deg)
    transition transform 1s
    -webkit-transition transform 1s
    -moz-transition transform 1s
    -ms-transition transform 1s
.loading-container
  .show-front
    &.animate
      -webkit-animation rotateCube 8s linear 0s infinite forwards
      animation rotateCube 8s linear 0s infinite forwards
    &.hover
      -webkit-animation rotateCube 6s linear 0s infinite forwards
      animation rotateCube 6s linear 0s infinite forwards
.loading-container
  .show-front
      margin 0
      width 100px
      height 100px
      display block
      position absolute
      background-color rgba(0, 0, 0, 0.05)
      background-size 100%
      background-repeat no-repeat
      transition transform 0.6s ease-in-out
      -webkit-transition transform 0.6s ease-in-out
      -moz-transition transform 0.6s ease-in-out
      -ms-transition transform 0.6s ease-in-out
.loading-front
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateY(0deg) translateZ(50px)
  background-image url('https://assets.codepen.io/751678/glowstone.jpg')

.loading-back
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateX(180deg) translateZ(50px)
  background-image url("https://assets.codepen.io/751678/lava.jpg")
.loading-right
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateY(90deg) translateZ(50px)
  background-image url("https://assets.codepen.io/751678/mossyStone.jpg")
.loading-left
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateY(-90deg) translateZ(50px)
  background-image url("https://assets.codepen.io/751678/netherrack.jpg")
.loading-top
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateX(90deg) translateZ(50px)
  background-image url("https://assets.codepen.io/751678/obsidian.jpg")
.loading-bottom
  margin 0
  width 100px
  height 100px
  display block
  position absolute
  background-size 100%
  background-repeat no-repeat
  transform rotateX(-90deg) translateZ(50px)
  background-image url("https://assets.codepen.io/751678/sponge.jpg")

@-webkit-keyframes rotateCube {
  0% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  5.55% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  11.1% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  16.55% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  22.22% {
    transform: translateZ(-100px) rotateY(90deg) rotateX(90deg);
  }
  27.75% {
    transform: translateZ(-100px) rotateY(90deg) rotateX(90deg);
  }
  33.3% {
    transform: translateZ(-100px) rotateY(180deg) rotateX(90deg);
  }
  38.85% {
    transform: translateZ(-100px) rotateY(180deg) rotateX(90deg);
  }
  44.4% {
    transform: translateZ(-100px) rotateY(270deg) rotateX(90deg);
  }
  49.95% {
    transform: translateZ(-100px) rotateY(270deg) rotateX(90deg);
  }
  55.5% {
    transform: translateZ(-100px) rotateY(360deg) rotateX(90deg);
  }
  61.05% {
    transform: translateZ(-100px) rotateY(360deg) rotateX(90deg);
  }
  61.055% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  66.6% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(180deg);
  }
  72.15% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(180deg);
  }
  77.7% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(270deg);
  }
  83.25% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(270deg);
  }
  88.8% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(360deg);
  }
  94.35% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(360deg);
  }
  94.355% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  99.9% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
}
@keyframes rotateCube {
  0% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  5.55% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  11.1% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  16.55% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  22.22% {
    transform: translateZ(-100px) rotateY(90deg) rotateX(90deg);
  }
  27.75% {
    transform: translateZ(-100px) rotateY(90deg) rotateX(90deg);
  }
  33.3% {
    transform: translateZ(-100px) rotateY(180deg) rotateX(90deg);
  }
  38.85% {
    transform: translateZ(-100px) rotateY(180deg) rotateX(90deg);
  }
  44.4% {
    transform: translateZ(-100px) rotateY(270deg) rotateX(90deg);
  }
  49.95% {
    transform: translateZ(-100px) rotateY(270deg) rotateX(90deg);
  }
  55.5% {
    transform: translateZ(-100px) rotateY(360deg) rotateX(90deg);
  }
  61.05% {
    transform: translateZ(-100px) rotateY(360deg) rotateX(90deg);
  }
  61.055% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(90deg);
  }
  66.6% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(180deg);
  }
  72.15% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(180deg);
  }
  77.7% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(270deg);
  }
  83.25% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(270deg);
  }
  88.8% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(360deg);
  }
  94.35% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(360deg);
  }
  94.355% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
  99.9% {
    transform: translateZ(-100px) rotateY(0deg) rotateX(0deg);
  }
}
```

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
1. 如果不喜欢加载动画的背景可以在`loading.styl`里修改或者直接删除。
2. 第一次做这样的教程，如果下次遇到好看的、有意思的加载动画我尽量再做做看。
3. 本加载动画的CodePen地址可点击下方链接访问，教程未使用Code中的字体，可自行修改。
{% endnote %}

{% link Minecraft Dungeons Inspired Loading cube, https://codepen.io/1477017264/pen/oNbggbR, https://s1.ax1x.com/2022/05/03/OA9VVP.jpg %}


