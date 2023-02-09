import Modal from "./comp/Modal";
import { moviesData } from "./comp/data";
import { useState } from "react";

function Pokus() {
  const [movies, setMovies] = useState(moviesData);
  const [showNotification, setShowNotification] = useState(false);
  const [movieName, setMovieName] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if(movieName){
    setShowNotification(true);
    } else{
      setShowNotification(false);
    }
  };

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">

{showNotification && <Modal />}

      <form action="" onSubmit={submitForm} className="border-b-4 mb-8">
        <input className="border-2 border-emerald-500"
          type="text"
          placeholder="prvni"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input type="submit" value="Přidat" className="border-2 hover:text-xl ease-in-out duration-300 "/>
      </form>
      <div>
        {movies.map((movie) => {
          const { id, title } = movie;
          return <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        })}
         
      </div>
    </section>
  );
}

export default Pokus;
