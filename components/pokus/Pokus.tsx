import Modal from "./comp/Modal";
import { moviesData, MoviesInt } from "./comp/data";
import { useState, useReducer } from "react";
import { log } from "console";



const reducer = (state, action) => {
   console.log(state)
  if (action.type === "ADD_MOVIE") {
    const newMovies = [...state.movies, action.payLoad];
    return {
      ...state,
      movies: newMovies,
      showNotification: true,
      notificationContent: "Film byl přidán",
    };
  }

  if (action.type === "NO_MOVIE_NAME") {
    return {
      ...state,
      showNotification: true,
      notificationContent: "Název filmu je povinný",
    };
  }

  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      showNotification: false,
      notificationContent: "",
    };
  }

  if (action.type === "DELETE_MOVIE") {
    const newMovies = state.movies.filter(
      (movie:any) => movie.id !== action.payLoad
    );
    return {
      ...state,
      movies: newMovies,
      showNotification: true,
      notificationContent: "Film byl smazán",
    };
  }

  return new Error("Neplatná akce");
  //return state
};
  
const defaultState:{
  movies: string[],
  showNotification: boolean,
  notificationContent: string,

} = {
  movies: [],
  showNotification: false,
  notificationContent: "",
};

function Pokus() {
  // const [movies, setMovies] = useState(moviesData);
  // const [showNotification, setShowNotification] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = (e:Event) => {
    e.preventDefault();

    if (movieName) {
      const newMovie = { id: new Date().getTime(), name: movieName };

      dispatch({ type: "ADD_MOVIE", payLoad: newMovie });
    } else {
      dispatch({ type: "NO_MOVIE_NAME" });
    }
    setMovieName("");
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">
      {state.showNotification && (
        <Modal
          notifContent={state.notificationContent}
          closeNotif={closeNotification}
        />
      )}

      <form
        action=""
        onSubmit={submitForm}
        className="flex justify-around border-b-4 mb-8 w-[400px] font-bold"
      >
        <input
          className="border-2 border-emerald-500"
          value={movieName}
          type="text"
          placeholder="Název filmu"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input
          type="submit"
          value="Přidat"
          className="border-2 hover:text-xl ease-in-out duration-300 "
        />
      </form>
      <div>
        {state.movies.map((movie: { id: number; name: string }) => {
          return (
            <div key={movie.id} className="flex w-[200px] justify-between">
              <p className="border-b">{movie.name}</p>
              <button
                className="border-2 bg-orange-100"
                type="button"
                onClick={() =>
                  dispatch({ type: "DELETE_MOVIE", payLoad: movie.id })
                }
              >
                Smazat
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pokus;
