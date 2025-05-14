
import { useEffect, useState } from 'react';
import Input from './input'
import Card from './card'
import axios from 'axios';


// const APIURL =
//     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
export default function App() {

const [movie,setmovie]=useState([]);
const [search ,setsearch]=useState("");

const getmovie = async ()=>{
let apiurl;
  if(search==""){
   apiurl="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  }else{
    apiurl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
  }

  axios.get(apiurl).then(
(success)=>{
setmovie(success.data.results)
}
  ).catch(
(error)=>{
console.log(error)
}

  )

  // const response = await fetch(apiurl);
  // const data =await response.json();
  // const finaldata= (data.results)
  // setmovie(data.results)
}

const getsearchname =(moviename)=>{
  setsearch(moviename);
}

useEffect(
  ()=>{
    getmovie()
  },[search]
)




  return (
    <>
    <Input getsearchname={getsearchname}/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
{
  movie.map(
    (moviedata,movieindex)=>{
      return(
        <Card moviedata={moviedata} key={movieindex}/>       
      )
    }
  )
}

    </div>
    </>
  )
}
