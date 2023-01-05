import {useState,  useEffect } from "react";

const initLocalStorage = () =>{


      
    /* useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);
*/

   
    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        return JSON.parse(localStorage.getItem('totalScore'))
    }else{
        return [];
    }

   
}
export default initLocalStorage;