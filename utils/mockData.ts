import ECH_Work from "@/public/assets/images/ech_landing.png"
import ECH_Students from "@/public/assets/images/ech_students_dashboard.png"
import Serlzo from "@/public/assets/images/serlzo.png"
import DigiTeach from "@/public/assets/images/digi_teach_africa.png"
import { SelectedWorksProps, ServicesProps } from "./types"

export const services: ServicesProps[] = [
	{
		servicesId: 1,
		text: "Front-end",
		subtext:
			"Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
	},
	{
		servicesId: 2,
		text: "Back-end",
		subtext:
			"Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
	},
	{
		servicesId: 3,
		text: "Community",
		subtext:
			"Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
	},
]

export const selectedWorksList: SelectedWorksProps[] = [
	{
		picture: ECH_Work,
		href: "#",
		work: "ECH Landing Page",
	},
	{
		picture: ECH_Students,
		href: "#",
		work: "ECH Students Dashboard",
	},
	{
		picture: Serlzo,
		href: "#",
		work: "Serlzo",
	},
	{
		picture: DigiTeach,
		href: "#",
		work: "Digi Teach Africa",
	},
]
