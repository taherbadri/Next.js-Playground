"use client";
import { updateTask } from "@/utils/actions";
import React, { useDeferredValue, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const EditButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="btn btn-block btn-sm btn-accent"
			disabled={pending ? true : false}
		>
			{pending ? "editing task" : "edit"}
		</button>
	);
};

const initialState = {
	message: null,
};

const EditForm = ({ task }) => {
	const [state, updateForm] = useFormState(updateTask, initialState);

	useEffect(() => {
		if (state.message === "success") {
			toast.success("task edited successfully");
		}
		if (state.message === "error") {
			toast.error("there was an error");
		}
	}, [state]);
	const { id, content, completed } = task;
	return (
		<form
			action={updateForm}
			className="max-w-sm shadow-lg p-4 border border-base-100 rounded-lg"
		>
			<input type="hidden" name="id" value={id} />
			<input
				type="text"
				name="content"
				className="input input-bordered mb-2 w-full"
				required
				defaultValue={content}
			/>
			<div className="form-control my-4">
				<label htmlFor="completed" className="label cursor-pointer">
					<span className="label-text capitalize">completed</span>
					<input
						type="checkbox"
						defaultChecked={completed}
						name="completed"
						id="completed"
						className="checkbox checkbox-primary checkbox-sm"
					/>
				</label>
			</div>
			<EditButton />
		</form>
	);
};

export default EditForm;
