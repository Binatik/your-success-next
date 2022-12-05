'use client'

import React, { useEffect } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../modules/material-ui/theme'
import Bar from '../components/Bar'
import '../styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = React.useState(darkTheme)

	useEffect(() => {
		setTheme(darkTheme)
	}, [setTheme])
	return (
		<html lang="ru">
			<head />
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box
						sx={{
							backgroundColor: 'primary.dark',
							display: 'flex',
							flexDirection: 'column',
							minHeight: '10000px',
						}}>
						<header>
							<Bar />
						</header>
						<main className="main">{children}</main>
						<footer>Подвал</footer>
					</Box>
				</ThemeProvider>
			</body>
		</html>
	)
}
