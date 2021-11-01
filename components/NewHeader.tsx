import React from 'react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  InfoIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import { Box, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';

export default function NewHeader() {
  return (
    <Box py={2} width="100%" borderBottom="1px solid rgba(0,0,0,0.1)" mb={3}>
      <Box mx="auto" px={{ base: 1, md: 2, lg: 3 }}>
        <Flex flexWrap="wrap" alignItems="center">
          <LogoText />
          <SearchBar />
          <Icons />
        </Flex>
      </Box>
    </Box>
  );
}

function LogoText() {
  return (
    <Box
      order={{ base: 1, md: 2 }}
      mb={{ base: 1, md: 0 }}
      mt={{ base: 2, md: 0 }}
      px={1}
      flexShrink={{ base: 1, md: 0 }}
      flexBasis={{ md: 'auto' }}
      width={{ base: '100%', md: '50%' }}
      maxW="100%"
      textAlign="center"
    >
      <Heading fontSize={{ base: 'lg', md: 'xl' }}>MIDWIFES ADVICE</Heading>
    </Box>
  );
}

function SearchBar() {
  return (
    <Box
      order={{ base: 3, md: 1 }}
      width={{ base: '100%', md: '25%' }}
      maxW="100%"
      px={1}
      mt={{ base: 1, md: 0 }}
      flexShrink={0}
      flexGrow={{ md: 0 }}
      flexBasis={{ md: 'auto' }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none" h="26px">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input h="26px" type="text" placeholder="Search" />
      </InputGroup>
    </Box>
  );
}

function Icons() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        order={{ base: 2, md: 3 }}
        width={{ base: '100%', md: '25%' }}
        maxW="100%"
        px={1}
        mb={{ base: 2, md: 0 }}
        flexShrink={0}
        flexGrow={{ md: 0 }}
        flexBasis={{ md: 'auto' }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <InfoIcon m={2} />
            <InfoIcon m={2} />
            <InfoIcon m={2} />
          </Box>
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <p>Menu</p>
              <IconButton
                onClick={onClose}
                icon={<CloseIcon w={5} h={5} />}
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
