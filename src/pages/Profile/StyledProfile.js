import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledMovieCard = styled.section`
  .form-container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 5rem auto;
  }

  /* Form Styling */
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .form-group input,
  .form-group select {
    flex-grow: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .edit-icon {
    cursor: pointer;
    font-size: 1.2em;
  }

  /* Submit Button */
  .submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 10px;
  }

  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default StyledMovieCard;
