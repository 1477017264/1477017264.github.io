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
<!-- timeline 2022.05.12 -->
新增爱心小幽灵加载动画、发光小幽灵加载动画
<!-- endtimeline -->
<!-- timeline 2022.05.10 -->
新增带小星星的小幽灵加载动画
<!-- endtimeline -->
{% endtimeline %}
{% endfolding %}

##教程
###带星星小幽灵
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

###爱心小幽灵
{% folding 爱心小幽灵加载动画预览 %}
![](https://s1.ax1x.com/2022/05/11/OwSTh9.gif)
{% endfolding %}

1. 修改 `[Blogroot]\themes\butterfly\layout\includes\loading\loading.pug`,复制以下代码替换源文件。
```puml
#loading-box
  .loading-container
    .egg
      - var legs = 0;
      ul.egg-ul
        while legs < 7
          - legs++;
          li.egg-list
        .face
          .eyes
          .smile
          .cheeks
          .shine
    #egg-shadow.egg-shadow
    .loading-heart
      .loading-light
    .ghost
      - var legs = 0;
      ul.ghost-ul
        while legs < 9
          - legs++;
          li.ghost-list
      .face
        .eyes
        .smile
        .cheeks
    #ghost-shadow.ghost-shadow
```
2. 修改 `[Blogroot]\themes\butterfly\source\css\_layout\loading.styl`,复制以下代码替换源文件。
```stylus
#loading-box
  position fixed
  z-index 100005
  width 100vw
  height 100vh
  background #48befe
  overflow hidden
  &.loaded
   z-index -1000
   .loading-container 
     display none

.loading-container 
  position absolute
  white-space nowrap
  left 50%
  top 50%
  transform translate(-50%, -50%)
.ghost-ul
  margin 0
  padding 0
  .ghost-list
    list-style none
.egg-ul 
  margin 0
  padding 0
  .egg-list 
    list-style none
.egg 
  width 87.5px
  height 110px
  border-radius 100px 100px 0px 0px
  background #fdfeff
  position relative
  display inline-block
  animation floating 2.5s ease-out infinite
  left -5%
  .face 
    width 65px
    height 65px
    background #ffdb10
    position absolute
    margin 15% 15%
    border-radius 100%
    box-shadow inset -10px 1px 0 #ffcc24
    .eyes 
      width 7.5px
      height 7.5px
      background #000
      border-radius 100%
      position relative
      top 27.5px
      left 19px
      animation blink 3s infinite 2s
      &::after 
        content ""
        width 7.5px
        height 7.5px
        position absolute
        background #000
        border-radius 100%
        left 25px
    .smile 
      position relative
      border-bottom-left-radius 90px
      border-bottom-right-radius 90px
      width 15px
      height 7.5px
      background #000
      left 27.5px
      top 30px
      &::after 
        content ""
        position absolute
        width 5px
        height 2.5px
        background #ff7e7e
        border-radius 100%
        left 5px
        top 4px
    .cheeks 
      position relative
      width 6px
      height 6px
      background #ff7e7e
      border-radius 100%
      opacity 0.5
      top 20px
      left 15px
      &::after 
        content ""
        position absolute
        width 6px
        height 6px
        background #ff7e7e
        border-radius 100%
        left 33.5px
    .shine 
      position relative
      width 4px
      height 10px
      background #fdfeff
      border-radius 200px
      top -5px
      left 6px
      transform rotate(20deg)
      &::after 
        position absolute
        content ""
        width 4px
        height 4px
        background #fdfeff
        border-radius 200px
        top -7.5px
        left 3px
  .egg-ul  
    display flex
  .egg-list
    position relative
    border-radius 200px
    &:nth-child(odd) 
      background #fdfeff
    &:nth-child(even) 
      background #48befe
    &:nth-child(1) 
      width 15px
      height 30px
      top 87.5px
      animation anim1 0.75s ease-out infinite
    &:nth-child(2) 
      width 10px
      height 25px
      top 92.5px
      animation anim2 1.5s ease-out infinite
    &:nth-child(3) 
      width 14.25px
      height 30px
      top 97.5px
      animation anim3 0.5s ease-in-out infinite
    &:nth-child(4) 
      width 10px
      height 25px
      top 105px
      animation anim4 1.1s ease-out infinite
    &:nth-child(5) 
      width 14.25px
      height 30px
      top 95px
      animation anim3 0.75s ease-out infinite
    &:nth-child(6) 
      width 10px
      height 30px
      top 100px
      animation anim2 2s ease-out infinite
    &:nth-child(7) 
      width 14.25px
      height 30px
      top 95px
      animation anim1 0.75s ease-out infinite
.ghost 
  width 87.5px
  height 110px
  border-radius 100px 100px 0px 0px
  background #fdfeff
  position relative
  display inline-block
  animation floating 1s ease-out infinite
  opacity 0.75
  left 6%
.ghost 
  &::before 
    content ""
    width 87.5px
    height 110px
    border-radius 100px 100px 0px 0px
    background #fdfeff
    position relative
    display inline-block
    position absolute
    box-shadow inset -7.5px 1px 0px #efefef
.ghost 
  &.heart 
    &::after 
      content ""
      width 87.5px
      height 110px
      border-radius 100px 100px 0px 0px
      background #fdfeff
      position relative
      display inline-block
      position absolute
      box-shadow inset -7.5px 1px 0px #efefef
.ghost 
  .face 
    width 65px
    height 65px
    background transparent
    position absolute
    margin -20% 10%
    border-radius 100%
.ghost 
  .face 
    .eyes 
      opacity 0.5
      width 7.5px
      height 7.5px
      background #000
      border-radius 100%
      position relative
      top 27.5px
      left 1.5px
      animation blink 5s infinite
.ghost 
  .face 
    .eyes 
      &::after 
        content ""
        width 7.5px
        height 7.5px
        position absolute
        background #000
        border-radius 100%
        left 25px
.ghost 
  .face 
    .smile 
      position relative
      opacity 0.5
      border-bottom-left-radius 50px
      border-bottom-right-radius 50px
      width 5px
      height 3px
      box-sizing initial
      background transparent
      border 2.5px solid #000
      left 12.5px
      top 27.5px
.ghost 
  .face 
    .smile 
      &::before 
        background #fdfeff
        width 15px
        height 3.5px
        content ""
        position absolute
        left -5px
        top -5.5px
.ghost 
  .face 
    .smile 
      &::after 
        background #fdfeff
        width 15px
        height 3.5px
        content ""
        position absolute
        left -5px
        top -2.75px
.ghost 
  .face 
    .cheeks 
      position relative
      width 6px
      height 6px
      background #ff7e7e
      border-radius 100%
      opacity 0.5
      top 21.5px
      left -2px
.ghost 
  .face 
    .cheeks 
      &::after 
        content ""
        position absolute
        width 6px
        height 6px
        background #ff7e7e
        border-radius 100%
        left 33.5px
.ghost 
  .ghost-ul 
    display flex
  .ghost-list 
    position relative
    border-radius 200px
    height 30px
.ghost 
  li 
    &:nth-child(odd) 
      background #fdfeff
      width 15px
      top 86px
      z-index -1
    &:nth-child(even) 
      background #48befe
      width 3px
      top 107.5px
.ghost 
  li 
    &:nth-child(1) 
      animation ghostani 3s ease-out infinite
    &:nth-child(3) 
      animation ghostani 3s ease-out infinite 0.5s
    &:nth-child(5) 
      animation ghostani 3s ease-out infinite 1s
    &:nth-child(7) 
      animation ghostani 3s ease-out infinite 1.5s
    &:nth-child(9) 
      box-shadow inset -7.5px 2px #efefef
      animation ghostani 3s ease-out infinite 2s
.loading-heart 
  position absolute
  display inline-block
  width 15px
  height 15px
  background red
  left 45%
  top -5%
  transform rotate(45deg)
  animation beat 0.7s linear infinite
.loading-heart 
  &::before 
    position absolute
    content ""
    width 15px
    height 15px
    background red
    border-radius 100%
    top -50%
    animation beat 0.7s linear infinite
.loading-heart 
  &::after 
    position absolute
    content ""
    width 15px
    height 15px
    background red
    border-radius 100%
    top -50%
    animation beat 0.7s linear infinite
.loading-heart 
  &::after 
    top 0%
    left -50%
.loading-heart 
  .loading-light 
    width 2px
    height 4px
    background white
    position absolute
    border-radius 200px
    z-index 3
    left -5.5px
    top 6.75px
    transform rotate(-10deg)
    animation lightshift 0.7s linear infinite
.loading-heart 
  &::after 
    .loading-light 
      width 2.5px
      height 6px
      background white
      position absolute
      border-radius 200px
      z-index 3
      left -5.5px
      top 6.5px
      transform rotate(-10deg)
      animation lightshift 0.7s linear infinite
.loading-heart 
  .loading-light 
    &::after 
      content ""
      position absolute
      z-index 3
      width 2px
      height 2px
      background white
      border-radius 200px
      top -3px
      left 0.75px
.loading-heart 
  &::after 
    .loading-light 
      &::after 
        content ""
        position absolute
        z-index 3
        width 2.5px
        height 2.5px
        background white
        border-radius 200px
        top -2.5px
        left 0.75px

.egg-shadow 
  position absolute
  opacity 0.2
  width 90px
  height 7.5px
  background #000
  top 137.5px
  border-radius 100%
  // filter blur(2px)
.ghost-shadow 
  position absolute
  opacity 0.2
  width 90px
  height 7.5px
  background #000
  top 137.5px
  border-radius 100%
  // filter blur(2px)
.egg-shadow#egg-shadow 
    left -10px
    animation shadow-ani 2.5s ease-out infinite
.ghost-shadow#ghost-shadow 
    left 97.5px 
    transform-origin center
    animation shadow-ani 1s ease-out infinite
@keyframes shadow-ani {
  50% {
    width: 85px;
    height: 5px;
  }
}
@keyframes blink  {
	0%{
		transform:scaleY(1)
	}	
	18%{
		transform:scaleY(1)
	}
	20%{
		transform:scaleY(0)
	}	
	25%{
		transform:scaleY(1)
	}	
	38%{
		transform:scaleY(1)
	}	
	40%{
		transform:scaleY(0)
	}	
	45%{
		transform:scaleY(1)
	}
	80% {
		transform:scaleY(1)
	}
}
@keyframes beat {
	  20%,
	40% {
	    height: 20px;
	    width: 20px;
	  }
	}
@keyframes lightshift {
  20%,
  40% {
    left: -7.5px;
    top: 9.5px;
  }
}
@keyframes floating {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0;
  }
}

@keyframes anim1 {
  50% {
    top: 90px;
  }
}

@keyframes anim2 {
  50% {
    top: 89px;
  }
}

@keyframes anim3 {
  50% {
    top: 102.5px;
  }
}

@keyframes anim4 {
  50% {
    top: 102.5px;
  }
}

@keyframes ghostani {
  50% {
    top: 90px;
  }
}
```
* 代码提供了底部阴影模糊效果，默认关闭状态，如需要，将`.egg-shadow`和`.ghost-shadow`处的`filter`属性取消注释即可，位置在{% u 406和415 %}行。

###发光小幽灵
{% folding 发光小幽灵加载动画预览 %}
![](https://s1.ax1x.com/2022/05/12/O0vRmT.gif)
{% endfolding %}

1. 修改 `[Blogroot]\themes\butterfly\layout\includes\loading\loading.pug`,复制以下代码替换源文件。
```pug
#loading-box
  #ghost-container
      .ghost
        .body
          .face
            .eyes
            .blush
          .ghost-line
          .ghost-bottom
            .ghost-circle
            .ghost-circle
            .ghost-circle
            .ghost-circle
            .ghost-wave
        .loading-shadow
        .loading-glow
```
2. 修改 `[Blogroot]\themes\butterfly\source\css\_layout\loading.styl`,复制以下代码替换源文件。
```stylus
#loading-box
  position fixed
  z-index 10000
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  background #00034b
  // backdrop-filter blur(10px)
  overflow hidden
  text-align center
  &.loaded
   z-index -1000
   #ghost-container 
     display none

#ghost-container 
  width 80px
  height 128px
.ghost 
  position relative
  .body 
    width 80px
    height 124px
    background #fff
    border-radius 40px 40px 8px 8px
    box-shadow inset -10px 0.2px 0 #dbdbdb
    animation ghostFloat 2s linear infinite
    .face 
      position absolute
      top 37px
      left 24px
      .eyes 
        width 8.5px
        height 11.5px
        background #000449
        border-radius 50%
        animation eyesBlink 2s linear infinite
        &::before 
          position absolute
          content ""
          width inherit
          height inherit
          left 23.6px
          background inherit
          border-radius 50%
      .blush 
        position absolute
        top 15.6px
        right 6.4px
        width 9px
        height 9px
        background #ffbeff
        border-radius 50%
        &::before 
          position absolute
          content ""
          left 37px
          width inherit
          height inherit
          background inherit
          border-radius 50%
    .ghost-line 
      position relative
      z-index 3
      top 112px
      width 70px
      height 10px
      background #fff
    .ghost-bottom 
      position absolute
      top 114px
      .ghost-circle 
        position absolute
        z-index 2
        width 14px
        height 14px
        background #fff
        border-radius 0 0 8px 8px
        &:nth-child(1) 
          left 0
        &:nth-child(2) 
          left 22px
          border-radius 8px
        &:nth-child(3) 
          left 44px
          border-radius 8px
        &:nth-child(4) 
          left 66px
          box-shadow inset -10px 0.2px 0 #dbdbdb
      .ghost-wave 
        position relative
        z-index 1
        left 11.4px
        width 13px
        height 14px
        background #c3c7cb
        border-radius 8px
        box-shadow inset 0 8px 0 #fff
        &::before 
          position absolute
          content ""
          left 22px
          width inherit
          height inherit
          background inherit
          border-radius 8px
          box-shadow inherit
        &::after 
          position absolute
          content ""
          left 44px
          width inherit
          height inherit
          background inherit
          border-radius 8px
          box-shadow inherit
  .loading-shadow 
    position absolute
    z-index -2
    top 146px
    width 80px
    height 8px
    background #000031
    border-radius 50%
    filter blur(0.05rem)
    animation shadowWidth 2s linear infinite
  .loading-glow 
    position absolute
    z-index -1
    top -5px
    left -4px
    width 88px
    height 136px
    background radial-gradient(circle at 50% 50%, #fff, #fff 40%, #fff 50%)
    border-radius 40px 40px 8px 8px
    opacity 0.37
    filter blur(6px)
    animation ghostFloat 2s linear infinite, glowBlur 2s linear infinite 
@keyframes ghostFloat {
	  0%,
	100% {
	    transform: translateY(0);
	  }
	  50% {
	    transform: translateY(-1rem);
	  }
	}
	
@keyframes eyesBlink {
	  0%,
	30%,
	38%,
	100% {
	    transform: scale(1);
	  }
	  34%,
	36% {
	    transform: scale(1, 0);
	  }
	}
	
@keyframes shadowWidth {
	  0%,
	100% {
	    transform: scale(1);
	  }
	  50% {
	    transform: scale(0.8, 1);
	  }
	}
	
@keyframes glowBlur {
	  0%,
	50%,
	100% {
	    opacity: 0.3625;
	    filter: blur(1.125rem);
	  }
	  25%,
	75% {
	    opacity: 0.25;
	    filter: blur(0.85rem);
	  }
	}
```

##后记
{% note orange 'fa-solid fa-laptop-code' flat %}
1. 如果不喜欢加载动画的背景可以在`loading.styl`里修改或者直接删除。
2. 样式可按照自己想法修改，不过可能我的会有点乱，所以要注意一下。
3. 替换动画后如果遇到其他页面样式出问题，大概率是class名冲突，找到并修改动画class名称即可。
4. 不定期更新此系列加载动画，如果有好看的话。
{% endnote %}