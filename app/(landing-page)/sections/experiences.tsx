"use client"
import { FloatingStars, Hilly } from "@/public"
import { Typography } from "@/ui"
import { handleParallaxScroll } from "@/utils"
import Image from "next/image"
import Stars from "@/public/assets/svgs/stars.svg"
import { useEffect, useRef } from "react"

export const Experiences = () => {
	const sectionRef = useRef<HTMLElement>(null)
	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const handleScroll = () => handleParallaxScroll(section, "--scroll")

		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<section className="py-[11.813rem] relative grid overflow-hidden  bg-[#220F40] place-items-center gap-10 ">
			<Image src={Stars} className="absolute top-0" alt="stars" />
			<div className="z-10">
				<FloatingStars num={1} />
			</div>
			<Typography
				variant="title-l"
				font="genos"
				fontWeight="bold"
				color="white"
				align="center"
				customClassName="max-w-[900px] z-10"
			>
				Let your Website <span className="text-[#E7A03A]"> shine</span>
			</Typography>

			<div className="px-5 py-3 bg-[#E7A03A] w-fit z-10 cursor-pointer rounded-lg">
				<Typography font="outfit" fontWeight="semi-bold">
					Get In Touch
				</Typography>
			</div>
		</section>
	)
}
