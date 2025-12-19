export const scrollIntoView = (id: string) => {
	const section = document.getElementById(id)
	console.log(section)
	if (!section) return

	const top = section.getBoundingClientRect().top + window.scrollY
	window.scrollTo({ top, behavior: "smooth" })
}

export const handleParallaxScroll = (
	section: HTMLElement,
	variable: string
) => {
	const rect = section.getBoundingClientRect()
	const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1)

	section.style.setProperty(variable, progress.toString())
}

export const onServicesCardScroll = (
	card: HTMLElement,
	variable: string,
	{ vhMultiplier, rtMultiplier }: { vhMultiplier: number; rtMultiplier: number }
) => {
	const rect = card.getBoundingClientRect()
	const viewHeight = window.innerHeight

	const start = viewHeight * vhMultiplier
	const end = viewHeight

	const rawProgress = (start - rect.top * rtMultiplier) / (start - end)

	const progress = Math.min(Math.max(rawProgress, 0), 1)

	card.style.setProperty(variable, progress.toString())
}
