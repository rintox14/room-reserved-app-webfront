import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Users from "./page/User/Read/Users";
import Rooms from "./page/Room/Read/Rooms";
import UserAdd from "./page/User/Create/UserAdd";
import RoomAdd from "./page/Room/Create/RoomAdd";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/userAdd" element={<UserAdd />} />
          <Route path="/roomAdd" element={<RoomAdd />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
