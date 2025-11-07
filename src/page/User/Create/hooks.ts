import axios from "axios";
import { useState } from "react";
import type { User } from "../type";

const useUserAdd = () => {
  const [value, setValue] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const url = "http://127.0.0.1:8000/users";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    const params = {
      user_name: value,
    };

    axios.post(url, params).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  return {
    user,
    value,
    handleChange,
    onSubmit,
  };
};

export default useUserAdd;
