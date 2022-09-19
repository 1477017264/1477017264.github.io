---
title: 『黑胶内录试听』What A Feeling - Irene Cara
cover: 'https://s1.ax1x.com/2022/06/03/XaekIe.jpg'
tags:
  - 黑胶
  - 音乐
keywords: 黑胶
categories: 黑胶
abbrlink: 22602
date: 2022-06-02 19:42:39
swiper_index: 6
---

<div style="position: relative; width: 100%; margin-bottom: 20px">
    <video playsinline="" controls="" preload="metadata" 
        src="https://video-direct-link.vercel.app/bili.mp4?aid=897012791&bvid=BV1UA4y1Z79Z&cid=735680628" 
        style="display: block; width: 100%;border-radius: 8px;"
        poster="https://s1.ax1x.com/2022/06/03/XaZjPJ.jpg">
    </video>
</div>

{% note 'fa-solid fa-music' disabled %}
{% span center , 更多视频可移步至我的B站账号，鼠标悬停或移动端点击下方唱片可查看歌曲列表。 %}
{% endnote %}

<style>
.vinyl-main:hover +.vinyl-text .vinyl-list{ 
    opacity: 1;
    transition: 0.6s ease-in-out;
}
.vinyl-main:hover +.vinyl-text .vinyl-mess{ 
    opacity: 0;
    transition: 0.6s ease-in-out;
}
.table-mess thead{
    background: transparent!important;
}
.table-wrap {
    overflow-x: hidden!important;
    margin: 0 0 20px;
}
</style>
<div class="vinyl-box">
    <div class="vinyl-main">
        <div class="vinyl-cover"></div>
        <div class="main-circle">
            <div class="circle">
                <div class="circle-heart"></div>
            </div>
        </div>        
    </div>
    <div class="vinyl-text">
        <div class="vinyl-mess">
        {% note orange 'fas fa-fan' disabled %}唱片信息{% endnote %}
            <table class="table-mess">
                <thead>
                <tr>
                    <td>标签：</td>
                    <td>Polystar - 25S-164</td>
                </tr>
                <tr>
                    <td>格式：</td>
                    <td>Vinyl, LP, Album</td>
                </tr>
                <tr>
                    <td>国家：</td>
                    <td>Japan</td>
                </tr>
                <tr>
                    <td>发行日期：</td>
                    <td>1983</td>
                </tr>
                <tr>
                    <td>类型：</td>
                    <td>Electronic, Stage & Screen</td>
                </tr>
                <tr>
                    <td>风格：</td>
                    <td>Synth-pop</td>
                </tr>
                </thead>
            </table>
        </div>
        <div class="vinyl-list">
            {% note orange 'fas fa-fan' disabled %}歌曲节选{% endnote %}
            <table class="table-list" border="1">
                <tr>
                    <td>Flashdance... What A Feeling</td>
                    <td>3:55</td>
                </tr>
                <tr>
                    <td>He's A Dream</td>
                    <td>3:28</td>
                </tr>
                <tr>
                    <td>Love Theme From Flashdance</td>
                    <td>3:15</td>
                </tr>
                <tr>
                    <td>Manhunt</td>
                    <td>2:36</td>
                </tr>
                <tr>
                    <td>Lady, Lady, Lady</td>
                    <td>4:12</td>
                </tr>
                <tr>
                    <td>Imagination</td>
                    <td>3:39</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<style type="text/css">
.main-circle{
    width: 200px;
    height: 200px;
    /*定义动画效果，对应的"infinite",动画无限次播放，对应的"linear",动画从头到尾的速度是相同的。*/
    animation: circle 1.3s infinite linear;
    position: relative;
    left: 15px;
    z-index: 5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    /*重复径向渐变 从中心开始沿着四周产生渐变效果，模拟出唱片那种感觉，不喜欢可以注释或删掉*/
    background: repeating-radial-gradient(#111 0%, #000 2%);
    transition: all 0.3s linear;
    box-shadow: rgba(0,0,0,0.5) 0px 0px 5px 2px;
}
.vinyl-cover{
    background: url(https://s1.ax1x.com/2022/05/31/X3Ngdf.jpg);
    width: 210px;
    height: 210px;
    position: absolute;
    z-index: 10;
    left: 15px;
    background-size: cover;
    box-shadow: rgba(0,0,0,0.5) 3px 3px 10px;
    border-radius: 3px;
    transition: all 0.3s linear;
}
.vinyl-main:hover .main-circle{
    left: 55px;
    transition: all 0.3s linear;
}
.vinyl-main:hover .vinyl-cover{
    left: -25px;
    transition: all 0.3s linear;
}
.circle{
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 100%;
    background-color: red;
    /*看不出旋转效果，所以使用图片*/
    background: url("https://s1.ax1x.com/2022/06/02/XNAdE9.jpg");
    background-size: cover;
}
/*白色圆心，不需要可以直接删除，或者把背景色删掉或改为透明*/
.circle-heart{
    width: 42px;
    height: 42px;
    margin: 0 auto;
    border-radius: 100%;
    background: rgba(255,255,255,0);
}
@keyframes circle{
    0%{
        /*transform对元素进行旋转、缩放、移动或倾斜。以下就是旋转0度。*/
        transform: rotate(0deg);
    }
    100%{
        /*以下就是旋转360度*/
        transform: rotate(360deg);
    }
}
.vinyl-box{
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    margin: 20px auto 0;
    height: 100%;
    background: rgba(255,255,255,0);
    transition: all 0.6s;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
}
.vinyl-main{
    width:260px;
    height:100%;
    margin: 20px auto 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.6s;
}
.vinyl-text{
    width: 100%;
    height: 364px;
    position: relative;
    border-radius: 8px;
}
.vinyl-mess{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;
    border-radius: 8px;
    transition: 0.6s ease-in-out;
}
.vinyl-list{
    width: 100%;
    height: 100%;
    position: relative;
    top: -364px;
    opacity: 0;
    padding: 20px;
    border-radius: 8px;
    transition: 0.6s ease-in-out;
}
[data-theme=dark] .vinyl-box{
    box-shadow: 0px 0px 6px rgba(255,255,255,0.2);
}
</style>
