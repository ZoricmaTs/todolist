<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Редактирование задачи</h1>
    </div>
    <label class="task-label"></label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование задачи"
      v-model="subtask.name"
      required
    />
    <div class="buttons-container">
      <button type="button" class="btn btn-grey">Отмена</button>
      <button type="button" class="btn btn-green">Готово</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
