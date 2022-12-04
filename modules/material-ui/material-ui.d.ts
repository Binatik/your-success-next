import { SimplePaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
	export interface SimplePaletteColorOptions {
		grey?: string
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
