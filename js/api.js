const { createApp } = Vue

createApp({
    data() {
        return {
            url:"https://www.googleapis.com/books/v1/volumes?q=search+terms/",
            error: false,
            datos: []
        }
    },

    methods:{
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.datos = data
            });
    }
},
    created(){
          this.fetchData(this.url)
},
}).mount('#app')
