"use client"
import { Typography } from "@/ui"
import { scrollIntoView } from "@/utils"

export const Navbar = () => {
	return (
		<section className="w-full absolute top-5 grid place-items-center ">
			<nav className="p-4 sm:px-6 sm:py-5 z-10 bg-[#dac5a70d] rounded-sm">
				<Typography
					tag="ul"
					fontWeight="semi-bold"
					color="white"
					customClassName="flex gap-6"
				>
					{navLinks.map((navLink, i) => (
						<li
							key={i}
							onClick={() => scrollIntoView(navLink.href)}
							className="hover:text-[#E7A03A] cursor-pointer transition-colors duration-150 ease-linear"
						>
							{navLink.link}
						</li>
					))}
				</Typography>
			</nav>
		</section>
	)
}

const navLinks = [
	{
		link: "Works",
		href: "selected-section",
	},
	{
		link: "About Me",
		href: "about-me",
	},
	{
		link: "Contact",
		href: "contact",
	},
]
