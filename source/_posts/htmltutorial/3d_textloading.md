---
title: 3D Text Effect 加载动画
cover: 'https://s1.ax1x.com/2022/05/12/OBxLlR.png'
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
  - 3D
  - loading
categories: 博客魔改记录
abbrlink: 22512
date: 2022-05-12 22:38:39
swiper_index: 5
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}此教程用的依旧是修改源码的方式，会替换掉原始的加载动画。如果想要有好几个加载动画，随时可切换的话，可以参考 [Akilar店长](https://akilar.top/) 下面这篇教程。{% endnote %}

{% link Loading Animation, https://akilar.top/posts/3d221bf2/, https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.ico %}


##教程
{% folding 3D Text Effect 加载动画预览 %}
![](https://s1.ax1x.com/2022/05/12/OBOr8I.gif)
{% image https://s1.ax1x.com/2022/05/12/OBOs2t.gif, width=100% %}

* 字体效果仅供参考，请以你网站的字体为准，也可自行修改。
  {% endfolding %}

1. 修改 `[Blogroot]\themes\butterfly\layout\includes\loading\loading.pug`,复制以下代码替换源文件。
```pug
  h1.loading-container
    //- span &quot;wait
    //- span a
    //- span minute&quot;
    span L
    span O
    span A
    span D
    span I
    span N
    span G
```

2. 修改 `[Blogroot]\themes\butterfly\source\css\_layout\loading.styl`,复制以下代码替换源文件。
```stylus
#loading-box
  position fixed
  z-index 10000
  display flex
  justify-content center
  align-content center
  width 100vw
  height 100vh
  background rgba(255,252,0,1)
  // backdrop-filter blur(10px)
  overflow hidden
  flex-wrap wrap
  &.loaded
   z-index -1000
   .loading-container 
     display none
// @import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");
.loading-container 
  margin 0
  font-size 4em
  padding 0
  color white
  // font-family "Luckiest Guy", cursive
  text-shadow 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1), 0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1), 0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1), -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1)
  span 
    transform scale(0.9)
    margin 2px
    display inline-block
    &:nth-child(1) 
      animation bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(2) 
      animation bopB 1s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(3) 
      animation bopC 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(4) 
      animation bopC 1s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(5) 
      animation bopC 1s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(6) 
      animation bopC 1s 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
    &:nth-child(7) 
      animation bopC 1s 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate
@keyframes bop {
		 0% {
			 transform: scale(0.9);
		}
		 50%, 100% {
			 transform: scale(1) rotateZ(-3deg);
		}
	}
	
@keyframes bopB {
		 0% {
			 transform: scale(0.9);
		}
		 80%, 100% {
			 transform: scale(1) rotateZ(-3deg);
		}
	}	 
	
@keyframes bopC {
		 0% {
			 transform: scale(0.9);
		}
		 80%, 100% {
			 transform: scale(1) rotateZ(-3deg);
		}
	}
```

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
1. 如果不喜欢加载动画的背景可以在`loading.styl`里修改或者直接删除。
2. 默认使用的是你自己网站的字体，可自行修改。
3. 本教程CodePen地址可点击下方链接访问。
   {% endnote %}

{% link CSS 3D Text Effect, https://codepen.io/kylewetton/pen/yLBwdJX, https://s1.ax1x.com/2022/05/03/OA9VVP.jpg %}


