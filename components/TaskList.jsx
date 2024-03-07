import Link from "next/link";
import React from "react";
import DeleteForm from "./DeleteForm";
import { getTasks } from "@/utils/actions";

const TaskList = async () => {
	const tasks = await getTasks();
	if (tasks.length === 0) {
		return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
	}
	return (
		<div>
			<ul className="mt-8">
				{tasks.map((task) => {
					const { id, content, createdAt, completed } = task;
					return (
						<li
							className="flex justify-between items-center py-4 px-6 mb-4 rounded-lg border border-base-300 bg-base-100 capitalize shadow-lg"
							key={id}
						>
							<h2 className={`text-lg ${completed && "line-through"}`}>
								{content}
							</h2>
							<div className="flex gap-6 items-center">
								<Link href={`/tasks/${id}`} className="btn btn-accent btn-xs">
									edit
								</Link>
								<DeleteForm taskId={id} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TaskList;
