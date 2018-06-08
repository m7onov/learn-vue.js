new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    message: "Current time: " + new Date().toLocaleString(),
    seen: true,
    inText: "Ghbsdlfkj"
  },
  methods: {
    printSometh: function() {
      this.title = this.title.split('').reverse().join('')
    }
  }
})
