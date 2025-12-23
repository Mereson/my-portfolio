"use client"

import { Typography } from "@/ui"
import { individualWork } from "@/utils"
import clsx from "clsx"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const WorkPage = () => {
	const params = useParams()
	const id = params?.id as string

	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const setVisiblity = () => {
			setVisible(true)
		}

		setVisiblity()
	}, [])

	const workDisplay = individualWork.find((workId) => workId._id === id)

	if (!workDisplay) return <p>Hi there</p>

	return (
		<section
			className={`bg-white p-20`}
		>
			<figure className=" rounded-4xl">
				<Image
					src={workDisplay.picture}
					className="size-fit rounded-4xl shadow-lg bg-[#00000062]"
					alt="work"
				/>
			</figure>
			<Typography
				variant="h3"
				font="genos"
				fontWeight="semi-bold"
				color="secondary"
				customClassName="leading-[130%]! tracking-[1px] m-8 "
			>
				{workDisplay.work}
			</Typography>
		</section>
	)
}

export default WorkPage
