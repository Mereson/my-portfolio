import { AboutMe, CTA, Hero, Navbar, SelectedWorks } from "./sections"

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<SelectedWorks />
			<AboutMe />
			<CTA />
			<div className="max-[420px]:block hidden"></div>
		</>
	)
}
