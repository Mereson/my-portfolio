import type { Metadata } from "next"
import "@/styles/globals.css"
import { genos, nunito, outfit } from "@/styles/font"
import Providers from "./providers"

export const metadata: Metadata = {
	title: "Chimere's Portfolio",
	description: "The portfolio for Chimeremnma Ojinta ",
	icons: [
		{
			rel: "icon",
			url: "/favicon1.ico",
		},
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunito} ${outfit} ${genos} text- antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
