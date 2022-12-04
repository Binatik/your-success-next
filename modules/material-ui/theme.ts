import { createTheme } from '@mui/material/styles'
import { paletteDark, paletteLight, typography } from './config'

export const darkTheme = createTheme({
	palette: paletteDark,
	typography,
})

export const lightTheme = createTheme({
	palette: paletteLight,
	typography,
})
