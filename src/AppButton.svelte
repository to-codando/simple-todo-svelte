<script>
import { removeTaskObserver, selectTaskObserver } from "./utils/tasks.observer";



  const removeTask = () => {
    const taskToRemove = selectTaskObserver.get()
    removeTaskObserver.set(taskToRemove)
  }

</script>

<button on:click={removeTask}> Remover </button>

<style>
  button {
    text-align:center;
    padding: 1rem;
    border-radius:4px;
    border:0;
    background:#ff1366;
    color:#fff;
    cursor: pointer
  }
</style>