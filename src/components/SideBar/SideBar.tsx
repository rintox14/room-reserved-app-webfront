import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>画面</h2>
      <Nav className="flex-column">
        <Nav.Item>登録</Nav.Item>
        <Nav.Item>
          <Link to="/userAdd" className="nav-link">
            ユーザ登録
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/roomAdd" className="nav-link">
            会議室登録
          </Link>
        </Nav.Item>
        <br />
        <Nav.Item>一覧</Nav.Item>
        <Nav.Item>
          <Link to="/users" className="nav-link">
            ユーザ一覧
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/rooms" className="nav-link">
            会議室一覧
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;
