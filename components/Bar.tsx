'use client'

import { Container, Box, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import Svg from './Svg'

export default function Bar() {
	return (
		<Box
			sx={{
				backdropFilter: 'saturate(180%) blur(10px)',
				position: 'fixed',
				width: '100%',
				pt: 2,
				pb: 2,
				left: 0,
				top: 0,
				zIndex: 10,
			}}>
			<Container sx={{ display: 'flex' }}>
				<StyledLink href="/">
					<Stack alignItems="center" direction="row" spacing={0.5}>
						<Typography
							className="typography_hover"
							variant="h1"
							color="primary.light"
							sx={{
								transition: 'color 0.1s',
							}}>
							Твой
						</Typography>
						<Svg
							propsSvg={{
								id: 'logo',
								fontSize: 'large',
								viewBox: '0 0 30 30',
							}}
							propsSX={{
								color: 'primary.light',
							}}
						/>
						<Typography color="secondary.main" variant="h2">
							спех
						</Typography>
					</Stack>
				</StyledLink>
			</Container>
		</Box>
	)
}

const StyledLink = styled(Link)(({ theme, ...props }) => ({
	textDecoration: 'none',
	':hover .typography_hover': {
		color: theme.palette.primary.lightGrey,
	},
}))
