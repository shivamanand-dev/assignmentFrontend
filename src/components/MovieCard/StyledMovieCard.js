import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledMovieCard = styled.section`
  padding: 2rem 0;
  .movie-card {
    display: flex;
    margin: 0 auto;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    /* width: 100%; */
    max-width: 600px;
    cursor: pointer;
  }

  /* Ranking Number */
  .rank {
    font-size: 2em;
    color: red;
    margin-right: 20px;
  }

  /* Movie Poster */
  .poster img {
    width: 100px;
    height: 150px;
    border-radius: 5px;
  }

  /* Movie Details */
  .details {
    margin-left: 20px;
    flex-grow: 1;
  }

  .details h2 {
    margin: 0;
    font-size: 1.5em;
    color: #333;
  }

  .details p {
    margin: 5px 0;
    color: #666;
  }

  /* Like/Dislike Styling */
  .actions {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .like,
  .dislike {
    /* display: flex; */
    align-items: center;
    margin: 0 10px;
    font-size: 1.2em;
    color: green;
    cursor: pointer;
    p {
      margin: 0;
      text-align: center;
    }
  }

  .dislike {
    color: red;
  }

  
@media screen and (max-width: 768px) {
  .rank{
    display: none;
  }
  .actions{
    flex-direction: column;
  }
  .details{
    margin-left: 10px;
  }
}
`;

export default StyledMovieCard;
