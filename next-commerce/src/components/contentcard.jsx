import { useState, useEffect } from "react";
import {
  Icon,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Alert,
} from "@chakra-ui/react";
import {
  FaRegHeart,
  FaRegComment,
  FaHeart,
  FaRegPaperPlane,
} from "react-icons/fa";
// import Comment from "./comment";
import axios from "axios";
import honduras from "../public/honduras-city.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import PeopleLikes from "./likes";
import { Box, Avatar, Text, Divider, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../lib/api";
import qs from "qs";
import moment from "moment";
import EditPost from "./editpost";

// import testing from "assets/images/mobil.jpg";

function ContentCard(props) {
  const [comments, setComments] = useState([]);
  const [displayCommentInput, setDisplayCommentInput] = useState(false);
  const [isLike, setIsLike] = useState(props.liked);
  const [likes, setLikes] = useState(props.likes);
  const toast = useToast();
  const [commentInput, setCommentInput] = useState("");
  const [commentLimit, setCommentLimit] = useState(5);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userSelector = useSelector((state) => state.auth);
  // console.log("contentCard");
  // console.log(userSelector);
  const fetchComments = () => {
    axiosInstance
      .get(`/comments`, {
        params: {
          PostId: props.id,
          limit: commentLimit,
        },
      })
      .then((res) => {
        console.log(res.data.result);
        setComments(res.data.result);
        setCommentLimit(commentLimit + 5);
      });
  };

  const handleCommentInput = (event) => {
    const { value } = event.target;

    setCommentInput(value);
  };

  const handleLike = async () => {
    console.log(userSelector.id);
    let body = {
      PostId: props.id,
      UserId: userSelector.id,
    };
    await axiosInstance.post("/likes", qs.stringify(body)).then((res) => {
      // setComments(res.data);
      console.log("handleLike");
      console.log(res.data);
    });
    setIsLike(!isLike);
  };

  const postNewComment = async () => {
    // const formData = new FormData();
    // const { caption, location } = formik.values;

    // formData.append("UserId", userSelector.id);
    // formData.append("PostId", props.id);
    // formData.append("content", commentInput);

    const formData = {
      UserId: userSelector.id,
      PostId: props.id,
      content: commentInput,
    };

    try {
      console.log(formData);
      await axiosInstance.post("/comments", formData).then(() => {
        setCommentInput("");
        toast({
          title: "comment has been added",
          status: "success",
          isCloseable: true,
        });
      });
    } catch (err) {
      console.log(err);

      toast({
        title: "ERROR",
        status: "error",
        isCloseable: true,
      });
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  async function deletepost() {
    await axiosInstance.delete(`/posts/${props.id}`);
  }

  // Alert(props.createDate);
  return (
    <Box
      borderWidth="1px"
      bg="#ffffff"
      borderRadius="lg"
      maxW="lg"
      paddingY="2"
      marginX="10px"
      mb="15px"
    >
      {/* Card Header */}
      <Box
        paddingX="3"
        paddingBottom="2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex">
          <Avatar
            src="https://cdn130.picsart.com/267150989005201.jpg"
            size="md"
          />
          <Box marginLeft="2">
            <Text fontSize="md" fontWeight="bold">
              {props.username}
            </Text>
            <Text fontSize="sm" color="GrayText">
              {props.location}
            </Text>
          </Box>
        </Box>
        <Box>
          <Box minW={"10px"} ml={"center"}>
            <Menu ml={"center"}>
              <MenuButton>
                <BsThreeDotsVertical />
              </MenuButton>
              <MenuList>
                <a>
                  <MenuItem onClick={onOpen}>Edit Post</MenuItem>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Modal Title</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <EditPost
                          captionEd={props.caption}
                          locationEd={props.location}
                          idEd={props.id}
                        />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </a>
                <MenuItem>Save Post</MenuItem>
                <MenuItem>Cancel</MenuItem>
                <MenuItem>Embed</MenuItem>
                <MenuItem onClick={deletepost}>Delete Post</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>

      {/* Card Media/Content */}
      {/* <Image src={props.img} alt="err" /> */}
      <Image src={props.img} alt="asa"></Image>
      {/* Action Buttons */}
      <Box paddingX="3" paddingY="2" display="flex" alignItems="center">
        {isLike ? (
          <Icon
            boxSize={6}
            as={FaHeart}
            onClick={() => {
              handleLike();
              setLikes(likes - 1);
            }}
          />
        ) : (
          <Icon
            boxSize={6}
            as={FaRegHeart}
            onClick={() => {
              handleLike();
              setLikes(likes + 1);
            }}
          />
        )}
        <Icon
          onClick={() => setDisplayCommentInput(true)}
          marginLeft="4"
          boxSize={6}
          as={FaRegComment}
          sx={{
            _hover: {
              cursor: "pointer",
            },
          }}
        />
      </Box>

      {/* Like Count */}
      <Box paddingX="3">
        <Text fontWeight="bold">{likes} likes</Text>
        <Text fontWeight="bold" fontSize="xs" textColor="gray.500">
          {moment(props.createDate).fromNow()}
          {props.createdDate}
        </Text>
      </Box>

      {/* Caption */}
      <Box paddingX="3">
        <Text display="inline" fontWeight="bold" marginRight="2">
          {props.username}
        </Text>
        <Text display="inline">{props.caption}</Text>
      </Box>
      <Divider my={"10px"}></Divider>
      {/* Comment Section */}
      <Box paddingX="3">
        {/* <Text fontWeight="bold" decoration="underline" marginBottom="2">
          city onfroy
        </Text> */}
        {comments.length > 0 &&
          comments.map((comment) => (
            <Box>
              <Text display="inline" fontWeight="bold" marginRight="2">
                {comment.User.username}
              </Text>
              <Text display="inline">{comment.content}</Text>
            </Box>
          ))}
        {/* Comment Input */}
        {displayCommentInput ? (
          <Box display="flex">
            <Input
              value={commentInput}
              onChange={handleCommentInput}
              marginBottom="2"
              type="text"
              placeholder="Insert a new comment"
              marginRight="4"
            />
            <Icon boxSize={5} marginLeft="4" as={FaRegPaperPlane} />
            <Box
              paddingX="3"
              paddingY="2"
              display="flex"
              alignItems="center"
            ></Box>
            <Button onClick={postNewComment} colorScheme="green">
              Post
            </Button>
          </Box>
        ) : null}

        {/* Comment */}
        {comments.length === 0 ? (
          <Button onClick={fetchComments} size="xs">
            Fetch Comments
          </Button>
        ) : (
          <Button size={"xs"} my="10px" onClick={fetchComments}>
            seemore
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ContentCard;
