<template>
  <div>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование задачи"
      v-model="task.name"
      required
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
body {
  background: url(../assets/signinbackground.jpg) no-repeat;
  background-size: 100% auto;
}
</style>
