<script>
		import { createTaskObserver } from './utils/tasks.observer'

		const createTask = ({ target, keyCode }) => {
				const enter = 13
				if(enter !== keyCode) return
				createTaskObserver.set({ title: target.value })
				target.value = ''
		}
</script>

<label>
	<span>Nova tarefa</span>
	<input type="text" on:keyup={createTask}>
</label>

<style>
	label {
		display:flex;
		flex-wrap: wrap;
		width:100%;
		padding:1rem;
		background:#3400b6;
	}

	span {
		width:100%;
		text-transform: uppercase;
		font-size: .8em;
		font-weight:bold;
		margin-bottom:.8rem;
		color:#fff
	}

	input {
		width:100%;
		max-width:450px;
		padding:1rem;
		color:#fff;
		background: #6729ff;
		border:0;
		border-radius:4px;
		outline: none;
	}

	input:focus {
		outline-style: double;
		outline-color:#852eff		
	}
</style>