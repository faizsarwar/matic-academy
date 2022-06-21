<template>
  <div>
    <section class="pt-5 pb-5 bg-light text-left">
      <div class="row p-5">
        <div class="col">
          <div class="row pt-5">
            <h1><b>   {{this.blog.tittle}}</b></h1>
            <div
              class="col-8 ml-0 mr-0"
              style="text-align: left; font-size: 14px"
            >
              4.7 | Taken By 120,00 students
            </div>
            <p class="pt-5 pb-3">
              {{this.blog.description}}
            </p>
          </div>
          <div class="row">
            <!--button  -->
            <div class="">
              <button
                type=""
                class="btn btn btn-lg ml-4"
                style="
                color: white;  background-color:#4CBD94; 
                  height: 65px;
                  width: 220px;
                  border-radius: 12px;
                  font-size: 16px;
                "
              >
                Try A Free class
              </button>
            </div>
            <!-- icon -->
            <div class="ml-3">
              <button
                type="button"
                class="btn btn-outline-primary p-3; color: white;  background-color:#4CBD94; " 
                style="border-radius: 12px; width: 70px"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="blue"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <img :src="blog.image" style="width: 100% ; background-size: 'cover' ; background-repeat: 'no=repeat';"  alt="">
        </div>
      </div>
    </section>

    <section class="p-5" style="color: white; background-color: #0b0970">
      <div class="row">
        <div class="col pl-3 pr-3">
          <h5>Private 1:1</h5>
          Format
        </div>
        <div class="col pl-3 pr-3">
          <h5>Age 12-18</h5>
          Learners
        </div>
        <div class="col pl-3 pr-3">
          <h5>Weekly</h5>
          Classes
        </div>
        <div class="col pl-3 pr-3">
          <h5>{{blog.total_duration_in_minutes}} minutes</h5>
          Per class
        </div>
      </div>
    </section>

    <section class="bg-light p-5">
      <div class="row">
        <div class="col">
          <h1><b>About this Course</b></h1>

          <div id="accordion" class="mt-3 m-3 "
            style="text-align: center; background-color: white; overflow-y: hidden;" >
            <!-- Collapsible div starts -->

            <div class="card" style="border: none">
              <div class="card-header" id="heading1">
                <h5 class="mb-0">
                  <button
                    class="
                      btn btn-link
                      d-flex
                      align-items-center
                      w-100
                      justify-content-between
                      no-underline
                    "
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                    style="color: black"
                  >
                    <span class="ml-2"><b> Billing </b></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </h5>
              </div>
              <div
                id="collapse1"
                class="collapse bg-light"
                aria-labelledby="heading1"
                data-parent="#accordion"
              >
                <div class="card-body row">
                  <div class="card bg-light" style="width:100%">
                    <div class="card-body seller-Card">
                      <div
                        class="
                          row
                          card-text
                          text-left
                          p-2
                          justify-content-between
                          d-flex
                          align-items-center
                        "
                      >
                        <div class="col-2">
                          <h6>Billed as</h6>
                        </div>
                        <div class="col"></div>
                        <div class="col2">
                          <span
                            class="px-4 py-2"
                            style="
                              border-radius: 9px;
                              background-color: #e6f7f6;
                            "
                            ><b> FIRST CLASS FREE! </b></span
                          >
                        </div>
                      </div>
                      <div
                        class="
                          row
                          card-text
                          text-left
                          p-2
                          justify-content-between
                          d-flex
                          align-items-center
                        "
                      >
                        <div class="col-6">
                          <div class="row pl-3">
                            <h5><b> ${{this.blog.price_per_month}} </b></h5>
                            / month
                          </div>
                        </div>
                        <div class="col"></div>
                        <div class="col2">
                          {{this.blog.classes_per_month}}  classes per month × ${{this.blog.price_per_month/this.blog.classes_per_month}} / class
                        </div>
                      </div>

                      <hr />
                        <div class="row card-text">
                            <div class="col-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-gift mr-3" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                                </svg>
                                First Class Free
                            </div>
                            <div class="col-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="blue" class="bi bi-shield-check mr-3" viewBox="0 0 16 16">
                                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                </svg> Cancel anytime
                            </div>                            
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Collapsible div ends -->


            <!-- Collapsible div starts -->

            <div class="card" style="border: none">
              <div class="card-header" id="heading5">
                <h5 class="mb-0">
                  <button
                    class="
                      btn btn-link
                      d-flex
                      align-items-center
                      w-100
                      justify-content-between
                      no-underline
                    "
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                    style="color: black"
                  >
                    <span class="ml-2"><b> Learning Targets</b></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </h5>
              </div>
              <div
                id="collapse5"
                class="collapse bg-light"
                aria-labelledby="heading5"
                data-parent="#accordion"
              >
                <div class="card-body row text-left">
                  <!-- paragraph -->
                  <p>
                    {{this.blog.learning_targets}}
                  </p>

                </div>
              </div>
            </div>

            <!-- Collapsible div ends -->



            <!-- Collapsible div starts -->

            <div class="card" style="border: none">
              <div class="card-header" id="heading3">
                <h5 class="mb-0">
                  <button
                    class="
                      btn btn-link
                      d-flex
                      align-items-center
                      w-100
                      justify-content-between
                      no-underline
                    "
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                    style="color: black"
                  >
                    <span class="ml-2"><b> Scheduling</b></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </h5>
              </div>
              <div
                id="collapse3"
                class="collapse bg-light"
                aria-labelledby="heading3"
                data-parent="#accordion"
              >
                <div class="card-body row text-left">
                  <!-- paragraph -->
                  <p>
                    {{this.blog.scheduling}}
                  </p>
                  <div class="col-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="blue"
                      class="bi bi-calendar-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                      />
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                      />
                    </svg>
                  </div>
                  <div class="col-7">Course duration</div>
                  <div class="col-3">{{this.blog.durantion_in_months}} months</div>
                  <div class="col-2 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="blue"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                      />
                    </svg>
                  </div>
                  <div class="col-7 mt-2">Lesson</div>
                  <div class="col-3 mt-2">{{this.blog.total_duration_in_minutes}} minutes</div>
                </div>
              </div>
            </div>

            <!-- Collapsible div ends -->

            <!-- Collapsible div starts -->

            <div class="card" style="border: none">
              <div class="card-header" id="heading4">
                <h5 class="mb-0">
                  <button
                    class="
                      btn btn-link
                      d-flex
                      align-items-center
                      w-100
                      justify-content-between
                      no-underline
                    "
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                    style="color: black"
                  >
                    <span class="ml-2"><b> Homework </b></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </h5>
              </div>
              <div
                id="collapse4"
                class="collapse bg-light"
                aria-labelledby="heading4"
                data-parent="#accordion"
              >
                <div class="card-body row">
                  <!-- paragraph -->
                  <p>
                    {{this.blog.homework}}
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapsible div ends -->

            <!-- Collapsible div starts -->

            <div class="card" style="border: none">
              <div class="card-header" id="heading2">
                <h5 class="mb-0">
                  <button
                    class="
                      btn btn-link
                      d-flex
                      align-items-center
                      w-100
                      justify-content-between
                      no-underline
                    "
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                    style="color: black"
                  >
                    <span class="ml-2"><b> Pre-Requisites </b></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="blue"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </h5>
              </div>
              <div
                id="collapse2"
                class="collapse bg-light"
                aria-labelledby="heading2"
                data-parent="#accordion"
              >
                <div class="card-body row">
                  <!-- paragraph -->
                  <p> {{this.blog.pre_requisites}}</p>
                </div>
              </div>
            </div>

            <!-- Collapsible div ends -->
          </div>


        </div>
        <div class="col">
          <!-- <img src="" alt=""> -->
          <p class="p-4 text-left">
            {{this.blog.description_2}}
          </p>
          <button
                type=""
                class="btn btn btn-lg "
                style="
                  height: 65px;
                  color: white;  background-color:#4CBD94; 
                  width: 220px;
                  border-radius: 12px;
                  font-size: 16px;
                "
              >
                Try A Free class
          </button>
        </div>
      </div>
    </section>

    <section style="background-color: #e6f7f6" class="pt-4 pb-5">
      <div class="mt-2 mb-2">
        <div class="row">
          <div
            class="col-lg text-left"
            style="text-align: center; color: black"
          >
            <h1 class="pl-5"><b>Who are Matic’s Instructors?</b></h1>
            <p class="pl-5 pb-2">
                Our instructors are subject matter experts from top US universities. Instructors are highly-vetted and background checked prior to joining and undergo extensive training before ever teaching on our platform.
            </p>
            <p class="pl-5 pr-5">
                Upon signing up, parents are asked a series of questions that allow us to match your child with an optimal instructor based on their unique needs and interests. Factors that are considered in our matching process include Learning Style, Personality, Personal Experience, and Academic & Career Aspiration.
            </p>
          </div>
          <div class="col-lg" style="text-align: center; color: black">
            <!-- img here -->
          </div>
        </div>
      </div>
    </section>

    <best_seller_slides />




    <section class="pt-5 pb-5 pl-4 pr-4 text-center">
      <div class="pt-5 pb-5 pl-4 pr-4 text-center">
        <h1 class="pl-5 pr-5 ml-5 mr-5 pb-5 mb-2">
          <b>Start Learning with Matic</b>
        </h1>
        <p class="pl-5 pr-5 ml-5 mr-5 pb-5 mb-2">
          Turn your child’s passion into a professional skill
        </p>
        <button
          type=""
          class="btn btn btn-lg mr-3"
          style="
          color: white;  background-color:#4CBD94; 
            height: 65px;
            width: 200px;
            border-radius: 12px;
            font-size: 16px;
          "
        >
          Try A Free Class
        </button>
        <a href=""><b>Contact Us</b></a>
      </div>
    </section>

    <!-- <Faqs /> -->
  </div>
