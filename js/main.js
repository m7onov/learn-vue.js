new Vue({
  el: "#app",
  data: {
    question: "",
    answer: "Пока вы не зададите вопрос, я не смогу ответить",
    img_src: ""
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = "Ожидаю, когда вы закончите печатать..."
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?")===-1) {
        this.answer = "Вопросы обычно заканчиваются вопросительным знаком ;-)"
        return
      }
      this.answer = "Думаю..."
      var vm = this
      axios.get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer)
          vm.img_src = response.data.image
        })
        .catch(function(error) {
          vm.answer = "Не могу связаться с API: " + error
        })
    }
  }
})
