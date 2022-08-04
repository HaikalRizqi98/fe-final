import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  InputGroup,
  Icon,
  InputRightAddon,
  useToast,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import jsCookie from "js-cookie";

import qs from "qs";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { userLogin } from "../../../redux/action/userLogin";
import iglogo from "../../../public/instagram.png";
import NextImage from "next/image";
import { axiosInstance } from "../../../lib/api";
import auth_types from "../../../redux/reducers/types/auth";
export default function login() {
  const [passwordView, setPasswordView] = useState(false);
  const [err, setError] = useState("");
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  // const show

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email harus diisi"),
      password: Yup.string().required("password harus diisi"),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        let body = {
          password: values.password,
          username: values.email,
          email: values.email,
        };

        console.log(JSON.stringify(body));

        const res = await axiosInstance.post(
          "/users/login",
          qs.stringify(body)
        );

        const userData = res.data.result.user;
        const token = res.data.result.token;

        if (!res.data.result) {
          throw new Error("User not found");
        }

        jsCookie.set("auth_token", token);
        dispatch({
          type: auth_types.AUTH_LOGIN,
          payload: userData,
        });

        toast({
          status: "success",
          title: "login success",
        });

        formik.setSubmitting(false);
      } catch (err) {
        console.log(err);
        toast({
          status: "error",
          title: "login failed",
        });
        formik.setSubmitting(false);
      }
    },
  });
  console.log("tes");
  console.log(userSelector);

  useEffect(() => {
    if (userSelector?.id) {
      router.push("/");
    }
  }, [userSelector?.id]);

  if (err != "") {
    console.log(JSON.stringify(err.message));
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack align={"center"}>
            {/* <Heading fontSize={"4xl"}> */}
            <NextImage
              src={iglogo}
              alt="instagram"
              width={"250px"}
              height={"90px"}
            />
            {/* </Heading> */}
            <Text fontSize={"lg"} color={"gray.600"}>
              {formik.values.email}
            </Text>
          </Stack>

          <Stack spacing={4} mt={"40px"}>
            <FormControl id="email" isInvalid={formik.errors.email}>
              <Input
                type="email"
                onChange={(event) =>
                  formik.setFieldValue("email", event.target.value)
                }
                placeholder="email address"
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={formik.errors.password}>
              <InputGroup>
                <Input
                  type={passwordView ? "text" : "password"}
                  onChange={(event) =>
                    formik.setFieldValue("password", event.target.value)
                  }
                  placeholder="password"
                />

                <InputRightAddon>
                  <Icon
                    fontSize="xl"
                    onClick={() => setPasswordView(!passwordView)}
                    as={passwordView ? IoMdEye : IoMdEyeOff}
                    sx={{ _hover: { cursor: "pointer" } }}
                  />
                </InputRightAddon>
              </InputGroup>
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                // disabled={formik.isSubmitting}
                onClick={formik.handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log In
              </Button>
              <div className="haikal">
                <div></div>
                <div>OR</div>
                <div></div>
              </div>
              {/* <div className="facebook-btn"> */}
              <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
              >
                <Box boxSize={"25px"}>
                  <Image
                    boxSize="20px"
                    class="facebook-icon"
                    src={
                      "https://kongres-magazine.eu/wp-content/uploads/2017/07/facebook-icon-preview-1.png"
                    }
                    alt="fb"
                  />
                </Box>
                <p class="btn-text">
                  <b>Sign in with facebook</b>
                </p>
                {/* </div> */}
              </Box>
            </Stack>
            <Box align="center">
              <Text> Forgot Password? </Text>
            </Box>
          </Stack>
        </Box>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack align={"center"}>
            <Text fontSize={"xl"} color={"gray"} align={"center"}>
              Dont have an account{" "}
              <Link color={"blue.400"} href="/auth/register">
                register
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
