//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://s1.ax1x.com/2022/05/02/OPk7NT.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPkTEV.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPkIH0.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPk5Bq.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPEtQH.png)",
    "url(https://s1.ax1x.com/2022/05/02/OPENyd.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPEYSe.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPEGWD.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPA7qI.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPA5xH.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPA4Re.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPAC4O.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPAiCD.jpg)",
    "url(https://s1.ax1x.com/2022/05/02/OPEDFf.gif)",
    "url(https://s1.ax1x.com/2022/05/02/OPE0TP.gif)",
    "url(https://s1.ax1x.com/2022/05/02/OPEwwt.gif)",
    "url(https://s1.ax1x.com/2022/05/02/OPEdeI.gif)",
    "url(https://s1.ax1x.com/2022/05/02/OPEUOA.gif)",
    "url(https://s1.ax1x.com/2022/05/10/ONIVDf.gif)"
];

//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var bannerimg =[
//     "url(https://img.gejiba.com/images/d4d37e2e2f082a64c9ad63e91fd0e4b1.gif)",
//     "url(https://img.gejiba.com/images/9a05d14e53a5761604e8cefae5865522.jpg)",
//     "url(https://img.gejiba.com/images/a0572091910840dd9c87c0b9b6f09a23.png)",
//     "url(https://img.gejiba.com/images/25f342c02de9e91678927268984a8951.jpg)"
// ];
//获取banner图片总数，生成随机数
// var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
