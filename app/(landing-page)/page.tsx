import { AboutMe, Experiences, Hero, SelectedWorks } from "./sections"

export default function Home() {
	return (
		<>
			<Hero />
			<SelectedWorks />
			{/* <Experiences /> */}
			<AboutMe />
		</>
	)
}
