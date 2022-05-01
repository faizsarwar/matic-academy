<template>
        <div id="accordion" class="pl-3 pr-3 mt-5 m-5 "
            style="text-align: center; background-color: white; overflow-y: hidden;" >

            <div class="row">
                <div class="col-2">
                    <h2 class="mt-4">Faqs</h2>
                </div>
                <div class="col-10">
            <div class="mt-3 mb-3"  style=" overflow-y: hidden;">
                <!-- Collapsible div starts -->

                <div class="card" style=" border:none" >
                    <div class="card-header" id='heading1' style="background-color: white !important;">
                        <h5 class="mb-0 ">
                            <button class="btn btn-link d-flex align-items-center w-100 justify-content-between no-underline"
                                data-toggle="collapse" data-target='#collapse1' aria-expanded="true"
                                aria-controls='collapse1' style="color: black;">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                                <span class="ml-5"><b>  What else should I know about Matic’s free sessions? </b></span>
                                </div>
                            </button>
                        </h5>
                    </div>
                    <div id='collapse1' class="collapse " aria-labelledby='heading1' data-parent="#accordion">
                        <div class="card-body row">
                            <!-- paragraph -->
                            <p>
                                Private 1:1 Courses come with a free class while On-Demand Courses come with a free week. Both are only available once per family, for new families to Matic only.
                                <br>
                                If you don't cancel by the 7th day after your first class, you’ll automatically be charged the selected membership fee every month until you cancel or change your subscription.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Collapsible div ends -->


                <!-- Collapsible div starts -->

                <div class="card" style=" border:none" >
                    <div class="card-header" id='heading2' style="background-color: white !important;">
                        <h5 class="mb-0 ">
                            <button class="btn btn-link d-flex align-items-center w-100 justify-content-between no-underline"
                                data-toggle="collapse" data-target='#collapse2' aria-expanded="true"
                                aria-controls='collapse2' style="color: black;">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                                <span class="ml-5"><b>  Can I get free sessions for more than one child? </b></span>
                                </div>
                            </button>
                        </h5>
                    </div>
                    <div id='collapse2' class="collapse " aria-labelledby='heading2' data-parent="#accordion">
                        <div class="card-body row">
                            <!-- paragraph -->
                            <p>
                              We only offer the free session once per family. Have one child try Matic out first! If you love your experience, contact us to learn more about adding siblings.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Collapsible div ends -->

                <!-- Collapsible div starts -->

                <div class="card" style=" border:none" >
                    <div class="card-header" id='heading3' style="background-color: white !important;">
                        <h5 class="mb-0 ">
                            <button class="btn btn-link d-flex align-items-center w-100 justify-content-between no-underline"
                                data-toggle="collapse" data-target='#collapse3' aria-expanded="true"
                                aria-controls='collapse3' style="color: black;">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                                <span class="ml-5"><b>  How much do classes cost? </b></span>
                                </div>
                            </button>
                        </h5>
                    </div>
                    <div id='collapse3' class="collapse " aria-labelledby='heading3' data-parent="#accordion">
                        <div class="card-body row">
                            <!-- paragraph -->
                            <p>
                            Our monthly membership fee start at $29 — but it’s up to you how you want to customize your plan! Add more courses, or more classes per month to take your child’s learning further.
                            <br>
                            No matter what plan you choose, you’ll always get access to our expert instructors, student community and events, and our learning platform.   
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Collapsible div ends -->

            </div>
                </div>
            </div>


        </div>



</template>

// <script>
// import axios from 'axios'

export default {
  name: 'Faqs-',
  data(){
      return {
          Faqs:[]
      }
  },
}
//   mounted(){
//       this.getFaqs()
//   },
//   methods: {
//       getFaqs() {
//           axios.get('/api/v1/Faqs/')
//           .then(response=>{
//             this.Faqs=response.data
//           })
//           .catch(error=>{
//               console.log(error)
//           })
//       }
//   }
// }
// </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  text-decoration: none;
}

*{
    overflow-x:hidden
}

a:hover {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

</style>
