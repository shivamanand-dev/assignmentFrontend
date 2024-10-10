import { useState } from "react";
import StyledNavbar from "./StyledNavbar";
import Hamburger from "hamburger-react";
import { theme } from "../../theme/theme";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <StyledNavbar>
      <header className="header wrapper">
        <a href="/" className="logo">
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
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </nav>
      </header>

      {isOpen && (
        <nav className="mob-navbar">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </nav>
      )}
    </StyledNavbar>
  );
}

export default Navbar;
