<template>
  <div>
    <vue-card
      title="今日营业额"
      :bgColor="['rgb(255, 127, 136)', 'rgb(228, 33, 49)']"
      :countTo="{
        startVal: 0,
        endVal: 892.78,
        duration: 1000,
        decimals: 2
      }">
    </vue-card>
  </div>
</template>

<script>
import vueCard from './components/card'
export default {
  data(){
    return {}
  },
  components:{
    vueCard
  }
}
</script>
