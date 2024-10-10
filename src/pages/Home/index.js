import { useEffect, useState } from "react";
import fetchWrapper from "../../utils/fetchWrapper";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import StyledHome from "./StyledHome";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const body = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };

    fetchWrapper
      .post("https://hoblist.com/api/movieList", body)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });
  }, []);

  return (
    <StyledHome>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="movieCardContainer">
            {data.result.map((movie, index) => {
              return (
                <MovieCard key={movie._id} index={index + 1} data={movie} />
              );
            })}
          </div>
        </>
      )}
    </StyledHome>
  );
}

export default Home;
