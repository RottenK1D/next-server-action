import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AmazingAnime",
	description:
		"AmazingAnime is a website that provides information about anime.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="max-w-7xl max-auto bg-[#0F1117]">
					<Hero />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
