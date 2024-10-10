import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledNavbar = styled.section`
  width: 100%;
  padding: 20px 0;
  background: ${theme.colors.secondary};
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    font-weight: 600;
    cursor: default;
  }

  .navbar a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    margin-left: 45px;
    transition: 0.3s;
  }

  .navbar a:hover {
    color: ${theme.colors.primary};
  }

  .menu-icon {
    font-size: 36px;
    color: ${theme.colors.accent};
    display: none;
  }

  @media (max-width: 992px) {
    .header {
      padding: 0 4%;
    }
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .navbar {
      display: none;
    }
    .mob-navbar {
      position: absolute;
      z-index: 1;
      width: 100%;
      background: ${theme.colors.secondary};
      padding-bottom: 2rem;
    }
    .mob-navbar a {
      display: block;
      color: #fff;
      font-size: 18px;
      text-decoration: none;
      margin-left: 45px;
      transition: 0.3s;
      text-align: center;
      padding: 2rem 0;
    }

    .nav-bg {
      position: fixed;
      top: 8.5%;
      left: 0;
      width: 100%;
      height: 295px;
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      z-index: 99;
      display: none;
    }

    .nav-bg.active {
      display: block;
    }
  }
`;

export default StyledNavbar;
