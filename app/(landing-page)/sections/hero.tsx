"use client"
import Image from "next/image"
import { Typography } from "@/ui"
import { ShowWorks } from "../components"
import { FloatingStars } from "@/public"
import SysyemImage from "@/public/assets/images/system.png"
import Stars from "@/public/assets/svgs/stars.svg"
import { useEffect, useRef, useState } from "react"
import { handleParallaxScroll, setTextTyperObserver } from "@/utils"

export const Hero = () => {
	const [showTypedText, setShowTypedText] = useState(false)

	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const observer = setTextTyperObserver(setShowTypedText)
		const handleScroll = () => handleParallaxScroll(section, "--scroll")

		observer.observe(section)
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
			observer.disconnect()
		}
	}, [])

	return (
		<section ref={sectionRef} className=" grid gap-8 mb-38 relative">
			<figure className="flex justify-end">
				<Image
					src={SysyemImage}
					className=" h-[50.379rem] w-[40.35rem]  left-0 parallax-image-hero"
					alt="My picture"
				/>
			</figure>
			<Image src={Stars} className="absolute" alt="stars" />
			<FloatingStars num={1} />
			<div className="grid gap-4 absolute place-items-center left-10 bottom-[35%] parallax-text-hero">
				<Typography
					variant="h1"
					fontWeight="semi-bold"
					font="genos"
					align="center"
					color="white"
				>
					Chimere&nbsp;
					{showTypedText && (
						<>
							<span className="awesome-wrapper">
								<span className="awesome">Awesome</span>
							</span>
						</>
					)}
					&nbsp;Ojinta
				</Typography>
				<Typography
					variant="body-xl"
					font="nunito"
					fontWeight="light"
					color="white"
					align="center"
					customClassName="max-w-150 leading-[150%]! z-10!"
				>
					Premium web development services to help your
					business stand out.
				</Typography>
				<div className="parallax-cta-hero ">
					<ShowWorks />
				</div>
			</div>
		</section>
	)
}
