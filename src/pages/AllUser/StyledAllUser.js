import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledAllUser = styled.section`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  button {
    padding: 5px 10px;
    border: none;
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
  }

  button:hover {
    background-color: #218838;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .form-group {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .form-group input,
  .form-group select {
    flex-grow: 1;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-left: 1rem;
  }
`;

export default StyledAllUser;
