/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import StyledNavbar from "./StyledNavbar";
import Hamburger from "hamburger-react";
import { theme } from "../../theme/theme";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const user = localStorage.getItem("user");

  const onClickLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <StyledNavbar>
      <header className="header wrapper">
        <a onClick={() => navigateTo("/")} className="logo">
          Logo
        </a>

        <div className="menu-icon">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={theme.colors.accent}
            rounded
          />
        </div>

        <nav className="navbar">
          {!user ? (
            <>
              <a onClick={() => navigateTo("/login")}>Login</a>
              <a onClick={() => navigateTo("/signup")}>Signup</a>
            </>
          ) : (
            <>
              <a onClick={() => navigateTo("/profile")}>Profile</a>
              <a onClick={() => navigateTo("/users")}>Registered User</a>
              <a onClick={onClickLogout} onKeyDown={onClickLogout}>
                Logout
              </a>
            </>
          )}
        </nav>
      </header>

      {isOpen && (
        <nav className="mob-navbar">
          {!user ? (
            <>
              <a onClick={() => navigateTo("/login")}>Login</a>
              <a onClick={() => navigateTo("/signup")}>Signup</a>
            </>
          ) : (
            <>
              <a onClick={() => navigateTo("/profile")}>Profile</a>
              <a onClick={onClickLogout}>Logout</a>
            </>
          )}
        </nav>
      )}
    </StyledNavbar>
  );
}

export default Navbar;
