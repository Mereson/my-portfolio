import { StaticImageData } from "next/image"

export interface ServicesProps {
	servicesId: number
	text: string
	subtext: string
}

export interface SelectedWorksProps {
	"_id": string
	picture: StaticImageData
	work: string
}

export interface IndividualWorkProps {
	"_id": string
	picture: StaticImageData
	work: string
	body: string
}
