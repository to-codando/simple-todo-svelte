<script>
		import AppCreateTask from './AppCreateTask.svelte'
		import AppTaskList from './AppTasksList.svelte'
		import AppButton from './AppButton.svelte'

		import { createTaskObserver, selectTaskObserver, removeTaskObserver } from './utils/tasks.observer'
		import { sort } from './utils/sort'

		let tasks = []

		let hasSelectedTask = false

		createTaskObserver.on(( task ) => {
			createTask(task)
		})

		selectTaskObserver.on(( task ) => {
			selectTask(task)
			hasSelectedTask = true
		})

		removeTaskObserver.on(( task ) => {
			removeTask(task)
			hasSelectedTask = false
		})

		const createTask = ({ title }) => {
			const id = tasks.length + 1
			tasks = [...tasks, { id, title}]
		}

		const removeTask = (taskToRemove) => {
			tasks = tasks.filter( task => task.id !== taskToRemove.id)
		}

		const selectTask = (selectedTask) => {
    const filterdTasks = tasks.filter( task => task.id !== selectedTask.id)
    const updatedTasks = filterdTasks.map( task => ({ ...task, selected: false}))
    tasks = [...updatedTasks, selectedTask]
  }		
</script>

<main>
	<container><h1>Tarefas</h1></container>
	<AppCreateTask/>
	<AppTaskList tasks={sort(tasks)}/>

	{#if hasSelectedTask}
		<container><AppButton/></container>
	{/if}

</main>

<style>
	container {
		display:block;
		float:left;
		padding-left:1rem
	}
</style>