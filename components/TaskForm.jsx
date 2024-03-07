import { createTask } from "@/utils/actions";

const TaskForm = () => {
	return (
		<div>
			<form
				action={createTask}
				className="w-96 rounded-xl h-auto p-8 shadow-lg"
			>
				<div className="form-control">
					<label htmlFor="task" className="label">
						Task
					</label>
					<input
						type="text"
						className="input input-bordered"
						id="task"
						name="content"
						placeholder="type here..."
						required
					/>
				</div>
				<button type="submit" className="btn btn-accent mt-4 w-full capitalize">
					create task
				</button>
			</form>
		</div>
	);
};

export default TaskForm;
