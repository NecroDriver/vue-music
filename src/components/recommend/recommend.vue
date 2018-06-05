<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="item in recommends" :key="item.linkUrl">
            <a :href="item.linkUrl">
              <img :src="item.picUrl"/>
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommend} from '../../api/recommend'
import {ERR_OK} from '../../api/config'
import Slider from '../../base/slider/slider'

export default {
  name: 'recommend',
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="less">
@import '../../common/less/variable';
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slide-wrapper{
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-theme;
      }
      .item {
        display: flex;// 弹性盒装布局
        box-sizing: border-box; // 规定两个并排的带边框的框
        align-items: center;// 居中对齐弹性盒的各项元素
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;// 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
          line-height: 20px;
          overflow: hidden;
          font-size: @font-size-medium;
          .name {
            margin-bottom: 10px;
            color: @color-text;
          }
          .desc {
            color: @color-text-d;
          }
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(50%);
    }
  }
}
</style>
