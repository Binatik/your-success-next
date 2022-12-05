'use client'

import { Container, Box, Typography, Stack, Link as MuiLink } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AlternateEmail, Telegram, GitHub } from '@mui/icons-material'
import Link from 'next/link'
import SvgPath from './SvgPath'

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
				<Stack
					width="100%"
					alignItems="center"
					justifyContent="space-between"
					direction="row">
					<StyledLink href="/">
						<Stack alignItems="center" direction="row" spacing={0.5}>
							<Typography
								className="typography_hover"
								variant="h1"
								color="primary.light"
								sx={{
									transition: 'color 0.2s',
								}}>
								Твой
							</Typography>
							<SvgPath
								propsSvg={{
									idvector: 'logo',
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
					<Box>
						<Stack spacing={1} direction="row">
							<StyledMuiLink href="#">
								<AlternateEmail
									className="social_hover"
									sx={{
										transition: 'color 0.2s',
										color: 'primary.light',
									}}
								/>
							</StyledMuiLink>
							<StyledMuiLink href="#">
								<Telegram
									className="social_hover"
									sx={{
										transition: 'color 0.2s',
										color: 'primary.light',
									}}
								/>
							</StyledMuiLink>
							<StyledMuiLink
								href="https://github.com/Binatik"
								target="_blank">
								<GitHub
									className="social_hover"
									sx={{
										transition: 'color 0.2s',
										color: 'primary.light',
									}}
								/>
							</StyledMuiLink>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

const StyledLink = styled(Link)(({ theme, ...props }) => ({
	display: 'block',
	textDecoration: 'none',
	':hover .typography_hover': {
		color: theme.palette.primary.lightGrey,
	},
}))

const StyledMuiLink = styled(MuiLink)(({ theme, ...props }) => ({
	display: 'flex',
	alignItems: 'center',
	':hover .social_hover': {
		color: theme.palette.primary.lightGrey,
	},
}))
