'use client'

import { Stack, Typography } from '@mui/material'
import Svg from './Svg'

export default function Page() {
	return (
		<Stack direction="row" spacing={2}>
			<Typography color="primary.light">Бизнес</Typography>
			<Svg id="logo" color="primary.light" viewBox="0 0 32 32" />
		</Stack>
	)
}
