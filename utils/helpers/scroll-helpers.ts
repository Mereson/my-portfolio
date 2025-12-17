export const scrollIntoView = (id: string) => {
	const section = document.getElementById(id)
	console.log(section)
	if (!section) return

	const top = section.getBoundingClientRect().top + window.scrollY
	window.scrollTo({ top, behavior: "smooth" })
}

export const onHeroScroll = (section: HTMLElement) => {
	const rect = section.getBoundingClientRect()
	const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1)

	section.style.setProperty("--scroll", progress.toString())
}

export const onServicesCardScroll = (card: HTMLElement) => {
	const rect = card.getBoundingClientRect()
	const viewHeight = window.innerHeight

	const start = viewHeight * 0.3
	const end = viewHeight

	const rawProgress = (start - rect.top * 1.3) / (start - end)

	const progress = Math.min(Math.max(rawProgress, 0), 1)

	card.style.setProperty("--p", progress.toString())
}
