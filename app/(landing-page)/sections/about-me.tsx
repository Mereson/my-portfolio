"use client"
import { Typography } from "@/ui"
import { useEffect, useRef } from "react"
import { aboutMe, handleParallaxScroll, onServicesCardScroll } from "@/utils"
import { Hilly } from "@/public"
import Image from "next/image"

const vhMultiplier = 0.3
const rtMultiplier = 1.7

export const AboutMe = () => {
	const sectionRef = useRef<HTMLElement>(null)

	const { myName, body, picture } = aboutMe

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
			id="about-me"
			ref={sectionRef}
			className="grid overflow-hidden relative w-screen pt-[12.313rem] about-me-bg"
		>
			<div className="section-blend"></div>
			<section
				id="about-me"
				className="flex items-center justify-center gap-20"
			>
				<article className="grid gap-3">
					<Typography
						variant="h1"
						fontWeight="semi-bold"
						font="genos"
						customClassName="about-me-text text-[55px]"
					>
						{myName}
					</Typography>
					<Typography
						variant="body-l"
						color="white"
						customClassName="about-me-text leading-[160%] max-w-[640px] text-justify! whitespace-pre-line"
					>
						{body}
					</Typography>
				</article>
				<Image
					src={picture} 
					width={408}
					height={408}
					className="size-102 rounded-3xl shadow-lg"
					alt="My Picture"
				/>
			</section>
			<Hilly />
		</section>
	)
}
