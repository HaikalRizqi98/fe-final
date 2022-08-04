import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import jsCookie from "js-cookie";
import auth_types from "../redux/reducers/types/auth";
import { axiosInstance } from "../lib/api";
import { parse } from "qs";
function AuthProvider({ children }) {
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      // const savedUserData = localStorage.getItem("user_data")
      const authorization = jsCookie.get("auth_token");
      if (authorization) {
        // const parsedUserData = JSON.parse(savedUserData);
        const parsedUserData = await axiosInstance.get("/users/refresh-token", {
          headers: {
            authorization,
          },
        });

        console.log(parsedUserData);
        if (parsedUserData) {
          dispatch({
            type: auth_types.AUTH_LOGIN,
            payload: parsedUserData.data.result.user,
          });
        } else {
          dispatch({
            type: auth_types.AUTH_LOGOUT,
          });
        }
      }
      setIsAuthChecked(true);
    }
    fetch();
  }, []);

  if (!isAuthChecked) return <div>Loading...</div>;

  return children;
}

export default AuthProvider;
