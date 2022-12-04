'use client'

import { Container, Box, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import Svg from './Svg'

export default function Page() {
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
						<StyledTypography variant="h1">Твой</StyledTypography>
						<StyledSvg
							propsSvg={{
								idSvg: 'logo',
								fontSize: 'large',
								viewBox: '0 0 30 30',
							}}
							propsSX={{
								color: 'primary.light',
							}}
						/>
						<StyledTypography variant="h2">спех</StyledTypography>
					</Stack>
				</StyledLink>
			</Container>
		</Box>
	)
}

const StyledSvg = styled(Svg)(({ theme, ...props }) => ({}))

const StyledTypography = styled(Typography)(({ theme, ...props }) => ({}))

const StyledLink = styled(Link)(({ theme, ...props }) => ({}))
