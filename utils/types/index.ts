import { StaticImageData } from "next/image"

export interface ServicesProps {
	servicesId: number
	text: string
	subtext: string
}

export interface WorksProps {
	"_id": number
	picture: StaticImageData | string
	work: string
	selected: boolean
}

export interface IndividualWorkProps {
	"_id": number
	picture: StaticImageData
	work: string
	body: string
}
