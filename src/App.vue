<template>
  <div class="">
    <Header></Header>

    <main>
        <router-view></router-view>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
    components: { Header, Footer }
}
</script>

<style>

</style>