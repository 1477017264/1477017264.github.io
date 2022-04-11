---
title: 关于我
date: 2022-04-08 19:25:36
aside: false
type: "about"
top_img: './img/aboutImg.jpg'
---

<style>
.card{
  width: 80%;
  background: rgba(255,255,255,0.3);
  overflow: hidden;
  border-radius: 25px;
  font-family: "montserrat",sans-serif;
  box-shadow: 0 0 20px #00000070;
}
.middle{
  position: relative;
  top: 50%;
  margin: auto;
}
.top-section{
  position: relative;
}
.top-section img{
  width: 100%;
}
.menuicon{
  position: absolute;
  width: 22px;
  left: 20px;
  top: 20px;
  cursor: pointer;
}
.menuicon span{
  width: 100%;
  height: 3px;
  background: #000;
  position: relative;
  display: block;
  margin-bottom: 6px;
  opacity: .5;
  transition: .4s;
}
.menuicon .s1{
  left: -5px;
}
.menuicon .s2{
  left: 5px;
}
.menuicon:hover span{
  left: 0;
}
.name{
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 40px;
  font-weight: 900;
  opacity: .5;
}

.info-section{
  padding: 40px;
  padding-top: 0;
}
h2{
  position: relative;
  font-size: 16px;
}
.border{
  width: 30px;
  height: 3px;
  background: #ffb8b8;
  position: absolute;
  left: 0;
  bottom: -6px;
}
p{
  /* text-align: justify; */
  font-size: 14px;
}

.s-m{
  text-align: center;
  margin-top: 20px;
}
.s-m a{
  text-decoration: none;
  font-size: 20px;
  color: #333;
  padding: 0 14px;
  transition: .4s;
}
.s-m a:hover{
  color: #ffb8b8;
}

</style>
<div class="card middle">
      <div class="top-section">
        <img src="/img/about.jpg" alt="">
        <div class="menuicon">
          <span class="s1"></span>
          <span class="s2"></span>
        </div>
      </div>
      <div class="info-section">
        <h2>关于我
          <div class="border"></div>
        </h2>
          <p>
            喜欢摄影，黑胶，瞎捣鼓的男生一枚···
          </p>
        <h2>链接
          <div class="border"></div>
        </h2>
        <div class="s-m">
          <a href="https://www.facebook.com/da.diao.3517" class="fa-brands fa-facebook"></a>
          <a href="https://space.bilibili.com/54369666?spm_id_from=333.1007.0.0" class="fa-brands fa-bilibili"></a>
          <a href="https://www.instagram.com/dadio_photography/" class="fab fa-instagram"></a>
          <a href="https://github.com/1477017264" class="fa-brands fa-github"></a>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=CKSeacd32Pxlg9Vv4wDID-SdDHmM5t5u&noverify=0" class="fab fa-qq"></a>
        </div>
      </div>
    </div> 