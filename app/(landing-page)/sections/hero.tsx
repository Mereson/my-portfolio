"use client"
import Image from "next/image"
import { Typography } from "@/ui"
import { ShowWorks } from "../components"
import { FloatingStars } from "@/public"
import SysyemImage from "@/public/assets/images/system.png"
import Stars from "@/public/assets/svgs/stars.svg"
import { useEffect, useRef, useState } from "react"
import { handleParallaxScroll, setTextTyperObserver } from "@/utils"
import clsx from "clsx"
import { useMediaQuery } from "usehooks-ts"

export const Hero = () => {
	const [showTypedText, setShowTypedText] = useState(false)

	const sectionRef = useRef<HTMLElement>(null)
	const middle = useMediaQuery("(max-width: 1273px) and (min-width: 1023px)")

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
		<section
			ref={sectionRef}
			className="grid gap-8 lg:mb-38 relative overflow-hidden"
		>
			<figure className="hidden lg:flex justify-end">
				<Image
					src={SysyemImage}
					className="h-[50.379rem] w-120 xl:w-[40.35rem] left-0 parallax-image-hero"
					alt="My picture"
				/>
			</figure>

			<Image src={Stars} className="absolute" alt="stars" />
			<div
				className={clsx(
					"grid gap-4 lg:absolute place-items-center left-10 bottom-[35%] parallax-text-hero",
					"mt-35 lg:mt-0"
				)}
			>
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
							<span className="max-sm:hidden! awesome-wrapper">
								<span className="max-sm:hidden! awesome">Awesome</span>
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
					customClassName={clsx(
						"max-w-150 w-80 md:w-full leading-[150%]! z-10!",
						middle && "max-w-130!"
					)}
				>
					Premium web development services to help your business stand out.
				</Typography>
				<div className="parallax-cta-hero ">
					<ShowWorks />
				</div>
			</div>
			<FloatingStars num={1} />

			<figure className="flex lg:hidden justify-end">
				<Image
					src={SysyemImage}
					className={clsx(
						"h-70! sm:h-100! md:h-120! w-50! sm:w-70! md:w-100! top-[-80] sm:top-[-150] md:top-[-190] left-10 ",
						"relative "
					)}
					width={200}
					height={280}
					alt="My picture"
				/>
			</figure>

			<Image src={Stars} className="absolute bottom-[30px]" alt="stars" />
		</section>
	)
}
