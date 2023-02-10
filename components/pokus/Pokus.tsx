import Modal from "./comp/Modal";
import { moviesData } from "./comp/data";
import { useState, useReducer } from "react";
import { log } from "console";



const reducer = (state,action) =>{
 // console.log(state, action)
if(action.type === "ADD_MOVIE"){
  const newMovies = [...state.movies, action.payLoad]
  return {
    ...state,
      movies: newMovies,
      showNotification: true,
      notificationContent: "Film byl přidán"
    }
  }

  if(action.type === "NO_MOVIE_NAME"){
    return {
      ...state,
      showNotification: true,
      notificationContent: "Název filmu je povinný"
    }
  }


  return state
}



const defaultState:any = {
  movies: [],
  showNotification: false,
  notificationContent: ""
}

function Pokus() {
 // const [movies, setMovies] = useState(moviesData);
 // const [showNotification, setShowNotification] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = (e) => {
    e.preventDefault();

    if(movieName){
      const newMovie = {id:new Date().getTime(), name:movieName}

      dispatch({type: "ADD_MOVIE", payLoad: newMovie})
    } else{
    dispatch( {type: "NO_MOVIE_NAME"} )
    }
  };

  return (
    <section className="w-screen h-[90vh] flex flex-col items-center justify-center">

{state.showNotification && <Modal notifContent={state.notificationContent} />}

      <form action="" onSubmit={submitForm} className="border-b-4 mb-8">
        <input className="border-2 border-emerald-500"
          type="text"
          placeholder="prvni"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input type="submit" value="Přidat" className="border-2 hover:text-xl ease-in-out duration-300 "/>
      </form>
      <div>
        {state.movies.map((movie) => {
          
          return <div key={movie.id}>
            <p>{movie.name}</p>
          </div>
        })}
         
      </div>
    </section>
  );
}

export default Pokus;
