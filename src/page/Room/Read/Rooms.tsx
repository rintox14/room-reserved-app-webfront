import { Form, Button } from "react-bootstrap/";
import useRooms from "./hooks";

const Rooms = () => {
  const {
    roomName,
    capacity,
    handleChangeName,
    handleChangeCapacity,
    onSubmit,
  } = useRooms();
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

export default Rooms;
