"use client";
import { deleteTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const DeleteButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			className="btn btn-error btn-xs capitalize"
			type="submit"
			disabled={pending ? true : false}
		>
			{pending ? "deleting" : "delete"}
		</button>
	);
};

const initialState = {
	message: null,
};

const DeleteForm = async ({ taskId }) => {
	const [state, deleteFunction] = useFormState(deleteTask, initialState);

	useEffect(() => {
		if (state.message === "success") {
			toast.success("Task deleted successfully");
		}
		if (state.message === "error") {
			toast.error("there was an error");
		}
	}, [state]);

	return (
		<form action={deleteFunction}>
			<input type="hidden" name="id" value={taskId} />
			<DeleteButton />
		</form>
	);
};

export default DeleteForm;
