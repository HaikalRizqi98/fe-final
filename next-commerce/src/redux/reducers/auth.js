const init_state = {
  id: "",
  username: "",
  email: "",
  full_name: "",
  bio: "",
  avatar_url: "", // ditambahin avatar url sesuai database
};
import auth_types from "./types/auth";
function auth_reducer(state = init_state, action) {
  if (action.type === auth_types.AUTH_LOGIN) {
    // payload ditambah avatar url
    console.log(action.payload);
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      full_name: action.payload.full_name,
      bio: action.payload.bio,
      avatar_url: "http://localhost:2000/users/avatar/" + action.payload.id,
    };
  } else if (action.type === auth_types.AUTH_LOGOUT) {
    return init_state;
  }

  return state;
}

export default auth_reducer;
