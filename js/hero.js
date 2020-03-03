Vue.component('modal', {
    template: '#modal-template',
})

const hero = new Vue({
    el: "#hero",
    data: {
        workout: [],
        showModal: false,
    },
    methods: {
        modalActive: function () {
            this.showModal = true
        },
        modalClose: function () {
            this.showModal = false
        },
        searchWorkouts: function (search) {
            this.workout.map(val => {
                val.name === search
            })
        }
    },
    mounted() {
        fetch("http://127.0.0.1:8080/heroes")
        .then(response => response.json())
        .then((data) => {
            this.workout= data
            // console.log(data)
        })
        .catch((error) => console.log(error))
    }
})