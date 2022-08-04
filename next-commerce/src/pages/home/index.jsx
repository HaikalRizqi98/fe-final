import { Flex, useToast, Center, Box, Text } from "@chakra-ui/react";
import ContentCard from "../../components/contentcard";
import NavbarComponent from "../../components/Navbar";
import { useFormik } from "formik";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { axiosInstance } from "../../lib/api";
import { Avatar } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import { InfiniteScroll } from "react-infinite-scroller";

export default function home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const userSelector = useSelector((state) => state.auth);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();
  const [load, setload] = useState();

  const inputFileRef = useRef(null);

  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      caption: "",
      location: "",
    },
    onSubmit: async () => {
      const formData = new FormData();
      const { caption, location } = formik.values;

      formData.append("caption", caption);
      formData.append("location", location);
      formData.append("user_id", 1);
      formData.append("image", selectedFile);

      try {
        await axiosInstance.post("/postimage/mongo", formData).then(() => {
          toast({
            title: "Post has been added",
            status: "success",
            isClosable: true,
          });
        });
      } catch (err) {
        console.log(err);

        toast({
          title: "Error",
          status: "error",
          isClosable: true,
        });
      }
    },
  });

  const [postUser, setPostUser] = useState([]);

  useEffect(() => {
    if (!userSelector?.id) {
      router.push("/");
    }

    //   async function f_postuser() {
    //     try {
    //       const res = await axiosInstance.get("/posts");
    //       setPostUser(res.data.results);
    //     } catch (error) {}
    //   }
    //   f_postuser();
    //   console.log(postUser);
    // }

    setTimeout(() => {
      axiosInstance.get("/posts").then((res) => {
        setPostUser(res.data.results);
      });
      //       setPostUser(res.data.results);
    }, 200);
  }, []);

  useEffect(() => {}, [postUser]);

  const RenderPosts = () => {
    return postUser.map((val, idx) => {
      console.log(val);

      // alert(arrLikes?.length);
      // const liked = val.Likes?.find((a) => {
      //   return a.UserId == userSelector.id;
      // });
      let liked = false;
      const arr = val?.Likes?.map((val2) => {
        return val2.UserId == userSelector.id;
      });

      if (arr.length) {
        liked = true;
      }

      // alert(val.createdAt);

      return (
        <div key={idx}>
          <ContentCard
            userId={userSelector.id}
            username={val.User?.username}
            caption={val.caption}
            img={val.image_url}
            location={val.location}
            likes={val.number_of_likes}
            id={val.id}
            liked={liked}
            createDate={val.createdAt}
          />
        </div>
      );
    });
  };

  return (
    <>
      <NavbarComponent />
      <Box justify="center" align="center">
        <Box borderWidth="1px" h="50px" w="800px" my="10px">
          stories
        </Box>
      </Box>
      <Flex minH={"50vh"} align={"center"} justify={"center"}>
        <Box display="flex">
          <Box>{RenderPosts()}</Box>
          <Box borderWidth="1px" borderRadius="3" h="500px" w="300px">
            <Flex>
              <Avatar src="https://bit.ly/sage-adebayo" />
              <Box ml="3">
                <Text fontWeight="bold">
                  jahseh
                  <Badge ml="1" colorScheme="blue">
                    SWITCH
                  </Badge>
                </Text>
                <Text fontSize="sm">jahseh</Text>
              </Box>
            </Flex>
          </Box>
          {/* <ContentCard /> */}
        </Box>
      </Flex>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={load}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {ContentCard}
      </InfiniteScroll> */}
    </>
  );
}
