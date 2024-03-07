import Images from "@/components/Images";
import React from "react";
const url = `https://picsum.photos/v2/list?page=${Math.floor(
	Math.random() * 100
)}&limit=6`;

const fetchImages = async () => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error("Failed to fetch Images");
	}
	const images = await res.json();
	return images;
};

const GalleryPage = async () => {
	const images = await fetchImages();

	return (
		<div>
			<Images images={images} />
		</div>
	);
};

export default GalleryPage;
