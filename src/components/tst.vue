<template>
  <div class="slide" v-on:mouseover="wait()" v-on:mouseout="move()" >
    <div class="slideshow">
      <ul>
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='img'>
          </a>
        </li>
      </ul>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" v-on:mouseover="change(index)" :key="index"></span>
    </div>
  </div>
</template>


<script>
  import a1 from '../assets/msg-pic.png'
  import a2 from '../assets/msg-tans.png'
  import a3 from '../assets/msg-pic.png'
  import a4 from '../assets/msg-tans.png'
  export default {
    name: "test",
    data() {
      return {
        timer:null,
        mark: 0,
        imgArray: [a1,a2,a3,a4]
      }
    },
    methods: {
      autoPlay() {
        this.mark++;
        if (this.mark === 4) { //当遍历到最后一张图片置零
          this.mark = 0
        }
      },
      play() {
        setInterval(this.autoPlay, 2000)
      },
      change(i) {
        this.mark = i
      },
      wait(){
        clearInterval(this.timer);
        this.timer = null
      },
      move(){
        this.timer = setInterval(this.autoPlay, 2000)
      }
    },
    created() {
      this.play()
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 540px;
    height: 348px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 540px;
    height: 348px;
  }
  li {
    position: absolute;
  }
  img {
    width: 540px;
    height: 348px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 14px;
    right:14px;
    z-index: 10;
    text-align: right;
  }
  .bar span {
    width: 8px;
    height: 8px;
    background: #afafaf;
    display: inline-block;
    margin-right: 6px;
    cursor:pointer;
  }
.bar span:hover{
  width: 10px;
  height: 10px;
  margin-right:4px;
}
  .active {
    background: #ed6e02 !important;
  }
</style>
