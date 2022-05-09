---
title: 纯css实现黑胶唱片信息卡片
cover: 'https://s1.ax1x.com/2022/05/04/OVzU6H.jpg'
tags:
  - 前端
  - HTML
keywords:
  - 前端
  - HTML
  - Hexo
categories: 前端
abbrlink: 14538
date: 2022-05-04 20:48:39
---

{% folding 唱片信息卡片样式预览 %}
![](https://s1.ax1x.com/2022/05/04/OVxtLn.gif)
{% endfolding %}

###普通HTML页面使用时

1. HTML代码
```html
<div class="main-box">
	<!-- partial:index.partial.html -->
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
				<div class="text-title">💽 唱片信息</div>
				<table class="table-mess">
					<thead>
						<tr>
							<td>标签：</td>
							<td>Victor – VIP-7294</td>
						</tr>
						<tr>
							<td>格式：</td>
							<td>Vinyl, LP, Album, Pink Obi</td>
						</tr>
						<tr>
							<td>国家：</td>
							<td>Japan</td>
						</tr>
						<tr>
							<td>发行日期：</td>
							<td>1980</td>
						</tr>
						<tr>
							<td>类型：</td>
							<td>Pop, Classical</td>
						</tr>
						<tr>
							<td>风格：</td>
							<td>Ballad, Easy Listening</td>
						</tr>
					</thead>
				</table>
			</div>
			<div class="vinyl-list">
				<div class="text-title">💿 曲目节选</div>
				<table class="table-list" border="1">
					<tr>
						<td>Souvenirs D'Enfance</td>
						<td>2:48</td>
					</tr>
					<tr>
						<td>Lyphard Melodie</td>
						<td>4:40</td>
					</tr>
					<tr>
						<td>Secret Of My Life</td>
						<td>2:59</td>
					</tr>
					<tr>
						<td>Ping Pong Sous Les Arbres</td>
						<td>3:15</td>
					</tr>
					<tr>
						<td>Moon River</td>
						<td>3:14</td>
					</tr>
					<tr>
						<td>La Vie En Rose</td>
						<td>2:37</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>
```

2. CSS代码
```css
body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://iw233.cn/api.php?sort=mp);
    background-repeat: no-repeat;
    background-size: cover;
}

.main-box {
    width: 60%;
    margin: auto;
    margin-top: 150px;
    justify-content: center;
    align-items: center;
}

.vinyl-box {
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    margin: 20px auto 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.6s;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* 唱片box */
.vinyl-main {
    width: 260px;
    height: 100%;
    margin: 40px auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.6s;
}

/* 唱片主体 */
.main-circle {
    width: 200px;
    height: 200px;
    /* 定义动画效果，对应的"infinite",动画无限次播放，对应的"linear"。*/
    /* 12寸黑胶转速一般为33转每分钟，故使用1.3s作为转完一圈的时间，也可设置45或78转每分。 */
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
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 2px;
}

/* 唱片封面 */
.vinyl-cover {
    background: url(https://s1.ax1x.com/2022/05/02/OPEpss.jpg);
    width: 210px;
    height: 210px;
    position: absolute;
    z-index: 10;
    left: 15px;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.5) 3px 3px 10px;
    border-radius: 3px;
    transition: all 0.3s linear;
}

/* 唱片内圈封面 */
.circle {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 100%;
    background-color: red;
    /*看不出旋转效果，所以使用图片*/
    background: url("https://s1.ax1x.com/2022/05/02/OPEAiT.jpg");
    background-size: cover;
}

/*唱片圆心，不需要可以直接删除，或者把背景色删掉或改为透明*/
.circle-heart {
    width: 10px;
    height: 10px;
    margin: 0 auto;
    border-radius: 100%;
    background: rgba(0, 0, 0, 1);
}

/* 唱片信息box */
.vinyl-text {
    width: 100%;
    height: 364px;
    position: relative;
    border-radius: 8px;
    display: inline-block;
}

/* 唱片主要信息 */
.vinyl-mess {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    padding: 20px;
    border-radius: 8px;
    transition: 0.6s ease-in-out;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

/* 唱片曲目列表或节选 */
.vinyl-list {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    top: -364px;
    opacity: 0;
    padding: 20px;
    border-radius: 8px;
    transition: 0.6s ease-in-out;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.table-mess,
.table-list {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    word-break: break-word;
    word-wrap: break-word;
    color: #333;
}

tr,
td {
    border: 1px solid #eee;
    margin: auto;
    vertical-align: middle !important;
    padding: 0 10px;
}

.text-title {
    text-align: center;
    margin-bottom: 25px;
}

.vinyl-main:hover+.vinyl-text .vinyl-list {
    opacity: 1;
    transition: 0.6s ease-in-out;
}

.vinyl-main:hover+.vinyl-text .vinyl-mess {
    opacity: 0;
    transition: 0.6s ease-in-out;
}

.vinyl-main:hover .main-circle {
    left: 55px;
    transition: all 0.3s linear;
}

.vinyl-main:hover .vinyl-cover {
    left: -25px;
    transition: all 0.3s linear;
}

/*适配各分辨率，可不加*/
@keyframes circle {
    0% {
        /*transform对元素进行旋转、缩放、移动或倾斜。以下就是旋转0度。*/
        transform: rotate(0deg);
    }

    100% {
        /*以下就是旋转360度*/
        transform: rotate(360deg);
    }
}

@media screen and (max-width: 690px) {
    .main-box {
        top: 0;
        left: 0;
        width: 100%;
        margin-top: 100px;
    }

    .vinyl-box {
        width: 85%;
    }
}

@media screen and (min-width: 1280px) {
    .main-box {
        top: 0;
        left: 0;
        width: 100%;
    }

    .vinyl-box {
        width: 75%;
    }
}

@media screen and (min-width: 1600px) {
    .main-box {
        top: 0;
        left: 0;
        width: 100%;
    }

    .vinyl-box {
        width: 40%;
    }
}
```

###在Md文章中使用时
- 嵌入到md页面时代码需要做一些微调

1. HTML代码
```html
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
        {% note orange 'fas fa-fan' disabled %}唱片信息 {% endnote %}
            <table class="table-mess">
                <thead>
                <tr>
                    <td>标签：</td>
                    <td>Victor – VIP-7294</td>
                </tr>
                <tr>
                    <td>格式：</td>
                    <td>Vinyl, LP, Album, Pink Obi</td>
                </tr>
                <tr>
                    <td>国家：</td>
                    <td>Japan</td>
                </tr>
                <tr>
                    <td>发行日期：</td>
                    <td>1980</td>
                </tr>
                <tr>
                    <td>类型：</td>
                    <td>Pop, Classical</td>
                </tr>
                <tr>
                    <td>风格：</td>
                    <td>Ballad, Easy Listening</td>
                </tr>
                </thead>
            </table>
        </div>
        <div class="vinyl-list">
            {% note orange 'fas fa-fan' disabled %}曲目节选{% endnote %}
            <table class="table-list" border="1">
                <tr>
                    <td>Souvenirs D'Enfance</td>
                    <td>2:48</td>
                </tr>
                <tr>
                    <td>Lyphard Melodie</td>
                    <td>4:40</td>
                </tr>
                <tr>
                    <td>Secret Of My Life</td>
                    <td>2:59</td>
                </tr>
                <tr>
                    <td>Ping Pong Sous Les Arbres</td>
                    <td>3:15</td>
                </tr>
                <tr>
                    <td>Moon River</td>
                    <td>3:14</td>
                </tr>
                <tr>
                    <td>La Vie En Rose</td>
                    <td>2:37</td>
                </tr>
            </table>
        </div>
    </div>
</div>
```

2. CSS代码
```css
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
    background: url(https://s1.ax1x.com/2022/05/02/OPEpss.jpg);
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
    background: url("https://s1.ax1x.com/2022/05/02/OPEAiT.jpg");
    background-size: cover;
}
/*白色圆心，不需要可以直接删除，或者把背景色删掉或改为透明*/
.circle-heart{
    width: 10px;
    height: 10px;
    margin: 0 auto;
    border-radius: 100%;
    background: rgba(0,0,0,1);
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
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    transition: all 0.6s;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    box-sizing: border-box;
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
```

3. md页面嵌入的完整代码
```html
<style></style>
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
        {% note orange 'fas fa-fan' disabled %}唱片信息 {% endnote %}
            <table class="table-mess">
                <thead>
                <tr>
                    <td>标签：</td>
                    <td>Victor – VIP-7294</td>
                </tr>
                <tr>
                    <td>格式：</td>
                    <td>Vinyl, LP, Album, Pink Obi</td>
                </tr>
                <tr>
                    <td>国家：</td>
                    <td>Japan</td>
                </tr>
                <tr>
                    <td>发行日期：</td>
                    <td>1980</td>
                </tr>
                <tr>
                    <td>类型：</td>
                    <td>Pop, Classical</td>
                </tr>
                <tr>
                    <td>风格：</td>
                    <td>Ballad, Easy Listening</td>
                </tr>
                </thead>
            </table>
        </div>
        <div class="vinyl-list">
            {% note orange 'fas fa-fan' disabled %}曲目节选{% endnote %}
            <table class="table-list" border="1">
                <tr>
                    <td>Souvenirs D'Enfance</td>
                    <td>2:48</td>
                </tr>
                <tr>
                    <td>Lyphard Melodie</td>
                    <td>4:40</td>
                </tr>
                <tr>
                    <td>Secret Of My Life</td>
                    <td>2:59</td>
                </tr>
                <tr>
                    <td>Ping Pong Sous Les Arbres</td>
                    <td>3:15</td>
                </tr>
                <tr>
                    <td>Moon River</td>
                    <td>3:14</td>
                </tr>
                <tr>
                    <td>La Vie En Rose</td>
                    <td>2:37</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<style type="text/css">
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
    background: url(https://s1.ax1x.com/2022/05/02/OPEpss.jpg);
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
    background: url("https://s1.ax1x.com/2022/05/02/OPEAiT.jpg");
    background-size: cover;
}
/*白色圆心，不需要可以直接删除，或者把背景色删掉或改为透明*/
.circle-heart{
    width: 10px;
    height: 10px;
    margin: 0 auto;
    border-radius: 100%;
    background: rgba(0,0,0,1);
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
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    transition: all 0.6s;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    box-sizing: border-box;
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
</style>
```

{% note orange 'fa-solid fa-circle-exclamation' disabled %}为了避免md页面嵌入HTML代码对页面其他元素产生影响，CSS代码写在HTML代码后面时，需要在HTML代码前面再加一个`<style></style>`标签。{% endnote %}
{% folding 不加style标签会出现的状况（搞笑） %}
![](https://s1.ax1x.com/2022/05/04/OVOK9H.gif)
{% endfolding %}