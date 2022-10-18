<template>
  <div class="">

    <!-- Course single -->
    <section class="shikhi__courses_area">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="courses_text">
              <h2>Courses</h2>
            </div>
            <div class="text-center" v-show="courses == ''">
              <dot-loader
                :loading="loading"
                :color="color"
                :size="size"
              ></dot-loader>
            </div>
          </div>
        </div>
        <!-- .row -->

        <div class="row gy-4" v-show="courses">
          <CourseItem
            v-for="course in courses"
            :key="course.id"
            :course="course"
          ></CourseItem>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import DotLoader from "vue-spinner/src/DotLoader.vue";
import CourseItem from "../components/CourseItem.vue";

import http from "axios";
export default {
  components: {  CourseItem, DotLoader },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    async getCourses() {
      await http.get("courses").then((res) => {
        setTimeout(() => {
          this.courses = res.data.courses;
        }, 1000);
      });
    },
  },
  mounted() {
    this.getCourses();
  },
};
</script>

<style></style>
