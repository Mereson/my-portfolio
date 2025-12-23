import { easeInOut, type TargetAndTransition } from "framer-motion"

export const getFloatAnimation = (duration = 20, left: number): TargetAndTransition => ({
	x: [0, Math.random() * 500 - left, Math.random() * 500 - 100, 0],
	y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
	rotate: [0, Math.random() * 20 - 10, 0],
	transition: {
		duration,
		repeat: Infinity,
		ease: easeInOut,
	},
})

