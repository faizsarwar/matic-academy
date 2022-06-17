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
                <a class="btn btn btn mb-3 mr-1" style="border-radius:10px; color: white;  background-color:#4CBD94;" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                    <!-- <span class="oi" data-glyph="chevron-right"></span> color:#466D1D;-->
                    <i class="material-icons ">arrow_back</i>
                </a>
                <a class="btn btn btn mb-3 mr-1" style="border-radius:10px; color: white;  background-color:#4CBD94;"  href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <!-- <span class="oi oi-icon-name" title="icon name" aria-hidden="true"></span> -->
                    <i class="material-icons" >arrow_forward</i>
                </a>
        </div>

        <div class="col-12">


          <!-- tets -->
                    <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner seller-Card">
              <div class="carousel-item active">
                <div class="row seller-Card">

                  <div class="col-md-4 mb-3" v-for="blog in this.AllProducts[0]" :key="blog.id">
                    <div class="card ">
                    <img
                      :src= blog.image
                      class="card-img-top"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                        <div class="row">
                            <div class="col-8 ml-0 mr-0" style="text-align:left;font-size:14px; color:black">4.7 | Taken By 120,00 students</div>
                            <div class="col-4 " style="text-align:right;font-size:12px ; color:black">First class Free</div>
                        </div>
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color:black"
                      >
                        <strong> {{blog.tittle}}</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3 text"
                        style=" color: #466d1d"
                      >
                      {{blog.description}}
                      </p>
                      </div>
                      </div>
                      <a :href="'/course/' + blog.id " class="btn btn btn" style="color: white;  background-color:#4CBD94;" >Read More</a>
                      <hr>
                      <p class="card-text ml-3 mr-3 mb-4 pl-3 pr-3" ><b style="color:black"> Age 11-18 | Meets Weekly | Private 1:1 </b></p>
                    </div>

                    </div>
                  </div>

                </div>
              </div>

              <!--  -->
              <div class="carousel-item" v-for="products in this.AllProducts.slice(1,)" v-bind:key="products.id">
                <div class="row seller-Card">

                  <div class="col-md-4 mb-3 seller-Card" v-for="blog in products" v-bind:key="blog.id">
                    <div class="card ">
                    <img
                      :src= blog.image
                      class="card-img-top"
                      alt="..."

                    />
                    <div class="card-body seller-Card">
                        <div class="row">
                            <div class="col-8 ml-0 mr-0" style="text-align:left;font-size:14px; color:black">4.7 | Taken By 120,00 students</div>
                            <div class="col-4 " style="text-align:right;font-size:12px ; color:black">First class Free</div>
                        </div>
                      <div class="row" style="color:#466D1D;">
                      <div class="row">
                      <p
                        class="card-title ml-5 mt-4"
                        style="text-align: center; color:black"
                      >
                        <strong> {{blog.tittle}}</strong>
                      </p>
                      </div>
                      <div class="row" >
                      <p
                        class="card-text ml-3 mr-3 mb-4 pl-3 pr-3 text"
                        style=" color: #466d1d"
                      >
                      {{blog.description}}
                      </p>
                      </div>
                      </div>
                      <a :href="'/course/' + blog.id " class="btn btn btn" style="color: white;  background-color:#4CBD94;" >Read More</a>
                      <hr>
                      <p class="card-text ml-3 mr-3 mb-4 pl-3 pr-3" ><b style="color:black"> Age 11-18 | Meets Weekly | Private 1:1 </b></p>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end test -->
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
  name: 'testemonials-',
  data(){
      return {
          allProducts:[],
          AllProducts:[],
      }
  },
  mounted(){
    this.getAllProducts()
    // this.updateProducts()
    
  },
  methods: {
      getAllProducts() {
          axios.get('/api/v1/Course/')
          .then(response=>{
            this.allProducts=response.data
            while(this.allProducts.length > 0){
            let chunk = this.allProducts.splice(0,3)
            this.AllProducts.push(chunk)
              }
            console.log(this.AllProducts)
          })
          .catch(error=>{
              console.log(error)
          })
      },
      // updateProducts(){
      //   while(this.allProducts.length > 0){
      //     let chunk = this.allProducts.splice(0,3)
      //     console.log(chunk)
      //   }
      }
  }
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
