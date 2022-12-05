'use client'

import {
	SvgIcon,
	SvgIconPropsColorOverrides,
	SvgIconPropsSizeOverrides,
} from '@mui/material'
import { HTMLAttributes } from 'react'

type id = 'logo'

type OverridableColorUnion =
	| 'inherit'
	| 'action'
	| 'disabled'
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning'

type OverridableSizegUnion = 'inherit' | 'large' | 'medium' | 'small'

interface ISvgProps extends HTMLAttributes<HTMLDivElement> {
	propsSvg: {
		id: id
		viewBox: string
		color?: OverridableColorUnion
		fontSize?: OverridableSizegUnion
	}
	propsSX?: {
		color?: SvgIconPropsColorOverrides
		fontSize?: SvgIconPropsSizeOverrides
		opacity?: number
	}
}
export default function Svg({ propsSvg, propsSX }: ISvgProps) {
	function render() {
		const logo = (
			<>
				<path
					d="M13.5,31c-0.07,0-0.13-0.01-0.2-0.04c-0.21-0.09-0.33-0.31-0.3-0.53l2.5-18
			c0.03-0.22,0.2-0.39,0.42-0.43l13.5-2c0.2-0.03,0.4,0.07,0.51,0.25s0.09,0.4-0.04,0.56l-16,20C13.79,30.93,13.65,31,13.5,31z
			 M16.44,12.94l-2.2,15.83l14.07-17.59L16.44,12.94z"
				/>
				<path
					d="M16,13c-0.11,0-0.22-0.04-0.32-0.11l-13.5-11C2.01,1.74,1.95,1.5,2.05,1.29
			c0.09-0.21,0.31-0.32,0.54-0.28l21.7,3.8c0.19,0.03,0.34,0.17,0.4,0.36c0.05,0.19-0.01,0.38-0.15,0.51l-8.2,7.2
			C16.24,12.96,16.12,13,16,13z M4.3,2.32l11.69,9.52l7.1-6.23L4.3,2.32z"
				/>
				<path
					d="M16,13c-0.24,0-0.46-0.18-0.49-0.43c-0.04-0.27,0.15-0.53,0.42-0.57l13.5-2
			c0.27-0.04,0.53,0.15,0.57,0.42c0.04,0.27-0.15,0.53-0.42,0.57l-13.5,2C16.05,13,16.02,13,16,13z"
				/>
				<path
					d="M16,13c-0.11,0-0.22-0.04-0.32-0.11l-13.5-11C1.97,1.71,1.94,1.4,2.11,1.18
			c0.17-0.21,0.49-0.25,0.7-0.07l13.5,11c0.21,0.17,0.25,0.49,0.07,0.7C16.29,12.94,16.15,13,16,13z"
				/>
				<path
					d="M13.5,31c-0.02,0-0.05,0-0.07,0c-0.27-0.04-0.46-0.29-0.43-0.56l2.5-18
			c0.02-0.12,0.08-0.23,0.17-0.31l8.2-7.2c0.21-0.18,0.52-0.16,0.71,0.05c0.18,0.21,0.16,0.52-0.05,0.71l-8.06,7.08L14,30.57
			C13.96,30.82,13.75,31,13.5,31z"
				/>
				<path
					d="M13.5,31c-0.03,0-0.05,0-0.08-0.01c-0.18-0.03-0.33-0.15-0.39-0.32l-11-29
			C1.97,1.51,2,1.32,2.11,1.18c0.11-0.14,0.3-0.2,0.47-0.17l21.7,3.8c0.1,0.02,0.19,0.06,0.26,0.14l5.3,5.2
			c0.18,0.18,0.2,0.47,0.04,0.67l-16,20C13.79,30.93,13.65,31,13.5,31z M3.28,2.14L13.66,29.5l15.17-18.96l-4.87-4.77L3.28,2.14z"
				/>
			</>
		)

		switch (propsSvg.id) {
			case 'logo':
				return logo
			default:
				const _: never = propsSvg.id
		}
	}

	return (
		<SvgIcon {...propsSvg} sx={{ ...propsSX }}>
			{render()}
		</SvgIcon>
	)
}
