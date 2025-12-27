import { StaticImageData } from "next/image"

export interface ServicesProps {
	servicesId: number
	text: string
	subtext: string
}

export interface SelectedWorksType {
	_id: number
	pictureURL: string
	work: string
	selected: boolean
	slug: string
}

export interface AllWorksType {
	_id: number
	pictureURL: string
	work: string
	slug: string
}

export interface IndividualWorkProps {
	_id: number
	pictureURL: string | StaticImageData
	work: string
	link: string
	slug: string
	body: string
}
