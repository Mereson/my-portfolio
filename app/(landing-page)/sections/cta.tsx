"use client"
import { FloatingStars } from "@/public"
import { Typography } from "@/ui"
import { handleParallaxScroll } from "@/utils"
import Image from "next/image"
import Stars from "@/public/assets/svgs/stars-cta.svg"
import { useEffect, useRef } from "react"
import clsx from "clsx"
import Link from "next/link"

export const CTA = () => {
	const { mailTo, subject, body } = mailToMe

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
		<section className="h-screen relative overflow-hidden grid bg-[#220F40] w-full place-content-center ">
			<Image
				src={Stars}
				className="absolute top-0 rotate-180 z-1 w-full"
				alt="stars"
			/>
			<div className="z-1">
				<FloatingStars num={1} />
			</div>
			<div className="grid place-items-center gap-8">
				<Typography
					variant="title-l"
					font="genos"
					fontWeight="bold"
					color="white"
					align="center"
					customClassName="max-w-[900px] z-2"
				>
					<span className="bg-[#220F40]"> Let your</span>{" "}
					<span className="bg-[#220F40]"> Website</span>{" "}
					<span className="text-[#E7A03A] "> shine</span>
				</Typography>

				<Link href={`${mailTo}?${subject}&${body}`} className="z-2">
					<Typography
						font="outfit"
						fontWeight="semi-bold"
						customClassName={clsx(
							"bg-[#E7A03A] border rounded-lg w-fit px-5 py-3 cursor-pointer",
							"duration-250 transition-all! ease-in-out hover:border-white hover:text-white! "
						)}
					>
						Get In Touch via email
					</Typography>
				</Link>
			</div>
			<div className="grid place-items-center w-full mt-10 mb-6">
				<hr className="border-[#f4f4f4] w-[40%] z-1" />
			</div>
			<div className="grid place-items-center gap-7 py-4 bg-[#220F40] z-4">
				<Typography
					variant="body-m"
					color="white"
					font="outfit"
					// fontWeight="semi-bold"
					align="center"
					customClassName=""
				>
					Or connect with me on social media
				</Typography>
				<figure className="flex gap-6">
					<div className="size-10 rounded-lg bg-gray-300"></div>
					<div className="size-10 rounded-lg bg-gray-300"></div>
				</figure>
			</div>
		</section>
	)
}

const mailToMe = {
	mailTo: "mailto:ojintachimeremnma@gmail.com",
	subject: "subject=Let's%20Work%20Together",
	body: "body=Hi%20Chimere,%0A%0AI%20saw%20your%20portfolio,%20and%20I'd%20like%20to%20talk%20about...",
}
