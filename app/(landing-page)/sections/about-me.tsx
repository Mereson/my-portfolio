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
			className="grid overflow-hidden relative w-screen pt-28 sm:pt-[12.313rem] max-w-[1600px] about-me-bg"
		>
			<div className="section-blend"></div>
			<section
				id="about-me"
				className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10 sm:gap-20"
			>
				<article className="grid gap-3 mx-9">
					<Typography
						variant="h1"
						fontWeight="semi-bold"
						font="genos"
						customClassName="about-me-text xl:text-[55px]! text-[30px]"
					>
						{myName}
					</Typography>
					<Typography
						variant="body-l"
						color="white"
						customClassName="about-me-text leading-[160%] sm:w-full max-w-[640px] text-justify! whitespace-pre-line"
					>
						{body}
					</Typography>
				</article>
				<Image
					src={picture}
					width={408}
					height={408}
					className="size-52 sm:size-102 rounded-3xl shadow-lg"
					alt="My Picture"
				/>
			</section>
			<div className=" grid place-items-center">
				<Hilly />
			</div>

			{/* <Image
					src={Hillz}
					className="w-full absolute"
					alt="My Picture"
				/> */}
		</section>
	)
}
