import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(360deg);
    transition: transform 1s ease-in-out;
  }
`

const Logo = () => {
  // const cloud = `/images/cloud/${useColorModeValue('', '-dark')}.png`
  const cloud = `/images/cloud.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={cloud} width={20} height={20} alt="logo" />
          <Text 
            color={useColorModeValue('#022E2B', '#F7F7ED')}
            fontFamily='M PLUS Rounded 1c'
            fontWeight="bold"
            ml={3}>
            Simone Sala  
          </Text>
        </LogoBox>
      </a>
      </Link>
  )
}

export default Logo