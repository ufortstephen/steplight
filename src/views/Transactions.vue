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
          <a class="navbar-brand brand-logo-mini" href="javascript:void(0)"
            ><img src="" alt="logo"
          /></a>
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
                    <a class="nav-link" href="javascript:void(0)"
                      >Fund Transfer</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)"
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
            <li class="nav-item" @click="navigateRoute('user_profile')">
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
                  <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                    <h3 class="font-weight-bold">Transaction History</h3>
                  </div>
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
              <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p class="card-title mb-0">Transaction History</p>
                    <div class="table-responsive">
                      <table class="table table-striped table-borderless">
                        <thead>
                          <tr>
                            <th>Transaction</th>
                            <th>Details</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(transaction, index) in transactionsHistory"
                            :key="index"
                          >
                            <td>{{ transaction.transaction_type }}</td>
                            <td>{{ transaction.transaction_description }}</td>
                            <td class="font-weight-bold">
                              $ {{ transaction.transaction_amount }}
                            </td>
                            <td>{{ transaction.transaction_date }}</td>
                            <td class="font-weight-medium">
                              <div class="badge badge-success">
                                {{ transaction.status }}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=".transfer_form">
              <h5>Make Transfer</h5>
              <form></form>
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
      transferDetails: {
        to_account: 3,
        transaction_type: "Credit",
        tansfer_amount: 10000.0,
        transfer_description: "10000",
        transaction_date: "2021-10-09",
        from_account: 1,
      },
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
    async transferList() {
      try {
        const response = await api.transferList();
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async historyList() {
      try {
        const response = await api.historyList();
        console.log(response);
        this.transactionsHistory = response;
      } catch (error) {
        console.log(error.response);
      }
    },

    async makeTransfer() {
      try {
        const response = await api.makeTransfer(this.transferDetails);
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },

    navigateRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
    toggleSideNav() {
      let sidenav = document.getElementById("sidebar");

      sidenav.classList.toggle("right");
    },
  },
  created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    } else {
      this.userDetails = this.$store.getters.getUser;
      this.userToken = this.$store.getters.isLoggedIn;
    }

    this.transferList();
    this.historyList();
    this.makeTransfer();
  },
};
</script>

<style scoped>
.sidebar .nav:not(.sub-menu) {
  margin-top: 1.45rem;
  margin-left: 0rem;
  margin-right: 1rem;
}

.right {
  right: 0px;
}
</style>