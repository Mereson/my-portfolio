"use client"
import Image from "next/image"
import MyPicture from "@/public/assets/images/my_picture.png"
import { Typography } from "@/ui"
import { useEffect, useState } from "react"

export const AboutMe = () => {
	const [showTypedText, setShowTypedText] = useState(false)

	useEffect(() => {
		const aboutMe = document.getElementById("about-me")
		if (!aboutMe) return

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]

				if (entry.isIntersecting) {
					setShowTypedText(true)
				} else {
					setShowTypedText(false)
				}
			},
			{
				root: null,
				threshold: 0,
				rootMargin: "-1px",
			}
		)

		observer.observe(aboutMe)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<section className="flex justify-center">
			<section
				id="about-me"
				className="mt-[12.313rem] pb-20 flex gap-20 items-center max-w-[1400px]"
			>
				<Image
					src={MyPicture}
					className="size-152 object-cover object-top rounded-xl"
					alt="My Picture"
				/>
				<article className="grid gap-3">
					<Typography
						variant="h1"
						fontWeight="semi-bold"
						font="genos"
						customClassName="typewriter text-[55px]"
						// align="center"
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
						variant="body-l"
						customClassName="leading-[150%] max-w-[600px]"
					>
						Hi, I&apos;m Chimere Ojinta - a freelancer specializing in premium
						web design, development, and SEO services. I&apos;m passionate about
						creating unique and effective solutions for my clients, and I bring
						a personal touch to every project. Let&apos;s work together to bring
						your vision to life!
					</Typography>
				</article>
			</section>
		</section>
	)
}
