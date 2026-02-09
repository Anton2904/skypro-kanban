import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PopUser({ isOpen }) {
  const { user } = useAuth();
  return (
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <p className="pop-user-set__name">{user?.name || ""}</p>
      <p className="pop-user-set__mail">{user?.login || ""}</p>

      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>

      <button type="button" className="_hover03">
        <Link to="/exit">Выйти</Link>
      </button>
    </div>
  );
}

export default PopUser;
