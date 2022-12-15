'use client'

import React, { useEffect, useState } from 'react'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../modules/material-ui/theme'
import Bar from '../components/Bar'
import '../styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isChangeTheme, setIsChangeTheme] = useState(true)
	const [theme, setTheme] = useState(darkTheme)

	useEffect(() => {
		const defaultTheme = isChangeTheme ? darkTheme : lightTheme
		console.log(defaultTheme)
		setTheme(defaultTheme)
	}, [isChangeTheme, setIsChangeTheme])
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
							<Bar
								isChangeTheme={isChangeTheme}
								setIsChangeTheme={setIsChangeTheme}
							/>
						</header>
						<main className="main">{children}</main>
						<footer>Подвал</footer>
					</Box>
				</ThemeProvider>
			</body>
		</html>
	)
}
