<template>
    <div>

    <section class="p-5" style="background-color: #3a0078;color:white">
      <div class="m-5 p-5">
        <h1><b style="color:white" class="pt-5"> Contact Us</b></h1>
        <p style="color:white" class="pb-5">Reach out to us by email or text, and a member of the team will be happy to help.</p>
      </div>
    </section>

    <section class="p-5 bg-light">

      <div class="m-5">
        <div class="row">
          <div class="col m-2">
            <div class="card" >
              <div class="card-body seller-Card" style="overflow-x :hidden">
                <div class="p-4 text-left">
                  <div class="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-envelope mr-3 mt-1" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <h2><b>Email</b></h2>
                  </div>
                  <p class="mt-5 mb-0">Please Email us at</p>
                  <a href="" style="color:blue">Support@learnwithmatic.com</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col m-2">
            <div class="card" >
              <div class="card-body seller-Card" style="overflow-x :hidden">
                <div class="p-4 text-left">
                  <div class="row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-chat-quote-fill mr-3 mt-1" viewBox="0 0 16 16">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
                    </svg>
                    <h2><b>Text</b></h2>
                  </div>
                  <p class="mt-5 mb-0">Feel free to text us at</p>
                  <a href="" style="color:blue">(650) 263-4306</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col m-2">
            <div class="card" >
              <div class="card-body seller-Card" style="overflow-x :hidden">
                <div class="p-4 text-left">
                  <div class="row">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="blue" class="bi bi-clock-fill mr-3 mt-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>
                    <h2><b>Opening Hours</b></h2>
                  </div>
                  <p class="mt-5 mb-0">Mon - Fri 8:00 am - 8:00 pm PT <br> Sat - Sun 7:00 am - 6:30 pm PT</p>
                  <!-- <a href="" style="color:blue">(650) 263-4306</a> -->
                </div>
              </div>
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
// // import compare_course from "../components/compare-course.vue";
// import explore_more_topics from "../components/explore-more-topics.vue";

export default {
  name: "contact-1",
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