</template>


<script>
// ES6 Modules or TypeScript
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
import best_seller_slides from "../components/best-seller-slides.vue";

import axios from 'axios'
export default {
  name: 'course-1',
  data(){
      return {
          id: this.$route.params.courseId,
          isLoading: true,
          blog:{}
      }
  },
  components: {
    // Loading
    best_seller_slides
  },
  mounted(){
    this.getBlog()
    // this.setDiscount()
  },
  methods:{
      async getBlog() {
        // this.$store.commit('setIsLoading', true)
        // console.log(this.id)
        await axios.get('/api/v1/Course/' + this.id)
        .then(response=>{
          this.blog=response.data[0]
        })
        .catch(error=>{
            console.log(error)
        })
        // this.$store.commit('setIsLoading', false)
        // this.isLoading=false
      },
  }
}
</script>
<style scoped>
.collections {
  background-size: cover;
  background-repeat: no-repeat;
  height: 270px;
  overflow-y: hidden;
}

.no-overflow {
  overflow-x: hidden;
  overflow-y: hidden;
}

.card {
  overflow: hidden;
}

.card-body .col {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}


p a b,
label {
  color: #211ea6;
}

.circular--square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}

li {
  margin-top: 20px;
  margin-bottom: 20px;
}

*{
  overflow-x:hidden ;
}
</style>
