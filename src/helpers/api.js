import axios from "axios";
import store from '../store/index.js'

const baseUrl = "https://steplight.herokuapp.com/api/"

const token = store.getters.isLoggedIn

export default {
    // Login
    async login(credentials) {
        return axios.post(baseUrl + 'login/', credentials)
            .then(response => response.data)
    },

    // Register
    async register(credentials) {
        return axios.post(baseUrl + 'register/', credentials)
            .then(response => response.data)
    },

    // Transfer List
    async transferList() {
        return axios.get(baseUrl + 'transferlist/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => response.data)
    },


    //Send  Contact Message
    async sendContactMessage(message) {
        return axios.post(baseUrl + 'contactlist/', message)
            .then(response => response.data)
    },

    // Get Contact Message List
    async getContactMessage() {
        return axios.get(baseUrl + 'contactlist/').then(response => response.data)
    },


    // View Transfer List
    async historyList() {
        return axios.get(baseUrl + 'historiesview/', {
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => response.data)
    },


    //Make Transfer
    async makeTransfer(details) {
        return axios.post(baseUrl + 'historiesview/', details, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(response => response.data)
    },

    //Update Profile
    async updateProfile(profile) {
        return axios.post(baseUrl + 'profileupdate/', profile, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(response => response.data)
    },


}