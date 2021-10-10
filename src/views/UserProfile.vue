<template>
  <div>
    <div class="container-scroller">
      <!-- partial:partials/_navbar.html -->
      <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div
          class="
            text-center
            navbar-brand-wrapper
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <a class="navbar-brand brand-logo mr-5" href="javascript:void(0)"
            >Steplight Bank</a
          >
          <a class="navbar-brand brand-logo-mini" href="javascript:void(0)">
            <img
              src="@/assets/images/logo.png"
              alt="logo"
              style="width: 100%"
            />
          </a>
        </div>
        <div
          class="
            navbar-menu-wrapper
            d-flex
            align-items-center
            justify-content-end
          "
        >
          <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span class="icon-menu"></span>
          </button>
          <ul class="navbar-nav mr-lg-2">
            <li class="nav-item nav-search d-none d-lg-block">
              <div class="input-group">
                <div
                  class="input-group-prepend hover-cursor"
                  id="navbar-search-icon"
                >
                  <span class="input-group-text" id="search">
                    <i class="icon-search"></i>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown">
              <a
                class="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <i class="icon-bell mx-0"></i>

                <span class="count"></span>
              </a>
              <div
                class="
                  dropdown-menu dropdown-menu-right
                  navbar-dropdown
                  preview-list
                "
                aria-labelledby="notificationDropdown"
              >
                <p class="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="fa fa-bell-o" aria-hidden="true"></i>
                      <i class="ti-info-alt mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">
                      Application Error
                    </h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="fa fa-bell-o" aria-hidden="true"></i>
                      <i class="ti-settings mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="ti-user mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">
                      New user registration
                    </h6>
                    <p class="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item nav-profile dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src="@/assets/images/faces/face1.jpg" alt="profile" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right navbar-dropdown"
                aria-labelledby="profileDropdown"
              >
                <a class="dropdown-item">
                  <i class="ti-settings text-primary"></i> Settings
                </a>
                <a class="dropdown-item">
                  <i class="ti-power-off text-primary"></i> Logout
                </a>
              </div>
            </li>
            <li class="nav-item nav-settings d-none d-lg-flex">
              <a class="nav-link" href="#">
                <i class="icon-ellipsis"></i>
              </a>
            </li>
          </ul>
          <button
            class="
              navbar-toggler navbar-toggler-right
              d-lg-none
              align-self-center
            "
            type="button"
            data-toggle="offcanvas"
          >
            <span class="icon-menu" @click="toggleSideNav()"
              ><i class="fa fa-th-list" aria-hidden="true"></i
            ></span>
          </button>
        </div>
      </nav>
      <!-- partial -->
      <div class="container-fluid page-body-wrapper px-0">
        <!-- partial:partials/_settings-panel.html -->
        <div class="theme-setting-wrapper">
          <!-- <div id="settings-trigger"><i class="ti-settings"></i></div> -->
          <div id="theme-settings" class="settings-panel">
            <i class="settings-close ti-close"></i>
            <p class="settings-heading">SIDEBAR SKINS</p>
            <div class="sidebar-bg-options selected" id="sidebar-light-theme">
              <div class="img-ss rounded-circle bg-light border mr-3"></div>
              Light
            </div>
            <div class="sidebar-bg-options" id="sidebar-dark-theme">
              <div class="img-ss rounded-circle bg-dark border mr-3"></div>
              Dark
            </div>
            <p class="settings-heading mt-2">HEADER SKINS</p>
            <div class="color-tiles mx-0 px-4">
              <div class="tiles success"></div>
              <div class="tiles warning"></div>
              <div class="tiles danger"></div>
              <div class="tiles info"></div>
              <div class="tiles dark"></div>
              <div class="tiles default"></div>
            </div>
          </div>
        </div>

        <!-- partial -->
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav" style="position: fixed">
            <li class="nav-item" @click="navigateRoute('dashboard')">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-grid menu-icon"></i>
                <span class="menu-title">Account Summary</span>
              </a>
            </li>
            <!-- <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="icon-grid menu-icon"></i>
                            <span class="menu-title">Accounts</span>
                        </a>
                    </li> -->
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i class="icon-layout menu-icon"></i>
                <span class="menu-title">Transactions</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item" @click="navigateRoute('transactions')">
                    <a class="nav-link" href="javascript:void(0)"
                      >All Transactions</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/dropdowns.html"
                      >Fund Transfer</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/typography.html"
                      >Bill Payments</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-head menu-icon"></i>
                <span class="menu-title">Account Statements</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-grid menu-icon"></i>
                <span class="menu-title">Enroll New Credit Card</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-paper menu-icon"></i>
                <span class="menu-title">Card Replacement</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-columns menu-icon"></i>
                <span class="menu-title">New Checkbook</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                <i class="icon-columns menu-icon"></i>
                <span class="menu-title">Update Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)" @click="logout()">
                <i class="icon-columns menu-icon"></i>
                <span class="menu-title">Logout </span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-md-12 grid-margin">
                <div class="row">
                  <div class="col-12 col-xl-8 mb-4 mb-xl-0"></div>
                  <div class="col-12 col-xl-4">
                    <div class="justify-content-end d-flex">
                      <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                        <button
                          class="btn btn-sm btn-light bg-white dropdown-toggle"
                          type="button"
                          id="dropdownMenuDate2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <i class="mdi mdi-calendar"></i> Today (10 Jan 2021)
                        </button>
                        <div
                          class="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuDate2"
                        >
                          <a class="dropdown-item" href="#">January - March</a>
                          <a class="dropdown-item" href="#">March - June</a>
                          <a class="dropdown-item" href="#">June - August</a>
                          <a class="dropdown-item" href="#"
                            >August - November</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 grid-margin stretch-card mb-0">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title mb-0">User Profile</p>
                  </div>
                </div>
              </div>

              <!-- profile -->
              <div class="bg-dark mx-3 p-2 p-lg-5 w-100">
                <div class="row text-center text-md-left">
                  <div class="col-md-6 text-center my-3 my-md-0">
                    <div>
                      <el-avatar :src="preview" class="avatar"></el-avatar>
                    </div>
                  </div>
                  <div class="col-md-6 d-lg-flex justify-content-between">
                    <div class="">
                      <p class="text-white">
                        Name: {{ userDetails.first_name }}
                        {{ userDetails.middle_name }} {{ userDetails.surname }}
                      </p>
                      <p class="text-white">Email: {{ userDetails.email }}</p>
                      <p class="text-white">
                        Date of Birth: {{ userDetails.dob }}
                      </p>
                      <p class="text-white">
                        Account Number: {{ userDetails.account_number }}
                      </p>
                      <p class="text-white">
                        Account Status: {{ userDetails.status }}
                      </p>
                      <p class="text-white">
                        Available Balance: {{ userDetails.available_bal }}
                      </p>
                      <button
                        class="btn btn-dark border-success"
                        @click="showForm()"
                        v-if="toggleBtn"
                      >
                        Update Profile
                      </button>
                    </div>
                    <div class="py-4 py-md-0" v-if="updateSection">
                      <form action="" @submit.prevent="updateProfile()">
                        <div class="form-group">
                          <input
                            type="file"
                            class="form-control-file"
                            id="file"
                            ref="fileInput"
                            @input="pickFile"
                            required
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            id=""
                            class="form-control"
                            placeholder="Next Of Kin"
                            aria-describedby="helpId"
                            v-model="profileUpdate.next_of_kin"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="number"
                            name=""
                            id=""
                            class="form-control"
                            placeholder="Phone Number"
                            aria-describedby="helpId"
                            v-model="profileUpdate.phone_nok"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            id=""
                            class="form-control"
                            placeholder="Relationship Status"
                            aria-describedby="helpId"
                            v-model="profileUpdate.relationship_nok"
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-dark border-success"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="btn btn-dark border-success ml-2"
                          @click="cancelUpdate()"
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- profile -->
            </div>
          </div>

          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div
              class="
                d-sm-flex
                justify-content-center justify-content-sm-between
              "
            >
              <span
                class="
                  text-muted text-center text-sm-left
                  d-block d-sm-inline-block
                "
                >Copyright © 2021.</span
              >
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-p
            Panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
  </div>
