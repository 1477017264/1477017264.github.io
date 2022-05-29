---
title: 关于博客字体压缩
cover: 'https://s1.ax1x.com/2022/05/14/O6LeG4.jpg'
tags:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - 字体压缩
keywords:
  - 前端
  - HTML
  - Hexo
  - Butterfly
  - font
  - 字体
  - 压缩
  - 字体压缩
categories: 前端
abbrlink: 22514
date: 2022-05-14 20:00:39
swiper_index: 7
---

##前言
{% note green 'fa-brands fa-canadian-maple-leaf' flat %}
本篇文章所讲的方法需要用到`Python`环境，并已安装`Pip`，安装方法这里就不多说了。我使用的`Python`和`Pip`版本如下。
{% endnote %}
![](https://s1.ax1x.com/2022/05/14/O6OY7V.md.jpg)

##教程
1. 新建一个文件夹，放入你准备压缩的字体和[字体编码文件（点击下载）](https://wwm.lanzout.com/i3KWb04tn7ih)，如下图。
   ![](https://s1.ax1x.com/2022/05/14/O6jfOA.jpg)

2. 在该文件夹打开终端，输入以下命令安装`fonttools`插件。
```python
pip install fonttools 
```
* 看到以下内容说明安装成功。
  ![](https://s1.ax1x.com/2022/05/14/OcuC4S.jpg)

3. 然后输入以下命令，进行字体压缩。
```python
pyftsubset MiSans-Normal.ttf --unicodes-file=sc_unicode.txt
```
* 该命令中`MiSans-Normal.ttf`是目录中待压缩的字体名称，`sc_unicode.txt`为字符编码。 执行完命令，压缩完成，目录中出现已压缩的字体，可以看到压缩效果还是可以的。
  ![](https://s1.ax1x.com/2022/05/14/OcKWe1.jpg)

4. 在浏览器中搜索字体格式在线转换，将刚才已经压缩好的字体导入，进行进一步压缩。这里使用[Convertio](https://convertio.co/zh/ttf-woff/)。
   ![](https://s1.ax1x.com/2022/05/14/OcQsKJ.md.jpg)
* 压缩好后就是`Woff`格式的字体了，点击下载即可。下面是我压缩后的一些字体效果。
  ![](https://s1.ax1x.com/2022/05/14/Ocl7SU.md.jpg)

##后话
{% note orange 'fa-solid fa-laptop-code' flat %}
二次压缩那里其实可以使用`Google woff2`的办法，但需要下载源码，比较麻烦，所以就使用了在线字体压缩。如果实在想要用`Google woff2`的话可以搜索相关教程。
{% endnote %}