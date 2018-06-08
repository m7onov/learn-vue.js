v-bind:title="message"
v-if="seen"
v-for="todo in todos"
v-on:click="execMyFun"

Vue.component('todo-item', {
  template: '<li>Это одна задача в списке</li>'
})
<ol>
  <!-- Создаём экземпляр компонента todo-item -->
  <todo-item></todo-item>
</ol>

