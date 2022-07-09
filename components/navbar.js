import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#181825', '#F7F7ED')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#181825' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#F7F7ED', '#181825')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={'dropdown'}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxWidth="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Scritti
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Progetti
          </LinkItem>
          <LinkItem href="/frammenti" path={path}>
            Frammenti
          </LinkItem>
          <LinkItem href="/biografia" path={path}>
            Biografia
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>

            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Homepage</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Scritti</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Progetti</MenuItem>
                </NextLink>
                <NextLink href="/frammenti" passHref>
                  <MenuItem as={Link}>Frammenti</MenuItem>
                </NextLink>
                <NextLink href="/biografia" passHref>
                  <MenuItem as={Link}>Biografia</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
