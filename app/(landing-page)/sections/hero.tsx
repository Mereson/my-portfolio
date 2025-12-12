import Image from "next/image"
import MyPicture from "@/public/assets/images/Chimere_Ojinta.jpg"
import { Typography } from "@/ui"
import { ShowWorks } from "../components"

export const Hero = () => {
	return (
		<section className="mt-24 grid place-items-center gap-8 mb-38">
			<Image src={MyPicture} className="w-140 rounded-4xl" alt="My picture" />
			<div className="grid gap-4">
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
					customClassName="max-w-150 leading-[150%]!"
				>
					Premium web design, development, and SEO services to help your
					business stand out.
				</Typography>
			</div>
			<ShowWorks />
		</section>
	)
}
