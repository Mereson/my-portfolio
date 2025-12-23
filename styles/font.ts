import { Genos, Nunito, Outfit } from "next/font/google"

const genosFont = Genos({
	subsets: ["latin"],
	variable: "--font-genos",
	display: "swap",
})

const genos = genosFont.className

const outfitFont = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
})

const outfit = outfitFont.className

const nunitoFont = Nunito({
	subsets: ["latin"],
	variable: "--font-nunito",
	display: "fallback",
})

const nunito = nunitoFont.className

export { genos, outfit, nunito }
