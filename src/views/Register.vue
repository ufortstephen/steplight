<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper px-0">
        <div class="content-wrapper d-flex align-items-center auth px-0">
          <div class="row w-100 mx-0">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                <div class="brand-logo text-center">
                  <!-- <img src="../../assets/images/logo.png" alt="logo" width="50%"> -->
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form
                  class="pt-3"
                  id="register"
                  
                  @submit.prevent="register"
                >
                  <!-- <v-file-input truncate-length="15"></v-file-input> -->
                  <div class="form-group">
                    <input
                      type="email "
                      class="form-control form-control-lg"
                      id="email"
                      placeholder="Email "
                      required
                      v-model="user.email"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="first_name"
                          placeholder="First Name "
                          required
                          v-model="user.first_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="middle_name"
                          placeholder="Middle Name "
                          required
                          v-model="user.middle_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text "
                          class="form-control form-control-lg"
                          id="surname"
                          placeholder="Surname "
                          required
                          v-model="user.surname"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="number "
                          class="form-control form-control-lg"
                          id="phone"
                          placeholder="Phone "
                          required
                          v-model="user.phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <select
                          class="form-control form-control-lg"
                          id="sex"
                          required
                          v-model="user.sex"
                        >
                          <option>Gender</option>
                          <option>M</option>
                          <option>F</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="date"
                          
                          class="form-control form-control-lg"
                          id="dob"
                          placeholder="DOB"
                          required
                          v-model="user.dob"
                          
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password "
                          class="form-control form-control-lg"
                          id="password"
                          placeholder="Password "
                          required
                          v-model="user.password"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="password "
                          class="form-control form-control-lg"
                          id="password2"
                          placeholder="Confirm Password "
                          required
                          v-model="user.password2"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div class="mt-3">
                    <button
                      class="
                        btn btn-block btn-primary btn-lg
                        font-weight-medium
                        auth-form-btn
                      "
                      type="submit "
                    >
                      SIGN UP
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account?
                    <a href="javascript:void(0)" class="text-primary" @click="navigateRoute('login')">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script>
import api from "@/helpers/api.js";
export default {
  data() {
    return {
      user: {
        email: "",
        first_name: "",
        middle_name: "",
        surname: "",
        phone: "",
        sex: "",
        dob: null,
        password: "",
        password2: "",
      },

      errors: []
    };
  },
  methods: {
    async register() {

      try {
        const response = await api.register(this.user);
        console.log(response);
        console.log(this.user);
      } catch (error) {

          if (error.response.status == 422 || error.response.status == 400) {
        
            this.errors = error.response.data;

             for (let prop in this.errors) {
                setTimeout(() => {
              this.$message.error({
                message: `${this.errors[prop][0]}`,
                position: "top-right",
                duration: 5000,
              });
             
            }, 5);
              
          }
        
        }
      }
    },

    navigateRoute(routeName) {
        
      this.$router.push(`/${routeName}`)
  
    }

   
  },
};
</script>

<style>
</style>