<template>
  <section>
    <header>
      <h3>Create new task</h3>
    </header>
    <form>
      <div class="form-control">
        <label for="tasktitle">Task Title</label>
        <input type="text" id="tasktitle" />
      </div>
      <div class="form-control">
        <label for="taskdesc">Task Description</label>
        <textarea id="taskdesc" rows="2"></textarea>
      </div>
      <div class="form-control">
        <label for="duedate">Due Date</label>
        <input type="datetime-local" id="duedate" />
      </div>
      <button>Create</button>
    </form>
  </section>
</template>

<style scoped>
section > header {
  text-align: center;
}
section > header > h3 {
  display: inline-block;
  color: #ff6666;
  border-bottom: #ff6666 dashed 0.2rem;
  padding-bottom: 0.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-transform: capitalize;
}
form {
  text-align: center;
  width: 50vw;
  margin: 0 auto;
  background-color: 1px;
}
.form-control > label {
  display: block;
}
</style>
