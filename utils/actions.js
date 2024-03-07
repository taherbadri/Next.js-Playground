"use server";

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getTasks = async () => {
	const tasks = await prisma.task.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return tasks;
};

export const createTask = async (formData) => {
	const content = formData.get("content");
	const task = await prisma.task.create({
		data: {
			content: content,
		},
	});
	revalidatePath("/tasks");
};
export const createTaskCustom = async (prevState, formData) => {
	const content = formData.get("content");
	const Task = z.object({
		content: z.string().min(5),
	});
	try {
		Task.parse({ content });
		const task = await prisma.task.create({
			data: {
				content: content,
			},
		});
		revalidatePath("/tasks");
		return { message: "success" };
	} catch (error) {
		console.log(error);
		return { message: "error" };
	}
};

export const deleteTask = async (prevState, formData) => {
	const id = formData.get("id");
	const Task = z.object({
		id: z.string(),
	});
	try {
		Task.parse({ id });
		await prisma.task.delete({
			where: {
				id: id,
			},
		});
		revalidatePath("/tasks");
		return { message: "success" };
	} catch (error) {
		return { message: "error" };
	}
};

export const getSingleTask = async (id) => {
	const task = await prisma.task.findUnique({
		where: {
			id: id,
		},
	});
	return task;
};

export const updateTask = async (prevState, formData) => {
	const id = formData.get("id");
	const content = formData.get("content");
	const completed = formData.get("completed");
	const Task = z.object({
		content: z.string().min(5),
		id: z.string(),
	});
	try {
		Task.parse({ content, id });
		await prisma.task.update({
			where: {
				id: id,
			},
			data: {
				content,
				completed: completed === "on" ? true : false,
			},
		});
		return { message: "success" };
	} catch (error) {
		return { message: "error" };
	}
	redirect("/tasks");
};
