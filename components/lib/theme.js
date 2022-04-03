import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Colors from '../colors'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F7F7ED', '#022E2B')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      }
    }
  },
  Link: {
    baseStyle:props => ({
      color: mode('#022E2B', '#F7F7ED')(props),
      textUnderlineOffset: 3,
      boxShadow: 'none !important'
    })
  }
}

const fonts = {
  heading: "'Inter'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
