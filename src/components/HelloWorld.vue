<template>
  <!--首页-->
  <div class="my-food">
    <div class="my-top">
      <!--左侧logo-->
      <a href=""><img class="logo" src="../assets/logo.png" alt=""></a>
      <!--导航栏-->
      <div class="my-nav">
        <ul class="nav">
          <li><a href="">首页</a></li>
          <li class="drop-down"><a href="">展会介绍</a>
            <ul class="drop-down-content">
              <li><a href="">组织机构</a></li>
              <li><a href="">展区分布</a></li>
              <li><a href="">展品范围</a></li>
              <li><a href="">2017展商名录</a></li>
              <li><a href="">2014展会回顾</a></li>
              <li><a href="">2015展会回顾</a></li>
              <li><a href="">2016展会回顾</a></li>
              <li><a href="">2017展会回顾</a></li>
            </ul>
          </li>
          <li><a href="">参展服务</a></li>
          <li><a href="">参观服务</a></li>
          <li><a href="">现场活动</a></li>
          <li><a href="">新闻中心</a></li>
          <li><a href="">联系我们</a></li>
        </ul>
      </div>
      <!--中英国旗图标-->
      <div class="logo-right">
        <span class="flag"><img src="../assets/China Flag.png" alt=""></span>
        <span>|</span>
        <span class="flag"><img src="../assets/UK Flag.png" alt=""></span>
        <span id="en">EN</span>
        <span id="cn">中</span>
      </div>
    </div>
    <!--banner start-->
    <div class="my-banner">
    <!--会展名-->
    <div class="show-name">
      <img src="../assets/showName.png" alt="">
    </div>
    <!--时间地点-->
    <div class="time-place">
      <img src="../assets/timePlace.png" alt="">
    </div>
    <!--轮播图-->
    <div class="banner-dot">
      <span class="dots"></span>
      <span class="dots"></span>
      <span class="dots"></span>
      <span class="dots"></span>
    </div>

  </div>
    <!--banner end-->
    <!--入口 start-->
    <!--焦点目标字体颜色加深、图标变色-->
    <div class="my-enter">
      <div class="enter-box">
        <div>
          <div class="m1"></div>
          <div class="c3">展位预定</div>
        </div>
        <div>
          <div class="m2"></div>
          <div class="c3">注册参观</div>
        </div>
        <div>
          <div class="m3"></div>
          <div class="c3">贸易配对</div>
        </div>
        <div>
          <div class="m4"></div>
          <div class="c3">热门活动</div>
        </div>
      </div>

    </div>
    <!--入口 end-->

    <!--资讯 start-->
    <div class="msg">
      <div class="carousel">
        <div class="pic">
          <p class="msg-time">2018-12-10</p>
          <p class="msg-title">2017中国国际食品博览会再度启航</p>
          <div class="msg-btns">
            <span class="btns"></span>
            <span class="btns"></span>
            <span class="btns"></span>
            <span class="btns"></span>
          </div>
        </div>
      </div>
      <div class="msg-up">
        <div class="left-top">07</div>
        <div class="left-mid">5月</div>
        <div class="mid-top">2018第五届中国（上海）国际食品博览会筹备会议隆重召开</div>
        <p class="content">
          2018年5月4日，第五届中国（上海）国际食品博览会筹备会议在黄山茶林场隆重召开。中国食品工业协会刘治常务副会长、中国食品工业协会曹树民副会长、中国食品工业协会侯红梅主任、上海市食品...
        </p>
      </div>
      <div class="line"></div>
      <div class="msg-down">
        <div class="left-top">10</div>
        <div class="left-mid">12月</div>
        <div class="mid-top">精彩展会，感谢有您|致所有食博会来宾</div>
        <p class="content">尊敬的各位来宾：由中华人民共和国商务部批准，中国食品工业协会主办，光明食品（集团）有限公司承办，上海东艺会展服务有限公司运营的2017中国国际食品博览会已完美落下帷幕...</p>
      </div>
      <button class="btn">更多资讯</button>
    </div>
    <!--资讯 end-->

    <!--参展范围 start???-->
    <div class="range">
      <!--标题-->
      <div class="ran-title">
        <div class="ran-tit"><p>参展范围</p></div>
        <div class="ran-line"></div>
      </div>
      <table>
        <tr>
          <td>
            <div @mouseenter="toggle()" @mouseleave="toggle()">
              <div v-show="isShow" class="r1">
                <img class="ran-icons" src="../assets/乳制品_03.png" alt="">
                <p class="tp">乳制品</p>
              </div>
              <div v-show="!isShow" class="tab-hover">
                <div class="tab-title">乳制品</div>
                <p class="tab-p">类型、类型、类型类型、类型、类型</p></div>
            </div>
          </td>
          <td>
            <div class="r1">
              <img class="ran-icons" src="../assets/甜品_05.png" alt="">
              <p class="tp">甜品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/冷冻食品_05.png" alt=""></div>
              <p class="tp">冷冻食品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/饮料_05.png" alt=""></div>
              <p class="tp">咖啡、水及饮料</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/调味品_05.png" alt=""></div>
              <p class="tp">调味品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/农产品_05.png" alt=""></div>
              <p class="tp">农产品</p></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/肉制品_06.png" alt=""></div>
              <p class="tp">肉制品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/果蔬_07.png" alt=""></div>
              <p class="tp">果蔬</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/有机食品_07.png" alt=""></div>
              <p class="tp">天然、有机食品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/烘焙食品.png" alt=""></div>
              <p class="tp">烘焙食品</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/酒类_07.png" alt=""></div>
              <p class="tp">酒类</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/粮油加工品_07.png" alt=""></div>
              <p class="tp">油粮加工品</p></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/餐饮食材_06.png" alt=""></div>
              <p class="tp">餐饮食材</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/食品添加剂_07.png" alt=""></div>
              <p class="tp">食品添加剂</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/食品机械_07.png" alt=""></div>
              <p class="tp">食品机械</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/食品仓储_07.png" alt=""></div>
              <p class="tp">食品仓储与物流</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/品牌创意_07.png" alt=""></div>
              <p class="tp">品牌创意与包装</p></div>
          </td>
          <td>
            <div class="r1">
              <div><img class="ran-icons" src="../assets/投资咨询_07.png" alt=""></div>
              <p class="tp">投资咨询与服务</p></div>
          </td>
        </tr>
      </table>
    </div>
    <!--参展范围 end-->

    <!--部分参展企业 start-->
    <div class="comp">
      <p class="comp-title">部分参展企业</p>
      <div class="companys">
        <div class="l-btn"></div>
        <div class="r-btn"></div>
      </div>
    </div>
    <!--部分参展企业 end-->

    <div class="foot">
      <div class="foot-up">
        <p>上海万耀企龙展览有限公司（上海总部）</p>
        <p>电话：+86 21 6195 6088</p>
        <p>地址：上海市静安区南京西路1333号上海展览中心商务楼</p>
      </div>
      <div class="foot-down">©2018 中国国际食品博览会版权所有 沪ICP备010024094号-2</div>
      <div class="foot-pic"></div>
    </div>

    <div class="float">
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow: true
      }
    },
    methods: {
      toggle: function (index) {
        console.log(index);
        this.isShow = !this.isShow;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  html {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .foot {
    width: 1920px;
    height: 180px;
    background-color: #403f3f;
  }

  .foot-up {
    width: 355px;
    height: 71px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0;
    color: #aaaaaa;
    position: relative;
    top: 33px;
    left: 376px;
  }

  .foot-down {
    width: 331px;
    height: 12px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0;
    color: #999999;
    position: relative;
    left: 376px;
    bottom: -70px;
    float: left;
  }

  .foot-pic {
    width: 140px;
    height: 24px;
    background-image: url("../assets/万耀_03.png");
    position: relative;
    left: 1402px;
  }

  .comp {
    width: 1920px;
    height: 320px;
    background-image: url("../assets/合作伙伴背景_02.png");
  }

  .comp-title {
    width: 168px;
    height: 28px;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0;
    color: #333333;
    position: relative;
    top: 78px;
    left: 876px;
  }

  .companys {
    width: 1170px;
    height: 110px;
    background-image: url("../assets/企业_04.png");
    margin-top: 134px;
    margin-left: 375px;
    float: left;
  }

  .l-btn {
    width: 40px;
    height: 110px;
    background-image: url("../assets/左按钮_04.png");
    cursor: pointer;
    float: left;
  }

  .r-btn {
    width: 40px;
    height: 110px;
    background-image: url("../assets/右按钮_04.png");
    cursor: pointer;
    float: right;
  }

  .tab-title {
    width: 54px;
    height: 18px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0;
    color: #ffffff;
    position: relative;
    left: 58px;
    top: 57px;
  }

  .tab-p {
    width: 127px;
    height: 39px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0;
    color: #ffffff;
    position: relative;
    left: 21px;
    top: 102px;
  }

  .tab-hover {
    background: #ed6f03;
    width: 170px;
    height: 204px;
  }

  .r1 {
    width: 170px;
    height: 166px;
    text-align: center;
    position: relative;
    top: 40px;
  }

  .tp {
    width: 170px;
    height: 36px;
    position: relative;
    top: 20px;
  }

  .ran-icons {
    width: 90px;
    height: 90px;
  }

  /*整体页面*/
  body {
    margin: 0;
    padding: 0;
  }

  .my-food {
    width: 1920px;
    height: 2643px;
    background: #dddddd;
  }

  /*头部*/
  .my-top {
    width: 1920px;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  }

  .logo {
    position: absolute;
    left: 375px;
    top: 23px;
    bottom: 22px;
    width: 132px;
    height: 35px;
    float: left;
  }

  .my-nav {
    width: 697px;
    height: 80px;
    float: left;
  }

  .nav {
    margin-left: 685px;
    margin-right: 538px;
    width: 697px;
    height: 80px;
  }

  ul {
    list-style: none;
  }

  .nav > li {
    float: left;
  }

  ul a {
    display: block;
    text-decoration: none;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #333;
    background-color: #fff;
  }

  ul > li > ul {
    width: 150px;
    height: 356px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  }

  ul > li > ul > li {
    width: 150px;
    height: 45px;
    background: #fff;
    border-bottom: 1px solid #dddddd;
  }

  ul > li > ul > li > a {
    width: 150px;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .drop-down {
    position: relative;
  }

  .drop-down-content {
    padding: 0;
    display: none;
    position: absolute;
    z-index: 1;
  }

  li a:hover {
    color: #ed6d00;
    background-color: #f5f5f5;
    width: 80px;
    height: 80px;
    border-bottom: 2px solid #ed6d00;
  }

  .drop-down-content a {
    color: #666666;
    width: 150px;
    height: 44px;
    border-bottom: 0 solid #fff;
  }

  .drop-down-content a:hover {
    color: #666666;
    width: 150px;
    height: 44px;
    border-bottom: 1px solid #fff;
  }

  .drop-down-content li:hover a {
    background-color: #f5f5f5;
  }

  .nav .drop-down:hover .drop-down-content {
    display: block;
    z-index: 1;
  }

  .logo-right {
    float: left;
    position: absolute;
    left: 1482px;
    top: 33px;
    width: 107px;
    height: 15px;
  }

  .flag {
    width: 24px;
    height: 15px;
    cursor: pointer;
  }

  .my-banner {
    width: 1920px;
    height: 360px;
    background-image: url("../assets/banner.png");
    position: relative;
    top: 3px;
    z-index: 0;
  }

  .show-name {
    width: 376px;
    height: 177px;
    position: relative;
    left: 376px;
    top: 59px;
    bottom: 124px;
  }

  .time-place {
    width: 376px;
    height: 32px;
    position: relative;
    left: 376px;
    top: 100px;
    bottom: 55px;
  }

  .dots {
    list-style: none;
    width: 8px;
    height: 8px;
    margin-right: 6px;
    background-color: #afafaf;
    border-radius: 100%;
    float: left;
  }

  .dots:hover {
    width: 10px;
    height: 10px;
    background-color: #ffb300;
    margin-right: 4px;
  }

  .banner-dot {
    width: 61px;
    height: 10px;
    position: absolute;
    left: 932px;
    top: 329px;
  }

  /*入口模块*/
  .my-enter {
    display: flex;
    justify-content: center;
    width: 1920px;
    height: 300px;
    background-color: #fafafa;
  }

  .enter-box {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    height: 300px;
  }

  .m1 {
    margin-top: 73px;
    width: 101px;
    height: 102px;
    background-image: url("../assets/地图.png");
    background-repeat: no-repeat;
  }

  .m1:hover {
    background-image: url("../assets/地图悬停.png");
  }

  .m2 {
    margin-top: 73px;
    width: 100px;
    height: 102px;
    background-image: url("../assets/对象.png");
    background-repeat: no-repeat;
  }

  .m3 {
    margin-top: 73px;
    width: 100px;
    height: 102px;
    background-image: url("../assets/合作.png");
    background-repeat: no-repeat;
  }

  .m4 {
    margin-top: 73px;
    width: 100px;
    height: 102px;
    background-image: url("../assets/礼物.png");
    background-repeat: no-repeat;
  }

  .c3 {
    margin-top: 29px;
    width: 100px;
    height: 24px;
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    color: #333333;
  }
  /*入口模块end*/

  /*咨询入口 start*/
  .msg {
    width: 1919px;
    height: 590px;
    background-color: #ffffff;
  }

  .carousel {
    width: 541px;
    height: 348px;
    margin-left: 385px;
    margin-top: 71px;
    background-image: url("../assets/msg-bcg.png");
    float: left;
  }

  .pic {
    width: 541px;
    height: 348px;
    background-image: url("../assets/msg-pic.png");
  }

  .msg-time {
    font-size: 14px;
    color: #fff;
    position: relative;
    top: 260px;
    left: 22px;
  }

  .msg-title {
    font-size: 16px;
    color: #fff;
    position: relative;
    top: 271px;
    left: 22px;
  }

  .msg-btns {
    width: 78px;
    height: 8px;
  }

  .btns {
    width: 8px;
    height: 8px;
    background-color: #dddddd;
    list-style: none;
    margin-right: 10px;
    float: left;
    position: relative;
    left: 464px;
    top: 288px;
  }

  .btns:hover {
    background-color: #ed6e02;
    cursor: pointer;
  }

  .msg-up {
    width: 550px;
    height: 112px;
    float: left;
    margin-top: 71px;
    margin-left: 64px;
  }

  .msg-down {
    width: 550px;
    height: 112px;
    float: left;
    margin-top: 98px;
    margin-left: 64px;
  }

  .left-top {
    width: 40px;
    height: 40px;
    background-color: #ed6e02;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #ffffff;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;
    float: left;
  }

  .left-mid {
    width: 30px;
    height: 15px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #999999;
    float: left;
    position: relative;
    top: 51px;
    left: -35px;
  }

  .mid-top {
    width: 492px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0;
    color: #333333;
  }

  .content {
    width: 483px;
    height: 71px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #666666;
    position: relative;
    top: 30px;
    left: 30px;
    float: left;
  }

  .line {
    width: 540px;
    height: 1px;
    background: #eee;
    float: left;
    position: relative;
    top: 49px;
    left: 73px;
  }

  .btn {
    display: inline-block;
    width: 150px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 20px;
    border: solid 1px #dddddd;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 1px;
    color: #333333;
    position: relative;
    top: 480px;
    left: -650px;
    cursor: pointer;
  }

  .range {
    width: 1920px;
    height: 863px;
    background-color: #ffffff;
  }

  .ran-title {
    width: 1170px;
    height: 44px;
    margin-left: 375px;
  }

  .ran-tit {
    width: 120px;
    height: 40px;
    background-color: #ed6d00;
    opacity: 0.99;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 44px;
    letter-spacing: 0;
    color: #ffffff;
    text-align: center;
  }

  .ran-line {
    width: 1170px;
    height: 2px;
    background-color: #ed6f03;
  }

  table {
    margin-left: 373px;
    margin-top: 31px;
  }

  tr {
    display: block;
    margin-bottom: 30px;
  }

  td {
    display: inline-block;
    width: 170px;
    height: 204px;
    background-color: #ffffff;
    border-radius: 2px;
    border: solid 1px #eceef0;
    text-align: center;
    margin-right: 30px;
  }

</style>
