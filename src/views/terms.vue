<template>
    <div>

    <section class="pt-5 pb-2" style="background-color: #3a0078;color:white">
      <div class="row mt-4 mb-4 ml-4 mr-3 text-left">
        <div class="col-lg">
          <h1 class="ml-4 pr-5"><b style="color:white !important">Our Policies
        </b></h1>
        </div>

      </div>
    </section>

    <section class="p-5">
        <div class="p-5">
            <div class="row :center">
               <div class="card" style="overflow:hidden">
                    <div class="row">
                        <div class="col-4">

                        </div>
                        <div class="col-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" fill="blue" class="bi bi-file-earmark-fill pt-4" viewBox="0 0 16 16">
                                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="card-body seller-Card">
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pt-3 pl-5 pr-5"
                        style="text-align: center; "
                      >
        matic is a membership-driven learning platform designed to help each student discover and pursue their passions with joy. We offer private 1:1 classes in Computer Science, Math, and English for students ages 7-18 taught by instructors from top US universities.
                      </p>
                      </div>
                      </div>
                      <!-- <a
                        :href="'/products/' + item.id"
                        class="btn btn btn-success"
                        >Quick view</a
                      > -->

                        <button type="button" class="btn btn-outline-success p-2">Trems Of Use</button>
                        <button type="button" class="btn btn-outline-success p-2 ml-2">Privacy Policy</button>
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
  name: "1-on-1",
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

.card-body , .col , .row{
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}

.card-body {
  height: 280px;
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
