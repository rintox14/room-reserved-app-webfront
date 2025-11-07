import { Form, Button, Table } from "react-bootstrap/";
import useUserAdd from "./hooks";
import styles from "./UserAdd.module.css";

const UserAdd = () => {
  const { user, value, handleChange, onSubmit } = useUserAdd();
  return (
    <>
      <h2>ユーザー登録</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>ユーザー名</Form.Label>
          <Form.Control type="text" onChange={handleChange} value={value} />
        </Form.Group>

        <Button
          variant="primary"
          onClick={onSubmit}
          className={styles.buttonContainer}
        >
          リクエスト送信
        </Button>

        {user && (
          <>
            <h2>登録したユーザー</h2>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ユーザー名</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.user_id}</td>
                  <td>{user.user_name}</td>
                </tr>
              </tbody>
            </Table>
          </>
        )}
      </Form>
    </>
  );
};

export default UserAdd;
