import * as React from 'react'

import {
  AspectRatio,
  Box,
  Button,
  Heading,
  Text,
  HStack,
  useDisclosure,
  Icon,
} from '@chakra-ui/react'

import Section from '@/components/marketing/section-wrapper'
import SectionTitle from '@/components/marketing/section-title'

import SEO from '@/components/seo'
import { Testimonials } from '@/components/testimonials'

import { BackgroundGradientRadial } from '@/components/background-gradient-radial'
import { SignupForm } from '@/components/signup-form'
import { FaFigma } from 'react-icons/fa6'
import { ButtonLink } from '@/components/link'
import { FiArrowRight } from 'react-icons/fi'

const FigmaPage = () => {
  return (
    <Box>
      <SEO
        title="Saas UI"
        description="Professionally crafted Figma design system for designing
        beautiful products at any scale."
        titleTemplate="%s - Figma Design System"
      />
      <BackgroundGradientRadial
        top="-30%"
        bottom="auto"
        opacity="0.1"
        _dark={{ opacity: 0.5 }}
        pointerEvents="none"
      />
      <Box mb={8} w="full" position="relative" overflow="hidden" zIndex="1">
        <Figma />

        <FigmaEmbed />

        <Testimonials />
      </Box>
    </Box>
  )
}

const Figma = () => {
  const figma = useDisclosure()

  return (
    <Section id="pricing" pos="relative" innerWidth="container.xl" py="20">
      <Box zIndex="2" pos="relative">
        <SectionTitle
          title="Saas UI Figma Kit"
          description={
            <>
              <Text fontSize="xl" mb="12" color="muted">
                Professionally crafted Figma design system for <br /> designing
                beautiful products at any scale.
              </Text>
            </>
          }
          pt={{ base: '8', lg: '20' }}
          sx={{ mb: 0, textAlign: 'center' }}
        />

        <HStack justifyContent="center">
          <ButtonLink
            href="/pricing"
            variant="primary"
            size="lg"
            leftIcon={<FaFigma />}
          >
            Figma Pro early access
          </ButtonLink>
          <ButtonLink
            size="lg"
            href="https://www.figma.com/community/file/1257658419283927894"
            target="_blank"
            variant="outline"
            borderColor="blackAlpha.400"
            _dark={{
              borderColor: 'whiteAlpha.400',
            }}
            _hover={{
              bg: 'whiteAlpha.200',
            }}
            rightIcon={
              <Icon
                as={FiArrowRight}
                sx={{
                  transitionProperty: 'common',
                  transitionDuration: 'normal',
                  '.chakra-button:hover &': {
                    transform: 'translate(5px)',
                  },
                }}
              />
            }
          >
            Community Library
          </ButtonLink>
        </HStack>

        <SignupForm isOpen={figma.isOpen} onClose={figma.onClose} />
      </Box>
    </Section>
  )
}

const FigmaEmbed = () => {
  return (
    <Box>
      <Heading textAlign="center" size="md" fontWeight="medium" mb="8">
        Free community library
      </Heading>
      <Box position="relative" maxW="container.xl" mx="auto">
        <ButtonLink
          href="https://www.figma.com/community/file/1257658419283927894"
          position="absolute"
          top="4"
          right="4"
          left="auto"
          bottom="auto"
          zIndex="1"
          leftIcon={<FaFigma />}
        >
          Open in Figma
        </ButtonLink>
        <AspectRatio ratio={16 / 9} w="full">
          <Box
            as="iframe"
            objectFit={'cover'}
            rounded="xl"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXsBODCq9lrqBAwReJqikbR%2FSaas-UI-Theme-1.1%3Ftype%3Ddesign%26node-id%3D4228%253A35736%26mode%3Ddesign%26t%3DTHstGvI1X3duAdqr-1"
          ></Box>
        </AspectRatio>
      </Box>
    </Box>
  )
}

export default FigmaPage

export async function getStaticProps() {
  return {
    props: {
      header: {
        position: 'fixed',
        variant: 'dark',
      },
    },
  }
}
