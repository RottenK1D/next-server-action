"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimeProp } from "./AnimeCard";
import { AnimeCard } from "./AnimeCard";

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export type AnimeCard = JSX.Element;

let pageIndex = 2;

export function LoadMore() {
	const { ref, inView } = useInView();
	const [data, setData] = useState<AnimeCard[]>([]);

	useEffect(() => {
		if (inView) {
			fetchAnime(pageIndex).then((res) => {
				setData([...data, ...res]);
				pageIndex++;
			});
		}
	}, [inView, data]);

	return (
		<>
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{data}
			</section>
			<section className="flex justify-center items-center w-full">
				<div ref={ref}>
					<Image
						src="/spinner.svg"
						alt="spinner"
						width={56}
						height={56}
						className="object-contain"
					/>
				</div>
			</section>
		</>
	);
}
