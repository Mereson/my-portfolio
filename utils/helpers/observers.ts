import { Dispatch, SetStateAction } from "react"

export const setAboutMeObserver = (
	setShowTypedText: Dispatch<SetStateAction<boolean>>
): IntersectionObserver => {
	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0]

			if (entry.isIntersecting) {
				setShowTypedText(true)
			} else {
				setShowTypedText(false)
			}
		},
		{
			root: null,
			threshold: 0,
			rootMargin: "-1px",
		}
	)

	return observer
}
