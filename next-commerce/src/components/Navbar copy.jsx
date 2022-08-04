import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  color,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
// import { Link } from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import jsCookie from "js-cookie";
import auth_types from "../redux/reducers/types/auth";
import React from "react";

// const SubMenu = ['Profile', 'Logout'];

const NavLink = ({ children, path }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("red"),
      color: "white",
    }}
    href={path}
  >
    {children}
  </Link>
);

export default function NavbarComponent() {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const authSelector = useSelector((state) => state.auth);

  const SubMenu = [
    { link: "Edit Profile", path: "/profile", klik: undefined },
    {
      link: "Logout",
      path: "/",
      klik: btnlogout,
    },
  ];

  const Links = [
    { link: "instagram", path: "/" },

    {
      // link: "haikal",
      path: "/profile",
    },
  ];

  function btnlogout() {
    jsCookie.remove("auth_token");

    dispatch({
      type: auth_types.AUTH_LOGOUT,
    });
  }

  return (
    <>
      <Box bg={useColorModeValue("white")} color="black" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((val) => (
                <NavLink key={val} path={val.path}>
                  {val.link}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <InputGroup size={"lg"} maxW="500px">
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>

          {authSelector?.id ? (
            <Flex alignItems={"center"}>
              {/* <NavLink path={"/test_input"}> */}
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                Upload
              </Button>
              {/* </NavLink> */}
              {/* 
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu> */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <Text>{userSelector.username}</Text>
                </MenuButton>
                <MenuList bg="white">
                  {SubMenu.map((val) => (
                    <MenuItem onClick={val.klik}>{val.link}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink key="Login" path="/auth/login">
                Login
              </NavLink>
            </HStack>
          )}
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