</template>

<script>
import api from "@/helpers/api";
export default {
  data() {
    return {
      userDetails: "",
      userToken: "",
      transactionsHistory: "",
      updateSection: false,
      toggleBtn: true,
      transferDetails: {
        to_account: 3,
        transaction_type: "Credit",
        tansfer_amount: 10000.0,
        transfer_description: "10000",
        transaction_date: "2021-10-09",
        from_account: 1,
      },
      preview:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",

      profileUpdate: {
        next_of_kin: "",
        passport: null,
        phone_nok: "",
        relationship_nok: "",
      },
      errors: [],
    };
  },

  methods: {
    logout() {
      this.$confirm("Close current Session?", "Logout", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("logout").then(this.$router.push("/login"));
        })
        .catch(() => {});
    },

    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.preview = e.target.result;
          this.profileUpdate.passport = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },

    async updateProfile() {
      try {
        console.log(this.profileUpdate);
        const response = await api.updateProfile(this.profileUpdate);
        console.log(response);
      } catch (error) {
        console.log(error.response);
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

    showForm() {
      this.updateSection = !this.updateSection;
      this.toggleBtn = !this.toggleBtn;
    },
    cancelUpdate() {
      this.updateSection = !this.updateSection;
      this.toggleBtn = !this.toggleBtn;
    },
    toggleSideNav() {
      let sidenav = document.getElementById("sidebar");

      sidenav.classList.toggle("right");
    },
    navigateRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    } else {
      this.userDetails = this.$store.getters.getUser;
      this.userToken = this.$store.getters.isLoggedIn;
    }
  },
};
</script>

<style scoped>
.sidebar .nav:not(.sub-menu) {
  margin-top: 1.45rem;
  margin-left: 0rem;
  margin-right: 1rem;
}

.avatar {
  width: 150px;
  height: 150px;
}
.right {
  right: 0px;
}

@media (min-width: 768px) {
  .avatar {
    width: 300px;
    height: 300px;
  }
}
</style>