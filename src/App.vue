<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{name: 'Create'}" class="nav-link">Add Plant</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Index'}" class="nav-link">View All Plants</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <transition name="fade">
    <div class="gap">
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>

export default {

}

</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity ease .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>