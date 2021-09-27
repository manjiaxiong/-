import Vue from 'vue'

Vue.config.productionTip = false
import singleSpaVue from 'single-spa-vue';
const appOptions = {
   el: '#vue',
   router,
   render: h => h(App)
}
// 在非子应用中正常挂载应用
if(!window.singleSpaNavigate){
 delete appOptions.el;
 new Vue(appOptions).$mount('#app');
}
const vueLifeCycle = singleSpaVue({
   Vue,
   appOptions
});
// 子应用必须导出以下生命周期：bootstrap、mount、unmount
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;
export default vueLifeCycle;