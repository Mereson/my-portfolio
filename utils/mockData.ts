import ECH_Work from "@/public/assets/images/ech_landing.png"
import ECH_Students from "@/public/assets/images/ech_students_dashboard.png"
import Serlzo from "@/public/assets/images/serlzo.png"
import DigiTeach from "@/public/assets/images/digi_teach_africa.png"
import My_Picture from "@/public/assets/images/Chimere_Ojinta.jpg"
import { ServicesProps } from "./types"

export const services: ServicesProps[] = [
	{
		servicesId: 1,
		text: "Front-end",
		subtext:
			"I bring designs to life, turning them into responsive, polished interfaces people enjoy using.",
	},
	{
		servicesId: 2,
		text: "Back-end",
		subtext:
			"I design and connect the systems behind the scenes that keep your product fast, secure, and dependable.",
	},
	{
		servicesId: 3,
		text: "Community",
		subtext:
			"I believe in giving back by supporting communities, sharing knowledge, and helping others grow.",
	},
]

// export const worksList: WorksProps[] = [
// 	{
// 		_id: 1,
// 		picture: ECH_Work,
// 		work: "ECH Landing Page",
// 		selected: true,
// 	},
// 	{
// 		_id: 2,
// 		picture: ECH_Students,
// 		work: "ECH Students Dashboard",
// 		selected: true,
// 	},
// 	{
// 		_id: 3,
// 		picture: Serlzo,
// 		work: "Serlzo",
// 		selected: true,
// 	},
// 	{
// 		_id: 4,
// 		picture: DigiTeach,
// 		work: "Digi Teach Africa",
// 		selected: true,
// 	},
// 	{
// 		_id: 5,
// 		picture: DigiTeach,
// 		work: "Digi Teach Africa",
// 		selected: false,
// 	},
// ]

// export const individualWork: IndividualWorkProps[] = [
// 	{
// 		_id: 1,
// 		pictureURL: ECH_Work,
// 		work: "ECH Landing Page",
// 		body: "",
// 	},
// 	{
// 		_id: 2,
// 		pictureURL: ECH_Students,
// 		work: "ECH Students Dashboard",
// 		body: "",
// 	},
// 	{
// 		_id: 3,
// 		pictureURL: Serlzo,
// 		work: "Serlzo",
// 		body: "",
// 	},
// 	{
// 		_id: 4,
// 		pictureURL: DigiTeach,
// 		work: "Digi Teach Africa",
// 		body: "",
// 	},
// ]

export const aboutMe = {
	picture: My_Picture,
	myName: "Chimere Ojinta",
	body: "Hi, I'm Chimere Ojinta — a full-stack developer with a strong interest in business and community building. I enjoy building products that solve real problems for real people. With a first-class degree in Computer Science, I'm driven by continuous learning and a commitment to excellence, always aiming to deliver thoughtful, world-class solutions. Feel free to reach out if you'd like to build something meaningful together.",
}
