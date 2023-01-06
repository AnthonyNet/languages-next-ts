"use client";

import {useState,  useEffect } from "react";


    /*
    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        return JSON.parse(localStorage.getItem('totalScore'))
    }else{
        return localStorage.setItem('totalScore', JSON.stringify());
    }
}*/

const initLocalStorage = () =>{

    const [phraseArr, setPhraseArr] = useState();

    useEffect(() => {
       if(!phraseArr)(localStorage.setItem('totalScore', JSON.stringify(0)));

        const phrases = JSON.parse(localStorage.getItem("totalScore") || "[]");
        setPhraseArr(phrases);
       

    });
  
      
    /* useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));'
      }, [items]);


    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        return JSON.parse(localStorage.getItem('totalScore'))
    }else{
        return [];
    }*/

   return (<div></div>)
}
export default initLocalStorage;