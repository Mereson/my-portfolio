import type { Metadata } from "next"
import "@/styles/globals.css"
import { genos, nunito, outfit } from "@/styles/font"

export const metadata: Metadata = {
	title: "Chimere's Portfolio",
	description: "The portfolio for Chimeremnma Ojinta ",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunito} ${outfit} ${genos} text- antialiased`}>
				{children}
			</body>
		</html>
	)
}
