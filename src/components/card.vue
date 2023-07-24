<!-- Vue Single File Component, Created by liukun on 2023/7/22. -->
<template>
  <div id="card">
    <card :title="title" :bgColor="bgColor">
      <count-to
        :startVal="countTo.startVal"
        :endVal="countTo.endVal"
        :decimals="countTo.decimals"
        :duration="countTo.duration">
      </count-to>
    </card>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  name: 'vueCard',
  data () {
    return {}
  },
  props: {
    // 标题
    title: {
      type: String,
      default: "卡片标题"
    },
    // 背景颜色
    bgColor: {
      type: Array,
      default: function () {
        return ['rgb(255, 127, 136)', 'rgb(228, 33, 49)']
      }
    },
    // 数字动画配置
    countTo: {
      type: Object,
      default: function () {
        return {
          // 开始值
          startVal: 0,
          // 结束值
          endVal: 100,
          // 持续时间
          duration: 1000,
          // 显示小数点
          decimals: 2
        }
      }
    }
  },
  components: {
    countTo,
    card: {
      props: {
        // 卡片标题
        title: String,
        // 背景颜色
        bgColor: Array
      },
      render: function (createElement) {
        return createElement('div', {
          class: 'wrap',
          style: {
            background: `linear-gradient(to right, ${this.bgColor[0]} 0%, ${this.bgColor[1]} 100%)`
          }
        }, [
          createElement('div', {
            class: 'car-info'
          }, [
            createElement('p', {
              domProps: {
                innerHTML: this.title
              },
              class: 'title'
            }),
            createElement('p', {
              class: 'number'
            }, this.$slots.default)
          ]),
          createElement('img', {
            attrs: {
              src: require('../assets/spray.png')
            },
            class: 'spray'
          }),
          createElement('img', {
            attrs: {
              src: require('../assets/icon.png')
            },
            class: 'icon'
          })
        ])
      }
    }
  }
}
</script>

<style>
#card {}
#card .wrap {
  max-width: 410px;
  height: 120px;
  border-radius: 10px;
  position: relative;
}
#card .wrap .car-info {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  color: #FFF;
}
#card .wrap .car-info .title, #card .wrap .car-info .number {
  font-family: 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 2px 0;
}
#card .wrap .car-info .number {
  font-weight: normal;
}
#card .wrap .spray {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 58px;
}
#card .wrap .icon {
  width: 62px;
  height: 62px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0 0 10px 0;
}
</style>
