import { TextEnum } from '@/enums/TextEnum'

export const fonts = {
  Poppins: {
    Bold: 'PoppinsBold',
    Medium: 'PoppinsMedium',
    Regular: 'PoppinsRegular',
  },
}

export const typography = {
  [TextEnum.header1]: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: '32px',
    lineHeight: '38px',
  },
  [TextEnum.paragraph]: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: '12px',
    lineHeight: '16px',
  },
  [TextEnum.label]: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: '16px',
    lineHeight: '24px',
  },
}
