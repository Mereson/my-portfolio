import { StaticImageData } from "next/image"

export interface ServicesProps {
	servicesId: number
	text: string
	subtext: string
}

export interface SelectedWorksProps {
	picture: StaticImageData
	href: string
	work: string
}
