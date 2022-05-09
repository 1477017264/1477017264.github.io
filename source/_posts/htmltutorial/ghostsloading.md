---
title: css小幽灵系列加载动画
cover: 'https://s1.ax1x.com/2022/05/10/OYAXsf.jpg'
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
  - ghost
categories: 博客魔改记录
abbrlink: 22510
date: 2022-05-10 00:05:39
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}此教程用的是修改源码的方式，会替换掉原始的加载动画。如果想要有好几个加载动画，随时可切换的话，可以参考 [Akilar店长](https://akilar.top/) 下面这篇教程。{% endnote %}

{% link Loading Animation, https://akilar.top/posts/3d221bf2/, https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.ico %}


##更新日志
{% folding 更新日志 %}
{% timeline %}
<!-- timeline 2022.05.10 -->
新增带小星星的小幽灵加载动画
<!-- endtimeline -->
{% endtimeline %}
{% endfolding %}

##教程
###带星星小幽灵加载动画
{% folding 带星星小幽灵加载动画预览 %}
![](https://s1.ax1x.com/2022/05/10/OYAEUH.gif)
{% endfolding %}

1. 修改 `[Blogroot]\themes\butterfly\layout\includes\loading\loading.pug`,复制以下代码替换源文件。
```puml
#loading-box
  .ghost-container
    .ghost
      .body
        .ghost-head
          .face
            .eyes-row
              .eye.left
              .eye.right
            .mouth-row
              .left.rosy
              .smile
                .mouth-top
                .mouth-bottom
              .right.rosy
        .ghost-body
          .arm.left
          .arm.right
          .ghost-skirt
            .down.pleat
            .pleat.up
            .down.pleat
            .pleat.up
            .down.pleat
      .shadow
    .stars
      .orange.pointy.star.star-1
        .star-element
      .orange.pointy.star.star-2
        .star-element
      .pointy.star.star-3.yellow
        .star-element
      .pointy.star.star-4.yellow
        .star-element
      .blue.round.star.star-5
        .star-element
      .blue.round.star.star-6
        .star-element
```

2. 修改 `[Blogroot]\themes\butterfly\source\css\_layout\loading.styl`,复制以下代码替换源文件。
```stylus
#loading-box 
  position fixed
  z-index 10000
  width 100vw
  display flex
  justify-content center
  align-items center
  height 100vh
  background #292b25
  overflow hidden
  text-align center
  &.loaded
    z-index -1000
    .ghost-container 
      display none

@keyframes twinkle {
  0% {
    transform: rotate(0deg) scale(1, 1);
  }

  25% {
    transform: rotate(10deg) scale(0.8, 0.8);
  }

  50% {
    transform: rotate(0deg) scale(0.9, 0.9);
  }

  75% {
    transform: rotate(-20deg) scale(0.6, 0.6);
  }

  100% {
    transform: rotate(0deg) scale(1, 1);
  }
}

@keyframes waving {
  0% {
    transform: rotate(-45deg);
  }

  25% {
    transform: rotate(-55deg);
  }

  50% {
    transform: rotate(-45deg);
  }

  75% {
    transform: rotate(-55deg);
  }

  100% {
    transform: rotate(-45deg);
  }
}

.ghost-container 
  position relative
  height 140px
  z-index 1000
  padding 20px 30px 0 30px
  perspective 30px
  .ghost 
    position relative
    width 80px 
    z-index 1001
    height 115px
    .body 
      position relative
      height 115px
      animation float 2s ease infinite
      .face 
        position absolute
        bottom 10px
        left 10px
        width 50px
        height 30px
        z-index 1
        .eye 
          height 10px
          width 10px
          background-color #271917
          border-radius 100%
          position absolute
          bottom 0
          transition height 50ms ease
          &.left 
            left 5px
          &.right 
            right 5px
        .smile 
          position absolute
          left 50%
          top 0
          height 10px
          transform translate3d(-50%, 0, 0)
        .rosy 
          position absolute
          top 0
          width 12px
          height 4px
          background-color #f5c1b6
          border-radius 100%
          &.left 
            left 0px
          &.right 
            right 0px
      .arm 
        height 36px
        width 22px
        background #f0efdc
        border-radius 100%/90%
        position absolute
        &.left 
          left -12px
          top 10px
          transform rotateZ(-45deg)
          left 0
          top 5px
          transform-origin bottom center
        &.right 
          right -12px
          top 10px
          transform rotateZ(45deg)
    .ghost-head 
      position relative
      width 80px
      height 0
      padding-top 100%
      border-radius 100%
      background-color #f0efdc
    .ghost-body 
      position absolute
      top 40px
      height 0
      width 80px
      padding-top 85%
      background-color #f0efdc
    .shadow 
      position absolute
      bottom -40px
      left 50%
      width 120px
      height 12px
      filter blur(3px)
      border-radius 100%
      background-color #191d18
      animation shadow 2s ease infinite
.eyes-row,
	.mouth-row 
  position relative
  height 10px
.mouth-row 
  margin-top 3px
.smile 
  .mouth-top 
    width 18px
    height 2px
    border-radius 2px 2px 0 0
    background-color #271917
  .mouth-bottom 
    position absolute
    width 18px
    height 8px
    bottom 0
    overflow hidden
    transition height 150ms ease
    &:after 
      content ''
      display block
      position absolute
      left 0
      bottom 0
      width 18px
      height 16px
      border-radius 100%
      background-color #271917
.ghost-skirt 
  position absolute
  left 0
  bottom 0
  width 100%
  display flex
  transform translateY(50%)
  .pleat 
    width 20%
    height 8px
    border-radius 100%
    &.down 
      background-color #f0efdc
    &.up 
      background #292b25
      position relative
      top 1px
@keyframes float {

		0%,
		100% {
			top: 10px;
		}

		40% {
			top: 0px;
		}
	}

@keyframes arms-left {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(50deg);
  }

  40% {
    transform: translate(-50%, -50%) rotate(40deg);
  }
}


@keyframes arms-right {
  0%, 100% {
    transform: translate(-50%, -50%) rotate(-50deg);
  }

  40% {
    transform: translate(-50%, -50%) rotate(-40deg);
  }
}


@keyframes shadow {
   0%, 100% {
    transform: translateX(-50%) scale(1);
  }

  40% {
    transform: translateX(-50%) scale(0.8);
  }
}

.star 
  top -10px
  position absolute
  animation twinkle 2s infinite linear
  transition top 400ms ease-out, left 400ms ease-out


.star 
    .star-element 
      height 9px
      width 9px
      border-radius 100%
  &.pointy 
    transform rotate(-15deg)
    .star-element 
      height 6px
      width 6px
      &:before 
        height 6px
        width 12px
        left -3px
        top 0
        transform skewX(60deg)
      &:after 
        height 12px
        width 6px
        right 0
        bottom -3px
        transform skewY(-60deg)
.star 
  &.pointy 
    .star-element 
      &:before 
        content ''
        display block
        position absolute
        background green
        border-radius 6px
.star 
  &.pointy 
    .star-element 
      &:after 
        content ''
        display block
        position absolute
        background green
        border-radius 6px
.star.orange .star-element,
	.star.orange .star-element:before,
	.star.orange .star-element:after 
  background-color #df814d
.star.yellow .star-element,
	.star.yellow .star-element:before,
	.star.yellow .star-element:after 
  background-color #ffd186
.star.blue .star-element,
	.star.blue .star-element:before,
	.star.blue .star-element:after 
  background-color #83d0bc
.star-1 
  top: 75%;
  left: 6%;
.star-2 
  top: 35%;
  left: 88%;
  transition-delay 250ms
  animation-delay 200ms
.star-3 
  top: 8%;
  left: 20%;
  transition-delay 300ms
  animation-delay 400ms
  z-index 2
.star-4 
  top: 70%;
  left: 92%;
  transition-delay 350ms
  animation-delay 600ms
.star-5 
  top: 35%;
  left: 4%;
  transition-delay 400ms
  animation-delay 800ms
  z-index 2
.star-6 
  top: 2%;
  left: 70%;
  transition-delay 450ms
  animation-delay 1000ms
.move-stars-out 
  .star-element 
    animation star-entrance 1500ms
.stars-out 
  .star 
    transition top 1500ms ease-out, left 1500ms ease-out
  .star-1 
    top 75%
    left 6%
    transition-delay 0ms, 0ms
    .star-element 
      animation-delay 0ms
  .star-2 
    top 35%
    left 88%
    transition-delay 200ms, 200ms
    .star-element 
      animation-delay 200ms
  .star-3 
    top 8%
    left 20%
    transition-delay 400ms, 400ms
    .star-element 
      animation-delay 400ms
  .star-4 
    top 70%
    left 92%
    transition-delay 600ms, 600ms
    .star-element 
      animation-delay 600ms
  .star-5 
    top 35%
    left 4%
    transition-delay 800ms, 800ms
    .star-element 
      animation-delay 800ms
  .star-6 
    top 2%
    left 70%
    transition-delay 1000ms, 1000ms
    .star-element 
      animation-delay 1000ms
.move-stars-in 
  .star-element 
    animation star-exit 400ms linear
  .star-1 
    .star-element 
      animation-delay 100ms
  .star-2 
    .star-element 
      animation-delay 150ms
  .star-3 
    .star-element 
      animation-delay 200ms
  .star-4 
    .star-element 
      animation-delay 250ms
  .star-5 
    .star-element 
      animation-delay 300ms
  .star-6 
    .star-element 
      animation-delay 350ms
```

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
1. 如果不喜欢加载动画的背景可以在`loading.styl`里修改或者直接删除。
2. 样式可按照自己想法修改，不过可能我的会有点乱，所以要注意一下。
3. 替换动画后如果遇到其他页面样式出问题，大概率是class名冲突，找到并修改动画class名称即可。
4. 不定期更新此系列加载动画，如果有好看的话。
{% endnote %}