import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleImagePage = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`https://picsum.photos/id/${id}/info`);
	if (!res.ok) {
		throw new Error("failed to fetch the image");
	}
	const img = await res.json();
	const { download_url, author, width, height } = img;
	return (
		<>
			<Link href={"/fetch"} className="btn mb-8 btn-primary capitalize">
				back to gallery
			</Link>
			<p className="text-2xl mt-8 text-center font-bold">{author}</p>
			<div className="relative h-96 my-4">
				<Image
					src={download_url}
					fill
					sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw"
					alt={author}
					className="rounded-md object-cover"
					priority
				/>
			</div>
		</>
	);
};
// <div className="card mb-8 bg-base-100 w-80 shadow-xl" key={img.id}>
// 	<figure className="relative h-48">
// 		<Image
// 			width={width}
// 			height={height}
// 			src={download_url}
// 			alt={author}
// 			priority
// 		/>
// 	</figure>
// 	<div className="card-body">
// 		<h4 className="card-title">{author}</h4>
// 	</div>
// </div>

export default SingleImagePage;
