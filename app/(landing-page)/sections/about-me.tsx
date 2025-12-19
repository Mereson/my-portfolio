"use client"
import { Typography } from "@/ui"
import { useEffect, useRef } from "react"
import My_Picture from "@/public/assets/images/Chimere_Ojinta.jpg"
import { handleParallaxScroll, onServicesCardScroll } from "@/utils"
import { Hilly } from "@/public"
import Image from "next/image"

const vhMultiplier = 0.3
const rtMultiplier = 1.7

export const AboutMe = () => {
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const handleScroll = () => handleParallaxScroll(section, "--hill")
		const handleBackgroundScroll = () =>
			onServicesCardScroll(section, "--colorShift", {
				vhMultiplier,
				rtMultiplier,
			})

		window.addEventListener("scroll", handleScroll, { passive: true })
		window.addEventListener("scroll", handleBackgroundScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("scroll", handleBackgroundScroll)
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className="grid overflow-hidden w-screen pt-[12.313rem] about-me-bg"
		>
			<section id="about-me" className="flex items-center justify-center gap-20">
				<article className="grid gap-3">
					<Typography
						variant="h1"
						fontWeight="semi-bold"
						font="genos"
						customClassName="about-me-text text-[55px]"
					>
						Chimere Ojinta
					</Typography>
					<Typography
						variant="body-l"
						color="white"
						customClassName="about-me-text leading-[150%] max-w-[560px]"
					>
						Hi, I&apos;m Chimere Ojinta - a freelancer specializing in premium
						web design, development, and SEO services. I&apos;m passionate about
						creating unique and effective solutions for my clients, and I bring
						a personal touch to every project. Let&apos;s work together to bring
						your vision to life!
					</Typography>
				</article>
				<Image src={My_Picture} className="size-102 rounded-3xl shadow-lg" alt="My Picture"/>
			</section>
			<Hilly />
		</section>
	)
}
