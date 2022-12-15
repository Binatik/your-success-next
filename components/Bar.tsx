'use client'

import {
	Container,
	Box,
	Typography,
	IconButton,
	Stack,
	Link as MuiLink,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { AlternateEmail, Telegram, GitHub, DarkMode } from '@mui/icons-material'
import Link from 'next/link'
import SvgPath from './SvgPath'

export default function Bar({
	isChangeTheme,
	setIsChangeTheme,
}: {
	setIsChangeTheme: any
	isChangeTheme: any
}) {
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
									className="social"
									sx={{
										transition: 'color 0.2s',
										color: 'primary.light',
									}}
								/>
							</StyledMuiLink>
							<StyledMuiLink href="#">
								<Telegram
									className="social"
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
									className="social"
									sx={{
										transition: 'color 0.2s',
										color: 'primary.light',
									}}
								/>
							</StyledMuiLink>
							<IconButton
								onClick={() => setIsChangeTheme(!isChangeTheme)}
								sx={{ color: 'secondary.light' }}>
								<DarkMode />
							</IconButton>
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
	':hover .MuiTypography-h1': {
		color: theme.palette.primary.lightGrey,
	},
}))

const StyledMuiLink = styled(MuiLink)(({ theme, ...props }) => ({
	display: 'flex',
	alignItems: 'center',
	':hover .social': {
		color: theme.palette.primary.lightGrey,
	},
}))
