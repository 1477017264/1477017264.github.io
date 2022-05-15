---
title: aplayer吸底插件高斯模糊样式及适配深色模式
cover: 'https://s1.ax1x.com/2022/05/02/OPEIYT.jpg'
tags:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - aplayer
keywords:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - aplayer
categories: 博客魔改记录
abbrlink: 22960
date: 2022-04-21 20:48:39
swiper_index: 2
---

{% tip tips faa-horizontal animated %}此教程强制关闭了歌词和歌词按钮，需要歌词的请酌情修改。{% endtip %}

{% folding 修改后样式预览 %}
![](https://s1.ax1x.com/2022/05/02/OPEVWF.gif)
{% endfolding %}

##修改aplayer吸底插件高斯模糊样式并适配深色模式

1. 以Butterfly主题为例,在`[Blogroot]\themes\butterfly\source\css\`路径下新建`_custom`文件夹，在此文件夹下新建`custom.css`，并在主题配置文件`inject`配置项`head`处引入,如果已经有了请忽略此步骤。
```diff
inject:
  head:
+    - <link rel="stylesheet" href="/css/_custom/custom.css"  media="defer" onload="this.media='all'">
```

2. 将以下添加高斯模糊效果的代码粘贴至刚建的`custom.css`中。
```css
/*强制不显示歌词*/
.aplayer.aplayer-fixed .aplayer-lrc{
    display: none!important;
}

/*修改插件整体背景*/
.aplayer.aplayer-fixed {
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(10px);
    border-radius:0 4px 0 0!important;
}

.aplayer-body{
    background: rgba(255,255,255,0.1)!important;
    backdrop-filter: blur(10px);
}

/*修改列表正在播放的歌曲背景*/
.aplayer-list-light{
    background: rgba(255,255,255,0.1)!important;
    backdrop-filter: blur(10px);
}

/*修改歌曲列表背景*/
.aplayer-list {
    border: 1px solid #f1f1f1!important;
    border-radius: 4px!important;
}

/*修改歌曲列表鼠标悬停时背景*/
.aplayer-list li:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(15px);
}

/*修改播放列表正在播放歌曲左侧提示条颜色*/
.aplayer-list-cur{
    background: #666!important;
}

/*修改进度条颜色，不设置此项默认是蓝色 #2980b9*/
.aplayer-bar .aplayer-played,.aplayer-thumb{
    background: #4c4948!important;
}

/*删除底部歌曲播放信息边框*/
.aplayer-info{
    border: none!important;
}

/*删除歌曲列表边框*/
.aplayer-list li {
    border: none!important;
}

/*删除歌词按钮*/
.aplayer-icon.aplayer-icon-lrc{
    display: none!important;
}
```

3. 再将适配深色模式的代码粘贴进`custom.css`中。
```css
/*修改插件主体在深色模式下的样式*/
[data-theme="dark"]
.aplayer.aplayer-fixed {
    background: rgba(0, 0, 0, 0.6)!important;
    color: #e1e1e1;
}

/*修改深色模式下鼠标悬停在列表时的样式*/
[data-theme="dark"]
.aplayer-list li:hover {
    background: rgba(0, 0, 0, 0.5) !important;

}

/*修改歌曲列表在深色模式下的样式*/
[data-theme="dark"]
.aplayer-list {
    background: rgba(12, 12, 12, 0) !important;
    border: 1px solid #0d0d0d!important;
}

/*修改深色模式下列表当前选中的歌曲样式*/
[data-theme="dark"]
.aplayer-list-light{
    background: rgba(0,0,0,0.5)!important;
}

/*深色模式下给歌曲封面增加遮罩*/
[data-theme="dark"]
.aplayer-pic {
    -webkit-filter: brightness(.7)!important;
    filter: brightness(.7)!important;
}
```

4. 保存后刷新网页看看效果吧。{% inlineimage https://img.gejiba.com/images/ffc8f365df1d6398433461843ab1fde4.gif %}