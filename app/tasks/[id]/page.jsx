import EditForm from "@/components/EditForm";
import { getSingleTask } from "@/utils/actions";

import Link from "next/link";
import React from "react";

const SingleTask = async ({ params }) => {
	const task = await getSingleTask(params.id);
	return (
		<div className="mb-16">
			<Link href={"/tasks"} className="btn btn-primary mb-8">
				Back to Tasks
			</Link>
			<EditForm task={task} />
		</div>
	);
};

export default SingleTask;
