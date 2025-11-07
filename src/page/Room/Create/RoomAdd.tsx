import { Form, Button } from "react-bootstrap/";
import useRoomAdd from "./hooks";

const RoomAdd = () => {
  const {
    roomName,
    capacity,
    handleChangeName,
    handleChangeCapacity,
    onSubmit,
  } = useRoomAdd();
  return (
    <>
      <h2>APIテスト（会議室）</h2>
      <Form.Label>会議室名</Form.Label>
      <Form.Control
        type="text"
        onChange={handleChangeName}
        value={roomName}
      ></Form.Control>
      <Form.Label>定員</Form.Label>
      <Form.Control
        type="text"
        onChange={handleChangeCapacity}
        value={capacity}
      ></Form.Control>
      <Button variant="primary" onClick={onSubmit}>
        リクエスト送信
      </Button>
    </>
  );
};

export default RoomAdd;
