<template>
  <div id="app">
    <div id="nav">
      <router-link to="/entertainment">娱乐</router-link> |
      <router-link to="/history">体育</router-link> |
    </div>
    <transition mode="out-in"> <router-view> </router-view></transition>
    
  </div>
</template>

<style lang="scss">
#app{
  text-align: center;
}
 /* 进场和出场期间动画 */
      .v-enter-active,
      .v-leave-active {
        transition: all 0.8s;
        color: red;
      }

      /* 进场时 */
      .v-enter {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
        color: rgb(23, 37, 161);
      }
      /* 出场时 */
      .v-leave-to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        color: rgb(12, 211, 46);
      }
</style>
