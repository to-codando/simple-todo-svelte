<script>
  import AppTask from './AppTask.svelte'

  export let tasks;
  console.log(tasks)
</script>

<ul>
  {#each tasks as task}
    <AppTask task={task}/>
  {/each}
</ul>

<style>

</style>