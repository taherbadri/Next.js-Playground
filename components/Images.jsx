import Image from "next/image";
import Link from "next/link";
import React from "react";

const Images = ({ images }) => {
	return (
		<ul className="grid sm:grid-cols-2 gap-4 mt-6">
			{images.map((img) => {
				const { id, author, download_url, width, height } = img;
				return (
					<li key={id}>
						<Link
							href={`/fetch/${id}`}
							key={id}
							className="text-xl font-medium"
						>
							<div className="relative h-48 mb-4">
								<Image
									src={download_url}
									fill
									sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw"
									alt={author}
									className="rounded-md object-cover"
								/>
							</div>
						</Link>
						{author}
					</li>
				);
			})}
		</ul>
	);
};

/* <div className="card mb-8 bg-base-100 w-80 shadow-xl" key={id}>
	<figure>
		<Image
			width={width}
			height={height}
			src={download_url}
			alt={author}
			priority
		/>
	</figure>
	<div className="card-body">
		<h4 className="card-title">{author}</h4>
	</div>
</div> */
export default Images;
