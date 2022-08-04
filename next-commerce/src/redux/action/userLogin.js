import jsCookie from "js-cookie";
import { axiosInstance } from "../../lib/api";
import auth_types from "../reducers/types/auth";
import qs from "qs";
import axios from "axios";

export function userLogin(values, setSubmitting, setStatus) {
  return async function (dispatch) {
    try {
      let body = {
        password: values.password,
        username: values.email,
        email: values.email,
      };

      console.log(JSON.stringify(body));

      const res = await axiosInstance.post("/users/login", qs.stringify(body));

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

      // setSubmitting(false);
      setStatus(false);
    } catch (err) {
      console.log(err);
      setStatus(err);

      // setSubmitting(false);
    }
  };
}

// export function userLogin(values, setSubmitting) {
//   return async function (dispatch) {
//     try {
//       let body = {
//         email: values.email,
//         password: values.password,
//         username: values.email,
//         location: "",
//         ip_address: "",
//       };

//       body.ip_address = (
//         await axios.get("https://api.ipify.org/?format=json%22")
//       ).data.ip;

//       body.location = (
//         await axios.get(`https://ipapi.co/${body.ip_address}/json/`)
//       ).data.country_capital;

//       // console.log(JSON.stringify(body));

//       const res = await axiosInstance.post(
//         "/users/login/v2",
//         qs.stringify(body)
//       );

//       const userData = res.data.result.user;
//       const token = res.data.result.token;

//       if (!res.data.result) {
//         throw new Error("User not found");
//       }

//       // const stringifiedUserData = JSON.stringify(userData);

//       // console.log(userData);

//       jsCookie.set("auth_token", token);
//       dispatch({
//         type: auth_types.AUTH_LOGIN,
//         payload: userData,
//       });

//       setSubmitting(false);
//     } catch (err) {
//       console.log(err);

//       setSubmitting(false);
//     }
//   };
// }

// export function userLogin(values, setSubmitting) {
//   return async function (dispatch) {
//     try {
//       const res = await axiosInstance.get("/users", {
//         params: {
//           email: values.email,
//           // password: values.password,
//         },
//       });

//       // console.log(res.data.result);

//       const userData = res.data[0];

//       if (!res.data[0]) {
//         throw new Error("User not found");
//       }

//       if (userData.password !== values.password) {
//         throw new Error("Wrong password");
//       }

//       // const userData = user;
//       const stringifiedUserData = JSON.stringify(userData.email);

//       console.log(userData);

//       jsCookie.set("user_data", stringifiedUserData);
//       dispatch({
//         type: auth_types.AUTH_LOGIN,
//         payload: userData,
//       });

//       setSubmitting(false);
//     } catch (err) {
//       console.log(err);

//       setSubmitting(false);
//     }
//   };
// }
