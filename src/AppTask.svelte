<script>
	import { selectTaskObserver } from './utils/tasks.observer'
	export let task = {}

	const selectTask = (task) => {
		selectTaskObserver.set({ ...task, selected: true })
	}
</script>

<li 
	class:selected={task.selected}
	on:click={selectTask(task)}
>
	{task.title}
</li>

<style>
	li {
		padding:5px 0;
		cursor: pointer
	}
	.selected {
		color:#e22b80
	}
</style>