---
title: 给博客评论系统添加好看的邮件通知模板
cover: 'https://s1.ax1x.com/2022/05/03/OACyOs.jpg'
tags:
  - 前端
  - HTML
  - Hexo
keywords:
  - 前端
  - HTML
  - Hexo
categories: 前端
abbrlink: 8304
date: 2022-04-18 20:20:39
---


{% tip tips faa-horizontal animated %}教程中的模板使用平台以Twikoo为例，将源码贴入评论系统后台通知模板栏位即可。{% endtip %}

##新评论邮件通知模板

{% folding 新评论邮件模板样式预览 %}
![](https://cdn.jsdelivr.net/gh/1477017264/PicGoGallery/img/Snipaste_2022-04-18_01-27-22.png)
{% endfolding %}


```HTML
<div>
	<div id="isForwardContent" style="margin:auto auto;width: 100%;display: block;">
		<div>
			<div id="content" >
				<div id="content_box" style="width: 100%;max-width: 798px; margin: auto auto; border-radius: 7px; overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);">
					<header style="overflow: hidden">
						<img src="https://cdn.jsdelivr.net/gh/1477017264/PicGoGallery/wallpaper/wallpaper5.jpg" style="width: 100%; z-index: 666;border-radius:7px 7px 0 0;" />
					</header>
					<div style="padding: 5px 20px;background: #eee9e3;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);border-radius:0 0 7px 7px;border: #ffd6a4 solid 1px;">
						<div class="dear" style="position: relative;border-radius: 5px; color: white; float: left; z-index: 999; background: #ffd6a4; padding: 5px 30px; margin: -25px auto 0; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);">
							<strong>Dear DaDio</strong>
						</div>
						<br />
						<center>
							<h3>来自&nbsp;<strong>${NICK}</strong>&nbsp;的评论</h3>
						</center>
						<hr style="width:200px;border:0;border-bottom:1px solid #e5e5e5;margin:12px auto;" />
						<br />
						<p>
							<strong style="color: #27328e;">${NICK}</strong>&nbsp;评论了你的文章：
						</p>
						<div class="tk-content" style=" border-bottom: #ddd 1px solid; border-left: #ddd 1px solid; padding-bottom: 20px; background-color: #eee; margin: 15px 0px; padding-left: 20px; padding-right: 20px; border-top: #ddd 1px solid; border-right: #ddd 1px solid; padding-top: 20px;border-radius: 5px; ">
							${COMMENT}</div>
						<br />
						<div class="chakan" style="text-align: center;">
							<a href="${POST_URL}" style="color:#ffffff;text-decoration:none;display:inline-block;min-height:28px;line-height:28px;padding:0 13px;outline:0;background:#ffd6a4;font-size:13px;text-align: center;font-weight:400;border:0;border-radius:999em" target="_blank">点击去原文查看&gt;&gt;</a>
							<p>
							</p>
						</div>
						<div class="footer-p" style="text-align: center; margin: 20px 0; display:flex;color:#b3b3b1;text-decoration:none;width: 100%;height: 100px;justify-content: flex-end;">
							<div class="Your" style="position: relative;border-radius: 5px; color: #000; float: right; z-index: 999; display: flex;justify-content: center;align-items: flex-end;flex-flow: column;flex-wrap: wrap;">
								<div class="text" style="margin: 10px;">
								 <a href="http://dadio.cc/" style="text-align:center; color: #27328e;text-decoration: none;" target="_blank">DaDio's Blog</a>
								</div>
								<p style="margin: 10px;">©&nbsp;2022</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
		</div>
		<style type="text/css">
			.qmbox ::-webkit-scrollbar {
				display: none;
			}
		</style>
		<style id="content_box" type="text/css">
			#content_box {
				border-radius: 7px;
				max-width: 800px;
				padding: 20px 20px 20px 20px;
				margin: auto;
				border-color: transparent;
				background: repeating-linear-gradient(-45deg, #fa2c06 0, #fa2c06 12.5%, #eee6e2 0, #eee6e2 25%, #293596 0, #293596 37.5%, #eee6e2 0, #eee6e2 50%) 0/90px 90px;
			}
			<style id="cloudAttachStyle"type="text/css">.qmbox #divNeteaseBigAttach,
			.qmbox #divNeteaseBigAttach_bak {
				display: none;
			}
		</style>
		<style id="blockquoteStyle" type="text/css">
			.qmbox blockquote {
				display: none;
			}
		</style>
		<style type="text/css">
			.qmbox body {
				font-size: 14px;
				font-family: arial, verdana, sans-serif;
				line-height: 1.666;
				padding: 0;
				margin: 0;
				overflow: auto;
				white-space: normal;
				word-wrap: break-word;
				min-height: 100px;
			}
			.qmbox td,
			.qmbox input,
			.qmbox button,
			.qmbox select,
			.qmbox body {
				font-family: Helvetica, 'Microsoft Yahei', verdana;
			}
			.qmbox pre {
				white-space: pre-wrap;
				white-space: -moz-pre-wrap;
				white-space: -pre-wrap;
				white-space: -o-pre-wrap;
				word-wrap: break-word;
				width: 95%;
			}
			.qmbox th,
			.qmbox td {
				font-family: arial, verdana, sans-serif;
				line-height: 1.666;
			}
			.qmbox img {
				border: 0;
			}
			.qmbox header,
			.qmbox footer,
			.qmbox section,
			.qmbox aside,
			.qmbox article,
			.qmbox nav,
			.qmbox hgroup,
			.qmbox figure,
			.qmbox figcaption {
				display: flex;
				justify-content: center;
			}
			.qmbox blockquote {
				margin-right: 0px;
			}
		</style>
		<style type="text/css">
			@media screen and (max-width: 1100px) {
				#content p {
					font-size: 10px;
				}
				#content h3 {
					font-size: 14px;
				}
				.footer-p {
					font-size: 9px;
				}
				.dear {
					font-size: 12px;
				}
			}
		</style>
		<style id="ntes_link_color" type="text/css">
			.qmbox a,
			.qmbox td a {
				color: #236da1;
			}
		</style>
	</div>
</div>
```


##回复邮件通知模板

{% folding 回复通知邮件模板样式预览 %}
![](https://cdn.jsdelivr.net/gh/1477017264/PicGoGallery/img/Snipaste_2022-04-18_01-46-10.png)
{% endfolding %}


```HTML
<div>
	<div id="isForwardContent">
		<div>
			<div id="content">
				<div id="content_box" style="width: 100%;max-width: 798px; margin: auto auto; border-radius: 7px; overflow: hidden;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);">
					<header style="overflow: hidden"> <img
							src="https://cdn.jsdelivr.net/gh/1477017264/PicGoGallery/img/backimg.jpg"
							style="width: 100%; z-index: 666;border-radius:7px 7px 0 0;" /> </header>
					<div style="padding: 5px 20px;background: #eee9e3;-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);border-radius:0 0 7px 7px;border: #ffd6a4 solid 1px;">
						<div class="dear"
							style="position: relative;border-radius: 5px; color: white; float: left; z-index: 999; background: #ffd6a4; padding: 5px 30px; margin: -25px auto 0; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);">
							<strong>Dear ${PARENT_NICK} </strong>
						</div> <br />
						<center>
							<h3>来自&nbsp;<strong>${NICK}</strong>&nbsp;的回复</h3>
						</center>
						<hr style="width:200px;border:0;border-bottom:1px solid #e5e5e5;margin:12px auto;" />
						<br />&nbsp; &nbsp; <p>您在 <a href="${POST_URL}" style="text-decoration: none; color: #ffb8b8"
								target="_blank">&nbsp;<strong
									style="color: #27328e;">${SITE_NAME}</strong>&nbsp;</a>上发表的评论： </p>
						<div class="tk-content"
							style=" border-bottom: #ddd 1px solid; border-left: #ddd 1px solid; padding-bottom: 20px; background-color: #eee; margin: 15px 0px; padding-left: 20px; padding-right: 20px; border-top: #ddd 1px solid; border-right: #ddd 1px solid;  padding-top: 20px;border-radius: 5px;">
							${PARENT_COMMENT}</div>
						<p> <strong style="color: #27328e;">${NICK}</strong>&nbsp;给您回复啦： </p>
						<div class="tk-content"
							style=" border-bottom: #ddd 1px solid; border-left: #ddd 1px solid; padding-bottom: 20px; background-color: #eee; margin: 15px 0px; padding-left: 20px; padding-right: 20px; border-top: #ddd 1px solid; border-right: #ddd 1px solid; padding-top: 20px;border-radius: 5px; ">
							${COMMENT}</div>
						<p>欢迎再次光临 <a style="text-decoration:none; color:#27328e" href="${SITE_URL}"
								target="_blank"><strong style="color: #27328e;">${SITE_NAME}</strong></a>！ </p> <br />
						<div class="chakan" style="text-align: center;"> <a href="${POST_URL}"
								style="color:#ffffff;text-decoration:none;display:inline-block;min-height:28px;line-height:28px;padding:0 13px;outline:0;background:#ffd6a4;font-size:13px;text-align: center;font-weight:400;border:0;border-radius:999em"
								target="_blank">点击去原文查看&gt;&gt;</a>
							<p> </p>
						</div>
						<div class="footer-p"
							style="text-align: center; margin: 20px 0; display:flex;color:#b3b3b1;text-decoration:none;width: 100%;height: 100px;justify-content: flex-end;">
							<div class="Your"
								style="position: relative;border-radius: 5px; color: #000; float: right; z-index: 999; display: flex;justify-content: center;align-items: flex-end;flex-flow: column;flex-wrap: wrap;">
								<div class="text" style="margin: 10px;"> Your <a href="http://dadio.cc/"
										style="text-align:center; color: #27328e;text-decoration: none;"
										target="_blank">DaDio</a> </div>
								<p style="margin: 10px;">©&nbsp;2022</p>
							</div>
						</div>
					</div>
				</div>
			</div> <br />
		</div>
		<style type="text/css">
			.qmbox ::-webkit-scrollbar {
				display: none;
			}
		</style>
		<style id="content_box" type="text/css">
			#content_box {
				border-radius: 7px;
				max-width: 800px;
				padding: 20px 20px 20px 20px;
				margin: auto;
				border-color: transparent;
				background: repeating-linear-gradient(-45deg, #fa2c06 0, #fa2c06 12.5%, #eee6e2 0, #eee6e2 25%, #293596 0, #293596 37.5%, #eee6e2 0, #eee6e2 50%) 0/90px 90px;
			}
			<style id="cloudAttachStyle"type="text/css">.qmbox #divNeteaseBigAttach,
			.qmbox #divNeteaseBigAttach_bak {
				display: none;
			}
		</style>
		<style id="blockquoteStyle" type="text/css">
			.qmbox blockquote {
				display: none;
			}
		</style>
		<style type="text/css">
			.qmbox body {
				font-size: 14px;
				font-family: arial, verdana, sans-serif;
				line-height: 1.666;
				padding: 0;
				margin: 0;
				overflow: auto;
				white-space: normal;
				word-wrap: break-word;
				min-height: 100px;
			}
			.qmbox td,
			.qmbox input,
			.qmbox button,
			.qmbox select,
			.qmbox body {
				font-family: Helvetica, 'Microsoft Yahei', verdana;
			}
			.qmbox pre {
				white-space: pre-wrap;
				white-space: -moz-pre-wrap;
				white-space: -pre-wrap;
				white-space: -o-pre-wrap;
				word-wrap: break-word;
				width: 95%;
			}
			.qmbox th,
			.qmbox td {
				font-family: arial, verdana, sans-serif;
				line-height: 1.666;
			}
			.qmbox img {
				border: 0;
			}
			.qmbox header,
			.qmbox footer,
			.qmbox section,
			.qmbox aside,
			.qmbox article,
			.qmbox nav,
			.qmbox hgroup,
			.qmbox figure,
			.qmbox figcaption {
				display: flex;
				justify-content: center;
			}
			.qmbox blockquote {
				margin-right: 0px;
			}
		</style>
		<style type="text/css">
			@media screen and (max-width: 1100px) {
				#content p {
					font-size: 10px;
				}
				#content h3 {
					font-size: 14px;
				}
				.footer-p {
					font-size: 9px;
				}
				.dear {
					font-size: 12px;
				}
			}
		</style>
		<style id="ntes_link_color" type="text/css">
			.qmbox a,
			.qmbox td a {
				color: #236da1;
			}
		</style>
	</div>
</div>
```

