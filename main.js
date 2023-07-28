"use strict"

Vue.createApp({
    data() {
        return {
        listaMail: [],
        };
    },
methods: {
},
mounted() {
    for (let i = 0; i < 10; i++) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((axiosResp) => {
        this.listaMail.push(axiosResp.data.response);
        });
    }
},
}).mount("#app");