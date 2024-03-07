"use client";
import { createTaskCustom } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="btn btn-accent mt-4 w-full capitalize"
			disabled={pending}
		>
			{pending ? "please wait..." : "create task"}
		</button>
	);
};

const initialState = {
	message: null,
};

const TaskFormCustom = () => {
	const [state, formAction] = useFormState(createTaskCustom, initialState);
	useEffect(() => {
		if (state.message === "error") {
			toast.error("there was an error");
		}
		if (state.message === "success") {
			toast.success("task created");
		}
	}, [state]);
	return (
		<div>
			<form
				action={formAction}
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
				<SubmitButton />
			</form>
		</div>
	);
};

export default TaskFormCustom;
