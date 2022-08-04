import {
  Box,
  Container,
  Flex,
  Avatar,
  HStack,
  Link,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NavBar from "../../components/navbar";

import { useSelector } from "react-redux";
import { AiFillSetting } from "react-icons/ai";
export default function profileuser() {
  const userSelector = useSelector((state) => state.auth);
  return (
    <>
      <NavBar />
      <Flex justifyContent="center">
        <Box justifyContent="center" minW="990px" mt="10px">
          <Box display="flex">
            <Avatar size="2xl" src={""} mr={10} />
            <Box>
              <Text fontSize={"xl"}>{userSelector.username}</Text>
              <Text>post</Text>
            </Box>
            <Box justifyContent={"center"}>
              <Text>haikal</Text>
            </Box>
            <Link href="/">
              <HStack>
                <Box ml="20px" boxShadow={"dark-lg"}>
                  {/* <Button>
                    <Icon color="black" as={AiFillSetting} />
                    Edit your Profile
                  </Button> */}
                </Box>
              </HStack>
            </Link>
          </Box>

          <Box>
            <Tabs align="center">
              <TabList align="center">
                <Tab>Posted</Tab>
                <Tab>Liked</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem w="100%" h="300px" bg="blue.500" />
                    <GridItem w="100%" h="300px" bg="blue.500" />
                    <GridItem w="100%" h="300px" bg="blue.500" />
                    <GridItem w="100%" h="300px" bg="blue.500" />
                    <GridItem w="100%" h="300px" bg="blue.500" />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <p>haikal rizqi</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
