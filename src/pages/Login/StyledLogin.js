import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.accent};

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .gap {
    margin-bottom: 15px;
  }

  .formContainer {
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    background-color: ${theme.colors.background};
    max-width: 400px;
    width: 100%;

    input,
    select {
      width: 95%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgb(204, 204, 204);
    }
    select {
      width: 100%;
    }

    button {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: none;
      background-color: rgb(0, 123, 255);
      color: rgb(255, 255, 255);
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    button:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.background};
    }
    button:disabled {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.text};
    }
  }
`;

export default StyledLogin;
