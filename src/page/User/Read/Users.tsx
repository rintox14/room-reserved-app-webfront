import { Button, Table } from "react-bootstrap/";
import useUsers from "./hooks";
import { useEffect } from "react";
import styles from "./Users.module.css";

const Users = () => {
  const { users, activate, toUserAdd } = useUsers();

  useEffect(() => {
    activate();
  }, []);

  return (
    <>
      <h2>ユーザー一覧</h2>
      <Table
        border={1}
        style={{ margin: "0 auto", textAlign: "left", width: "80%" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.user_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        onClick={toUserAdd}
        className={styles.buttonContainer}
      >
        ユーザー追加
      </Button>
    </>
  );
};

export default Users;
