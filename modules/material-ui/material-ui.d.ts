import { SimplePaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
	export interface PaletteColor {
		grey?: string
		lightGrey?: string
	}
}

// import { ThemeOptions } from '@mui/material/styles'

// declare module '@mui/material/styles' {
// 	export interface ThemeOptions {
// 		palette: {
// 			primary?: {
// 				grey?: string
// 			}
// 		}
// 	}
// }
