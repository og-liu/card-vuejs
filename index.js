/**
 * Created by liukun on 2023/7/20.
 */
import vueCard from './src/components/card'

// 这一步判断 window.Vue 是否存在，因为直接引用 vue.min.js， 它会把 Vue 绑到 Window 上，我们直接引用打包好的 js 才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-card', vueCard)
}
// 这样就可以使用 Vue.use 进行全局安装了。
vueCard.install = function(Vue) {
  Vue.component(vueCard.name, vueCard)
}
export default vueCard
