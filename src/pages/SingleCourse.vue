<template>
  <div class="">
    <div class="single__page_content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="courses_text pt-5">
              <h2>{{ course.name }}</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="container">
            <div class="col-12">
              <div class="single__page_category_wishlist">
                <div class="single_category">
                  <span>Categories :</span>
                  <a href="#">{{ course.category?.name }}</a>
                </div>
                <div class="single_wishlist">
                  <a href="#"> <i class="fa fa-bookmark"></i> Wishlist </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section single__page_main_area">
      <div class="container">
        <div class="row gx-5">
          <div class="col-md-8">
            <div class="main_area_single_items">
              <img
                class="img-fluid"
                :src="course.thumbnail"
                :alt="course.name"
              />
            </div>

            <div class="course__info_review">
              <div class="course_info_content mt-4">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="info-tab-pane"
                      aria-selected="true"
                    >
                      Course Info
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#review-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="review-tab-pane"
                      aria-selected="false"
                    >
                      Review
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="info-tab-pane"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                    tabindex="0"
                  >
                    <div class="info_single-item">
                      <div class="about_course">
                        <h3>About Course</h3>
                        <div v-html="course.description"></div>
                      </div>

                      <div class="learn_course">
                        <div class="widget-title">
                          <h3 class="fs-5">What Will You Learn?</h3>
                        </div>
                        <ul>
                          <li class="mb-2">
                            <span class="dots"></span>
                            <span>{{ course.lessons?.name }}</span>
                          </li>
                        </ul>
                      </div>

                      <div class="course_info_accordion mt-4">
                        <div class="about_course">
                          <h3>Course Content</h3>
                        </div>
                        <div class="accordion" id="accordionExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <strong>Vue Basic</strong>
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">
                                <div class="">
                                  <ul>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                    <li
                                      class="d-flex justify-content-between icon mb-3"
                                    >
                                      <div>
                                        <span
                                          ><i class="fa fa-youtube-play"></i
                                        ></span>
                                        <span
                                          >How to use Vue (using the CDN)</span
                                        >
                                      </div>
                                      <div>
                                        <span>09.18</span>
                                        <span><i class="fa fa-lock"></i></span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="review-tab-pane"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                    tabindex="0"
                  >
                    <div class="row">
                      <div class="display_">
                        <div class="col-12 my-4" style="font-size: 20px">
                          <h3 style="font-size: 20px">
                            Student Ratings & Reviews
                          </h3>
                        </div>
                        <div class="main_review_area">
                          <div class="ratings_review_body">
                            <div class="col-md-3">
                              <div class="stat_total_count">
                                <div class="courses__card_rating">
                                  <h1>5.0</h1>
                                  <div
                                    class="ratings"
                                    style="color: #ed9700;
                                      font-size: 20px;
                                      padding-bottom: 0.5rem;
                                    "
                                  >
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <p>Total 7 Ratings</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-8 offset-1">
                              <div class="review_body">
                                <div
                                  class="review_rating_icon"
                                  style="color: #ed9700"
                                >
                                  <span><i class="fa fa-star-o"></i></span>
                                  <span style="color: #333">5</span>
                                </div>
                                <div class="progresbar" style="width: 70%">
                                  <div
                                    class="progress"
                                    style="height: 0.6rem; margin: 8px 0"
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-label="Basic example"
                                      style="
                                        width: 100%;
                                        background-color: #ed9700;
                                      "
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div class="text">
                                  <span>7 Ratings</span>
                                </div>
                              </div>
                              <div class="review_body">
                                <div
                                  class="review_rating_icon"
                                  style="color: #ed9700"
                                >
                                  <span><i class="fa fa-star-o"></i></span>
                                  <span style="color: #333">4</span>
                                </div>
                                <div class="progresbar" style="width: 70%">
                                  <div
                                    class="progress"
                                    style="height: 0.6rem; margin: 8px 0"
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-label="Basic example"
                                      style="
                                        width: 100%;
                                        background-color: #ed9700;
                                      "
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div class="text">
                                  <span>7 Ratings</span>
                                </div>
                              </div>
                              <div class="review_body">
                                <div
                                  class="review_rating_icon"
                                  style="color: #ed9700"
                                >
                                  <span><i class="fa fa-star-o"></i></span>
                                  <span style="color: #333">3</span>
                                </div>
                                <div class="progresbar" style="width: 70%">
                                  <div
                                    class="progress"
                                    style="height: 0.6rem; margin: 8px 0"
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-label="Basic example"
                                      style="
                                        width: 100%;
                                        background-color: #ed9700;
                                      "
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div class="text">
                                  <span>7 Ratings</span>
                                </div>
                              </div>
                              <div class="review_body">
                                <div
                                  class="review_rating_icon"
                                  style="color: #ed9700"
                                >
                                  <span><i class="fa fa-star-o"></i></span>
                                  <span style="color: #333">2</span>
                                </div>
                                <div class="progresbar" style="width: 70%">
                                  <div
                                    class="progress"
                                    style="height: 0.6rem; margin: 8px 0"
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-label="Basic example"
                                      style="
                                        width: 100%;
                                        background-color: #ed9700;
                                      "
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div class="text">
                                  <span>7 Ratings</span>
                                </div>
                              </div>
                              <div class="review_body">
                                <div
                                  class="review_rating_icon"
                                  style="color: #ed9700"
                                >
                                  <span><i class="fa fa-star-o"></i></span>
                                  <span style="color: #333">1</span>
                                </div>
                                <div class="progresbar" style="width: 70%">
                                  <div
                                    class="progress"
                                    style="height: 0.6rem; margin: 8px 0"
                                  >
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-label="Basic example"
                                      style="
                                        width: 100%;
                                        background-color: #ed9700;
                                      "
                                      aria-valuenow="100"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div class="text">
                                  <span>7 Ratings</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="_hr"></div>
                          <div class="review_comment_area">
                            <div class="col-md-3">
                              <div class="comment_author_info">
                                <span class="author_logo">s</span>
                                <div class="comment_text mt-4">
                                  <p>Shamim</p>
                                  <span>3 Weeks ago</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-8 offset-1">
                              <div class="courses__card_rating">
                                <div
                                  class="ratings"
                                  style="
                                    color: #ed9700;
                                    font-size: 20px;
                                    padding-bottom: 0.5rem;
                                  "
                                >
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                </div>
                                <p>Nice Course for free</p>
                              </div>
                            </div>
                          </div>
                          <div class="_hr"></div>
                          <div class="review_comment_area">
                            <div class="col-md-3">
                              <div class="comment_author_info">
                                <span class="author_logo">s</span>
                                <div class="comment_text mt-4">
                                  <p>Shamim</p>
                                  <span>3 Weeks ago</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-8 offset-1">
                              <div class="courses__card_rating">
                                <div
                                  class="ratings"
                                  style="
                                    color: #ed9700;
                                    font-size: 20px;
                                    padding-bottom: 0.5rem;
                                  "
                                >
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                </div>
                                <p>Nice Course for free</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="single_page_sidebar_area">
              <div class="sidebar-single_item">
                <h4>Free</h4>
                <div class="sidebar_btn">
                  <button class="shikhi__btn shikhi__btn_primary">
                    Enroll now
                  </button>
                  <p>Free access this course</p>
                </div>
              </div>
              <div class="_hr"></div>
              <div class="sidebar_card_footer">
                <ul>
                  <li><i class="fa fa-bar-chart-o"></i> Beginner</li>
                  <li class="mt-2">
                    <i class="fa fa-graduation-cap"></i> 816 Total Enrolled
                  </li>
                  <li class="mt-2">
                    <i class="fa fa-clock-o"></i> 2 hours 23 minutes Duration
                  </li>
                  <li class="mt-2">
                    <i class="fa fa-refresh"></i> August 24, 2022 last Updated
                  </li>
                </ul>
              </div>
            </div>

            <div class="sidebar_author_details mt-4">
              <div class="sidebar_card_footer">
                <p>A course by</p>
                <div class="d-flex align-items-center">
                  <div class="me-3">
                    <img
                      :src="course.teacher.thumbnail"
                      style="width: 40px; border-radius: 50%"
                      alt=""
                    />
                  </div>
                  <a href="single.html" class="auth_text">{{
                    course.teacher?.name
                  }}</a>
                </div>
              </div>
              <div class="_hr"></div>

              <div class="course_materials_widget">
                <div class="sidebar_card_footer">
                  <div class="widget-title">
                    <h3>Material Includes</h3>
                  </div>
                  <ul>
                    <li>
                      <span class="dots"></span>
                      <span>Sourcecode used in the course</span>
                    </li>
                    <li>
                      <span class="dots"></span>
                      <span>Help on Discord</span>
                    </li>
                  </ul>
                  <div class="mt-5">
                    <div class="widget-title">
                      <h3>Requirements</h3>
                    </div>
                    <ul>
                      <li>{{ course.requirements }}</li>
                    </ul>
                  </div>
                  <div class="mt-5">
                    <div class="widget-title">
                      <h3>Audience</h3>
                    </div>
                    <ul>
                      <li>
                        <span class="dots"></span>
                        <span>{{ course.audience }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
  components: { DotLoader },
  data() {
    return {
      course: {},
    };
  },
  async created() {
    const res = await axios.get("course/" + this.$route.params.slug);

    console.log(res.data.course);
    if (!res.data.error) {
      this.course = res.data.course;
    }
  },
};
</script>

<style></style>
