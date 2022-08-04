import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik, useformik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { userRegister } from "../../../redux/action/userRegister";
export default function SignupCard() {
  YupPassword(Yup);
  const [showPassword, setShowPassword] = useState(false);
  const [showRpassword, setShowRpassword] = useState(false);
  const userSelector = useSelector((state) => state.auth);
  const router = useRouter();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      full_name: "",
      username: "",
      password: "",
      email: "",
      repeatpassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("email woi")
        .required("please full fill the email"),
      full_name: Yup.string().required("isi nama anda"),
      username: Yup.string().required("isi username anda"),
      password: Yup.string()
        .required("isi password anda")
        .minLowercase(1, "harus ada 1 huruf kecil")
        .minUppercase(1, "harus ada 1 huruf besar")
        .minSymbols(1, "harus ada 1 symbols")
        .min(8, "minimal 8 karakter"),
      repeatpassword: Yup.string()
        .required("isi sesuai password anda")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),

    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(userRegister(values, formik.setSubmitting));
    },
  });

  useEffect(() => {
    if (userSelector?.id) {
      router.push("/");
    }
  }, [userSelector?.id]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Sign up to see photos and videos from your friends.
            {formik.values.username}
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="full name" isInvalid={formik.errors.full_name}>
                <FormLabel>Full name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => {
                    formik.setFieldValue("full_name", e.target.value);
                  }}
                />
                <FormErrorMessage>{formik.errors.full_name}</FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl
              id="username"
              isRequired
              isInvalid={formik.errors.username}
            >
              <FormLabel>username</FormLabel>
              <Input
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("username", e.target.value);
                }}
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isRequired isInvalid={formik.errors.email}>
              <FormLabel>email</FormLabel>
              <Input
                type="email"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="password"
              isRequired
              isInvalid={formik.errors.password}
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    formik.setFieldValue("password", e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="rpassword"
              isRequired
              isInvalid={formik.errors.repeatpassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showRpassword ? "text" : "password"}
                  onChange={(e) => {
                    formik.setFieldValue("repeatpassword", e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowRpassword((showRpassword) => !showRpassword)
                    }
                  >
                    {showRpassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {formik.errors.repeatpassword}
              </FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                disabled={formik.isValidating}
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/auth/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
