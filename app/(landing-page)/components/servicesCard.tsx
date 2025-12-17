"use client"
import { ServicesCardWaves } from "@/public"
import { Typography } from "@/ui"
import { onServicesCardScroll, ServicesProps } from "@/utils"
import clsx from "clsx"
import { useEffect, useRef } from "react"

export const ServicesCard = ({ services }: { services: ServicesProps }) => {
	const cardRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const card = cardRef.current
		if (!card) return

		const handleScroll = () => onServicesCardScroll(card)

		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<section
			ref={cardRef}
			className=" relative overflow-hidden bg-[#d9c4a626] p-12 col-span-1"
		>
			<div
				className={clsx(
					"service-card__reveal absolute inset-0  bg-[#dc9839dc] ",
					"transition-transform duration-150 ease-linear"
				)}
			>
				<ServicesCardWaves />
			</div>
			<article className="grid gap-2 relative z-1 ">
				<Typography
					variant="h4"
					font="genos"
					fontWeight="light"
					customClassName="service-text leading-[130%]! tracking-[1px]!"
				>
					{services.text}
				</Typography>
				<Typography
					font="nunito"
					// color="primary-muted"
					customClassName="service-subtext leading-[180%]! max-w-[21.833rem]"
				>
					{services.subtext}
				</Typography>
			</article>
		</section>
	)
}
