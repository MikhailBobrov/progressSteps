const App = {
    data() {
        return {
            title: 'Мой первый тест',
            circles: [1, 2, 3, 4],
            currentIndex: 1,
            progressWidth: 0,
            progress: 'progress'
        }
    },
    methods: {
        next() {
            this.currentIndex++
            if (this.currentIndex > this.circles.length) {
                this.currentIndex = this.circles.length
            }
            console.log(this.currentIndex)
        },

        prev() {
            if (this.currentIndex !==1) {
                this.currentIndex--
            }
            console.log(this.currentIndex)
        },
        setActive(idx) {
            this.currentIndex = idx
        }

    },
    computed: {
        prevDisabled() {
            return this.currentIndex === 1
        },
        nextDisabled () {
            return this.currentIndex === this.circles.length
        }
    }
}

Vue.createApp(App).mount('#app')