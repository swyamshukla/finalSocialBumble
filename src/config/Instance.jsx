import axios from "axios";


export let Instance= axios.create({
    baseURL:"https://randomuser.me/api/" ,timeout:5000
})
