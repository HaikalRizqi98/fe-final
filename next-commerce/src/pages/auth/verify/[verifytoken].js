import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { axiosInstance } from "../../../lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";

export default function verifyAccount() {
  const [verified, setVerified] = useState(false);

  const router = useRouter();
  const { verifytoken } = router.query;

  useEffect(() => {
    async function updateVer() {
      const res = await axiosInstance.patch("/user/verify/" + verifytoken);
      if (res.data) {
        const success = res.data.success;
        console.log(success);
        setVerified(success);
      }
    }
    if (verifytoken) {
      updateVer();
    }
  }, [router.isReady]);

  return (
    <>
      {router.isReady ? (
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            // w={'full'}
            maxW={"2xl"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              {verified ? (
                <>
                  {" "}
                  Your Account Has Been Verified
                  <Icon paddingLeft={2} boxSize={7} as={FaCheck} />
                </>
              ) : (
                <>
                  Invalid Token
                  <Icon paddingLeft={2} boxSize={7} as={BiError} />
                </>
              )}
            </Heading>
          </Stack>
        </Flex>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
