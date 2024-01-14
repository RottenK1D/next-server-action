"use server";

import { AnimeCard, AnimeProp } from "@/components/AnimeCard";

export async function fetchAnime(page: number) {
	const res = await fetch(
		`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`,
	);
	const data = await res.json();

	return await data.map((item: AnimeProp, index: number) => (
		<AnimeCard anime={item} index={index} key={item.id} />
	));
}
