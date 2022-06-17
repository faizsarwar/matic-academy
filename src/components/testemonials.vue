<template>
  <section class="pt-5 pb-5" style="background-color: white;">
    <div class="container">
      <!-- <div class="row center_elements mt-5">
        <h1 class="mt-5 heading mb-5"><b>Real Reviews from Real Parents</b></h1>
      </div> -->


        <div class="row"> 
            <div class="col-1 mt-5 ">      
                <div class="mt-3">
                    <a class="btn btn btn mt-5 mb-3 mr-1" href="#carouselExampleIndicators3" style="color: white;  background-color:#4CBD94;" role="button" data-slide="prev">
                    <!-- <span class="oi" data-glyph="chevron-right"></span> color:#466D1D;-->
                    <i class="material-icons ">arrow_back</i>
                </a>
                </div>
            </div>
            <div class="col-9">    
          <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner seller-Card">
              <div class="carousel-item active">
                <div class="row seller-Card">

                  <div class="col-md-4 mb-3" v-for="item in this.AllProducts[0]" :key="item.id">
                    <div class="card ">
                    <!-- <img :src= item.get_image  class="card-img-top " alt="..."  style="height:400px"> -->
                      <div class="card-body seller-Card">
                        <!-- <div class="row" style="color:#466D1D;"> -->
                          <!-- <div class="row"> -->
                            <div class="ml-3 mr-2">
                            <div class="row m-4 ml-2 mr-2">
                              <i class="material-icons">star</i> <i class="material-icons">star</i> <i
                                class="material-icons">star</i> <i class="material-icons">star</i> <i
                                class="material-icons">star_half</i>
                            </div>
                          </div>
                            <p class="card-title1" style="text-align:center; color:#466D1D;"><strong> {{item.tittle}}</strong></p>
                          <!-- </div> -->
                          <!-- <div class="row" > -->
                            <p class="card-text1" style="text-align:center; ">{{item.description}}</p>
                          <!-- </div> -->

                      </div>

                    </div>
                  </div>

                </div>
              </div>

              <!--  -->
              <div class="carousel-item" v-for="products in this.AllProducts.slice(1,)" v-bind:key="products.id">
                <div class="row seller-Card">

                  <div class="col-md-4 mb-3 seller-Card" v-for="item in products" v-bind:key="item.id">
                    <div class="card seller-Card">
                    <!-- <img :src= item.get_image  class="card-img-top" alt="..."  style="height:400px"> -->
                      <div class="card-body">
                        <!-- <div class="row" style="color:#466D1D;"> -->
                          <!-- <div class="row"> -->
                          <div class="ml-3 mr-2 ">
                            <div class="row m-4 ml-2 mr-2 ">
                              <i class="material-icons">star</i> <i class="material-icons">star</i> <i
                                class="material-icons">star</i> <i class="material-icons">star</i> <i
                                class="material-icons">star_half</i>
                            </div>
                          </div>
                            <p class="card-title1 seller-Card" style="text-align:center; color:#466D1D;"><strong>{{item.tittle}}1</strong></p>
                          <!-- </div> -->
                          <!-- <div class="row" > -->
                            <p class="card-text1" style="text-align:center; ">{{item.description}}</p>
                          <!-- </div> -->
                        <!-- </div> -->

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            </div>
            <div class="col-1 mt-5">
              <div class="mt-3">
                  <a class="btn btn btn mb-3 mt-5" style="color: white;  background-color:#4CBD94;"   href="#carouselExampleIndicators3" role="button" data-slide="next">
                      <!-- <span class="oi oi-icon-name" title="icon name" aria-hidden="true"></span> -->
                      <i class="material-icons" >arrow_forward</i>
                  </a>
              </div>
            </div>
        </div>



    </div>
  </section>

</template>

<script>
import axios from 'axios'
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
          axios.get('/api/v1/Testemonials/')
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

</style>
