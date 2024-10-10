import React from "react";
import StyledMovieCard from "./StyledMovieCard";

function MovieCard({ data, index }) {
  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <StyledMovieCard>
      <div className="movie-card">
        {/* <!-- Ranking Number --> */}
        <div className="rank">{index}</div>

        {/* <!-- Movie Poster --> */}
        <div className="poster">
          <img src={data.poster} alt="Movie Poster" />
        </div>

        {/* <!-- Movie Details --> */}
        <div className="details">
          <h2>{data?.title}</h2>
          <p>Genre: {data?.genre}</p>
          <p>Language: {data?.language}</p>
          <p>
            Director:{" "}
            {data?.director?.map((e, i) => (
              <span key={i}>{e}</span>
            ))}
          </p>
          <p>Release Date: {formatDate(data?.releasedDate)}</p>
        </div>

        {/* <!-- Like/Dislike Actions --> */}
        <div className="actions">
          <div className="like">
            <p>{data?.upVoted?.length || 0}</p>
            <p>&#128077;</p>
          </div>
          <div className="dislike">
            <p>{data?.downVoted?.length || 0}</p>
            <p>&#128078;</p>
          </div>
        </div>
      </div>
    </StyledMovieCard>
  );
}

export default MovieCard;
