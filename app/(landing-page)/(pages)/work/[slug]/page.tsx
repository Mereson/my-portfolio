"use client"
import { useGetWorkBySlug } from "@/lib/app"
import { Typography } from "@/ui"
import { IndividualWorkProps } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const WorkPage = () => {
	const params = useParams()
	const slug = params?.slug as string

	const { data, isLoading } = useGetWorkBySlug(slug)

	const work: IndividualWorkProps = data?.data ? data.data : {}

	if (isLoading)
		return (
			<Typography variant="title-xl" font="genos" fontWeight="bold" color="secondary" customClassName="w-full grid place-items-center">
				Loading...
			</Typography>
		)

	return (
		<section className={`bg-white p-20`}>
			<figure className=" rounded-4xl">
				<Image
					src={work.pictureURL}
					width={1280}
					height={719}
					className="size-fit rounded-4xl shadow-lg bg-[#00000062]"
					alt="work"
				/>
			</figure>
			<article className="m-8 mt-12 grid gap-3">
				<Typography
					variant="h3"
					font="genos"
					fontWeight="semi-bold"
					color="secondary"
					customClassName="leading-[130%]! tracking-[1px]"
				>
					{work.work}
				</Typography>
				<Typography
					variant="body-l"
					customClassName="leading-[160%]! tracking-[1px] text-justify! whitespace-pre-line mb-4"
				>
					{work.body}
				</Typography>
				<Typography variant="body-m">
					Link to site:{" "}
					<Link
						href={work.link ? work.link : "#"}
						target="_blank"
						className="text-[#E7A03A] hover:text-[#a14c4c] cursor-pointer transition-colors duration-200 ease-in-out"
					>
						{work.link}
					</Link>
				</Typography>
			</article>
		</section>
	)
}

export default WorkPage
