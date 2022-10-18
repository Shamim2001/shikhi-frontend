<template>
  <div class="col-md-4">
    <div class="shikhi__courses_card">
      <div class="card courses_card">
        <a href="single.html"
          ><img :src="course.thumbnail" class="card-img-top" alt=""
        /></a>
        <div class="">
          <a href="single.html" class="wishlist_icon">
            <i class="fa fa-bookmark-o"></i>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ course.name }}</h5>
          <div class="card-text">
            <div class="card-icon">
              <span><i class="fa fa-user-o"></i>{{ course.student.length }}</span>
            </div>

            <div class="author">
              <a class="me-3" href="single.html"><img :src="course.teacher.thumbnail" style="width: 40px; border-radius: 50%;" alt=""></a>
              <div class="">
                by
                <a href="single.html" class="author_name">{{ course.teacher.name }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="courses__card_btn">
          <a href="single.html" class="shikhi__btn shikhi__btn_primary"
            >Enroll Course</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- .col-md-4 -->
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style></style>
