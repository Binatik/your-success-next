import { createTheme } from '@mui/material/styles'
import { Inter } from '@next/font/google'

const lightInter = Inter({ weight: '300' })
const RegularInter = Inter({ weight: '400' })
const BoldInter = Inter({ weight: '800' })

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#787f85',
			grey: '#16181a',
			dark: '#000000',
			light: '#ffffff',
		},
		secondary: {
			main: '#e12df7',
			light: '#0072f5',
		},
	},
	typography: {
		fontFamily: RegularInter.style.fontFamily,
		fontWeightRegular: RegularInter.style.fontWeight,
	},
})

export const lightTheme = createTheme({
	// palette: {
	// 	primary: {
	// 		main: '#787f85',
	// 		grey: '#16181a',
	// 		dark: '#000000',
	// 		light: '#ffffff',
	// 	},
	// 	secondary: {
	// 		main: '#e12df7',
	// 		light: '#0072f5',
	// 	},
	// },
	typography: {},
})
