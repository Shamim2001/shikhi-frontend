<template>
  <div class="">
    <Header></Header>

    <!-- Course single -->
    <section class="shikhi__courses_area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="courses_text">
              <h2>Courses</h2>
            </div>
          </div>
        </div>
        <!-- .row -->

        <div class="row gy-4">

          <CourseItem v-for="course in courses" :key="course.id" :course="course" ></CourseItem>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import CourseItem from "../components/CourseItem.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

import http from 'axios';
export default {
  components: { Header, Footer, CourseItem },
  data() {
    return {
      courses: []
    }
  },
  methods: {
    async getCourses() {
      await http.get('http://shikhi.test/api/courses').then((res)=> {
        this.courses = res.data.courses;
      });
    }
  },
  mounted() {
    this.getCourses();
  }
};
</script>

<style></style>
