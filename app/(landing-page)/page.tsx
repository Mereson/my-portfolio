import { AboutMe, Experiences, Footer, Hero, SelectedWorks } from "./sections"

export default function Home() {
	return (
		<>
			<Hero />
			<SelectedWorks />
			<AboutMe />
			<Experiences />
			<Footer/>
		</>
	)
}
