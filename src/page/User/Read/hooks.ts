import axios from "axios";
import { useState } from "react";
import type { User } from "../type";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const [users, setUsers] = useState<User[] | undefined>([]);
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/users";

  const activate = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  const toUserAdd = () => {
    navigate("/userAdd");
  };

  return {
    users,
    activate,
    toUserAdd,
  };
};

export default useUsers;
