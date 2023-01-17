import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h1>Super Heroes</h1>
      </Link>
    </header>
  );
};
export default Header;