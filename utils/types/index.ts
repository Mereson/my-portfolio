export interface ServicesProps {
	servicesId: number
	text: string
	subtext: string
}
export interface AllWorksType {
	_id: number
	pictureURL: string
	work: string
	slug: string
}
export interface SelectedWorksType extends AllWorksType {
	selected: boolean
}

export interface IndividualWorkProps extends AllWorksType {
	link: string
	body: string
}
