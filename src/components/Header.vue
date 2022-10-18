<template>
  <header class="shikhi__header_area">
    <div class="container">
      <div class="row">
        <div class="col col-auto my-auto">
          <div class="shikhi__header_logo">
            <router-link to="/">Shikhi</router-link>
          </div>
        </div>
        <div class="col my-auto" style="text-align: right">
          <div class="shikhi__header_menu">
            <ul>
              <li><a href="dashboard.html">Dashboard</a></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- .shikhi__header_area -->
</template>

<script>
export default {
    
}
</script>

<style></style>
