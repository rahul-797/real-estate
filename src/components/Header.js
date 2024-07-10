import { HiOutlineSelector } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import { FaFacebook, FaGoogle, FaMobileAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Link,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  IconButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Icon,
  Box
} from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileDrawer />
    </>
  );
}

function DesktopHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  return (
    <VStack w="full" p={0} display={["none", "none", "flex"]}>
      <HStack
        w={"full"}
        paddingBottom={2}
        paddingTop={4}
        px={4}
        justify="space-between"
      >
        <HStack spacing={4} justify="flex-start">
          <Image src={"images/logo.png"} h={16} paddingRight={8} />
          <Button variant={"ghost"} colorScheme="teal" isActive={true}>
            Rent
          </Button>
          <Button variant={"ghost"} colorScheme="teal">
            Buy
          </Button>
          <Button variant={"ghost"} colorScheme="teal">
            Sell
          </Button>
          <Button
            variant={"ghost"}
            colorScheme="teal"
            rightIcon={<HiOutlineSelector />}
          >
            Manage property
          </Button>
          <Button
            variant={"ghost"}
            colorScheme="teal"
            rightIcon={<HiOutlineSelector />}
          >
            Resources
          </Button>
        </HStack>
        <HStack>
          <Button variant="outline" colorScheme="teal">
            Sign up
          </Button>
          <Button variant="solid" onClick={onOpen} colorScheme="teal">
            Login
          </Button>
          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay >
          <AlertDialogContent alignItems={"center"} borderRadius={'3xl'}>
            <AlertDialogHeader fontSize='2xl' fontWeight='bold'>
              Login
            </AlertDialogHeader>
            <AlertDialogBody alignItems="center" justifyContent='center' justifyItems={'center'}>
            <Box pb={4}>
            <VStack spacing={4}>
                <Button 
                  leftIcon={<Icon as={FaGoogle} />} 
                  colorScheme="red" 
                  variant="solid"
                  width="100%"
                >
                  Sign in with Google
                </Button>
                <Button 
                  leftIcon={<Icon as={FaFacebook} />} 
                  colorScheme="facebook" 
                  variant="solid"
                  width="100%"
                >
                  Sign in with Facebook
                </Button>
                <Button 
                  leftIcon={<Icon as={MdEmail} />} 
                  colorScheme="blue" 
                  variant="solid"
                  width="100%"
                >
                  Sign in with Email
                </Button>
                <Button 
                  leftIcon={<Icon as={FaMobileAlt} />} 
                  colorScheme="teal" 
                  variant="solid"
                  width="100%"
                >
                  Sign in with Mobile Number
                </Button>
                <Text pt={4}>
                  Don't have an account?{' '}
                  <Link color="teal.500" href="#">
                    Create Account
                  </Link>
                </Text>
              </VStack>
              </Box>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        </HStack>
      </HStack>
      <Divider shadow={"base"} />
    </VStack>
  );
}

function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display={["flex", "flex", "none"]}>
      <VStack w="full" p={0}>
        <HStack w={"full"} paddingTop={2} px={4} justify="space-between">
          <HStack w={"full"} spacing={8}>
            <Image src={"images/logo.png"} h={8} />
            <Heading>Real Estate</Heading>
          </HStack>
          <IconButton
            variant={"ghost"}
            colorScheme="teal"
            icon={<BiMenuAltRight />}
            fontSize="30px"
            onClick={onOpen}
          ></IconButton>
        </HStack>
        <Divider shadow={"base"} />
      </VStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={"lg"} />
          <DrawerBody>
            <VStack paddingTop={12}>
              <VStack alignItems={"flex-start"}>
                <Button fontSize={"x-large"} variant={"ghost"}>
                  Rent
                </Button>
                <Button fontSize={"x-large"} variant={"ghost"}>
                  Buy
                </Button>
                <Button fontSize={"x-large"} variant={"ghost"}>
                  Sell
                </Button>
                <Button fontSize={"x-large"} variant={"ghost"}>
                  Manage property
                </Button>
                <Button fontSize={"x-large"} variant={"ghost"}>
                  Resources
                </Button>
              </VStack>
              <HStack paddingTop={12}>
                <Button size={"lg"} variant={"outline"} colorScheme="teal">
                  Login
                </Button>
                <Button size={"lg"} colorScheme="teal">
                  Sign up
                </Button>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
