import { Avatar, Box, Divider, Link, Text } from "@chakra-ui/react";

export default function PeopleLikes(props) {
  const { Username, Fullname, slImg_Url, UserId } = props;
  return (
    <Box>
      <Box display="flex">
        <Avatar size="md" name="haikal rizqi" />
        <Box ml="40px">
          <Link
            href={"/contentcard/" + props.slUserId}
            style={{ textDecoration: "none" }}
          >
            <Text _hover={{ color: "teal.500" }} fontWeight="bold">
              {props.slUsername}
            </Text>
          </Link>
          <Text fontWeight="semibold">{props.slFullname}</Text>
        </Box>
      </Box>
      <Divider my="10px" />
    </Box>
  );
}
