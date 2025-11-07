import axios from "axios";
import { useState } from "react";

const useRoomAdd = () => {
  const [roomName, setRoomName] = useState<string>("");
  const [capacity, setCapacity] = useState<number>(0);
  const url = "http://127.0.0.1:8000/rooms";

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRoomName(e.target.value);
  };

  const handleChangeCapacity = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCapacity(Number(e.target.value));
  };

  const onSubmit = () => {
    const params = {
      room_id: Math.floor(Math.random() * 10) + 1,
      room_name: roomName,
      capacity: capacity,
    };

    axios.post(url, params).then((res) => {
      console.log(res);
      return res;
    });
  };

  return {
    roomName,
    capacity,
    handleChangeName,
    handleChangeCapacity,
    onSubmit,
  };
};

export default useRoomAdd;
