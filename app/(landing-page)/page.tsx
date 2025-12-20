import { AboutMe, CTA, Hero, Navbar, SelectedWorks } from "./sections"

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<SelectedWorks />
			<AboutMe />
			<CTA />
		</>
	)
}
