
const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://movie-react-16206-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  export default addMovieHandler