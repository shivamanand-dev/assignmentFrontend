import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledLoading = styled.section`
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: center;
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    animation: rotate 2s linear infinite, pulse 1.5s ease-in-out infinite;
  }

  /* Rotate Animation */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Pulse Animation */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  /* Loading Text Animation */
  .loading-text {
    margin-top: 20px;
    font-size: 1.2em;
    color: ${theme.colors.text};
    animation: blink 1.5s step-start infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export default StyledLoading;
