'use client'

import { Box } from '@mui/material'
import SvgPath from '../components/SvgPath'

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
				<SvgPath
					propsSvg={{
						idvector: 'logo',
						viewBox: '0 0 35 35',
					}}
					propsSX={{
						fontSize: '1000px',
						color: 'secondary.main',
						opacity: 0.2,
					}}
				/>
			</Box>
		</Box>
	)
}
