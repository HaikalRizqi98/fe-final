import {
  Button,
  FormControl,
  FormLabel,
  Box,
  Textarea,
  useToast,
  Input,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../lib/api";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import qs from "qs";

export default function EditPost(props) {
  const { captionEd, locationEd, idEd, onclose } = props;
  const [selectFile, setSelectFile] = useState(null);
  const autoRender = useSelector((state) => state.automateRendering);
  const dispatch = useDispatch();
  const router = useRouter();
  const useerSelector = useSelector((state) => state.auth);

  const toast = useToast();

  const imputFileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      caption: `${captionEd}`,
      location: `${locationEd}`,
    },
    onSubmit: async () => {
      const { caption, location } = formik.values;

      try {
        let body = {
          caption,
          location,
        };
        await axiosInstance
          .patch("/posts/" + idEd, qs.stringify(body))
          .then(() => {
            toast({
              title: `post has been edit`,
              status: "success",
              isClosable: true,
            });
          });
      } catch (err) {
        console.log(err);

        toast({
          title: `ERROR`,
          status: "error",
          isClosable: true,
        });
      }
    },
  });

  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        <Box mt="10px">
          <FormControl>
            <FormLabel>caption {formik.values.caption} </FormLabel>
            <Textarea
              placeholder="caption"
              w="400px"
              h="200px"
              onChange={(e) => {
                formik.setFieldValue("caption", e.target.value);
              }}
              defaultValue={captionEd}
            />
          </FormControl>

          <FormControl mt="10px">
            <FormLabel>
              <FormLabel> location {formik.values.location}</FormLabel>
              <Input
                placeholder="Location"
                onChange={(e) => {
                  formik.setFieldValue("location", e.target.value);
                }}
                defaultValue={locationEd}
              />
            </FormLabel>
          </FormControl>
          <Box mt={"17px"} justifyContent="flex-end">
            <Button mr={3} colorScheme="twitter" onClick={formik.handleSubmit}>
              Edit Post
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
