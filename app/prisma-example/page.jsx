import prisma from "@/utils/db";
import React from "react";

const prismaHandlers = async () => {
	// await prisma.task.create({
	// 	data: {
	// 		content: "wake up",
	// 	},
	// });
	const allTasks = await prisma.task.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return allTasks;
};

const PrismaExamplePage = async () => {
	const tasks = await prismaHandlers();

	return (
		<div>
			<h1 className="text-4xl">Prisma Example</h1>
			{tasks.map((task) => {
				const { id, content, createdAt, completed } = task;
				return (
					<h2 key={id} className="text-xl py-2 capitalize">
						<span className="font-bold">{content}</span>
						{` created at ${createdAt} : status ${
							completed ? "Completed" : "Not Completed"
						}`}
					</h2>
				);
			})}
		</div>
	);
};

export default PrismaExamplePage;
