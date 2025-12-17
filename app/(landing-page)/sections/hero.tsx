"use client"
import Image from "next/image"
import MyPicture from "@/public/assets/images/Chimere_Ojinta.jpg"
import { Typography } from "@/ui"
import { ShowWorks } from "../components"
import { FloatingShapes } from "@/public"
import { useEffect, useRef } from "react"
import { onHeroScroll } from "@/utils"

export const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const handleScroll = () => onHeroScroll(section) 

		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<section
			ref={sectionRef}
			className="pt-24 grid place-items-center gap-8 mb-38 relative"
		>
			<FloatingShapes />
			<Image
				src={MyPicture}
				className="w-140 rounded-4xl parallax-image-hero"
				alt="My picture"
			/>
			<div className="grid gap-4 parallax-text-hero">
				<Typography
					variant="h1"
					fontWeight="semi-bold"
					font="genos"
					align="center"
					color="primary"
				>
					Chimere Ojinta
				</Typography>
				<Typography
					variant="body-xl"
					font="nunito"
					fontWeight="light"
					color="primary-muted"
					align="center"
					customClassName="max-w-150 leading-[150%]! z-10!"
				>
					Premium web design, development, and SEO services to help your
					business stand out.
				</Typography>
			</div>
			<div className="parallax-cta-hero">
				<ShowWorks />
			</div>
		</section>
	)
}
