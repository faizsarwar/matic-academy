<template>
    <div>

    <section class="pt-5 pb-5" style="background-color: #A2469A;color:white">
        <div class="p-5">
                                                                        <div class="">
                    <!-- <h1 class=" mr-auto"><b class="text-left mt-5" style="color: white !important">Matic Instructors</b></h1> -->
            <img src="../assets/img/monogram.png" alt="" class="mt-2 mb-5 " style="width:10%; height:10%; opacity:40%;">
          </div>

          <h1 class="ml-4 pr-5"><b style="color:white !important">The Matic Blog</b></h1>


          <!-- <p class="mt-3 ml-4 pr-5" style=" ">
           <span class="px-4 py-2 bg-danger" style="border-radius: 9px;background-color:white !important">  Ages 8-18</span>
          </p> -->
            <p class="ml-4 pr-5 mt-2" style="color:white !important">The Matic Learning blog provides online educational resources about Computer Science, MatheMatics, and English for kids and their parents.</p>

        </div>
    </section>

    <section class="p-5">
        <div class="row">
           <div class="col-md-4 mb-3" v-for="blog in this.blogs" :key="blog.id">
                    <div class="card seller-Card">
                    <img :src= blog.get_image  class="card-img-top" alt="..."  style="height:300px">
                      <div class="card-body">
                        <!-- <div class="row" style="color:#466D1D;"> -->
                          <!-- <div class="row"> -->
                            <p class="card-title " style="text-align:center; color:#466D1D;"><strong> {{blog.tittle}}</strong></p>
                          <!-- </div> -->
                          <!-- <div class="row" > -->
                          <!-- </div> -->
                        <!-- </div> -->
                          <a :href="'/blogs/' + blog.id " class="btn btn btn-success">Read More</a>

                      </div>

                    </div>
                  </div>

            <!-- <div class="col" v-for="blog in this.blogs" :key="blog.id">
                    <div class="card" style="">
                    <img
                      :src= blog.get_image
                      class="card-img-top p-3"
                      alt="..."

                    />
                    <div class="card-body seller-Card">

                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color: #466d1d"
                      >
                        <strong>{{blog.tittle}}</strong>
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
                    </div>
                  </div>
            </div> -->

        </div>
    </section>

    

    </div>
</template>

<script>
import axios from 'axios'
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
        .get("/api/v1/Blogs/")
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
  color: #A2469A;
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
