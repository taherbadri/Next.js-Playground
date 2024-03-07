const { default: prisma } = require("@/utils/db");

export const GET = async (req) => {
	const tasks = await prisma.task.findMany();
	return Response.json({ data: tasks });
};

export const POST = async (req) => {
	try {
		const { content } = await req.json();
		const task = await prisma.task.create({
			data: {
				content,
			},
		});
		return Response.json({
			data: task,
			message: "task created successfully",
		});
	} catch (error) {
		return Response.json({
			message: "something went wrong",
		});
	}
};
