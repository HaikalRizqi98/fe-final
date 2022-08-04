import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useToast,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import NavbarComponent from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { axiosInstance } from "../../lib/api";
import { useRouter } from "next/router";

export default function UserProfileEdit() {
  const toast = useToast();
  const router = useRouter();
  const userSelector = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      fullName: userSelector.full_name,
      username: userSelector.username,
      bio: userSelector.bio,
    },
    onSubmit: async () => {
      const formData = new FormData();
      const { fullName, bio, username } = formik.values;

      formData.append("full_name", fullName);
      formData.append("username", username);
      formData.append("bio", bio);
      formData.append("user_id", userSelector.id);
      formData.append(
        "image",
        selectedFile ? selectedFile : userSelector.avatar_url
      );
      try {
        await axiosInstance.post("/users/edit-profile", formData).then(() => {
          toast({
            title: "Your Profile has been updated",
            status: "success",
            isCloseable: true,
          });
        });
        router.push("/");
      } catch (err) {
        console.log(err);

        toast({
          title: "ERROR",
          status: "error",
          isCloseable: true,
        });
      }
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    console.log(url);
    setSelectedFile(event.target.files[0]);
  };
  const inputFileRef = useRef(null);
  console.log(JSON.stringify(userSelector));
  return (
    <>
      <NavbarComponent />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            {userSelector.username}
          </Heading>
          <FormControl id="userName">
            {/* <FormLabel>User Icon</FormLabel> */}
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={userSelector.avatar_url}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Input
                  type={"file"}
                  //   display={"none"}
                  onChange={handleFile}
                  accept={"image/png, image/jpg, image/jpeg"}
                  ref={inputFileRef}
                  display={"none"}
                ></Input>
                <Button
                  colorScheme="teal"
                  variant="link"
                  onClick={() => inputFileRef.current.click()}
                >
                  Change Profile Photo
                </Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="fullName" isRequired>
            <FormLabel>Fulll Name</FormLabel>
            <Input
              placeholder="full name"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={formik.values.fullName}
              onChange={(event) =>
                formik.setFieldValue("fullName", event.target.value)
              }
            />
          </FormControl>
          <FormControl id="bio" isRequired>
            <FormLabel>Bio</FormLabel>
            <Input
              placeholder="Bio Data"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={formik.values.bio}
              onChange={(event) =>
                formik.setFieldValue("bio", event.target.value)
              }
            />
          </FormControl>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Username"
              _placeholder={{ color: "gray.500" }}
              type="text"
              value={formik.values.username}
              onChange={(event) =>
                formik.setFieldValue("username", event.target.value)
              }
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"red.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.400"}
              color={"white"}
              w="full"
              _hover={{
                bg: "blue.500",
              }}
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
