import Link from "next/link";
import React from "react";
const data = [
	{ href: "/client", text: "client page" },
	{ href: "/fetch", text: "Gallery" },
	{ href: "/prisma-example", text: "prisma-example page" },
	{ href: "/tasks", text: "tasks page" },
];
const Navbar = () => {
	return (
		<nav className="bg-base-300 py-2">
			<div className="navbar px-8 max-w-8xl flex-col mx-auto sm:flex-row">
				<Link
					href={"/"}
					className="text-2xl text-primary capitalize menu-title"
				>
					next.js
				</Link>
				<ul className="menu menu-horizontal md:ml-8 flex-1 align-middle justify-end ">
					{data.map((item, index) => {
						const { href, text } = item;
						return (
							<li key={href}>
								<Link href={href} className="capitalize">
									{text}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
