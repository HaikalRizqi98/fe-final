import jsCookie from "js-cookie";
import { axiosInstance } from "../../lib/api";
import auth_types from "../reducers/types/auth";
import qs from "qs";

export function userRegister(values, setSubmitting) {
  return async function (dispatch) {
    try {
      let body = {
        email: values.email,
        password: values.password,
        full_name: values.full_name,
        username: values.username,
      };

      console.log(JSON.stringify(body));

      const res = await axiosInstance.post(
        "/users/register",
        qs.stringify(body)
      );

      const userData = res.data.result.user;
      const token = res.data.result.token;

      if (!res.data.result) {
        throw new Error("User not found");
      }

      // const stringifiedUserData = JSON.stringify(userData);

      // console.log(userData);

      jsCookie.set("auth_token", token);
      dispatch({
        type: auth_types.AUTH_LOGIN,
        payload: userData,
      });

      setSubmitting(false);
    } catch (err) {
      console.log(err);

      setSubmitting(false);
    }
  };
}
