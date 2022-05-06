<template>
    <div>

    <section class="pt-5 pb-5" style="background-color: #3a0078;color:white">
        <div class="p-5">
          <h1 class="ml-4 pr-5"><b style="color:white !important">The matic Blog</b></h1>
          <!-- <p class="mt-3 ml-4 pr-5" style=" ">
           <span class="px-4 py-2 bg-danger" style="border-radius: 9px;background-color:white !important">  Ages 8-18</span>
          </p> -->
            <p class="ml-4 pr-5 mt-2" style="color:white !important">The matic Learning blog provides online educational resources about Computer Science, Mathematics, and English for kids and their parents.</p>

        </div>
    </section>

    <section class="p-5">
        <div class="row">
            <div class="col">
                    <div class="card" style="">
                    <img
                      src="../assets/img/placeholder.jpg"
                      class="card-img-top p-3"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                    <!-- <p class="mt-3 ml-4 pr-5" style=" ">
                     <span class="px-4 py-2 "  style="border-radius: 9px; border-color: coral !important; color: rgb(0, 91, 172);">  Ages 8-18</span>
                    </p> -->
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color: #466d1d"
                      >
                        <strong>Summer Tutoring Programs</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3"
                        style="text-align: center; color: #466d1d"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                      </div>
                      </div>
                      <!-- <a
                        :href="'/products/' + item.id"
                        class="btn btn btn-success"
                        >Quick view</a
                      > -->
                    </div>
                  </div>
            </div>
            <div class="col">
                    <div class="card" style="">
                    <img
                      src="../assets/img/placeholder.jpg"
                      class="card-img-top p-3"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                    <!-- <p class="mt-3 ml-4 pr-5" style=" ">
                     <span class="px-4 py-2 "  style="border-radius: 9px; border-color: coral !important; color: rgb(0, 91, 172);">  Ages 8-18</span>
                    </p> -->
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color: #466d1d"
                      >
                        <strong>Summer Tutoring Programs</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3"
                        style="text-align: center; color: #466d1d"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                      </div>
                      </div>
                      <!-- <a
                        :href="'/products/' + item.id"
                        class="btn btn btn-success"
                        >Quick view</a
                      > -->
                    </div>
                  </div>
            </div>
            <div class="col">
                    <div class="card" style="">
                    <img
                      src="../assets/img/placeholder.jpg"
                      class="card-img-top p-3"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                    <!-- <p class="mt-3 ml-4 pr-5" style=" ">
                     <span class="px-4 py-2 "  style="border-radius: 9px; border-color: coral !important; color: rgb(0, 91, 172);">  Ages 8-18</span>
                    </p> -->
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color: #466d1d"
                      >
                        <strong>Summer Tutoring Programs</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3"
                        style="text-align: center; color: #466d1d"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                      </div>
                      </div>
                      <!-- <a
                        :href="'/products/' + item.id"
                        class="btn btn btn-success"
                        >Quick view</a
                      > -->
                    </div>
                  </div>
            </div>
        </div>
    </section>

    

    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
// import HelloWorld from '@/components/blogs.vue'
// import best_seller_slides from "../components/best-seller-slides.vue";
// import testemonials from '../components/testemonials.vue'
// import Faqs from '../components/Faqs.vue'
// import compare_course from "../components/compare-course.vue";
// import explore_more_topics from "../components/explore-more-topics.vue";

export default {
  name: "blog-1",
  components: {
    // HelloWorld
    // blogs,
    // testemonials,
    // compare_course,
    // explore_more_topics,
    // Faqs,
    // best_seller_slides,
  },
};
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

.card-body .col {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}

.card-body {
  /* height: 280px; */
  overflow: hidden;
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
</style>
