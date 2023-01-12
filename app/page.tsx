"use client"

//import {useEffect} from 'react'
import {Navbar, MainPage} from '../sections'
import {useState, useEffect} from 'react'

function Page(){
/*const [setData, setMyData] = useState();
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const asyncData = [];
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
      setMyData([resp.chartName, resp.bpi.EUR.rate]);

      })
      .catch((error) => {console.log(error)});
  }, []);*/
 
   
  //Better put it into InitLocalStorage component
  
 //Set totalScore from localStorage
 /*useEffect(() => {
  localStorage.setItem("totalScore", JSON.stringify([]));
}, []);
*/

  return (
    <div>
    {/*setData && console.log(setData)*/}
        <Navbar />
        <MainPage />
    </div>
  )
}

export default Page