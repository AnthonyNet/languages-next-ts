import Modal from "./comp/Modal";
import { moviesData } from "./comp/data";
import { useState } from "react";

function Pokus() {
  const [movies, setMovies] = useState(moviesData);
  const [showNotification, setShowNotification] = useState(false);
  const [movieName, setMovieName] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      <form action="" onSubmit={submitForm} className="border-b-4">
        <input
          type="text"
          placeholder="prvni"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input type="submit" value="Přidat" />
      </form>
      <div>
        {movies.map((movie) => {
          const { id, title } = movie;
          return <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        })}
        ;
      </div>
    </section>
  );
}

export default Pokus;
