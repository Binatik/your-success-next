'use client'

import { Box, Typography } from '@mui/material'
import Svg from '../components/Svg'

export default function Page() {
	return (
		<Box
			sx={{
				height: '500px',
			}}>
			<Box
				sx={{
					position: 'absolute',
					right: 0,
					top: '100px',
				}}>
				<Svg
					propsSvg={{
						idSvg: 'logo',
						viewBox: '0 0 35 35',
					}}
					propsSX={{
						fontSize: '1000px',
						color: 'secondary.main',
						opacity: 0.2,
					}}></Svg>
			</Box>
		</Box>
	)
}
