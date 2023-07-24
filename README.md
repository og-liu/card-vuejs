### How to use?

```
npm install card-vuejs
```

### Example

```vue
<template>
  <vue-card
    title="今日营业额"
    :bgColor="['rgb(255, 127, 136)', 'rgb(228, 33, 49)']"
    :iconIndex="5"
    :countTo="{
        startVal: 0,
        endVal: 892.78,
        duration: 1000,
        decimals: 2
      }">
  </vue-card>
</template>

<script>
import vueCard from 'card-vuejs'

export default {
  components:{
    vueCard
  }
}
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| title       | 卡片标题展示 |String| 卡片标题 |
| bgColor         | 卡片背景颜色 |Array | ['rgb(255, 127, 136)', 'rgb(228, 33, 49)'] |
| iconIndex  | icon 图标索引 | Number | 5 |
| countTo     | 数字动画配置 | Object | {startVal: 0, endVal: 100, duration: 1000, decimals: 2} |

** notes: Icon index range 1-12 **

![](./src/components/images/icon_1.png)
![](./src/components/images/icon_2.png)
![](./src/components/images/icon_3.png)
![](./src/components/images/icon_4.png)
![](./src/components/images/icon_5.png)
![](./src/components/images/icon_6.png)
</br>
![](./src/components/images/icon_7.png)
![](./src/components/images/icon_8.png)
![](./src/components/images/icon_9.png)
![](./src/components/images/icon_10.png)
![](./src/components/images/icon_11.png)
![](./src/components/images/icon_12.png)
