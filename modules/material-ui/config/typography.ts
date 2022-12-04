import { Inter } from '@next/font/google'

const ThinInter = Inter({ weight: '100' })
const LightInter = Inter({ weight: '300' })
const RegularInter = Inter({ weight: '400' })
const BoldInter = Inter({ weight: '800' })

console.log(ThinInter)

export const typography = {
	fontFamily: RegularInter.style.fontFamily,
	fontWeightRegular: RegularInter.style.fontWeight,

	h1: {
		fontSize: 38,
		fontWeight: ThinInter.style.fontWeight,
	},

	h2: {
		fontSize: 34,
		fontWeight: RegularInter.style.fontWeight,
	},
}
