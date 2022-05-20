<template>
  <!-- Best seller slides -->
  <section class="pt-5 pb-5" style="background-color: white">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <!-- <p>CUSTOMER FAVORITES</p> -->
          <h3 class="mb-3 ml-0"><p> Popular Courses </p></h3>
        </div>
        <div class="col-6 text-right">
          <a
            class="btn btn btn-success mb-3 mr-1"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="prev"
            style="border-radius:10px"
          >
            <!-- <span class="oi" data-glyph="chevron-right"></span> -->
            <i class="material-icons" >arrow_back</i>
          </a>
          <a
            class="btn btn btn-success mb-3"
            href="#carouselExampleIndicators2"
            role="button"
            data-slide="next"
            style="border-radius:10px"
          >
            <!-- <span class="oi oi-icon-name" title="icon name" aria-hidden="true"></span> -->
            <i class="material-icons" >arrow_forward</i>
          </a>
        </div>

        <div class="col-12">
          <div
            id="carouselExampleIndicators2"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner seller-Card">
              <div class="carousel-item active">
                <div class="row seller-Card">
                  <div class="col-md-4 mb-3"  v-for="blog in this.blogs" :key="blog.id">
                                                          <div class="card" style="">
                    <img
                      :src= blog.image
                      class="card-img-top"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                        <div class="row">
                            <div class="col-8 ml-0 mr-0" style="text-align:left;font-size:14px">4.7 | Taken By 120,00 students</div>
                            <div class="col-4 " style="text-align:right;font-size:12px">First class Free</div>
                        </div>
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color: #466d1d"
                      >
                        <strong> {{blog.tittle}}</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3"
                        style="text-align: center; color: #466d1d"
                      >
                      {{blog.description}}
                      </p>
                      </div>
                      </div>
                      <a :href="'/course/' + blog.id " class="btn btn btn-primary">Read More</a>
                      <hr>
                      <p class="card-text ml-3 mr-3 mb-4 pl-3 pr-3">Age 11-18 | Meets Weekly | Private 1:1</p>
                    </div>
                  </div>
                    
                  </div>
                </div>
              </div>





              <!--  -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: "blogs-1",
  data() {
    return {
      blogs: [],
      isLoading:true
    };
  },
  components: {
        // Loading
    },
  mounted() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      axios
        .get("/api/v1/Course/")
        .then((response) => {
          this.blogs = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
        this.isLoading=false
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//
div{
  color:blue;
}
.card , .card-body{
    overflow-x:hidden;
}
.card-img-top{
    height:200px;
}
.card{
    border-radius: 12px;
}
</style>
