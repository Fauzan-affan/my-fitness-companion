const personal = new Vue({
    el: "#personal",
    data: {
        workout: [],
        add: '',
    },
    methods: {
        addNewWorkout: function() {
            // this.workout.push(this.add)
            // this.add = ''
            console.log(this.add)
            fetch("http://127.0.0.1:8080/personals", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: this.add})
            })
            .then(response => response.json())
            .then((data) => {
                // console.log(data.name)
                this.workout.push(data)
            })

            this.add = ''
        },
        deleteWorkout: function (id) {
            fetch("http://127.0.0.1:8080/personals/" + id, {
                method: 'DELETE'
            })
            console.log(id)
            // this.workout.splice(id,1)
        }
    },
    mounted() {
        fetch("http://127.0.0.1:8080/personals")
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            if (data) {
                this.workout = data
            }
            // console.log(this.workout)
        })
    }
})